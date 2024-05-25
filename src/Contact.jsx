function Contact(){
    return (
        <div id="contact" className="flex flex-col md:flex-row pt-32 pl-7 mb-28">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="src/assets/team-member-3.webp" alt="Team Member" className="w-full md:w-auto transition-all duration-75 hover:scale-90 hover:-translate-y-1 rounded-md pr-10" />
          <div className="bg-black text-white p-6 md:p-8 w-full md:w-auto">
            <h2 className="text-3xl font-segoe-ui tracking-wide font-bold mb-7">Contact us today</h2>
            <div className="flex items-center mb-7">
              <svg className="w-8 h-8 fill-default-black text-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/></svg>
              <p className="ml-4 text-xl font-segoe-ui font-bold">(123) 4567 890</p>
            </div>
            <div className="flex items-center mb-7">
              <svg className="w-8 h-8 fill-default-black text-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/></svg>
              <p className="ml-4 text-xl font-segoe-ui font-bold">email@mail.com</p>
            </div>
            <div className="flex items-center">
              <svg className="w-8 h-8 fill-default-black text-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M446.67-42v-76.67q-133-14-223.5-104.5t-104.5-223.5H42v-66.66h76.67q14-133 104.5-223.5t223.5-104.5V-918h66.66v76.67q133 14 223.5 104.5t104.5 223.5H918v66.66h-76.67q-14 133-104.5 223.5t-223.5 104.5V-42h-66.66ZM480-184q122 0 209-87t87-209q0-122-87-209t-209-87q-122 0-209 87t-87 209q0 122 87 209t209 87Zm0-142.67q-64 0-108.67-44.66Q326.67-416 326.67-480t44.66-108.67Q416-633.33 480-633.33t108.67 44.66Q633.33-544 633.33-480t-44.66 108.67Q544-326.67 480-326.67Zm0-66.66q36.33 0 61.5-25.17t25.17-61.5q0-36.33-25.17-61.5T480-566.67q-36.33 0-61.5 25.17T393.33-480q0 36.33 25.17 61.5t61.5 25.17Zm0-86.67Z"/></svg>
              <p className="ml-4 text-xl font-segoe-ui font-bold">
                304 North Cardinal St.<br />
                Dorchester Center, MA 02124
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-4xl font-segoe-ui tracking-wide font-bold mb-8">Send us a message</h2>
          <p className="text-xl font-light tracking-wide font-segoe-ui pb-12">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. <br /> Ut sit amet erat nec nibh rhoncus varius in non lorem.</p>
          <form className=" space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" required className=" p-6 bg-white-smoke rounded placeholder:text-lg" />
              <input type="text" placeholder="Last Name *" required className=" p-6  bg-white-smoke rounded placeholder:text-lg " />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Your Email *" required className=" p-6  bg-white-smoke rounded placeholder:text-lg " />
              <input type="text" placeholder="Your Phone Number" required className=" p-6  bg-white-smoke rounded placeholder:text-lg " />
            </div>
            <select required className=" p-6  bg-white-smoke rounded w-full text-gray1 text-lg">
              <option>Select Service</option>
              <option>Home Cleaning</option>
              <option>Pool Cleaning</option>
              <option>Window Cleaning</option>
            </select>
            <textarea  required placeholder="Message *" className="p-3 rounded bg-white-smoke w-full h-32 placeholder:text-lg"></textarea>
            <button className='mt-8 w-3/4 sm:w-1/2 md:w-3/4 lg:w-64 h-16 bg-default-black text-default font-bold hover:bg-hover-yellow hover:text-default-black rounded-lg text-lg'>
                Send Message
            </button>          
            </form>
        </div>
      </div>
    )
};

export default Contact;