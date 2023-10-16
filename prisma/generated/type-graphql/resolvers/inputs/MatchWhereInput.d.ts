import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_StatePlayNullableFilter } from "../inputs/EnumEnum_StatePlayNullableFilter";
import { EnumEnum_TypeGamesNullableFilter } from "../inputs/EnumEnum_TypeGamesNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class MatchWhereInput {
    AND?: MatchWhereInput[] | undefined;
    OR?: MatchWhereInput[] | undefined;
    NOT?: MatchWhereInput[] | undefined;
    id?: StringFilter | undefined;
    address?: StringFilter | undefined;
    gameSite?: StringFilter | undefined;
    phone?: StringNullableFilter | undefined;
    price?: StringNullableFilter | undefined;
    commentHost?: StringNullableFilter | undefined;
    dateAndTime?: DateTimeFilter | undefined;
    maxPlayers?: IntNullableFilter | undefined;
    currentPlayers?: IntNullableFilter | undefined;
    statePlay?: EnumEnum_StatePlayNullableFilter | undefined;
    typeGames?: EnumEnum_TypeGamesNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
