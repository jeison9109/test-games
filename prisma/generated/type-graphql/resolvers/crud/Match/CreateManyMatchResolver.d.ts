import type { GraphQLResolveInfo } from "graphql";
import { CreateManyMatchArgs } from "./args/CreateManyMatchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMatchResolver {
    createManyMatch(ctx: any, info: GraphQLResolveInfo, args: CreateManyMatchArgs): Promise<AffectedRowsOutput>;
}
