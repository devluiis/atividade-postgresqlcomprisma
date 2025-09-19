/*
  Warnings:

  - You are about to drop the column `fk_id_teacher` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."books" DROP CONSTRAINT "books_author_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."courses" DROP CONSTRAINT "courses_fk_id_teacher_fkey";

-- DropIndex
DROP INDEX "public"."courses_fk_id_teacher_key";

-- AlterTable
ALTER TABLE "public"."courses" DROP COLUMN "fk_id_teacher";

-- DropTable
DROP TABLE "public"."authors";

-- DropTable
DROP TABLE "public"."books";

-- CreateTable
CREATE TABLE "public"."courses_modules" (
    "id" TEXT NOT NULL,
    "fk_id_course" TEXT NOT NULL,
    "fk_id_module" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_modules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."courses_modules" ADD CONSTRAINT "courses_modules_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "public"."courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."courses_modules" ADD CONSTRAINT "courses_modules_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "public"."modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
