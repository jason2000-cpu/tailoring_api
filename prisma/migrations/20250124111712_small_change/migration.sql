/*
  Warnings:

  - Added the required column `item` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "CompletionStatus" ADD VALUE 'Pending';

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "item" TEXT NOT NULL;
