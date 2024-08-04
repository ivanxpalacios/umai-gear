"use client";
import Image from "next/image";
import HeroHome from "@/src/components/hero-home/HeroHome";
import VerTodos from "../components/VerTodos/VerTodos";
import GridProductos from "../components/GridProductos/GridProductos";
import KitCard from "../components/KitCard/KitCard";
import SwiperKits from "../components/SwiperKits/SwiperKits";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import SwiperReviews from "../components/SwiperReviews/SwiperReviews";
import NewsLetter from "../components/Newsletter/Newsletter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <HeroHome />

      {/* Laénzia Hair Vitality */}
      <section
        className="m-lg px-5 container-mx regular-text-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-250px" }}
        >
          <h1 className="section-header">
            Laénzia Hair Vitality
          </h1>

          <div className="md:flex items-end justify-between">
            <p className="m-sm max-w-[550px] lg:max-w-full">
              Nuestra línea Laénzia Hair Vitality no solo busca mejorar la estética y salud del <br className="hidden lg:block" /> cabello, sino que también representa la democratización del lujo capilar, haciendo <br className="hidden lg:block" /> que el cuidado de alta calidad sea accesible para todos.
            </p>

            <div className="m-sm mr-0 ml-auto md:m-[0] w-fit vertodoscontainer">
              <VerTodos />
            </div>
          </div>
        </motion.div>


        <div className="m-md lg:m-lg">
          <GridProductos productos={[1, 2, 3, 4]} />
        </div>

      </section>

      {/* Shampoo Vitamin Infusion */}
      <section className="m-lg lg:m-xl px-5 container-mx lg:flex justify-between regular-text-container">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-250px" }}
        >
          <h1 className="section-header">
            Shampoo Vitamin Infusion
          </h1>

          <p className="m-sm">
            Despierta la frescura y vitalidad de tu cabello con nuestra fórmula innovadora de Shampoo Vitamin Infusion. Equilibra el cuero cabelludo y revitaliza con colágeno, elastina, ácido hialurónico y vitamina E.
          </p>
        </motion.div>

        <motion.div
          className="m-md lg:m-0 max-w-[600px] mx-auto lg:w-1/2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-250px" }}
        >
          <Image src="/images/shampoo-1.png" className="w-full" width={500} height={500} alt="Shampoo Vitamin Infusion" />
          <Image src="/images/shampoo-2.png" className="w-full" width={500} height={500} alt="Shampoo Vitamin Infusion" />
        </motion.div>


      </section>

      {/* Kit de productos */}
      <section className="m-lg lg:m-xl px-5 container-mx regular-text-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-250px" }}
        >
          <h1 className="section-header">
            Kit de productos
          </h1>

          <div className="md:flex items-end justify-between">
            <p className="m-sm max-w-[550px] lg:max-w-full">
              Nuestra línea Laénzia Hair Vitality no solo busca mejorar la estética y salud del <br className="hidden lg:block" /> cabello, sino que también representa la democratización del lujo capilar, haciendo <br className="hidden lg:block" /> que el cuidado de alta calidad sea accesible para todos.
            </p>

            <div className="m-sm mr-0 ml-auto md:m-[0] w-fit vertodoscontainer">
              <VerTodos />
            </div>
          </div>
        </motion.div>


        <div className="m-md lg:m-lg">
          <GridProductos productos={[1, 2, 3, 4]} />
        </div>

      </section>

      {/* Productos naturales */}
      <motion.section
        className="m-lg lg:m-xl lg:flex regular-text-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <Image src="/images/productos-naturales.png" className="w-full md:max-h-[450px] lg:max-h-[550px] min-[1600px]:max-h-[650px] object-cover lg:w-1/2" width={800} height={800} alt="Productos naturales" />

        <div className="bg-primary px-5 h-[350px] md:h-[450px] lg:h-[550px] min-[1600px]:h-[650px] flex flex-col justify-center w-full lg:w-1/2">
          <div className="mx-auto lg:max-w-[450px] lg:mx-auto">
            <h1 className="section-header">
              Productos naturales
            </h1>

            <p className="m-md">
              Nuestra línea Laénzia Hair Vitality no solo busca mejorar la estética y salud del cabello, sino que también representa la democratización del lujo capilar, haciendo que el cuidado de alta calidad sea accesible para todos.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Swiper Kits */}
      <motion.section
        className="m-lg lg:m-xl px-5 container-mx regular-text-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <SwiperKits />
      </motion.section>

      {/* Resultados que hablan por si mismos */}
      <motion.section
        className="m-lg lg:m-xl px-5 container-mx regular-text-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <h1 className="section-header text-center">
          Resultados que hablan por si mismos
        </h1>

        <div className="m-md lg:m-lg">
          <SwiperReviews />
        </div>

      </motion.section>

      {/* Artículos interesantes */}
      <motion.section
        className="m-lg lg:m-xl px-5 container-mx regular-text-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <h1 className="section-header text-center">
          Artículos interesantes
        </h1>

        <div className="lg:hidden m-md lg:m-lg">
          <SwiperKits />
        </div>

        <div className="hidden lg:flex gap-10 m-md lg:m-lg">
          <div className="w-[55%]">
            <KitCard />
          </div>

          <div className="w-[45%] grid grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((project, index) => (
              <KitCard key={index} />
            ))}
          </div>
        </div>

      </motion.section>

      <section className="m-lg lg:m-xl regular-text-container">
        <NewsLetter />
      </section>

    </main>
  );
}
