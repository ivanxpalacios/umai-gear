"use client";
import { useState } from "react";
import formatCurrency from "@/src/utils/formatCurrency";
import Image from "next/image";
import ModalDireccion from "../ModalDireccion/ModalDireccion";
import ModalPedido from "../ModalPedido/ModalPedido";

export default function CuentaNavegacion() {

  const [navegacion, setNavegacion] = useState('pedidos');

  const [isEditing, setIsEditing] = useState(false);

  const [datos, setDatos] = useState({
    nombre: 'Maximiliano',
    apellido: 'Rojas',
    correo: 'maxrojas@correo.com',
    telefono: '1234567890'
  });

  const [datosForm, setDatosForm] = useState({
    nombre: datos.nombre,
    apellido: datos.apellido,
    correo: datos.correo,
    telefono: datos.telefono
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleGuardarCambios = () => {

    if (!datosForm.nombre || !datosForm.apellido || !datosForm.correo || !datosForm.telefono) {
      return;
    }

    setDatos({
      ...datos,
      nombre: datosForm.nombre,
      apellido: datosForm.apellido,
      correo: datosForm.correo,
      telefono: datosForm.telefono
    });

    setIsEditing(false);

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  const [isOpenModalDireccion, setIsOpenModalDireccion] = useState(false);

  const [isOpenModalPedido, setIsOpenModalPedido] = useState(false);

  const [pedido, setPedido] = useState({
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
  });

  return (
    <section>
      <ModalDireccion isOpen={isOpenModalDireccion} setIsOpen={setIsOpenModalDireccion} />

      <ModalPedido pedido={pedido} isOpen={isOpenModalPedido} setIsOpen={setIsOpenModalPedido} />

      {/* Contenedor de botones de navegación */}
      <div className="flex flex-wrap justify-between gap-y-8 gap-x-4 max-w-[750px]">
        <button
          onClick={() => setNavegacion('pedidos')}
          className={`${navegacion === 'pedidos' ? 'border-primary' : 'border-transparent'} border-b-2  hover:border-primary text-[24px] lg:text-[28px]`}
        >
          Mis pedidos
        </button>

        <button
          onClick={() => setNavegacion('direcciones')}
          className={`${navegacion === 'direcciones' ? 'border-primary' : 'border-transparent'} border-b-2  hover:border-primary text-[24px] lg:text-[28px]`}
        >
          Mis direcciones
        </button>

        <button
          onClick={() => setNavegacion('datos')}
          className={`${navegacion === 'datos' ? 'border-primary' : 'border-transparent'} border-b-2  hover:border-primary text-[24px] lg:text-[28px]`}
        >
          Mis datos de acceso
        </button>
      </div>

      {/* Mis pedidos */}
      {navegacion === 'pedidos' && (
        <div className="m-md relative overflow-x-auto w-full">
          <table className="w-full text-left rtl:text-right">
            <thead className="lg:text-[18px]">
              <tr>
                <th scope="col" className="whitespace-nowrap pe-6 py-3 font-[600]">
                  Fecha
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600]">
                  Cantidad de artículos
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600]">
                  Total del pedido
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600]">
                  Estado del pedido
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600]">
                  Envío
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-3 font-[600]">
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2]
                ?.map((pedido, index) => (
                  <tr key={index} className="font-[300] lg:text-[18px]">
                    <td className="pe-6 py-4 whitespace-nowrap">
                      26 de agosto 2024
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="bg-[#D9D9D9] font-[500] rounded-full w-6 h-6 flex items-center justify-center">2</p>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatCurrency(1230)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {index === 0 ? (
                        <p className="bg-primary text-white font-[600] rounded-full text-center py-1">
                          Pagado
                        </p>
                      ) : (
                        <p className="bg-[#C4C4C4] font-[600] rounded-full text-center py-1">
                          Pendiente
                        </p>
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="bg-[#000] text-white font-[600] rounded-full text-center py-1 min-w-[120px]">
                        Enviado
                      </p>
                    </td>

                    <td className="px-6 py-4 flex items-center gap-4">
                      <button
                        type="button"
                        className="w-full"
                        onClick={() => setIsOpenModalPedido(true)}
                      >
                        <Image src={"/images/eye-notfill-icon.png"} className="min-w-[30px] h-auto" alt="icono de ojo" width={30} height={30} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mis direcciones */}
      {navegacion === 'direcciones' && (
        <div className="m-md lg:text-[18px]">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-primary"
            />

            <p className="font-[600]">Dirección por defecto</p>
          </div>

          <div className="m-sm border border-[#D6D6D6] divide-y divide-[#D6D6D6]">
            <div className=" flex items-center justify-between px-4 py-3">
              <div className=" flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full bg-[#D9D9D9]"
                />

                <p>Bulevart de  los Voclanes 400, Santal calra ococuayanl  2339w2</p>
              </div>

              <button onClick={() => setIsOpenModalDireccion(true)} className="font-[600]">Editar</button>
            </div>


            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full bg-primary"
                />

                <p>Bulevart de  los Voclanes 400, Santal calra ococuayanl  2339w2</p>
              </div>

              <button onClick={() => setIsOpenModalDireccion(true)} className="font-[600]">Editar</button>
            </div>
          </div>

        </div>
      )}

      {/* Mis datos */}
      {navegacion === 'datos' && (
        <div>
          <div className="m-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div
                className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} border border-[#D6D6D6] w-full p-3`}
              >
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                    value={datosForm.nombre}
                    placeholder="Nombre"
                    onChange={(e) => setDatosForm({ ...datosForm, nombre: e.target.value })}
                  />
                ) : (
                  <p className="cursor-default">
                    {datos.nombre || 'Nombre'}
                  </p>
                )}
              </div>

              {!datosForm.nombre && (
                <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
              )}
            </div>

            <div>
              <div
                className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} border border-[#D6D6D6] w-full p-3`}
              >
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                    value={datosForm.apellido}
                    placeholder="Apellido"
                    onChange={(e) => setDatosForm({ ...datosForm, apellido: e.target.value })}
                  />
                ) : (
                  <p className="cursor-default">
                    {datos.apellido || 'Apellido'}
                  </p>
                )}
              </div>

              {!datosForm.apellido && (
                <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
              )}
            </div>

            <div>
              <div
                className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} border border-[#D6D6D6] w-full p-3`}
              >
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                    value={datosForm.correo}
                    placeholder="Correo electrónico"
                    onChange={(e) => setDatosForm({ ...datosForm, correo: e.target.value })}
                  />
                ) : (
                  <p className="cursor-default">
                    {datos.correo || 'Correo electrónico'}
                  </p>
                )}
              </div>

              {!datosForm.correo && (
                <p className="font-normal text-[#D10000] text-[12px] mt-1">Este campo es obligatorio</p>
              )}
            </div>

            <div>
              <div
                className={`${isEditing ? 'bg-[#FFF]' : 'bg-[#F6F6F6]'} border border-[#D6D6D6] w-full p-3`}
              >
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-transparent focus-visible:outline-none w-full placeholder:font-[300]"
                    value={datosForm.telefono}
                    placeholder="Teléfono"
                    onChange={(e) => setDatosForm({ ...datosForm, telefono: e.target.value })}
                  />
                ) : (
                  <p className="cursor-default">
                    {datos.telefono || 'Teléfono'}
                  </p>
                )}
              </div>

              {!datosForm.telefono && (
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

          <div className="flex items-center justify-end m-md">
            {isEditing ? (
              <button
                onClick={() => handleGuardarCambios()}
                className="font-normal border border-primary w-full max-w-[250px] p-3 hover:bg-[#fafafa] transition-colors"
              >
                Guardar cambios
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="lg:text-[18px] font-normal border border-primary w-full max-w-[250px] p-3 hover:bg-[#fafafa] transition-colors"
              >
                Actualizar datos
              </button>
            )}

          </div>

        </div>

      )}

    </section>
  )

}