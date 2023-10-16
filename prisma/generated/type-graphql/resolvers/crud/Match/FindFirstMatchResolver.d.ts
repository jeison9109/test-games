import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMatchArgs } from "./args/FindFirstMatchArgs";
import { Match } from "../../../models/Match";
export declare class FindFirstMatchResolver {
    findFirstMatch(ctx: any, info: GraphQLResolveInfo, args: FindFirstMatchArgs): Promise<Match | null>;
}
