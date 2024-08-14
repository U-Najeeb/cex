/*
  Warnings:

  - You are about to drop the column `sb` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "sb",
ADD COLUMN     "sub" TEXT NOT NULL DEFAULT '';
