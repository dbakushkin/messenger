import { Card } from "react-bootstrap";
import styled from "styled-components";
import Map from "../../components/Map";

const Messages = ({ message }) => {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>
        <div>{message.text}</div>
        {message.imageURL && <Image src={message.imageURL} alt="" />}
        {message.location && (
          <div>
            <Map
              center={{
                lat: message.location.latitude,
                lng: message.location.longitude,
              }}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Messages;

const Image = styled.img`
  max-width: 300px;
  margin-top: 10px;
`;
