import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_py7dpnf',
        'template_detehah',
        form.current,
        'pidTGSYIT2cdSZXbn'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen p-10 bg-pink-50 text-black">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>

      
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
        <input
          name="user_name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="user_email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
        >
          Send Mail
        </button>
      </form>

      
      <div className="mt-10 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Or reach out via:</h2>
        <div className="flex flex-col gap-4 text-lg">
          <a
            href="https://x.com/vamshimudiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaTwitter size={20} /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/vamshi05/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
