import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { auth } from "@/lib/auth";
import { AgentsView } from "@/modules/agents/ui/agents-view";
import { ListHeaders } from "@/modules/agents/ui/list-headers";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary"
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import type { SearchParams } from "nuqs";
import { loadSearchParams } from "@/modules/agents/params";

interface Props {
  searchParams:Promise<SearchParams>
}

const AgentsPage = async ({searchParams}:Props) => {

  const filters = await  loadSearchParams(searchParams)



  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({...filters,}));

  return (
    <>
      <ListHeaders />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingState/>}>
         <ErrorBoundary fallback={<ErrorState/>}>

          <AgentsView />
         </ErrorBoundary>
        
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default AgentsPage;
