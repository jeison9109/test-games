"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MatchAvgAggregate = exports.MatchAvgAggregate = class MatchAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchAvgAggregate.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchAvgAggregate.prototype, "currentPlayers", void 0);
exports.MatchAvgAggregate = MatchAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MatchAvgAggregate", {})
], MatchAvgAggregate);
