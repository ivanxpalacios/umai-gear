"use client";
import { useState } from 'react'
import CustomButton from "@/src/components/CustomButton/CustomButton";
import HeroCustom from "@/src/components/HeroCustom/hero-home/HeroCustom";
import { PlayfairDisplayFont } from '@/src/utils/fonts'
import GridProductos from '@/src/components/GridProductos/GridProductos';

export default function Tienda() {

  const filtros = [
    'Aceites Esenciales',
    'Mascarillas',
    'Shampoos',
    'Tratamientos intensivos'
  ]

  const [filtroSeleccionado, setFiltroSeleccionado] = useState(filtros[0])

  return (
    <main>
      <HeroCustom
        bg_image={'/images/banner-tienda.png'}
        texto={(<span>Naturaleza <br /> para tu cabello</span>)}
      />

      <section
        className="m-lg px-5 container-mx"
      >
        <ul
          className="flex gap-4 overflow-x-auto lg:justify-center"
        >
          {filtros.map(filtro => (
            <li
              key={filtro}
              className='lg:flex-1'
            >
              <CustomButton
                texto={filtro}
                onClick={() => setFiltroSeleccionado(filtro)}
                className={`
                  ${PlayfairDisplayFont.variable} ${filtroSeleccionado != filtro ? 'bg-white border border-primary hover:text-white' : 'text-white'}
                  ff-fairplay whitespace-nowrap w-full
                `}
              />
            </li>
          ))}

        </ul>

        <div className='m-lg'>
          <GridProductos productos={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </div>

        <div className='mt-[300px]'></div>

      </section>


    </main>
  )
}