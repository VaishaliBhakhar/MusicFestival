exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"./node_modules/express/index.js\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"./node_modules/helmet/dist/index.js\"));\nvar musicApi = __importStar(__webpack_require__(/*! ./music */ \"./src/music.ts\"));\ndotenv.config();\nif (!process.env.PORT) {\n    console.log(\"Error to get ports\");\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\n// Send message for default URL\napp.get('/', function (req, res) { return res.send('Welcome to NodeJs App using TypeScript'); });\napp.get('/musicTest', musicApi.getMusic);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};