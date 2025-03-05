/*
  Warnings:

  - Added the required column `businessId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "businessId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
