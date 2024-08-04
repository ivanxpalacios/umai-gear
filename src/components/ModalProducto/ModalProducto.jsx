"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import ProductIMG from '@/public/images/product_img.png'
import Image from 'next/image';
import Presentaciones from '../Presentaciones/Presentaciones';
import BotonAgregar from '../BotonAgregar/BotonAgregar';
import Ingredientes from '../Ingredientes/Ingredientes';
import { useRouter } from 'next/navigation';

export default function ModalProducto({
  isOpen,
  setIsOpen
}) {

  const router = useRouter();

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [presentacion, setPresentacion] = useState('350 ml');

  const [contador, setContador] = useState(1);

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
              <Dialog.Panel className="border border-gray-600 w-full max-w-[650px] lg:max-w-[950px] lg:max-h-[700px] transform  bg-white p-10 lg:px-20 text-left align-middle shadow-xl transition-all">


                <button className="absolute top-4 right-4 transition-colors hover:bg-[#efefef] rounded-full p-1" onClick={closeModal}>
                  <Image src='/images/x-icon.png' width={28} height={28} alt='Cerrar' />
                </button>

                <div className='lg:flex justify-start py-10 lg:gap-20'>
                  <div className="lg:w-[45%] flex items-center">
                    <Image className='mx-auto w-full h-auto max-w-[400px] lg:max-w-full' src={ProductIMG} width={300} height={300} alt='Producto' />
                  </div>

                  <div className="m-md lg:m-0 lg:w-[35%] overflow-y-auto">

                    <h1 className='text-[24px]'>ChocoLux Botox Hair </h1>

                    {/* Precios */}
                    <div className='m-sm text-[24px] leading-[22px] flex gap-8'>
                      <p className='line-through'>$148.00</p>

                      <p className='font-[500]'>$120.00</p>
                    </div>

                    {/* Presentaciones */}
                    <div className='m-md'>
                      <Presentaciones presentacion={presentacion} setPresentacion={setPresentacion} />

                      <BotonAgregar contador={contador} setContador={setContador}/>
                      
                    </div>

                    <div className='m-md'>
                      <p className='font-normal lg:text-[20px]'>Subtotal</p>

                      <p className='font-medium text-[24px] lg:text-[28px]'>$1,120.00</p>
                    </div>

                    <div className='m-md'>
                      <Ingredientes ingredientes={['Magnesio', 'Zinc', 'Potasio']} />
                    </div>

                    <div className='m-md'>
                      <button
                        type='button'
                        onClick={() => router.push('/producto')}
                        className="lg:text-[18px] font-normal border border-primary w-full lg:max-w-[250px] px-3 hover:bg-[#fafafa] transition-colors"
                      >
                        Más información
                      </button>
                    </div>

                  </div>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
