# Atividade de Programação para WEB II - PostgreSQL com Prisma

1. Quais foram as principais dificuldades encontradas durante o processo?
   A mudança do sqlite para o postegresql fez com que o comando "npx prisma migrate dev" não funcionasse,
   apresentando a seguinte mensagem:
   Environment variables loaded from .env
   Prisma schema loaded from prisma\schema.prisma
   Datasource "db": PostgreSQL database "api_express_prisma", schema "public" at "localhost:5432"

Error: P1000: Authentication failed against database server, the provided database credentials for `docker` are not valid.
Essa é minha dificuldade.

2. Em sua visão, qual é a importância de utilizar um ORM como o Prisma no processo de desenvolvimento de software?
   O Prisma facilita muito na diminuição da complexidade de acesso ao banco de dados, uma que vez que não será
   preciso lidar diretamente com as consultas complexas do SQL. Ajuda na agilidade, organização e segurança do
   processo de desenvolvimento.
