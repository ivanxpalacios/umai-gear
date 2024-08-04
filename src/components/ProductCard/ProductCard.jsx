"use client";
import { useState } from 'react';
import Image from 'next/image'
import ProductIMG from '@/public/images/product_img.png'
import EyeIcon from '@/public/images/eye-icon.png'
import HeartIcon from '@/public/images/heart-icon.png'
import styles from './product-card.module.css'
import CustomButton from '../CustomButton/CustomButton'
import ModalProducto from '../ModalProducto/ModalProducto';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ProductCard({
  hasDiscount = false,
  index
}) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const router = useRouter();

  return (
    <>
      <motion.div
        className={`${styles.card_container} w-full p-4 relative`}
        initial={{ translateY: 50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-250px" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index / 12,
        }}
      >

        {hasDiscount && (
          <div className={`${styles.discount}`}>
            <p className='font-[400]'>-30%</p>
          </div>
        
        )}

        <button className={`${styles.icon} top-4`}>
          <Image
            src={EyeIcon}
            alt="Eye Icon"
          />
        </button>

        <button className={`${styles.icon} top-14`}>
          <Image
            src={HeartIcon}
            alt="Heart Icon"
          />
        </button>

        <button onClick={() => router.push('/producto')}>
          <Image
            src={ProductIMG}
            alt="Product Image"
            className='cursor-pointer mx-auto'
          />
        </button>

        <div className={`${styles.boton_agregar} flex items-center justify-center mt-[-20px]`}>
          <CustomButton
            className='mx-auto px-[50px]'
            texto={"Agregar"}
            onClick={() => handleOpenModal()}
          />
        </div>

        <h1 className='m-sm text-[22px] text-center'>ChocoLux Botox Hair</h1>

        <div className='m-sm text-[22px] leading-[22px] flex justify-center gap-8'>
          <p className='line-through'>$148.00</p>

          <p className='font-[500]'>$120.00</p>
        </div>
      </motion.div>

      <ModalProducto isOpen={openModal} setIsOpen={setOpenModal} />
    </>
  )
}
