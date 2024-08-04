"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import Image from 'next/image';

export default function ModalDireccion({
  isOpen,
  setIsOpen
}) {

  const [isEditing, setIsEditing] = useState(false);

  const [datos, setDatos] = useState({
    calle: 'Bulevart de los Voclanes 400',
    codigoPostal: '2339w2',
    colonia: 'Santal calra ococuayanl',
    estado: 'Puebla',
    referencias: 'sí',

    predeterminada: false
  });

  const [datosForm, setDatosForm] = useState({
    calle: datos.calle,
    codigoPostal: datos.codigoPostal,
    colonia: datos.colonia,
    estado: datos.estado,
    referencias: datos.referencias,

    predeterminada: datos.predeterminada
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleGuardarCambios = () => {

    if (!datosForm.calle || !datosForm.codigoPostal || !datosForm.colonia || !datosForm.estado || !datosForm.referencias) {
      return;
    }

    setDatos({
      ...datos,
      calle: datosForm.calle,
      codigoPostal: datosForm.codigoPostal,
      colonia: datosForm.colonia,
      estado: datosForm.estado,
      referencias: datosForm.referencias,

      predeterminada: datosForm.predeterminada
    });

    setIsEditing(false);

    mostrarMensajeExito();

    setTimeout(() => {
      closeModal();
    }, 2000);
  }

  const mostrarMensajeExito = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  function closeModal() {
    setIsOpen(false);

    setDatosForm({
      calle: datos.calle,
      codigoPostal: datos.codigoPostal,
      colonia: datos.colonia,
      estado: datos.estado,
      referencias: datos.referencias,

      predeterminada: datos.predeterminada
    });

    setIsEditing(false);

    setShowSuccessMessage(false);
  }

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

                <h2 className='text-[24px] leading-[24px]'>Dirección de envío</h2>

                {/* Checkbox de dirección predeterminada */}
                <div className='flex items-center justify-end mt-[24px]'>
                  <input
                    type="checkbox"
                    id='cupon'
                    className="checkbox"
                    checked={datosForm.predeterminada}
                    onChange={(e) => {
                      setDatosForm({ ...datosForm, predeterminada: e.target.checked })
                      mostrarMensajeExito();
                    }}
                  />

                  <label
                    htmlFor="cupon"
                    className='text-[18px] ml-2'
                  >
                    Dirección predeterminada
                  </label>
                </div>

                <form>
                  <div className="mt-[24px] flex flex-col gap-6">
                    {/* Row de calle y número */}
                    <div>
                      <div
                        className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} ${!datosForm.calle ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border  w-full p-3`}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={datosForm.calle}
                            placeholder="Calle y número"
                            onChange={(e) => setDatosForm({ ...datosForm, calle: e.target.value })}
                          />
                        ) : (
                          <p className="cursor-default">
                            {datos.calle || 'Calle y número'}
                          </p>
                        )}
                      </div>

                      {!datosForm.calle && (
                        <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                      )}
                    </div>

                    {/* Row de código postal, colonia y estado */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className='w-full'>
                        <div
                          className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} ${!datosForm.codigoPostal ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border  w-full p-3`}
                        >
                          {isEditing ? (
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={datosForm.codigoPostal}
                              placeholder="Código postal"
                              onChange={(e) => setDatosForm({ ...datosForm, codigoPostal: e.target.value })}
                            />
                          ) : (
                            <p className="cursor-default">
                              {datos.codigoPostal || 'Código postal'}
                            </p>
                          )}
                        </div>

                        {!datosForm.codigoPostal && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div className='w-full'>
                        <div
                          className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} ${!datosForm.colonia ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border  w-full p-3`}
                        >
                          {isEditing ? (
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={datosForm.colonia}
                              placeholder="Colonia"
                              onChange={(e) => setDatosForm({ ...datosForm, colonia: e.target.value })}
                            />
                          ) : (
                            <p className="cursor-default">
                              {datos.colonia || 'Colonia'}
                            </p>
                          )}
                        </div>

                        {!datosForm.colonia && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div className='w-full'>
                        <div
                          className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} ${!datosForm.estado ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border  w-full p-3`}
                        >
                          {isEditing ? (
                            <input
                              type="text"
                              className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                              value={datosForm.estado}
                              placeholder="Estado"
                              onChange={(e) => setDatosForm({ ...datosForm, estado: e.target.value })}
                            />
                          ) : (
                            <p className="cursor-default">
                              {datos.estado || 'Estado'}
                            </p>
                          )}

                        </div>

                        {!datosForm.estado && (
                          <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                        )}
                      </div>
                    </div>

                    {/* Row de referencias */}
                    <div>
                      <div
                        className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} ${!datosForm.referencias ? 'border-[#D10000]' : 'border-[#D6D6D6]'} border h-[129px] w-full p-3`}
                      >
                        {isEditing ? (
                          <textarea
                            className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                            value={datosForm.referencias}
                            placeholder="Referencias"
                            onChange={(e) => setDatosForm({ ...datosForm, referencias: e.target.value })}
                            rows={4}
                          />
                        ) : (
                          <p className="cursor-default">
                            {datos.referencias || 'Referencias'}
                          </p>
                        )}
                      </div>

                      {!datosForm.referencias && (
                        <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
                      )}
                    </div>

                  </div>

                  {showSuccessMessage && (
                    <div className="m-md border border-[#1FB062] px-4 py-3 flex items-center gap-2">
                      <Image src={"/images/alert-icon.png"} alt="icono de alerta" width={20} height={20} />
                      <p className="font-normal">Datos actualizados correctamente</p>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-4 m-md">
                    <button
                      type='button'
                      className="font-normal border border-black w-full max-w-[250px] p-3 hover:bg-[#fafafa] transition-colors"
                      onClick={() => closeModal()}
                    >
                      Cancelar
                    </button>

                    {isEditing ? (
                      <button
                        type='button'
                        onClick={() => handleGuardarCambios()}
                        className="font-normal border border-primary w-full max-w-[250px] p-3 hover:bg-[#fafafa] transition-colors"
                      >
                        Guardar cambios
                      </button>
                    ) : (
                      <button
                        type='button'
                        onClick={() => setIsEditing(true)}
                        className="lg:text-[18px] font-normal border border-primary w-full max-w-[250px] p-3 hover:bg-[#fafafa] transition-colors"
                      >
                        Actualizar datos
                      </button>
                    )}

                  </div>

                  <button
                    className='font-normal flex items-center gap-2 m-md'
                  >
                    <Image src={"/images/trash-icon.png"} alt="icono de eliminar" width={20} height={20} />
                    Borrar esta dirección
                  </button>

                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
