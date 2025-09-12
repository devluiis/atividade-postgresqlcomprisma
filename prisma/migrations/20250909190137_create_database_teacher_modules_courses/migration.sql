-- CreateTable
CREATE TABLE "public"."courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_teacher" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."modules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_name_key" ON "public"."courses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teacher_key" ON "public"."courses"("fk_id_teacher");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "public"."teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "modules_name_key" ON "public"."modules"("name");

-- AddForeignKey
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "public"."teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
