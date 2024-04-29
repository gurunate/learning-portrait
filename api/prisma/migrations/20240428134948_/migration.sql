/*
  Warnings:

  - You are about to drop the column `emai` on the `Instructor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "emai",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "prefix" TEXT,
ADD COLUMN     "suffix" TEXT,
ADD COLUMN     "title" TEXT;
