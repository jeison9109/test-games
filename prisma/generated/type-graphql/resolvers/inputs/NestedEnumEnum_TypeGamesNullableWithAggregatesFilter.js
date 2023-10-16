"use strict";
var NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TypeGamesNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_TypeGamesNullableFilter_1 = require("../inputs/NestedEnumEnum_TypeGamesNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let NestedEnumEnum_TypeGamesNullableWithAggregatesFilter = exports.NestedEnumEnum_TypeGamesNullableWithAggregatesFilter = NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1 = class NestedEnumEnum_TypeGamesNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_TypeGames_1.Enum_TypeGames], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableWithAggregatesFilter)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_TypeGamesNullableFilter_1.NestedEnumEnum_TypeGamesNullableFilter)
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumEnum_TypeGamesNullableWithAggregatesFilter = NestedEnumEnum_TypeGamesNullableWithAggregatesFilter = NestedEnumEnum_TypeGamesNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_TypeGamesNullableWithAggregatesFilter", {})
], NestedEnumEnum_TypeGamesNullableWithAggregatesFilter);
