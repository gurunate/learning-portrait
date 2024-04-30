/*
  Warnings:

  - You are about to drop the column `name` on the `Assessment` table. All the data in the column will be lost.
  - Added the required column `ratingId` to the `Assessment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "name",
ADD COLUMN     "ratingId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
