import React from 'react'
import ilkomunityimg from '../../Assets/Ilkomunity.png'
import connectimg from '../../Assets/Connect.png'
import boekberimg from '../../Assets/Boekber.png'
import bibitqimg from '../../Assets/BibitQ.png'
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
        <section id='Portfolio' className='mb-48 w-[100%]'>
            <header className=' flex flex-col items-center mb-20'>
                <h1 className='font-Header mb-2'>Portfolio</h1>
                <h2 className='tracking-[0.15rem]'>Featured Projects</h2>
            </header >
            <div className='flex justify-center'>
                <div className='flex w-[23rem] lg:w-[50rem] xl:w-[75rem] overflow-x-auto gap-12 pb-4'>
                    {
                        projectData.map((porto) => (
                            <div className='px-3 py-3 border-solid border-2 transition-all hover:transition-all hover:drop-shadow-lg hover:border-Portofolio-container-bg rounded-Porto-border'>
                                <a href={porto.url} target='_blank'>
                                <figure className='w-max'>
                                    <img src={porto.image}
                                        className='w-[21rem] h-fit' />
                                    <figcaption>
                                        <a href={porto.url} target='_blank'>
                                            <h3 className='text-4xl pb-4 font-Header pl-2 py-4'>{porto.title}</h3>
                                            <p className='pl-2 pb-2'>View More</p>
                                        </a>
                                    </figcaption>
                                </figure>
                            </a>
                            </div>
                ))
                    }
            </div>
        </div>
        </section >
    )
}

export default Portfolio