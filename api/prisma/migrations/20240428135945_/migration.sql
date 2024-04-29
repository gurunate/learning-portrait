/*
  Warnings:

  - You are about to drop the column `emai` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "department" TEXT;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "emai",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "prefix" TEXT,
ADD COLUMN     "suffix" TEXT;
