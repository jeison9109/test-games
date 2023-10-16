import { MatchAvgAggregate } from "../outputs/MatchAvgAggregate";
import { MatchCountAggregate } from "../outputs/MatchCountAggregate";
import { MatchMaxAggregate } from "../outputs/MatchMaxAggregate";
import { MatchMinAggregate } from "../outputs/MatchMinAggregate";
import { MatchSumAggregate } from "../outputs/MatchSumAggregate";
export declare class MatchGroupBy {
    id: string;
    address: string;
    gameSite: string;
    phone: string | null;
    price: string | null;
    commentHost: string | null;
    dateAndTime: Date;
    maxPlayers: number | null;
    currentPlayers: number | null;
    statePlay: "Open" | "Closed" | null;
    typeGames: "Football" | "Basketball" | "Volleyball" | null;
    createdAt: Date;
    _count: MatchCountAggregate | null;
    _avg: MatchAvgAggregate | null;
    _sum: MatchSumAggregate | null;
    _min: MatchMinAggregate | null;
    _max: MatchMaxAggregate | null;
}
