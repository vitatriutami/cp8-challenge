import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const style = {
    carouselImage: {
        objectFit: "contain",
        objectPosition: "center",
    }
}

function Detail(props) {
    let { id } = useParams()
    let [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct({...data}))
    }, [id])

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12 col-12">
                    <div id="carouselExample" className="carousel slide" bs-bg-theme="dark">
                        <div className="carousel-inner">
                            {product?.images?.map((imageUrl, index) => {
                                return (
                                    <div 
                                        key={index} 
                                        className={`carousel-item ${index === 0 ? "active": ""}`}>
                                        <img 
                                            src={imageUrl} 
                                            className="d-block w-100" 
                                            alt="..." 
                                            style={style.carouselImage}
                                            height={400}/>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h1 className="mt-4">{product?.title}</h1>
                    <small className="text-muted">$ {product?.price?.toLocaleString()}</small>
                    <p className="mt-4">{product?.description}</p>
                    <Link className="btn btn-info" to="/">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Detail