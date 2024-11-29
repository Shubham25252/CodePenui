import { useState } from "react";
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { DataContext } from "../ContextFile/Context";

const Header = () => {
  const { userdata } = useContext(DataContext);
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className={styles.header}>
      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FiSearch size={20} color="#888" />
        <input
          type="text"
          placeholder="Search CodePalette..."
          className={styles.searchInput}
        />
      </div>

        {/* Profile Button */}
        <button className={styles.profileButton} onClick={handleProfileClick}>
          <img
            src={userdata.photoURL || "src/assets/default-user.png"} // Default image if no URL is provided
            alt="User"
            className={styles.profileImage}
          />
        </button>

        {/* Profile Panel */}
        {showProfile && (
          <div className={styles.profilePanel}>
            <h3 className={styles.profileTitle}>User Profile</h3>
            <img
              src={userdata.photoURL || "src/assets/default-user.png"}
              alt="Profile"
              className={styles.profilePicture}
            />
            <p className={styles.profileItem}>
              <img
                src="src/Components/Header/user.png"
                alt="User Icon"
                className={styles.icon}
              />
              {userdata.name || "Unknown User"}
            </p>
            <p className={styles.profileItem}>
              <img
                src="src/Components/Header/gmail.png"
                alt="Email Icon"
                className={styles.icon}
              />
              {userdata.email || "No Email Available"}
            </p>
            <button className={styles.logoutButton}>
              <img
                src="src/Components/Header/arrow.png"
                alt="Logout Icon"
                className={styles.icon}
              />
              Logout
            </button>
          </div>
        )}
    </div>
  );
};

export default Header;
