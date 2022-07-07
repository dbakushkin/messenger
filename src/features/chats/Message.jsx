import { Card } from "react-bootstrap";
import styled from "styled-components";

const Messages = ({ message }) => {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>
        <div>{message.text}</div>
        {message.imageURL && <Image src={message.imageURL} alt="" />}
      </Card.Body>
    </Card>
  );
};

export default Messages;

const Image = styled.img`
  max-width: 300px;
  margin-top: 10px;
`;
