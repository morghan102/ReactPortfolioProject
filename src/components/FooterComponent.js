import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-6 text-center">
                        <a role="button" className="btn btn-link" href="tel:+1206111111"><i className="fa fa-phone" /> 1-206-111-1111</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> notreal@notreal.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;