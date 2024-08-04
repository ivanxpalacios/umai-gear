import styles from './hero-custom.module.css'
import { PlayfairDisplayFont } from '@/src/utils/fonts'

export default function HeroCustom({
  bg_image,
  texto,
  classBg,
  textCentered = false,
}) {

  return (
    <div
      className={`${styles.hero_home_div} ${classBg} relative`}
      style={{
        backgroundImage: `url(${bg_image})`,
      }}
    >
      
      <div className='container-mx'>

        <div className={`${textCentered ? 'translate-x-[-50%] left-1/2 text-center' : ''} absolute top-1/2 translate-y-[-52%] px-3 w-full`}>
          <p className={`${PlayfairDisplayFont.variable} ff-fairplay font-normal text-white text-[56px] lg:text-[84px] leading-[62px] lg:leading-[90px]`} style={{animationDelay: "0.3s"}}>
            {texto}
          </p>

        </div>

      </div>


    </div>
  )
}
