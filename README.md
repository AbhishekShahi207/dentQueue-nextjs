tech added in sequence => nextjs
 => shadcn ui 
 => tweak theme fot shadcn 
 => clerk for auth
 => created neon database and adding prisma env 
 => created asistant on vapi.ai
 =>adding assistant id in env





 ========> PRISMA <=======
Prisma is an ORM (Object-Relational Mapping) 
 Think of Prisma as a translator between your code and your database: . Instead of writing complex SQL code · You write simple JavaScript/TypeScript code · Prisma translates it for your database


   Prisma Schema  
  This is where you can define your database design 
  .Which tables you want to have
  .Which fields you want?
  ·Relations?
  ·etc.etc.etc.


npm i prisma@6.16.2 --save-dev for development
npm i @prisma/client@6.16.2    for production
npx prisma init => create prisma folder to write tables
push schema to neon database => npx prisma db push
