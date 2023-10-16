"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MatchAvgOrderByAggregateInput = exports.MatchAvgOrderByAggregateInput = class MatchAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchAvgOrderByAggregateInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchAvgOrderByAggregateInput.prototype, "currentPlayers", void 0);
exports.MatchAvgOrderByAggregateInput = MatchAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchAvgOrderByAggregateInput", {})
], MatchAvgOrderByAggregateInput);
