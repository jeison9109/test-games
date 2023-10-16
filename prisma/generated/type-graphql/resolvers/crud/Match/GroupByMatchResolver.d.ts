import type { GraphQLResolveInfo } from "graphql";
import { GroupByMatchArgs } from "./args/GroupByMatchArgs";
import { MatchGroupBy } from "../../outputs/MatchGroupBy";
export declare class GroupByMatchResolver {
    groupByMatch(ctx: any, info: GraphQLResolveInfo, args: GroupByMatchArgs): Promise<MatchGroupBy[]>;
}
