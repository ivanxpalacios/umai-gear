export default function Ingredientes({
  ingredientes
}) {
  return (
    <div>
      <h1 className="text-[22px] font-normal">
        Ingredientes
      </h1>

      <ul className="m-sm flex flex-wrap gap-4">
        {ingredientes.map((ingrediente, index) => (
          <li
            key={index}
            className="text-[14px] bg-[#C8A97654] rounded-full py-1 px-4 inline-block flex-1 lg:flex-[0] whitespace-nowrap text-center"
          >
            {ingrediente}
          </li>
        ))}
      </ul>
    </div>
  )
}