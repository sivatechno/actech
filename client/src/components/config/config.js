const dev = {
    API_URL: "http://localhost:5000"
    // API_URL: "http://150.230.237.50:5000"
}

const prod = {
    API_URL: "http://localhost:5000"
    // API_URL: "http://150.230.237.50:5000"
}
const config = process.env.NODE_ENV === 'development' ? dev : prod
export default config;