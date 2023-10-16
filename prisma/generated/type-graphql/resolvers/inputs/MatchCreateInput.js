"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_StatePlay_1 = require("../../enums/Enum_StatePlay");
const Enum_TypeGames_1 = require("../../enums/Enum_TypeGames");
let MatchCreateInput = exports.MatchCreateInput = class MatchCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "gameSite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "commentHost", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MatchCreateInput.prototype, "dateAndTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchCreateInput.prototype, "maxPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MatchCreateInput.prototype, "currentPlayers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_StatePlay_1.Enum_StatePlay, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "statePlay", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_TypeGames_1.Enum_TypeGames, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MatchCreateInput.prototype, "typeGames", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MatchCreateInput.prototype, "createdAt", void 0);
exports.MatchCreateInput = MatchCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MatchCreateInput", {})
], MatchCreateInput);
