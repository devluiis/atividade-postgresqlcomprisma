import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criar um curso
  const course = await prisma.courses.create({
    data: {
      name: "Curso Firebase",
      duration: 40,
      description: "Curso prático de Firebase",
    },
  });

  // Criar módulo e relacionar ao curso existente
  const module = await prisma.modules.create({
    data: {
      name: "Aprendendo Firebase",
      description: "Aprendendo Firebase do zero",
      courses: {
        create: {
          course: {
            connect: { id: course.id }, // conecta ao curso criado acima
          },
        },
      },
    },
  });

  console.log("Curso criado:", course);
  console.log("Módulo criado com relação:", module);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
