"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchAvgOrderByAggregateInput_1 = require("../inputs/MatchAvgOrderByAggregateInput");
const MatchCountOrderByAggregateInput_1 = require("../inputs/MatchCountOrderByAggregateInput");
const MatchMaxOrderByAggregateInput_1 = require("../inputs/MatchMaxOrderByAggregateInput");
const MatchMinOrderByAggregateInput_1 = require("../inputs/MatchMinOrderByAggregateInput");
const MatchSumOrderByAggregateInput_1 = require("../inputs/MatchSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MatchOrderByWithAggregationInput = exports.MatchOrderByWithAggregationInput = class MatchOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchOrderByWithAggregationInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchOrderByWithAggregationInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], MatchOrderByWithAggregationInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchCountOrderByAggregateInput_1.MatchCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchCountOrderByAggregateInput_1.MatchCountOrderByAggregateInput)
], MatchOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchAvgOrderByAggregateInput_1.MatchAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchAvgOrderByAggregateInput_1.MatchAvgOrderByAggregateInput)
], MatchOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMaxOrderByAggregateInput_1.MatchMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMaxOrderByAggregateInput_1.MatchMaxOrderByAggregateInput)
], MatchOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMinOrderByAggregateInput_1.MatchMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMinOrderByAggregateInput_1.MatchMinOrderByAggregateInput)
], MatchOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchSumOrderByAggregateInput_1.MatchSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchSumOrderByAggregateInput_1.MatchSumOrderByAggregateInput)
], MatchOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.MatchOrderByWithAggregationInput = MatchOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchOrderByWithAggregationInput", {})
], MatchOrderByWithAggregationInput);
