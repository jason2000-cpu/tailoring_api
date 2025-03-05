/*
  Warnings:

  - Added the required column `type` to the `Notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "FinancialRecord" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Notifications" ADD COLUMN     "type" TEXT NOT NULL;
