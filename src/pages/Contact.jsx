import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7gjq5ab',
        'template_7u0fe3y',
        form.current,
        'It7KSYXuJ6wonoDUU'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <input
          type="email"
          name="user_email"
          placeholder="Enter Email"
          required
        />
        <textarea
          name="message"
          placeholder="Enter Message"
          required
        />
        <button type="submit" className='btn btn-success'>Send
          <span className='send-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
          </span>
        </button>
    <div className="socials-section">
      <p className="socials poppins-regular">Socials:</p>
      <div className="linkedin-icon">
        <a
        href="https://www.linkedin.com/in/aaheli-ghosh-undefined-b57a49377"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
        />
        </a>
      </div>
    </div>
      </form>

      <div className="illustration-container">
        <div className="contact-illustration">
          <img src={`${import.meta.env.BASE_URL}undraw_begin_chat.svg`} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
