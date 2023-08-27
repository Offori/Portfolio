import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cum minus error facere reprehenderit nisi nam cumque veritatis officia fugit aut iure ipsam ullam ipsum temporibus, quas dolorem quidem quae.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident, accusamus quas, libero facere sit iusto exercitationem eligendi id unde, sed expedita maiores harum at fugit nihil perspiciatis assumenda quam quos. Dolorum accusamus unde corporis doloremque, dolore eligendi odit dolorem? Nihil quod, dolorem rerum rem repellendus quibusdam cumque fugiat beatae.
        </p>
      </div>
    </div>
  )
}

export default About