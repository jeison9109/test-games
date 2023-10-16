"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueMatchArgs_1 = require("./args/FindUniqueMatchArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let FindUniqueMatchResolver = exports.FindUniqueMatchResolver = class FindUniqueMatchResolver {
    async match(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMatchArgs_1.FindUniqueMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMatchResolver.prototype, "match", null);
exports.FindUniqueMatchResolver = FindUniqueMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], FindUniqueMatchResolver);
