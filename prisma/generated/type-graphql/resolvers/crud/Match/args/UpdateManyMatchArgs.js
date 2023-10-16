"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchUpdateManyMutationInput_1 = require("../../../inputs/MatchUpdateManyMutationInput");
const MatchWhereInput_1 = require("../../../inputs/MatchWhereInput");
let UpdateManyMatchArgs = exports.UpdateManyMatchArgs = class UpdateManyMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchUpdateManyMutationInput_1.MatchUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchUpdateManyMutationInput_1.MatchUpdateManyMutationInput)
], UpdateManyMatchArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereInput_1.MatchWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MatchWhereInput_1.MatchWhereInput)
], UpdateManyMatchArgs.prototype, "where", void 0);
exports.UpdateManyMatchArgs = UpdateManyMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMatchArgs);
