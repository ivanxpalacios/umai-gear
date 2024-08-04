"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import Image from 'next/image';
import formatCurrency from '@/src/utils/formatCurrency';

export default function ModalPedido({
  pedido,
  isOpen,
  setIsOpen
}) {

  function closeModal() {
    setIsOpen(false);
  }

  const {
    id,
    statusPago,
    statusEnvio,
    cliente,
    order,
    pago
  } = pedido;

  // Revisa si el modal está abierto y evita el scroll del body
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={`relative z-10`} onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[650px] lg:max-w-[900px] transform overflow-auto lg:overflow-hidden bg-white px-5 py-10 lg:p-20 text-left align-middle shadow-xl transition-all">

                {/* Botón de cerrar modal */}
                <button
                  className="absolute top-5 right-5"
                  onClick={() => closeModal()}
                >
                  <Image src={"/images/x-icon.png"} alt="icono de cerrar" width={20} height={20} />
                </button>

                <h2 className='text-[24px] lg:text-[36px] lg:leading-[36px] leading-[24px]'>Datos del pedido</h2>

                <div className='m-md'>
                  <h2 className='font-bold lg:text-[20px]'>Tu número de pedido</h2>

                  <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-20'>
                    <p className='text-[36px]'>#{id}</p>

                    <div className='flex gap-4'>
                      <p className="bg-primary text-white font-[600] rounded-full text-center py-1 min-w-[150px]">
                        {statusPago}
                      </p>

                      <p className="bg-[#000] text-white font-[600] rounded-full text-center py-1 min-w-[150px]">
                        {statusEnvio}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='m-md'>
                  {/* Fila de nombre completo */}
                  <div>
                    <p className='font-bold lg:text-[20px]'>Nombre completo</p>
                    <p className='lg:text-[20px]'>{cliente.nombre}</p>
                  </div>

                  {/* Filas de correo electrónico y teléfono */}
                  <div className='m-sm flex items-center gap-20'>
                    <div>
                      <p className='font-bold lg:text-[20px]'>Correo electrónico</p>
                      <p className='lg:text-[20px]'>{cliente.correo}</p>
                    </div>

                    <div>
                      <p className='font-bold lg:text-[20px]'>Teléfono</p>
                      <p className='lg:text-[20px]'>{cliente.telefono}</p>
                    </div>
                  </div>

                  <div className='m-sm'>
                    <p className='font-bold lg:text-[20px]'>Dirección de envío</p>
                    <p className='lg:text-[20px]'>{cliente.direccion}</p>
                  </div>
                </div>

                {/* Tabla de Productos del pedido */}
                <div className='m-lg'>
                  <h2 className='text-[24px] lg:text-[36px] lg:leading-[36px] leading-[24px]'>Productos del pedido</h2>

                  <div className="m-sm relative overflow-x-auto w-full">
                    <table className="w-full text-left rtl:text-right">
                      <thead className="lg:text-[18px]">
                        <tr>
                          <th scope="col" className="whitespace-nowrap pe-[200px] py-3 font-[600]">
                            Producto
                          </th>
                          <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600] text-center">
                            Cantidad
                          </th>
                          <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600] text-center">
                            Subtotal
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {order
                          ?.map((producto, index) => (
                            <tr key={index} className="font-[300] lg:text-[18px]">
                              <td className="flex items-center gap-8 pe-6 py-4 whitespace-nowrap">
                                <Image src="/images/product_img.png" className="border border-[#D9D9D9] rounded-[13px] p-1 w-[55px] h-auto" width={100} height={100} alt="product" />

                                <div>
                                  <p>{producto.nombre}</p>
                                  
                                  <div className='m-sm flex gap-8'>
                                    <p className='line-through'>{formatCurrency(producto.precio)}</p>

                                    <p className='font-[500]'>{formatCurrency(producto.precioDescuento)}</p>
                                  </div>

                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap" align='center'>
                                <p className="bg-[#D9D9D9] font-[500] rounded-full w-6 h-6 flex items-center justify-center">2</p>
                              </td>

                              <td className="font-medium px-6 py-4 whitespace-nowrap" align='center'>
                                {formatCurrency(pago.subtotal)}
                              </td>

                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Detalles del pago */}
                <div className='m-lg max-w-[400px]'>
                  <h2 className='text-[24px] lg:text-[36px] lg:leading-[36px] leading-[24px]'>Detalles de pago</h2>

                  <hr className='my-8 bg-[#D3D3D3]' />

                  <div className='flex flex-col gap-4 lg:text-[20px]'>
                    <div className='flex items-center justify-between'>
                      <p className='font-medium'>Subtotal</p>
                      <p className='font-medium'>{formatCurrency(pago.subtotal)}</p>
                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='font-medium'>Envío</p>
                      <p className='font-medium'>{formatCurrency(pago.envio)}</p>
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

                          <p className='text-[12px] font-normal'>{pago.cupon.nombre}</p>
                        </div>

                        <p className='font-medium'>-{formatCurrency(pago.cupon.descuento)}</p>

                      </div>

                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='font-medium'>Ahorro adicional</p>
                      <p className='font-medium'>-{formatCurrency(pago.cupon.descuento)}</p>
                    </div>
                  </div>

                  <hr className='my-8 bg-[#D3D3D3]' />

                  <div className='flex flex-col gap-4 lg:text-[20px]'>
                    <p className='font-medium'>Método de pago</p>

                    <div className='flex items-center gap-4'>
                      {pago.metodo.id === 1 && (
                        <>
                          <Image src="/images/mercado-pago.png" alt="mercado pago" width={50} height={50} />
                          <p>
                            Mercado pago con <span className='font-bold'>tarjeta de crédito</span>
                          </p>
                        </>

                      )}
                    </div>
                  </div>

                  <hr className='my-8 bg-[#D3D3D3]' />

                  <p className='font-normal text-[28px]'>Total del pedido</p>

                  <p className='text-[18px] font-bold'>{formatCurrency(pago.total)}</p>

                </div>
                
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
