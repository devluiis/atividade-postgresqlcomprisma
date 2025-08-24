import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const curso = await prisma.courses.findUnique({
    where: { 
            id: "00b793b9-bedd-45ab-929f-2c6eb4e61a6a" 
        }, 
  });

  console.log("Curso encontrado:", curso);
}

main()
