import React from "react";

function Contact() {
    return (
        <section className="item content">
		<div className="container toparea">
			<div className="row">
				<div className="col-lg-8 col-lg-offset-2">
					<form id="contactform">
						<div className="form">
							<input type="text" placeholder="Your Name *"/>
							<input type="text" placeholder="Your E-mail Address *"/>
							<textarea rows="7" placeholder="Type your Message *"></textarea>
							<input type="submit" id="submit" className="clearfix btn" value="Send"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

    )
}

export default Contact;