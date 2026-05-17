import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "The Wild Oasis",
   title : {
    template : "%s | The Wild Oasis",
    default : "The Wild Oasis" 
   } , 
  description: "Luxurious cabin hotel , located in the heart of Italian  Dolomites , surrounded by beatiful mountains and dark forsts",
  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
