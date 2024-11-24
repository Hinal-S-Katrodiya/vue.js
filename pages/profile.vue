<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="#">BankCard</a>
            </div>
            <ul class="navbar-links">
                <li><a href="dashboard">Dashboard</a></li>
                <li><a href="#">Transactions</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <div class="navbar-user">
                <div class="user-dropdown">
                    <span @click="toggleDropdown">User Name</span>
                    <ul v-if="dropdownVisible" class="dropdown-menu">
                        <li><a href="profile">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="profile-page">
        <!-- User Info Section -->
        <div class="profile-header">
            <h2>User Profile</h2>
            <div class="user-info">
                <img class="profile-picture" src="assets/profile.jpg" alt="User Profile Picture" />
                <div class="info">
                    <!-- <p><strong>First Name:</strong> {{ userData.firstname }}</p> -->
                    <p>Name: {{ userData.name }}</p>
                    <p>Phone: {{ userData.phone }}</p>
                    <p>Email: {{ userData.email }}</p>
                </div>
            </div>
        </div>

        <div class="account-details">
            <h2>Account Information</h2>
            <p>Balance: {{ userData.balance }}</p>
            <p>Account No: {{ userData.accNo }}</p>
            <p>Ifsc Code: {{ userData.ifscCcode }}</p>
            <p>Vpa Id: {{ userData.vpaId }}</p>
        </div>

        <div class="services">
            <h2>Services</h2>
        </div>

        <div class="services">
            <table>
                <tr>
                    <th><b>Service Code</b></th>
                    <th><b>Is Active</b></th>
                </tr>
                <tr v-for="service in userData.services">
                    <td>{{ service.code }}</td>
                    <td>{{ service.is_active ? 'true' : 'false' }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            dropdownVisible: false,
            userData: {},
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
    },
    mounted() {
        const userTokenCookie = Cookies.get("userToken");
        console.log("User Token Cookie:", userTokenCookie);

        const userDataCookie = Cookies.get("values");
        console.log(userDataCookie);

        if (userDataCookie) {
            try {
                this.userData = JSON.parse(userDataCookie);
                console.log("Parsed User Data:", this.userData);
            } catch (error) {
                console.error("Error parsing user data from cookie:", error);
            }
        } else {
            console.log("No user data cookie found");
        }
    },
};

</script>

<style scoped>
h2 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.navbar {
    background-color: #2c3e50;
    color: white;
    padding: 15px;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-logo a {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}

.navbar-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.navbar-links li a:hover {
    color: #18bc9c;
}

.navbar-user {
    position: relative;
}

.user-dropdown {
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    background-color: white;
    color: #2c3e50;
    border: 1px solid #ccc;
    list-style: none;
    padding: 10px 0;
    margin-top: 10px;
}

.dropdown-menu li {
    padding: 10px 20px;
}

.dropdown-menu li a {
    color: #2c3e50;
    text-decoration: none;
}

.dropdown-menu li a:hover {
    background-color: #18bc9c;
    color: white;
}

.dropdown-menu {
    z-index: 1000;
}


.profile-page {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.user-info {
    display: flex;
    align-items: center;
}

.profile-picture {
    width: 200px;
    height: 150px;
    border-radius: 0%;
    margin-right: 20px;
    margin-left: 20px
}

.info h3 {
    margin: 0;
    font-size: 1.8rem;
}

.account-details,
.transaction-history {
    margin-top: 20px;
}

.transaction-table {
    width: 100%;
    border-collapse: collapse;
}

.transaction-table th,
.transaction-table td {
    padding: 10px;
    border: 1px solid #ddd;
}

.transaction-table th {
    background-color: #2c3e50;
    color: white;
}

table,
tr,
td,
th {
    border: 1px solid black;
    border-collapse: collapse;

}

td,
th {
    padding: 15px;
}

th {
    font-size: large;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>