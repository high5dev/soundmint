import { useContext, useState } from "react";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";
import { Formik } from "formik";
import axios from "axios";

const SignUpUpdatesAnnouncements = ({}) => {
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  const { subscribeRef } = useContext(ScrollContext);

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className="py-10 lg:pt-20" id="#sign-up" ref={subscribeRef}>
      <div className="wrapper">
        <InView
          onChange={(inView) =>
            onComponentVisible(
              inView,
              componentNames.signUpUpdatesAnnouncements
            )
          }
        >
          <h3 className="text-[40px] text-black font-bold leading-tight mb-4 lg:text-[70px]">
            <span className="text-lightGrey">Sign up for</span>
            <br className="lg:hidden" /> updates{" "}
            <span className="text-lightGrey">&</span> announcements
          </h3>
        </InView>
        <div>
          <p className="font-mono lg:max-w-2xl text-sm">
            Stay up to date on future Artist Collaborations and the SoundMint
            Platform. We{"'"}ll never share your email address.
          </p>
          <div className="lg:max-w-2xl">
            <Formik
              initialValues={{ email: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = (
                    <p>
                      Email Required <span className="text-brightGreen">*</span>
                    </p>
                  );
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = (
                    <p>
                      Invalid Email Address{" "}
                      <span className="text-brightGreen">*</span>
                    </p>
                  );
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const url = `${process.env.API}/api/signup`;
                  const { data } = await axios.post(url, {
                    email: values.email,
                  });

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
                  <form onSubmit={handleSubmit} className="my-8 md:flex">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="border w-full border-black p-3 mb-6 md:mb-0 placeholder-black md:mr-6 focus:outline-none focus:ring-1 focus:ring-brightGreen focus:border-transparent"
                      placeholder="Email"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white p-3 w-full font-sans font-medium tracking-wide md:w-80 hover:bg-brightGreen hover:text-black"
                    >
                      Submit
                    </button>
                  </form>
                  {errors.email && touched.email && errors.email}
                </>
              )}
            </Formik>
          </div>
          <div>
            <div className={`${error ? "red" : null}`}>
              {showMessage && <div>{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpUpdatesAnnouncements;
