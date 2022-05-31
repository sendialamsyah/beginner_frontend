import React from 'react'
import NavbarLogin from '../../components/module/Navbar/navbarLogin'
import styles from './profileCustomer.module.css'
import profile1 from './image/christian-buehner-DItYlc26zVI-unsplash 1.png'

const ProfileCustomer = () => {
  return (
    <div>
        <NavbarLogin/>
        <aside>
        <div className={styles.profile}>
          <img
            src={profile1}
            alt=""
            className={styles.imgProfile}
          />
          <h4>Johanes Mikael</h4>
          <img src="./assets/image/Vector.png" alt="" className={styles.vector} />
          <p>Ubah Profile</p>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
              <img src="./assets/image/Ellipse 281 (1).png" alt=""/>
              <h3>My Account</h3>
          </div>
          <div className={`col ${styles.box2}`}>
              <img src="./assets/image/Ellipse 282.png" alt=""/>
              <h3>Shipping Address</h3>
          </div>
          <div className={`col ${styles.box3}`}>
              <img src="./assets/image/Ellipse 286.png" alt=""/>
              <h3>My Order</h3>
          </div>
      </div>
      </aside>
      <main>
        <h1>My Profile</h1>
        <h5>Manage your profile information</h5>
        <hr />
        <div className='row row-cols-2'>
          <div className={`col ${styles.box1}`}>
            <h4 className={styles.name}>Name</h4>
            <h4 className={styles.email}>Email</h4>
            <h4 className={styles.phoneNumber}>Phone Number</h4>
            <h4 className={styles.gender}>Gender</h4>
            <h4 className={styles.birth}>Date of Birth</h4>
          </div>
          <div className={`col ${styles.box2}`}>
            <input type="text" className={styles.inputName} />
            <input type="email" name="email" className={styles.inputEmail} />
            <input
              type="number"
              name="phone-number"
              className={styles.inputPhoneNumber}
            />
            <input type="radio" name="men" className={styles.radioMen} />
            <label for="men" className={styles.labelRadioMen}>Laki - laki</label>
            <input type="radio" name="women" className={styles.radioWomen} />
            <label for="women" className={styles.labelRadioWomen}>Perempuan</label>
            <select name="day" className={styles.day}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select name="month" className={styles.month}>
              <option value="januari">Januari</option>
              <option value="februari">Februari</option>
              <option value="maret">Maret</option>
              <option value="april">April</option>
              <option value="mei">Mei</option>
              <option value="juni">Juni</option>
              <option value="juli">Juli</option>
              <option value="agustus">Agustus</option>
              <option value="september">September</option>
              <option value="oktober">Oktober</option>
              <option value="november">November</option>
              <option value="desember">Desember</option>
            </select>
            <select name="year" className={styles.year}>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
            </select>
            <button className={styles.btnSave}>Save</button>
          </div>
          <div className={`col ${styles.box3}`}>
            <img
              src={profile1}
              alt="profile"
              className={styles.imgMyProfile}
            />
            <button className={styles.btnSelectImage}>Select Image</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfileCustomer