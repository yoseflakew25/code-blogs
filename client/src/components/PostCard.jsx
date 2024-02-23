import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  console.log(post)
  return (
    <>

<Link className="flex bg-[#1F2937] rounded-lg transition ease-in-out duration-300 hover:shadow-xl border-2 border-[#1F2937] hover:border-[#64FFDA]" to={`/post/${post.slug}`}>
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-md font-bold uppercase py-4"
    >
      
      {post.category}
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt=""
      src={post.image}      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="uppercase  text-xl font-semibold">
        {post.title}
        </h3>
      </a>

      <p className="mt-4 line-clamp-3 text-sm/relaxed text-gray-300 " dangerouslySetInnerHTML={{ __html: post && post.content }}>
      
      {/* <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div> */}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <Link 
        to={`/post/${post.slug}`}
        className="hover:text-gray-400 transition ease-in-out duration-300 mx-8 my-4"
      >
        Read Blog
      </Link>
    </div>
  </div>
</Link>


    </>

  );
}
