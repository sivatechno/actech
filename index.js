const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
// const http = require('http');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    exposedHeaders: ['x-auth-token'],
}
app.use(cors(corsOptions));
const db = require('./models');


//Routers

const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

const menteeRouter = require('./routes/Mentee');
app.use('/mentee', menteeRouter);

const mentorRouter = require('./routes/Mentors');
app.use('/mentorsOne', mentorRouter);

app.delete(`/mentors/:id`, mentorRouter);
db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("server is running on port 5000");
    })
})
// const express = require('express');
// const app = express();

// app.listen(5000);