"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentFiltres } from "../hooks/use-agents-filter";
import { DataPagination } from "@/components/data-pagination";

export const AgentsView = () => {

  const [filters,setFilters] = useAgentFiltres()

  const trpc = useTRPC();

  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({
  ...filters
  }));

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.item} columns={columns} />
      <DataPagination 
      page={filters.page}
      totalPages={data.totalPages}
      onPageChange={(page)=>setFilters({page})}
      />
      {data.item.length === 0 && (
        <EmptyState
          title="Launch Your First AI Agent"
          description="Craft a smart assistant to join your meetings, follow your commands, and chat with participants — like a co-pilot with a mind of its own."
        />
      )}
    </div>
  );
};
