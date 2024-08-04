"use client";
import HeroCustom from "@/src/components/HeroCustom/hero-home/HeroCustom";
import KitCard from '@/src/components/KitCard/KitCard';

export default function Blog() {

  return (
    <main>
      <HeroCustom
        bg_image={'/images/banner-blog.png'}
        texto={(<span>Noticias <br /> y artículos</span>)}
      />

      <section
        className="m-lg px-5 container-mx"
      >

        <div className='m-lg flex w-full flex-wrap justify-center gap-y-[50px] gap-x-[30px]'>
          {[1, 2, 3, 4, 5, 6]?.map((kit, index) => (
            <div
              key={index}
              className='max-w-[300px] lg:max-w-[350px] w-full'
            >
              <KitCard
                hasDiscount={index === 1}
              />
            </div>
          ))}
        </div>

        <div className='mt-[300px]'></div>

      </section>


    </main>
  )
}