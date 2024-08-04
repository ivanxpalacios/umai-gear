"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function NavCheckout({
  paso,
  setPaso
}) {

  const router = useRouter();

  return (
    <nav>
      <ul className="flex items-center gap-2 text-[18px]">
        <li>
          <button
            className="font-medium"
            onClick={() => router.push('/carrito')}
          >
            Carrito
          </button>
        </li>

        <li>
          <ChevronRightIcon className="w-5 h-5" />
        </li>

        <li className={`${paso === 1 ? 'text-primary hover:text-primaryHover' : ''}  transition-colors`}>
          <button
            className="font-medium"
            onClick={() => setPaso(1)}
          >
            Envío
          </button>
        </li>

        <li>
          <ChevronRightIcon className="w-5 h-5" />
        </li>

        <li className={`${paso === 2 ? 'text-primary hover:text-primaryHover' : ''}  transition-colors`}>
          <button
            className="font-medium"
            onClick={() => setPaso(2)}
          >
            Método de pago
          </button>
        </li>
      </ul>
    </nav>
  )
}