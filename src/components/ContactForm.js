// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xayvvwyl");
  if (state.succeeded) {
      return <p>Thank you for your message!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='block'>
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='block border-2'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className='block'>Message:</label>
      <textarea
        id="message"
        name="message"
        className='block border-2'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="p-2 my-4 border">
        Submit
      </button>
    </form>
  );
}
