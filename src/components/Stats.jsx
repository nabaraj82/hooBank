import React from 'react'
import { stats } from '../constants'
import styles from '../style'
const Stats = () =>  (
    <div className={`${styles.flexCenter} flex-row sm:mb-20 mb-6`}>
      {stats.map(stat => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}> 
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30] xs:leading-[53px] leading-[43px] text-white'>
          {stat.value}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px]
         text-[15] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase'
         >{stat.title}</p>
        </div>
      ))}
    </div>
  )


export default Stats