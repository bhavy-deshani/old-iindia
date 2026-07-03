class Header {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = " w-100 position-relative";
        this.element.style.zIndex = "1049"; // Ensure a high z-index
        // alert(1)
        // this.element.style.position = "fixed"; // Ensure it is fixed
        this.element.innerHTML = `

<header>
    <div id="sticky-header" class="tg-header__area">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="tgmenu__wrap">
                        <nav class="tgmenu__nav">
                            <div class="logo">
                                <a href="/"><img loading="lazy" src="assets/img/integrated_enterprises_india_pvt_ltd.png"
                                        alt="Integrated Enterprises (India) Pvt. Ltd"
                                        title="Integrated Enterprises (India) Pvt. Ltd" /></a>
                            </div>
                            <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex pe-xl-4">
                                <ul class="navigation">

                                    <li class="">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Products</a>
                                        <ul class="sub-menu sub-menu-w1">
                                            <div class="row row-cols-1 row-cols-lg-4 ">
                                                <div class="col py-1">
                                                    <a href="equity-stock-trading.html" class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/equity-icon.png" alt="Equities"
                                                                    title="Equities">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 p-0 fw-bold">Equities</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="online-commodity-trading.html" class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/Commodity-icon.png"
                                                                    alt="Commodity" title="Commodity">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Commodity</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="mutual-funds.html" class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/mutu-icon.png" alt="Mutual Fund"
                                                                    title="Mutual Fund">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Mutual Fund
                                                                </p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>

                                                <div class="col py-1">
                                                    <a href="fixed-deposit-income-option.html" class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/fixed-icon.png" alt="Fixed Income"
                                                                    title="Fixed Income">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Fixed Income
                                                                </p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="open-demat-trading-account.html" class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/demao-icon.png"
                                                                    alt="Demat Account" title="Demat Account">

                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Demat Account
                                                                </p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="health-life-insurance-providers.html"
                                                        class="m-0 p-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/insurance-icon.png"
                                                                    alt="Life & Health Insurance"
                                                                    title="Life & Health Insurance">

                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Life & Health
                                                                    Insurance</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="nps-national-pension-system.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/nps-icon.png" alt="NPS"
                                                                    title="NPS">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">NPS</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="pan-card-tan-tds-services.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/pan-tan-icon.png"
                                                                    alt="PAN/TAX Services" title="PAN/TAX Services">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">PAN/TAX
                                                                    Services</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>

                                                <div class="col py-1">
                                                    <a href="secretarial-services.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/secretarial-icon.png"
                                                                    alt="Secretarial Services"
                                                                    title="Secretarial Services">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Secretarial
                                                                    Services</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="registry-services.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/Registry-icon.png"
                                                                    alt="Registry Services" title="Registry Services">

                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Registry
                                                                    Services</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="invest-in-gold-etf.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gold-icon.png" alt="Gold"
                                                                    title="Gold">

                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">Gold</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
<div class="col py-1 bonds-highlight">
    <a href="best-bond-investment-platform-in-india.html" class="m-0 p-0 text-b">
        <li class="d-flex gap-2 hover-effect mb-3 product-card">
            <div class="m-y">
                <img loading="lazy" src="assets/img/bonds.png" alt="Bonds" 
                    title="Bonds" class="product-icon">
            </div>
            <div class="my-auto">
                <p class="m-0 fs--14 p-0 fw-bold">Bonds</p>
            </div>
            <div class="ani">
                <span class="badge bg-primary">New</span>
            </div>
        </li>
    </a>
</div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Knowledge Center </a>
                                        <ul class="sub-menu sub-menu-w2">
                                            <div class="row row-cols-1 ">
                                                <div class="col py-1">
                                                    <a href="financial-calculators.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/Calculators-con.png"
                                                                    alt="Calculators" title="Calculators">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Calculators</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="blogs.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/blogs-icon.png" alt="Blogs"
                                                                    title="Blogs">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Blogs</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="faqs-frequently-asked-questions.html"
                                                        class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/faqs-icon.png" alt="FAQs"
                                                                    title="FAQs">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">FAQs</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>

                                            </div>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Event </a>
                                        <ul class="sub-menu sub-menu-w2">
                                            <div class="row row-cols-1 ">
                                                <div class="col py-1">
                                                    <a href="gallery.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="Austin, texas"
                                                                    title="Austin, texas">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Austin, texas</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>

                                                <div class="col py-1">
                                                    <a href="gallery_1.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="San Francisco"
                                                                    title="San Francisco">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">San Francisco</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="gallery_2.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="Cleveland"
                                                                    title="Cleveland">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Cleveland</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="gallery_3.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="Dallas"
                                                                    title="Dallas">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Dallas</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="gallery_4.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="Raleigh"
                                                                    title="Raleigh">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Raleigh</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="gallery_5.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/gallery.svg" alt="New Jersey"
                                                                    title="New Jersey">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">New Jersey</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">contact</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Research</a>
                                        <ul class="sub-menu sub-menu-w2">
                                            <div class="row row-cols-1 ">
                                                <div class="col py-1">
                                                    <a href="research-daily-market-insights.html"
                                                        class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/daily-market.jpg"
                                                                    alt="Austin, texas" title="Austin, texas">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Daily Market Insights
                                                                </p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>

                                                <div class="col py-1">
                                                    <a href="market-insights-equity-futures-options.html"
                                                        class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/equity-f-o.jpg" alt="" title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Equity/F&O</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="trading-strategy.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/trading_strategy.jpg" alt=""
                                                                    title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Trading Strategy</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="stellar-picks.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/stellar_picks.jpg" alt=""
                                                                    title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Stellar Picks</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="research-technical-reports.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/technical_reports.jpg" alt=""
                                                                    title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Technical Reports</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="special-reports.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/special_reports.jpg" alt=""
                                                                    title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Special Reports</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="research-basket.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/basket.jpg" alt="" title="">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class=" m-0 fs--14 p-0 fw-bold">Basket</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col py-1">
                                                    <a href="initial-public-offering.html" class="m-0 p-0 text-b">

                                                        <li class="d-flex gap-2 hover-effect mb-3">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/ipo-icon.png" alt="IPO"
                                                                    title="IPO">
                                                            </div>
                                                            <div class="my-auto">
                                                                <p class="m-0 fs--14 fw-bold p-0">IPO</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li><a href="nri-investments.html">NRI</a></li>
                                    <li class="menu-item-has-children">
											<a href="#">STRI</a>
											<ul class="sub-menu sub-menu-w2">
												<div class="row row-cols-1 ">
													<div class="col">
														<a href="investment-options-for-women.html" class="p-0 m-0 text-b">
															<li class="d-flex gap-2 hover-effect mb-3 hover-effect">
																<div class="m-y">
																	<img loading="lazy" src="assets/img/stri.png" alt="STRI"
																		title="STRI">
																</div>
																<div class="lh-1 my-auto">
																	<p class="lh-1 m-0 fs--14 p-0 fw-bold">STRI</p>

																</div>
																<div class="ani"></div>
															</li>
														</a>
													</div>
													<div class="col">
														<a href="event.html" class="p-0 m-0 text-b">
															<li class="d-flex gap-2 hover-effect mb-3 hover-effect">
																<div class="m-y">
																	<img loading="lazy" src="assets/img/stri_event.png" alt="STRI Event"
																		title="STRI Event">
																</div>
																<div class="lh-1 my-auto">
																	<p class="lh-1 m-0 fs--14 p-0 fw-bold">STRI Event</p>
																</div>
																<div class="ani"></div>
															</li>
														</a>
													</div>
												</div>
											</ul>
										</li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Login/Register</a>
                                        <ul class="sub-menu sub-menu-w2">
                                            <div class="row row-cols-1 ">
                                                <div class="col">
                                                    <a href="https://play.google.com/store/apps/details?id=com.wave.iInvest&pli=1"
                                                        id="app-link2" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/Equity.png" alt="Equity"
                                                                    title="Equity">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Equity</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a href="mf-dp.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/mf-dp.png" alt="MF & DP"
                                                                    title="MF & DP">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">MF & DP</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a href="nps-login.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/nps-login.png" alt="NPS"
                                                                    title="NPS">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">NPS</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">

                                                    <a href="https://www.integratedindia.in/sp/businesspartner/FRLogin/login.aspx"
                                                        target="_blank" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/franchisee.png" alt="Franchisee"
                                                                    title="Franchisee">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Franchisee
                                                                </p>

                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a href="https://bo.integrated.investments:9443/ldclientlevelH/#Login"
                                                        target="_blank" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/ld-back-office.png"
                                                                    alt="LD Back Office" title="LD Back Office">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">LD Back
                                                                    Office</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Open Demat A/c</a>
                                        <ul class="sub-menu sub-menu-w2">
                                            <div class="row row-cols-1 ">
                                                <div class="col">

                                                    <a href="instant-free-trading-demat-account.html"
                                                        class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/residential_individual.png"
                                                                    alt="Equity" title="Equity">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Resident
                                                                    Individual</p>

                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a href="open-minor-demat-account.html" class="p-0 m-0 text-b">
                                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                            <div class="m-y">
                                                                <img loading="lazy" src="assets/img/minor_account.png"
                                                                    alt="Minor Account" title="Minor Account">
                                                            </div>
                                                            <div class="lh-1 my-auto">
                                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Minor Account</p>
                                                            </div>
                                                            <div class="ani"></div>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div class="col">
													<a href="https://www.integratedindia.in/sp/NRIOnboarding_V2/NRIAccountOpenHome.aspx" target="_blank" class="p-0 m-0 text-b">
														<li class="d-flex gap-2 hover-effect mb-3 hover-effect">
															<div class="m-y">
																<img loading="lazy" src="assets/img/nri-ac.png"
																	alt="NRI" title="NRI">
															</div>
															<div class="lh-1 my-auto">
																<p class="lh-1 m-0 fs--14 p-0 fw-bold">NRI
																</p>
															</div>
															<div class="ani"></div>
														</li>
													</a>
												</div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li class="m-auto">
                                        <div id="p9divmenu" class="lag d-md-none">
                                            <select class="text-b bg-transparent" id="P9LngDdl"
                                                onchange="RedirectUrl(this.value)">
                                                <option class="fs--14 text-b " value="English">EN</option>
                                                <option class="fs--14 text-b " value="hindi">HI</option>
                                                <option class="fs--14 text-b " value="tamil">TM</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tgmenu__action d-none d-md-block">
                                <ul class="list-wrap">
                                    <li class="m-auto">
                                        <div id="p9divmenu" class="">
                                            <select class="text-b bg-transparent" id="P9LngDdl"
                                                onchange="RedirectUrl(this.value)">
                                                <option class="fs--14 text-b " value="English">EN</option>
                                                <option class="fs--14 text-b " value="hindi">HI</option>
                                                <option class="fs--14 text-b " value="tamil">TM</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li class="offCanvas-menu">
                                        <a href="javascript:void(0)" class="menu-tigger">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z"
                                                    fill="currentcolor" />
                                                <path
                                                    d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
                                                    fill="currentcolor" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mobile-nav-toggler">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                    <path
                                        d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
                                        fill="currentcolor" />
                                </svg>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu  -->
                    <div class="tgmobile__menu">
                        <nav class="tgmobile__menu-box">
                            <div class="close-btn"><i class="fi fi-br-cross-small"></i></div>
                            <div class="nav-logo">
                                <a href="/"><img loading="lazy" src="assets/img/integrated_enterprises_india_pvt_ltd.png"
                                        alt="Integrated Enterprises (India) Pvt. Ltd"
                                        title="Integrated Enterprises (India) Pvt. Ltd" /></a>
                            </div>

                            <div class="tgmobile__menu-outer">
                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            </div>
                            <div class="tgmobile__menu-bottom">
                                <div class="contact-info">
                                    <ul class="list-wrap">
                                        <li><a
                                                href="mailto:customercare@integratedindia.in">customercare@integratedindia.in</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                    </div>
                    <div class="tgmobile__menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
    </div>
    <div class="search-popup-overlay"></div>
    <!-- header-search-end -->
    <!-- offCanvas-menu -->
    <div class="offCanvas__info">
        <div class="offCanvas__close-icon menu-close">
            <button><i class="fi fi-br-cross-small"></i></button>
        </div>
        <div class="offCanvas__logo mb-30">
            <a href="/"><img loading="lazy" src="assets/img/integrated_enterprises_india_pvt_ltd.png"
                    alt="Integrated Enterprises (India) Pvt. Ltd" title="Integrated Enterprises (India) Pvt. Ltd" /></a>
        </div>
        <div class="offCanvas__side-info mb-30">
            <div class="contact-list mb-30">
                <h4>Registered Office</h4>
                <p>5A, 5th Floor, Kences Towers, 1, Ramakrishna Street, <br>
                    T. Nagar, Chennai - 600 017.</p>
            </div>
            <div class="contact-list mb-30">
                <h4>Phone Number</h4>
                <p><a class="text-b" href="tel:04428143045">044 - 28143045/</a><a class="text-b"
                        href="tel:04428143046">46</a></p>
                <p> <a class="text-b" href="tel:180042523456"> 1800 425 23456</a></p>
                <p><a class="text-b" href="tel:02240661800"> 022 - 4066 1800</a></p>
            </div>
            <div class="contact-list mb-30">
                <h4>Email Address</h4>
                <p><a class="text-b" href="mailto:customercare@integratedindia.in">customercare@integratedindia.in</a>
                </p>
            </div>
        </div>
    </div>
    <div class="offCanvas__overly"></div>
    <!-- offCanvas-menu-end -->
</header>
<div class="z-99">
    <div class="chatbot-icon">
        <img loading="lazy" src="assets/img/chanakya-removebg-preview.png" alt="Chatbot Icon" />
        <h5 class="fw-bold text-white">Hi, I am Chanakya</h5>
    </div>
    <div class="chatbot hidden">
        <header class="chatbot-header">
            <div class="row align-items-center justify-content-between">
                <div class="col-3 chatbot-image">
                    <img loading="lazy" src="assets/img/chatbot-icon.svg" class="img-fluid" alt="Chanakya Logo" />
                </div>
                <div class="col-4">
                    <h5 class="text-b m-0 fw-bold">Chanakya</h5>
                </div>
                <div class="col-5">
                    <div class="d-flex align-items-center button-group justify-content-end">
                        <button class="btn-maximize hidden text-white border-0 action-button">︽</button>
                        <button class="btn-minimize text-white border-0 action-button">︾</button>
                        <button class="chat-close text-white border-0 action-button">〤</button>
                    </div>

                </div>
            </div>
        </header>
        <ul class="chatbox">
            <li class="chat incoming">
                <p>Myself Chanakya, I am here to assist you today  I can help you with the queries relating to
                    the
                    products dealt by Integrated.</p>
            </li>
            <li class="chat incoming">
                <p>Choose the product for which you are seeking information from me.</p>
            </li>
        </ul>
        <div class="button-options"></div>
    </div>
</div>
`;

    }
    render() {
        document.body.prepend(this.element);

        // --- Dropdown keyboard support for hover menus ---
        const menuItems = this.element.querySelectorAll('.menu-item-has-children');
        const closeDropdown = (item) => {
            item.classList.remove('keyboard-open', 'esc-close');
            const trigger = item.querySelector('a');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        };
        const openDropdown = (item) => {
            menuItems.forEach(other => {
                if (other !== item) closeDropdown(other);
            });
            item.classList.add('keyboard-open');
            item.classList.remove('esc-close');
            const trigger = item.querySelector('a');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
        };
        const toggleDropdown = (item) => {
            if (item.classList.contains('keyboard-open')) {
                closeDropdown(item);
            } else {
                openDropdown(item);
            }
        };

        menuItems.forEach(item => {
            const trigger = item.querySelector('a');
            if (!trigger) return;
            trigger.setAttribute('aria-haspopup', 'true');
            trigger.setAttribute('aria-expanded', 'false');

            trigger.addEventListener('click', (e) => {
                if (trigger.getAttribute('href') === '#') {
                    e.preventDefault();
                    toggleDropdown(item);
                }
            });

            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openDropdown(item);
                } else if (e.key === 'Escape' || e.key === 'Esc') {
                    closeDropdown(item);
                    trigger.focus();
                }
            });

            item.addEventListener('focusout', (e) => {
                if (!item.contains(e.relatedTarget)) {
                    closeDropdown(item);
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                menuItems.forEach(item => {
                    closeDropdown(item);
                    if (item.matches(':hover')) {
                        item.classList.add('esc-close');
                        const onLeave = () => {
                            item.classList.remove('esc-close');
                            item.removeEventListener('mouseleave', onLeave);
                        };
                        item.addEventListener('mouseleave', onLeave);
                    }
                });
            }
        });
    }
}

const header = new Header();
header.render();