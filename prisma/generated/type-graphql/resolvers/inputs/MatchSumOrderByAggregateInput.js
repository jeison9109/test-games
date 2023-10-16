"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MatchSumOrderByAggregateInput = exports.MatchSumOrderByAggregateInput = class MatchSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchSumOrderByAggregateInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchSumOrderByAggregateInput.prototype, "currentPlayers", void 0);
exports.MatchSumOrderByAggregateInput = MatchSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchSumOrderByAggregateInput", {})
], MatchSumOrderByAggregateInput);
