import React from 'react'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container
    '>
       <div className='flex-1'>
        <img src={offer} alt="offer"
        width={773}
        height={687}
        className='object-contain w-full'

        />
       </div>
       <div className='flex flex-1 flex-col'>
     
     <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      
       
       <span className="text-coral-red
         
       ">Special </span>
        Offer
        
     </h2>
     <p className="mt-4 lg:max-w-lg info-text">
     "Don't miss out on our Special Offer! For a limited time, enjoy unbeatable deals on our premium-quality shoes. Whether you're looking for style, comfort, or durability, we have the perfect pair waiting for you at an irresistible price.
       </p>
       <p className='mt-6 lg:max-w-lg info-text'>Treat your feet to the luxury they deserve without breaking the bank. Hurry, this exclusive offer won’t last forever – step up your footwear game today and save big! Shop now and make every step a stylish one.</p>
       <div className='mt-11 flex flex-wrap gap-4'>
       <Button  label = "Shop Now" iconURL={arrowRight} />
       <Button label="Learn more"
        backgroundColor = "bg-white"
        borderColor = "border-slate-gray"
        textColor = "text-slate-gray"
       />
       </div>
       </div>
    </section>
  )
}

export default SpecialOffers