import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

export default function ShoppingCart() {

useEffect(() => {
  sumArray()
}, [])

let [sum, setSum] = useState<number>(0)

let array: any = [
  {
    img: "https://images.unsplash.com/photo-1585849540400-24544b4cc98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpd2l8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Kiwi",
    price: 20,
    description: "This is a kiwi!"
  },  
  {
    img: "https://images.unsplash.com/photo-1596181525841-8e8bae173eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Lemon",
    price: 40,
    description: "This is the most sour lemon ever!"
  }
]

// console.log(array[0].price)

function sumArray() {
  let summary = 0
  for (let i = 0; i < array.length; i += 1) {
    summary += array[i].price;
    // console.log(summary)
  }
  
  return (setSum(summary))
}

// array = false

console.log(sum)
// console.log(sum)
  return (
    <>
      <div id="navBar">
        <Link to="/products">Product Page</Link>
        <h1>Shopping Cart</h1>
        <button>Log out</button>
      </div>

      <div id="content">
        {array ? (
        <>
          <h2>Total price: {sum}kr</h2>
          {array.map((item: any) => {
            return (
            <div key={item.name} className="productDiv"> 
              <img src={item.img} alt={item.name} className="productImg"/>
              <div className="productInfo">
                <h3>{item.name}</h3>
                <p>{item.price}kr</p>
              </div>
            </div>
            )
          })}
        </>
):(
          <div>Hej</div>
        )}
      </div>
    </>
  )
}
