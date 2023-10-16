import { NestedEnumEnum_StatePlayNullableFilter } from "../inputs/NestedEnumEnum_StatePlayNullableFilter";
import { NestedEnumEnum_StatePlayNullableWithAggregatesFilter } from "../inputs/NestedEnumEnum_StatePlayNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumEnum_StatePlayNullableWithAggregatesFilter {
    equals?: "Open" | "Closed" | undefined;
    in?: Array<"Open" | "Closed"> | undefined;
    notIn?: Array<"Open" | "Closed"> | undefined;
    not?: NestedEnumEnum_StatePlayNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEnum_StatePlayNullableFilter | undefined;
    _max?: NestedEnumEnum_StatePlayNullableFilter | undefined;
}
