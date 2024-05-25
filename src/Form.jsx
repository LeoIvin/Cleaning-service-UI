function Form(){
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      };


    return(
        <div className="p-20 border border-default bg-default">
            <div className="flex items-center">
                <h1 className="font-serif text-default-black font-bold text-2xl text-center mb-5 pb-10 tracking-wide font-segoe-ui">Schedule An Appointment</h1>
            </div>

            <form className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16" id="book-appointment">
                <input placeholder="Your Name*" type="text" required className="w-full lg:w-64 h-16 border rounded border-default bg-white-smoke placeholder:text-slate-400 placeholder:text-lg placeholder:text-center"/>
                <input placeholder="Your Phone Number*" type="text" required className="w-full lg:w-64 h-16 border rounded border-default bg-white-smoke placeholder:text-lg placeholder:text-slate-400 placeholder:mr-5 placeholder:text-center"/>
                <select required className="w-full lg:w-64 h-16 border rounded border-default bg-white-smoke text-lg text-gray1 placeholder:mr-5 placeholder:text-center">
                    <option value="" className="text-center text-lg">Select Service*</option>
                    <option value="option1">Office Cleaning</option>
                    <option value="option2">Home Cleaning</option>
                    <option value="option3">Apartment Building Cleaning</option>
                </select>

                <button type="submit" className='mt-8 w-full lg:w-64 h-16 border rounded-lg border-default bg-default-black text-default font-bold font-helvetica hover:bg-hover-yellow hover:text-default-black' onClick={() => scrollToSection('home')}>Book Appointment</button>
            </form>
        </div>
    )
};

export default Form;
