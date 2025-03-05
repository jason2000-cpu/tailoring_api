/*
  Warnings:

  - You are about to drop the column `garmentId` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the `Garments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderId` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Garments" DROP CONSTRAINT "Garments_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_garmentId_fkey";

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "garmentId",
ADD COLUMN     "orderId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Garments";

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "status" "CompletionStatus" NOT NULL,
    "collectionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
