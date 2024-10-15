import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({datasourceUrl: `mysql://root:test@${ process.env.SEED_SERVER ? process.env.SEED_SERVER : 'localhost'}:3307/spos`});

async function main() {
    
}

main()
.catch(e => console.log(e))
.finally(() => client.$disconnect());