import { useMemo } from "react";
import { formatDateYYYYMMDD } from "utils/formatter";

type Props = {
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
};

export default function NewsCard(props: Props) {
  const { author, description, publishedAt, title, url, urlToImage } = props;

  const date = useMemo(
    () => formatDateYYYYMMDD(new Date(publishedAt)),
    [publishedAt]
  );

  const handleRedirect = () => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div
      className="flex flex-row rounded-lg bg-white shadow-lg w-96 lg:w-80 2xl:w-96 aspect-video cursor-pointer"
      onClick={handleRedirect}
    >
      <img
        className=" object-cover w-32 lg:w-20 2xl:w-32 rounded-t-lg rounded-l-lg"
        src={urlToImage}
        alt=""
      />
      <div className="p-2 flex flex-col justify-start">
        <div className="text-gray-900 text-md font-small mb-2 basis-1/6 text-ellipsis">
          <h5>{title}</h5>
        </div>
        <div className="text-gray-700 text-sm mb-4 basis-4/6 min-h-0 overflow-hidden	">
          <p>{description.slice(0, 151)}</p>
        </div>
        <div className="flex justify-between basis-1/6 mt-1">
          <p className="text-gray-600 text-xs">{author}</p>
          <p className="text-gray-600 text-xs">{date}</p>
        </div>
      </div>
    </div>
  );
}
