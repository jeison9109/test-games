"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TypeGames = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_TypeGames;
(function (Enum_TypeGames) {
    Enum_TypeGames["Football"] = "Football";
    Enum_TypeGames["Basketball"] = "Basketball";
    Enum_TypeGames["Volleyball"] = "Volleyball";
})(Enum_TypeGames || (exports.Enum_TypeGames = Enum_TypeGames = {}));
TypeGraphQL.registerEnumType(Enum_TypeGames, {
    name: "Enum_TypeGames",
    description: undefined,
});
