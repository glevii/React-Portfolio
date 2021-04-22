import React from "react";
function Navbar() {
    return(
        	<header className="item header margin-top-0">
		<div className="wrapper">
			<nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle"
							type="button">
							<i className="fa fa-bars"></i>
							<span className="sr-only">Toggle navigation</span>
						</button>
						<a className="navbar-brand brand"> Georgina Levitki </a>
					</div>
					<div id="navbar-collapse-02" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li className="propClone"><a href="/">About</a></li>
							<li className="propClone"><a href="/projects">Projects</a></li>
							<li className="propClone"><a href="/contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="text-homeimage">
							<div className="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
								Georgina Levitki
							</div>
							<div className="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
								Aspiring Web Developer
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}

export default Navbar;