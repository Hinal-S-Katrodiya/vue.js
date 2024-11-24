import config from '@/helper/config';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${config.FULL_API_URL()}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Web_code": "P2I",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

        const data = await response.json();

        if (response.ok) {
            var userData1 = data.data;
            const Token = userData1.token;

            Cookies.set('userToken', Token);
            console.log('userToken', Token)

            var userData2 = userData1.razor_data;
            var userData3 = userData1.services;
            console.log(userData3)
            console.log(userData1)

            var userData = {
                phone: userData1.phone,
                name: userData1.name,
                email: userData1.email,
                balance: userData1.main_wallat,
                accNo: userData2.razor_account_no,
                ifscCcode: userData2.razor_ifsc_code,
                vpaId: userData2.razor_vpa_id,
                services: userData3
            }

            Cookies.set('values', JSON.stringify(userData));
            console.log('values', userData)

            Swal.fire({
                title: 'Success!',
                text: 'You have successfully logged in!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = '/dashboard';
            });

            return { success: true, data };
        } else {
            return { success: false, data };
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while logging in.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        console.error("An error occurred:", error);
        return { success: false, error }; ``
    }

};
