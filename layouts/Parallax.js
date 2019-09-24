import Header from "./partials/Head";
import Footer from "../components/Footer";
import Head from 'next/head';

const Parallax = props => (
    <div>
        <Head>
            <script src="/static/assets/js/home-main.js"></script>
        </Head>
        <Header />
        {props.children}
        <Footer />
    </div>

);

export default Parallax;