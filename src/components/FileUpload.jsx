import { FormControl } from "react-bootstrap";
import api from "../helpers/api";

const FileUpload = ({ onUpload }) => {
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await api.post("/upload", formData);
    if (response.data.fileUrl) {
      onUpload(response.data.fileUrl);
    }
  };
  return <FormControl type="file" onChange={handleChange} />;
};

export default FileUpload;
