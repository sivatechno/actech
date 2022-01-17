const dev = {
    API_URL: "http://localhost:5000"
    // API_URL: "http://ec2-3-110-115-5.ap-south-1.compute.amazonaws.com:5000"
}

const prod = {
    API_URL: "http://localhost:5000"
    // API_URL: "http://ec2-3-110-115-5.ap-south-1.compute.amazonaws.com:5000"
}
const config = process.env.NODE_ENV === 'development' ? dev : prod
export default config;