const express = require ('express');
const router = express.Router();
const barangController = require('./barangController');

router.get('/', barangController.getAllBarangs);
router.get("/:id_barang", barangController.getBarangById);
router.post('/', barangController.createBarang);
router.put('/:id_barang', barangController.updateBarang);
router.delete('/:id_barang', barangController.deleteBarang);

module.exports = router;