
export default function Presentaciones({
  presentacion,
  setPresentacion,
}) {

  return (
  <div>
    <p className='font-normal'>Presentaciones</p>

    <div className='flex items-center gap-4'>
      <button
        className={`${presentacion === '350 ml' ? 'border-[#C8A976]' : 'border-[#DADADA]'} mt-1 bg-[#f8f8f8] text-[14px] border w-full py-2 text-center transition-colors`}
        onClick={() => setPresentacion('350 ml')}
      >
        350 ml
      </button>

      <button
        onClick={() => setPresentacion('150 ml')}
        className={`${presentacion === '150 ml' ? 'border-[#C8A976]' : 'border-[#DADADA]'} mt-1 bg-[#f8f8f8] text-[14px] border w-full py-2 text-center transition-colors`}
      >
        150 ml
      </button>
    </div>
  </div>
  )
}
