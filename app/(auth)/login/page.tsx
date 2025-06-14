import { auth } from "@/lib/auth";
import { LoginForm } from "@/modules/auth/ui/login-form";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function LoginPage() {

  const session = await auth.api.getSession({
    headers:await headers()
  })

  if (!!session){
    redirect("/")
  }

  return <LoginForm />;
}
