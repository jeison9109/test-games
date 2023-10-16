import { MatchAvgAggregate } from "../outputs/MatchAvgAggregate";
import { MatchCountAggregate } from "../outputs/MatchCountAggregate";
import { MatchMaxAggregate } from "../outputs/MatchMaxAggregate";
import { MatchMinAggregate } from "../outputs/MatchMinAggregate";
import { MatchSumAggregate } from "../outputs/MatchSumAggregate";
export declare class AggregateMatch {
    _count: MatchCountAggregate | null;
    _avg: MatchAvgAggregate | null;
    _sum: MatchSumAggregate | null;
    _min: MatchMinAggregate | null;
    _max: MatchMaxAggregate | null;
}
