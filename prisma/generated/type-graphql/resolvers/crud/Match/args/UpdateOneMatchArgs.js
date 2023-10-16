"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchUpdateInput_1 = require("../../../inputs/MatchUpdateInput");
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
let UpdateOneMatchArgs = exports.UpdateOneMatchArgs = class UpdateOneMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchUpdateInput_1.MatchUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchUpdateInput_1.MatchUpdateInput)
], UpdateOneMatchArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], UpdateOneMatchArgs.prototype, "where", void 0);
exports.UpdateOneMatchArgs = UpdateOneMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMatchArgs);
