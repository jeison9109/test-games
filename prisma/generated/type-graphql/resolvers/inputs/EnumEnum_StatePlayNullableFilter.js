"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StatePlayNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_StatePlayNullableFilter_1 = require("../inputs/NestedEnumEnum_StatePlayNullableFilter");
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
let EnumEnum_StatePlayNullableFilter = exports.EnumEnum_StatePlayNullableFilter = class EnumEnum_StatePlayNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_StatePlayNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatePlayNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_StatePlayNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatePlayNullableFilter_1.NestedEnumEnum_StatePlayNullableFilter)
], EnumEnum_StatePlayNullableFilter.prototype, "not", void 0);
exports.EnumEnum_StatePlayNullableFilter = EnumEnum_StatePlayNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_StatePlayNullableFilter", {})
], EnumEnum_StatePlayNullableFilter);
