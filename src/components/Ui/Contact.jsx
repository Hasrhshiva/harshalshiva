import React ,{ useRef ,useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [refresh, setRefresh] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1zd02ru', 'template_yj4iwr9', form.current, {
        publicKey: 'yxH5Ry97UFO_yGosc',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset(); // Reset the form fields
          setRefresh(!refresh);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get In Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.168288161878!2d77.01467509040144!3d8.49119966620075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b085d47f33ed%3A0x6ad1a35e9158009a!2sPottayil%2C%20Kerala%20695573!5e0!3m2!1sen!2sin!4v1716117364390!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" ref={form} onSubmit={sendEmail} action="">
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px] "
                  placeholder="Enter Your Name" name="client_name"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="w-full p-3 focus:outline-none rounded-[5px] "
                  placeholder="Enter Your Email" name="client_email"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px] "
                  placeholder="Subject" name="subject"
                />
              </div>
              <div className="mb-5">
                <textarea
                rows={3}
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px] "
                  placeholder="Write Your Message" name="message"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor
              text-center  ease-linear duration-150">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
