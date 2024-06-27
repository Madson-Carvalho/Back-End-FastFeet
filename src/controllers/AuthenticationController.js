const prisma = require('../utils')
const jwt = require("jsonwebtoken");

class AuthenticationController {
    async login(request, response) {
        try {
            const {email, password} = request.body;

            const user = await prisma.users.findUnique({
                where:{
                    password: password,
                    email: email,
                }
            })

            if (!user) {
                return response.status(401).json({ error: 'User or Password Incorrected' });
            }

            const token = jwt.sign({ id: user.id }, "123", {
                expiresIn: '60m',
            });

            return response.status(200).json({token, perfil: user.perfil});

        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = AuthenticationController;