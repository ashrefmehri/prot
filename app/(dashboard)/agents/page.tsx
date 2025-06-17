import { auth } from "@/lib/auth";
import { AgentsView } from "@/modules/agents/ui/agents-view";
import { ListHeaders } from "@/modules/agents/ui/list-headers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";




const AgentsPage = async () => {

    const session = await auth.api.getSession({
          headers:await headers()
        })
      
        if (!session){
          redirect("/login")
        }

    return ( 
        <>
        <ListHeaders/>
        <AgentsView/>
        </>
     );
}
 
export default AgentsPage;