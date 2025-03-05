-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now()),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "FinancialRecord" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now()),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ;
