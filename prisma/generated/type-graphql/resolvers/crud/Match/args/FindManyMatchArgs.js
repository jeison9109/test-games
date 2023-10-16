"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchOrderByWithRelationInput_1 = require("../../../inputs/MatchOrderByWithRelationInput");
const MatchWhereInput_1 = require("../../../inputs/MatchWhereInput");
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
const MatchScalarFieldEnum_1 = require("../../../../enums/MatchScalarFieldEnum");
let FindManyMatchArgs = exports.FindManyMatchArgs = class FindManyMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereInput_1.MatchWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereInput_1.MatchWhereInput)
], FindManyMatchArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchOrderByWithRelationInput_1.MatchOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMatchArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], FindManyMatchArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMatchArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMatchArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarFieldEnum_1.MatchScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMatchArgs.prototype, "distinct", void 0);
exports.FindManyMatchArgs = FindManyMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMatchArgs);
