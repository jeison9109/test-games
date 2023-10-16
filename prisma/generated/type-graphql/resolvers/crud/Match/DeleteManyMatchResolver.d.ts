import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyMatchArgs } from "./args/DeleteManyMatchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMatchResolver {
    deleteManyMatch(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMatchArgs): Promise<AffectedRowsOutput>;
}
