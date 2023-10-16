"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Match: crudResolvers.MatchCrudResolver
};
const actionResolversMap = {
    Match: {
        aggregateMatch: actionResolvers.AggregateMatchResolver,
        createManyMatch: actionResolvers.CreateManyMatchResolver,
        createOneMatch: actionResolvers.CreateOneMatchResolver,
        deleteManyMatch: actionResolvers.DeleteManyMatchResolver,
        deleteOneMatch: actionResolvers.DeleteOneMatchResolver,
        findFirstMatch: actionResolvers.FindFirstMatchResolver,
        findFirstMatchOrThrow: actionResolvers.FindFirstMatchOrThrowResolver,
        matches: actionResolvers.FindManyMatchResolver,
        match: actionResolvers.FindUniqueMatchResolver,
        getMatch: actionResolvers.FindUniqueMatchOrThrowResolver,
        groupByMatch: actionResolvers.GroupByMatchResolver,
        updateManyMatch: actionResolvers.UpdateManyMatchResolver,
        updateOneMatch: actionResolvers.UpdateOneMatchResolver,
        upsertOneMatch: actionResolvers.UpsertOneMatchResolver
    }
};
const crudResolversInfo = {
    Match: ["aggregateMatch", "createManyMatch", "createOneMatch", "deleteManyMatch", "deleteOneMatch", "findFirstMatch", "findFirstMatchOrThrow", "matches", "match", "getMatch", "groupByMatch", "updateManyMatch", "updateOneMatch", "upsertOneMatch"]
};
const argsInfo = {
    AggregateMatchArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyMatchArgs: ["data", "skipDuplicates"],
    CreateOneMatchArgs: ["data"],
    DeleteManyMatchArgs: ["where"],
    DeleteOneMatchArgs: ["where"],
    FindFirstMatchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstMatchOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMatchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueMatchArgs: ["where"],
    FindUniqueMatchOrThrowArgs: ["where"],
    GroupByMatchArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyMatchArgs: ["data", "where"],
    UpdateOneMatchArgs: ["data", "where"],
    UpsertOneMatchArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Match: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateMatch: ["_count", "_avg", "_sum", "_min", "_max"],
    MatchGroupBy: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    MatchCountAggregate: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt", "_all"],
    MatchAvgAggregate: ["maxPlayers", "currentPlayers"],
    MatchSumAggregate: ["maxPlayers", "currentPlayers"],
    MatchMinAggregate: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchMaxAggregate: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    MatchWhereInput: ["AND", "OR", "NOT", "id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchOrderByWithRelationInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchWhereUniqueInput: ["id", "AND", "OR", "NOT", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchOrderByWithAggregationInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
    MatchScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchCreateInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchUpdateInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchCreateManyInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchUpdateManyMutationInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_StatePlayNullableFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_TypeGamesNullableFilter: ["equals", "in", "notIn", "not"],
    SortOrderInput: ["sort", "nulls"],
    MatchCountOrderByAggregateInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchAvgOrderByAggregateInput: ["maxPlayers", "currentPlayers"],
    MatchMaxOrderByAggregateInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchMinOrderByAggregateInput: ["id", "address", "gameSite", "phone", "price", "commentHost", "dateAndTime", "maxPlayers", "currentPlayers", "statePlay", "typeGames", "createdAt"],
    MatchSumOrderByAggregateInput: ["maxPlayers", "currentPlayers"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumEnum_StatePlayNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_TypeGamesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableEnumEnum_StatePlayFieldUpdateOperationsInput: ["set"],
    NullableEnumEnum_TypeGamesFieldUpdateOperationsInput: ["set"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_StatePlayNullableFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_TypeGamesNullableFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_StatePlayNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_TypeGamesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
