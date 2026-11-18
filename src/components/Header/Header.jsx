import React from 'react'
import classes from './Header.module.css'
import { MdLocationPin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import LowerHeader from './LowerHeader';
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <>
    <section>
        <div className={classes.header__container}>
            <div className={classes.logo__container}>
                <a href="#">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon Logo" />
                </a>
                <div className={classes.delivery}>
                    <span>
                        <MdLocationPin />
                    </span>
                    <div>
                        <p>Delivered to</p>
                        <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
                <select name="" id = "">
                    <option value="">All</option>
                </select>
                <input type ="text" name="" id="" placeholder="Search products" />
                <FaSearch/>
                </div>
                <div className={classes.order__container}>
                    <a href="" className={classes.language}>
                    <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1920px-Flag_of_the_United_States.png?utm
                        _source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_
                        =20250404014957" alt="american flag" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                    </a>
                
                    <a href="">
                        <p>Sign in</p>
                        <span>Account & Lists</span>
                    </a>
                    <a href="">
                        <p>returns</p>
                        <span>& Orders</span>
                    </a>
                    {/* react routing  "to"*/}

                    <a href="" className={classes.cart}>
                    <FaShoppingCart size={35}/>
                    <span>0</span>
                    </a>
            </div>
        </div>
    </section>
    <LowerHeader/>
    </>
  )
}

export default Header