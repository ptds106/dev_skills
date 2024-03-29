const skillsCtrl = require("../controllers/skills");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id/update', skillsCtrl.update)
module.exports = router;
