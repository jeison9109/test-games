"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
let DeleteOneMatchArgs = exports.DeleteOneMatchArgs = class DeleteOneMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], DeleteOneMatchArgs.prototype, "where", void 0);
exports.DeleteOneMatchArgs = DeleteOneMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneMatchArgs);
