import NewsCards from "organisms/NewsCards";
import Header from "organisms/Header";
import NewsControl from "organisms/NewsControl";

export default function News() {
  return (
    <div className="flex justify-center	items-center h-full">
      <div className="flex flex-col w-full sm:w-9/10 2xl:w-9/10 h-full bg-backgroundSecondary rounded-md0 sm:ml-5 sm:mr-5 2xl:ml-10 2xl:mr-10">
        <div>
          <Header />
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:basis-1/4 md:h-full">
            <NewsControl />
          </div>
          <div className="md:basis-3/4 h-full mt-2">
            <NewsCards />
          </div>
        </div>
      </div>
    </div>
  );
}
