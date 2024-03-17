(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(1930);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ MapPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _public_images_countries_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7395);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2023);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);




function MapPage(param) {
    let { visitedCountries, onCountryClick } = param;
    const MATCH_QUERY = "g.countries_svg__entities > g";
    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    const [startPosition, setStartPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function paintCountry(countryGroup) {
        const color = randomcolor__WEBPACK_IMPORTED_MODULE_3___default()({
            seed: countryGroup.id,
            luminosity: "bright"
        });
        countryGroup.querySelectorAll("path").forEach((path)=>{
            path.style.fill = color;
        });
    }
    const listenersCache = {};
    function getCountryListener(countryId) {
        if (listenersCache[countryId]) {
            return listenersCache[countryId];
        }
        listenersCache[countryId] = (e)=>{
            const country = document.getElementById(countryId);
            const countryCode = country.id.replace("countries_svg__", "");
            onCountryClick(countryCode).then((visited)=>{
                if (visited) {
                    paintCountry(country);
                }
            });
        };
        return listenersCache[countryId];
    }
    // Функции для масштабирования
    const zoomIn = ()=>{
        setScale(scale * 1.1);
    };
    const zoomOut = ()=>{
        setScale(scale / 1.1);
    };
    const resetZoom = ()=>{
        setScale(1);
        setPosition({
            x: 0,
            y: 0
        }); // Сброс позиции при сбросе масштаба
    };
    // Обработчики событий мыши
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        setStartPosition({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
        e.preventDefault(); // Предотвратить стандартное поведение
    };
    const handleMouseUp = ()=>{
        setIsDragging(false);
    };
    const handleMouseMove = (e)=>{
        if (isDragging) {
            setPosition({
                x: e.clientX - startPosition.x,
                y: e.clientY - startPosition.y
            });
            e.preventDefault();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            console.log("visitedCountries", visitedCountries);
            visitedCountries.forEach((countryCode)=>{
                document.querySelectorAll("#countries_svg__" + countryCode).forEach((country)=>{
                    paintCountry(country);
                });
            });
            document.querySelectorAll(MATCH_QUERY).forEach((country)=>{
                // @ts-ignore
                country.addEventListener("click", getCountryListener(country.id));
            });
        }, 1000);
        return ()=>{
            document.querySelectorAll(MATCH_QUERY).forEach((country)=>{
                // @ts-ignore
                country.removeEventListener("click", getCountryListener(country.id));
            });
        };
    }, [
        visitedCountries
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute z-10 top-2 left-2 flex space-x-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: zoomIn,
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: "Zoom In"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: zoomOut,
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: "Zoom Out"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: resetZoom,
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: "Reset"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                onMouseDown: handleMouseDown,
                onMouseUp: handleMouseUp,
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseUp,
                className: "w-full h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_images_countries_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MapPage)));


/***/ }),

/***/ 3880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FN: function() { return /* binding */ fieldToCountryCodes; },
/* harmony export */   _b: function() { return /* binding */ countryCodesToField; }
/* harmony export */ });
/* unused harmony export COUNTRY_CODES */
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([o1js__WEBPACK_IMPORTED_MODULE_0__]);
o1js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const COUNTRIES = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IN: "India",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MR: "Mauritania",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NE: "Niger",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SI: "Slovenia",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SY: "Syria",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TL: "East Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Vatican City",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "British Virgin Islands",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    VU: "Vanuatu",
    WS: "Samoa",
    YE: "Yemen",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
};
const COUNTRY_CODES = Object.keys(COUNTRIES).map((code)=>code.toLowerCase());
function fieldToCountryCodes(field) {
    const bigInt = field.toBigInt();
    const bits = bigInt.toString(2).split("").map((bit)=>bit === "1");
    const selectedCountries = [];
    for(let i = 0; i < bits.length; i++){
        if (bits[i]) {
            selectedCountries.push(COUNTRY_CODES[i]);
        }
    }
    return selectedCountries;
}
function countryCodesToField(countryCodes) {
    let bigInt = 0n;
    for(let i = 0; i < countryCodes.length; i++){
        bigInt += 2n ** BigInt(COUNTRY_CODES.indexOf(countryCodes[i]));
    }
    return o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN.from(bigInt);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1173);
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9466);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3896);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(164);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__, o1js__WEBPACK_IMPORTED_MODULE_4__, _countries__WEBPACK_IMPORTED_MODULE_6__]);
([_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__, o1js__WEBPACK_IMPORTED_MODULE_4__, _countries__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








let transactionFee = 0.5;
const ZKAPP_ADDRESS = "B62qiUdL9yGaniq5at8wKhCgcQCbh7jB8ebYWg7KAgzyvViAgVcxEaY";
function Home() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        currentNum: null,
        currentCountries: [],
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false
    });
    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [transactionlink, setTransactionLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // -------------------------------------------------------
    // Do Setup
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function timeout(seconds) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, seconds * 1000);
            });
        }
        (async ()=>{
            if (!state.hasBeenSetup) {
                setDisplayText("Loading web worker...");
                console.log("Loading web worker...");
                const zkappWorkerClient = new _zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
                await timeout(5);
                setDisplayText("Done loading web worker");
                console.log("Done loading web worker");
                await zkappWorkerClient.setActiveInstanceToBerkeley();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = o1js__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey */ .nh.fromBase58(publicKeyBase58);
                console.log("Using key:".concat(publicKey.toBase58()));
                setDisplayText("Using key:".concat(publicKey.toBase58()));
                setDisplayText("Checking if fee payer account exists...");
                console.log("Checking if fee payer account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                console.log("Compiling zkApp...");
                setDisplayText("Compiling zkApp...");
                await zkappWorkerClient.compileContract();
                console.log("zkApp compiled");
                setDisplayText("zkApp compiled...");
                const zkappPublicKey = o1js__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey */ .nh.fromBase58(ZKAPP_ADDRESS);
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                console.log("Getting zkApp state...");
                setDisplayText("Getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const currentNum = await zkappWorkerClient.getCountries();
                console.log("Current state in zkApp: ".concat(currentNum.toString()));
                setDisplayText("");
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    currentNum,
                    currentCountries: (0,_countries__WEBPACK_IMPORTED_MODULE_6__/* .fieldToCountryCodes */ .FN)(currentNum)
                });
            }
        })();
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (state.hasBeenSetup && !state.accountExists) {
                for(;;){
                    setDisplayText("Checking if fee payer account exists...");
                    console.log("Checking if fee payer account exists...");
                    const res = await state.zkappWorkerClient.fetchAccount({
                        publicKey: state.publicKey
                    });
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                }
                setState({
                    ...state,
                    accountExists: true
                });
            }
        })();
    }, [
        state.hasBeenSetup
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onSendTransaction = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        setDisplayText("Creating a transaction...");
        console.log("Creating a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        await state.zkappWorkerClient.createUpdateTransaction(o1js__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .gN.fromBits([
            false,
            false,
            true
        ]));
        setDisplayText("Creating proof...");
        console.log("Creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("Requesting send transaction...");
        setDisplayText("Requesting send transaction...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        setDisplayText("Getting transaction JSON...");
        console.log("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        const transactionLink = "https://berkeley.minaexplorer.com/transaction/".concat(hash);
        console.log("View transaction at ".concat(transactionLink));
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentNum = async ()=>{
        console.log("Getting zkApp state...");
        setDisplayText("Getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getCountries();
        setState({
            ...state,
            currentNum
        });
        console.log("Current state in zkApp: ".concat(currentNum.toString()));
        setDisplayText("");
    };
    // -------------------------------------------------------
    // Add a country code
    const onCodeAdded = async (countryCode)=>{
        const currentCountries = state.currentCountries;
        if (currentCountries.includes(countryCode)) {
            return false;
        }
        const newCountries = [
            ...currentCountries,
            countryCode
        ];
        const newField = (0,_countries__WEBPACK_IMPORTED_MODULE_6__/* .countryCodesToField */ ._b)(newCountries);
        console.log("newField", newField.toString());
        console.log("Setting new state in zkApp...");
        setDisplayText("Setting new state in zkApp...");
        await state.zkappWorkerClient.createUpdateTransaction(newField);
        setDisplayText("Creating proof...");
        console.log("Creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("Requesting send transaction...");
        setDisplayText("Requesting send transaction...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        setState({
            ...state,
            currentCountries: newCountries,
            currentNum: newField
        });
        console.log("New state in zkApp: ".concat(newField.toString()));
        setDisplayText("");
        setDisplayText("Getting transaction JSON...");
        console.log("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        setState({
            ...state,
            currentCountries: newCountries,
            currentNum: newField
        });
        console.log("New state in zkApp: ".concat(newField.toString()));
        setDisplayText("");
        const transactionLink = "https://berkeley.minaexplorer.com/transaction/".concat(hash);
        console.log("View transaction at ".concat(transactionLink));
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setState({
            ...state,
            creatingTransaction: false
        });
        return true;
    };
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            children: "Install Auro wallet here"
        });
        hasWallet = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Could not find a wallet. ",
                auroLinkElem
            ]
        });
    }
    const stepDisplay = transactionlink ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: displayText,
        target: "_blank",
        rel: "noreferrer",
        children: "View transaction"
    }) : displayText;
    let setup = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().start),
        style: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingBottom: "5rem"
        },
        children: [
            stepDisplay,
            hasWallet
        ]
    });
    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        paddingRight: "1rem"
                    },
                    children: "Account does not exist."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Visit the faucet to fund this fee payer account"
                })
            ]
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        mainContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            style: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),
                onClick: onRefreshCurrentNum,
                children: "Get Latest State"
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            state.hasBeenSetup && state.accountExists && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Map__WEBPACK_IMPORTED_MODULE_5__/* .MapPage */ .s, {
                visitedCountries: state.currentCountries,
                onCountryClick: onCodeAdded
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    padding: 0
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        padding: 0
                    },
                    children: [
                        setup,
                        accountDoesNotExist,
                        mainContent
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ZkappWorkerClient; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([o1js__WEBPACK_IMPORTED_MODULE_0__]);
o1js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getCountries() {
        const result = await this._call("getCountries", {});
        return o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN.fromJSON(JSON.parse(result));
    }
    createUpdateTransaction(newCountries) {
        return this._call("createUpdateTransaction", {
            newCountries: newCountries.toJSON()
        });
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(912), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3896:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__2uIek","background":"Home_background__CTycG","backgroundGradients":"Home_backgroundGradients__VUGb4","container":"Home_container__9OuOz","tagline":"Home_tagline__Jw01K","start":"Home_start__ELciH","code":"Home_code__BZK8z","grid":"Home_grid__vo_ES","card":"Home_card__HIlp_","center":"Home_center__Y_rV4","logo":"Home_logo__ZEOng","content":"Home_content__Qnbja"};

/***/ }),

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ }),

/***/ 2023:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        var color = randomColor(options);

        if (seed !== null) {
          options.seed = seed;
        }

        colors.push(color);
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [18,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [46,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [62,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [178, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [257, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [282, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [674,395,888,774,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);