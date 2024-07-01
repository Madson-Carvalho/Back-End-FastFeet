const prisma = require('../utils')
const e = require("express");

class RecipientController {
    async create(request, response) {
        try {
            const { name, cpf, phone, email, address } = request.body;

            const recipient = await prisma.recipient.create({
                data: {
                    name: name,
                    cpf: cpf,
                    phone: phone,
                    email: email,
                    address: address,
                }
            })

            return response.json(recipient);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async update(request, response) {
        try {
            const { name, cpf, phone, email, address } = request.body;
            const { id } = request.params;

            const editeRecipient = await prisma.recipient.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    cpf: cpf,
                    phone: phone,
                    email: email,
                    address: address,
                }
            })

            return response.json(editeRecipient);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;

            const deleteRecipient = await prisma.recipient.delete({
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
            const recipient = await prisma.recipient.findMany();

            return response.json(recipient);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findById(request, response) {
        try {
            const { id } = request.params;

            const recipient = await prisma.recipient.findUnique({
                where: {
                    id: id
                }
            });

            return response.json(recipient);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async countRecipients(request, response) {
        try {
            const countRecipients = await prisma.recipient.count();

            return response.json({
                resource: 'destinatarios',
                quantity: countRecipients
            });
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = RecipientController;