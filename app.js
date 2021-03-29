const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(` hello world ${ process.env.TESTING } `);
});

app.get('/prisma/all', async(req, res) => {
    try {
        let data = await prisma.writable.findMany();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.route('/prisma/single/:id')
    .get(async(req, res) => {
        try {
            let { id } = req.params;
            const getWritable = await prisma.writable.findUnique({
                where: {
                    writable_id: parseInt(id)
                }
            });
            res.status(200).send(getWritable);
        } catch (err) {
            res.status(500).send(err.message);
        }
    })
    .put(async(req, res) => {
        try {
            let { id } = req.params;
            const updateWritable = await prisma.writable.update({
                where: { writable_id: parseInt(id) },
                data: { data: `updated item at position ${ id }` },
            });
            res.status(200).send(updateWritable);
        } catch (err) {
            res.status(500).send(err.message);
        }
    })
    .delete(async(req, res) => {
        try {
            let { id } = req.params;
            const deleteWritable = await prisma.writable.delete({
                where: { writable_id: parseInt(id) }
            });
            res.status(200).send('item deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    })

app.post('/prisma/single/add', async(req, res) => {
    try {
        await prisma.writable.create({
            data: {
                data: 'some data goes here'
            },
        });
        res.status(201).send('added data');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => console.log(`Example app listening at ${ port }`));