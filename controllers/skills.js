const Skill = require("../models/skill");
const index = (req, res) => {
  res.render("skills/index", {
    skills: Skill.getAll(),
    time: req.time
  });
};
const show = (req, res) => {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
};
function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  req.body.done = false;
  Skill.create(req.body);
  res.redirect("/skills");
}
function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

const update = (req, res) => {
  Skill.update(req.params.id, req.body.done)
      res.redirect(`/skills/${req.params.id}`)
    }

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  update
};
