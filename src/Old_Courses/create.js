import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const cursoNovo = await prisma.courses.create({
        data:{
            name: "Curso de Frontend",
            duration: 100,
            description:"Curso de Frontend com HTML, CSS e JavaScript"
        },
    });

    console.log("Novo curso criado: ",cursoNovo);
}

main();