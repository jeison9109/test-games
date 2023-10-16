export declare class Match {
    id: string;
    address: string;
    gameSite: string;
    phone?: string | null;
    price?: string | null;
    commentHost?: string | null;
    dateAndTime: Date;
    maxPlayers?: number | null;
    currentPlayers?: number | null;
    statePlay?: "Open" | "Closed" | null;
    typeGames?: "Football" | "Basketball" | "Volleyball" | null;
    createdAt: Date;
}
