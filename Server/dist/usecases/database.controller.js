"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../domain/database.service");
const fs_1 = require("fs");
const path_1 = require("path");
let DatabaseController = exports.DatabaseController = class DatabaseController {
    constructor(databaseservice) {
        this.databaseservice = databaseservice;
    }
    getFile() {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'package.json'));
        console.log('file read');
        return new common_1.StreamableFile(file);
    }
    savePDF() {
        return 'Saved PDF File';
    }
};
__decorate([
    (0, common_1.Get)('Load-PDF-File'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", common_1.StreamableFile)
], DatabaseController.prototype, "getFile", null);
__decorate([
    (0, common_1.Post)('Save-PDF-File'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatabaseController.prototype, "savePDF", null);
exports.DatabaseController = DatabaseController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
//# sourceMappingURL=database.controller.js.map