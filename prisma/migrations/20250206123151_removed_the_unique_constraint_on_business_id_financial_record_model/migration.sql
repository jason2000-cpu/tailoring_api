-- DropIndex
DROP INDEX "FinancialRecord_businessId_key";

-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "description" DROP NOT NULL;
