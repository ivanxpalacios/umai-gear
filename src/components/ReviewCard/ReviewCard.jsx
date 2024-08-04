export default function ReviewCard() {
  return (
    <div className="bg-[#F5F5F5] h-[320px] px-14 rounded-[40px] flex flex-col justify-center">
      <p className="font-[500] text-[20px] lg:text-[24px]">Roberto Pérez</p>

      <p className="m-sm text-[20px] lg:text-[24px]">Me cambio la vida el shampoo con Aloe Vera.</p>

      <div className="flex items-center gap-2 m-sm">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <svg key={index} className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="#C8A976"/>
          </svg>
        ))}
      </div>

    </div>
  )
}