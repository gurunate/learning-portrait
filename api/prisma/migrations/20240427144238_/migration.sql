/*
  Warnings:

  - You are about to drop the column `modifiedById` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `updatedById` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_modifiedById_fkey";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "modifiedById",
ADD COLUMN     "updatedById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
