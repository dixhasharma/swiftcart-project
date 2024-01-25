import React from 'react'

export default function BannerSection() {
  return (
    <>
    
    <section className="section-banner">
  <div
    id="carouselExampleInterval"
    className="carousel slide container"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={10000}>
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/014/987/949/large/sangeeta-bisht-banner-3.jpg?1546606296"
          className="d-block w-100 size-banner-img "
          alt="..."
        />
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img
          src="https://cdn5.f-cdn.com/contestentries/1291972/22894184/5ac47fefdbb2e_thumb900.jpg"
          className="d-block w-100 size-banner-img "
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.papayaclothing.com/images/category_banner/jewelry_banner_10142020.jpg"
          className="d-block w-100 size-banner-img "
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://marketplace.canva.com/EAFBxyq6Sqg/2/0/1600w/canva-beige-minimal-elegant-jewelry-collection-etsy-shop-cover-Jp7VXMwvyVE.jpg"
          className="d-block w-100 size-banner-img "
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

    </>
  )
}
