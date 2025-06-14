import { RegisterForm } from "@/modules/auth/ui/register-card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";


export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers:await headers()
  })

  if (!!session){
    redirect("/")
  }
  return <RegisterForm />;
}
