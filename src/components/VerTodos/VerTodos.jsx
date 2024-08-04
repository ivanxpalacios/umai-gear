"use client";
export default function VerTodos({
  onClick = () => { }
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 justify-end lg:text-[24px] animation-translateX px-2"
    >
      Ver todos

      <div className="bg-[#D9D9D9] w-fit p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[14px] lg:size-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>

    </button>
  )
}