"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StatePlayNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_StatePlayNullableFilter_1 = require("../inputs/NestedEnumEnum_StatePlayNullableFilter");
const NestedEnumEnum_StatePlayNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_StatePlayNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
let EnumEnum_StatePlayNullableWithAggregatesFilter = exports.EnumEnum_StatePlayNullableWithAggregatesFilter = class EnumEnum_StatePlayNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatePlayNullableWithAggregatesFilter_1.NestedEnumEnum_StatePlayNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatePlayNullableWithAggregatesFilter_1.NestedEnumEnum_StatePlayNullableWithAggregatesFilter)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter)
], EnumEnum_StatePlayNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumEnum_StatePlayNullableWithAggregatesFilter = EnumEnum_StatePlayNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_StatePlayNullableWithAggregatesFilter", {})
], EnumEnum_StatePlayNullableWithAggregatesFilter);
