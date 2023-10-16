"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMatchArgs_1 = require("./args/AggregateMatchArgs");
const Match_1 = require("../../../models/Match");
const AggregateMatch_1 = require("../../outputs/AggregateMatch");
const helpers_1 = require("../../../helpers");
let AggregateMatchResolver = exports.AggregateMatchResolver = class AggregateMatchResolver {
    async aggregateMatch(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).match.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMatch_1.AggregateMatch, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMatchArgs_1.AggregateMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMatchResolver.prototype, "aggregateMatch", null);
exports.AggregateMatchResolver = AggregateMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], AggregateMatchResolver);
