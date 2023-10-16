"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchWhereInput_1 = require("../../../inputs/MatchWhereInput");
let DeleteManyMatchArgs = exports.DeleteManyMatchArgs = class DeleteManyMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereInput_1.MatchWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereInput_1.MatchWhereInput)
], DeleteManyMatchArgs.prototype, "where", void 0);
exports.DeleteManyMatchArgs = DeleteManyMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMatchArgs);
