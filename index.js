const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
// const http = require('http');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    // origin: 'http://ec2-65-0-86-209.ap-south-1.compute.amazonaws.com/',
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    exposedHeaders: ['x-auth-token'],
}
app.use(cors(corsOptions));
const db = require('./models');

// console.log(corsOptions);
//Routers

const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

const projectsRouter = require('./routes/Project');
app.use('/project', projectsRouter);

 app.delete(`/projects/:id`, projectsRouter);
 //app.use(`/project/getid/:id`, projectsRouter);

const associateProfileRouter = require('./routes/AssociateProfile');
app.use('/associateprofile', associateProfileRouter);

const menteeRouter = require('./routes/Mentee');
app.use('/mentee', menteeRouter);

const mentorRouter = require('./routes/Mentors');
app.use('/mentorsOne', mentorRouter);

app.delete(`/mentors/:id`, mentorRouter);
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("server is running on port 5000");
    });
});
// const express = require('express');
// const app = express();

// app.listen(5000);