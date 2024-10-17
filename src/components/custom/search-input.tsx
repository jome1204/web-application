import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
  isPending: boolean;
};
const SearchInput = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  isPending,
}: SearchInputProps) => {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSearch();
  };
  return (
    <form className="flex space-x-2 mb-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter country name"
        className="flex-grow"
      />
      <Button disabled={isPending} type="submit">
        {isPending ? "Searching" : "Search"}
      </Button>
    </form>
  );
};

export default SearchInput;
