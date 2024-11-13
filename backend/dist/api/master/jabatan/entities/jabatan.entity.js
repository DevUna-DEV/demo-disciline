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
exports.Jabatan = void 0;
const guru_entity_1 = require("../../../../api/guru/entities/guru.entity");
const typeorm_1 = require("typeorm");
let Jabatan = class Jabatan {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Jabatan = Jabatan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Jabatan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        nullable: false,
    }),
    __metadata("design:type", String)
], Jabatan.prototype, "nama_jabatan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Jabatan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Jabatan.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => guru_entity_1.Guru, (guru) => guru.jabatanId),
    __metadata("design:type", Array)
], Jabatan.prototype, "guru", void 0);
exports.Jabatan = Jabatan = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Jabatan);
//# sourceMappingURL=jabatan.entity.js.map