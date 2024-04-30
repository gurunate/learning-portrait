/*
  Warnings:

  - You are about to drop the column `ratingId` on the `Instructor` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Instructor" DROP CONSTRAINT "Instructor_ratingId_fkey";

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "ratingId";
