const router = require("express").Router();
const {postTask,getTasks,getTask,putTask,deleteTask} = require("../controllers/task.controller");

router.post("/", postTask);
 router.get("/", getTasks);
// router.get("/:id",getTask);
// router.put("/:id",putTask);
 router.delete("/:id",deleteTask);

module.exports = router;
