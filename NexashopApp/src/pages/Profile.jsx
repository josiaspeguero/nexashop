import { FaUser, FaUpload, FaPlus, FaTruck } from "react-icons/fa";
import "../styles/profile.styles.css";
import BackHome from "../components/ui/BackHome";
import {ToastContainer, toast} from 'react-toastify'

function Profile() {
  return (
    <div>
      <BackHome />
      <ToastContainer/>
      <div className="profile-container">
        <div className="profile-title">
          <p>Account</p>
        </div>
        <div className="profile-content">
          <div className="profile-menu">
            <div
              className="menu-item selected"
              onClick={() => {
                window.location.href = "/perfil";
              }}
            >
              <div className="line-decoration selected"></div>
              <div className="icon-container">
                <FaUser className="icon" />
              </div>
              <div className="description">
                <p>Your Info</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>

            <div
              className="menu-item"
              onClick={() => {
                window.location.href = "/perfil/mis-direcciones";
              }}
            >
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaTruck className="icon" />
              </div>
              <div className="description">
                <p>Your Directions</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>

            {/* <div className="menu-item">
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaTruck className="icon" />
              </div>
              <div className="description">
                <p>Your Directions</p>
                <span>Change or edit your directions in some click</span>
              </div>
            </div> */}
            {/* <div className="menu-item">
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaLock className="icon" />
              </div>
              <div className="description">
                <p>Security</p>
                <span>Change or edit your security settings in some click</span>
              </div>
            </div> */}
            {/* <div className="menu-item">
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaSlidersH className="icon" />
              </div>
              <div className="description">
                <p>Preferences</p>
                <span>Change or edit your preferences in some click</span>
              </div>
            </div> */}
            {/* <div className="menu-item">
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaCog className="icon" />
              </div>
              <div className="description">
                <p>Settings</p>
                <span>Change or edit your settings in some click</span>
              </div>
            </div> */}
          </div>

          <div className="profile-info profile-section">
            <div className="profile-header">
              <h2>Personal Information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium esse Lorem, ipsum dolor.
              </p>
            </div>
            <hr />
            <div className="profile-personal-info">
              <div className="profile-picture">
                <div className="picture">JM</div>
                <div className="profile-desciption">
                  <div>
                    {" "}
                    <p>Your Avatar</p>
                    <span>PNG, JPG, WEBP</span>
                  </div>

                  <button className="upload-profile" onClick={()=>{
                    toast.error("Funcion no disponible actualmente")
                  }}>
                    <FaUpload className="icon" />
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="info-section">
              <div className="title-info">Basic Info</div>
              <div className="input-group">
                <input type="text" placeholder="josias peguero" />
                <input type="text" placeholder="+1 (809) 391 4895" />
              </div>
            </div>
            <hr />
            <div className="info-section">
              <div className="title-info">Your Emails</div>
              <input type="text" placeholder="josiaspegueroltjnc@gmail.com" />
              <div className="add-email">
                <FaPlus className="icon" />
                <p>Add Another Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
