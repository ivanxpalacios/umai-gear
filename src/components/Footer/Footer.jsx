"use client";
import Link from "next/link"
import Image from "next/image"
import styles from './footer.module.css'
import { usePathname } from "next/navigation";

export default function Footer() {

  const pathname = usePathname();

  if(!pathname.includes("checkout") && !pathname.includes("gracias")) {

    return (
      <footer className={`mt-[200px] px-5 container-mx pb-4 ${styles["footer-container"]}`}>
        <div className="text-[#8A8A8A] lg:flex items-start justify-between">
          <p className="text-[24px] lg:text-[26px] lg:leading-[32px] text-center lg:text-start">
            Inspiramos confianza a través del <br className="hidden lg:block" /> cuidado capilar, ofreciendo <br className="hidden lg:block" /> productos de calidad que fusionan <br className="hidden lg:block" /> ciencia y naturaleza para una belleza <br className="hidden lg:block" /> auténtica y sostenible.
          </p>

          <nav className="mt-[40px] lg:m-0 text-[20px] lg:text-[22px] font-[300] text-center lg:text-start">
            <ul className="flex flex-col gap-4 items-center lg:items-start">
              <li>
                <Link href={"#"}>Política de Privacidad</Link>
              </li>

              <li>
                <Link href={"#"}>Términos y Condiciones</Link>
              </li>

              <li>
                <Link href={"#"}>Política de Cookies</Link>
              </li>

              <li>
                <Link href={"#"}>Descargo de responsabilidad</Link>
              </li>

              <li>
                <Link href={"#"}>Libro de Reclamaciones</Link>
              </li>

              <li>
                <Link href={"#"}>Preguntas Frecuentes</Link>
              </li>
            </ul>
          </nav>

          <div className="mt-[40px] lg:m-0 text-[20px] lg:text-[22px] font-[300] text-center lg:text-start">
            <p className="text-[20px] lg:text-[22px] lg:leading-[34px]">Atención al consumidor</p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:mt-4">
              <Link className="m-sm lg:m-0" href={"tel:+52222544038"}>222 454 4038</Link>
              <p className="hidden lg:block"> | </p>
              <Link href={"tel:+5222232344322"}>222 3234 4322</Link>
              
            </div>
          </div>
        </div>

        <div className="mt-[40px] lg:flex justify-between">

          <Image className="mx-auto lg:order-1 object-contain w-[200px] lg:w-[300px]" src="/images/pagos-footer.png" width={300} height={300} alt="Pagos Footer" />

          <p className="m-sm text-center lg:text-start lg:w-full">
            © 2024 Laénzia Natura. Todos los derechos reservados.
          </p>
        </div>

      </footer>
    )
  }
}