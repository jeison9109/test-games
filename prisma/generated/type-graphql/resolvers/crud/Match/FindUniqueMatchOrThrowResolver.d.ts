import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMatchOrThrowArgs } from "./args/FindUniqueMatchOrThrowArgs";
import { Match } from "../../../models/Match";
export declare class FindUniqueMatchOrThrowResolver {
    getMatch(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMatchOrThrowArgs): Promise<Match | null>;
}
