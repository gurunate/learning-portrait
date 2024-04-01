/*
  Warnings:

  - You are about to drop the column `userId` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedById` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "userId",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "modifiedById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_modifiedById_fkey" FOREIGN KEY ("modifiedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
