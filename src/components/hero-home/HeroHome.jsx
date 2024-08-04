import CustomButton from '../CustomButton/CustomButton'
import styles from './hero-home.module.css'
import { PlayfairDisplayFont } from '@/src/utils/fonts'

export default function HeroHome() {
  return (
    <div className={`${styles.hero_home_div} relative`}>
      
      <div className='container-mx'>

        <div className='absolute top-1/2 translate-y-[-50%] px-5'>
          <h1 className={`${PlayfairDisplayFont.variable} ff-fairplay text-white text-[50px] lg:text-[72px] leading-[56px] lg:leading-[78px] fadeInUp`} style={{animationDelay: "0.3s"}}>
            Naturaleza <br /> para tu cabello
          </h1>

          <div className='mt-10 fadeInUp' style={{animationDelay: "0.6s"}}>
            <CustomButton
              texto={"Ver productos"}
            />
          </div>
        </div>

      </div>


    </div>
  )
}
