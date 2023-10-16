"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyMatchArgs_1 = require("./args/DeleteManyMatchArgs");
const Match_1 = require("../../../models/Match");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyMatchResolver = exports.DeleteManyMatchResolver = class DeleteManyMatchResolver {
    async deleteManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMatchArgs_1.DeleteManyMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyMatchResolver.prototype, "deleteManyMatch", null);
exports.DeleteManyMatchResolver = DeleteManyMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], DeleteManyMatchResolver);
