const { validationResult } = require('express-validator');
const db = require('../database/models');

const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            const  { name, email, pass } = req.body;

            db.Users.create({
                name: name.trim(),
                email,
                pass: bcrypt.hashSync(pass, 12),
                
            })
            .then(() => res.redirect('/users/login'))
            .catch(error => res.send(error))
        } else {
            return res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            res.send(req.body)
        } else {
            return res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }

    },
    logout: (req, res) => {

    },
    profile: (req, res) => {

    }
}