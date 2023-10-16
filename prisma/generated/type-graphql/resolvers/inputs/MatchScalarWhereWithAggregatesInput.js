"use strict";
var MatchScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumEnum_StatePlayNullableWithAggregatesFilter_1 = require("../inputs/EnumEnum_StatePlayNullableWithAggregatesFilter");
const EnumEnum_TypeGamesNullableWithAggregatesFilter_1 = require("../inputs/EnumEnum_TypeGamesNullableWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let MatchScalarWhereWithAggregatesInput = exports.MatchScalarWhereWithAggregatesInput = MatchScalarWhereWithAggregatesInput_1 = class MatchScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MatchScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_StatePlayNullableWithAggregatesFilter_1.EnumEnum_StatePlayNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_StatePlayNullableWithAggregatesFilter_1.EnumEnum_StatePlayNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_TypeGamesNullableWithAggregatesFilter_1.EnumEnum_TypeGamesNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_TypeGamesNullableWithAggregatesFilter_1.EnumEnum_TypeGamesNullableWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], MatchScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
exports.MatchScalarWhereWithAggregatesInput = MatchScalarWhereWithAggregatesInput = MatchScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchScalarWhereWithAggregatesInput", {})
], MatchScalarWhereWithAggregatesInput);
