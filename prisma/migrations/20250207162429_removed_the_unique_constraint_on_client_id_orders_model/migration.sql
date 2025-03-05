-- DropIndex
DROP INDEX "Orders_clientId_key";

-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "FinancialRecord" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());
