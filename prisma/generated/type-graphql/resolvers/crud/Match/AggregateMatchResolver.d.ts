import type { GraphQLResolveInfo } from "graphql";
import { AggregateMatchArgs } from "./args/AggregateMatchArgs";
import { AggregateMatch } from "../../outputs/AggregateMatch";
export declare class AggregateMatchResolver {
    aggregateMatch(ctx: any, info: GraphQLResolveInfo, args: AggregateMatchArgs): Promise<AggregateMatch>;
}
