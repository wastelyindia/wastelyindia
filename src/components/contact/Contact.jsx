import "react-phone-number-input/style.css";

import PhoneNumber from "./PhoneNumber";

import { useRef } from "react";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { toast } from "react-toastify";

import contactImg from "../../assets/images/contact.jpg";

const Contact = () => {
  const form = useRef(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    validateEmail: "",
    Organisation: "",
    message: "",
    inquiry: "",
  };

  const {
    touched,
    values,
    handleChange,
    handleBlur,
    resetForm,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,

    validationSchema: contactSchema,

    onSubmit: () => {
      emailjs
        .sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);

          toast.success("Your assessment request has been submitted.");

          resetForm();
        })
        .catch((error) => {
          console.log(error.text);

          toast.error(error.text || "Something went wrong.");
        });
    },
  });

  return (
    <main className="bg-white text-wastely-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Engineering grid */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            hidden
            h-full
            w-[42%]
            opacity-40
            lg:block
            [background-image:linear-gradient(#E3EDF1_1px,transparent_1px),linear-gradient(90deg,#E3EDF1_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Ripple */}
        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[18%]
            hidden
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-wastely-cyan/10
            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[14%]
            top-[25%]
            hidden
            h-[230px]
            w-[230px]
            rounded-full
            border
            border-wastely-cyan/10
            lg:block
          "
        />

        <div className="wastely-container relative z-10">
          <div
            className="
              grid
              min-h-[500px]
              items-center
              gap-12
              py-16
              lg:grid-cols-[1fr_0.8fr]
              lg:gap-20
              lg:py-20
            "
          >
            {/* LEFT */}

            <div className="max-w-[680px]">
              <div className="wastely-section-eyebrow">
                Contact Wastely Aqua
              </div>

              <h1
                className="
                  mt-2
                  text-[2.5rem]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-wastely-deep
                  sm:text-[3rem]
                  lg:text-[3.4rem]
                "
              >
                Let's discuss your water or wastewater requirement.
              </h1>

              <p
                className="
                  mt-6
                  max-w-[610px]
                  text-base
                  leading-7
                  text-wastely-sub
                  sm:text-lg
                "
              >
                Tell us about your application, site requirements or
                treatment challenge. Our team can review the requirement
                and discuss the appropriate next steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#assessment-form"
                  className="wastely-btn wastely-btn-primary"
                >
                  Request an Assessment
                  <ArrowRight size={17} />
                </a>

                <a
                  href="mailto:info@wastelyaqua.com"
                  className="wastely-btn wastely-btn-secondary"
                >
                  Email Us
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-wastely-sub">
                  <CheckCircle2
                    size={16}
                    className="text-wastely-cyan"
                  />
                  Water treatment
                </div>

                <div className="flex items-center gap-2 text-sm text-wastely-sub">
                  <CheckCircle2
                    size={16}
                    className="text-wastely-cyan"
                  />
                  Wastewater treatment
                </div>

                <div className="flex items-center gap-2 text-sm text-wastely-sub">
                  <CheckCircle2
                    size={16}
                    className="text-wastely-cyan"
                  />
                  Plant services
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div className="overflow-hidden border border-wastely-line bg-wastely-bg-soft">
                <img
                  src={contactImg}
                  alt="Water and wastewater treatment infrastructure"
                  className="
                    aspect-[4/3]
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div className="border-t border-wastely-line bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                    Water & Wastewater
                  </p>

                  <p className="mt-1 text-sm text-wastely-sub">
                    Discuss your project requirement with our team
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-2 left-6 h-[2px] w-24 bg-wastely-cyan" />
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative h-8 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 h-8 w-full"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 20 C180 4 300 4 480 20 S780 36 960 20 S1260 4 1440 20"
              fill="none"
              stroke="#2FB4CE"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section
        id="assessment-form"
        className="wastely-section wastely-section-soft"
      >
        <div className="wastely-container">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <aside>
              <div className="wastely-section-eyebrow">
                Get In Touch
              </div>

              <h2 className="wastely-section-title">
                Tell us what you need.
              </h2>

              <p className="mt-5 max-w-[450px] text-sm leading-6 text-wastely-sub">
                Share the basic details of your project and we can
                understand the requirement before discussing the next step.
              </p>

              <div className="mt-9 border-t border-wastely-line">

                {/* EMAIL */}

                <div className="border-b border-wastely-line py-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-wastely-line
                        bg-white
                      "
                    >
                      <Mail
                        size={18}
                        className="text-wastely-blue"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                        Email
                      </p>

                      <a
                        href="mailto:info@wastelyaqua.com"
                        className="
                          mt-2
                          block
                          text-sm
                          font-semibold
                          text-wastely-deep
                          hover:text-wastely-blue
                        "
                      >
                        info@wastelyaqua.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* PHONE */}

                <div className="border-b border-wastely-line py-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-wastely-line
                        bg-white
                      "
                    >
                      <Phone
                        size={18}
                        className="text-wastely-blue"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                        Phone
                      </p>

                      <a
                        href="tel:+919136069130"
                        className="
                          mt-2
                          block
                          text-sm
                          font-semibold
                          text-wastely-deep
                          hover:text-wastely-blue
                        "
                      >
                        +91 913 606 9130
                      </a>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}

                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-wastely-line
                        bg-white
                      "
                    >
                      <MapPin
                        size={18}
                        className="text-wastely-blue"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-blue">
                        Office
                      </p>

                      <p className="mt-2 text-sm leading-6 text-wastely-deep">
                        1A, Lake View, JVLR,
                        <br />
                        Powai, Mumbai,
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL NOTE */}

              <div className="mt-7 border-l-2 border-wastely-cyan pl-4">
                <p className="text-sm leading-6 text-wastely-sub">
                  For a faster assessment, include your industry,
                  application, approximate capacity and any existing
                  treatment-system information where available.
                </p>
              </div>
            </aside>

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className="
                border
                border-wastely-line
                bg-white
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <div className="border-b border-wastely-line pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-wastely-blue">
                  Request an Assessment
                </p>

                <h2 className="mt-2 text-2xl font-bold text-wastely-deep">
                  Tell us about your requirement.
                </h2>

                <p className="mt-3 max-w-[620px] text-sm leading-6 text-wastely-sub">
                  The more information you can provide, the easier it is
                  for us to understand the project context.
                </p>
              </div>

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="mt-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* FIRST NAME */}

                  <FormField
                    label="First Name"
                    name="firstName"
                    placeholder="First Name *"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && errors.firstName}
                  />

                  {/* LAST NAME */}

                  <FormField
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name *"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && errors.lastName}
                  />

                  {/* PHONE */}

                  <div>
                    <label className={labelStyle}>
                      Phone Number
                    </label>

                    <PhoneNumber
                      value={values.phoneNumber}
                      onChange={(value) =>
                        setFieldValue("phoneNumber", value)
                      }
                      onBlur={handleBlur}
                      error={errors.phoneNumber}
                      touched={touched.phoneNumber}
                    />
                  </div>

                  {/* EMAIL */}

                  <FormField
                    label="Email"
                    name="validateEmail"
                    type="email"
                    placeholder="Email Address *"
                    value={values.validateEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.validateEmail &&
                      errors.validateEmail
                    }
                  />

                  {/* ORGANISATION */}

                  <div className="sm:col-span-2">
                    <FormField
                      label="Organisation"
                      name="Organisation"
                      placeholder="Organisation Name *"
                      value={values.Organisation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.Organisation &&
                        errors.Organisation
                      }
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className={labelStyle}
                    >
                      Project Requirement
                    </label>

                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell us about your water or wastewater requirement..."
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={textareaStyle}
                    />

                    {touched.message && errors.message && (
                      <small className={errorStyle}>
                        {errors.message}
                      </small>
                    )}
                  </div>

                  {/* SUBJECT */}

                  <div className="sm:col-span-2">
                    <label className={labelStyle}>
                      What can we help with?
                    </label>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        "Request an Assessment",
                        "Water / Wastewater Treatment",
                        "Plant Services",
                        "Technology / Process",
                        "General Inquiry",
                      ].map((item) => (
                        <label
                          key={item}
                          className="cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="inquiry"
                            value={item}
                            checked={values.inquiry === item}
                            onChange={handleChange}
                            className="peer sr-only"
                          />

                          <div
                            className="
                              border
                              border-wastely-line
                              bg-white
                              px-4
                              py-3
                              text-sm
                              font-medium
                              text-wastely-sub
                              transition-all
                              duration-200
                              peer-checked:border-wastely-blue
                              peer-checked:bg-[#F3F8FA]
                              peer-checked:text-wastely-deep
                              hover:border-wastely-cyan
                            "
                          >
                            {item}
                          </div>
                        </label>
                      ))}
                    </div>

                    {touched.inquiry && errors.inquiry && (
                      <small className={errorStyle}>
                        {errors.inquiry}
                      </small>
                    )}
                  </div>
                </div>

                {/* SUBMIT */}

                <div className="mt-8 flex flex-col gap-4 border-t border-wastely-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[460px] text-xs leading-5 text-wastely-sub">
                    By submitting this form, you are sharing your project
                    requirement with Wastely Aqua for assessment and
                    follow-up.
                  </p>

                  <button
                    type="submit"
                    className="wastely-btn wastely-btn-primary shrink-0"
                  >
                    Submit Requirement
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT TO SHARE
      ===================================================== */}

      <section className="wastely-section wastely-section-white">
        <div className="wastely-container">

          <div className="wastely-section-header">
            <div className="wastely-section-eyebrow">
              Project Information
            </div>

            <h2 className="wastely-section-title">
              Helpful information for an initial assessment.
            </h2>

            <p className="wastely-section-description">
              You do not need to have every detail ready. Share what is
              available and we can discuss the requirement from there.
            </p>
          </div>

          <div className="grid border-l border-t border-wastely-line md:grid-cols-3">

            <InfoBlock
              number="01"
              title="Application"
              text="Tell us what the water or wastewater is used for and which industry or facility it relates to."
            />

            <InfoBlock
              number="02"
              title="Capacity"
              text="If available, provide approximate flow, daily volume or treatment capacity requirements."
            />

            <InfoBlock
              number="03"
              title="Existing System"
              text="For an existing plant, share the current treatment process, issue or performance concern."
            />

          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE / MAP
      ===================================================== */}

      <section className="wastely-section wastely-section-soft">
        <div className="wastely-container">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">

            <div className="border border-wastely-line bg-wastely-deep p-7 sm:p-9">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-wastely-cyan">
                <span className="h-px w-7 bg-wastely-cyan" />
                Mumbai Office
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                Visit or connect with our team.
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/70">
                Wastely Aqua
                <br />
                1A, Lake View, JVLR
                <br />
                Powai, Mumbai
                <br />
                Maharashtra, India
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-wastely-cyan">
                  Contact
                </p>

                <a
                  href="tel:+919136069130"
                  className="mt-2 block text-sm font-semibold text-white hover:text-wastely-cyan"
                >
                  +91 913 606 9130
                </a>

                <a
                  href="mailto:info@wastelyaqua.com"
                  className="mt-2 block text-sm font-semibold text-white hover:text-wastely-cyan"
                >
                  info@wastelyaqua.com
                </a>
              </div>
            </div>

            <div className="min-h-[400px] overflow-hidden border border-wastely-line bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.610545440925!2d72.89416237466631!3d19.124733850441867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba452212f9%3A0xe8088dae3449a6f1!2sWastely%20Aqua%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1704190130770!5m2!1sen!2sin"
                className="h-full min-h-[400px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wastely Aqua Mumbai office location"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};


/* =========================================================
   REUSABLE FORM FIELD
   ========================================================= */

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={labelStyle}
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputStyle}
      />

      {error && (
        <small className={errorStyle}>
          {error}
        </small>
      )}
    </div>
  );
};


/* =========================================================
   INFO BLOCK
   ========================================================= */

const InfoBlock = ({ number, title, text }) => {
  return (
    <div
      className="
        border-b
        border-r
        border-wastely-line
        bg-white
        p-6
        sm:p-7
      "
    >
      <span className="text-xs font-semibold tracking-[0.12em] text-wastely-sub">
        {number}
      </span>

      <h3 className="mt-10 text-lg font-bold text-wastely-deep">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-wastely-sub">
        {text}
      </p>

      <div className="mt-6 h-[2px] w-10 bg-wastely-cyan" />
    </div>
  );
};


/* =========================================================
   FORM STYLES
   ========================================================= */

const labelStyle = `
  block
  mb-2
  text-xs
  font-semibold
  uppercase
  tracking-[0.08em]
  text-wastely-deep
`;

const inputStyle = `
  w-full
  border
  border-wastely-line
  bg-white
  px-4
  py-3.5
  text-sm
  text-wastely-ink
  outline-none
  transition-all
  duration-200
  placeholder:text-[#8AA0AA]
  focus:border-wastely-cyan
  focus:ring-2
  focus:ring-wastely-cyan/10
`;

const textareaStyle = `
  w-full
  resize-none
  border
  border-wastely-line
  bg-white
  px-4
  py-3.5
  text-sm
  leading-6
  text-wastely-ink
  outline-none
  transition-all
  duration-200
  placeholder:text-[#8AA0AA]
  focus:border-wastely-cyan
  focus:ring-2
  focus:ring-wastely-cyan/10
`;

const errorStyle = `
  mt-2
  block
  text-xs
  text-red-500
`;


/* =========================================================
   VALIDATION
   ========================================================= */

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("Last name is required"),

  phoneNumber: Yup.string()
    .required("Please enter a valid phone number"),

  validateEmail: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  Organisation: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Organisation name is required"),

  message: Yup.string()
    .min(2, "Too short!")
    .max(200, "Too long!"),

  inquiry: Yup.string()
    .required("Please select an enquiry type"),
});

export default Contact;






// import contactImg from '../../assets/images/contact.jpg'
// import * as Yup from 'yup';
// import PhoneNumber from './PhoneNumber';
// import { useFormik } from 'formik';
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const Contact = () => {

//     const form = useRef();

//     const initialValues = {
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         validateEmail: "",
//         Organisation: "",
//         message: "",
//         inquiry: ""
//     }

//     const {
//         touched,
//         values,
//         handleChange,
//         handleBlur,
//         resetForm,
//         handleSubmit,
//         errors,
//         setFieldValue,
//     } = useFormik({
//         initialValues,
//         validationSchema: contactSchema,

//         onSubmit: () => {

//             emailjs.sendForm(
//                 import.meta.env.VITE_YOUR_SERVICE_ID,
//                 import.meta.env.VITE_YOUR_TEMPLATE_ID,
//                 form.current,
//                 import.meta.env.VITE_YOUR_PUBLIC_KEY
//             )
//                 .then((result) => {
//                     console.log(result.text);
//                     toast.success("Your form is submitted!");
//                 })
//                 .catch((error) => {
//                     console.log(error.text);
//                     toast.error(error.text);
//                 });

//             resetForm();
//         },
//     });

//     return (
//         <>
//             <div className="max-w-screen mx-auto relative overflow-hidden">

//                 {/* HERO */}
//                 <div
//                     className="bg-cover min-h-[500px] bg-center relative"
//                     style={{ backgroundImage: `url(${contactImg})` }}
//                 >
//                     <div className="absolute inset-0 bg-[#011c2b]/70" />

//                     <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[500px] px-6">
//                         <p className="uppercase tracking-[4px] text-cyan-300 text-sm mb-4">
//                             Contact Wastely Aqua
//                         </p>

//                         <h1 className="text-5xl md:text-7xl font-bold text-white">
//                             Let’s Build a
//                             <span className="block bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
//                                 Sustainable Future
//                             </span>
//                         </h1>

//                         <p className="text-slate-200 mt-6 max-w-2xl text-lg">
//                             Reach out to our experts for wastewater treatment,
//                             sustainability solutions, and environmental engineering consultation.
//                         </p>
//                     </div>
//                 </div>

//                 {/* FORM SECTION */}
//                 {/* <div className="container rounded-t-md"> */}
//                 <div className="w-full px-4 md:px-6 lg:px-8">

//                     <div className="max-w-6xl mx-auto relative -mt-32 z-20">

//                         <div className="
//                             p-6 md:p-10
//                             bg-white/95
//                             backdrop-blur-xl
//                             rounded-[32px]
//                             border border-slate-200
//                             shadow-[0_20px_80px_rgba(0,0,0,0.08)]
//                             my-6
//                             font-[sans-serif]
//                             text-[#011c2b]
//                         ">

//                             {/* HEADER */}
//                             <div className="text-center mb-12">
//                                 <h2 className="text-4xl font-bold">
//                                     Get In Touch
//                                 </h2>

//                                 <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
//                                     We help industries and communities build sustainable
//                                     wastewater treatment ecosystems.
//                                 </p>
//                             </div>

//                             <div className="grid lg:grid-cols-3 gap-8">

//                                 {/* LEFT INFO */}
//                                 <div className="
//                                     bg-gradient-to-br
//                                     from-[#011c2b]
//                                     to-[#022f47]
//                                     rounded-[28px]
//                                     p-8
//                                     text-white
//                                     shadow-xl
//                                 ">

//                                     <h2 className="text-2xl font-bold">
//                                         Contact Information
//                                     </h2>

//                                     <p className="text-slate-300 mt-4 leading-relaxed">
//                                         Connect with Wastely Aqua for cutting-edge
//                                         wastewater engineering and sustainability solutions.
//                                     </p>

//                                     <div className="mt-12 space-y-8">

//                                         <div>
//                                             <p className="text-cyan-300 text-sm">
//                                                 Email
//                                             </p>

//                                             <p className="mt-2">
//                                                 info@wastelyaqua.com
//                                             </p>
//                                         </div>

//                                         <div>
//                                             <p className="text-cyan-300 text-sm">
//                                                 Phone
//                                             </p>

//                                             <p className="mt-2">
//                                                 +91 913 606 9130
//                                             </p>
//                                         </div>

//                                         <div>
//                                             <p className="text-cyan-300 text-sm">
//                                                 Address
//                                             </p>

//                                             <p className="mt-2 leading-relaxed">
//                                                 1A, Lake View, JVLR,
//                                                 <br />
//                                                 Powai, Mumbai,
//                                                 <br />
//                                                 India
//                                             </p>
//                                         </div>

//                                     </div>

//                                     {/* SOCIAL */}
//                                     <div className="flex gap-4 mt-12">

//                                         <Link
//                                             to="#"
//                                             className="
//                                                 w-11 h-11
//                                                 rounded-full
//                                                 bg-white/10
//                                                 border border-white/10
//                                                 flex items-center justify-center
//                                                 hover:bg-cyan-500/20
//                                                 transition-all duration-300
//                                             "
//                                         >
//                                             f
//                                         </Link>

//                                         <Link
//                                             to="https://www.linkedin.com/in/mohammad-sadique-khan-427696112"
//                                             className="
//                                                 w-11 h-11
//                                                 rounded-full
//                                                 bg-white/10
//                                                 border border-white/10
//                                                 flex items-center justify-center
//                                                 hover:bg-cyan-500/20
//                                                 transition-all duration-300
//                                             "
//                                         >
//                                             in
//                                         </Link>

//                                         <Link
//                                             to="#"
//                                             className="
//                                                 w-11 h-11
//                                                 rounded-full
//                                                 bg-white/10
//                                                 border border-white/10
//                                                 flex items-center justify-center
//                                                 hover:bg-cyan-500/20
//                                                 transition-all duration-300
//                                             "
//                                         >
//                                             ig
//                                         </Link>

//                                     </div>

//                                 </div>

//                                 {/* FORM */}
//                                 <div className="lg:col-span-2">

//                                     <form ref={form} onSubmit={handleSubmit}>

//                                         <div className="grid sm:grid-cols-2 gap-6">

//                                             {/* FIRST NAME */}
//                                             <div>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="First Name *"
//                                                     name='firstName'
//                                                     value={values.firstName}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={inputStyle}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.firstName && errors.firstName}
//                                                 </small>
//                                             </div>

//                                             {/* LAST NAME */}
//                                             <div>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Last Name *"
//                                                     name='lastName'
//                                                     value={values.lastName}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={inputStyle}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.lastName && errors.lastName}
//                                                 </small>
//                                             </div>

//                                             {/* PHONE */}
//                                             <div>
//                                                 <PhoneNumber
//                                                     value={values.phoneNumber}
//                                                     onChange={(value) =>
//                                                         setFieldValue("phoneNumber", value)
//                                                     }
//                                                     onBlur={handleBlur}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.phoneNumber && errors.phoneNumber}
//                                                 </small>
//                                             </div>

//                                             {/* EMAIL */}
//                                             <div>
//                                                 <input
//                                                     type="email"
//                                                     placeholder="Email Address *"
//                                                     name='validateEmail'
//                                                     value={values.validateEmail}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={inputStyle}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.validateEmail && errors.validateEmail}
//                                                 </small>
//                                             </div>

//                                             {/* ORGANISATION */}
//                                             <div className="sm:col-span-2">
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Organisation Name *"
//                                                     name='Organisation'
//                                                     value={values.Organisation}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={inputStyle}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.Organisation && errors.Organisation}
//                                                 </small>
//                                             </div>

//                                             {/* MESSAGE */}
//                                             <div className="sm:col-span-2">
//                                                 <textarea
//                                                     rows="6"
//                                                     placeholder="Write your message..."
//                                                     name='message'
//                                                     value={values.message}
//                                                     onChange={handleChange}
//                                                     className={textareaStyle}
//                                                 />

//                                                 <small className='text-red-500'>
//                                                     {touched.message && errors.message}
//                                                 </small>
//                                             </div>

//                                             {/* RADIO */}
//                                             <div className="sm:col-span-2">

//                                                 <h6 className="text-sm text-slate-500 mb-5">
//                                                     Select Subject
//                                                 </h6>

//                                                 <div className="flex flex-wrap gap-4">

//                                                     {[
//                                                         "General Inquiry",
//                                                         "Technical Support",
//                                                         "Website Feedback"
//                                                     ].map((item) => (

//                                                         <label
//                                                             key={item}
//                                                             className="cursor-pointer"
//                                                         >
//                                                             <input
//                                                                 type="radio"
//                                                                 name="inquiry"
//                                                                 value={item}
//                                                                 checked={values.inquiry === item}
//                                                                 onChange={handleChange}
//                                                                 className="hidden peer"
//                                                             />

//                                                             <div className="
//                                                                 px-5 py-3
//                                                                 rounded-full
//                                                                 border border-slate-200
//                                                                 bg-slate-50
//                                                                 peer-checked:border-cyan-500
//                                                                 peer-checked:bg-cyan-50
//                                                                 transition-all duration-300
//                                                                 text-sm
//                                                             ">
//                                                                 {item}
//                                                             </div>

//                                                         </label>
//                                                     ))}

//                                                 </div>

//                                                 <small className='text-red-500 block mt-3'>
//                                                     {touched.inquiry && errors.inquiry}
//                                                 </small>

//                                             </div>

//                                         </div>

//                                         {/* BUTTON */}
//                                         <button
//                                             type="submit"
//                                             className="
//                                                 mt-12
//                                                 flex
//                                                 items-center
//                                                 justify-center
//                                                 text-sm
//                                                 lg:ml-auto
//                                                 max-lg:w-full
//                                                 rounded-full
//                                                 px-8
//                                                 py-4
//                                                 font-semibold
//                                                 bg-gradient-to-r
//                                                 from-cyan-500
//                                                 to-emerald-500
//                                                 text-white
//                                                 hover:scale-[1.02]
//                                                 transition-all
//                                                 duration-300
//                                                 shadow-lg
//                                                 shadow-cyan-500/20
//                                             "
//                                         >
//                                             Send Message
//                                         </button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* MAP SECTION */}
//             <section className="w-full px-4 md:px-6 lg:px-8 pb-28 pt-10">

//                 <div className="
//                     relative
//                     overflow-hidden
//                     rounded-[40px]
//                     bg-[#081219]
//                     border border-white/10
//                     backdrop-blur-xl
//                     p-6 md:p-10
//                 ">

//                     {/* GLOW */}
//                     <div className="
//                         absolute
//                         top-0
//                         right-0
//                         w-[350px]
//                         h-[350px]
//                         bg-cyan-500/10
//                         blur-[120px]
//                         rounded-full
//                     " />

//                     <div className="
//                         relative
//                         z-10
//                         grid
//                         lg:grid-cols-2
//                         gap-10
//                         items-center
//                     ">

//                         {/* LEFT CONTENT */}
//                         <div>

//                             <div className="
//                                 inline-flex
//                                 items-center
//                                 gap-2
//                                 bg-white/5
//                                 border border-cyan-400/20
//                                 rounded-full
//                                 px-5
//                                 py-2
//                                 mb-8
//                             ">
//                                 <div className="w-2 h-2 bg-cyan-400 rounded-full" />

//                                 <span className="
//                                     text-cyan-200
//                                     uppercase
//                                     tracking-[3px]
//                                     text-xs
//                                 ">
//                                     Headquarters
//                                 </span>
//                             </div>

//                             <h2 className="
//                                 text-4xl
//                                 md:text-5xl
//                                 font-semibold
//                                 leading-tight
//                                 text-white
//                             ">
//                                 Visit Our
//                                 <span className="
//                                     block
//                                     bg-gradient-to-r
//                                     from-cyan-300
//                                     to-emerald-400
//                                     bg-clip-text
//                                     text-transparent
//                                 ">
//                                     Mumbai Office
//                                 </span>
//                             </h2>

//                             <p className="
//                                 text-slate-400
//                                 leading-relaxed
//                                 mt-8
//                                 max-w-xl
//                             ">
//                                 Wastely Aqua delivers sustainable wastewater
//                                 engineering solutions designed to protect
//                                 ecosystems, industries, and communities through
//                                 innovative environmental technologies.
//                             </p>

//                             {/* INFO CARDS */}
//                             <div className="
//                                 mt-10
//                                 space-y-5
//                             ">

//                                 {/* ADDRESS */}
//                                 <div className="
//                                     bg-white/5
//                                     border border-white/10
//                                     rounded-2xl
//                                     p-5
//                                     backdrop-blur-xl
//                                 ">
//                                     <p className="
//                                         text-cyan-300
//                                         text-sm
//                                         uppercase
//                                         tracking-[2px]
//                                     ">
//                                         Address
//                                     </p>

//                                     <p className="
//                                         text-slate-300
//                                         mt-3
//                                         leading-relaxed
//                                     ">
//                                         1A, Lake View, JVLR,
//                                         <br />
//                                         Powai, Mumbai,
//                                         <br />
//                                         Maharashtra, India
//                                     </p>
//                                 </div>

//                                 {/* CONTACT */}
//                                 <div className="
//                                     bg-white/5
//                                     border border-white/10
//                                     rounded-2xl
//                                     p-5
//                                     backdrop-blur-xl
//                                 ">
//                                     <p className="
//                                         text-cyan-300
//                                         text-sm
//                                         uppercase
//                                         tracking-[2px]
//                                     ">
//                                         Contact
//                                     </p>

//                                     <p className="
//                                         text-slate-300
//                                         mt-3
//                                     ">
//                                         +91 913 606 9130
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>

//                         {/* MAP */}
//                         <div className="relative">

//                             {/* OUTER GLOW */}
//                             <div className="
//                                 absolute
//                                 inset-0
//                                 bg-cyan-500/10
//                                 blur-3xl
//                                 rounded-[32px]
//                             " />

//                             <div className="
//                                 relative
//                                 overflow-hidden
//                                 rounded-[32px]
//                                 border border-white/10
//                                 shadow-2xl
//                                 shadow-cyan-500/10
//                             ">

//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.610545440925!2d72.89416237466631!3d19.124733850441867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba452212f9%3A0xe8088dae3449a6f1!2sWastely%20Aqua%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1704190130770!5m2!1sen!2sin"
//                                     className="
//                                         w-full
//                                         h-[500px]
//                                         grayscale-[0.15]
//                                         contrast-[1.05]
//                                     "
//                                     style={{ border: 0 }}
//                                     loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                 ></iframe>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// const inputStyle = `
//     px-4 py-4
//     bg-slate-50
//     w-full
//     text-sm
//     rounded-2xl
//     border border-slate-200
//     focus:border-cyan-500
//     focus:bg-white
//     outline-none
//     transition-all
//     duration-300
// `

// const textareaStyle = `
//     px-4 py-4
//     bg-slate-50
//     w-full
//     text-sm
//     rounded-2xl
//     border border-slate-200
//     focus:border-cyan-500
//     outline-none
//     resize-none
//     transition-all
//     duration-300
// `

// const contactSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, "too short!")
//         .max(20, "too long!")
//         .required(),

//     lastName: Yup.string()
//         .min(2, "too short!")
//         .max(20, "too long!")
//         .required(),

//     phoneNumber: Yup.string()
//         .required("Please enter a valid phone number"),

//     validateEmail: Yup.string()
//         .email("invalid email")
//         .required(),

//     Organisation: Yup.string()
//         .min(2, "too short!")
//         .max(50, "too long!")
//         .required(),

//     message: Yup.string()
//         .min(2, "too short!")
//         .max(200, "too long!"),

//     inquiry: Yup.string()
//         .required("A radio option is required")
// })

// export default Contact