import { Field, Mina, PublicKey, fetchAccount } from "o1js";

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

// ---------------------------------------------------------------------------------------

import type { MinaMap } from "../../../contracts/src/MinaMap";
import { COUNTRY_CODES } from "./countries";

const state = {
  MinaMap: null as null | typeof MinaMap,
  zkapp: null as null | MinaMap,
  transaction: null as null | Transaction,
};

// ---------------------------------------------------------------------------------------

const functions = {
  setActiveInstanceToBerkeley: async (args: {}) => {
    const Berkeley = Mina.Network(
      "https://api.minascan.io/node/berkeley/v1/graphql"
    );
    console.log("Berkeley Instance Created");
    Mina.setActiveInstance(Berkeley);
  },
  loadContract: async (args: {}) => {
    const { MinaMap } = await import("../../../contracts/build/src/MinaMap.js");
    state.MinaMap = MinaMap;
  },
  compileContract: async (args: {}) => {
    await state.MinaMap!.compile();
  },
  fetchAccount: async (args: { publicKey58: string }) => {
    const publicKey = PublicKey.fromBase58(args.publicKey58);
    return await fetchAccount({ publicKey });
  },
  initZkappInstance: async (args: { publicKey58: string }) => {
    const publicKey = PublicKey.fromBase58(args.publicKey58);
    state.zkapp = new state.MinaMap!(publicKey);
  },
  getCountries: async (args: {}) => {
    const currentNum = await state.zkapp!.countries.get();
    console.log("Current State in zkApp: ", currentNum.toString());
    return JSON.stringify(currentNum.toJSON());
  },

  createUpdateTransaction: async (args: { newCountries: string }) => {
    const newField = Field.fromJSON(JSON.parse(args.newCountries));
    console.log("New Field: ", newField.toJSON());
    const transaction = await Mina.transaction(() => {
      state.zkapp!.setCountries(newField);
    });
    state.transaction = transaction;
  },

  proveUpdateTransaction: async (args: {}) => {
    await state.transaction!.prove();
  },

  getTransactionJSON: async (args: {}) => {
    return state.transaction!.toJSON();
  },
};

// ---------------------------------------------------------------------------------------

export type WorkerFunctions = keyof typeof functions;

export type ZkappWorkerRequest = {
  id: number;
  fn: WorkerFunctions;
  args: any;
};

export type ZkappWorkerReponse = {
  id: number;
  data: any;
};

if (typeof window !== "undefined") {
  addEventListener(
    "message",
    async (event: MessageEvent<ZkappWorkerRequest>) => {
      const returnData = await functions[event.data.fn](event.data.args);

      const message: ZkappWorkerReponse = {
        id: event.data.id,
        data: returnData,
      };
      postMessage(message);
    }
  );
}

console.log("Web Worker Successfully Initialized.");
