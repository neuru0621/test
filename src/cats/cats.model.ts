import internal from "stream";

export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "fsduifn",
    name: "blue",
    age: 8,
    species: "Russian Blue",
    isCute: true,
    friends: ["asdfj29009", "WE09tju2j"],
  },
  {
    id: "sadie",
    name: "som",
    age: 10,
    species: "spynnx",
    isCute: true,
    friends: ["gg558", "WE09tju2j"],
  },
];
