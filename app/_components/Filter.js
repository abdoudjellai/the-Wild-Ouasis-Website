"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const filter = searchParams.get("capacity") ?? "all";
  function handleFilterClick(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        handleFilterClick={handleFilterClick}
        activFilter={filter}
        filter="all"
      >
        All cabins
      </Button>
      <Button
        handleFilterClick={handleFilterClick}
        activeFilter={filter}
        filter="small"
      >
        1&mdash;3 guests
      </Button>
      <Button
        handleFilterClick={handleFilterClick}
        activFilter={filter}
        filter="medium"
      >
        4&mdash;7 guests
      </Button>
      <Button
        handleFilterClick={handleFilterClick}
        activeFilter={filter}
        filter="large"
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}
function Button({ activeFilter, filter, handleFilterClick, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700" : ""}`}
      onClick={() => handleFilterClick(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
