export interface LeaderboardEntryFormTypes {
  id?: number;
  username: string;
  numberOfTries: number;
  timeTaken: number;
  score: number;
  leaderboardId: number;
}

export interface Leaderboard {
  id?: number;
  date?: Date;
  password: number;
  leaderboards?: LeaderboardEntryFormTypes[];
}
