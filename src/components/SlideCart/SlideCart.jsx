"use client";
import { useState } from "react";
import { Box, SwipeableDrawer, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../Header/cart-icon/CartIcon";
import SlideProduct from "../SlideProduct/SlideProduct";
import CuponInput from "../CuponInput/CuponInput";
import { useRouter } from "next/navigation";

export default function SlideCart() {

  const router = useRouter();

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const List = () => (
    <div
      className="w-[350px] md:w-[400px] p-5 h-full relative flex flex-col"
      onClick={toggleDrawer(false)}
    >
      <section>
        {/* Tu carrito de compras */}
        <Link href="/" className="flex items-center gap-4 w-fit pb-5 stroke-black text-[22px] leading-[22px] font-[400]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="inherit" className="w-[22px] h-[22px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          Tu carrito de compras
        </Link>

        {/* Botón de cerrar slidecart */}
        <button className="absolute top-4 right-4 transition-colors hover:bg-[#efefef] rounded-full p-1" onClick={toggleDrawer(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </section>

      <section
        className="flex flex-col gap-8 m-md max-h-[500px] overflow-y-auto pe-2 mb-[30px]"
      >
        {[1, 2, 3, 4].map((item) => (
          <SlideProduct key={item} />
        ))}
      </section>

      <section className="mb-0 mt-auto">
        <div>
          <CuponInput />
        </div>

        <div className="m-md text-[18px]">
          <div className="flex items-center justify-between">
            <p className="font-normal">Descuentos aplicados</p>
            <p className="font-[500]">-$120.00</p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-[28px] font-normal">Subtotal</p>
            <p className="font-[500]">$2,210.00</p>
          </div>
        </div>

        <div className="m-md flex flex-col gap-4">
          <button
            className="text-[14px] font-normal border border-[#C8A976] w-full py-2 text-center hover:bg-[#C8A976] hover:text-white transition-colors"
            onClick={() => router.push("/checkout")}
          >PAGAR PEDIDO</button>

          <button
            className="text-[14px] font-normal border border-[#D9D9D9] bg-[#D9D9D9] w-full py-2 text-center hover:bg-[#bcbcbc] transition-colors"
            onClick={() => router.push("/carrito")}
          >VER CARRITO</button>
        </div>
      </section>


    </div>
  );

  return (
    <>
      <CartIcon onClick={toggleDrawer(true)} />

      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
        transitionDuration={350}
        sx={{
          "& .MuiBackdrop-root": {
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.2px)",
            WebkitBackdropFilter: "blur(7.2px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <List />
      </SwipeableDrawer>
    </>
  );
}
