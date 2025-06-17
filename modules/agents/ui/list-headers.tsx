"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { NewAgentDialog } from "./new-agent-dialog"
import { useState } from "react"

export const ListHeaders =()=>{

    const [isOpen,setIsOpen] = useState(false)

    return ( 
              <>
              <NewAgentDialog open={isOpen} onOpenChange={setIsOpen}/>
               <div className="px-4 py-4 md:px-8 flex flex-col gap-y-4 ">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium text-xl tracking-tight">My Agents</h5>
                  <Button className="tracking-tight" onClick={()=>setIsOpen(true)}>
                    <Plus/>
                    New Agent
                  </Button>
                </div>
               </div>
              </>
    )
}