"use client";
import NavCheckout from "@/src/components/NavCheckout/NavCheckout"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import OrderSummaryScroll from "@/src/components/OrderSummaryScroll/OrderSummaryScroll";
import formatCurrency from "@/src/utils/formatCurrency";
import EligeMetodoPago from "@/src/components/EligeMetodoPago/EligeMetodoPago";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Checkout() {

  const router = useRouter();

  const [form, setForm] = useState({
    nombre: 'Lalo',
    apellido: 'Benijes',
    correo: 'correo@correo.com',
    telefono: '1234567890',

    calle: 'Calle 1',
    codigoPostal: '75160',
    colonia: 'Las Ánimas',
    estado: 'Puebla',
    referencias: 'En la esquina, casa de dos pisos de color blanco',
  });

  const [paso, setPaso] = useState(1);

  return (
    <main
      className="m-md px-5 max-w-[1200px] mx-auto xl:flex justify-between gap-20 mb-[100px]"
    >
      <div className="xl:max-w-[65%] w-full">
        {/* Contenedor del logo y la navegación */}
        <div className="md:flex items-start justify-between">
          <Link href={"/"}>
            <Image src={"/images/logo-negro.svg"} alt="logo" width={200} height={200} />
          </Link>

          <div className="m-md md:m-0">
            <NavCheckout paso={paso} setPaso={setPaso} />
          </div>
        </div>

        <AnimatePresence
            mode='wait'
          >
            {paso === 1 && (
              <motion.div
                key={"paso1"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="m-lg">
                  {/* Contenedor de Tengo una cuenta e iniciar sesión */}
                  <div className="flex items-center gap-4 text-[18px]">
                    <p className="font-medium">Tengo una cuenta</p>

                    <button className="flex items-center gap-2">
                      <span className="bg-[#D9D9D9] w-fit px-4 py-1">Iniciar sesión</span>
                      <ChevronDownIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Contenedor de escribe tu correo electrónico */}
                  <div className="m-md border border-[#E1E1E1] p-5">
                    <p>Escribe tu correo electrónico y te enviaremos un código para verificar tu identidad</p>

                    <div className="m-sm flex items-center gap-4">
                      <input
                        type="text"
                        className="bg-[#F6F6F6] border border-[#D6D6D6] p-3 focus-visible:outline-none w-full placeholder:font-[300]"
                        value={form.correo}
                        placeholder="Tu correo electrónico"
                        onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      />

                      <button
                        className="bg-white text-[14px] font-normal border border-[#C8A976] w-full py-2 text-center hover:bg-[#C8A976] hover:text-white transition-colors"
                      >
                        Identificarme
                      </button>

                    </div>
                  </div>

                  {/* Contenedor de formulario de nombre y envío */}
                  <form>
                    <div className="m-md grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div
                          className={`bg-[#F6F6F6] border ${!form.nombre ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] w-full p-3`}
                        >
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={form.nombre}
                            placeholder="Nombre"
                            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          />
                        </div>

                        {!form.nombre && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div>
                        <div
                          className={`bg-[#F6F6F6] border ${!form.apellido ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] w-full p-3`}
                        >
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={form.apellido}
                            placeholder="Apellido"
                            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                          />
                        </div>

                        {!form.apellido && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div>
                        <div
                          className={`bg-[#F6F6F6] border ${!form.correo ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] w-full p-3`}
                        >
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={form.correo}
                            placeholder="Correo electrónico"
                            onChange={(e) => setForm({ ...form, correo: e.target.value })}
                          />
                        </div>

                        {!form.correo && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div>
                        <div
                          className={`bg-[#F6F6F6] border ${!form.telefono ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] w-full p-3`}
                        >
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={form.telefono}
                            placeholder="Teléfono"
                            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                          />
                        </div>

                        {!form.telefono && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                    </div>

                    <p className="m-md font-medium">Dirección de envío</p>

                    <div className="mt-[24px] flex flex-col gap-6">

                      {/* Row de calle y número */}
                      <div>
                        <div
                          className={`${!form.calle ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] border  w-full p-3`}
                        >
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={form.calle}
                            placeholder="Calle y número"
                            onChange={(e) => setForm({ ...form, calle: e.target.value })}
                          />
                        </div>

                        {!form.calle && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      {/* Row de código postal, colonia y estado */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className='w-full'>
                          <div
                            className={`${!form.codigoPostal ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] border  w-full p-3`}
                          >
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={form.codigoPostal}
                              placeholder="Código postal"
                              onChange={(e) => setForm({ ...form, codigoPostal: e.target.value })}
                            />
                          </div>

                          {!form.codigoPostal && (
                            <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                          )}
                        </div>

                        <div className='w-full'>
                          <div
                            className={`${!form.colonia ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] border  w-full p-3`}
                          >
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={form.colonia}
                              placeholder="Colonia"
                              onChange={(e) => setForm({ ...form, colonia: e.target.value })}
                            />
                          </div>

                          {!form.colonia && (
                            <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                          )}
                        </div>

                        <div className='w-full'>
                          <div
                            className={`${!form.estado ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] border  w-full p-3`}
                          >
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={form.estado}
                              placeholder="Estado"
                              onChange={(e) => setForm({ ...form, estado: e.target.value })}
                            />
                          </div>

                          {!form.estado && (
                            <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                          )}
                        </div>
                      </div>

                      {/* Row de referencias */}
                      <div>
                        <div
                          className={`${!form.referencias ? 'border-[#D10000]' : 'border-[#D6D6D6]'} bg-[#F6F6F6] border h-[129px] w-full p-3`}
                        >
                            <textarea
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={form.referencias}
                              placeholder="Referencias"
                              onChange={(e) => setForm({ ...form, referencias: e.target.value })}
                              rows={4}
                            />
                        </div>

                        {!form.referencias && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {paso === 2 && (
              <motion.div
                key={"paso2"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="m-lg">
                  <button
                    className="flex items-center gap-2 bg-[#D9D9D9] w-fit px-4 py-1"
                    onClick={() => setPaso(1)}
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                    Cambiar cuenta
                  </button>

                  {/* Información del envío */}
                  <div className="m-md grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`bg-[#FFF] border border-[#D6D6D6] w-full p-3`}>
                      <p className="font-medium">Lalo</p>
                    </div>

                    <div className={`bg-[#FFF] border border-[#D6D6D6] w-full p-3`}>
                      <p className="font-medium">
                        Benijes
                      </p>
                    </div>

                    <div className={`bg-[#FFF] border border-[#D6D6D6] w-full p-3`}>
                      <p className="font-medium">
                        max@gmail.com
                      </p>
                    </div>

                    <div className={`bg-[#FFF] border border-[#D6D6D6] w-full p-3`}>
                      <p className="font-medium">
                        55 7050 7658
                      </p>
                    </div>

                    <div className={`bg-[#FFF] border border-[#D6D6D6] w-full p-3 col-span-2`}>
                      <p className="font-medium">
                        Dirección de envío
                      </p>

                      <p>Av de los Volcanes 400, Santa Clara Ocoyucan 72860, Puebla</p>
                    </div>

                  </div>

                  <div className="m-md">
                    <EligeMetodoPago />
                  </div>
                  
                </div>

              </motion.div>
            )}

          </AnimatePresence>



      </div>

      {/* Separador de columnas */}
      <div className="hidden xl:block w-[2px] bg-[#D6D6D6]" />

      <div className="w-full xl:max-w-[35%] m-lg xl:m-sm">
        <div>

          <h2 className="text-[24px]">Resumen del pedido</h2>

          <div className="m-md">
            <OrderSummaryScroll />
          </div>
        </div>

        <hr className="my-10 bg-[#D3D3D3] w-full" />

        <div className='flex flex-col gap-4 lg:text-[20px]'>
          <div className='flex items-center justify-between'>
            <p className='font-medium'>Subtotal</p>
            <p className='font-medium'>{formatCurrency(1120)}</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='font-medium'>Envío</p>
            <p className='font-medium'>{formatCurrency(140)}</p>
          </div>

          <div>
            <p className='font-medium'>Cupón aplicado</p>

            <div className='mt-1 flex items-center justify-between'>
              <div className='flex items-center gap-1 bg-[#C8A976] rounded-full w-fit px-2 py-1'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <p className='text-[12px] font-normal'>AHORRO10</p>
              </div>

              <p className='font-medium'>-{formatCurrency(120)}</p>

            </div>

          </div>

          <div className='flex items-center justify-between'>
            <p className='font-medium'>Ahorro adicional</p>
            <p className='font-medium'>-{formatCurrency(120)}</p>
          </div>
        </div>

        <hr className='my-8 bg-[#D3D3D3] w-full' />

        <div className="flex justify-between">
          <p className='font-normal text-[38px] leading-[38px]'>Total</p>

          <p className='text-[28px] font-bold'>{formatCurrency(2120)}</p>
        </div>

        {paso === 1 ? (
          <>
            <button
              className="relative m-md bg-white text-[18px] font-normal border border-[#C8A976] w-full py-3 text-center hover:bg-[#C8A976] hover:text-white transition-colors"
              onClick={() => setPaso(2)}
              >
              Confirmar dirección de envío

              <ChevronRightIcon className="absolute right-4 top-1/2 translate-y-[-50%] w-6 h-6" />
            </button>

            <div className="relative m-md border border-[#EB0000] px-4 py-3 flex items-center justify-center gap-4">
              <Image src={"/images/alert-icon.png"} className="absolute left-6 top-1/2 translate-y-[-50%]" alt="icono de alerta" width={24} height={24} />
              <p className="font-normal">Faltan completar datos en el formulario</p>
            </div>
          </>
        ) : (
          <>
            <button
              className="relative m-md bg-primary hover:bg-primaryHover uppercase text-[18px] font-normal border border-[#C8A976] w-full py-3 text-center hover:text-white transition-colors"
              onClick={() => router.push("/gracias")}
            >
              Pagar pedido
            </button>

            <div className="relative m-md border border-[#EB0000] px-4 py-3 flex items-center justify-center gap-4">
              <Image src={"/images/alert-icon.png"} className="absolute left-6 top-1/2 translate-y-[-50%]" alt="icono de alerta" width={24} height={24} />
              <p className="font-normal">Error en el CCV de la tarjeta</p>
            </div>
          </>
        )}

      </div>

    </main>
  )
}