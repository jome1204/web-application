export type Country = {
  altSpellings: string[];
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  flags: {
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
};
