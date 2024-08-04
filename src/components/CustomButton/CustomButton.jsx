"use client";
export default function CustomButton({
  texto,
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      className={`${className} font-[500] bg-[#C8A976] hover:bg-primaryHover transition-colors w-fit px-8 py-2`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}
