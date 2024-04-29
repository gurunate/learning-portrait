/*
  Warnings:

  - Added the required column `instructorId` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objectiveId` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "instructorId" TEXT NOT NULL,
ADD COLUMN     "objectiveId" TEXT NOT NULL,
ADD COLUMN     "studentId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
