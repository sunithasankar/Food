import React from "react";
import Products from "./Products";

function Cart(props){
return(
<div className="border border-4 border-secondary p-2 ">
Cart 
{
 props.cart.map((p)=>{
    return<li>{p.title}</li>
  })

}
</div>
)
}

export default Cart;