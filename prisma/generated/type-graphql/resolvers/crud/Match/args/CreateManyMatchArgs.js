"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMatchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MatchCreateManyInput_1 = require("../../../inputs/MatchCreateManyInput");
let CreateManyMatchArgs = exports.CreateManyMatchArgs = class CreateManyMatchArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MatchCreateManyInput_1.MatchCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMatchArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMatchArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyMatchArgs = CreateManyMatchArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMatchArgs);
