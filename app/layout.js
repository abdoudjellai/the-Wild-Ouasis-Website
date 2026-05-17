import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel , located in the heart of Italian  Dolomites , surrounded by beatiful mountains and dark forsts",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className} flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl  mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
