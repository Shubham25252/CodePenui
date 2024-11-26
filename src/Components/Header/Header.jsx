import { useState } from "react";
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
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

      {/* Profile Bar */}
      <button className={styles.profileButton} onClick={handleProfileClick}>
        <img
          src="src/assets/user.png"
          alt="User"
          className={styles.profileImage}
        />
        <span>Profile</span>
      </button>

      {/* Profile Panel */}
      {showProfile && (
        <div className={styles.profilePanel}>
          <h3 className={styles.profileTitle}>User Profile</h3>
          <img
            src="src/assets/user.png"
            alt="Profile"
            className={styles.profilePicture}
          />
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <button>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
