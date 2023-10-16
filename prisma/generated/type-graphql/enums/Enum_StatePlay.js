"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_StatePlay = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_StatePlay;
(function (Enum_StatePlay) {
    Enum_StatePlay["Open"] = "Open";
    Enum_StatePlay["Closed"] = "Closed";
})(Enum_StatePlay || (exports.Enum_StatePlay = Enum_StatePlay = {}));
TypeGraphQL.registerEnumType(Enum_StatePlay, {
    name: "Enum_StatePlay",
    description: undefined,
});
