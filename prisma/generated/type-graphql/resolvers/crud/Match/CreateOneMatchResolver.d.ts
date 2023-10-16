import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMatchArgs } from "./args/CreateOneMatchArgs";
import { Match } from "../../../models/Match";
export declare class CreateOneMatchResolver {
    createOneMatch(ctx: any, info: GraphQLResolveInfo, args: CreateOneMatchArgs): Promise<Match>;
}
