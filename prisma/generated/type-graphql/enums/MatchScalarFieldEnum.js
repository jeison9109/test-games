"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MatchScalarFieldEnum;
(function (MatchScalarFieldEnum) {
    MatchScalarFieldEnum["id"] = "id";
    MatchScalarFieldEnum["address"] = "address";
    MatchScalarFieldEnum["gameSite"] = "gameSite";
    MatchScalarFieldEnum["phone"] = "phone";
    MatchScalarFieldEnum["price"] = "price";
    MatchScalarFieldEnum["commentHost"] = "commentHost";
    MatchScalarFieldEnum["dateAndTime"] = "dateAndTime";
    MatchScalarFieldEnum["maxPlayers"] = "maxPlayers";
    MatchScalarFieldEnum["currentPlayers"] = "currentPlayers";
    MatchScalarFieldEnum["statePlay"] = "statePlay";
    MatchScalarFieldEnum["typeGames"] = "typeGames";
    MatchScalarFieldEnum["createdAt"] = "createdAt";
})(MatchScalarFieldEnum || (exports.MatchScalarFieldEnum = MatchScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MatchScalarFieldEnum, {
    name: "MatchScalarFieldEnum",
    description: undefined,
});
