import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  let params = useParams();
  console.log(params.ids);

  const [product, setProduct] = useState({id:0,title:'',price:'',image:''});

  useEffect(() => {
    axios.get('/category.json')
      .then(res => {
        
        const productData = res.data.find(item => item.id === parseInt(params.ids));
        console.log(productData.title);
        setProduct(productData);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [params.ids]);

  // If the product is not yet loaded, show a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link className='btn btn-secondary' to='/category'><span className='bi  bi-arrow-left me-1'></span>back to category</Link>
      <h1>Details of Product - [ {product.title} ]</h1>
    <div className='d-flex justify-content-center'>
    <div className=' rounded  mt-4 p-3 ms-4 bg-success w-75  text-white bg-opacity-50'>
        <div className="row">
          <div className="col-md-3 text-center">
          <img className='rounded ' src={product.image} alt="" width='170px' />

          </div>
          <div className="col-md-8" style={{borderLeft:'2px solid black'}}>
          
         <span className='text-primary h4 fw-bold'>Description:</span> {product.description ? product.description.slice(0, 350) :<code className='ms-4'>'No description available.'</code> }
        
        
          </div>
        </div>
        
      
      </div>
    </div>

     
    </div>
  );
};

export default Details;
