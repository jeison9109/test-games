"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchCreateInput_1 = require("../../../inputs/MatchCreateInput");
const MatchUpdateInput_1 = require("../../../inputs/MatchUpdateInput");
const MatchWhereUniqueInput_1 = require("../../../inputs/MatchWhereUniqueInput");
let UpsertOneMatchArgs = exports.UpsertOneMatchArgs = class UpsertOneMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchWhereUniqueInput_1.MatchWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchWhereUniqueInput_1.MatchWhereUniqueInput)
], UpsertOneMatchArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchCreateInput_1.MatchCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchCreateInput_1.MatchCreateInput)
], UpsertOneMatchArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchUpdateInput_1.MatchUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchUpdateInput_1.MatchUpdateInput)
], UpsertOneMatchArgs.prototype, "update", void 0);
exports.UpsertOneMatchArgs = UpsertOneMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMatchArgs);
