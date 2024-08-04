import { motion } from "framer-motion"

export default function KitCard({
  inSwiper = false,
  index
}) {
  return (
    <motion.div
      className={`${inSwiper ? 'max-w-[87%]' : ''} w-full mx-auto`}
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
      <div className="bg-[#D9D9D9] w-full h-auto aspect-square" />

      <h1 className="m-sm text-[24px] font-[500]">Kit Color Revitalizado</h1>

      <p className="text-[22px]">Shampoo Vitamin Infusion + <br />VitalColor Mask</p>
    </motion.div>
  )
}
