import { atom } from "recoil";
import { ITour } from "../types/types";

export const toursState = atom({
  key: "tours",
  default: [] as ITour[],
});

export const favoriteToursState = atom({
  key: "favoriteTours",
  default: [] as ITour[],
});

export const pageState = atom({
  key: "page",
  default: 0,
});

export const totalPagesState = atom({
  key: "totalPages",
  default: 0,
});
