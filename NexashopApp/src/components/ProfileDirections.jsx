import "../styles/profile.styles.css";
import { FaEdit, FaTruck, FaUser } from "react-icons/fa";
import CambiarInfoEnvio from "./CambiarInfoEnvio";
import BackHome from "./ui/BackHome";

function ProfileDirections() {
  return (
    <div>
      <CambiarInfoEnvio />
      <BackHome />
      <div className="profile-container">
        <div className="profile-title">
          <p>Account</p>
        </div>
        <div className="profile-content">
          <div className="profile-menu">
            <div
              className="menu-item"
              onClick={() => {
                window.location.href = "/perfil";
              }}
            >
              <div className="line-decoration"></div>
              <div className="icon-container">
                <FaUser className="icon" />
              </div>
              <div className="description">
                <p>Your Info</p>
                <span>Change or edit your personal info in some click</span>
              </div>
            </div>

            <div
              className="menu-item selected"
              onClick={() => {
                window.location.href = "/perfil/mis-direcciones";
              }}
            >
              <div className="line-decoration selected"></div>
              <div className="icon-container">
                <FaTruck className="icon" />
              </div>
              <div className="description">
                <p>Your Directions</p>
                <span>Check or edit your directions in some click</span>
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
              <h2>Your Directions</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium esse Lorem, ipsum dolor.
              </p>
            </div>
            <hr />
            {/* <div className="profile-personal-info"> */}
            {/* <div className="profile-picture">
                <div className="picture">JM</div>
                <div className="profile-desciption">
                  <div>
                    {" "}
                    <p>Your Avatar</p>
                    <span>PNG, JPG, WEBP</span>
                  </div>

                  <button className="upload-profile">
                    <FaUpload className="icon" />
                    Upload Image
                  </button>
                </div>
              </div> */}
            {/* </div> */}
            {/* <hr /> */}
            <div className="info-section">
              <div className="title-info">Direction & Postal Code</div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Calle Duarte #06, esq. sabala"
                />
                <input type="text" placeholder="98000" />
              </div>
            </div>
            {/* <hr /> */}
            <div className="info-section">
              {/* <div className="title-info">Your Emails</div>
              <input type="text" placeholder="josiaspegueroltjnc@gmail.com" /> */}
              <div
                className="add-email"
                style={{ marginTop: "-30px" }}
                onClick={() => {
                  document
                    .getElementById("modal-container")
                    .classList.add("show");
                }}
              >
                <FaEdit className="icon" />
                <p>Change Information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDirections;
