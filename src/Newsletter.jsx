function Newsletter(){
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

    return(
        <div className="flex flex-col items-center justify-center bg-wash">
        <div className="flex justify-center items-center h-full pt-32">
        
        </div>
        <div className="text-center">
      <h1 className="text-4xl text-default font-bold tracking-wider mb-8">Subscribe to Our Newsletter</h1>
      <form className="flex justify-center items-center mb-28">
        <input 
          type="email" 
          placeholder="Your Email *" 
          required 
          className="p-6 bg-white-smoke rounded placeholder:text-xl w-3/4 sm:w-1/2 md:w-2/3 lg:w-96" 
        />
        <button 
          type="submit" 
          className="ml-4 w-3/4 sm:w-1/2 md:w-1/4 lg:w-64 h-16 bg-default-black text-default font-bold hover:bg-hover-yellow hover:text-default-black rounded-lg text-lg" onClick={() => scrollToSection('home')}
        >
          Subscribe
        </button>
      </form>
    </div>
      </div>
    )
};

export default Newsletter;