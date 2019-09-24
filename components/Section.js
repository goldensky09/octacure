import React from "react";

export default class Section extends React.Component {
    render(){
        return (
            <section id={this.props.id} className="wrapper post bg-img" data-bg={this.props.img}>
                <div className="inner">
                    <article className="box">
                        <header>
                            <h2>Nibh non lobortis mus nibh</h2>
                            <p>01.01.2017</p>
                        </header>
                        <div className="content">
                            <p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
                        </div>
                        <footer>
                            <a href="/events" className="button alt">Learn More</a>
                        </footer>
                    </article>
                </div>
                {this.props.next && <a href={"#"+this.props.next} className="more">Learn More</a>}
            </section>
        );
    }
}
    