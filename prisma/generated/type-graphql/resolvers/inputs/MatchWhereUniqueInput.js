"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_StatePlayNullableFilter_1 = require("../inputs/EnumEnum_StatePlayNullableFilter");
const EnumEnum_TypeGamesNullableFilter_1 = require("../inputs/EnumEnum_TypeGamesNullableFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const MatchWhereInput_1 = require("../inputs/MatchWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let MatchWhereUniqueInput = exports.MatchWhereUniqueInput = class MatchWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1.MatchWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1.MatchWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchWhereInput_1.MatchWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MatchWhereUniqueInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MatchWhereUniqueInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereUniqueInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereUniqueInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MatchWhereUniqueInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MatchWhereUniqueInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], MatchWhereUniqueInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], MatchWhereUniqueInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatePlayNullableFilter_1.EnumEnum_StatePlayNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatePlayNullableFilter_1.EnumEnum_StatePlayNullableFilter)
], MatchWhereUniqueInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_TypeGamesNullableFilter_1.EnumEnum_TypeGamesNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_TypeGamesNullableFilter_1.EnumEnum_TypeGamesNullableFilter)
], MatchWhereUniqueInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MatchWhereUniqueInput.prototype, "createdAt", void 0);
exports.MatchWhereUniqueInput = MatchWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchWhereUniqueInput", {})
], MatchWhereUniqueInput);
