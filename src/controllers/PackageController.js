const prisma = require('../utils')

class PackageController {
    async create(request, response) {
        try {
            const {deliveryMan, requestDate, previusRequestDate, deliveryDate, status, deliveryAddress, photo} = request.body;

            const packageRegistration = await prisma.package.create({
                data: {
                    deliveryMan: deliveryMan,
                    requestDate: requestDate,
                    previusRequestDate: previusRequestDate,
                    deliveryDate: deliveryDate,
                    status: status,
                    deliveryAddress: deliveryAddress,
                    photo: photo
                }
            })

            return response.json(packageRegistration);
        } catch (e) { 
            return response.status(409).send();
        }
    }

    async update(request, response) {
        try {
            const {deliveryMan, requestDate, previusRequestDate, deliveryDate, status, deliveryAddress, photo} = request.body;
            const {id} = request.params;

            const editedPackage = await prisma.package.update({
                where: {
                    id: id
                },
                data: {
                    deliveryMan: deliveryMan,
                    requestDate: requestDate,
                    previusRequestDate: previusRequestDate,
                    deliveryDate: deliveryDate,
                    status: status,
                    deliveryAddress: deliveryAddress,
                    photo: photo
                }
            })

            return response.json(editedPackage);
        } catch (e) {
            console.log(e)
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const {id} = request.params;

            const deletedPackage = await prisma.package.delete({
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
            const packageRegistration = await prisma.package.findMany();

            return response.json(packageRegistration);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findById(request, response) {
        try {
            const {id} = request.params;

            const packageRegistration = await prisma.package.findUnique({
                where: {
                    id: id
                }
            });

            return response.json(packageRegistration);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = PackageController;