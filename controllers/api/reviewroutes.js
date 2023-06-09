const router = require("express").Router();
const { Review } = require("../../models");

// ------------ create a comment -------------

router.post("/newreview", async (req, res) => {
  let date = new Date();
  let today_date = date.toLocaleString();

  try {
    const newRev = await Review.create({
      date: today_date,
      park_id: req.body.park_id,
      user_name: req.session.currentuser,
      rating: req.body.rating,
      content: req.body.content,
    });
    res.status(200).json(newRev);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/deletereview", async (req, res) => {
  try {
    const delRev = await Review.destroy({
      where: {
        id: req.body.rev_id,
      },
    });
    res.status(200).json(delRev);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/updaterev", async (req, res) => {
  try {
    const revupdate = await Review.update(req.body, {
      where: {
        id: req.body.rev_id,
      },
    });
    res.status(200).json(revupdate);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
