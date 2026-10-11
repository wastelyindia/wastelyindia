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
                  href="mailto:info@wastelyindia.com"
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
                        href="mailto:info@wastelyindia.com"
                        className="
                          mt-2
                          block
                          text-sm
                          font-semibold
                          text-wastely-deep
                          hover:text-wastely-blue
                        "
                      >
                        info@wastelyindia.com
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
                  href="mailto:info@wastelyindia.com"
                  className="mt-2 block text-sm font-semibold text-white hover:text-wastely-cyan"
                >
                  info@wastelyindia.com
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
