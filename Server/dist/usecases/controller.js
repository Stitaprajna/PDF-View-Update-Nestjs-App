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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../domain/service");
const fs_1 = require("fs");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
let DatabaseController = exports.DatabaseController = class DatabaseController {
    constructor(databaseservice) {
        this.databaseservice = databaseservice;
    }
    getFile() {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'PDF-View-Update-Nestjs-App/Server/src/example.pdf'));
        console.log('file read');
        return new common_1.StreamableFile(file);
    }
    uploadFile(file) {
        console.log(file);
        console.log('sucess');
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
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DatabaseController.prototype, "uploadFile", null);
exports.DatabaseController = DatabaseController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [service_1.DatabaseService])
], DatabaseController);
//# sourceMappingURL=controller.js.map