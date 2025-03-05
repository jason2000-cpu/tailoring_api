/*
  Warnings:

  - You are about to drop the column `status` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `completionStatus` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "status",
ADD COLUMN     "completionStatus" "CompletionStatus" NOT NULL;
