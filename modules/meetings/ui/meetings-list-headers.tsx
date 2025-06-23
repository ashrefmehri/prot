"use client";

import { Button } from "@/components/ui/button";
import { Plus, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { DEFAULT_PAGE } from "@/constants";
import { NewMeetingDialog } from "./new-agent-dialog";

export const MeetingsListHeaders = () => {
  
  const [isDialogOpen,setIsDialogOpen] = useState(false)


  return (
    <>
    <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="px-4 py-4 md:px-8 flex flex-col gap-y-2 ">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl tracking-tighter">My Meetings</h5>
          <Button className="tracking-tighter" onClick={()=>setIsDialogOpen(true)} >
            <Plus />
            New Meeting
          </Button>
        </div>
        <div className=" flex items-center gap-x-2 ">
           
        </div>
      </div>
    </>
  );
};
