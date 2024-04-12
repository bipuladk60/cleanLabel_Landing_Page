import emailjs from 'emailjs-com';
import {useRef} from 'react';


const JoinUs = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return(
        

        <div id = "contact" className=" mt-20 w-full bg-black flex flex-col items-center">
        <div className="container px-4 mx-auto lg:w-1/2 grid grid-cols-1 gap-4">
        <div className="text-white font-jaldi text-4xl sm:text-4xl md:text-6xl mt-10">
            <h1>Join Us!</h1>
        </div>
             <div className="flex-1 mx-2">
             <form ref = {form} onSubmit={sendEmail} className="w-full mt-8">
                <input name = "name" className="font-jaldi text-white appearance-none bg-transparent border-b pt-3 pb-2 md:text-2xl sm:text-[1rem] w-full leading-tight focus:outline-none mt-8" type="text" placeholder="Name..." required></input>
                <input name = "email" className="font-jaldi text-white appearance-none bg-transparent border-b pt-3 pb-2 md:text-2xl sm:text-[1rem] w-full leading-tight focus:outline-none mt-8" type="email" placeholder="Email..." required></input>
                <input name = "message" className="font-jaldi text-white appearance-none bg-transparent border-b pt-3 pb-2 md:text-2xl sm:text-[1rem] w-full leading-tight focus:outline-none mt-8" type="text" placeholder="Message..." required></input>
                <button className="rounded bg-white text-black w-full h-10 mt-7 font-jaldi text-2xl mb-10" type='submit'>Submit</button>
                </form>
             </div>

            </div>
        </div>

    )
};

export default JoinUs;