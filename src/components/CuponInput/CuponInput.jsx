export default function CuponInput() {
  return (
    <div>
      <input
        type="checkbox"
        id='cupon'
        className="checkbox"
      />

      <label
        htmlFor="cupon"
        className='text-[18px] ml-2'
      >
        Tengo un cupón de descuento
      </label>

      <div className='mt-2 flex flex-wrap gap-3 bg-[#F5F5F5] w-full p-2'>
        <div className='flex items-center gap-1 bg-[#C8A976] rounded-full w-fit px-2 py-1'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <p className='text-[12px] font-normal'>AHORRO10</p>
        </div>
      </div>

    </div>
  )
}
