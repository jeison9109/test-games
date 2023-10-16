import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMatchArgs } from "./args/UpsertOneMatchArgs";
import { Match } from "../../../models/Match";
export declare class UpsertOneMatchResolver {
    upsertOneMatch(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMatchArgs): Promise<Match>;
}
