import { MatchAvgOrderByAggregateInput } from "../inputs/MatchAvgOrderByAggregateInput";
import { MatchCountOrderByAggregateInput } from "../inputs/MatchCountOrderByAggregateInput";
import { MatchMaxOrderByAggregateInput } from "../inputs/MatchMaxOrderByAggregateInput";
import { MatchMinOrderByAggregateInput } from "../inputs/MatchMinOrderByAggregateInput";
import { MatchSumOrderByAggregateInput } from "../inputs/MatchSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class MatchOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    gameSite?: "asc" | "desc" | undefined;
    phone?: SortOrderInput | undefined;
    price?: SortOrderInput | undefined;
    commentHost?: SortOrderInput | undefined;
    dateAndTime?: "asc" | "desc" | undefined;
    maxPlayers?: SortOrderInput | undefined;
    currentPlayers?: SortOrderInput | undefined;
    statePlay?: SortOrderInput | undefined;
    typeGames?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: MatchCountOrderByAggregateInput | undefined;
    _avg?: MatchAvgOrderByAggregateInput | undefined;
    _max?: MatchMaxOrderByAggregateInput | undefined;
    _min?: MatchMinOrderByAggregateInput | undefined;
    _sum?: MatchSumOrderByAggregateInput | undefined;
}
