/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type pages = {
  title: string;
  likes: number;
  accounts: Array<string>;
  status: "open" | "close";
  details?: Details;
};
type Details = {
  createAt: Date;
  updateAt: Date;
};

const page1: pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

interface AnimalWOT {
  noob: number;
  pro?: number;
}

interface ExtendedAnimalWot extends AnimalWOT {
  medium: number;
}

function getStat(stat: AnimalWOT): ExtendedAnimalWot {
  const object: ExtendedAnimalWot = { ...stat, medium: 52 };
  console.log(object);

  return object;
}

getStat({ noob: 45 });
export {};
