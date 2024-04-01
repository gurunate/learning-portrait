-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_updatedById_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
