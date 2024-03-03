import React, {userContext} from "react";
import userContext from "../context/usercontext";

function productDetail() {
    const data =userContext(UserContext);
 console.log(data);
 
 return(

    <>
    <div>productsDetail</div>
    <p1>name{data.name}</p1>
    
    </>
 )
};
export default ProductsDetail;