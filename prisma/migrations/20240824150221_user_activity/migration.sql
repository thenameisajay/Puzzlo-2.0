/*
  Warnings:

  - You are about to drop the column `createdAt` on the `user_activities` table. All the data in the column will be lost.
  - You are about to drop the column `pageName` on the `user_activities` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `user_activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `page_name` to the `user_activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_activities" DROP COLUMN "createdAt",
DROP COLUMN "pageName",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "page_name" TEXT NOT NULL;
