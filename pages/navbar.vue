<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="#">BankCard</a>
            </div>
            <ul class="navbar-links">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Transactions</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <div class="navbar-user">
                <div class="user-dropdown">
                    <span @click="toggleDropdown">User Name</span>
                    <ul v-if="dropdownVisible" class="dropdown-menu">
                        <li><router-link to="/profile">Profile</router-link></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            dropdownVisible: false
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        }
    }
};
</script>

<style>
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
</style>