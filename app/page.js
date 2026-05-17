import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <div>
      {" "}
      hello Next !
      <Navigation />
      <Link href="/cabins">Explore Luxury cabins </Link>
    </div>
  );
}
