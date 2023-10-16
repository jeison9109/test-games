"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneMatchArgs_1 = require("./args/UpdateOneMatchArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let UpdateOneMatchResolver = exports.UpdateOneMatchResolver = class UpdateOneMatchResolver {
    async updateOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Match_1.Match, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMatchArgs_1.UpdateOneMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneMatchResolver.prototype, "updateOneMatch", null);
exports.UpdateOneMatchResolver = UpdateOneMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], UpdateOneMatchResolver);
