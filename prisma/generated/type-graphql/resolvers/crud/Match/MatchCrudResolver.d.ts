import type { GraphQLResolveInfo } from "graphql";
import { AggregateMatchArgs } from "./args/AggregateMatchArgs";
import { CreateManyMatchArgs } from "./args/CreateManyMatchArgs";
import { CreateOneMatchArgs } from "./args/CreateOneMatchArgs";
import { DeleteManyMatchArgs } from "./args/DeleteManyMatchArgs";
import { DeleteOneMatchArgs } from "./args/DeleteOneMatchArgs";
import { FindFirstMatchArgs } from "./args/FindFirstMatchArgs";
import { FindFirstMatchOrThrowArgs } from "./args/FindFirstMatchOrThrowArgs";
import { FindManyMatchArgs } from "./args/FindManyMatchArgs";
import { FindUniqueMatchArgs } from "./args/FindUniqueMatchArgs";
import { FindUniqueMatchOrThrowArgs } from "./args/FindUniqueMatchOrThrowArgs";
import { GroupByMatchArgs } from "./args/GroupByMatchArgs";
import { UpdateManyMatchArgs } from "./args/UpdateManyMatchArgs";
import { UpdateOneMatchArgs } from "./args/UpdateOneMatchArgs";
import { UpsertOneMatchArgs } from "./args/UpsertOneMatchArgs";
import { Match } from "../../../models/Match";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMatch } from "../../outputs/AggregateMatch";
import { MatchGroupBy } from "../../outputs/MatchGroupBy";
export declare class MatchCrudResolver {
    aggregateMatch(ctx: any, info: GraphQLResolveInfo, args: AggregateMatchArgs): Promise<AggregateMatch>;
    createManyMatch(ctx: any, info: GraphQLResolveInfo, args: CreateManyMatchArgs): Promise<AffectedRowsOutput>;
    createOneMatch(ctx: any, info: GraphQLResolveInfo, args: CreateOneMatchArgs): Promise<Match>;
    deleteManyMatch(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMatchArgs): Promise<AffectedRowsOutput>;
    deleteOneMatch(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMatchArgs): Promise<Match | null>;
    findFirstMatch(ctx: any, info: GraphQLResolveInfo, args: FindFirstMatchArgs): Promise<Match | null>;
    findFirstMatchOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstMatchOrThrowArgs): Promise<Match | null>;
    matches(ctx: any, info: GraphQLResolveInfo, args: FindManyMatchArgs): Promise<Match[]>;
    match(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMatchArgs): Promise<Match | null>;
    getMatch(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMatchOrThrowArgs): Promise<Match | null>;
    groupByMatch(ctx: any, info: GraphQLResolveInfo, args: GroupByMatchArgs): Promise<MatchGroupBy[]>;
    updateManyMatch(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMatchArgs): Promise<AffectedRowsOutput>;
    updateOneMatch(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMatchArgs): Promise<Match | null>;
    upsertOneMatch(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMatchArgs): Promise<Match>;
}
