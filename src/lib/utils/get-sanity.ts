import { client } from "@/sanity/lib/client";

export async function getSanityData(query: string){
   return await client.fetch(query)
}