"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TypeGamesNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_TypeGamesNullableFilter_1 = require("../inputs/NestedEnumEnum_TypeGamesNullableFilter");
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let EnumEnum_TypeGamesNullableFilter = exports.EnumEnum_TypeGamesNullableFilter = class EnumEnum_TypeGamesNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_TypeGamesNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_TypeGamesNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_TypeGamesNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter)
], EnumEnum_TypeGamesNullableFilter.prototype, "not", void 0);
exports.EnumEnum_TypeGamesNullableFilter = EnumEnum_TypeGamesNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_TypeGamesNullableFilter", {})
], EnumEnum_TypeGamesNullableFilter);
