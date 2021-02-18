const bcrypt = require('bcryptjs');
const { User } = require("./app/models");
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            var user = await User.findOne({ where: { id: id } });
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        async (username, password, done) => {
            try {
                var user = await User.findOne({ where: { email: username } });

                // usuário inexistente
                if (!user) { return done(null, false) }

                // comparando as senhas
                const isValid = bcrypt.compareSync(password, user.password);
                if (!isValid) return done(null, false)
                
                return done(null, user)
            } catch (err) {
                done(err, false);
            }
        }
    ));
}