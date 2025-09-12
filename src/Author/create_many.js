import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main () {
    const result = await prisma.authors.create({
        data: {
            name: "Machado de Assis",
            books: {
                create: [
                    { name: "Dom Casmurro" },
                    { name: "Memórias Póstumas de Brás Cubas"},
                ]    
            },
        },
    });

    console.log(result);

}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });