-- CreateEnum
CREATE TYPE "Enum_StatePlay" AS ENUM ('Open', 'Closed');

-- CreateEnum
CREATE TYPE "Enum_TypeGames" AS ENUM ('Football', 'Basketball', 'Volleyball');

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gameSite" TEXT NOT NULL,
    "price" TEXT,
    "commentHost" TEXT,
    "dateAndTime" TIMESTAMP(3) NOT NULL,
    "maxPlayers" INTEGER,
    "currentPlayers" INTEGER,
    "statePlay" "Enum_StatePlay" DEFAULT 'Open',
    "typeGames" "Enum_TypeGames",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
