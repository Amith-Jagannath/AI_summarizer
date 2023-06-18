import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticle, setAllArticle] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("article")
    );
    if (articlesFromLocalStorage) {
      setAllArticle(articlesFromLocalStorage);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      const updatedAllArticle = [newArticle, ...allArticle];
      setAllArticle(updatedAllArticle);
      localStorage.setItem("article", JSON.stringify(updatedAllArticle));
      console.log(newArticle);
    }
  };
  const [copied, setCopied] = useState([]);
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied([]);
    }, 4000);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter the url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            type="submit"
          >
            ✅
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticle.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn">
                <img
                  src={copied == item.url ? tick : copy}
                  alt="copy"
                  className="w-[40%] h-[60%] object-contain"
                  onClick={() => handleCopy(item.url)}
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-meduim text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            well,that wasnt supposed to happen
            <br />
            <span>{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2>
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium  text-gray">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
