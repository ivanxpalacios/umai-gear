import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import styles from './cart-icon.module.css'

export default function CartIcon({
  onClick = () => { },
}) {

  const variantes = {
    salto: {
      scale: [1, 1.2, 1.5, 1.2, 1, 1.2, 1],
      transition: {
        delay: 1,
      },
    },
  };

  const [cartQuantity, setCartQuantity] = useState(1);

  const [animarGlobo, setAnimarGlobo] = useState(false);

  useEffect(() => {
    if (cartQuantity === 0) return;

    setAnimarGlobo(true);

    setTimeout(() => {
      setAnimarGlobo(false);
    }, 2000);

    return () => { };
  }, [cartQuantity]);

  return (
    <button
      onClick={onClick}
      className={`${styles.cart_movil} relative mr-3 stroke-white hover:stroke-whiteHover transition-colors`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="inherit" className="w-[26px] h-[26px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>

      <motion.span
        animate={animarGlobo ? "salto" : ""}
        variants={variantes}
      >
        {cartQuantity}
      </motion.span>
    </button>
  )
}
