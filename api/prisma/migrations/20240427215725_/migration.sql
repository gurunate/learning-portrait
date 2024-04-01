/*
  Warnings:

  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_userId_fkey";

-- AlterTable
ALTER TABLE "Assessment" ALTER COLUMN "instructorId" SET DEFAULT '',
ALTER COLUMN "studentId" SET DEFAULT '',
ALTER COLUMN "updatedById" SET DEFAULT '',
ALTER COLUMN "createdById" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId",
ADD COLUMN     "createdById" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "instructorId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedById" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Evidence" ADD COLUMN     "createdById" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedById" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Objective" ADD COLUMN     "createdById" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedById" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Section" ALTER COLUMN "updatedById" SET DEFAULT '',
ALTER COLUMN "createdById" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
