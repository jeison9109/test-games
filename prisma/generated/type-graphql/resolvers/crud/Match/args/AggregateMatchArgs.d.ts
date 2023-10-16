import { MatchOrderByWithRelationInput } from "../../../inputs/MatchOrderByWithRelationInput";
import { MatchWhereInput } from "../../../inputs/MatchWhereInput";
import { MatchWhereUniqueInput } from "../../../inputs/MatchWhereUniqueInput";
export declare class AggregateMatchArgs {
    where?: MatchWhereInput | undefined;
    orderBy?: MatchOrderByWithRelationInput[] | undefined;
    cursor?: MatchWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
