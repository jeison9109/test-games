"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchOrderByWithAggregationInput_1 = require("../../../inputs/MatchOrderByWithAggregationInput");
const MatchScalarWhereWithAggregatesInput_1 = require("../../../inputs/MatchScalarWhereWithAggregatesInput");
const MatchWhereInput_1 = require("../../../inputs/MatchWhereInput");
const MatchScalarFieldEnum_1 = require("../../../../enums/MatchScalarFieldEnum");
let GroupByMatchArgs = exports.GroupByMatchArgs = class GroupByMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereInput_1.MatchWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereInput_1.MatchWhereInput)
], GroupByMatchArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchOrderByWithAggregationInput_1.MatchOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMatchArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarFieldEnum_1.MatchScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMatchArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchScalarWhereWithAggregatesInput_1.MatchScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchScalarWhereWithAggregatesInput_1.MatchScalarWhereWithAggregatesInput)
], GroupByMatchArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMatchArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMatchArgs.prototype, "skip", void 0);
exports.GroupByMatchArgs = GroupByMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMatchArgs);
