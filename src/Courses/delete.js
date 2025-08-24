import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const deletarCurso = await prisma.courses.delete({
        where: {
            id: "fa621a38-ad94-4918-a441-fb8b88a72d18"
        },
    });
        
    console.log("Curso excluído: ",deletarCurso);
}

main();