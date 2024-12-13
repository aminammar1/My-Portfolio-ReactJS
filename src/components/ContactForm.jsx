{
  /*< <ContactForm />*/
}

import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import "./styleForm.css";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      // EmailJS Configuration from .env
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          alert("Your message has been successfully sent!");
          resetForm();
        })
        .catch((error) => {
          console.error("Error sending message: ", error);
          alert("Failed to send the message. Please try again.");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="contact-form-container">
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Full name*"
            className={clsx("input", {
              "input-error": formik.touched.name && formik.errors.name,
            })}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="error-text">{formik.errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email*"
            className={clsx("input", {
              "input-error": formik.touched.email && formik.errors.email,
            })}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-text">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="6"
            placeholder="Message*"
            className={clsx("input", {
              "input-error": formik.touched.message && formik.errors.message,
            })}
          />
          {formik.touched.message && formik.errors.message && (
            <span className="error-text">{formik.errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
