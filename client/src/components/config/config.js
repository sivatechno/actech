const dev={
    API_URL:"http://ec2-65-0-86-209.ap-south-1.compute.amazonaws.com:5000"
}

const prod={
    API_URL:"http://ec2-65-0-86-209.ap-south-1.compute.amazonaws.com:5000"
}
const config=process.env.NODE_ENV=='development'?dev:prod
export default  config;