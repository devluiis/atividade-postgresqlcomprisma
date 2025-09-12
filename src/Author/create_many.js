import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main () {
    const result = await prisma.authors.create({
        data: {
            name: "José de Alencar",
            books: {
                create: [
                    { name: "O guarani", year: 1857 },
                    { name: "Iracema", year: 1865},
                    { name: "Senhora", year: 1875},
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