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

        <div class="login-container">
            <form @submit.prevent="handleLogin(); login();">
                <div class="input-group">
                    <input type="email" v-model="email" placeholder="Email" required />
                </div>
                <div class="input-group">
                    <input type="password" v-model="password" placeholder="Password" required />
                </div>

                <button type="submit" class="sign-in-button">Sign in</button>
            </form>
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

export const LoginPage = {
    name: 'LoginPage',
};

import { loginUser } from '/helper/apiHelper';

export default {
    data() {
        return {
            email: 'vishal@gmail.com',
            password: '12345',
        };
    },
    methods: {
        handleLogin() {
            // console.log("Email:", this.email);
            // console.log("Password:", this.password);
        },
        async login() {
            const { success, data, error } = await loginUser(this.email, this.password);
            if (success) {
                console.log("Login successful:", data);
            } else {
                console.error("Login failed:", error || data);
            }
        }
    }
};

</script>

<style scoped>
@import url(login.css);
</style>
