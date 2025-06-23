"use client";

import { DataTable } from "@/modules/agents/ui/data-table";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { EmptyState } from "@/components/empty-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="flex-1 overflow-x-hidden pb-4 px-4 md:px- flex flex-col gap-y-4">
      <DataTable data={data.item} columns={columns} />
      {data.item.length === 0 && (
  <EmptyState
    title="No Meetings Yet"
    description="Create your first meeting to get started. Invite your AI agent to take notes, interact, and elevate the conversation."
  />
)}
    </div>
  )
  ;
};
