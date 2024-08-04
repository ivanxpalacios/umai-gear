"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { PlayfairDisplayFont } from '@/src/utils/fonts'
import Image from 'next/image'
import formatCurrency from '@/src/utils/formatCurrency';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";


export default function Carrito() {

  const router = useRouter();

  const pedido = {
    id: 'LA0034',
    statusPago: 'Pagado',
    statusEnvio: 'Enviado',
    cliente: {
      nombre: 'Maximiliano Rojas',
      telefono: '1234567890',
      correo: 'max@gmail.com',
      direccion: 'Bulevart de los Voclanes 400, Santal calra ococuayanl 2339w2'
    },
    order: [
      {
        id: 'A0001',
        nombre: 'ChocoLux Botox Hair',
        cantidad: 2,
        precio: 148,
        precioDescuento:120
      },
      {
        id: 'A0002',
        nombre: 'ChocoLux Botox Hair',
        cantidad: 2,
        precio: 148,
        precioDescuento:120
      },
      {
        id: 'A0003',
        nombre: 'CocoLux Botox Hair',
        cantidad: 2,
        precio: 148,
        precioDescuento:120
      },
    ],
    pago: {
      subtotal: 1120,
      envio: 140,
      cupon: {
        status: true,
        nombre: 'AHORRO10',
        descuento: 120
      },
      ahorroAdicional: 120,
      metodo: {
        id: 1
      },
      total: 2120
    }
  };

  const {
    id,
    statusPago,
    statusEnvio,
    cliente,
    order,
    pago
  } = pedido;

  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(10);

  const sumar = () => {
    if (stock > 0) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  }

  return (
    <main
      className="m-lg px-5 container-mx"
    >

      {Object.keys(pedido).length > 0 ? (
        <>
          <div className='flex items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-[32px] h-[32px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            <p className={`${PlayfairDisplayFont.variable} ff-fairplay text-[36px] leading-[36px]`}>Mi carrito</p>
          </div>

          <div className='mt-[50px] lg:flex lg:gap-20'>
            <div
              className='lg:order-2'
            >
              <div
                className='bg-[#EEEEEE] rounded-[22px] p-6'
              >
                <h2
                  className={`${PlayfairDisplayFont.variable} ff-fairplay text-[24px]`}
                >
                  Resumen del pedido
                </h2>

                <div className='m-md flex justify-between items-center'>
                  <p className='font-medium w-[130px]'>Subtotal</p>
                  <hr className='bg-[#D3D3D3] w-[100px]' />
                  <p className='font-medium w-[80px] text-end'>$1120.00</p>
                </div>

                <div className='m-sm'>
                  <p className='font-medium w-[130px]'>Cupón aplicado</p>

                  <div className='mt-1 flex justify-between items-center'>
                    <div className='flex items-center gap-1 bg-[#C8A976] rounded-full w-fit px-2 py-1'>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <p className='text-[12px] font-normal'>AHORRO10</p>
                    </div>

                    <hr className='bg-[#D3D3D3] w-[100px]' />
                    <p className='font-medium w-[80px] text-end'>-$120.00</p>
                  </div>
                </div>

                <div className='m-md flex justify-between items-center'>
                  <p className='font-medium w-[130px]'>Ahorro adicional</p>
                  <hr className='bg-[#D3D3D3] w-[100px]' />
                  <p className='font-medium w-[80px] text-end'>-$120.00</p>
                </div>

                <hr className='bg-[#D3D3D3] my-10' />

                <div className='flex items-center justify-between'>
                  <p className='font-medium text-[28px]'>Total</p>
                  <p className='font-medium text-[28px]'>$2,120.00</p>
                </div>

                <button
                  className="m-md bg-white text-[14px] font-normal border border-[#C8A976] w-full py-2 text-center hover:bg-[#C8A976] hover:text-white transition-colors"
                  onClick={() => router.push("/checkout")}
                >
                  TERMINAR COMPRA
                </button>

              </div>

              <p className='m-sm font-normal text-[14px]'>El costo de envío se calculará antes de terminar la compra</p>
            </div>


            <div className="mt-[50px] lg:mt-0 relative overflow-x-auto w-full">
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
                    <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600] text-center min-w-[100px]">
                      
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
                          <div className="flex items-center justify-center gap-4">
                            <button
                              onClick={restar}
                              className={`${
                                contador > 1 ? "" : "cursor-default"
                              }`}
                            >
                              <MinusIcon
                                className="w-5"
                                aria-hidden="true"
                                color={contador > 1 ? "black" : "gray"}
                              />
                            </button>

                            <input
                              className="bg-transparent w-4 text-center text-[18px]"
                              type="text"
                              value={contador}
                              onChange={(e) => {
                                e.target.value;
                              }}
                            />

                            <button
                              onClick={sumar}
                              className={`${
                                stock > 0 ? "" : "cursor-default"
                              }`}
                            >
                              <PlusIcon
                                className="w-5"
                                aria-hidden="true"
                                color={stock > 0 ? "black" : "gray"}
                              />
                            </button>
                          </div>
                        </td>

                        <td className="font-medium px-6 py-4 whitespace-nowrap text-center" align='center'>
                          {formatCurrency(pago.subtotal)}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap" align='center'>
                          <button>
                            <Image
                              src="/images/x-icon.png"
                              width={20}
                              height={20}
                              alt="Eliminar"
                            />
                          </button>

                        </td>

                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
      </>

      ) : (
        <>
          <div className='flex items-center justify-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-[32px] h-[32px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            <p className={`${PlayfairDisplayFont.variable} ff-fairplay text-[28px] leading-[28px]`}>Tu carrito está vacío</p>
          </div>

          <Image
            src="/images/carrito-vacio.png"
            width={500}
            height={500}
            alt="Carrito vacío"
            className='mx-auto'
          />

          <div className='m-md flex justify-center'>
            <button
              type='button'
              onClick={() => router.push('/tienda')}
              className="lg:text-[18px] font-normal border border-primary w-full max-w-[250px] px-3 py-2 hover:bg-[#fafafa] transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        </>
      )}




    </main>
  )
}