const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
        .notEmpty()
        .withMessage('El nombre es requerido'),

    check('email')
        .isEmail()
        .withMessage('Debes escribir un email válido'),

    body('email').custom(value => {
        return db.Users.findOne({
            were: {
                email: value
            }
        })
        .then(user => {
            if(user) {
                return Promise.reject('Este email ya está registrado');
            }
        })
    }),

    check('pass')
        .isLength({
            min: 6,
            max: 12
        })
        .withMessage('La contraseña debe tener un minimo de 6 y maximo de 12 caracteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass ? false : true)
        .withMessage('Las contraseñas no coinciden'),

    check('bases')
        .isString('on')
        .withMessage('Debes aceptar las bases y condiciones')
]