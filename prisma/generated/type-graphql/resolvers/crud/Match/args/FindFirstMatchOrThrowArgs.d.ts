import { MatchOrderByWithRelationInput } from "../../../inputs/MatchOrderByWithRelationInput";
import { MatchWhereInput } from "../../../inputs/MatchWhereInput";
import { MatchWhereUniqueInput } from "../../../inputs/MatchWhereUniqueInput";
export declare class FindFirstMatchOrThrowArgs {
    where?: MatchWhereInput | undefined;
    orderBy?: MatchOrderByWithRelationInput[] | undefined;
    cursor?: MatchWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "address" | "gameSite" | "phone" | "price" | "commentHost" | "dateAndTime" | "maxPlayers" | "currentPlayers" | "statePlay" | "typeGames" | "createdAt"> | undefined;
}