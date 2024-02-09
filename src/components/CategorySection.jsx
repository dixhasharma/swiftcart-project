import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CategorySection() {

    const[categoryheading,setcategoryheading]=useState([])


    useEffect(()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then((res)=>setcategoryheading(res.data))
    },[])


    return (
        <>
            Category section

            {/* ek container */}

            <div className="container">

                {/* container has 2 DIVS HEADINGS AND CARD */}
                <div className="text-center my-5">
                    <h1>OUR upcoming  CATEGORIES</h1>
                    {/* <p> thsi is our website for getting in toich with anyon so hope u like it this coulf dypou hrlp in oyur very decade this is yhe bst imn myLorem ipsum dolor, sit amet consectetur adipisicing elit. Est reprehenderit perferendis voluptatibus autem repudiandae incidunt consectetur vitae inventore alias ullam eaque praesentium aspernatur, adipisci, odit velit quis animi iste aliquid.</p> */}
                </div>
                <div className="row">

                 {categoryheading.map((data,index)=>
                    <div className="col-md-3 my-2 text-center" key={index}>
                        <Link className='text-decoration-none' to={`/products/category/${data}`}>
                        <Card >
                            <Card.Body>
                                <Card.Title>{data.toUpperCase().replace("-"," ")}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                        )}

                </div>
            </div>



        </>
    )
}
