<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="#">BankCard</a>
            </div>
            <ul class="navbar-links">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">UserDetail</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <div class="navbar-user">
                <div class="user-dropdown">
                    <span @click="toggleDropdown">Vishal Patel</span>
                    <ul v-if="dropdownVisible" class="dropdown-menu">
                        <li><a href="profile">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <table class="user-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in userList" :key="user._id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.phone }}</td>
                    <td>
                        <button @click="openEditModal(user._id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal Section -->
    <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
            <h3>Edit User</h3>
            <div v-if="editUserDetails">
                <label><b>Name</b></label>
                <input v-model="editUserDetails.name" type="text" />

                <label><b>Username</b> </label>
                <input v-model="editUserDetails.username" type="text" />

                <label><b>Phone</b></label>
                <input v-model="editUserDetails.phone" type="text" />

                <label><b>Email</b></label>
                <input v-model="editUserDetails.email" type="text" />

                <label><b>Firstname</b></label>
                <input v-model="editUserDetails.firstname" type="text" />

                <label><b>Lastname</b></label>
                <input v-model="editUserDetails.lastname" type="text" />

                <label><b>User type</b></label>
                <input v-model="editUserDetails.user_type" type="text" />

                <label><b>Main_wallat</b></label>
                <input v-model="editUserDetails.main_wallat" type="text" />

                <label><b>Pos_wallat</b></label>
                <input v-model="editUserDetails.pos_wallat" type="text" />

                <label><b>aeps_wallat</b></label>
                <input v-model="editUserDetails.aeps_wallat" type="text" />

                <label><b>Status</b></label>
                <label class="switch">
                    <input type="checkbox" v-model="editUserDetails.status" :true-value="'A'" :false-value="'I'">
                    <span class="slider round"></span>
                </label>
                <div style="align-items: center; margin-top: 10px;">
                    <label style=" margin-right: 10px;"><b>aadhar_no</b></label>
                    <input v-model="editUserDetails.aadhar_no" type="text" />
                </div>
                <label><b>profile_completeness</b></label>
                <input v-model="editUserDetails.profile_completeness" type="text" />

                <label><b>updated_at</b></label>
                <input v-model="editUserDetails.updated_at" type="text" />

                <label><b>created_at</b></label>
                <input v-model="editUserDetails.created_at" type="text" />

                <label><b>kyc_issues_message</b></label>
                <input v-model="editUserDetails.kyc_issues_message" type="text" />

                <label><b>kyc_status</b></label>
                <input v-model="editUserDetails.kyc_status" type="text" />

                <label><b>last_login_time</b></label>
                <input v-model="editUserDetails.last_login_time" type="text" />

                <label><b>total_add_money</b></label>
                <input v-model="editUserDetails.total_add_money" type="text" />

                <label><b>total_expense</b></label>
                <input v-model="editUserDetails.total_expense" type="text" />

                <div class="button-group">
                    <button @click="updateUserDetails(editUserDetails._id)">Save changes</button>
                    <button @click="closeModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <span>Page {{ page }} of {{ displayedEntries }} of {{ totalEntries }} </span>
        <button @click="nextPage" :disabled="page >= totalPages">Next</button>
    </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
    name: 'Navbar',
    data() {
        return {
            dropdownVisible: false,
            userList: [],
            page: 1,
            limit: 4,
            totalPages: 1,
            totalEntries: 0,
            displayedEntries: 0,
            editUserDetails: null,
            isModalOpen: false,
        };
    },
    async mounted() {
        await this.fetchUserList();
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },

        async fetchUserList() {
            try {
                const sort_by = null;
                const sort_dir = null;
                const filters = {
                    services_ids: [],
                    status: "A"
                };
                const services_ids = [];
                const status = "A";
                const user_type = "RETAILER";
                const relations = {
                    parent: ["_id", "name", "username", "parent_id", "phone"]
                };
                const with_scheme_details = ["_id", "title"];

                const token = Cookies.get('userToken');
                const response = await fetch('http://192.168.1.100:1111/public/api/admin/user/list', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Web_code": "P2I",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        page: this.page,
                        limit: this.limit,
                        sort_by,
                        sort_dir,
                        filters,
                        services_ids,
                        status,
                        user_type,
                        relations,
                        with_scheme_details
                    })
                });

                const data = await response.json();
                if (response.ok) {
                    this.userList = data.data.data;

                    if (data.data && data.data.total) {
                        this.totalEntries = data.data.total;
                        this.totalPages = Math.ceil(this.totalEntries / this.limit);
                        this.displayedEntries = data.data.data.length;
                    } else {
                        console.log('Total count (total) is missing in the API response');
                        this.totalPages = 1;
                    }
                } else {
                    console.log('API for userList is not working properly');
                }

            } catch (error) {
                console.error("An error occurred while fetching userList:", error);
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
                this.fetchUserList();
            }
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchUserList();
            }
        },
        // Open Modal and fetch user details
        async openEditModal(userId) {
            try {
                const token = Cookies.get('userToken');
                const response = await fetch(`http://192.168.1.100:1111/public/api/admin/user/view/${userId}?withDetail=true`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Web_code": "P2I",
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    this.editUserDetails = data.data;
                    this.isModalOpen = true;
                } else {
                    console.error('Failed to fetch user details.');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        },
        // Close the modal
        closeModal() {
            this.isModalOpen = false;
            this.editUserDetails = null;
        },
        // Method to update the user details via API
        async updateUserDetails(userId) {
            if (!userId) {
                console.error("User ID is undefined.");
                return;
            }
            try {
                const token = Cookies.get('userToken');
                const response = await fetch(`http://192.168.1.100:1111/public//api/admin/user/update/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Web_code": "P2I",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(this.editUserDetails),
                });

                const data = await response.json();
                if (response.ok) {
                    console.log('User details updated successfully:', data);
                    this.isModalOpen = false;
                    await this.fetchUserList();
                } else {
                    console.error('Failed to update user details.');
                    console.log('Response:', data);
                }
            } catch (error) {
                console.error('Error updating user details:', error);
            }
        }
    }
};

</script>

<style scoped>
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

.form-group {
    margin-bottom: 1rem;
}

.required {
    color: red;
}

.input-container {
    display: flex;
    width: 350px;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 5px;
}

.main {
    margin-left: 100px;
    margin-top: 50px;
}

input {
    border: none;
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
}

.char-count {
    font-size: 0.8rem;
    margin-left: 10px;
    color: #666;
}

.button-group {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-continue,
.btn-clear {
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.btn-continue {
    background-color: #30c5b0;
    color: white;
}

.btn-clear {
    background-color: #2c2f34;
    color: white;
}

/* here */

input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-right: 10px;
}

button:nth-child(2) {
    background-color: #333;
    color: #fff;
}

.error {
    color: red;
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    width: 300px;
}

.modal-content h3 {
    margin-top: 0;
    font-size: 20px;
}

.modal-content button {
    padding: 10px 20px;
    margin-top: 10px;
}

.user-table {
    width: 80%;
    border-collapse: collapse;
}

.user-table th,
.user-table td {
    border: 1px solid #ccc;
    padding: 15px;
    text-align: left;
    font-size: large
}

.user-table th {
    background-color: #f2f2f2;
    font-size: larger
}

.pagination {
    /* display: flex;
    justify-content: center; */
    align-items: center;
    margin-top: 20px;
    margin-left: 440px;
    font-family: Arial, sans-serif;
}

.pagination button {
    background-color: #f0f0f0;
    /* Neutral background */
    border: 1px solid #ddd;
    color: #333;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.pagination button:hover {
    background-color: #007bff;
    /* Blue on hover */
    color: #fff;
    /* White text on hover */
}

.pagination button:disabled {
    background-color: #eaeaea;
    color: #aaa;
    cursor: not-allowed;
}

.pagination span {
    font-size: 16px;
    margin: 0 15px;
}

.pagination .active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

/* Input fields container */
.modal-content>div {
    /* This ensures inputs take up about half of the modal */
    min-width: 300px;
    margin-left: 30px;
}

/* Style for the services table container */
.model-service {
    flex: 1 1 45%;
    /* This ensures the services table takes up about half of the modal */
    min-width: 300px;
    margin-left: 20px;
}

/* Table styles */
.model-service table {
    width: 100%;
    border-collapse: collapse;
}

.model-service th,
.model-service td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
}

.model-service th {
    background-color: #f4f4f4;
}

/* Input fields styles */
input[type="text"] {
    width: 95%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Checkbox style */
input[type="checkbox"] {
    margin: 10px 0;
}

/* Close button */
.close-btn {
    background-color: #f44336;
}

.close-btn:hover {
    background-color: #d32f2f;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-right: 10px;
}

button:nth-child(2) {
    background-color: #333;
    color: #fff;
}

.switch-container {
    display: flex;
    align-items: center;
}

.switch-label {
    margin-left: 10px;
    font-weight: bold;
}

.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #4caf50;
}

input:checked+.slider:before {
    transform: translateX(18px);
}
</style>