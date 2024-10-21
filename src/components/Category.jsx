import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {


 const[data,setData] =useState([{id:0,title:'',price:'',image:''}])
 const[originalData,setOriginalData] =useState([])
 const[selCategory,setSelCategory]=useState('All')
 const[search,setSearch] =useState('')

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
      <h2 className='text-center bg-info p-3 text-danger'>  <span className='bi bi-cart4'></span> Shopping!!!!!!!</h2>

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
            <div className=" overflow-auto d-flex p-2 flex-wrap " style={{height:'550px' }}>
            {
             data.map(item=>
             
             
             
              <div key={item.id} className="mb-3">
                <div className="card m-2 " style={{width:'300px'}}>
               <div className="card-header bg-dark bg-opacity-25">
                  <h3 className='text-center text-info'>{item.title}</h3>
               </div>
               <div className="card-body bg-primary bg-opacity-10">
                <img className='card-img-top  p-2' height='250px' src={item.image} alt="" />
                <p className='mt-4'>Price:&#8377;{item.price.toLocaleString()}</p>
                <p>Description:  {item.description ? item.description.slice(0,40) : <code>No description available.</code>}</p>
                <p className='bg-info w-50 p-2 rounded fw-bold text-end' ><Link to ={`/details/${item.id}`} >See more...</Link></p>
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
