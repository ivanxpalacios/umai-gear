import { useState } from "react";
import Image from "next/image";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function BotonAgregar({
  contador,
  setContador
}) {

  const [stock, setStock] = useState(10);

  const sumar = () => {
    if (stock > 0) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  }

  const [loading, setLoading] = useState(false);

  const handleAgregar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div
      className={`flex items-center justify-between mt-4 border-[#C8A976] text-[14px] border w-full p-4 text-center transition-colors`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={restar}
          className={`${
            contador > 1 ? "" : "cursor-default"
          }`}
        >
          <MinusIcon
            className="w-5"
            aria-hidden="true"
            color={contador > 1 ? "black" : "gray"}
          />
        </button>

        <input
          className="bg-transparent w-4 text-center text-[18px]"
          type="text"
          value={contador}
          onChange={(e) => {
            e.target.value;
          }}
        />

        <button
          onClick={sumar}
          className={`${
            stock > 0 ? "" : "cursor-default"
          }`}
        >
          <PlusIcon
            className="w-5"
            aria-hidden="true"
            color={stock > 0 ? "black" : "gray"}
          />
        </button>
      </div>

      <button
        onClick={() => handleAgregar()}
        className='font-normal flex items-center gap-4'
      >
        {!loading && (
          <Image src={'/images/spinner-icon.png'} alt="imagen spinner" width={20} height={20} />
        )}
        AGREGAR
      </button>
    </div>
  )
}