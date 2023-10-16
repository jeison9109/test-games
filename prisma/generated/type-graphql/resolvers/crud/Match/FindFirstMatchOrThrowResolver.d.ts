import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMatchOrThrowArgs } from "./args/FindFirstMatchOrThrowArgs";
import { Match } from "../../../models/Match";
export declare class FindFirstMatchOrThrowResolver {
    findFirstMatchOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstMatchOrThrowArgs): Promise<Match | null>;
}
