-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_instructorId_fkey";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE SET NULL ON UPDATE SET NULL;
