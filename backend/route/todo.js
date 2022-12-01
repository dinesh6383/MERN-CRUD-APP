const User = require("../model/user.model");
const router = require("express").Router();

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      if (result) {
        res.json(result);
      }
    }
  });
});

router.post("/add/:id", (req, res) => {
  User.findById(req.params.id, (err, foundList) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const todoItem = {
        todo: req.body.todo,
      };
      foundList.todos.push(todoItem);
      foundList.save((err) => {
        if (err) {
          res.json(err);
        } else {
          res.send("Added todo 👍🏾");
        }
      });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  User.findById(req.params.id, (err, foundList) => {
    if (err) {
      res.status(400).json(err);
    } else {
      foundList.todos.pull({ _id: req.body._id });
      foundList.save((err) => {
        if (err) {
          res.json(err);
        } else {
          res.send("Item deleted");
        }
      });
    }
  });
});

router.post("/update/:id", (req, res) => {
  User.findById(req.params.id, (err, foundList) => {
    if (err) {
      res.status(400).json(err);
    } else {
      foundList.todos.map((val) => {
        if (val._id == req.body.id) {
          val.todo = req.body.todo;
        }
      });

      foundList.save((err) => {
        if (err) {
          res.json(err);
        } else {
          res.send("Updated success");
        }
      });
    }
  });
});

module.exports = router;
