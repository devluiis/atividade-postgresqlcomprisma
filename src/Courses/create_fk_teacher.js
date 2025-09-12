import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
      name: "Curso de CSS",
      duration: 50,
      description: "Curso top de Css",
      fk_id_teacher: "a4e77b26-0538-4e7e-af1c-5f5283edf8b9"
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