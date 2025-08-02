
import React from 'react';

const ProductSection = () => {

    const products = [
        {
            title: "MindERP",
            description: "MindERP is a fully modular enterprise management suite that simplifies and automates key business processes.",
            image: "/images/projects/ERP.png"
        },
        {
            title: "MindEDU",
            description: "MindEdu offers an end-to-end solution for educational institutions, enhancing efficiency and transparency.",
            image: "/images/projects/EDU.png"
        },
        {
            title: "MindHEALTH",
            description: "MindHealth streamlines healthcare administration for better patient outcomes and operational efficiency.",
            image: "/images/projects/HEALTH.png"
        },
        {
            title: "MindPAY OneCard",
            description: "indPay OneCard is a smart, app-based platform for seamless payments and controlled access.",
            image: "/images/projects/PAY.png"
        },
        {
            title: "MindGATE",
            description: "MindGate revolutionizes digital events through interactive, immersive experiences.",
            image: "/images/projects/GATE.png"
        },
        {
            title: "MindCLOUD",
            description: "MindCloud offers high-performance cloud hosting and continuous DevOps support for mission-critical applications.",
            image: "/images/projects/CLOUD.png"
        },
        {
            title: "MindCHAIN",
            description: "MindChain brings blockchain technology to streamline operations and enhance security.",
            image: "/images/projects/CHAIN.png"
        },
        {
            title: "MindACADEMY",
            description: "MindAcademy provides tailored training programs and workshops to upskill businesses and individuals.",
            image: "/images/projects/ACADEMY.png"
        }
    ];
    

    return (
        <section className="py-12 py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden sm:py-16 lg:py-20">
            <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
          Our Products
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Explore our growing suite of intelligent digital products designed to streamline operations, enhance decision-making, and drive business growth.
        </p>
      </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 sm:text-left">
                    {products.map((product, index) => (
                    <div className="relative  overflow-hidden group min-h-[500px]">
                            <div className="absolute inset-0 h-fit ">
                                <div className="absolute inset-0 flex items-center justify-center ">
                                    <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent rounded-full blur-3xl"></div>
                                </div>
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-3" src={product.image} alt="" />
                            </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute inset-0 flex items-end justify-center">
                            <div className="flex items-end justify-center">
                                <div className="px-4 py-8 sm:px-6 lg:px-10">
                                    <h3 className="text-2xl font-bold text-white lg:text-3xl">{product.title}</h3>
                                    <p className="mt-4 text-base font-normal text-white">{product.description}</p>

                                    {/* <div className="mt-8">
                                        <a href="#" title="" className="inline-flex items-center text-base font-bold text-white" role="button">
                                            Explore Now
                                            <svg className="w-6 h-6 ml-2 transition-all duration-200 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                 </div>
                    ))}
                       

                    
                </div>
            </div>
        </section>
    );
}

export default ProductSection;