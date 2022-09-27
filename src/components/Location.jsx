import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const Location = ({ onChange, value }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSuccess = (pos) => {
    setLoading(false);
    console.log(pos);
    onChange(pos.coords);
  };

  const onError = (err) => {
    setLoading(false);
    setError(true);
    console.log(err);
  };
  const handleClick = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };
  return (
    <Button type="button" variant="outline-primary" onClick={handleClick}>
      Определить положение
      {loading && <Spinner className="ms-2" animation="border" size="sm" />}
      {value && <span>✅</span>}
      {error && <span>❌Ошибка определения координат</span>}
    </Button>
  );
};

export default Location;
