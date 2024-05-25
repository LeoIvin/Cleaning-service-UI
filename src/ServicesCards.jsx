import React from 'react';

function Card({ icon, title, description }) {
  return (
      <div className="flex flex-col items-center justify-center p-4 transition-all duration-75 transform hover:scale-105 hover:-translate-y-1 hover:bg-hover-yellow rounded-xl border border-vlight-gray shadow-xl">
      <img src={icon} alt="icon" className="w-16 h-16 mb-7 fill-default-black"/>
      <h1 className="mb-2 text-2xl font-bold pb-7">{title}</h1>
      <p className="text-center font-medium pb-14 text-xl">{description}</p> 
    </div>
    
  );
}

function Cards() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className='text-center mt-20 space-y-7 mb-10' id='services'>
        <h1 className='text-2xl font-bold text-default-gray tracking-wider font-segoe-ui'>How it works</h1>
        <h1 className='text-4xl font-bold tracking-wider font-segoe-ui'>How Cleaning Service Works</h1>
    </div>

    <div className="flex flex-col lg:flex-row justify-around p-10 bg-gray-100 space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-0 lg:space-x-7 pb-2">
      <Card
        icon="src\assets\calendar.png"
        title="Set Up a Cleaning Plan"
        description="In at iaculis lorem praesent tempor dictum tellus ut molestie."
      />
      <Card
        icon="src\assets\smartphone.png"
        title="Get an SMS confirmation"
        description="In at iaculis lorem praesent tempor dictum tellus ut molestie."
      />
      <Card
        icon="src\assets\coffee-cup.png"
        title="Sit Back and Relax"
        description="In at iaculis lorem praesent tempor dictum tellus ut molestie."
      />
</div>
    <div className="flex justify-center mb-28">
    <button className='mt-8 w-3/4 sm:w-1/2 md:w-3/4 lg:w-64 h-16 border border-default bg-default-black text-default font-bold hover:bg-hover-yellow hover:text-default-black rounded-lg text-lg' onClick={() => scrollToSection('contact')}>
    Contact Us
  </button>
</div>
    </>


  
  );
}

export default Cards;
