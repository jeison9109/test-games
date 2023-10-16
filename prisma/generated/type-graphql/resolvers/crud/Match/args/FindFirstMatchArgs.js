"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchOrderByWithRelationInput_1 = require("../../../inputs/MatchOrderByWithRelationInput");
const MatchWhereInput_1 = require("../../../inputs/MatchWhereInput");
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
const MatchScalarFieldEnum_1 = require("../../../../enums/MatchScalarFieldEnum");
let FindFirstMatchArgs = exports.FindFirstMatchArgs = class FindFirstMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereInput_1.MatchWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereInput_1.MatchWhereInput)
], FindFirstMatchArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchOrderByWithRelationInput_1.MatchOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMatchArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], FindFirstMatchArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMatchArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMatchArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchScalarFieldEnum_1.MatchScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMatchArgs.prototype, "distinct", void 0);
exports.FindFirstMatchArgs = FindFirstMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstMatchArgs);
