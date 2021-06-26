import React from 'react'
import '../styles/commonStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
		<div className="bottom section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="copyright">
							<p>© <span>2021</span> <a href="#/" className="transition">SNKRS CITY</a> todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Footer;
