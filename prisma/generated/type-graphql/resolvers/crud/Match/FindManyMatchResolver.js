"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyMatchArgs_1 = require("./args/FindManyMatchArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let FindManyMatchResolver = exports.FindManyMatchResolver = class FindManyMatchResolver {
    async matches(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Match_1.Match], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMatchArgs_1.FindManyMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMatchResolver.prototype, "matches", null);
exports.FindManyMatchResolver = FindManyMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], FindManyMatchResolver);
