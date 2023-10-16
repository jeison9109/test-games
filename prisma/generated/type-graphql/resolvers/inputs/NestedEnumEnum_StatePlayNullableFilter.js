"use strict";
var NestedEnumEnum_StatePlayNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_StatePlayNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
let NestedEnumEnum_StatePlayNullableFilter = exports.NestedEnumEnum_StatePlayNullableFilter = NestedEnumEnum_StatePlayNullableFilter_1 = class NestedEnumEnum_StatePlayNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_StatePlayNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatePlayNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_StatePlay_1.Enum_StatePlay], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_StatePlayNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_StatePlayNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_StatePlayNullableFilter)
], NestedEnumEnum_StatePlayNullableFilter.prototype, "not", void 0);
exports.NestedEnumEnum_StatePlayNullableFilter = NestedEnumEnum_StatePlayNullableFilter = NestedEnumEnum_StatePlayNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_StatePlayNullableFilter", {})
], NestedEnumEnum_StatePlayNullableFilter);
