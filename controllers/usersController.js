const Story = require("../models/story");
const User = require("../models/user");

module.exports = {
  index,
  showOne,
  showAll,
  redirect,
  update,
};

async function index(req, res) {
  res.render("user", { title: "User Login" });
}

async function redirect(req, res) {
  try {
    const userId = req.user ? req.user.id : undefined;
    if (!userId) {
      await res.redirect("/users/all");
    } else {
      await res.redirect(`/users/${userId}`);
    }
  } catch (err) {
    res.send(err);
  }
}

async function showOne(req, res) {
  try {
    const userId = req.params.id ? req.params.id : undefined;
    if (!userId) {
      res.redirect("/users/all");
    } else {
      const profUser = await User.findById(userId);
      console.log();
      res.render(`userProfiles/profile`, { profUser });
    }
  } catch (err) {
    console.log(err);
  }
}

// SHOW ALL IS FOR ALL PROFILES
async function showAll(req, res) {
  res.render(`userProfiles/index`);
}

async function update(req, res) {
  try {
    const updateFields = {};

    if (req.body.displayName) {
      updateFields["profile.displayName"] = req.body.displayName;
    }
    if (req.body.displayEmail) {
      updateFields["profile.email"] = req.body.displayEmail;
    }
    if (req.body.aboutMe) {
      updateFields["profile.aboutMe"] = req.body.aboutMe;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateFields },
      { new: true }
    );

    await res.redirect(`/users/${updatedUser.id}`);
  } catch (err) {
    console.log(err);
  }
}
