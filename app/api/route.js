import {db} from '@vercel/postgres'

const client = await db.connect()

async function crearTabla(){
    await client.sql`CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, name VARCHAR(100))`

}
export async function GET(){
    try {
        await client.sql`BEGIN`
        await crearTabla()
        await client.sql`COMMIT`
        return Response.json({message:'tabla creada'});
    } catch (error) {
        await client.sql`ROLLBACK`
        return Response.json({error},{status:500});
    }
   
}