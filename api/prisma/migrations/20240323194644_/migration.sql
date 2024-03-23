/*
  Warnings:

  - You are about to drop the column `courseId` on the `Evidence` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evidence" DROP CONSTRAINT "Evidence_courseId_fkey";

-- AlterTable
ALTER TABLE "Evidence" DROP COLUMN "courseId",
ADD COLUMN     "objectiveId" TEXT;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE SET NULL ON UPDATE CASCADE;
