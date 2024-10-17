import { Country } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Table, TableBody, TableRow, TableCell } from "../ui/table";

type CountryCardProps = {
  country: Country;
};
const CountryCard = ({ country }: CountryCardProps) => {
  console.log({ country });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{country.name.common}</CardTitle>
        <CardDescription>
         {country.altSpellings.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="md:flex md:flex-row md:gap-4">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full md:w-1/2 aspect-video mb-4"
        />
        <Table className="w-full">
          <TableBody className="w-full">
            <TableRow>
              <TableCell className="font-medium">Capital</TableCell>
              <TableCell>{country.capital?.[0] || "N/A"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Population</TableCell>
              <TableCell>{country.population.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Languages</TableCell>
              <TableCell>
                {Object.values(country.languages).join(", ")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
