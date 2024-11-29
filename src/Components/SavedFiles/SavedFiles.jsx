import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebase"; // Import your Firebase configuration
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../ContextFile/Context";
import { useNavigate } from "react-router-dom";

const SavedFiles = () => {
  const { handleOpenFile } = useContext(DataContext);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate();

  // Fetch saved files from Firestore
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "codeFiles"));
        const savedFiles = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFiles(savedFiles); // Save files to state
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("Failed to load saved files. Please try again.");
        setLoading(false); // Stop loading on error
      }
    };

    fetchFiles();
  }, []);

  // Handle opening a file
  const openFile = (file) => {
    handleOpenFile(file); // Update the editor context with file data
    navigate("/code"); // Navigate to the code editor
  };

  // Render the component
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h2>Saved Files</h2>
      {loading ? (
        <p>Loading saved files...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : files.length === 0 ? (
        <p>No saved files found.</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.id} style={{ margin: "10px 0" }}>
              <button
                onClick={() => openFile(file)}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                {`File saved on ${new Date(file.timestamp?.seconds * 1000).toLocaleString()}`}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedFiles;
