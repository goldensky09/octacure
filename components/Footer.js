export default () =>
<footer id="footer">
    <div className="inner">

        <h2>Contact Me</h2>

        <form action="#" method="post">

            <div className="field half first">
                <label htmlFor="name">Name</label>
                <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="field half">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
            </div>
            <ul className="actions">
                <li><input value="Send Message" className="button alt" type="submit" /></li>
            </ul>
        </form>

        <ul className="icons">
            <li><a href="#" className="icon round fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon round fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon round fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>

        <div className="copyright">
            &copy; Octuacure
        </div>

    </div>
</footer>