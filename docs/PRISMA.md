# Get Started with Prisma

run this command to get started.
`npx prisma init --datasource-provider postgres`

it will generate a prisma directory with the schema file inside it. in this file you will define all of your schemas / model of your database.

then you'll have to migrate it so that the shape of database can be created.

now run
`npx prisma migrate`

or alternatively you can pass the --name flag to it.

`npx prisma migrate dev --name init`
