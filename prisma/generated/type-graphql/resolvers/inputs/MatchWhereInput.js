"use strict";
var MatchWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_StatePlayNullableFilter_1 = require("../inputs/EnumEnum_StatePlayNullableFilter");
const EnumEnum_TypeGamesNullableFilter_1 = require("../inputs/EnumEnum_TypeGamesNullableFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let MatchWhereInput = exports.MatchWhereInput = MatchWhereInput_1 = class MatchWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MatchWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MatchWhereInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MatchWhereInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MatchWhereInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], MatchWhereInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], MatchWhereInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatePlayNullableFilter_1.EnumEnum_StatePlayNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatePlayNullableFilter_1.EnumEnum_StatePlayNullableFilter)
], MatchWhereInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_TypeGamesNullableFilter_1.EnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_TypeGamesNullableFilter_1.EnumEnum_TypeGamesNullableFilter)
], MatchWhereInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MatchWhereInput.prototype, "createdAt", void 0);
exports.MatchWhereInput = MatchWhereInput = MatchWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchWhereInput", {})
], MatchWhereInput);
