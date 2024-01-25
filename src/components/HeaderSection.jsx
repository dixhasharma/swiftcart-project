import React from 'react'
// import BannerSection from './BannerSection'

export default function HeaderSection() {
    return (
        <>

        {/* MARQUE SECTION */}
            <section className="marq-section">
                <marquee className="" behavior="" direction="right" width="100%" id="home">
                    Free Delivery for order above Rs. 2000
                </marquee>
            </section>

            {/* BANNER SECTION */}

            {/* <BannerSection/>    isko comment kiya ku k work achy se nh kr raha */}

            {/* SIR ka HEADER SECTION */}
            <div className="bg-success">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <img className='img-fluid' src="https://cdn.dribbble.com/users/3754218/screenshots/16204871/media/db5945b3b9afa92d3c6dd6828eb89973.png?resize=400x0" alt=""/>
                    </div>
                    <div className="container">
                        <h1 className="text-white">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis explicabo, soluta dolore non commodi? Eaque sunt veniam blanditiis quasi, accusamus numquam voluptates maxime necessitatibus reprehenderit vero ullam quo amet.</p>
                    </div>

                </div>
            </div>





        </>
    )
}
