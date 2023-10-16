"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableEnumEnum_StatePlayFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEnum_StatePlayFieldUpdateOperationsInput");
const NullableEnumEnum_TypeGamesFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEnum_TypeGamesFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MatchUpdateManyMutationInput = exports.MatchUpdateManyMutationInput = class MatchUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_StatePlayFieldUpdateOperationsInput_1.NullableEnumEnum_StatePlayFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_StatePlayFieldUpdateOperationsInput_1.NullableEnumEnum_StatePlayFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_TypeGamesFieldUpdateOperationsInput_1.NullableEnumEnum_TypeGamesFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_TypeGamesFieldUpdateOperationsInput_1.NullableEnumEnum_TypeGamesFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MatchUpdateManyMutationInput.prototype, "createdAt", void 0);
exports.MatchUpdateManyMutationInput = MatchUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchUpdateManyMutationInput", {})
], MatchUpdateManyMutationInput);
