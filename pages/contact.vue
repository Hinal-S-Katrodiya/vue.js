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
            <h1 class="heading">Contacts</h1>
            <section class="contact">
                <div class="contact-heading">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br> incididunt
                        ut
                        labore et dolore magna aliqua</p>
                </div>
                <div class="container">
                    <div class="contact-details">
                        <div class="contact-item">
                            <img src="assets/home.png" alt="">
                            <h3>Address:</h3>
                            <p>New York, Street Avenue, NY 25400</p>
                        </div>
                        <div class="contact-item">
                            <img src="assets/email.png" alt="">
                            <h3>Email:</h3>
                            <p>info@example.com</p>
                        </div>
                        <div class="contact-item">
                            <img src="assets/telephone.png" alt="">
                            <h3>Phone:</h3>
                            <p>800-123-4567</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="company">
                <section class="send-message">
                    <h2>Send Message</h2>
                    <form @submit.prevent="validateForm">
                        <div class="input-group">
                            <input type="text" placeholder="Your Name" v-model="name" />
                            <!-- <span v-if="errors.name" class="error">{{ errors.name }}</span> -->

                            <input type="email" placeholder="Your Email" v-model="email" />
                            <!-- <span v-if="errors.email" class="error">{{ errors.email }}</span> -->
                        </div>
                        <div class="input-group">
                            <textarea placeholder="Your Message" v-model="message"></textarea>
                            <!-- <span v-if="errors.message" class="error">{{ errors.message }}</span> -->
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="agreement" v-model="isAgreed" />
                            <label for="agreement">
                                I agree that my submitted data is being collected and stored
                            </label>
                            <!-- <span v-if="errors.isAgreed" class="error">{{ errors.isAgreed }}</span> -->
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </div>
        </div>
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
    name: 'ContactPage',
}

</script>

<style scoped>
@import url(contact.css);
</style>