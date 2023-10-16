import { NestedEnumEnum_TypeGamesNullableFilter } from "../inputs/NestedEnumEnum_TypeGamesNullableFilter";
import { NestedEnumEnum_TypeGamesNullableWithAggregatesFilter } from "../inputs/NestedEnumEnum_TypeGamesNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumEnum_TypeGamesNullableWithAggregatesFilter {
    equals?: "Football" | "Basketball" | "Volleyball" | undefined;
    in?: Array<"Football" | "Basketball" | "Volleyball"> | undefined;
    notIn?: Array<"Football" | "Basketball" | "Volleyball"> | undefined;
    not?: NestedEnumEnum_TypeGamesNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEnum_TypeGamesNullableFilter | undefined;
    _max?: NestedEnumEnum_TypeGamesNullableFilter | undefined;
}
