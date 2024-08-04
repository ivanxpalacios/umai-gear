"use client";
import { useState } from "react";

export default function NewsLetter() {

  const [email, setEmail] = useState('');

  const [error, setError] = useState(false);

  return (
    <div className="bg-[#F5F5F5] py-10 lg:py-12 px-5 lg:px-0">
      <div className="lg:flex items-center justify-between container-mx px-5">
        <h1 className="text-[32px] lg:text-[56px] leading-[38px] lg:leading-[64px] text-center lg:text-start w-full">
          Recibe noticias y <br className="hidden lg:block" /> promociones
        </h1>

        <form className="m-md w-full">
          <div className="flex items-center w-full border-b pb-2 border-black">

            <input
              className="bg-[#F5F5F5] w-full focus:ring-0 focus:border-black placeholder:text-[#ADADAD] focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none text-[20px] lg:text-[28px] font-[300]"
              type="email"
              onChange={(e) => {
                e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                  ? setError(false)
                  : setError(true);
                setEmail(e.target.value);
              }}
              placeholder="Tu correo electrónico"
              value={email}
            />

            <button
              type="submit"
              className={`${!email ? 'text-[#828282]' : 'text-black '} font-[500] lg:text-[24px] flex items-center gap-1`}
              disabled={!email}
            >
              Suscribirme

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>
          {/* {(error && email) && (
            <div className="text-red-500 text-xs mt-1">
              The email is not a valid email
            </div>
          )} */}
        </form>
      </div>

    </div>
  )
}