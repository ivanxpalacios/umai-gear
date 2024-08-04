"use client";
import { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

export default function EligeMetodoPago() {

  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);

  function togglePanels(newPanel) {

    if (activeDisclosurePanel) {
      if (activeDisclosurePanel.key !== newPanel.key && activeDisclosurePanel.open) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel, 
      open: !newPanel.open
    });
  }

  return(
    <div className="w-full">
      <p className='font-normal text-[18px] lg:text-[24px]'>Elige un método de pago</p>

      <div className="m-sm">
        <Disclosure>
          {(panel) => {

            const { open, close } = panel;

            return (
              <>
                <Disclosure.Button
                  onClick={ () => {                        
                    if (!open) {
                      close(); 
                    }
                    // La key tiene que ser distinta para que se cierre un Disclosure al abrir cualquier otro
                    togglePanels({ ...panel, key: 1 });
                  }}
                  className="border border-[#D6D6D6] flex w-full justify-between items-center px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring "
                >
                  <span className='flex items-center gap-4'>
                    <span className={`${!open ? 'bg-[#D9D9D9]' : 'bg-primary'} rounded-full w-2 h-2`} />
                    <span>PayPal</span>
                  </span>

                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-6 w-6 transition-all text-purple-500`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    dadasdas
                  </Disclosure.Panel>
                </Transition>
              </>
            )

          }}
        </Disclosure>

        <Disclosure>
          {(panel) => {

            const { open, close } = panel;

            return (
              <>
                <Disclosure.Button
                  onClick={ () => {                        
                    if (!open) {
                      close(); 
                    }
                    // La key tiene que ser distinta para que se cierre un Disclosure al abrir cualquier otro
                    togglePanels({ ...panel, key: 2 });
                  }}
                  className="border border-[#D6D6D6] flex w-full justify-between items-center px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring "
                >
                  <span className='flex items-center gap-4'>
                    <span className={`${!open ? 'bg-[#D9D9D9]' : 'bg-primary'} rounded-full w-2 h-2`} />
                    <span>Mercado Pago</span>
                  </span>

                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-6 w-6 transition-all text-purple-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    Selecciona la mejor forma de pago, tarjeta de crédito, débito, efectivo y más.
                    <Image src={"/images/pago-mercadopago.png"} className='w-full' width={200} height={50} alt='formas de pago de Mercado Pago' />
                  </Disclosure.Panel>
                </Transition>
              </>
            )

          }}
        </Disclosure>
        
      </div>
    </div>
  )
}