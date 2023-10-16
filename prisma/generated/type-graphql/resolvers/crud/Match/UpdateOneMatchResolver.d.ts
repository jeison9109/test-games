import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMatchArgs } from "./args/UpdateOneMatchArgs";
import { Match } from "../../../models/Match";
export declare class UpdateOneMatchResolver {
    updateOneMatch(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMatchArgs): Promise<Match | null>;
}
