"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hw_transport_node_hid_1 = __importDefault(require("@ledgerhq/hw-transport-node-hid"));
const ledger_terra_js_1 = __importStar(require("@terra-money/ledger-terra-js"));
const cli_ux_1 = require("cli-ux");
// path required for Terra Address
const path = [44, 330, 0, 0, 0];
function example() {
    return __awaiter(this, void 0, void 0, function* () {
        // initialize a connection to ledger Terra App
        const transport = yield hw_transport_node_hid_1.default.open("");
        const appTerra = new ledger_terra_js_1.default(transport);
        yield appTerra.initialize();
        // GetVersion returns the Terra App Version, whether the device is locked or not, and if it is on Test Mode
        const response = yield appTerra.getVersion();
        cli_ux_1.cli.log(`App Version ${response.major}.${response.minor}.${response.patch}`);
        cli_ux_1.cli.log(`Device Locked: ${response.device_locked}`);
        cli_ux_1.cli.log(`Test mode: ${response.test_mode}`);
        // Now it is possible to access all commands in the app.
        // GetAddressAndPublicKey returns the public Terra address of the ledger
        const result = yield appTerra.getAddressAndPubKey(path, "terra");
        if (result.return_code !== ledger_terra_js_1.ERROR_CODE.NoError) {
            cli_ux_1.cli.log(`Error [${result.return_code}] ${result.error_message}`);
            return;
        }
        return result;
    });
}
example().then((result) => {
    cli_ux_1.cli.log("Terra Address: ", result.bech32_address);
}, (e) => {
    cli_ux_1.cli.error(e);
});
//# sourceMappingURL=app.js.map