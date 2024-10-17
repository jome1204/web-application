import {  useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCountry } from "./services";
import CountryCard from "./components/custom/country-card";
import SearchInput from "./components/custom/search-input";
import Header from "./components/custom/header";
import { searchSchema } from "./schema";
import { toast } from "sonner";
import { Skeleton } from "./components/ui/skeleton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const DEFAULT_SEARCH_TERM = "Ethiopia";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(DEFAULT_SEARCH_TERM);
  const {
    data: country,
    error,
    isError,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["country", searchTerm],
    queryFn: () => fetchCountry(searchTerm),
    enabled: false,
  });

  // Drived states
  const isCountryFound = !!country;

  const handleSearch = () => {
    const { success, error } = searchSchema.safeParse(searchTerm);
    if (!success)
      toast("Error", {
        description: error.errors[0].message,
      });
    else refetch();
  };

  useEffect(() => {
    if (searchTerm === DEFAULT_SEARCH_TERM) refetch();
  }, []);

  return (
    <main className="px-4 max-w-4xl mx-auto bg-neutral-50 min-h-screen">
      <Header />
      <section className="mt-2">
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          isPending={isLoading}
        />
      </section>
      {isLoading && <CountryCardSkeleton />}
      {isError && (
        <ErrorMessage message={error.message} searchTerm={searchTerm} />
      )}

      {isCountryFound && <CountryCard country={country} />}
    </main>
  );
};

type ErrorMessageProps = {
  message: string;
  searchTerm: string;
};
const ErrorMessage = ({ searchTerm, message }: ErrorMessageProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Country not found with `{searchTerm}` search term.
        </CardTitle>
        <CardDescription className="text-red-500">{message}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export const CountryCardSkeleton = () => {
  return (
    <div>
      <section className="space-y-2">
        <Skeleton className="w-[10em] h-[1.6em] " />
        <Skeleton className="w-[20em] h-[1em] " />
      </section>
      <Skeleton className="mt-4 w-full aspect-video " />
      <section className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[40%] h-[1.4em] " />
          <Skeleton className="w-[40%] h-[1.4em] " />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="w-[40%] h-[1.4em] " />
          <Skeleton className="w-[40%] h-[1.4em] " />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="w-[40%] h-[1.4em] " />
          <Skeleton className="w-[40%] h-[1.4em] " />
        </div>
      </section>
    </div>
  );
};

export default App;
