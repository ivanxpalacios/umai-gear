import Image from "next/image"

export default function SlideProduct() {
  return (
    <div className="flex gap-2 items-start">
      <Image src="/images/product_img.png" className="w-[55px] h-auto" width={100} height={100} alt="product" />

      <div className="text-[18px] lg:text-[20px] leading-[18px]">
        <p>ChocoLux Botox Hair</p>

        <div className='m-sm flex gap-8'>
          <p className='line-through'>$148.00</p>

          <p className='font-[500]'>$120.00</p>
        </div>
      </div>

      <button className="mr-0 ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  )
}