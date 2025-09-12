import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
        name: "Curso de ORM com Node.js",
        duration: 100,
        description: "Curso excelente sobre os ORM com Node.js",

        teacher: {
            create: {
                name: "Gabriel Magalhães",
            },
        },
    },
});        

console.log(course);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });