"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumEnum_TypeGamesFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let NullableEnumEnum_TypeGamesFieldUpdateOperationsInput = exports.NullableEnumEnum_TypeGamesFieldUpdateOperationsInput = class NullableEnumEnum_TypeGamesFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumEnum_TypeGamesFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumEnum_TypeGamesFieldUpdateOperationsInput = NullableEnumEnum_TypeGamesFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumEnum_TypeGamesFieldUpdateOperationsInput", {})
], NullableEnumEnum_TypeGamesFieldUpdateOperationsInput);
