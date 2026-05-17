// import contactImg from '../../assets/images/contact.jpg'
// import * as Yup from 'yup';
// // import PhoneNumber from './PhoneNumber';
// import { useFormik } from 'formik';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
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

//     const { touched, values, handleChange, handleBlur, resetForm, handleSubmit, errors } = useFormik({
//         initialValues,
//         validationSchema: contactSchema,
//         onSubmit: (e, values) => {
//             console.log('Form submitted with values:', values);
//             emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
//             .then((result) => {
//                 console.log("email send",result.text);
//                 toast.success("Your form is submitted !")
//             }, (error) => {
//                 console.log(error.text);
//                 toast.error(error.text);
//             });
//             resetForm()
//         },
//     });
    

//     return (
//         <>
//             <div className="max-w-screen  mx-auto  relative">
//                 <div className="bg-cover min-h-[500px] bg-center text-center overflow-hidden bg-fixed"
//                     style={{ backgroundImage: `url(${contactImg})` }}
//                     title="">
//                 </div>
//                 <div className="container">
//                     <div className="max-w-3xl mx-auto">
//                         <div
//                             className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
//                             <div className="max-w-6xl mx-auto relative -mt-32 p-5 bg-white my-6 font-[sans-serif] text-[#011c2b]">
//                                 <div className="text-center px-6">
//                                     <h2 className="text-3xl font-extrabold">Contact Us</h2>
//                                     <p className="text-sm text-gray-400 mt-3">Get in touch with Wastely Aqua for cutting-edge waste water treatment solutions.</p>
//                                 </div>
//                                 <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
//                                     <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
//                                         <h2 className="text-xl font-bold text-white">Contact Information</h2>
//                                         <p className="text-sm text-gray-400 mt-3">Get in touch with Wastely Aqua for cutting-edge waste water treatment solutions.</p>
//                                         <ul className="mt-16 space-y-10">
//                                             <li className="flex items-center max-lg:justify-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
//                                                     viewBox="0 0 479.058 479.058">
//                                                     <path
//                                                         d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
//                                                         data-original="#000000" />
//                                                 </svg>
//                                                 <Link to="#" className="text-white text-sm ml-3">
//                                                     <strong>info@wastley.com</strong>
//                                                 </Link>
//                                             </li>
//                                             <li className="flex items-center max-lg:justify-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 482.6 482.6">
//                                                     <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
//                                                 </svg>
//                                                 <Link to="#" className="text-white text-sm ml-3">
//                                                     <strong>+91913 606 9130</strong>
//                                                 </Link>
//                                             </li>
//                                             <li className="flex items-center max-lg:justify-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="32px" fill='#fff' viewBox="0 0 368.16 368.16">
//                                                     <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
//                                                     <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
//                                                 </svg>
//                                                 <Link to="#" className="text-white text-sm ml-3">
//                                                     <strong>1A, Lake View, JVLR, Powai, Mumbai</strong>
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                         <ul className="flex max-lg:justify-center mt-16 space-x-4">
//                                             <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                                                 <Link to="#">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
//                                                         viewBox="0 0 24 24">
//                                                         <path
//                                                             d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
//                                                             data-original="#000000" />
//                                                     </svg>
//                                                 </Link>
//                                             </li>
//                                             <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                                                 <Link to="#">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
//                                                         viewBox="0 0 511 512">
//                                                         <path
//                                                             d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
//                                                             data-original="#000000" />
//                                                     </svg>
//                                                 </Link>
//                                             </li>
//                                             <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//                                                 <Link to="#">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
//                                                         viewBox="0 0 24 24">
//                                                         <path
//                                                             d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
//                                                         </path>
//                                                     </svg>
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="p-6 rounded-xl lg:col-span-2">
//                                         <form ref={form} onSubmit={handleSubmit}>
//                                             <div className="grid sm:grid-cols-2 gap-8">
//                                                 <div className="relative">
//                                                     <div className="flex items-center">
//                                                         <input type="text" placeholder="First Name *" name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}
//                                                             className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
//                                                             viewBox="0 0 24 24">
//                                                             <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
//                                                             <path
//                                                                 d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
//                                                                 data-original="#000000"></path>
//                                                         </svg>
//                                                     </div>
//                                                     <small className=' text-red-600'>{touched.firstName && errors.firstName}</small>
//                                                 </div>
//                                                 <div className="relative">
//                                                     <div className="flex items-center">
//                                                         <input type="text" placeholder="Last Name *" name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur}
//                                                             className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
//                                                             viewBox="0 0 24 24">
//                                                             <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
//                                                             <path
//                                                                 d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
//                                                                 data-original="#000000"></path>
//                                                         </svg>
//                                                     </div>
//                                                     <small className=' text-red-600'>{touched.lastName && errors.lastName}</small>
//                                                 </div>
//                                                 <div className="relative">
//                                                     <div className="flex items-center">
//                                                         {/* <PhoneNumber value={values} onChange={handleChange} onBlur={handleBlur}/> */}
//                                                         <input type="tel" placeholder="Phone Number *" name='phoneNumber' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}
//                                                             className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus-within:border-[#011c2b] outline-none" />
//                                                         <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
//                                                             <path
//                                                                 d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
//                                                                 data-original="#000000"></path>
//                                                         </svg>
//                                                         {/* <PhoneInput
//                                                         international
//                                                         country="IN"
//                                                         defaultCountry="IN"
//                                                         initialValueFormat="national"
//                                                         placeholder="Phone Number"
//                                                         name='phoneNumber'
//                                                         value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}
//                                                         className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus-within:border-[#011c2b] outline-none" />
//                                                     <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
//                                                         <path
//                                                             d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
//                                                             data-original="#000000"></path>
//                                                     </svg>*/}
//                                                     </div>
//                                                     <small className=' text-red-600'>{touched.phoneNumber && errors.phoneNumber}</small>
//                                                 </div>
//                                                 <div className="relative">
//                                                     <div className="flex items-center">
//                                                         <input type="email" placeholder="Email *" name='validateEmail' value={values.validateEmail} onChange={handleChange} onBlur={handleBlur}
//                                                             className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
//                                                             viewBox="0 0 682.667 682.667">
//                                                             <defs>
//                                                                 <clipPath id="a" clipPathUnits="userSpaceOnUse">
//                                                                     <path d="M0 512h512V0H0Z" data-original="#000000"></path>
//                                                                 </clipPath>
//                                                             </defs>
//                                                             <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
//                                                                 <path fill="none" strokeMiterlimit="10" strokeWidth="40"
//                                                                     d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
//                                                                     data-original="#000000"></path>
//                                                                 <path
//                                                                     d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
//                                                                     data-original="#000000"></path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                     <small className=' text-red-600'>{touched.validateEmail && errors.validateEmail}</small>
//                                                 </div>

//                                                 <div className="relative sm:col-span-2">
//                                                     <div className="flex items-center">
//                                                         <input type="text" placeholder="Organisation Name *" name='Organisation' value={values.Organisation} onChange={handleChange} onBlur={handleBlur}
//                                                             className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
//                                                         <svg viewBox="-102.4 -102.4 1228.80 1228.80" className="icon w-[18px] h-[18px] absolute right-2" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" strokeWidth="0.01024" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
//                                                             <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
//                                                             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="16.384"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="bbb"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="bbb"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="bbb"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="bbb"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="bbb"></path></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="bbb"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="bbb"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="bbb"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="bbb"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="bbb"></path></g></svg>
//                                                     </div>
//                                                     <small className=' text-red-600'>{touched.Organisation && errors.Organisation}</small>
//                                                 </div>

//                                                 <div className="relative flex items-center sm:col-span-2">
//                                                     <textarea placeholder="Write Message" name='message' value={values.message} onChange={handleChange} className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"></textarea>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
//                                                         viewBox="0 0 682.667 682.667">
//                                                         <defs>
//                                                             <clipPath id="a" clipPathUnits="userSpaceOnUse">
//                                                                 <path d="M0 512h512V0H0Z" data-original="#000000"></path>
//                                                             </clipPath>
//                                                         </defs>
//                                                         <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
//                                                             <path fill="none" strokeMiterlimit="10" strokeWidth="40"
//                                                                 d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
//                                                                 data-original="#000000"></path>
//                                                             <path
//                                                                 d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
//                                                                 data-original="#000000"></path>
//                                                         </g>
//                                                     </svg>
//                                                 </div>
//                                                 <div className="col-span-full">
//                                                     <h6 className="text-sm text-gray-400">Select Subject <span className=' text-red-600'>*</span></h6>
//                                                     <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
//                                                         <div className="flex items-center mt-3">
//                                                             <input
//                                                                 id="radio1"
//                                                                 type="radio"
//                                                                 name="inquiry"
//                                                                 className="hidden peer"
//                                                                 value="GeneralInquiry"
//                                                                 checked={values.inquiry === "GeneralInquiry"}
//                                                                 onChange={handleChange}
//                                                             />
//                                                             <label
//                                                                 htmlFor="radio1"
//                                                                 className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
//                                                             >
//                                                                 <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
//                                                             </label>
//                                                             <p className="text-sm ml-3">General Inquiry</p>
//                                                         </div>
//                                                         <div className="flex items-center mt-3">
//                                                             <input
//                                                                 id="radio2"
//                                                                 type="radio"
//                                                                 name="inquiry"
//                                                                 className="hidden peer"
//                                                                 value="TechnicalSupport"
//                                                                 checked={values.inquiry === 'TechnicalSupport'}
//                                                                 onChange={handleChange}
//                                                             />
//                                                             <label
//                                                                 htmlFor="radio2"
//                                                                 className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
//                                                             >
//                                                                 <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
//                                                             </label>
//                                                             <p className="text-sm ml-3">Technical Support</p>
//                                                         </div>
//                                                         <div className="flex items-center mt-3">
//                                                             <input
//                                                                 id="radio3"
//                                                                 type="radio"
//                                                                 name="inquiry"
//                                                                 className="hidden peer"
//                                                                 value="WebsiteFeedback"
//                                                                 checked={values.inquiry === 'WebsiteFeedback'}
//                                                                 onChange={handleChange}
//                                                             />
//                                                             <label
//                                                                 htmlFor="radio3"
//                                                                 className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
//                                                             >
//                                                                 <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
//                                                             </label>
//                                                             <p className="text-sm ml-3">Website Feedback</p>
//                                                         </div>
//                                                     </div>
//                                                             <small className=' text-red-600'>{touched.inquiry && errors.inquiry}</small>
//                                                 </div>
//                                             </div>
//                                             <button type="submit"
//                                                 className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#011c2b] text-white hover:bg-[#011c2bf3]">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
//                                                     <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
//                                                 </svg>
//                                                 Send Message
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>



//             <section className=" container">
//                 <div className=" bg-white p-8 md:flex">
//                     <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse bg-white border shadow-md border-gray-300 rounded">
//                         <div className="flex-1 mx-auto">
//                             <div className="p-8">
//                                 <div className="mb-4">
//                                     <h4 className="text-2xl font-semibold mb-2">Headquarters</h4>
//                                     <p className="text-gray-700">
//                                         {/* 2 Canal Park<br />Cambridge, MA 02141<br />United States */}
//                                         1A, Lake View, Lake, Jogeshwari - Vikhroli Link Rd, <br /> IIT Area, Powai, Mumbai, <br /> India
//                                     </p>
//                                 </div>
//                                 <div className="mb-4">
//                                     <h5 className="text-xl font-semibold mb-2">Phone / Fax</h5>
//                                     <p className="text-gray-700">
//                                           (+91 913 606 9130) <br />
//                                         <strong>Fax:</strong> +91 913 606 9130
//                                     </p>
//                                 </div>
//                                 {/* <div>
//                                     <h5 className="text-xl font-semibold mb-2">Press / Media / Blogger Information</h5>
//                                     <p className="text-gray-700">
//                                         <Link to="//www.hubspot.com/newsroom" rel='noreferrer' target="_blank">Visit our Newsroom for contact info</Link>
//                                     </p>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className="flex-2 mx-auto mb-2">
//                             <iframe 
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.610545440925!2d72.89416237466631!3d19.124733850441867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba452212f9%3A0xe8088dae3449a6f1!2sWastely%20Aqua%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1704190130770!5m2!1sen!2sin"
//                                 className=' w-[100%] h-[300px] sm:w-[580px] sm:h-[450px] md:w-[630px]' style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// const contactSchema = Yup.object().shape({
//     firstName: Yup.string().min(2, "too short!").max(20, "too long!").required(),
//     lastName: Yup.string().min(2, "too short!").max(20, "too long!").required(),
//     phoneNumber: Yup.number().required("Please enter a valid phone number"),
//     validateEmail: Yup.string().email("invalid email").required(),
//     Organisation: Yup.string().min(2, "too short!").max(50, "too long!").required(),
//     message: Yup.string().min(2, "too short!").max(200, "too long!"),
//     inquiry: Yup.string().required("A radio option is required")
// })

// export default Contact



import contactImg from '../../assets/images/contact.jpg'
import * as Yup from 'yup';
import PhoneNumber from './PhoneNumber';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Contact = () => {

    const form = useRef();

    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        validateEmail: "",
        Organisation: "",
        message: "",
        inquiry: ""
    }

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

            emailjs.sendForm(
                import.meta.env.VITE_YOUR_SERVICE_ID,
                import.meta.env.VITE_YOUR_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_YOUR_PUBLIC_KEY
            )
                .then((result) => {
                    console.log(result.text);
                    toast.success("Your form is submitted!");
                })
                .catch((error) => {
                    console.log(error.text);
                    toast.error(error.text);
                });

            resetForm();
        },
    });

    return (
        <>
            <div className="max-w-screen mx-auto relative overflow-hidden">

                {/* HERO */}
                <div
                    className="bg-cover min-h-[500px] bg-center relative"
                    style={{ backgroundImage: `url(${contactImg})` }}
                >
                    <div className="absolute inset-0 bg-[#011c2b]/70" />

                    <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[500px] px-6">
                        <p className="uppercase tracking-[4px] text-cyan-300 text-sm mb-4">
                            Contact Wastely Aqua
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            Let’s Build a
                            <span className="block bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                                Sustainable Future
                            </span>
                        </h1>

                        <p className="text-slate-200 mt-6 max-w-2xl text-lg">
                            Reach out to our experts for wastewater treatment,
                            sustainability solutions, and environmental engineering consultation.
                        </p>
                    </div>
                </div>

                {/* FORM SECTION */}
                {/* <div className="container rounded-t-md"> */}
                <div className="w-full px-4 md:px-6 lg:px-8">

                    <div className="max-w-6xl mx-auto relative -mt-32 z-20">

                        <div className="
                            p-6 md:p-10
                            bg-white/95
                            backdrop-blur-xl
                            rounded-[32px]
                            border border-slate-200
                            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                            my-6
                            font-[sans-serif]
                            text-[#011c2b]
                        ">

                            {/* HEADER */}
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold">
                                    Get In Touch
                                </h2>

                                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                                    We help industries and communities build sustainable
                                    wastewater treatment ecosystems.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">

                                {/* LEFT INFO */}
                                <div className="
                                    bg-gradient-to-br
                                    from-[#011c2b]
                                    to-[#022f47]
                                    rounded-[28px]
                                    p-8
                                    text-white
                                    shadow-xl
                                ">

                                    <h2 className="text-2xl font-bold">
                                        Contact Information
                                    </h2>

                                    <p className="text-slate-300 mt-4 leading-relaxed">
                                        Connect with Wastely Aqua for cutting-edge
                                        wastewater engineering and sustainability solutions.
                                    </p>

                                    <div className="mt-12 space-y-8">

                                        <div>
                                            <p className="text-cyan-300 text-sm">
                                                Email
                                            </p>

                                            <p className="mt-2">
                                                info@wastelyaqua.com
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-cyan-300 text-sm">
                                                Phone
                                            </p>

                                            <p className="mt-2">
                                                +91 913 606 9130
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-cyan-300 text-sm">
                                                Address
                                            </p>

                                            <p className="mt-2 leading-relaxed">
                                                1A, Lake View, JVLR,
                                                <br />
                                                Powai, Mumbai,
                                                <br />
                                                India
                                            </p>
                                        </div>

                                    </div>

                                    {/* SOCIAL */}
                                    <div className="flex gap-4 mt-12">

                                        <Link
                                            to="#"
                                            className="
                                                w-11 h-11
                                                rounded-full
                                                bg-white/10
                                                border border-white/10
                                                flex items-center justify-center
                                                hover:bg-cyan-500/20
                                                transition-all duration-300
                                            "
                                        >
                                            f
                                        </Link>

                                        <Link
                                            to="https://www.linkedin.com/in/mohammad-sadique-khan-427696112"
                                            className="
                                                w-11 h-11
                                                rounded-full
                                                bg-white/10
                                                border border-white/10
                                                flex items-center justify-center
                                                hover:bg-cyan-500/20
                                                transition-all duration-300
                                            "
                                        >
                                            in
                                        </Link>

                                        <Link
                                            to="#"
                                            className="
                                                w-11 h-11
                                                rounded-full
                                                bg-white/10
                                                border border-white/10
                                                flex items-center justify-center
                                                hover:bg-cyan-500/20
                                                transition-all duration-300
                                            "
                                        >
                                            ig
                                        </Link>

                                    </div>

                                </div>

                                {/* FORM */}
                                <div className="lg:col-span-2">

                                    <form ref={form} onSubmit={handleSubmit}>

                                        <div className="grid sm:grid-cols-2 gap-6">

                                            {/* FIRST NAME */}
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="First Name *"
                                                    name='firstName'
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={inputStyle}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.firstName && errors.firstName}
                                                </small>
                                            </div>

                                            {/* LAST NAME */}
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Last Name *"
                                                    name='lastName'
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={inputStyle}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.lastName && errors.lastName}
                                                </small>
                                            </div>

                                            {/* PHONE */}
                                            <div>
                                                <PhoneNumber
                                                    value={values.phoneNumber}
                                                    onChange={(value) =>
                                                        setFieldValue("phoneNumber", value)
                                                    }
                                                    onBlur={handleBlur}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.phoneNumber && errors.phoneNumber}
                                                </small>
                                            </div>

                                            {/* EMAIL */}
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="Email Address *"
                                                    name='validateEmail'
                                                    value={values.validateEmail}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={inputStyle}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.validateEmail && errors.validateEmail}
                                                </small>
                                            </div>

                                            {/* ORGANISATION */}
                                            <div className="sm:col-span-2">
                                                <input
                                                    type="text"
                                                    placeholder="Organisation Name *"
                                                    name='Organisation'
                                                    value={values.Organisation}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={inputStyle}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.Organisation && errors.Organisation}
                                                </small>
                                            </div>

                                            {/* MESSAGE */}
                                            <div className="sm:col-span-2">
                                                <textarea
                                                    rows="6"
                                                    placeholder="Write your message..."
                                                    name='message'
                                                    value={values.message}
                                                    onChange={handleChange}
                                                    className={textareaStyle}
                                                />

                                                <small className='text-red-500'>
                                                    {touched.message && errors.message}
                                                </small>
                                            </div>

                                            {/* RADIO */}
                                            <div className="sm:col-span-2">

                                                <h6 className="text-sm text-slate-500 mb-5">
                                                    Select Subject
                                                </h6>

                                                <div className="flex flex-wrap gap-4">

                                                    {[
                                                        "General Inquiry",
                                                        "Technical Support",
                                                        "Website Feedback"
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
                                                                className="hidden peer"
                                                            />

                                                            <div className="
                                                                px-5 py-3
                                                                rounded-full
                                                                border border-slate-200
                                                                bg-slate-50
                                                                peer-checked:border-cyan-500
                                                                peer-checked:bg-cyan-50
                                                                transition-all duration-300
                                                                text-sm
                                                            ">
                                                                {item}
                                                            </div>

                                                        </label>
                                                    ))}

                                                </div>

                                                <small className='text-red-500 block mt-3'>
                                                    {touched.inquiry && errors.inquiry}
                                                </small>

                                            </div>

                                        </div>

                                        {/* BUTTON */}
                                        <button
                                            type="submit"
                                            className="
                                                mt-12
                                                flex
                                                items-center
                                                justify-center
                                                text-sm
                                                lg:ml-auto
                                                max-lg:w-full
                                                rounded-full
                                                px-8
                                                py-4
                                                font-semibold
                                                bg-gradient-to-r
                                                from-cyan-500
                                                to-emerald-500
                                                text-white
                                                hover:scale-[1.02]
                                                transition-all
                                                duration-300
                                                shadow-lg
                                                shadow-cyan-500/20
                                            "
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAP SECTION */}
            <section className="w-full px-4 md:px-6 lg:px-8 pb-28 pt-10">

                <div className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    bg-[#081219]
                    border border-white/10
                    backdrop-blur-xl
                    p-6 md:p-10
                ">

                    {/* GLOW */}
                    <div className="
                        absolute
                        top-0
                        right-0
                        w-[350px]
                        h-[350px]
                        bg-cyan-500/10
                        blur-[120px]
                        rounded-full
                    " />

                    <div className="
                        relative
                        z-10
                        grid
                        lg:grid-cols-2
                        gap-10
                        items-center
                    ">

                        {/* LEFT CONTENT */}
                        <div>

                            <div className="
                                inline-flex
                                items-center
                                gap-2
                                bg-white/5
                                border border-cyan-400/20
                                rounded-full
                                px-5
                                py-2
                                mb-8
                            ">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full" />

                                <span className="
                                    text-cyan-200
                                    uppercase
                                    tracking-[3px]
                                    text-xs
                                ">
                                    Headquarters
                                </span>
                            </div>

                            <h2 className="
                                text-4xl
                                md:text-5xl
                                font-semibold
                                leading-tight
                                text-white
                            ">
                                Visit Our
                                <span className="
                                    block
                                    bg-gradient-to-r
                                    from-cyan-300
                                    to-emerald-400
                                    bg-clip-text
                                    text-transparent
                                ">
                                    Mumbai Office
                                </span>
                            </h2>

                            <p className="
                                text-slate-400
                                leading-relaxed
                                mt-8
                                max-w-xl
                            ">
                                Wastely Aqua delivers sustainable wastewater
                                engineering solutions designed to protect
                                ecosystems, industries, and communities through
                                innovative environmental technologies.
                            </p>

                            {/* INFO CARDS */}
                            <div className="
                                mt-10
                                space-y-5
                            ">

                                {/* ADDRESS */}
                                <div className="
                                    bg-white/5
                                    border border-white/10
                                    rounded-2xl
                                    p-5
                                    backdrop-blur-xl
                                ">
                                    <p className="
                                        text-cyan-300
                                        text-sm
                                        uppercase
                                        tracking-[2px]
                                    ">
                                        Address
                                    </p>

                                    <p className="
                                        text-slate-300
                                        mt-3
                                        leading-relaxed
                                    ">
                                        1A, Lake View, JVLR,
                                        <br />
                                        Powai, Mumbai,
                                        <br />
                                        Maharashtra, India
                                    </p>
                                </div>

                                {/* CONTACT */}
                                <div className="
                                    bg-white/5
                                    border border-white/10
                                    rounded-2xl
                                    p-5
                                    backdrop-blur-xl
                                ">
                                    <p className="
                                        text-cyan-300
                                        text-sm
                                        uppercase
                                        tracking-[2px]
                                    ">
                                        Contact
                                    </p>

                                    <p className="
                                        text-slate-300
                                        mt-3
                                    ">
                                        +91 913 606 9130
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* MAP */}
                        <div className="relative">

                            {/* OUTER GLOW */}
                            <div className="
                                absolute
                                inset-0
                                bg-cyan-500/10
                                blur-3xl
                                rounded-[32px]
                            " />

                            <div className="
                                relative
                                overflow-hidden
                                rounded-[32px]
                                border border-white/10
                                shadow-2xl
                                shadow-cyan-500/10
                            ">

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.610545440925!2d72.89416237466631!3d19.124733850441867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba452212f9%3A0xe8088dae3449a6f1!2sWastely%20Aqua%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1704190130770!5m2!1sen!2sin"
                                    className="
                                        w-full
                                        h-[500px]
                                        grayscale-[0.15]
                                        contrast-[1.05]
                                    "
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const inputStyle = `
    px-4 py-4
    bg-slate-50
    w-full
    text-sm
    rounded-2xl
    border border-slate-200
    focus:border-cyan-500
    focus:bg-white
    outline-none
    transition-all
    duration-300
`

const textareaStyle = `
    px-4 py-4
    bg-slate-50
    w-full
    text-sm
    rounded-2xl
    border border-slate-200
    focus:border-cyan-500
    outline-none
    resize-none
    transition-all
    duration-300
`

const contactSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "too short!")
        .max(20, "too long!")
        .required(),

    lastName: Yup.string()
        .min(2, "too short!")
        .max(20, "too long!")
        .required(),

    phoneNumber: Yup.string()
        .required("Please enter a valid phone number"),

    validateEmail: Yup.string()
        .email("invalid email")
        .required(),

    Organisation: Yup.string()
        .min(2, "too short!")
        .max(50, "too long!")
        .required(),

    message: Yup.string()
        .min(2, "too short!")
        .max(200, "too long!"),

    inquiry: Yup.string()
        .required("A radio option is required")
})

export default Contact