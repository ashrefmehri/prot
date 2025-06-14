"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const HomeView = () => {
    return ( 
        <div className="">
            <Button onClick={()=>authClient.signOut()}>
                Logout
            </Button>
        </div>
     );
}
 
