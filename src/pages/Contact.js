import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

 
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

 
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      
      setDisabled(true);

      
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      
      await emailjs.send(
        "service_iz1x5r8",   
        "template_rd2bc6r",  
        templateParams,
        "CUk1qvckHREGKQAHL"   
      );

      
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
     
      setDisabled(false);
     
      reset();
    }
  };

  return (
    <div className="ContactForm">
      <div className="row">
        <div className="col-12 text-center">
          <div className="contactForm">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}  
              noValidate
            >
              {/* Row 1 of form */}
              <div className="contact-text">
                <h1>Contact Me:</h1>
              </div>
              <div className="formRow">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Please enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="errorMessage">{errors.name.message}</span>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    name="email"
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control formInput"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="errorMessage">
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className="formRow">
                <div className="col">
                  <input
                    type="text"
                    name="subject"
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Please enter a subject',
                      },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className="errorMessage">{errors.subject.message}</span>
                  )}
                </div>
              </div>
              {/* Row 3 of form */}
              <div className="formRow">
                <div className="col">
                  <textarea
                    rows={3}
                    name="message"
                    {...register('message', {
                      required: true,
                    })}
                    className="form-control formInput"
                    placeholder="Message"
                  />
                  {errors.message && (
                    <span className="errorMessage">Please enter a message</span>
                  )}
                  <button
                    className="submit-btn"
                    disabled={disabled}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Alert Message */}
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertInfo({ display: false, message: '', type: '' })} // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  );
};

export default Contact;
