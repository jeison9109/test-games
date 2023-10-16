import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_StatePlayNullableWithAggregatesFilter } from "../inputs/EnumEnum_StatePlayNullableWithAggregatesFilter";
import { EnumEnum_TypeGamesNullableWithAggregatesFilter } from "../inputs/EnumEnum_TypeGamesNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MatchScalarWhereWithAggregatesInput {
    AND?: MatchScalarWhereWithAggregatesInput[] | undefined;
    OR?: MatchScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MatchScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
    gameSite?: StringWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    price?: StringNullableWithAggregatesFilter | undefined;
    commentHost?: StringNullableWithAggregatesFilter | undefined;
    dateAndTime?: DateTimeWithAggregatesFilter | undefined;
    maxPlayers?: IntNullableWithAggregatesFilter | undefined;
    currentPlayers?: IntNullableWithAggregatesFilter | undefined;
    statePlay?: EnumEnum_StatePlayNullableWithAggregatesFilter | undefined;
    typeGames?: EnumEnum_TypeGamesNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
