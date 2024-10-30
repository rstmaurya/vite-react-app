import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../Slicer/cart-slicer'

const Category = () => {


 const[data,setData] =useState([{id:0,title:'',price:'',image:''}])
 const[originalData,setOriginalData] =useState([])
 const[selCategory,setSelCategory]=useState('All')
 const[search,setSearch] =useState('')

 const[cart,setCart]=useState([])

// fetching cartItems and cartCount data from redux

 const dispatch=useDispatch()

//  getting state from the store

 const cartItems=useSelector((state)=>state.store.cartItems)
 const cartCount = useSelector((state) => state.store.cartCount);

 function handleAddClick(product){          //Adding item in cart
  dispatch(addToCart(product))
  alert(`${product.title}\nAdded to Cart`)

  console.log(cartItems)
}

function handleRemoveClick(item){           //deleting item from cart
 var flag= window.confirm('Are u sure to delete?')
  if(flag){
    dispatch(removeFromCart(item));
    // alert('Item removed..');
  }

 }

 function sumPrice() {                    //total cart value
 var total= cartItems.reduce((acc, item) => acc + item.price, 0);
 if(total>500){
  return `${total} (Free Delivery)`;

 } else if (total==0){
   return total;
 }
 else{
  return `${total +40} (+40Rs Delivery Charge below Rs.500)`;

 }
}

 useEffect(()=>{
   axios.get('category.json').then(res=>{
    setData(res.data)
    setOriginalData(res.data)
   })
 },[])



 // filter by onclick the category...

  function filterData(catType){

    setSelCategory(catType)  //Update the selected category
   if(catType=='All'){
    setData(originalData)

   }else{
    let result=originalData.filter(item=>item.category==catType)
    setData(result)
   }
   
  }
  // filter by Selected category 

   function filterBySelect(id){
    if(id=='All'){
     setData(originalData)
    }else{
     let selected=originalData.filter(item=>item.category==id)
     setData(selected)
    }
    
   }

   //Filter by Search Name....

   useEffect(()=>{
    if(search){
     let filterSearch=originalData.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
     setData(filterSearch);
     console.log(filterSearch)
    }else{

     setData(originalData)
    }

   },[search,originalData])

 
   

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className=' bg-warning bg-opacity-25 shadow-sm p-3 d-flex justify-content-around'>
      <h2 className='  rounded  text-danger'><span className='bi bi-cart4'></span> Shopping!!!!!!! </h2>
      <button data-bs-target='#cart' data-bs-toggle='modal'  className='btn btn-warning  text-light fw-bold'>[<span>{cartCount}</span>] Items in Cart</button>
      <div className='modal fade' id="cart">
              <div className='modal-dialog '>
                <div className='modal-content'>
                  <div className='modal-header '>
                    <h2 className='text-center'>Items In Cart</h2>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className='btn btn-close' ></button>
                  </div>
                  <div className="modal-body">
              <table className="table table-hover">
                <thead  >
                  <tr className='table-info w-100' >
                    <th>Title</th>
                    <th>Price</th>
                    <th colSpan='2'>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {
                     cartItems.map(item=><tr key={item.id}>
                         <td width='250'>{item.title}</td>
                         <td >&#8377;{item.price}</td>
                         <td>
                          <img src={item.image} width='100' height='100'/>
                         </td>
                         <td>
                          <button  onClick={()=>handleRemoveClick(item)}  className='btn btn-outline-danger'><span className='bi bi-trash-fill'></span></button>
                         </td>
                     </tr>)
                  }
                  
                </tbody>
                <tfoot>
                       <tr>
                          <td colSpan='4'><span className='fw-bold p-2'>Total:&#8377;{sumPrice().toLocaleString()} </span></td>
                        </tr>
                       </tfoot>
              </table>

            </div>
               
                </div>
              </div>
             </div>
      </div>

       <div className="col-md-2 d-none d-md-block">
        <h5 className=' text-success '>Filter by Category Click</h5>
           <button className={`  w-100 mb-3 ${selCategory=='All'?'btn btn-success':'btn btn-warning  '}`} onClick={()=>filterData('All')}>All</button>
           <button className={`  w-100 mb-3  ${selCategory=='Men'?'btn btn-success':'btn btn-warning '}`} onClick={()=>filterData('Men')}>Men</button>
           <button className={`  w-100 mb-3  ${selCategory=='Women'?'btn btn-success':'btn btn-warning '}`} onClick={()=>filterData('Women')}>Women</button>
           <button className={`  w-100 mb-3  ${selCategory=='Kids'?'btn btn-success':'btn btn-warning '}`} onClick={()=>filterData('Kids')}>Kids..</button>
           <button className={`  w-100 mb-3  ${selCategory=='Electronics'?'btn btn-success':'btn btn-warning  '}`} onClick={()=>filterData('Electronics')}>Electronics</button>
           <div>
           
           </div>
       </div>
       <div className="col-md-2">
        <h5 className='text-primary'>Filter by  select category</h5>
       <select className='form-select' onChange={(e)=>filterBySelect(e.target.value)}>
            <option value='' disabled>Select </option>
            <option value='All'>All </option>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
            <option value='Electronics'>Electronics</option>
            </select>
            <br/>
            <h5 className='text-danger'>Filter by Search item</h5>
            <input type="text" value={search} className='form-control' placeholder='search items..' onChange={(e)=>setSearch(e.target.value)} />
          <p className='text-decoration-underline mt-2 p-2  text-info'>{search}</p>
       </div>
       <div className="col-md-8">
            <div className=" overflow-auto d-flex p-2 flex-wrap" style={{height:'550px' }}>
            {
             data.map(item=>
             
             
             
              <div key={item.id} className="mb-3">
                <div className="card m-2   " style={{width:'300px'}}>
               <div className="card-header bg-dark bg-opacity-25">
                  <h3 className='text-center text-info'>{item.title}</h3>
               </div>
               <div className="card-body bg-primary bg-opacity-10">
                <img className='card-img-top  p-2' height='220px' src={item.image} alt="" />
                <div style={{width:'70px',height:'50px',borderRadius:'45%'}} className='position-absolute  fs-6 top-3 end-0  badge bg-danger '>{((item.oldPrice-item.price)*100/item.oldPrice).toFixed(0)}%<br/>OFF</div>
                <p className='mt-4 fw-bold'>Price:&#8377;{item.price.toLocaleString()} <span className='text-secondary text-decoration-line-through  ms-2'>&#8377;{item.oldPrice}</span></p>
                <div>Description:  {item.description ? item.description.slice(0,40) : <code>No description available.</code>}</div>
                <div className='bg-info w-50 p-2 rounded fw-bold text-end' ><Link to ={`/details/${item.id}`} >See more...</Link></div>
               </div>
               <div className='card-footer ' >
            <button onClick={()=>{handleAddClick(item)}} className='bi bi-cart4 btn btn-danger w-100'>Add to Cart</button>
           </div>
              </div>
             </div>
             
             )
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
