import { MatchCreateInput } from "../../../inputs/MatchCreateInput";
import { MatchUpdateInput } from "../../../inputs/MatchUpdateInput";
import { MatchWhereUniqueInput } from "../../../inputs/MatchWhereUniqueInput";
export declare class UpsertOneMatchArgs {
    where: MatchWhereUniqueInput;
    create: MatchCreateInput;
    update: MatchUpdateInput;
}
