"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMatchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneMatchArgs_1 = require("./args/CreateOneMatchArgs");
const Match_1 = require("../../../models/Match");
const helpers_1 = require("../../../helpers");
let CreateOneMatchResolver = exports.CreateOneMatchResolver = class CreateOneMatchResolver {
    async createOneMatch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).match.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneMatchResolver.prototype, "createOneMatch", null);
exports.CreateOneMatchResolver = CreateOneMatchResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Match_1.Match)
], CreateOneMatchResolver);
