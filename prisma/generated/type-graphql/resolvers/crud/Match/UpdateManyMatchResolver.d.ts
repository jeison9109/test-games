import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyMatchArgs } from "./args/UpdateManyMatchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMatchResolver {
    updateManyMatch(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMatchArgs): Promise<AffectedRowsOutput>;
}
