import Link from "next/link";
import Image from "next/image"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-svh flex flex-col  p-4 md:p-8 ">
    <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={120} height={50} />
          </Link>
    <div className="w-full flex items-center justify-center py-4 ">
      {children}
    </div>
    </div>;
}
