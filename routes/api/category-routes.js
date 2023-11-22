const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });
    return res.json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!catData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    return res.json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    return res.json(newCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCat = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updatedCat) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    return res.json(updatedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCat = await Category.destroy({ where: { id: req.params.id } });

    if (!deletedCat) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    return res.json(deletedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
