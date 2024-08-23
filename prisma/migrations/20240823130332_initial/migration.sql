-- CreateTable
CREATE TABLE "leaderboards" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "password" INTEGER NOT NULL,

    CONSTRAINT "leaderboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaderboard_entries" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "numberOfTries" INTEGER NOT NULL,
    "timeTaken" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "leaderboardId" INTEGER NOT NULL,

    CONSTRAINT "leaderboard_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_activities" (
    "id" SERIAL NOT NULL,
    "pageName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action_name" TEXT NOT NULL,
    "visitor_ip" TEXT NOT NULL,

    CONSTRAINT "user_activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "leaderboard_entries" ADD CONSTRAINT "leaderboard_entries_leaderboardId_fkey" FOREIGN KEY ("leaderboardId") REFERENCES "leaderboards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
