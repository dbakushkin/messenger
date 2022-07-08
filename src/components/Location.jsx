const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const Location = ({ onLocation }) => {
  const onSuccess = (pos) => {
    console.log(pos);
    onLocation(pos.coords);
  };

  const onError = (err) => {
    console.log(err);
  };
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };
  return (
    <button type="button" onClick={handleClick}>
      Определить положение
    </button>
  );
};

export default Location;
