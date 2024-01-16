import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
    const { productId } = useParams();
    const [myData, setMyData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://product-node-app.vercel.app/productsList/${productId}`);
                setMyData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [productId]); 

    return (
        <>
            <div className="single-item">
                <div className="left-set">
                {
                    myData.images ? (
                        <div className='image'>
                        {myData.images.map((image, index) => (
                            <img key={index} src={image} alt="productImage" />
                        ))}
                        </div>
                    ) : (
                        <img src={myData.thumbnail} alt="not found" />
                    )
                }

                </div>
                <div className="right-set">
                    <div className="name">
                        <h1>{myData.title}</h1>
                        </div>
                    <div><h6>{myData.description}</h6></div>
                    <div><h4>Price : ${myData.price}</h4></div>
                    <div><b>Discount For You : {myData.discountPercentage}%</b></div>
                    <div><i>Rating : </i><b>{myData.rating}</b></div>
                    {myData.stock ? <div style={{ color: 'green' }}>Stock Available</div> : <div style={{ color: 'red' }}>Stock Unavailable</div>}
                    <div><h6>Brand : <i>{myData.brand}</i></h6></div>
                    <div className="subname"><h5>Category : {myData.category}</h5></div>
                    <div className="color">
                        
                    </div>
                  
                </div>
            </div>
        </>
    );
}

export default Detail;
