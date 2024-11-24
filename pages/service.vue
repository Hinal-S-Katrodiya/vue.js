<template>

    <body>
        <div class="navbar">
            <span>
                <img src="assets\visa-credit-card-logo-payment-mastercard-usa-visa.jpg" alt="">
                Bank Cards
            </span>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="about">About Us</a></li>
                <li><a href="service">Service</a></li>
                <li><a href="contact">Contact Us</a></li>
                <li><a href="login">Login</a></li>
            </ul>
        </div>


        <div class="container">
            <h1 class="heading">Our Services</h1>
            <div class="manager-sec">

                <div class="image"></div>
                <section class="contact-section">
                    <h1>Our Manager Will Contact You</h1>
                    <p>Pellentesque pretium urna ipsum, ut cursus justo vulputate vel. Etiam massa ex, auctor non
                        hendrerit quis.</p>
                    <p>Nullam vulputate venenatis ornare. Phasellus facilisis, elit bibendum ornare accumsan, ex sapien
                        consequat quam, eu tincidunt purus tortor nec libero. Integer ac volutpat urna. Suspendisse eget
                        pharetra leo. Orci varius natoque penatibus et magnis dis parturient montes.
                    </p>
                    <button class="details-button">Click for Detail</button>
                </section>

            </div>
        </div>

        <div class="ch-cards">
            <div class="choose-card">
                <h1>Choose Your Perfect Card</h1>
                <p>Customized offers fast and easy. Tell us who you are and what you like, to see what offers are
                    available
                    to you. It will only take a minute and won’t impact your credit score.</p>
                <a href="#" class="cta-button">Check for more offers</a>
                <div class="card-selection">
                    <div class="card">
                        <img src="assets/red.jpg" alt="Cash Rewards">
                        <div class="details">
                            <h2>Cash Rewards</h2>
                            <p>First Year Free</p>
                            <a href="#">Details Info</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="assets/yellow.jpg" alt="Travel Rewards">
                        <div class="details">
                            <h2>Travel Rewards</h2>
                            <p>10,000 Points</p>
                            <a href="#">Details Info</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="assets/blue.jpg" alt="Partner Rewards">
                        <div class="details">
                            <h2>Partner Rewards</h2>
                            <p>2,000 Points</p>
                            <a href="#">Details Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="featured-offers">
            <h2>Featured Offers from Our Partners</h2>
            <div class="offer-cards">
                <div class="cardss">
                    <h3>Capital One® Venture Rewards Credit Card</h3>
                    <p class="offer">Earn 50,000 Membership <br> Rewards® Points</p>
                    <img src="assets/card1.jpg" alt="Capital One Venture Card">
                    <p class="description">Earning unlimited 2% cash back could mean thousands of dollars each year
                        going back into your business.</p>
                    <a href="#" class="apply-btn">Apply Now</a>
                </div>
                <div class="cardss">
                    <h3>BankAmericard® <br> Credit Card</h3>
                    <p class="offer">20,000 online bonus points offer</p>
                    <img src="assets/card2.jpg" alt="BankAmericard Credit Card">
                    <p class="description">0% Introductory APR for 18 billing cycles for balance transfers made in the
                        first 60 days, then 11.74% - 21.74% Variable APR.</p>
                    <a href="#" class="apply-btn">Apply Now</a>
                </div>
                <div class="cardss">
                    <h3>Capital One® Cash Rewards Credit Card</h3>
                    <p class="offer">$100 online cash rewards <br> bonus offer</p>
                    <img src="assets/card3.jpg" alt="Capital One Cash Rewards Card">
                    <p class="description">One-time $100 cash bonus after you spend $500 on purchases within 3 months of
                        approval.</p>
                    <a href="#" class="apply-btn">Apply Now</a>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="footer_container">
                <div class="footer-content">
                    <div class="footer-section about">
                        <span>
                            <img src="assets\visa-credit-card-logo-payment-mastercard-usa-visa.jpg" alt="">
                            Bank Cards
                        </span>
                        <p>
                            It is the leading financial establishment providing high-quality international banking
                            services. Our success is attributed to our loyal customers. We provide reliable services
                            for you.
                        </p>
                    </div>

                    <div class="footer-section quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog Posts</a></li>
                            <li><a href="#">Pricing Plans</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="footer-section head-office">
                        <h2>Head Office</h2>
                        <ul>
                            <li>Bank Card, 343 Banking Lane, #2214 Cravel Street, NY</li>
                            <li>+1(213) 234 4567</li>
                            <li><a href="mailto:info@mail.com">info@mail.com</a></li>
                            <li><a href="mailto:info@support.com">info@support.com</a></li>
                        </ul>
                    </div>

                    <div class="footer-section latest-posts">
                        <h2>Latest Posts</h2>
                        <ul>
                            <li><a href="#">7 Banking Services That Can Save Retirees Money </a></li>
                            <li><a href="#">Stocks Could Surge 10% between Now And 2020 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2020 Bank Cards. All rights reserved. Design by W3layouts.
            </div>
        </footer>

    </body>

</template>


<script>
export default {
    name: 'ServicePage',
}
</script>

<style scoped>
@import url(service.css);
</style>