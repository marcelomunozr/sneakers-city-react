import React from 'react'
import '../styles/commonStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
		<div class="bottom section-padding">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="copyright">
							<p>© <span>2021</span> <a href="#/" class="transition">SNKRS CITY</a> todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Footer;
