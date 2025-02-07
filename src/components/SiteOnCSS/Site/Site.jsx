import Header from "../Header/Header"
import Footer from "../Footer/Footer.jsx"
import Cover from "../Cover/Cover.jsx"
import "./Site.css"

const Site = () => {
    return (
        <div className="Site">
            <Header/>        
            <Cover/>
            <Cover/>
            <Cover/>
            <Footer/>
        </div>
    )
}
export default Site