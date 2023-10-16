"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMatchOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstMatchOrThrowArgs_1 = require("./args/FindFirstMatchOrThrowArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let FindFirstMatchOrThrowResolver = exports.FindFirstMatchOrThrowResolver = class FindFirstMatchOrThrowResolver {
    async findFirstMatchOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMatchOrThrowArgs_1.FindFirstMatchOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMatchOrThrowResolver.prototype, "findFirstMatchOrThrow", null);
exports.FindFirstMatchOrThrowResolver = FindFirstMatchOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], FindFirstMatchOrThrowResolver);
