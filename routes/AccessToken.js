const express = require('express');
const router = express.Router();
const { Users, AccessToken } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

router.post('/', async (req, res) => {

})

module.exports = router;