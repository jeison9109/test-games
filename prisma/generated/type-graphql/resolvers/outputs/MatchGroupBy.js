"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchAvgAggregate_1 = require("../outputs/MatchAvgAggregate");
const MatchCountAggregate_1 = require("../outputs/MatchCountAggregate");
const MatchMaxAggregate_1 = require("../outputs/MatchMaxAggregate");
const MatchMinAggregate_1 = require("../outputs/MatchMinAggregate");
const MatchSumAggregate_1 = require("../outputs/MatchSumAggregate");
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let MatchGroupBy = exports.MatchGroupBy = class MatchGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MatchGroupBy.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchGroupBy.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchGroupBy.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchGroupBy.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MatchGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchCountAggregate_1.MatchCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchCountAggregate_1.MatchCountAggregate)
], MatchGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchAvgAggregate_1.MatchAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchAvgAggregate_1.MatchAvgAggregate)
], MatchGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchSumAggregate_1.MatchSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchSumAggregate_1.MatchSumAggregate)
], MatchGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMinAggregate_1.MatchMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMinAggregate_1.MatchMinAggregate)
], MatchGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchMaxAggregate_1.MatchMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchMaxAggregate_1.MatchMaxAggregate)
], MatchGroupBy.prototype, "_max", void 0);
exports.MatchGroupBy = MatchGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MatchGroupBy", {})
], MatchGroupBy);
