import { Card } from "react-bootstrap";
const Messages = ({ message }) => {
  return (
    <Card>
      <Card.Header>
        {message.name} / {message.createdAt}
      </Card.Header>
      <Card.Body>{message.text}</Card.Body>
    </Card>
  );
};

export default Messages;
