"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const KeenTracking = require("keen-tracking");
const _promise = require("bluebird");
class MagnetKeenTracking extends module_1.Module {
    get moduleName() { return 'keen_tracking'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.insert(new KeenTracking(this.config));
            _promise.promisifyAll(this.app.keen_tracking);
        });
    }
}
exports.default = MagnetKeenTracking;
//# sourceMappingURL=index.js.map