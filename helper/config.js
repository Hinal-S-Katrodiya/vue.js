const config = {
    API_BASE_URL: "http://192.168.1.100:1111/",
    URL: "public/api",
    FULL_API_URL: function () {
        return `${this.API_BASE_URL}${this.URL}`;
    }
};

export default config;
