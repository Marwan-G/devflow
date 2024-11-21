import Navbar from "@/app/navigation/navbar";
import Nextnavbar from "@/app/navigation/navbarnext/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
}
