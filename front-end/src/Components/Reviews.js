import { useEffect } from "react";

export default function Reviews(props) {
  const { reviews } = props;

  useEffect(() => {
    // VIRTUAL DOM
    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  }, []);

  return (
    <section className="text-center w-full">
      <h2 className="py-10 text-4xl text-gray-600 font-extrabold font-[Open Sans] ">
        <b className="text-6xl leading-8">What</b> our customers are saying
      </h2>
      <div
        id="reviews-carousel"
        className="relative flowbite bg-gray-200"
        data-carousel="static"
      >
        {(reviews) ? (
        <div className="relative h-96 overflow-hidden rounded-0 ">
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className="hidden duration-1000 ease-linear"
                data-carousel-item
              >
                <section className="bg-gray-200 dark:bg-gray-900">
                  <div className="max-w-screen-xl px-4 pt-8 pb-4 mx-auto text-center lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote>
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">
                          {review.content}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile"
                        />
                        <div className="flex justify-items-end divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3  text-right font-bold text-gray-900 dark:text-white">
                            {review.firstname} {review.lastname}
                          </div>
                          <div className="pl-3 text-md font-md text-gray-600 dark:text-gray-400 hidden">
                            Order Rate:{" "}
                            <b className="font-bold">{review.rating}</b>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
        ) : (
        <div className="p-6">No Reviews to display</div>
        )}
        <div className="grid grid-cols-2 ">
          <div className="relative ">
            <button
              type="button"
              className="absolute -top-20 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-30 h-30 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-100">
                <svg
                  aria-hidden="true"
                  className=" text-gray-800 w-30 h-30 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </div>
          <div className="relative ">
            <button
              type="button"
              className="absolute -top-20 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-30 h-30 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-100">
                <svg
                  aria-hidden="true"
                  className="w-30 h-30 text-gray-800 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
