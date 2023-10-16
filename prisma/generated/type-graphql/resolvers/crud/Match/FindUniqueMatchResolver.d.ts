import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMatchArgs } from "./args/FindUniqueMatchArgs";
import { Match } from "../../../models/Match";
export declare class FindUniqueMatchResolver {
    match(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMatchArgs): Promise<Match | null>;
}
