/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `Measurements` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Measurements_clientId_key" ON "Measurements"("clientId");
