export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-svh flex p-6 md:p-10 items-center justify-center">
    <div className="w-full max-w-sm md:max-w-3xl">
      {children}
    </div>
    </div>;
}
