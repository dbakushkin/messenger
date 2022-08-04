import { Link } from "react-router-dom"

const Main = () => {
    return <div>
        <h1>Добро пожаловать</h1>
        <Link to = "/chats">В чат</Link>
    </div>
}

export default Main