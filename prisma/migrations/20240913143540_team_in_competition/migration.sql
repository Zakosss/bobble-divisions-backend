/*
  Warnings:

  - You are about to drop the `CompetitionInSeason` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CompetitionInSeason` DROP FOREIGN KEY `CompetitionInSeason_competitionId_fkey`;

-- DropForeignKey
ALTER TABLE `CompetitionInSeason` DROP FOREIGN KEY `CompetitionInSeason_seasonId_fkey`;

-- DropTable
DROP TABLE `CompetitionInSeason`;

-- CreateTable
CREATE TABLE `TeamInCompetition` (
    `teamId` INTEGER NOT NULL,
    `competitionId` INTEGER NOT NULL,
    `seasonId` INTEGER NOT NULL,

    PRIMARY KEY (`teamId`, `competitionId`, `seasonId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeamInCompetition` ADD CONSTRAINT `TeamInCompetition_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamInCompetition` ADD CONSTRAINT `TeamInCompetition_competitionId_fkey` FOREIGN KEY (`competitionId`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamInCompetition` ADD CONSTRAINT `TeamInCompetition_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
