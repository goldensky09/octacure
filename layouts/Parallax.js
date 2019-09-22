import Head from "./partials/Head";
import Footer from "../components/Footer";

const Parallax = props => (
    <div>
        <Head />
        {props.children}
        <Footer />
    </div>

);

export default Parallax;