"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyMatchArgs_1 = require("./args/CreateManyMatchArgs");
const Match_1 = require("../../../models/Match");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyMatchResolver = exports.CreateManyMatchResolver = class CreateManyMatchResolver {
    async createManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMatchArgs_1.CreateManyMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyMatchResolver.prototype, "createManyMatch", null);
exports.CreateManyMatchResolver = CreateManyMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], CreateManyMatchResolver);
