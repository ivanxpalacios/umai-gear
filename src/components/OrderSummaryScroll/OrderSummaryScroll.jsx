import Image from "next/image"
import styles from './order-summary-scroll.module.css'

export default function OrderSummaryScroll() {
  return (
    <div className={`${styles.scrollbar} flex flex-col gap-8 max-h-[200px] overflow-y-auto pe-4`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(item => (
        <div key={item} className="flex items-center justify-between">
          <div className="flex gap-4">
            <Image src="/images/product_img.png" className="border border-[#D9D9D9] rounded-[13px] p-1 w-[55px] h-auto" width={100} height={100} alt="product" />

            <div className="text-[18px] lg:text-[20px] leading-[18px]">
              <p>ChocoLux Botox Hair</p>

              <div className='m-sm flex gap-8'>
                <p className='line-through'>$148.00</p>

                <p className='font-[500]'>$120.00</p>
              </div>
            </div>
          </div>

          <p className="text-[14px] bg-[#D9D9D9] font-[500] rounded-full w-6 h-6 flex items-center justify-center">2</p>

        </div>
      ))}

    </div>

  )
}