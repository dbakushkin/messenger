import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Nav } from "react-bootstrap";
import { Outlet, Link, useParams } from "react-router-dom";
import {
  addChat,
  deleteChat,
  getChats,
  selectChats,
} from "../features/chats/chatsSlice";

function Chats() {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const chats = useSelector(selectChats);
  console.log(chats);

  useEffect(() => {
    dispatch(getChats());
  }, []);

  const handleAddChat = () => {
    const title = prompt("Введите название чата");
    dispatch(addChat(title));
  };

  const handleDeleteChat = () => {
    dispatch(deleteChat());
  };

  return (
    <div>
      <h1>Чаты</h1>
      <div>
        <Button onClick={handleAddChat}>+ Добавить чат</Button>
      </div>
      <Nav variant="pills">
        {chats.map((chat) => (
          <Nav.Item key={chat._id}>
            <Nav.Link
              as={Link}
              to={`/chats/${chat._id}`}
              href={`/chats/${chat._id}`}
            >
              {chat.title}
              <Button
                onClick={handleDeleteChat}
                className="btn btn-danger btn-sm"
              >
                X
              </Button>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Chats;
