const prisma = require('../utils')
const e = require("express");

class UsersController {
    async create(request, response) {
        try {
            const {name, email, cpf, password, perfil, phone, address} = request.body;

            const user = await prisma.users.create({
                data: {
                    name: name,
                    email: email,
                    cpf: cpf,
                    password: password,
                    perfil: perfil,
                    phone: phone,
                    address: address
                }
            })

            return response.json(user);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async update(request, response) {
        try {
            const {name, email, cpf, password, perfil, phone, address} = request.body;
            const {id} = request.params;

            const editedUser = await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    email: email,
                    cpf: cpf,
                    password: password,
                    perfil: perfil,
                    phone: phone,
                    address: address
                }
            })

            return response.json(editedUser);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const {id} = request.params;

            const deletedUser = await prisma.users.delete({
                where: {
                    id: id
                }
            });

            return response.json();
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findAll(request, response) {
        try {
            const users = await prisma.users.findMany();

            return response.json(users);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findById(request, response) {
        try {
            const {id} = request.params;

            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            return response.json(user);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async countUsers(request, response) {
        try {
            const countUsers = await prisma.users.count();

            return response.json({
                resource: 'entregadores',
                quantity: countUsers
            });
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findAllPackagesUser(request, response) {
        try {
            const {id} = request.params;

            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            const users = await prisma.users.findMany({
                include: {
                    Users: true
                }
            });

            const packages = users.filter()





            return response.json(users);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = UsersController;
