import tempPic from "../assets/Blog post-amico.svg";
import { Link } from "react-router-dom";
import mePic from "../assets/mepic.jpg";
export default function About() {
  return (
    <>
    
   

    <section id="about" className="p-16">
        <div className="bg-[#1F2937] lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="mx-8 md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl ">
           About Code Blogs
            </h2>
            <p className="my-8 text-gray-400 mb-12">
          

On this blog, you'll find weekly articles on topics such as web development, software engineering, and programming languages. Sahand is always learning and exploring new technologies, so be sure to check back often for new content!

We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.

            </p>

            <Link
          to='/search'
          className='px-12 py-4  border-2 border-[#64FFDA] rounded-2xl mr-8 hover:text-gray-400 hover:border-gray-400 transition ease-in-out duration-300'
        >
         Get Started
        </Link>
          </div>
          <div className="md:4/12 lg:w-1/3">
            <img src={tempPic} alt="image" loading="lazy" width="" height="" />
          </div>
        </div>
      </section>


      <section id="team" className="px-32 py-16">
        <div className="container">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-primary opacity-75 bg-teal-accent-400">
                About
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              <span className="relative inline-block mr-2">

                <span className="relative">Meet</span>
              </span>
              The developer
            </h2>
           
          </div>

          <div className="flex flex-col lg:flex-row gap-2 justify-center -mx-4">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="mb-10 wow fadeInUp" data-wow-delay=".1s">
                <div className="h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full">
                  <img
                    src={mePic}
                    alt="image"
                    className="w-full rounded-full"
                  />
                  <span className="absolute top-0 left-0 z-[-1]">
                    <svg
                      width="71"
                      height="82"
                      viewBox="0 0 71 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.29337"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 1.29337 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 12.6747 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 24.0575 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 35.4379 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 46.8197 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 68.807 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 57.9443 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 1.29337 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 12.6747 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 24.0575 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 35.4379 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 46.8197 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 68.807 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 57.9433 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 1.29337 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 1.29337 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 12.6747 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 12.6747 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 24.0575 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 24.0575 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 35.4379 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 35.4379 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 46.8197 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 46.8197 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 68.807 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 68.807 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 57.9433 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 57.9443 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 1.29337 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 1.29337 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 12.6747 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 12.6747 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 24.0575 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 24.0575 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 35.4379 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 35.4379 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 46.8197 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 46.8197 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 68.807 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 68.807 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 57.9433 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 57.9443 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 1.29337 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="1.2933"
                        r="1.29337"
                        transform="rotate(-90 1.29337 1.2933)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 12.6747 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="1.2933"
                        r="1.29337"
                        transform="rotate(-90 12.6747 1.2933)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 24.0575 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="1.29336"
                        r="1.29337"
                        transform="rotate(-90 24.0575 1.29336)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 35.4379 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="1.29336"
                        r="1.29337"
                        transform="rotate(-90 35.4379 1.29336)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 46.8197 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 46.8197 1.29354)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 68.807 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 68.807 1.29354)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 57.9443 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 57.9443 1.29354)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                        stroke="#13C296"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-2 text-lg font-medium text-dark">
                    Yosef Lakew
                  </h4>
                  <p className="mb-5 text-sm font-medium text-body-color">
                    Web Developer / UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-full lg:w-2/5">
              <p className="my-8 text-gray-300 ">
              This blog was created by Yosef Lakew as a personal project to share his thoughts and ideas with the world. Yosef is a passionate developer who loves to write about technology, coding, and everything in between.
              </p>
              <div className="items-center hidden gap-4 lg:flex">
                <a
                  href="https://portifoliov1-three.vercel.app/"
                  target="_blank"
                  className="px-5 py-2 text-md font-medium text-gray-600 bg-[#64FFDA] rounded-lg"
                >
                  Portfolio
                </a>

                <a
                  href="https://github.com/yoseflakew25"
                  target='_blank'
                  className="px-5 py-2 text-md font-medium rounded-lg text-white bg-primary opacity-75 hover:bg-gray-800"
                >
                 Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
