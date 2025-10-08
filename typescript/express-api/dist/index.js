import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.status(401).json({
        ok: false,
        message: 'No tiene acceso'
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map