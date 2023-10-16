"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TypeGamesNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_TypeGamesNullableFilter_1 = require("../inputs/NestedEnumEnum_TypeGamesNullableFilter");
const NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_TypeGamesNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let EnumEnum_TypeGamesNullableWithAggregatesFilter = exports.EnumEnum_TypeGamesNullableWithAggregatesFilter = class EnumEnum_TypeGamesNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1.NestedEnumEnum_TypeGamesNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1.NestedEnumEnum_TypeGamesNullableWithAggregatesFilter)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter)
], EnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumEnum_TypeGamesNullableWithAggregatesFilter = EnumEnum_TypeGamesNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_TypeGamesNullableWithAggregatesFilter", {})
], EnumEnum_TypeGamesNullableWithAggregatesFilter);
