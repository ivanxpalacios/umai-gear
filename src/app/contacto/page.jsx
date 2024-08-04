"use client";
import { useState } from 'react'
import { PlayfairDisplayFont } from '@/src/utils/fonts'
import Image from 'next/image';

export default function Contacto() {

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleEnviar = (e) => {
    e.preventDefault()

    let errors = {
      nombre: false,
      apellido: false,
      email: false,
      telefono: false,
      mensaje: false
    }

    if (!form.nombre) {
      errors = { ...errors, nombre: true }
    }

    if (!form.apellido) {
      errors = { ...errors, apellido: true }
    }

    if (!form.email) {
      errors = { ...errors, email: true }
    }

    if (!form.telefono) {
      errors = { ...errors, telefono: true }
    }

    if (!form.mensaje) {
      errors = { ...errors, mensaje: true }
    }

    setErrors(errors)
  }

  const [errors, setErrors] = useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    mensaje: false
  })

  return (
    <main className='xl:flex justify-between'>
      <div className="m-md px-5 xl:max-w-[50%] mx-auto w-full">
        <div className='min-[1600px]:max-w-[400px] xl:mx-auto'>

          <h1
            className={`${PlayfairDisplayFont.variable} text-[60px] ff-fairplay xl:text-[90px]`}
          >
            Contacto
          </h1>

          <p className='m-sm xl:text-[20px]'>
            Escribenos para saber más de ti y poder <br className='hidden xl:block' /> ayudarte con lo que necesites.
          </p>

          <div className='m-lg xl:text-[20px]'>
            <p className='font-[500]'>email</p>
            <p>hello@laenzia.com</p>
          </div>

          <div className='m-md xl:text-[20px]'>
            <p className='font-[500]'>Tel</p>
            <p>+51 930 288 869</p>
          </div>

          <div className='xl:absolute xl:top-1/2 xl:left-1/2 xl:translate-x-[-50%] xl:translate-y-[-50%] m-lg bg-[#f4f4f4] w-full max-w-[600px] mx-auto py-14 px-8'>
            <form>
              <div className="flex flex-col md:flex-row gap-6">
                <div className='w-full'>
                  <div
                    className={`${errors.nombre ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border w-full`}
                  >
                    <input
                      type="text"
                      className="bg-white p-3 focus-visible:outline-none w-full placeholder:font-[300] placeholder:text-[#000]"
                      value={form.nombre}
                      placeholder="Nombre"
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                  </div>

                  {errors.nombre && (
                    <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                  )}
                </div>

                <div className='w-full'>
                  <div
                    className={`${errors.apellido ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border w-full`}
                  >
                    <input
                      type="text"
                      className="bg-white p-3 focus-visible:outline-none w-full placeholder:font-[300] placeholder:text-[#000]"
                      value={form.apellido}
                      placeholder="Apellido"
                      onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                    />
                  </div>

                  {errors.apellido && (
                    <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                  )}
                </div>

              </div>

              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className='w-full'>
                  <div
                    className={`${errors.email ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border w-full`}
                  >
                    <input
                      type="email"
                      className="bg-white p-3 focus-visible:outline-none w-full placeholder:font-[300] placeholder:text-[#000]"
                      value={form.email}
                      placeholder="Email"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {errors.email && (
                    <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                  )}
                </div>

                <div className='w-full'>
                  <div
                    className={`${errors.telefono ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border w-full`}
                  >
                    <input
                      type="text"
                      className="bg-white p-3 focus-visible:outline-none w-full placeholder:font-[300] placeholder:text-[#000]"
                      value={form.telefono}
                      placeholder="Teléfono"
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    />
                  </div>

                  {errors.telefono && (
                    <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div
                  className={`w-full`}
                >
                  <textarea
                    className={`${errors.mensaje ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border bg-white p-3 focus-visible:outline-none w-full placeholder:font-[300] placeholder:text-[#000]`}
                    value={form.mensaje}
                    placeholder="¿Cómo podemos ayudarte?"
                    rows={5}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  />
                </div>

                {errors.mensaje && (
                  <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                )}
              </div>

              <div className='m-md flex justify-end'>
                <button
                  className='bg-black hover:bg-[#121212] transition-colors text-white w-[180px] py-4'
                  onClick={(e) => handleEnviar(e)}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      <Image
        src="/images/contacto.png"
        className='hidden xl:block w-full max-w-[50%] h-screen object-cover'
        width={1920}
        height={1080}
        alt="Contacto"
      />


    </main>
  )
}