import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMatchArgs } from "./args/DeleteOneMatchArgs";
import { Match } from "../../../models/Match";
export declare class DeleteOneMatchResolver {
    deleteOneMatch(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMatchArgs): Promise<Match | null>;
}
