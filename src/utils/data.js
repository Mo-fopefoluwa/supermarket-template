import {
  GiFriedFish,
  GiTomato,
  GiMedicines,
  GiMilkCarton,
  GiBowlOfRice,
  GiKiwiFruit,
} from "react-icons/gi";

export const categories = [
  {
    id: 1,
    name: "Fruits",
    icon: <GiKiwiFruit />,
    urlParamName: "fruits",
  },
  {
    id: 2,
    name: "Vegetables",
    icon: <GiTomato />,
    urlParamName: "vegies",
  },
  {
    id: 3,
    name: "food & oils",
    icon: <GiBowlOfRice />,
    urlParamName: "food-and-oils",
  },

  {
    id: 4,
    name: "meat & fish",
    icon: <GiFriedFish />,
    urlParamName: "meat-and-fish",
  },
  {
    id: 5,
    name: "medicine",
    icon: <GiMedicines />,
    urlParamName: "medicine",
  },
  ,
  {
    id: 6,
    name: "milk & dairies",
    icon: <GiMilkCarton />,
    urlParamName: "milk",
  },
];
