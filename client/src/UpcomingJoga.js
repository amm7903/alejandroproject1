import emailjs from "emailjs-com";
import React from 'react';
// import emailjs from '@emailjs/browser';


export default function UpcomingJoga() {
   

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_xp32n69', 'template_3fie8vn', e.target, 'user_wrfyPddCw34bWNWYfoQTz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }; 
    
    return (
        <div className="inq">
            <h1 className="inquiry">Inquiry Form</h1>
            <p className="inquiry2"> Send us an email if you are interested in joining us for future JOGA Showcases or our Residency Programs</p>
            <div className='email'>
            <form onSubmit={sendEmail}>
                <div className='row pt-5 mx-auto'>
                    <div className='col-8 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Name' name="name"/>
                    </div>
                    <div className='col-8 form-group mx-auto'>
                        <input type="email" className='form-control' placeholder='Email Address' name="email"/>
                    </div>
                    <div className='col-8 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Subject' name="subject"/>
                    </div>
                    <div className='col-8 form-group mx-auto'>
                        <textarea className='form-control' id="" cols="30" rows="8"placeholder='Your message' name="message"/>
                    </div>
                    <div className='col-8 form-group mx-auto'>
                        <input type="submit" className='btn btn-info' value="Send Message"/>
                    </div>
                </div>
            </form>
                </div>
                <p className="inquiry3"> For any other questions please email: Kephernjoga@gmail</p>
        </div>
    )
}
