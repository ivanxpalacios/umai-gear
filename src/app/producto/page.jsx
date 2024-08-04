"use client";
import Image from "next/image";
import { useState } from "react";
import SwiperGaleriaSinglep from "@/src/components/swiper-galeria-singlep/SwiperGaleriaSinglep";
import Presentaciones from "@/src/components/Presentaciones/Presentaciones";
import BotonAgregar from "@/src/components/BotonAgregar/BotonAgregar";
import Ingredientes from "@/src/components/Ingredientes/Ingredientes";
import SwiperProductos from "@/src/components/SwiperProductos/SwiperProductos";

export default function Producto() {

  const [presentacion, setPresentacion] = useState('350 ml');

  const [contador, setContador] = useState(1);


  return (
    <div>
      <section className="lg:flex justify-between gap-2 lg:gap-[40px] px-5 max-w-[1200px] !mx-auto m-md lg:m-lg">
        <div className="lg:w-[55%] relative">
          <SwiperGaleriaSinglep arregloImagenes={[1, 2, 3, 4, 5, 6, 7]} />
        </div>

        <div className="m-sm lg:m-0 lg:w-[45%]">
          <h1 className='text-[28px] lg:text-[36px]'>ChocoLux Botox Hair</h1>

          <div className='m-sm text-[22px] lg:text-[26px] leading-[22px] lg:leadgin-[26px] flex gap-8'>
            <p className='line-through'>$148.00</p>

            <p className='font-[500]'>$120.00</p>
          </div>

          <p className="m-sm text-[22px] lg:text-[26px]">Fórmula enriquecida con magnesio y zinc para un cuidado capilar excepcional.</p>
      
          {/* Presentaciones y botón de agregar*/}
          <div className='m-md'>
            <Presentaciones presentacion={presentacion} setPresentacion={setPresentacion} />
          
            <BotonAgregar contador={contador} setContador={setContador}/>

          </div>

          {/* Seleccionaste y Subtotal */}
          <div className="mt-[20px] flex items-start justify-between">
            <div className=" flex items-center gap-4">
              <p className="leading-[16px] font-normal">Seleccionaste</p>
              <p
                className={`border-[#C8A976] bg-[#f8f8f8] text-[14px] border w-fit px-4 text-center`}
              >
                {presentacion}
              </p>
            </div>

            <div>
              <p className="font-normal">Subtotal</p>
              <p className="text-[28px] font-[500]">$1,120.00</p>
            </div>

          </div>

          {/* Contenedor de iconos de Envíos y Pago seguro */}
          <div className="m-md lg:m-sm flex flex-col gap-2">

            <div className="flex items-center gap-4">
              <Image src="/images/envios-icono.png" width={40} height={40} alt="imagen envio" />
              <p className="font-normal">Envíos de 2 a 5 días</p>
            </div>

            <div className="flex items-center gap-4">
              <Image src="/images/pago-seguro-icono.png" width={40} height={40} alt="imagen envio" />
              <p className="font-normal">Pago seguro con Paypal y Mercado Pago</p>
            </div>

          </div>
        </div>

      </section>

      {/* Descripción e ingredientes */}
      <section className="px-5 max-w-[1200px] !mx-auto m-lg lg:m-xl lg:flex justify-between gap-20">
        <div className="w-full">

          <h1 className="text-[22px] lg:text-[26px] font-normal">Descripción</h1>

          <p className="m-sm text-[22px] lg:text-[26px]">
            Sumérgete en una experiencia de lujo para revitalizar tu cabello con nuestra mascarilla ChocoLux Botox Hair. Esta fórmula única, enriquecida con una combinación exquisita de ingredientes, restaura las fibras capilares dañadas, mejorando su textura y reduciendo las puntas abiertas. Además, protege el cabello contra los daños causados por los radicales libres y la exposición ambiental, promoviendo un cabello saludable y radiante.
          </p>
        </div>

        <div className="m-md lg:m-0 w-full">
          <Ingredientes ingredientes={['Magnesio', 'Zinc', 'Vitamina E', 'Aceite de argán', 'Aceite de coco', 'Lavanda', 'Ashwaganda', 'Citrato']}/>
        </div>

      </section>

      {/* Beneficios */}
      <section className="px-5 max-w-[1200px] !mx-auto m-lg lg:m-xl lg:flex justify-between gap-20">
        <div className="w-full">
          <h1 className="text-[22px] lg:text-[26px] font-normal uppercase text-[#C8A976]">Beneficios</h1>

          <p className="m-sm font-normal text-[44px]">Experiencia de lujo <br className="hidden lg:block" /> para revitalizar el <br className="hidden lg:block" /> cabello</p>
        </div>

        <p className="w-full m-md lg:m-0 text-[22px] lg:text-[26px]">
          Los minerales esenciales, como el <span className="font-[600] text-[#C8A976]">zinc</span> y el <span className="font-[600] text-[#C8A976]">magnesio</span>, se combinan para regular la producción de sebo en el cuero cabelludo, manteniendo un ambiente equilibrado y saludable para el crecimiento capilar. Además, el magnesio fortalece los folículos pilosos y estimula la circulación sanguínea en el cuero cabelludo, promoviendo un crecimiento capilar saludable y vigoroso.
        </p>

      </section>

      {/* Métricas claves */}
      <section className="px-5 max-w-[1200px] !mx-auto m-lg lg:m-xl lg:flex justify-between gap-20">

        <div className="w-full lg:order-2">
          <h1 className="text-[22px] lg:text-[26px] font-normal uppercase text-[#C8A976]">Métricas claves</h1>

          <p className="m-sm font-normal text-[44px]">Índice de Satisfacción del Cliente</p>
        </div>

        <p className="w-full m-md lg:m-0 text-[22px] lg:text-[26px]">
          Reducción de Problemas Capilares: Después de seis meses de uso continuo, el 90% de los usuarios informaron una mejora significativa en la suavidad y el manejo de su cabello, lo que indica la eficacia de la mascarilla ChocoLux Botox Hair para abordar y mejorar una variedad de problemas capilares.
        </p>

      </section>

      {/* Productos relacionados */}
      <section className="px-5 max-w-[1200px] !mx-auto m-lg lg:m-xl">
        <SwiperProductos />
      </section>


    </div>
  )
}