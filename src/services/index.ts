import { Country } from "@/types";
import axios from "axios";

export const fetchCountry = async (searchTerm: string) => {
  if (!searchTerm.trim()) throw new Error("Please enter a country name");

  const { data } = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/name/${searchTerm}`
  );
  return data[0];
};
