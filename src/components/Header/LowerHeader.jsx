import React from 'react'
import { IoMdMenu } from "react-icons/io";


function LowerHeader() {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li>
                <IoMdMenu />
                <p>All</p>
            </li>
            <li>Todays's Deals</li>
            <li>Costomer Service</li>
            <li>Register</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader