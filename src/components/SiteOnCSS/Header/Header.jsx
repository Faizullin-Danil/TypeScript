import "./Header.css"
import { MdAccountCircle } from "react-icons/md";


const Header = () => {
    return (
        <div className="Header">
            <h1>MySite</h1>
            <div className="buttons">
                <button>кнопка</button>
                <button>кнопка</button>
                <button>кнопка</button>
            </div>
            <MdAccountCircle className="icon"/>

        </div>
    )
}
export default Header