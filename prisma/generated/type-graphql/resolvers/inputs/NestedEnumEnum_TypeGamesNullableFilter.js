"use strict";
var NestedEnumEnum_TypeGamesNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TypeGamesNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let NestedEnumEnum_TypeGamesNullableFilter = exports.NestedEnumEnum_TypeGamesNullableFilter = NestedEnumEnum_TypeGamesNullableFilter_1 = class NestedEnumEnum_TypeGamesNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_TypeGamesNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_TypeGamesNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_TypeGamesNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter)
], NestedEnumEnum_TypeGamesNullableFilter.prototype, "not", void 0);
exports.NestedEnumEnum_TypeGamesNullableFilter = NestedEnumEnum_TypeGamesNullableFilter = NestedEnumEnum_TypeGamesNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_TypeGamesNullableFilter", {})
], NestedEnumEnum_TypeGamesNullableFilter);
