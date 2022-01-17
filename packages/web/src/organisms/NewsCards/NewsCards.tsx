import NewsCard from "molecules/NewsCard";
import { useAppSelector } from "hooks/redux";
import { getNewsData } from "state/selectors/news";

type Props = {};

export default function NewsCards(props: Props) {
  const newsData = useAppSelector(getNewsData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {newsData?.length &&
        newsData.map((news: any) => {
          const { author, description, publishedAt, title, url, urlToImage } =
            news;

          return (
            <div className="flex justify-center items-center">
              <NewsCard
                key={url}
                author={author}
                description={description}
                publishedAt={publishedAt}
                title={title}
                url={url}
                urlToImage={urlToImage}
              />
            </div>
          );
        })}
    </div>
  );
}
