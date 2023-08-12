import React from 'react'
import ilkomunityimg from '../../Assets/Ilkomunity.png'
import connectimg from '../../Assets/Connect.png'
import boekberimg from '../../Assets/Boekber.png'
import bibitqimg from '../../Assets/BibitQ.png'
import Carousel from '../../Components/Carousel'
import Github_hero from '../../Assets/Icons/github--hero.svg'

const Portfolio = () => {

    const projectData = [
        {
            image: ilkomunityimg,
            title: "Ilkomunity",
            url: 'https://github.com/Ilkomunity/ilkomunity-web',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            image: connectimg,
            title: "Connect",
            url: '',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }, {
            image: boekberimg,
            title: "Boekber",
            url: 'https://github.com/GirasArya/BoekBer',
            desc: "BoekBer is an online haircut service ordering platform for customers who want to get their hair done without having to leave the house. With BoekBer, customers can choose an available Store or barber, choose the time and place to get the service. Customers can also read reviews and ratings from users who already tried our services. BoekBer also makes it easy for you to manage their customers' schedules and orders. You can edit and delete your order however you wish."
        }, {
            image: bibitqimg,
            title: "BibitQ",
            url: 'https://github.com/GirasArya/BibitQ',
            desc: "BibitQ is a web-based platform that offers a wide variety of plant seeds for sale. Our platform allows users to easily browse and purchase seeds from a variety of different plant species, including flowers, fruits, vegetables, and herbs. Our seeds are sourced from reputable suppliers and are of the highest quality, ensuring that you have the best chance of success with your gardening endeavors. With BibitQ, you can create a beautiful, thriving garden with ease."
        },

    ]

    return (
        <section id='Portfolio' className='mb-48'>
            <header className=' flex flex-col items-center mb-20'>
                <h1 className='font-Header mb-2'>Portfolio</h1>
                <h2 className='tracking-[0.15rem]'>Featured Projects</h2>
            </header >
            <div className=''>
                <Carousel>
                    {
                        projectData.map((porto) => (
                            <div>
                                <figure className='flex justify-center items-center'>
                                    <img src={porto.image}
                                        className='max-w-[35rem] pr-12' />
                                    <figcaption className='w-[35rem]'>
                                        <h3 className='text-4xl pb-4 font-Header'>{porto.title}</h3>
                                        <p className='max-w-[30rem] pb-4'>{porto.desc}</p>
                                        <a href={porto.url} target='_blank' className='flex'>
                                            <img src={Github_hero} />
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </Carousel>
            </div>

        </section>
    )
}

export default Portfolio