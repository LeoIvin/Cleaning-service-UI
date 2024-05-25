
function Benefits() {
    return (
      <>
      <div className=" pt-20 pb-8">
      <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[700px_1fr] lg:gap-12 xl:grid-cols-[750px_1fr]">
              <img
                alt="Cleaning Service"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-75 hover:scale-90 hover:-translate-y-1"
                height="400"
                src="src/assets/pexels-mastercowley-713297.jpg"
                width="700"
              />
              <div className="space-y-3">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-wide font-segoe-ui sm:text-4xl md:text-5xl">Spotless Home</h2>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400 font-segoe-ui tracking-wide text-2xl pt-3">
                    Our professional cleaners will transform your home into a clean and refreshing oasis.
                  </p>
                </div>
                <ul className="grid gap-2 py-4 text-lg font-segoe-ui tracking-normal">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Thorough cleaning of all surfaces
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Spotless windows and mirrors
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Sanitized bathrooms and kitchen
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Dust-free furniture and decor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[700px_1fr] lg:gap-12 xl:grid-cols-[750px_1fr]">
              <img
                alt="Cleaning Service"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-75 hover:scale-90 hover:-translate-y-1"
                height="400"
                src="src/assets/home-feature-image-2.webp"
                width="700"
              />
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-wide font-segoe-ui sm:text-4xl md:text-5xl">Relax and Unwind</h2>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400 font-segoe-ui tracking-wide text-2xl">
                    Let our team handle the cleaning so you can focus on what matters most.
                  </p>
                </div>
                <ul className="grid gap-2 py-4 text-lg font-segoe-ui tracking-normal">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Customized cleaning plans
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Eco-friendly cleaning products
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Flexible scheduling
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Satisfaction guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid place-items-center pt-6">
             <button className='mt-8 w-3/4 sm:w-1/2 md:w-3/4 lg:w-64 h-16 bg-default-black text-default font-bold hover:bg-hover-yellow hover:text-default-black rounded-lg text-lg'>
                Get in touch
            </button>
        </div>

        </section>
      </div>
        
      </>
    )
  }
  export default Benefits;
  
  function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  