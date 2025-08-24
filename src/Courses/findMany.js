import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const courses = await prisma.courses.findMany({
        where: {
            name: {
                equals: 'Curso de Frontend',
            }
        }    
});

console.log(courses);

}

main();