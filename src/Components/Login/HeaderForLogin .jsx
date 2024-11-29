import styles from "./HeaderForLogin.module.css";
import { FiSearch } from "react-icons/fi";

const HeaderForLogin  = () => {

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
    </div>
  );
};

export default HeaderForLogin ;
