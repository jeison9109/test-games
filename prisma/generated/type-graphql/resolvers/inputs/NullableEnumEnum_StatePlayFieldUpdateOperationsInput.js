"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumEnum_StatePlayFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
let NullableEnumEnum_StatePlayFieldUpdateOperationsInput = exports.NullableEnumEnum_StatePlayFieldUpdateOperationsInput = class NullableEnumEnum_StatePlayFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumEnum_StatePlayFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumEnum_StatePlayFieldUpdateOperationsInput = NullableEnumEnum_StatePlayFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumEnum_StatePlayFieldUpdateOperationsInput", {})
], NullableEnumEnum_StatePlayFieldUpdateOperationsInput);
