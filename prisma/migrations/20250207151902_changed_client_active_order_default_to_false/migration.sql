/*
  Warnings:

  - The values [InProgress] on the enum `CompletionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CompletionStatus_new" AS ENUM ('Complete', 'In_Progress', 'Pending');
ALTER TABLE "Orders" ALTER COLUMN "completionStatus" TYPE "CompletionStatus_new" USING ("completionStatus"::text::"CompletionStatus_new");
ALTER TYPE "CompletionStatus" RENAME TO "CompletionStatus_old";
ALTER TYPE "CompletionStatus_new" RENAME TO "CompletionStatus";
DROP TYPE "CompletionStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "FinancialRecord" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());
