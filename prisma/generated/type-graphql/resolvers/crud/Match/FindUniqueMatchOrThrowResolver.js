"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMatchOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueMatchOrThrowArgs_1 = require("./args/FindUniqueMatchOrThrowArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let FindUniqueMatchOrThrowResolver = exports.FindUniqueMatchOrThrowResolver = class FindUniqueMatchOrThrowResolver {
    async getMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Match_1.Match, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMatchOrThrowArgs_1.FindUniqueMatchOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMatchOrThrowResolver.prototype, "getMatch", null);
exports.FindUniqueMatchOrThrowResolver = FindUniqueMatchOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], FindUniqueMatchOrThrowResolver);
