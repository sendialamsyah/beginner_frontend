import React, { useState } from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./profileSeller.module.css";
import profile1 from "../../assets/image/defaultprofile.png";
import imgStore from "../../assets/icon/home (2) 1.png";
import imgProduct from "../../assets/icon/package 1.png";
import imgOrder from "../../assets/icon/shopping-cart (3) 1.png";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const ProfileSeller = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(`${process.env.REACT_APP_API_CYCLIC}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(profile);

  const [photo, setPhoto] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [gender, setGender] = useState('')
  const [description, setDescription] = useState("");

  const handleChangePhoto = (e) => {
    setPhoto({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo.file);
    formData.append("store_name", storeName);
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);
    formData.append("store_description", description);
    const token = localStorage.getItem("token");
    await axios
      .put(`${process.env.REACT_APP_API_CYCLIC}/users/edit-profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        swal("Good job!", "Update Success!", "success");
      })
      .catch((error) => {
        swal("Update Failed", "", "error");
        console.log(error);
      });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    swal("Good Job!", "User Logout", "success");
    Navigate("/loginSeller");
  };
  return (
    <div>
      <Navbar />
      <aside>
        <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={profile.photo ? profile.photo : profile1} alt="" />
          </div>
          <h4>{profile.fullname}</h4>
          <p onClick={handleLogout}>Logout</p>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
            <Link to="/profileSeller" className={styles.linkto}>
              <div className={styles.bgBox1}>
                <img src={imgStore} alt="" />
              </div>
              <h3>Store</h3>
            </Link>
          </div>
          <div className={`col ${styles.box2}`}>
            <Link to="/myProduct" className={styles.linkto}>
              <div className={styles.bgBox2}>
                <img src={imgProduct} alt="" />
              </div>
              <h3>My Product</h3>
            </Link>
          </div>
          <div className={`col ${styles.box3}`}>
            <Link to="/sellingProduct" className={styles.linkto}>
              <div className={styles.bgBox3}>
                <img src={imgOrder} alt="" />
              </div>
              <h3>Selling Product</h3>
            </Link>
          </div>
        </div>
      </aside>
      <main>
        <h1>My Profile</h1>
        <h5>Manage your profile information</h5>
        <hr />
        <form onSubmit={handleUpdateProfile}>
          <div className="row row-cols-2">
            <div className={`col ${styles.box1}`}>
              <h4 className={styles.name}>Store Name</h4>
              <h4 className={styles.email}>Email</h4>
              <h4 className={styles.phoneNumber}>Phone Number</h4>
              <h4 className={styles.description}>Store Description</h4>
            </div>
            <div className={`col ${styles.box2}`}>
              <input
                type="text"
                defaultValue={profile.store_name}
                onChange={(e) => setStoreName(e.target.value)}
                className={styles.inputName}
              />
              <input
                type="email"
                name="email"
                defaultValue={profile.email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputEmail}
              />
              <input
                type="number"
                name="phone-number"
                defaultValue={profile.phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={styles.inputPhoneNumber}
              />
              <textarea
                name="description"
                id="description"
                defaultValue={profile.store_description}
                className={styles.inputDescription}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button className={styles.btnSave}>Save</button>
            </div>
            <div className={`col ${styles.box3}`}>
              <div className={styles.imgMyProfile}>
                <img
                  src={photo.preview ? photo.preview : profile1}
                  alt="profile"
                />
              </div>
              <input
                type="file"
                name="photo"
                id="photo"
                accept="photo/png, photo/jpeg"
                onChange={handleChangePhoto}
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileSeller;
