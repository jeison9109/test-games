"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMatchOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
let FindUniqueMatchOrThrowArgs = exports.FindUniqueMatchOrThrowArgs = class FindUniqueMatchOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], FindUniqueMatchOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueMatchOrThrowArgs = FindUniqueMatchOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMatchOrThrowArgs);
