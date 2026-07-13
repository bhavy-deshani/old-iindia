class Header {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = " w-100 position-relative";
        this.element.style.zIndex = "1049"; // Ensure a high z-index
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
                            <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex ">
                                <ul class="navigation">

                                    <li class="">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li class="menu-item-has-children">
    <a href="#">Products</a>

    <ul class="sub-menu sub-menu-w1">
        <li>
            <div class="row row-cols-1 row-cols-lg-4">

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="equity-stock-trading.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/equity-icon.png" alt="Equities" title="Equities">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Equities</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="online-commodity-trading.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/Commodity-icon.png" alt="Commodity" title="Commodity">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Commodity</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="mutual-funds.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/mutu-icon.png" alt="Mutual Fund" title="Mutual Fund">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Mutual Fund</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="fixed-deposit-income-option.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/fixed-icon.png" alt="Fixed Income" title="Fixed Income">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Fixed Income</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="open-demat-trading-account.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/demao-icon.png" alt="Demat Account" title="Demat Account">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Demat Account</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="health-life-insurance-providers.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/insurance-icon.png" alt="Life & Health Insurance" title="Life & Health Insurance">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Life & Health Insurance</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="nps-national-pension-system.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/nps-icon.png" alt="NPS" title="NPS">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">NPS</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="pan-card-tan-tds-services.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/pan-tan-icon.png" alt="PAN/TAX Services" title="PAN/TAX Services">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">PAN/TAX Services</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="secretarial-services.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/secretarial-icon.png" alt="Secretarial Services" title="Secretarial Services">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Secretarial Services</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="registry-services.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/Registry-icon.png" alt="Registry Services" title="Registry Services">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Registry Services</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="invest-in-gold-etf.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/gold-icon.png" alt="Gold" title="Gold">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">Gold</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                    <li class="menu-item-has-children">
    <a href="#">Knowledge Center </a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="calculators.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/Calculators-con.png" alt="Calculators" title="Calculators">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Calculators</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="blogs.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/blogs-icon.png" alt="Blogs" title="Blogs">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Blogs</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="faqs-frequently-asked-questions.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/faqs-icon.png" alt="FAQs" title="FAQs">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">FAQs</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                    <li class="menu-item-has-children">
    <a href="#">Event </a>

   <ul class="sub-menu sub-menu-w1">
        <li>
        
            <div class="row row-cols-1 row-cols-lg-4">
            <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_9.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/tokyo-icon.png" alt="Switzerland" title="Switzerland">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Tokyo, Japan</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>
<div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_8.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/switzerland.png" alt="Switzerland" title="Switzerland">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Chaitra Mahotsav 2026</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_7.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/san-antonio.svg" alt="San Antonio" title="San Antonio">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">San Antonio</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_6.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/dubai.svg" alt="Dubai" title="Dubai">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Dubai</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/texas.svg" alt="Austin, texas" title="Austin, texas">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Austin, texas</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_1.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/san-fransisco.svg" alt="San Francisco" title="San Francisco">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">San Francisco</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_2.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/cleveland.svg" alt="Cleveland" title="Cleveland">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Cleveland</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_3.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/dallas.svg" alt="Dallas" title="Dallas">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Dallas</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_4.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/raleigh.svg" alt="Raleigh" title="Raleigh">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Raleigh</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gallery_5.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/new-jersey.svg" alt="New Jersey" title="New Jersey">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">New Jersey</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                

            </div>
        </li>
    </ul>
</li>
                                    <li><a href="contact-us.html">contact</a></li>
                                    <li class="menu-item-has-children">
    <a href="#">Research</a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="research-daily-market-insights.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/daily-market.jpg" alt="Austin, texas" title="Austin, texas">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Daily Market Insights</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="market-insights-equity-futures-options.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/equity-f-o.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Equity/F&O</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="trading-strategy.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/trading_strategy.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Trading Strategy</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="stellar-picks.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/stellar_picks.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Stellar Picks</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="research-technical-reports.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/technical_reports.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Technical Reports</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="special-reports.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/special_reports.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Special Reports</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="research-basket.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/basket.jpg" alt="" title="">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 p-0 fw-bold">Basket</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col py-1">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="initial-public-offering.html" class="m-0 p-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/ipo-icon.png" alt="IPO" title="IPO">
                                </div>
                                <div class="my-auto">
                                    <p class="m-0 fs--14 fw-bold p-0">IPO</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                    <li><a href="nri-investments.html">NRI</a></li>
                                    <li class="menu-item-has-children">
    <a href="#">Gift City</a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="gift-city-ifsc.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/gift-city/about_us.png" alt="About Us" title="About Us">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">About Us</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="indiainxga.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/gift-city/products.png" alt="Products" title="Products">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Products</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="policies-procedures.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/gift-city/policies_procedures.png" alt="Policies & Procedures" title="Policies & Procedures">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Policies & Procedures</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                    <li class="menu-item-has-children">
    <a href="#">STRI</a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="investment-options-for-women.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/stri.png" alt="STRI" title="STRI">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">STRI</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="event.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/stri_event.png" alt="STRI Event" title="STRI Event">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">STRI Event</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                   <li class="menu-item-has-children">
    <a href="#">Login/Register</a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="online.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/Equity.png" alt="Equity/MF" title="Equity/MF">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Equity/MF</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="col">
                    <ul>
                        <div class="col india-inx-col" id="india-inx-container">
    <div class="p-0 m-0 text-b cursor-pointer"> 
            <a href="#" class="p-0 m-0 text-b">

        <li class="d-flex gap-2 hover-effect  mb-3 ">
            <div class="m-y">
                <img loading="lazy" src="assets/img/gift-city/Indiainxga.png" alt="India Inx GA" title="India Inx GA">
            </div>
            <div class="lh-1 my-auto">
                <p class="lh-1 m-0 fs--14 p-0 fw-bold">India Inx GA <small class="text-green" >(Global Stock)</small></p>
            </div>
            <div class="ani"></div>
        </li>
        </a>
    </div>
    
    <div class="inx-action-popup" id="inx-buttons">
        <a href="https://trade.clientbridge.in/login?IGIL" target="_blank" class="inx-btn btn-login p-2">
            <i class="fi fi-rr-sign-in-alt"></i> Login
        </a>
        
        <a href="https://trade.clientbridge.in/register?IGIL" target="_blank" class="inx-btn btn-register p-2">
            <i class="fi fi-rr-user-add"></i> Register
        </a>
    </div>
</div>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="nps-login.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/nps-login.png" alt="NPS" title="NPS">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">NPS</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="https://www.integratedindia.in/sp/businesspartner/FRLogin/login.aspx" target="_blank" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/franchisee.png" alt="Franchisee" title="Franchisee">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Franchisee</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="https://bo.integrated.investments:9443/ldclientlevelH/#Login" target="_blank" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/ld-back-office.png" alt="LD Back Office" title="LD Back Office">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">LD Back Office</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                   <li class="menu-item-has-children">
    <a href="#">Open Demat A/c</a>

    <ul class="sub-menu sub-menu-w2">
        <li>
            <div class="row row-cols-1">

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="open-demat-trading-account.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/residential_individual.png" alt="Equity" title="Equity">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Resident Individual</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="open-minor-demat-account.html" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/minor_account.png" alt="Minor Account" title="Minor Account">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Minor Account</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li class="d-flex gap-2 hover-effect mb-3">
                            <a href="https://www.integratedindia.in/sp/NRIOnboarding_V2/NRIAccountOpenHome.aspx" target="_blank" class="p-0 m-0 text-b d-flex gap-2 w-100">
                                <div class="m-y">
                                    <img loading="lazy" src="assets/img/nri-ac.png" alt="NRI" title="NRI">
                                </div>
                                <div class="lh-1 my-auto">
                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">NRI</p>
                                </div>
                                <div class="ani"></div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </li>
    </ul>
</li>
                                </ul>
                            </div>
                            <div class="tgmenu__action d-none d-md-block">
                                <ul class="list-wrap">
                        <li class="acc-header-item" style="position:relative;">
                                        <a href="javascript:void(0)" id="acc-toggle-btn" title="Accessibility Options" aria-label="Accessibility Options" style="display:flex;align-items:center;justify-content:center;">
                                            
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5625 8.75C11.5625 7.83832 11.9247 6.96398 12.5693 6.31932C13.214 5.67466 14.0883 5.3125 15 5.3125C15.9117 5.3125 16.786 5.67466 17.4307 6.31932C18.0753 6.96398 18.4375 7.83832 18.4375 8.75C18.4375 9.66168 18.0753 10.536 17.4307 11.1807C16.786 11.8253 15.9117 12.1875 15 12.1875C14.0883 12.1875 13.214 11.8253 12.5693 11.1807C11.9247 10.536 11.5625 9.66168 11.5625 8.75ZM15 7.1875C14.5856 7.1875 14.1882 7.35212 13.8951 7.64515C13.6021 7.93817 13.4375 8.3356 13.4375 8.75C13.4375 9.1644 13.6021 9.56183 13.8951 9.85485C14.1882 10.1479 14.5856 10.3125 15 10.3125C15.4144 10.3125 15.8118 10.1479 16.1049 9.85485C16.3979 9.56183 16.5625 9.1644 16.5625 8.75C16.5625 8.3356 16.3979 7.93817 16.1049 7.64515C15.8118 7.35212 15.4144 7.1875 15 7.1875Z" fill="#005CB9"/>
  <path d="M6.63735 12.1342C6.73434 11.9053 6.91828 11.7243 7.14871 11.631C7.37913 11.5378 7.63718 11.5398 7.8661 11.6367L7.86735 11.638L7.87485 11.6417L7.9086 11.6555L8.0461 11.7117C8.17026 11.7626 8.34526 11.8309 8.5711 11.9167C9.0211 12.088 9.65235 12.3167 10.3773 12.5442C11.8498 13.0067 13.6111 13.438 14.9998 13.438C16.3886 13.438 18.1498 13.0067 19.6223 12.5442C20.4561 12.2801 21.2792 11.9836 22.0898 11.6555L22.1248 11.6417L22.1323 11.638H22.1336C22.3607 11.5498 22.6131 11.5535 22.8375 11.6483C23.0619 11.743 23.2406 11.9213 23.3358 12.1455C23.431 12.3697 23.4352 12.6221 23.3475 12.8494C23.2598 13.0766 23.0872 13.2608 22.8661 13.363L22.8611 13.3655L22.8486 13.3705L22.8086 13.388L22.6548 13.4505C21.8428 13.7754 21.0189 14.0698 20.1848 14.333C18.9498 14.7205 17.3898 15.1317 15.9373 15.2667V16.8167C15.9373 17.3542 16.0923 17.883 16.3836 18.3367L19.5386 23.243C19.6052 23.3466 19.6508 23.4623 19.6728 23.5835C19.6947 23.7047 19.6926 23.829 19.6664 23.9494C19.6403 24.0697 19.5907 24.1838 19.5206 24.285C19.4504 24.3862 19.3609 24.4726 19.2573 24.5392C19.1538 24.6059 19.0381 24.6515 18.9169 24.6734C18.7957 24.6953 18.6713 24.6932 18.551 24.6671C18.4306 24.641 18.3166 24.5914 18.2153 24.5212C18.1141 24.451 18.0277 24.3616 17.9611 24.258L14.9998 19.6505L12.0373 24.258C11.973 24.3664 11.8875 24.4607 11.7859 24.5352C11.6844 24.6098 11.5688 24.6631 11.4461 24.692C11.3234 24.7209 11.1962 24.7248 11.072 24.7034C10.9478 24.682 10.8292 24.6358 10.7233 24.5676C10.6174 24.4993 10.5263 24.4104 10.4555 24.3061C10.3847 24.2018 10.3357 24.0844 10.3113 23.9607C10.287 23.8371 10.2878 23.7098 10.3137 23.5865C10.3397 23.4631 10.3902 23.3463 10.4623 23.243L13.6161 18.3367C13.9076 17.8829 14.0625 17.3549 14.0623 16.8155V15.2667C12.6098 15.1317 11.0498 14.7217 9.8136 14.333C8.92723 14.0529 8.05237 13.7377 7.1911 13.388L7.14985 13.3705L7.1386 13.3655L7.1336 13.3642C7.02022 13.3161 6.91744 13.2461 6.83113 13.1582C6.74482 13.0703 6.67668 12.9663 6.63059 12.8521C6.58451 12.7378 6.56138 12.6156 6.56254 12.4925C6.5637 12.3693 6.58912 12.2476 6.63735 12.1342Z" fill="#005CB9"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5625 15C1.5625 7.57875 7.57875 1.5625 15 1.5625C22.4212 1.5625 28.4375 7.57875 28.4375 15C28.4375 22.4212 22.4212 28.4375 15 28.4375C7.57875 28.4375 1.5625 22.4212 1.5625 15ZM15 3.4375C11.9334 3.4375 8.99247 4.65569 6.82408 6.82408C4.65569 8.99247 3.4375 11.9334 3.4375 15C3.4375 18.0666 4.65569 21.0075 6.82408 23.1759C8.99247 25.3443 11.9334 26.5625 15 26.5625C18.0666 26.5625 21.0075 25.3443 23.1759 23.1759C25.3443 21.0075 26.5625 18.0666 26.5625 15C26.5625 11.9334 25.3443 8.99247 23.1759 6.82408C21.0075 4.65569 18.0666 3.4375 15 3.4375Z" fill="#005CB9"/>
</svg>

                                        </a>
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
                    <div class="tgmobile__menu">
                        <nav class="tgmobile__menu-box">
                            <div class="close-btn"><i class="fi fi-br-cross-small"></i></div>
                            <div class="nav-logo">
                                <a href="/"><img loading="lazy" src="assets/img/integrated_enterprises_india_pvt_ltd.png"
                                        alt="Integrated Enterprises (India) Pvt. Ltd"
                                        title="Integrated Enterprises (India) Pvt. Ltd" /></a>
                            </div>

                            <div class="tgmobile__menu-outer">
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
                    </div>
            </div>
        </div>
    </div>
    <div class="search-popup-overlay"></div>
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

        // --- CLICK Logic (Mobile & Tablet) ---

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

        // --- Accessibility Widget ---
        this._initAccessibilityWidget();
    }

    _initAccessibilityWidget() {
        // ── Inject CSS ──────────────────────────────────────────────────────────
        const style = document.createElement('style');
        style.textContent = `
             /* Accessibility toggle button */
            #acc-toggle-btn {
                background: none;
                border: none;
                cursor: pointer;
                color: inherit;
                padding: 0;
                line-height: 1;
            }
            #acc-toggle-btn:hover { opacity: 0.75; }

            /* Panel - fixed right sidebar like SBI Life */
            #acc-panel {
                position: fixed;
                top: 50%;
                right: -320px;
                transform: translateY(-50%);
                z-index: 999999;
                background: #fff;
                border: 1px solid #e0e0e0;
                border-radius: 16px 0 0 16px;
                width: 320px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 0 0 16px 0;
                box-shadow: -4px 0 24px rgba(0,0,0,0.15);
                transition: right 0.3s cubic-bezier(.4,0,.2,1);
                font-family: inherit;
            }
            #acc-panel.acc-open {
                right: 0;
            }
            #acc-panel::-webkit-scrollbar { width: 4px; }
            #acc-panel::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }

            /* Panel header */
            .acc-panel-header {
                background: linear-gradient(135deg, #00245B 0%, #008B35 100%);
                color: #fff;
                padding: 14px 16px;
                border-radius: 16px 0 0 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .acc-panel-header h6 {
                margin: 0;
                font-size: 14px;
                font-weight: 700;
                color: #fff;
                letter-spacing: 0.3px;
            }
            .acc-panel-close {
                background: rgba(255,255,255,0.2);
                border: none;
                color: #fff;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
                transition: background 0.15s;
            }
            .acc-panel-close:hover { background: rgba(255,255,255,0.35); }

            /* Profiles section */
            .acc-profiles-toggle {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 16px;
                background: #e8f5ee;
                border-bottom: 1px solid #c8e6d4;
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
                color: #008B35;
            }
            .acc-profiles-toggle svg { transition: transform 0.2s; }
            .acc-profiles-toggle.open svg { transform: rotate(180deg); }
            .acc-profiles-grid {
                display: none;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 8px;
                padding: 10px 16px;
                background: #f0f8f3;
                border-bottom: 1px solid #c8e6d4;
            }
            .acc-profiles-grid.open { display: grid; }
            .acc-profile-btn {
                background: #fff;
                border: 1.5px solid #a8d5b8;
                border-radius: 10px;
                padding: 10px 4px 8px;
                font-size: 10px;
                font-weight: 600;
                color: #008B35;
                cursor: pointer;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                transition: all 0.15s;
            }
            .acc-profile-btn svg { width: 24px; height: 24px; }
            .acc-profile-btn:hover, .acc-profile-btn.acc-active {
                background: #008B35;
                color: #fff;
                border-color: #008B35;
            }
            .acc-profile-btn:hover svg path,
            .acc-profile-btn.acc-active svg path { fill: #fff; }

            /* Main grid of feature buttons */
            .acc-features-grid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 8px;
                padding: 12px 16px 4px;
            }
            .acc-feature-btn {
                background: #edf7f1;
                border: 1.5px solid #a8d5b8;
                border-radius: 10px;
                padding: 12px 4px 10px;
                font-size: 10px;
                font-weight: 600;
                color: #00245B;
                cursor: pointer;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                transition: all 0.15s;
                line-height: 1.3;
            }
            .acc-feature-btn .acc-feat-icon {
                font-size: 22px;
                line-height: 1;
            }
            .acc-feature-btn:hover, .acc-feature-btn.acc-active {
                background: #00245B;
                color: #fff;
                border-color: #00245B;
            }

            /* Font size stepper */
            .acc-stepper-row {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 0 16px 4px;
            }
            .acc-stepper-label {
                font-size: 10px;
                font-weight: 700;
                color: #888;
                text-transform: uppercase;
                letter-spacing: .5px;
                flex: 1;
            }
            .acc-stepper-btn {
                background: #c8e6d4;
                border: 1.5px solid #7fc4a0;
                border-radius: 6px;
                width: 28px;
                height: 28px;
                font-size: 16px;
                font-weight: 700;
                color: #008B35;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.15s;
                line-height: 1;
            }
            .acc-stepper-btn:hover { background: #008B35; color: #fff; border-color: #008B35; }
            .acc-stepper-value {
                min-width: 36px;
                text-align: center;
                font-size: 11px;
                font-weight: 700;
                color: #00245B;
            }

            /* Section divider label */
            .acc-section-sep {
                font-size: 10px;
                font-weight: 700;
                color: #5b9e7a;
                text-transform: uppercase;
                letter-spacing: .6px;
                padding: 8px 16px 0;
            }

            /* Reset */
            .acc-reset-row {
                padding: 10px 16px 0;
            }
            .acc-reset-full-btn {
                width: 100%;
                background: #fef2f2;
                border: 1.5px solid #fca5a5;
                border-radius: 8px;
                padding: 8px;
                font-size: 12px;
                font-weight: 700;
                color: #b91c1c;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                transition: background 0.15s;
            }
            .acc-reset-full-btn:hover { background: #dc2626; color: #fff; border-color: #dc2626; }

            /* ── Feature CSS classes ── */
            html.acc-high-contrast { filter: contrast(2) invert(1) !important; }
            html.acc-high-contrast img,
            html.acc-high-contrast video,
            html.acc-high-contrast picture,
            html.acc-high-contrast canvas,
            html.acc-high-contrast iframe {
                filter: invert(1) contrast(0.5) !important;
                isolation: isolate !important;
                position: relative !important;
            }
            html.acc-grayscale { filter: grayscale(1) !important; }
            html.acc-saturation-low { filter: saturate(0.3) !important; }
            html.acc-saturation-high { filter: saturate(2) !important; }

            /* Keep acc widget unfiltered */
            #acc-toggle-btn, #acc-panel { isolation: isolate; filter: none !important; }

            body.acc-highlight-links a {
                text-decoration: underline !important;
            }
            body.acc-large-cursor, body.acc-large-cursor * {
                cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 32 32'%3E%3Cpath d='M5 3l19 12-8 2-4 9z' fill='%23000' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E") 5 3, auto !important;
            }
            body.acc-dyslexia *:not(.tgmenu__nav):not(.tgmenu__nav *):not(.tgmenu__navbar-wrap):not(.tgmenu__navbar-wrap *):not(.tgmenu__action):not(.tgmenu__action *):not(.tg-header__area):not(.tg-header__area *) {
                font-family: 'Arial', 'Helvetica', sans-serif !important;
                letter-spacing: 0.1em !important;
                word-spacing: 0.2em !important;
                line-height: 1.8 !important;
            }
            body.acc-line-height-high *:not(.tgmenu__nav):not(.tgmenu__nav *):not(.tgmenu__navbar-wrap):not(.tgmenu__navbar-wrap *):not(.tgmenu__action):not(.tgmenu__action *):not(.tg-header__area):not(.tg-header__area *) { line-height: 2.2 !important; }
            body.acc-text-align-left *:not(.tgmenu__nav):not(.tgmenu__nav *):not(.tgmenu__navbar-wrap):not(.tgmenu__navbar-wrap *):not(.tgmenu__action):not(.tgmenu__action *):not(.tg-header__area):not(.tg-header__area *) { text-align: left !important; }
            body.acc-text-spacing *:not(.tgmenu__nav):not(.tgmenu__nav *):not(.tgmenu__navbar-wrap):not(.tgmenu__navbar-wrap *):not(.tgmenu__action):not(.tgmenu__action *):not(.tg-header__area):not(.tg-header__area *) { letter-spacing: 0.12em !important; word-spacing: 0.18em !important; }

            #acc-mobile-backdrop {
                display: none;
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.4);
                z-index: 999990;
            }
            @media (max-width: 767px) {
                #acc-mobile-backdrop.acc-open { display: block; }
            }

            #acc-reading-guide {
                position: fixed;
                left: 0;
                width: 100%;
                height: 30px;
                background: rgba(255,255,0,0.28);
                border-top: 2px solid rgba(200,160,0,0.6);
                border-bottom: 2px solid rgba(200,160,0,0.6);
                pointer-events: none;
                z-index: 999997;
                display: none;
            }

            /* Floating tab trigger on the side */
            #acc-side-tab {
                position: fixed;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                z-index: 999998;
                background: linear-gradient(135deg, #00245B, #008B35);
                color: #fff;
                border: none;
                border-radius: 10px 0 0 10px;
                width: 36px;
                padding: 12px 4px;
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: -2px 0 10px rgba(0,0,0,0.2);
                transition: width 0.2s, right 0.3s;
            }
            #acc-side-tab.hidden { right: -36px; }

            @media (max-width: 767px) {
                #acc-panel {
                    top: auto;
                    bottom: -90vh;
                    right: 0;
                    left: 0;
                    width: 100% !important;
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 20px 20px 0 0;
                    transform: none;
                    transition: bottom 0.35s cubic-bezier(.4,0,.2,1);
                    -webkit-transform: none;
                    zoom: unset !important;
                }
                #acc-panel.acc-open {
                    bottom: 0;
                    right: 0;
                }
                #acc-side-tab {
                    top: auto;
                    bottom: 50%;
                    right: 0 !important;
                    transform: none;
                    -webkit-transform: none;
                    zoom: unset !important;
                    width: 44px;
                    height: 44px;
                    padding: 0;
                    font-size: 22px;
                    border-radius: 12px 0 0 12px;
                }
                #acc-side-tab.hidden {
                    right: -44px !important;
                    bottom: 20px;
                    transition: right 0.3s ease;
                }
            }
        `;
        document.head.appendChild(style);

        // ── Build Panel HTML ─────────────────────────────────────────────────────
        const panel = document.createElement('div');
        panel.id = 'acc-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Accessibility Options');
        panel.innerHTML = `
            <div class="acc-panel-header">
                <h6>Accessibility Tool</h6>
                <button class="acc-panel-close" id="acc-panel-close" aria-label="Close">✕</button>
            </div>

            <div class="acc-profiles-toggle" id="acc-profiles-toggle">
                <span>Accessibility Profiles</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="#5b21b6" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="acc-profiles-grid" id="acc-profiles-grid">
                <button class="acc-profile-btn" id="acc-profile-vision" title="Vision Impaired">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="#5b21b6"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" stroke="#5b21b6" stroke-width="2" fill="none"/></svg>
                    Vision
                </button>
                <button class="acc-profile-btn" id="acc-profile-motor" title="Motor Impaired">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" fill="#5b21b6"/></svg>
                    Motor
                </button>
                <button class="acc-profile-btn" id="acc-profile-cognitive" title="Cognitive">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 4v5l3 3" stroke="#5b21b6" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
                    Cognitive
                </button>
            </div>

            <div class="acc-section-sep">Content Adjustments</div>
            <div class="acc-stepper-row" style="margin-top:8px;">
                <span class="acc-stepper-label">Font Size</span>
                <button class="acc-stepper-btn" id="acc-font-dec">−</button>
                <span class="acc-stepper-value" id="acc-font-val">100%</span>
                <button class="acc-stepper-btn" id="acc-font-inc">+</button>
            </div>
            <div class="acc-stepper-row" style="margin-top:6px;">
                <span class="acc-stepper-label">Page Zoom</span>
                <button class="acc-stepper-btn" id="acc-zoom-out">−</button>
                <span class="acc-stepper-value" id="acc-zoom-val">100%</span>
                <button class="acc-stepper-btn" id="acc-zoom-in">+</button>
            </div>

            <div class="acc-section-sep" style="margin-top:6px;">Display Features</div>
            <div class="acc-features-grid">
                <button class="acc-feature-btn" id="acc-contrast" title="High Contrast">
                    <span class="acc-feat-icon">◑</span>Contrast
                </button>
                <button class="acc-feature-btn" id="acc-grayscale" title="Grayscale">
                    <span class="acc-feat-icon">⬜</span>Grayscale
                </button>
                <button class="acc-feature-btn" id="acc-bigger-text" title="Bigger Text">
                    <span class="acc-feat-icon" style="font-size:20px;font-weight:900;">T</span>Bigger Text
                </button>
                <button class="acc-feature-btn" id="acc-line-height" title="Line Height">
                    <span class="acc-feat-icon">≡</span>Line Height
                </button>
                <button class="acc-feature-btn" id="acc-text-align" title="Text Align Left">
                    <span class="acc-feat-icon">⬛</span>Text Align
                </button>
                <button class="acc-feature-btn" id="acc-text-spacing" title="Text Spacing">
                    <span class="acc-feat-icon">↔</span>Text Spacing
                </button>
                <button class="acc-feature-btn" id="acc-links" title="Highlight Links">
                    <span class="acc-feat-icon">🔗</span>Highlight Links
                </button>
                <button class="acc-feature-btn" id="acc-cursor" title="Large Cursor">
                    <span class="acc-feat-icon">🖱️</span>Cursor
                </button>
                <button class="acc-feature-btn" id="acc-saturation" title="Saturation">
                    <span class="acc-feat-icon">💧</span>Saturation
                </button>
                <button class="acc-feature-btn" id="acc-dyslexia" title="Dyslexia Friendly">
                    <span class="acc-feat-icon" style="font-weight:900;font-style:italic;">D I</span>Dyslexia Friendly
                </button>
                <button class="acc-feature-btn" id="acc-reading" title="Reading Guide">
                    <span class="acc-feat-icon">📖</span>Reading Guide
                </button>
                <button class="acc-feature-btn" id="acc-screen-reader" title="Screen Reader Helper">
                    <span class="acc-feat-icon">🔊</span>Screen Reader
                </button>
            </div>

            <div class="acc-reset-row">
                <button class="acc-reset-full-btn" id="acc-reset">↺ Reset all Accessibility settings</button>
            </div>
        `;

        const guide = document.createElement('div');
        guide.id = 'acc-reading-guide';

        // Floating side tab (shows when panel is closed)
        const sideTab = document.createElement('button');
        sideTab.id = 'acc-side-tab';
        sideTab.setAttribute('aria-label', 'Open Accessibility Tool');
        sideTab.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5625 8.75C11.5625 7.83832 11.9247 6.96398 12.5693 6.31932C13.214 5.67466 14.0883 5.3125 15 5.3125C15.9117 5.3125 16.786 5.67466 17.4307 6.31932C18.0753 6.96398 18.4375 7.83832 18.4375 8.75C18.4375 9.66168 18.0753 10.536 17.4307 11.1807C16.786 11.8253 15.9117 12.1875 15 12.1875C14.0883 12.1875 13.214 11.8253 12.5693 11.1807C11.9247 10.536 11.5625 9.66168 11.5625 8.75ZM15 7.1875C14.5856 7.1875 14.1882 7.35212 13.8951 7.64515C13.6021 7.93817 13.4375 8.3356 13.4375 8.75C13.4375 9.1644 13.6021 9.56183 13.8951 9.85485C14.1882 10.1479 14.5856 10.3125 15 10.3125C15.4144 10.3125 15.8118 10.1479 16.1049 9.85485C16.3979 9.56183 16.5625 9.1644 16.5625 8.75C16.5625 8.3356 16.3979 7.93817 16.1049 7.64515C15.8118 7.35212 15.4144 7.1875 15 7.1875Z" fill="#ffffff"/><path d="M6.63735 12.1342C6.73434 11.9053 6.91828 11.7243 7.14871 11.631C7.37913 11.5378 7.63718 11.5398 7.8661 11.6367L7.86735 11.638L7.87485 11.6417L7.9086 11.6555L8.0461 11.7117C8.17026 11.7626 8.34526 11.8309 8.5711 11.9167C9.0211 12.088 9.65235 12.3167 10.3773 12.5442C11.8498 13.0067 13.6111 13.438 14.9998 13.438C16.3886 13.438 18.1498 13.0067 19.6223 12.5442C20.4561 12.2801 21.2792 11.9836 22.0898 11.6555L22.1248 11.6417L22.1323 11.638H22.1336C22.3607 11.5498 22.6131 11.5535 22.8375 11.6483C23.0619 11.743 23.2406 11.9213 23.3358 12.1455C23.431 12.3697 23.4352 12.6221 23.3475 12.8494C23.2598 13.0766 23.0872 13.2608 22.8661 13.363L22.8611 13.3655L22.8486 13.3705L22.8086 13.388L22.6548 13.4505C21.8428 13.7754 21.0189 14.0698 20.1848 14.333C18.9498 14.7205 17.3898 15.1317 15.9373 15.2667V16.8167C15.9373 17.3542 16.0923 17.883 16.3836 18.3367L19.5386 23.243C19.6052 23.3466 19.6508 23.4623 19.6728 23.5835C19.6947 23.7047 19.6926 23.829 19.6664 23.9494C19.6403 24.0697 19.5907 24.1838 19.5206 24.285C19.4504 24.3862 19.3609 24.4726 19.2573 24.5392C19.1538 24.6059 19.0381 24.6515 18.9169 24.6734C18.7957 24.6953 18.6713 24.6932 18.551 24.6671C18.4306 24.641 18.3166 24.5914 18.2153 24.5212C18.1141 24.451 18.0277 24.3616 17.9611 24.258L14.9998 19.6505L12.0373 24.258C11.973 24.3664 11.8875 24.4607 11.7859 24.5352C11.6844 24.6098 11.5688 24.6631 11.4461 24.692C11.3234 24.7209 11.1962 24.7248 11.072 24.7034C10.9478 24.682 10.8292 24.6358 10.7233 24.5676C10.6174 24.4993 10.5263 24.4104 10.4555 24.3061C10.3847 24.2018 10.3357 24.0844 10.3113 23.9607C10.287 23.8371 10.2878 23.7098 10.3137 23.5865C10.3397 23.4631 10.3902 23.3463 10.4623 23.243L13.6161 18.3367C13.9076 17.8829 14.0625 17.3549 14.0623 16.8155V15.2667C12.6098 15.1317 11.0498 14.7217 9.8136 14.333C8.92723 14.0529 8.05237 13.7377 7.1911 13.388L7.14985 13.3705L7.1386 13.3655L7.1336 13.3642C7.02022 13.3161 6.91744 13.2461 6.83113 13.1582C6.74482 13.0703 6.67668 12.9663 6.63059 12.8521C6.58451 12.7378 6.56138 12.6156 6.56254 12.4925C6.5637 12.3693 6.58912 12.2476 6.63735 12.1342Z" fill="#ffffff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5625 15C1.5625 7.57875 7.57875 1.5625 15 1.5625C22.4212 1.5625 28.4375 7.57875 28.4375 15C28.4375 22.4212 22.4212 28.4375 15 28.4375C7.57875 28.4375 1.5625 22.4212 1.5625 15ZM15 3.4375C11.9334 3.4375 8.99247 4.65569 6.82408 6.82408C4.65569 8.99247 3.4375 11.9334 3.4375 15C3.4375 18.0666 4.65569 21.0075 6.82408 23.1759C8.99247 25.3443 11.9334 26.5625 15 26.5625C18.0666 26.5625 21.0075 25.3443 23.1759 23.1759C25.3443 21.0075 26.5625 18.0666 26.5625 15C26.5625 11.9334 25.3443 8.99247 23.1759 6.82408C21.0075 4.65569 18.0666 3.4375 15 3.4375Z" fill="#ffffff"/></svg>';

        const backdrop = document.createElement('div');
        backdrop.id = 'acc-mobile-backdrop';

        // Always append panel to body so it works on mobile (tgmenu__action is d-none on mobile)
        document.body.appendChild(panel);
        document.body.appendChild(guide);
        document.body.appendChild(backdrop);
        document.body.appendChild(sideTab);

        // ── State Storage & Retrieval ────────────────────────────────────────────
        const defaultState = {
            contrast: false, grayscale: false, biggerText: false,
            lineHeight: false, textAlign: false, textSpacing: false,
            links: false, cursor: false, saturation: 0,
            dyslexia: false, reading: false, screenReader: false
        };

        // ── Cookie helpers (session cookies — deleted on page refresh/close) ────
        const setCookie = (name, value) => {
            // No 'expires' or 'max-age' → session cookie, auto-deleted on browser/tab close
            document.cookie = name + '=' + encodeURIComponent(value) + '; path=/; SameSite=Lax';
        };
        const getCookie = (name) => {
            const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
            return match ? decodeURIComponent(match.split('=')[1]) : null;
        };
        const deleteCookie = (name) => {
            document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax';
        };

        let savedData = {};
        try {
            const raw = getCookie('accSettings');
            savedData = raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.warn("Could not read Accessibility settings from cookie", e);
        }

        let fontSize = savedData.fontSize || 100;
        let zoomLevel = savedData.zoomLevel || 1;
        const state = Object.assign({}, defaultState, savedData.state || {});

        const saveSettings = () => {
            setCookie('accSettings', JSON.stringify({ fontSize, zoomLevel, state }));
        };

        const toggleBtn = document.getElementById('acc-toggle-btn');

        // ── Open / Close panel ──────────────────────────────────────────────────
        const openPanel = () => {
            panel.classList.add('acc-open');
            sideTab.classList.add('hidden');
            backdrop.classList.add('acc-open');
        };
        const closePanel = () => {
            panel.classList.remove('acc-open');
            sideTab.classList.remove('hidden');
            backdrop.classList.remove('acc-open');
        };

        // ── Inject a mobile accessibility button next to the hamburger ───────────
        const mobileNavToggler = document.querySelector('.mobile-nav-toggler');


        if (toggleBtn) toggleBtn.addEventListener('click', (e) => { e.stopPropagation(); openPanel(); });
        sideTab.addEventListener('click', (e) => { e.stopPropagation(); openPanel(); });
        document.getElementById('acc-panel-close').addEventListener('click', closePanel);
        backdrop.addEventListener('click', closePanel);
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && !(toggleBtn && toggleBtn.contains(e.target)) && !sideTab.contains(e.target)) {
                closePanel();
            }
        });

        // ── Profiles toggle ──────────────────────────────────────────────────────
        const profilesToggle = document.getElementById('acc-profiles-toggle');
        const profilesGrid = document.getElementById('acc-profiles-grid');
        profilesToggle.addEventListener('click', () => {
            profilesToggle.classList.toggle('open');
            profilesGrid.classList.toggle('open');
        });

        // Profile: Vision — high contrast + bigger text + cursor
        document.getElementById('acc-profile-vision').addEventListener('click', function () {
            resetAll();
            this.classList.add('acc-active');
            applyContrast(true);
            applyBiggerText(true);
            applyCursor(true);
            saveSettings();
        });
        // Profile: Motor — large cursor + bigger text
        document.getElementById('acc-profile-motor').addEventListener('click', function () {
            resetAll();
            this.classList.add('acc-active');
            applyBiggerText(true);
            applyCursor(true);
            saveSettings();
        });
        // Profile: Cognitive — dyslexia + line height + text spacing
        document.getElementById('acc-profile-cognitive').addEventListener('click', function () {
            resetAll();
            this.classList.add('acc-active');
            applyDyslexia(true);
            applyLineHeight(true);
            applyTextSpacing(true);
            saveSettings();
        });

        // ── Font Size ─────────────────────────────────────────────────────────────
        const BASE_FONT_PX = 16; // browser default
        const applyFontSize = () => {
            let fsStyle = document.getElementById('acc-font-size-style');
            if (!fsStyle) {
                fsStyle = document.createElement('style');
                fsStyle.id = 'acc-font-size-style';
                document.head.appendChild(fsStyle);
            }
            if (fontSize === 100) {
                fsStyle.textContent = '';
                document.getElementById('acc-panel').style.zoom = '';
                document.getElementById('acc-side-tab').style.zoom = '';
            } else {
                const px = (BASE_FONT_PX * fontSize / 100).toFixed(2);
                const scale = fontSize / 100;
                const isMobile = window.innerWidth <= 767;
                fsStyle.textContent = `html { font-size: ${px}px !important; } html body, html body * { font-size: revert !important; }`;
                if (!isMobile && CSS.supports('zoom', '1')) {
                    document.getElementById('acc-panel').style.zoom = (1 / scale).toFixed(4);
                    document.getElementById('acc-side-tab').style.zoom = (1 / scale).toFixed(4);
                } else {
                    document.getElementById('acc-panel').style.zoom = '';
                    document.getElementById('acc-side-tab').style.zoom = '';
                }
            }
            document.getElementById('acc-font-val').textContent = fontSize + '%';
            saveSettings();
        };
        document.getElementById('acc-font-inc').addEventListener('click', () => { fontSize = Math.min(fontSize + 5, 150); applyFontSize(); });
        document.getElementById('acc-font-dec').addEventListener('click', () => { fontSize = Math.max(fontSize - 5, 80); applyFontSize(); });

        // ── Page Zoom ────────────────────────────────────────────────────────────
        const applyZoom = () => {
            document.body.style.zoom = zoomLevel === 1 ? '' : String(zoomLevel);
            document.getElementById('acc-zoom-val').textContent = Math.round(zoomLevel * 100) + '%';
            saveSettings();
        };
        document.getElementById('acc-zoom-in').addEventListener('click', () => { zoomLevel = Math.min(+(zoomLevel + 0.1).toFixed(1), 2.0); applyZoom(); });
        document.getElementById('acc-zoom-out').addEventListener('click', () => { zoomLevel = Math.max(+(zoomLevel - 0.1).toFixed(1), 0.5); applyZoom(); });

        // ── Feature helpers ───────────────────────────────────────────────────────
        const applyContrast = (on) => {
            state.contrast = on !== undefined ? on : !state.contrast;
            document.documentElement.classList.toggle('acc-high-contrast', state.contrast);
            document.getElementById('acc-contrast').classList.toggle('acc-active', state.contrast);
            saveSettings();
        };
        const applyGrayscale = (on) => {
            state.grayscale = on !== undefined ? on : !state.grayscale;
            document.documentElement.classList.toggle('acc-grayscale', state.grayscale);
            document.getElementById('acc-grayscale').classList.toggle('acc-active', state.grayscale);
            saveSettings();
        };
        const applyBiggerText = (on) => {
            state.biggerText = on !== undefined ? on : !state.biggerText;
            if (state.biggerText) { fontSize = 130; applyFontSize(); }
            else { fontSize = 100; applyFontSize(); }
            document.getElementById('acc-bigger-text').classList.toggle('acc-active', state.biggerText);
            saveSettings();
        };
        const applyLineHeight = (on) => {
            state.lineHeight = on !== undefined ? on : !state.lineHeight;
            document.body.classList.toggle('acc-line-height-high', state.lineHeight);
            document.getElementById('acc-line-height').classList.toggle('acc-active', state.lineHeight);
            saveSettings();
        };
        const applyTextAlign = (on) => {
            state.textAlign = on !== undefined ? on : !state.textAlign;
            document.body.classList.toggle('acc-text-align-left', state.textAlign);
            document.getElementById('acc-text-align').classList.toggle('acc-active', state.textAlign);
            saveSettings();
        };
        const applyTextSpacing = (on) => {
            state.textSpacing = on !== undefined ? on : !state.textSpacing;
            document.body.classList.toggle('acc-text-spacing', state.textSpacing);
            document.getElementById('acc-text-spacing').classList.toggle('acc-active', state.textSpacing);
            saveSettings();
        };
        const applyLinks = (on) => {
            state.links = on !== undefined ? on : !state.links;
            document.body.classList.toggle('acc-highlight-links', state.links);
            document.getElementById('acc-links').classList.toggle('acc-active', state.links);
            saveSettings();
        };
        const applyCursor = (on) => {
            state.cursor = on !== undefined ? on : !state.cursor;
            document.body.classList.toggle('acc-large-cursor', state.cursor);
            document.getElementById('acc-cursor').classList.toggle('acc-active', state.cursor);
            saveSettings();
        };
        const applySaturation = (val) => {
            if (val !== undefined) {
                state.saturation = val;
            } else {
                state.saturation = (state.saturation + 1) % 3;
            }
            document.documentElement.classList.toggle('acc-saturation-low', state.saturation === 1);
            document.documentElement.classList.toggle('acc-saturation-high', state.saturation === 2);
            document.getElementById('acc-saturation').classList.toggle('acc-active', state.saturation !== 0);
            saveSettings();
        };
        const applyDyslexia = (on) => {
            state.dyslexia = on !== undefined ? on : !state.dyslexia;
            document.body.classList.toggle('acc-dyslexia', state.dyslexia);
            document.getElementById('acc-dyslexia').classList.toggle('acc-active', state.dyslexia);
            saveSettings();
        };

        // ── Feature listeners ────────────────────────────────────────────────────
        document.getElementById('acc-contrast').addEventListener('click', () => applyContrast());
        document.getElementById('acc-grayscale').addEventListener('click', () => applyGrayscale());
        document.getElementById('acc-bigger-text').addEventListener('click', () => applyBiggerText());
        document.getElementById('acc-line-height').addEventListener('click', () => applyLineHeight());
        document.getElementById('acc-text-align').addEventListener('click', () => applyTextAlign());
        document.getElementById('acc-text-spacing').addEventListener('click', () => applyTextSpacing());
        document.getElementById('acc-links').addEventListener('click', () => applyLinks());
        document.getElementById('acc-cursor').addEventListener('click', () => applyCursor());
        document.getElementById('acc-saturation').addEventListener('click', () => applySaturation());
        document.getElementById('acc-dyslexia').addEventListener('click', () => applyDyslexia());

        // ── Reading Guide ────────────────────────────────────────────────────────
        const readingGuideMove = (e) => { guide.style.top = (e.clientY - 15) + 'px'; guide.style.display = 'block'; };
        const readingGuideTouch = (e) => { const t = e.touches[0]; guide.style.top = (t.clientY - 15) + 'px'; guide.style.display = 'block'; };
        const applyReadingGuide = (on) => {
            state.reading = on !== undefined ? on : !state.reading;
            document.getElementById('acc-reading').classList.toggle('acc-active', state.reading);
            if (state.reading) {
                guide.style.display = 'block';
                document.addEventListener('mousemove', readingGuideMove);
                document.addEventListener('touchmove', readingGuideTouch, { passive: true });
            } else {
                guide.style.display = 'none';
                document.removeEventListener('mousemove', readingGuideMove);
                document.removeEventListener('touchmove', readingGuideTouch);
            }
            saveSettings();
        };
        document.getElementById('acc-reading').addEventListener('click', () => applyReadingGuide());

        // ── Screen Reader helper ─────────────────────────────────────────────────
        let srLastHighlighted = null;

        function srSpeak(text) {
            if (!text || !text.trim()) return;
            speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(text.trim());
            utter.lang = 'en-IN';
            utter.rate = 1;
            speechSynthesis.speak(utter);
        }

        function srGetText(el) {
            return el.getAttribute('aria-label')
                || el.getAttribute('title')
                || (el.tagName === 'IMG' ? el.getAttribute('alt') : null)
                || el.innerText
                || '';
        }

        function srHighlight(el) {
            if (srLastHighlighted && srLastHighlighted !== el) {
                srLastHighlighted.style.removeProperty('background-color');
                srLastHighlighted.style.removeProperty('outline');
                srLastHighlighted.style.removeProperty('border-radius');
            }
            el.style.setProperty('background-color', '#ffe600', 'important');
            el.style.setProperty('outline', '2px solid #f59e0b', 'important');
            el.style.setProperty('border-radius', '3px', 'important');
            srLastHighlighted = el;
        }

        function srClearHighlight() {
            if (srLastHighlighted) {
                srLastHighlighted.style.removeProperty('background-color');
                srLastHighlighted.style.removeProperty('outline');
                srLastHighlighted.style.removeProperty('border-radius');
                srLastHighlighted = null;
            }
        }

        // iOS Safari requires speechSynthesis to be triggered inside a user gesture
        let srSpeechUnlocked = false;
        function srUnlockSpeech() {
            if (srSpeechUnlocked) return;
            const utter = new SpeechSynthesisUtterance('');
            speechSynthesis.speak(utter);
            srSpeechUnlocked = true;
        }

        function srHandleHover(e) {
            const el = e.target;
            const text = srGetText(el);
            if (text && text.trim()) {
                srHighlight(el);
                srSpeak(text);
            }
        }

        // Double-tap tracking for Screen Reader
        let srLastTapEl = null;
        let srLastTapTime = 0;
        const SR_DOUBLE_TAP_MS = 400; // ms window for double-tap

        function srHandleTouch(e) {
            srUnlockSpeech();
            const touch = e.changedTouches[0];
            const el = document.elementFromPoint(touch.clientX, touch.clientY);
            if (!el) return;

            const now = Date.now();
            const isDoubleTap = (now - srLastTapTime < SR_DOUBLE_TAP_MS) && (srLastTapEl === el || el.closest('a') === (srLastTapEl && srLastTapEl.closest && srLastTapEl.closest('a')));

            if (isDoubleTap) {
                // Double tap → navigate: find closest link and follow it
                const link = el.closest('a');
                if (link && link.href && link.href !== 'javascript:void(0)' && link.href !== '#') {
                    srClearHighlight();
                    speechSynthesis.cancel();
                    srLastTapEl = null;
                    srLastTapTime = 0;
                    if (link.target === '_blank') {
                        window.open(link.href, '_blank');
                    } else {
                        window.location.href = link.href;
                    }
                    return; // allow navigation, no preventDefault
                }
                // Double tap on non-link: just re-read
                srLastTapEl = null;
                srLastTapTime = 0;
            } else {
                // Single tap → read aloud only, block navigation
                e.preventDefault();
                const text = srGetText(el);
                if (text && text.trim()) {
                    srHighlight(el);
                    srSpeak(text);
                }
                srLastTapEl = el;
                srLastTapTime = now;
            }
        }

        const applyScreenReader = (on) => {
            state.screenReader = on !== undefined ? on : !state.screenReader;
            document.getElementById('acc-screen-reader').classList.toggle('acc-active', state.screenReader);
            if (state.screenReader) {
                srUnlockSpeech();
                if (!document.getElementById('acc-sr-style')) {
                    const srStyle = document.createElement('style');
                    srStyle.id = 'acc-sr-style';
                    srStyle.textContent = '*:focus { outline: 3px solid #f59e0b !important; outline-offset: 2px !important; }';
                    document.head.appendChild(srStyle);
                }
                document.body.addEventListener('mouseover', srHandleHover);
                document.body.addEventListener('touchend', srHandleTouch, { passive: false });
            } else {
                const srStyle = document.getElementById('acc-sr-style');
                if (srStyle) srStyle.remove();
                document.body.removeEventListener('mouseover', srHandleHover);
                document.body.removeEventListener('touchend', srHandleTouch);
                speechSynthesis.cancel();
                srClearHighlight();
            }
            saveSettings();
        };

        document.getElementById('acc-screen-reader').addEventListener('click', () => applyScreenReader());

        // ── Reset All ────────────────────────────────────────────────────────────
        const resetAll = () => {
            fontSize = 100; zoomLevel = 1;
            const fsStyle = document.getElementById('acc-font-size-style');
            if (fsStyle) fsStyle.textContent = '';
            document.getElementById('acc-panel').style.zoom = '';
            document.getElementById('acc-side-tab').style.zoom = '';
            document.getElementById('acc-font-val').textContent = '100%';
            document.body.style.zoom = '';
            document.getElementById('acc-zoom-val').textContent = '100%';

            document.documentElement.classList.remove('acc-high-contrast', 'acc-grayscale', 'acc-saturation-low', 'acc-saturation-high');
            document.body.classList.remove('acc-highlight-links', 'acc-large-cursor', 'acc-dyslexia', 'acc-line-height-high', 'acc-text-align-left', 'acc-text-spacing');

            Object.keys(state).forEach(k => { state[k] = false; });
            state.saturation = 0;

            document.querySelectorAll('.acc-feature-btn, .acc-profile-btn').forEach(btn => btn.classList.remove('acc-active'));

            guide.style.display = 'none';
            document.removeEventListener('mousemove', readingGuideMove);
            document.removeEventListener('touchmove', readingGuideTouch);
            const srStyle = document.getElementById('acc-sr-style');
            if (srStyle) srStyle.remove();
            document.body.removeEventListener('mouseover', srHandleHover);
            document.body.removeEventListener('touchend', srHandleTouch);
            speechSynthesis.cancel();
            srClearHighlight();

            deleteCookie('accSettings'); // Clear session cookie
        };

        document.getElementById('acc-reset').addEventListener('click', resetAll);

        // ── Restore State on Page Load ───────────────────────────────────────────
        if (fontSize !== 100) applyFontSize();
        if (zoomLevel !== 1) applyZoom();
        if (state.contrast) applyContrast(true);
        if (state.grayscale) applyGrayscale(true);
        if (state.biggerText) applyBiggerText(true);
        if (state.lineHeight) applyLineHeight(true);
        if (state.textAlign) applyTextAlign(true);
        if (state.textSpacing) applyTextSpacing(true);
        if (state.links) applyLinks(true);
        if (state.cursor) applyCursor(true);
        if (state.saturation !== 0) applySaturation(state.saturation);
        if (state.dyslexia) applyDyslexia(true);
        if (state.reading) applyReadingGuide(true);
        if (state.screenReader) applyScreenReader(true);
    }
}

const header = new Header();
header.render();