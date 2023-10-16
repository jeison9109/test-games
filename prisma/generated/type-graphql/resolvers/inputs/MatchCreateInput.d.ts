export declare class MatchCreateInput {
    id?: string | undefined;
    address: string;
    gameSite: string;
    phone?: string | undefined;
    price?: string | undefined;
    commentHost?: string | undefined;
    dateAndTime: Date;
    maxPlayers?: number | undefined;
    currentPlayers?: number | undefined;
    statePlay?: "Open" | "Closed" | undefined;
    typeGames?: "Football" | "Basketball" | "Volleyball" | undefined;
    createdAt?: Date | undefined;
}
