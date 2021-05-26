
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    mongoose
        .connect(`mongodb+srv://t-handsbkv:adminthands@cluster0.hv2w9.mongodb.net/t-hands?retryWrites=true&w=majority`)
        .then( () => {
            const server = express();
            server.get('/graph',(req,res)=>res.send("test"))
            server.all('*', (req, res) => {
                return handle(req, res)
            })
            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${port}`)
            })
            console.log('MongoDB connected successfully')
        })
        .error( () => {
            console.error('Error while connecting to MongoDB');
        })

})
