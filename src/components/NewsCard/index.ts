import NewsCard from "./NewsCard";
import { Articles } from "../../types";

export interface Props {
  data: Articles;
  numberOfitemsShown: number;
}

export default NewsCard;
