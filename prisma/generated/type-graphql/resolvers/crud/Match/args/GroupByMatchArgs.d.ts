import { MatchOrderByWithAggregationInput } from "../../../inputs/MatchOrderByWithAggregationInput";
import { MatchScalarWhereWithAggregatesInput } from "../../../inputs/MatchScalarWhereWithAggregatesInput";
import { MatchWhereInput } from "../../../inputs/MatchWhereInput";
export declare class GroupByMatchArgs {
    where?: MatchWhereInput | undefined;
    orderBy?: MatchOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "address" | "gameSite" | "phone" | "price" | "commentHost" | "dateAndTime" | "maxPlayers" | "currentPlayers" | "statePlay" | "typeGames" | "createdAt">;
    having?: MatchScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
