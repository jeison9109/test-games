import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class MatchOrderByWithRelationInput {
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
}
