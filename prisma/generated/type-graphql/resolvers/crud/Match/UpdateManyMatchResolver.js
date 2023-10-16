"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyMatchArgs_1 = require("./args/UpdateManyMatchArgs");
const Match_1 = require("../../../models/Match");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyMatchResolver = exports.UpdateManyMatchResolver = class UpdateManyMatchResolver {
    async updateManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMatchArgs_1.UpdateManyMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyMatchResolver.prototype, "updateManyMatch", null);
exports.UpdateManyMatchResolver = UpdateManyMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], UpdateManyMatchResolver);
