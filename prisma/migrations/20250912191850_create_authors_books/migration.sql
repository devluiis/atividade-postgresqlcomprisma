-- CreateTable
CREATE TABLE "public"."authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authors_name_key" ON "public"."authors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "public"."books"("name");

-- AddForeignKey
ALTER TABLE "public"."books" ADD CONSTRAINT "books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
