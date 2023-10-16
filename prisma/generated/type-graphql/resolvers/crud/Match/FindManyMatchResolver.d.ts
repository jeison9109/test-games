import type { GraphQLResolveInfo } from "graphql";
import { FindManyMatchArgs } from "./args/FindManyMatchArgs";
import { Match } from "../../../models/Match";
export declare class FindManyMatchResolver {
    matches(ctx: any, info: GraphQLResolveInfo, args: FindManyMatchArgs): Promise<Match[]>;
}
