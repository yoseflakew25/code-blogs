
import heroPic from "../assets/Blog post-amico.svg";
import { Link } from "react-router-dom";


const Hero = () => {
  
  return (
    <section id="about" >
      <div className="-mt-16 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className=" mx-8 md:7/12 lg:w-1/2">
          <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to my Blog
          </h1>
          <p className="my-8 text-gray-400  mb-12">
          I'm dedicated to improving my reading and writing skills, and this platform serves as a practical exercise to enhance those abilities. With a background in journaling, I understand the power of organizing thoughts through writing. Here, you'll find a collection of my written works on topics like web development, software engineering, and programming languages. My aim is to inspire and promote personal growth for both myself and readers like you. Enjoy and benefit from the content!       

          </p>
          <Link
          to='/search'
          className='px-12 py-4  border-2 border-[#64FFDA] rounded-2xl mr-8 hover:text-gray-400 hover:border-gray-400 transition ease-in-out duration-300'
        >
          View all posts
        </Link>
        <Link
          to='/about'
          className='hover:text-gray-400 transition ease-in-out duration-300'
        >
           About me
        </Link>
          {/* <button className="btn btn-primary opacity-75 opacity-75 px-12 text-white mr-4">Get Started</button>
          <button className="btn btn-outline btn-primary opacity-75 px-12">Primary</button> */}
        </div>
        
        <div className="md:5/12 lg:w-1/2 p-16">
          <img
            src={heroPic}
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero