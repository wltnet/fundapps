import * as React from "react";
import useFetch from "../../util/useFetch";
import Button from "../Button";
import NewsCard from "../NewsCard";
import Dropdown from "../Dropdown";
import { Article } from "../../types";

const News = (): React.ReactElement => {
  const { loading, data } = useFetch(
    "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=250f90fc89a94aaf95c4b727065fd445"
  );

  const [numberOfitemsShown, setNumberOfitemsShown] = React.useState<number>(5);

  const showMore = () => {
    setNumberOfitemsShown(numberOfitemsShown + 5);
  };

  const getSource = (): string[] => {
    return data
      ? data.articles
          .map((article: Article) => {
            return article.source.name;
          })
          .filter(
            (elem: string, index: number, self: string[]) =>
              index === self.indexOf(elem)
          )
      : [];
  };

  return (
    <div>
      <h1>News</h1>
      {loading && <div>Loading...</div>}
      {data && (
        <>
          <Dropdown list={getSource()} onChange={() => {}} />
          <ul>
            <NewsCard
              data={data.articles}
              numberOfitemsShown={numberOfitemsShown}
            />
          </ul>
          <Button title="show more" onClick={showMore} />
        </>
      )}
    </div>
  );
};

export default News;
