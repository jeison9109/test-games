"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchCreateInput_1 = require("../../../inputs/MatchCreateInput");
let CreateOneMatchArgs = exports.CreateOneMatchArgs = class CreateOneMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MatchCreateInput_1.MatchCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MatchCreateInput_1.MatchCreateInput)
], CreateOneMatchArgs.prototype, "data", void 0);
exports.CreateOneMatchArgs = CreateOneMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneMatchArgs);
