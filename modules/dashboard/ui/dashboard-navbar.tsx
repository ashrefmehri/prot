"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { DashboardCommand } from "./dashboard-command";
import { KeyboardEvent, useEffect, useState } from "react";

export const DashboardNavbar = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  const { state, toggleSidebar, isMobile } = useSidebar();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex items-center px-4 gap-x-2 bg-sidebar py-3  border-b">
        <Button
          className="size-9 shadow-none "
          onClick={toggleSidebar}
          variant="outline"
        >
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon className="size-4" />
          ) : (
            <PanelLeftCloseIcon className="size-4" />
          )}
        </Button>
        <Button
          className="h-9 w-[240px] text-xs shadow-none justify-start text-muted-foreground"
          variant="outline"
          size="sm"
          onClick={() => setCommandOpen((open) => !open)}
        >
          <SearchIcon />
          Search
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none font-mono font-medium text-muted-foreground items-center gap-1 rounded border bg-muted px-1.5">
            <span>&#8984;</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
};
