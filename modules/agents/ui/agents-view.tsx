"use client"
import { useTRPC } from "@/trpc/client"
import {  useSuspenseQuery } from "@tanstack/react-query"
import { DataTable } from "./data-table"
import { columns  } from "./columns"
import { EmptyState } from "@/components/empty-state"


export const AgentsView =()=>{

    const trpc = useTRPC()

    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions())

    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
           <DataTable data={data} columns={columns} />
         {data.length === 0 && (
            <EmptyState title="Launch Your First AI Agent" description="Craft a smart assistant to join your meetings, follow your commands, and chat with participants — like a co-pilot with a mind of its own."/>
         )}
        </div>
    )
}