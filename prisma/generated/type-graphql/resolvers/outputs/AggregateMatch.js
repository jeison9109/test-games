"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMatch = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchAvgAggregate_1 = require("../outputs/MatchAvgAggregate");
const MatchCountAggregate_1 = require("../outputs/MatchCountAggregate");
const MatchMaxAggregate_1 = require("../outputs/MatchMaxAggregate");
const MatchMinAggregate_1 = require("../outputs/MatchMinAggregate");
const MatchSumAggregate_1 = require("../outputs/MatchSumAggregate");
let AggregateMatch = exports.AggregateMatch = class AggregateMatch {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchCountAggregate_1.MatchCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchCountAggregate_1.MatchCountAggregate)
], AggregateMatch.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchAvgAggregate_1.MatchAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchAvgAggregate_1.MatchAvgAggregate)
], AggregateMatch.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchSumAggregate_1.MatchSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchSumAggregate_1.MatchSumAggregate)
], AggregateMatch.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMinAggregate_1.MatchMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMinAggregate_1.MatchMinAggregate)
], AggregateMatch.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMaxAggregate_1.MatchMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMaxAggregate_1.MatchMaxAggregate)
], AggregateMatch.prototype, "_max", void 0);
exports.AggregateMatch = AggregateMatch = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMatch", {})
], AggregateMatch);
