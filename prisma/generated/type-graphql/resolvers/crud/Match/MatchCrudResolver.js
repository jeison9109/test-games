"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMatchArgs_1 = require("./args/AggregateMatchArgs");
const CreateManyMatchArgs_1 = require("./args/CreateManyMatchArgs");
const CreateOneMatchArgs_1 = require("./args/CreateOneMatchArgs");
const DeleteManyMatchArgs_1 = require("./args/DeleteManyMatchArgs");
const DeleteOneMatchArgs_1 = require("./args/DeleteOneMatchArgs");
const FindFirstMatchArgs_1 = require("./args/FindFirstMatchArgs");
const FindFirstMatchOrThrowArgs_1 = require("./args/FindFirstMatchOrThrowArgs");
const FindManyMatchArgs_1 = require("./args/FindManyMatchArgs");
const FindUniqueMatchArgs_1 = require("./args/FindUniqueMatchArgs");
const FindUniqueMatchOrThrowArgs_1 = require("./args/FindUniqueMatchOrThrowArgs");
const GroupByMatchArgs_1 = require("./args/GroupByMatchArgs");
const UpdateManyMatchArgs_1 = require("./args/UpdateManyMatchArgs");
const UpdateOneMatchArgs_1 = require("./args/UpdateOneMatchArgs");
const UpsertOneMatchArgs_1 = require("./args/UpsertOneMatchArgs");
const helpers_1 = require("../../../helpers");
const Match_1 = require("../../../models/Match");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMatch_1 = require("../../outputs/AggregateMatch");
const MatchGroupBy_1 = require("../../outputs/MatchGroupBy");
let MatchCrudResolver = exports.MatchCrudResolver = class MatchCrudResolver {
    async aggregateMatch(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).match.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMatchOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async matches(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async match(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByMatch(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], MatchCrudResolver.prototype, "aggregateMatch", null);
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
], MatchCrudResolver.prototype, "createManyMatch", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Match_1.Match, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMatchArgs_1.CreateOneMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchCrudResolver.prototype, "createOneMatch", null);
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
], MatchCrudResolver.prototype, "deleteManyMatch", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Match_1.Match, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMatchArgs_1.DeleteOneMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchCrudResolver.prototype, "deleteOneMatch", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Match_1.Match, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMatchArgs_1.FindFirstMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchCrudResolver.prototype, "findFirstMatch", null);
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
], MatchCrudResolver.prototype, "findFirstMatchOrThrow", null);
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
], MatchCrudResolver.prototype, "matches", null);
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
], MatchCrudResolver.prototype, "match", null);
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
], MatchCrudResolver.prototype, "getMatch", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MatchGroupBy_1.MatchGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMatchArgs_1.GroupByMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchCrudResolver.prototype, "groupByMatch", null);
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
], MatchCrudResolver.prototype, "updateManyMatch", null);
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
], MatchCrudResolver.prototype, "updateOneMatch", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Match_1.Match, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneMatchArgs_1.UpsertOneMatchArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchCrudResolver.prototype, "upsertOneMatch", null);
exports.MatchCrudResolver = MatchCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], MatchCrudResolver);
