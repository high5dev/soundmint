import { Formik } from "formik";
import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const GetInTouch = dynamic(() => import("./get-in-touch"));

const ContactForm = ({}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  return (
    <section className="bg-black text-white pt-10 pb-20 lg:py-20">
      <div className="wrapper">
        <div className="md:grid md:grid-cols-3 gap-20">
          <div className="col-span-2">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = (
                    <p className="text-sm mt-2 text-gray-300">
                      First Name Required{" "}
                      <span className="text-brightGreen">*</span>
                    </p>
                  );
                }
                if (!values.lastName) {
                  errors.lastName = (
                    <p className="text-sm mt-2 text-gray-300">
                      Last Name Required{" "}
                      <span className="text-brightGreen">*</span>
                    </p>
                  );
                }
                if (!values.email) {
                  errors.email = (
                    <p className="text-sm mt-2 text-gray-300">
                      Email Required <span className="text-brightGreen">*</span>
                    </p>
                  );
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = (
                    <p className="text-sm mt-2 text-gray-300">
                      Invalid Email Address{" "}
                      <span className="text-brightGreen">*</span>
                    </p>
                  );
                }

                if (!values.message) {
                  errors.message = (
                    <p className="text-sm mt-2 text-gray-300">
                      Message Required{" "}
                      <span className="text-brightGreen">*</span>
                    </p>
                  );
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const url = `${process.env.API}/api/contact-us`;
                  const { data } = await axios.post(url, { ...values });

                  if (data.isSuccess) {
                    setMessage("Thank you! Your submission has been received!");
                  } else {
                    setMessage(data.message);
                    setError(true);
                  }
                } catch (e) {
                  setMessage(e.message);
                  setError(true);
                } finally {
                  setSubmitting(false);
                }

                setShowMessage(true);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <>
                  <form onSubmit={handleSubmit} className="my-8">
                    <label className="block mb-8">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="First Name"
                        className="form-input w-full bg-transparent border-l-0 border-t-0 border-r-0 border-b border-white p-0 placeholder-white pb-4 mb-2 focus:outline-none focus:border-brightGreen focus:ring-0"
                      />
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </label>
                    <label className="block mb-8">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Last Name"
                        className="form-input w-full bg-transparent border-l-0 border-t-0 border-r-0 border-b border-white p-0 placeholder-white pb-4 mb-2 focus:outline-none focus:border-brightGreen focus:ring-0"
                      />
                      {errors.lastName && touched.lastName && errors.lastName}
                    </label>
                    <label className="block mb-8">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                        className="form-input w-full bg-transparent border-l-0 border-t-0 border-r-0 border-b border-white p-0 placeholder-white pb-4 mb-2 focus:outline-none focus:border-brightGreen focus:ring-0"
                      />
                      {errors.email && touched.email && errors.email}
                    </label>
                    <label className="block">
                      <span className="block mb-4">Message</span>
                      <textarea
                        type="message"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="6"
                        className="form-textarea block w-full bg-transparent border border-white p-2 placeholder-white pb-4 mb-2 focus:outline-none focus:border-brightGreen focus:ring-0"
                      />
                      {errors.message && touched.message && errors.message}
                    </label>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-8 bg-brightGreen text-black p-2 w-full md:w-[200px] font-sans tracking-wide font-bold hover:bg-brightBlue hover:text-black"
                    >
                      Submit
                    </button>
                  </form>
                  <div>
                    <div className={`${error ? "red" : null}`}>
                      {showMessage && <div>{message}</div>}
                    </div>
                  </div>
                </>
              )}
            </Formik>
          </div>
          <div className="col-span-1">
            <GetInTouch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
