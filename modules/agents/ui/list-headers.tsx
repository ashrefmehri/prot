"use client";

import { Button } from "@/components/ui/button";
import { Plus, XCircleIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";
import { useAgentFiltres } from "../hooks/use-agents-filter";
import { SearchFilter } from "./agents-search-filter";
import { DEFAULT_PAGE } from "@/constants";

export const ListHeaders = () => {
  
  const [filters, setFilters] = useAgentFiltres();
  const [isOpen, setIsOpen] = useState(false);

  const isAnyFilterModified = !!filters.search
  const onClearFilters = () =>{
    setFilters({
      search:"",
      page:DEFAULT_PAGE
    })
  }

  return (
    <>
      <NewAgentDialog open={isOpen} onOpenChange={setIsOpen} />
      <div className="px-4 py-4 md:px-8 flex flex-col gap-y-2 ">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl tracking-tighter">My Agents</h5>
          <Button className="tracking-tighter" onClick={() => setIsOpen(true)}>
            <Plus />
            New Agent
          </Button>
        </div>
        <div className=" flex items-center gap-x-2 ">
           <SearchFilter/>
           {isAnyFilterModified && (
            <Button className="text-destructive   shadow-none" variant="outline"  onClick={onClearFilters}>
              <XCircleIcon />
              Clear
            </Button>
           )}
        </div>
      </div>
    </>
  );
};
