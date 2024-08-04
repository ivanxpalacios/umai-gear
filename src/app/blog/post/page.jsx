"use client";
import Image from "next/image"
import { PlayfairDisplayFont } from '@/src/utils/fonts'
import KitCard from "@/src/components/KitCard/KitCard"


export default function Post() {
  return (
    <main className="m-md container-mx px-5">
      <Image src={'/images/post_1.jpg'} alt='Banner' width={1920} height={1080} />

      <section>
        <h1 className={`${PlayfairDisplayFont.variable} m-md ff-fairplay text-[36px] lg:text-[48px]`}>
          Título del artículo
        </h1>

        <p className={`${PlayfairDisplayFont.variable} ff-fairplay text-[12px] lg:text-[16px]`}>27 de Junio de 2022</p>

        <p className="m-md lg:text-[20px]">
          Los minerales esenciales, como el zinc y el magnesio, se combinan para regular la producción de sebo en el cuero cabelludo, manteniendo un ambiente equilibrado y saludable para el crecimiento capilar. Además, el magnesio fortalece los folículos pilosos y estimula la circulación sanguínea en el cuero cabelludo, promoviendo un crecimiento capilar saludable y vigoroso.
        </p>

        <p className="m-sm lg:text-[20px]">
          El cabello no es solo una expresión de nuestra identidad, sino también un reflejo de nuestra salud y bienestar. En Laénzia Natura, comprendemos la importancia del cuidado capilar y cómo una rutina adecuada puede transformar la apariencia y la sensación de tu melena. Acompáñanos en este viaje hacia la belleza capilar y descubre una rutina básica que marcará la diferencia
        </p>

        <p className="m-sm lg:text-[20px]">
          Paso 1: Limpieza Profunda con Glyceric Shampoo <br />
          Comienza tu rutina con nuestro Glyceric Shampoo. Esta limpieza profunda eliminará suavemente las impurezas y el exceso de grasa, dejando tu cabello limpio y fresco. Masajea el shampoo en el cuero cabelludo y enjuaga con abundante agua.
        </p>

        <p className="lg:text-[20px]">
          Paso 2: Nutrición Diaria con Shampoo Vitamin Infusion <br />
          Sigue con nuestro Shampoo Vitamin Infusion para proporcionar a tu cabello los nutrientes esenciales que necesita. Esta fórmula única nutre y fortalece, dejando tu melena lista para enfrentar el día con vitalidad. Aplica el shampoo y disfruta de su fragancia revitalizante.
        </p>

        <p className="lg:text-[20px]">
          Paso 3: Restauración con Keratin Radiance <br />
          Si quieres lograr un alisado natural, cada dos meses, integra Keratin Radiance en tu rutina. Esta poderosa fórmula restaurará la vitalidad de tu cabello, aportando fuerza , suavidad y brillo.
        </p>

        <p className="lg:text-[20px]">
          Paso 4: Protección del Color con VitalColor Mask
          Si tu cabello está coloreado, no olvides incluir VitalColor Mask para mantener la intensidad y la salud del color.
        </p>

        <p className="lg:text-[20px]">
          Paso 5: Lujo Final con Passion Fruit Elixir
          Termina tu rutina con Passion Fruit Elixir. Este aceite reparador de puntas aportará suavidad y brillo a tus mechones. Aplica una pequeña cantidad en las puntas y distribúyelo uniformemente.
          Sigue esta rutina básica de cuidado capilar con los productos Laénzia Natura y descubre la transformación que una atención adecuada puede lograr. La ciencia y la naturaleza se unen en cada producto para brindarte una experiencia única. ¡Despierta la belleza natural de tu cabello con Laénzia Natura!
        </p>
      </section>

      <section className="m-lg ">
        <h2 className="font-normal text-[20px] lg:text-[28px]">Artículos relacionados</h2>

        <div className='m-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-[50px] w-full'>

        {[1, 2, 3]?.map((kit, index) => (
          <div
            key={index}
            className='w-full'
          >
            <KitCard
              hasDiscount={index === 1}
            />
          </div>
        ))}
        </div>
      </section>

    </main>
  )
}
