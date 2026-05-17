// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

// const PhoneNumber = ({
//   value,
//   onChange,
//   onBlur,
//   error,
//   touched,
// }) => {
//   return (
//     <div className="w-full">

//       <div className="relative">

//         <PhoneInput
//           international
//           defaultCountry="IN"
//           placeholder="Phone Number *"
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className="custom-phone-input"
//           // className="
//           // // phone-input
//           // px-2 py-3
//           // bg-transparent
//           // text-white
//           // w-full
//           // text-sm
//           // border-b
//           // border-white/10
//           // focus-within:border-cyan-400
//           // transition-all
//           // duration-300
//           // outline-none
//           // custom-phone-input
//         // "
//       />

//         {/* ICON */}
//         <svg
//           fill="#64748b"
//           className="
//             w-[18px]
//             h-[18px]
//             absolute
//             right-4
//             top-1/2
//             -translate-y-1/2
//             pointer-events-none
//           "
//           viewBox="0 0 64 64"
//         >
//           <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z" />
//         </svg>

//       </div>

//       {/* ERROR */}
//       {touched && error && (
//         <small className="text-red-500 text-sm mt-2 block">
//           {error}
//         </small>
//       )}

//     </div>
//   );
// };

// export default PhoneNumber;



import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneNumber = ({
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="w-full">
      <div className="relative">
        {/* GLOW */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-[22px]
            bg-gradient-to-r
            from-cyan-500/0
            via-cyan-500/5
            to-emerald-500/0
            opacity-0
            transition-opacity duration-300
            focus-within:opacity-100
          "
        />

        <div
          className="
            relative

            rounded-[22px]

            border border-white/10
            bg-white/[0.04]

            backdrop-blur-xl

            transition-all duration-300

            focus-within:border-cyan-400/30
            focus-within:bg-white/[0.06]
            focus-within:shadow-[0_0_40px_-18px_rgba(34,211,238,0.28)]
          "
        >
          <PhoneInput
            international
            defaultCountry="IN"
            placeholder="Phone Number *"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="custom-phone-input"
          />

          {/* ICON */}
          <svg
            fill="#64748b"
            className="
              pointer-events-none

              absolute
              right-4
              top-1/2

              h-[18px]
              w-[18px]

              -translate-y-1/2

              transition-colors duration-300

              sm:right-5
            "
            viewBox="0 0 64 64"
          >
            <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z" />
          </svg>
        </div>
      </div>

      {/* ERROR */}
      {touched && error && (
        <small
          className="
            mt-3
            block

            pl-1

            text-xs
            sm:text-sm

            text-red-400
          "
        >
          {error}
        </small>
      )}
    </div>
  );
};

export default PhoneNumber;