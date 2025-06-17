"use client"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"


export const AgentsView =()=>{

    const trpc = useTRPC()

    const {data} = useQuery(trpc.agents.getMany.queryOptions())

    return (
        <div className="">
           {JSON.stringify(data,null,2)}
        </div>
    )
}