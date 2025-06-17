import { auth } from "@/lib/auth";
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
        </>
     );
}
 
export default AgentsPage;