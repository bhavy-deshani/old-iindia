class Footer {
	constructor() {
		this.element = document.createElement("footer");
		this.element.className = "";
		this.element.innerHTML = `
	  
  <footer>
		<div class="footer-area">

			<div class="footer-top">
				<div class="container">
					<div class="row justify-content-between">
						<div class=" col-lg-4 col-md-6">
							<div class="footer-widget">
								<div class="fw-logo mb-25">
									<a href="/"><img
											src="./assets/img/integrated_enterprises_india_pvt_ltd.png"
											alt="Integrated Enterprises (India) Pvt. Ltd" title="Integrated Enterprises (India) Pvt. Ltd"  /></a>
								</div>
								<div class="footer-content">	
									<p>Every financial solution you need, under one roof at Integrated.</p>
									<div class="footer-social">
										<ul class="list-wrap">
											<li>
												<a href="https://www.facebook.com/IntegratedEnterprises/" target="_blank" alt="Facebook" title="Facebook">
												<svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
														<path
															d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
													</svg></a>
											</li>
											<li>
												<a href="https://x.com/IntegratedTweet" target="_blank" alt="Twitter" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
														<path
															d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
													</svg></a>
											</li>
											<li>
												<a href="https://www.instagram.com/integratedenterprises/" target="_blank" alt="Instagram" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
														<path
															d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
													</svg></a>
											</li>
											<li>
												<a href="https://www.threads.com/@integratedenterprises" target="_blank"alt="Threads" title="Threads" ><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
														<path
															d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
													</svg></a>
											</li>
											<li>
												<a href="https://www.linkedin.com/company/integratedenterprises/" target="_blank" alt="Linkedin" title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
											</li>
											<li>
												<a href="https://www.youtube.com/@integratedenterprises2653" target="_blank" alt="Youtube" title="Youtube"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
														<path
															d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
													</svg></a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class=" col-lg-4 col-md-6 col-sm-6">
							<div class="footer-widget">
								<h4 class="fw-title">Registered Office</h4>
								<div class="footer-info-list">
									<ul class="list-wrap">
									<li>
											<div class="icon">
												<i class="flaticon-pin"></i>
											</div>
											<div class="content">
												<p>5A, 5th Floor, Kences Towers, 1,<br> Ramakrishna Street, 
													T. Nagar, Chennai - 600 017.
												</p>
											</div>
										</li>
										
										<li>
											<div class="icon">
												<i class="flaticon-envelope"></i>
											</div>
											<div class="content">
												<a
													href="mailto:customercare@integratedindia.in">customercare@integratedindia.in</a>
											</div>
										</li>
										<li>
											<div class="icon">
												<i class="flaticon-phone-call"></i>
											</div>
											<div class="content">
												<a href="tel:04428143045">044 - 28143045/</a><a
													href="tel:04428143046">46</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="footer-widget">
								<h4 class="fw-title">Timings</h4>
								<div class="footer-info-list">
									<ul class="list-wrap">
										
										<li class="p-0">
											Available Time : 
										</li>
										<li>
											Working Days : 8.30 A.M to 6.30 P.M <br>Saturday : 9.30 A.M to 1.30 P.M
										</li>
										<li>
							
										<div class="content">
												<a href="tel:180042523456">Toll Free Number : 1800 425 23456</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="text-center d-flex flex-wrap gap-1 justify-content-center ">
						<a class="mx-1 fw-semibold text-b " href="/career.html">Career</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/regulators.html">Regulators</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/disclaimer.html">Disclaimer</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/list-of-holidays.html">List of Holidays</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="#">Group Companies</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="https://smartodr.in/login" target="_blank">Smart Odr</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/sitemap.html">Sitemap</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Policy_for_Freezing.pdf">Freezing Policy</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Policy for Handling Good Till Date (GTD) Orders.pdf">GTD</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/RiskDisclosurederivatives.pdf">Risk Disclosure Derivatives</a> <span></span> <br>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Details-of-Client-Bank-Ac-Annexure.pdf">Details of Client Bank A/c</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Advisory-for-investors-Annexure-II.pdf">Advisory Investors</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/kyc.html">KYC</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/kyc-forms.html">KYC Form</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Attention-Investors-Annexure-III.pdf">Attention Investors</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/SCORES-ANNEXURE-V.pdf">Scores</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="https://bo.integrated.investments/support/spanmargin/spanmargin1.asp" target="_blank">Span Margin</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/privacy-policy.html">Privacy Policy</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/e-voting.html">E-Voting</a> <span></span> <br>
						<a class="mx-1 fw-semibold text-b " href="/investor-charter.html">Investor Charter</a> <span>|</span>
						<a class="mx-1 fw-semibold text-b " href="/assets/pdf/Policiesandprocedures.pdf">Policies & Procedures</a>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<div class="row align-items-center">
						<div class="d-flex flex-wrap gap-1 py-4 ">
							<div class="m-y">
								<div class=" fs--14">
									Attention Investors :
								</div>
							</div>
							<div class="scrolling-text col-10 m-y  ">
								<p class="text-decoration-none fs--14 m-0">SEBI / Exchange Advice : Prevent
									Unauthorized transactions in
									your account -> Update your Mobile numbers/Email IDs with us. Receive information of
									your transactions
									directly from Exchange on your Mobile/Email at the end of the day... Issued in the
									interest of investors |
									For Registering Complaints with SEBI, kindly <a target="_black"
										href="https://scores.sebi.gov.in/." class=""> Click
										Here</a>
								</p>
							</div>
							
						</div>
						<p> <span> NSE Member ID : 12718</span> <span>|</span> <span> BSE Member ID : 6168</span>
							<span>|</span> <span> MCX Member ID : 57225</span> <span>|</span> <span> SEBI REG NO :
								INZ000095737</span> <span>|</span> <span> CIN No : U65993TN1987PTC014964</span>
						</p>
						<div class="copyright-text">
							<p>Copyright © 2025 Integrated Enterprises (India) Private Ltd., All rights reserved.
								Reproduction of any articles, photos, videos
								or any other content in whole or in part in any form or medium without express written
								permission of integratedindia.in is prohibited.</p>
						</div>
						<div class="col-lg-5">
						</div>
					</div>
				</div>
			</div>
			<div class="footer-shape">
				<img loading="lazy" src="/assets/img/images/footer_shape01.png" alt="Integrated" data-aos="fade-right"
					data-aos-delay="400" />
				<img loading="lazy" src="/assets/img/images/footer_shape02.png" alt="Integrated" data-aos="fade-left"
					data-aos-delay="400" />
				<img loading="lazy" src="/assets/img/images/footer_shape03.png" alt="Integrated"
					data-parallax='{"x" : 100 , "y" : -100 }' />
			</div>
		</div>
	</footer>
            `;
	}

	render() {
		document.body.appendChild(this.element);
	}
}

const footer = new Footer();
footer.render();
