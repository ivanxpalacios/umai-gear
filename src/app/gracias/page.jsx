import Link from "next/link"
import Image from "next/image"
import formatCurrency from "@/src/utils/formatCurrency";

export default function Gracias() {

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
        </div>

        <div
          className="mt-[50px]"
        >
          <h2 className="text-[28px]">😍 Gracias por tu pedido</h2>

          <p className="text-[18px] m-sm">
            El estado de tu pedido es <span className="text-primary font-[600]">Pagado</span>, te enviaremos un correo con estos datos y te notificaremos en cuanto tu pedido este en camino a tu domisulio
          </p>
        </div>

        <div
          className="mt-[50px]"
        >
          <h3 className="text-[24px]">Datos del pedido</h3>

          <div className='m-sm'>
            <h2 className='font-bold lg:text-[20px]'>Tu número de pedido</h2>

            <p className='text-[36px]'>#LA0034</p>
          </div>

          <div className='m-md'>
            {/* Fila de nombre completo */}
            <div>
              <p className='font-bold lg:text-[20px]'>Nombre completo</p>
              <p className='lg:text-[20px]'>Pérez Hernández</p>
            </div>

            {/* Filas de correo electrónico y teléfono */}
            <div className='m-sm flex items-center gap-20'>
              <div>
                <p className='font-bold lg:text-[20px]'>Correo electrónico</p>
                <p className='lg:text-[20px]'>max@gmail.com</p>
              </div>

              <div>
                <p className='font-bold lg:text-[20px]'>Teléfono</p>
                <p className='lg:text-[20px]'>55 7050 7658</p>
              </div>
            </div>

            <div className='m-sm'>
              <p className='font-bold lg:text-[20px]'>Dirección de envío</p>
              <p className='lg:text-[20px]'>Av de los Volcanes 400, Santa Clara Ocoyucan 72860, Puebla</p>
            </div>
          </div>
        </div>

        {/* Tabla de Productos del pedido */}
        <div className='mt-[50px]'>
          <h2 className='text-[24px] leading-[24px]'>Productos del pedido</h2>

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
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="font-[300] lg:text-[18px]">
                    <td className="flex items-center gap-8 pe-6 py-4 whitespace-nowrap">
                      <Image src="/images/product_img.png" className="border border-[#D9D9D9] rounded-[13px] p-1 w-[55px] h-auto" width={100} height={100} alt="product" />

                      <div>
                        <p>ChocoLux Botox Hair</p>
                        
                        <div className='m-sm flex gap-8'>
                          <p className='line-through'>{formatCurrency(148)}</p>

                          <p className='font-[500]'>{formatCurrency(120)}</p>
                        </div>

                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap" align='center'>
                      <p className="bg-[#D9D9D9] font-[500] rounded-full w-6 h-6 flex items-center justify-center">2</p>
                    </td>

                    <td className="font-medium px-6 py-4 whitespace-nowrap" align='center'>
                      {formatCurrency(1230)}
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Separador de columnas */}
      <div className="hidden xl:block w-[2px] bg-[#D6D6D6]" />

      <div className="w-full xl:max-w-[35%] m-lg xl:m-sm">
        <h2 className="text-[24px]">Detalles del pago</h2>

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

        <div>
          <p className="font-medium text-[18px]">Método de pago</p>

          <div className="m-sm flex items-center gap-8">
            <Image src={"/images/mercado-pago.png"} alt="logo mercado pago" width={80} height={80}  />

            <p className="font-normal">Mercado Pago con <span className="font-semibold">tarjeta de crédito</span></p>
          </div>
        </div>

        <hr className='my-8 bg-[#D3D3D3] w-full' />

        <div className="">
          <p className='font-normal text-[38px] leading-[38px]'>Total del pedido</p>

          <p className='m-sm text-[28px] font-extrabold'>{formatCurrency(2120)}</p>
        </div>

      </div>

    </main>
  )
}