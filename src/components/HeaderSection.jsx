import React from 'react'
// import BannerSection from './BannerSection'

export default function HeaderSection() {
    const ryt = {
        color: 'red',
        width: '70%'
      };
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


            <div className="bg-dark">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg" alt=""  style={ryt} />
                    </div>
                    <div className="container">
                         <div className='bg-warning'></div> 
                        <h1 className="text-white">
                            "Discover a universe of Tech wonders "<br></br>
                         <span>-where electrons meet innovation.</span>
                        </h1>
                        {/* <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis explicabo, soluta dolore non commodi? Eaque sunt veniam blanditiis quasi, accusamus numquam voluptates maxime necessitatibus reprehenderit vero ullam quo amet.</p> */}
                    </div>

                </div>
            </div>





        </>
    )
}
