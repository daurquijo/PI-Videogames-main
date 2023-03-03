
const { Router } = require('express');
// Importar todos los routers;
const videogamesRoutes = require('./videogamesRoutes')
const genreRoutes  = require('./genreRoutes')
const platforms = require('./platforms')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.use("/videogames", videogamesRoutes);
router.use("/genres", genreRoutes);
router.use("/platforms", platforms)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
