import React from 'react'
import Checkbox from '../../components/base/Input/checkbox'
import Counter from '../../components/module/Counter'
import NavbarLogin from '../../components/module/Navbar/navbarLogin'
import './myBag.css'
import image1 from './image/gez-xavier.png'
import image2 from './image/kemal-alkan.png'
const MyBag = () => {
  return (
    <div>
        <NavbarLogin/>
        <div className='container'>
          <h4>My Bag</h4>
          <div class="row row-cols-2">
              <div className="col box-1" >
                  <Checkbox/>
                    <span className="text-1">
                      Select all items <span className="text-2">(2 items selected)</span><span className="text-3">Delete</span>
                    </span>
              </div>
              <div className="col box-2">
                  <p className="text-1">Shopping summary</p>
                  <p className="text-2">Total price <span className="text-3">$ 40.0</span></p>
                  <button className="btn">BUY</button>
              </div>
            </div>
            <div className="col items">
            <div className="col box-3">
                <Checkbox/>
                <img src={image1} alt="formal-suite"/>
                <p className="text-1">Men's formal suit - Black</p>
                <p className="text-2">Zalora Cloth</p>
                <Counter/>
                <p className="text-3">$ 20.0</p>
            </div>
            <div className="col box-4">
                <Checkbox/>
                <img src={image2} alt="jacket"/>
                <p className="text-1">Men's Jacket jeans <span className="text-3">$ 20.0</span></p>
                <p className="text-2">Zalora Cloth</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MyBag