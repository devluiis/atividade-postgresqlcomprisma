import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const alterandoDuracao = await prisma.courses.update({
        where: {
            id: "fa621a38-ad94-4918-a441-fb8b88a72d18"
        },
        data: {
            duration: 700,
        }
    })
 
    console.log("Duração alterada: ", alterandoDuracao);
}

main();