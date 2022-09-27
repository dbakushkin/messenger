import { useRef, useState } from "react";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import FormControl from "react-bootstrap/FormControl";
import api from "../helpers/api";

const FileUpload = ({ onUpload, value }) => {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();
  useEffect(() => {
    if (!value) {
      fileRef.current.value = null;
    }
  }, [value]);
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setLoading(true);
    const response = await api.post("/upload", formData);
    setLoading(false);
    if (response.data.fileURL) {
      onUpload(response.data.fileURL);
    }
  };
  return (
    <div>
      {value && <span className="me-2">✅</span>}
      {loading && (
        <Spinner
          className="me-2"
          variant="primary"
          animation="border"
          size="sm"
        />
      )}
      <FormControl type="file" onChange={handleChange} ref={fileRef} />;
    </div>
  );
};

export default FileUpload;
