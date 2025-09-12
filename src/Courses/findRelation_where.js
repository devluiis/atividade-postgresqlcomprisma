import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.findMany({
    where: {
      //name: "Curso de Prisma",
      duration: 50
      // AND : {
      //  duration: 300,
      // },
    }
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