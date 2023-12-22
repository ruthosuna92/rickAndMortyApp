
const About = () => {

    return <div className="flex justify-center">
        <div className="flex flex-col">
            <div className="flex flex-col items-center bg-white border border-fuchsia-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-fuchsia-100 dark:border-fuchsia-700 dark:bg-fuchsia-800 dark:hover:bg-fuchsia-700">
                <img className="object-cover min-h-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://res.cloudinary.com/dmseivudh/image/upload/v1703272594/20231012_203404_2_skkdnu.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">I am Alejandra Osuna</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-100">
                        I'm a fullstack developer with a sales background, originally trained as a petroleum engineer, and a mom of two. I'm known for being very sociable—I enjoy meeting people from different cultures. I love working on both the frontend and backend, crafting solutions using technologies like React, Node, Express, and PostgreSQL. Currently, I'm expanding my skills by learning Java with Spring Boot and Next.js with TypeScript.</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-100">

                        In my free time, I enjoy learning, painting, and baking cakes. Currently, I am actively seeking exciting projects that challenge my programming skills.</p>
                </div>
            </div>
            <div className="flex justify-evenly flex-row">
<a href="https://github.com/ruthosuna92" className="flex justify-center">
            <button 
  class="group hover:bg-gray-600 relative bg-gray-500 rounded text-neutral-50 duration-500 font-bold flex justify-center gap-2 items-center p-2 pr-6"
>
<svg ariaHidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
</svg>
  <span class="border-l-2 px-1">Alejandra Osuna</span>
  <div
    class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
  >
    See my profile!
  </div>
</button>
</a>

<a href="https://www.linkedin.com/in/alejandra-osuna-258b8a248/" className="flex justify-center">
            <button 
  class="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-center gap-2 items-center p-2 pr-6"
>
  <svg
    class="w-8 h-8 fill-neutral-50"
    height="100"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    width="100"
    x="0"
    xmlns="http://www.w3.org/2000/svg"
    y="0"
  >
    <path
      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
    ></path>
  </svg>
  <span class="border-l-2 px-1">Alejandra Osuna</span>
  <div
    class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
  >
    See my profile!
  </div>
</button>
</a>
</div>
        </div>

    </div>
}

export default About;