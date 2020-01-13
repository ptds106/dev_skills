const skills = [
    { skill: "HTML", done: true },
    { skill: "CSS", done: false },
    { skill: "JAVASCRIPT", done: false },
    { skill: "NODE/EXPRESS", done: false}
];

const getAll = () => {
    return skills;
};
const getOne = id => {
    return skills[id];
};
function deleteOne(id) {
    skills.splice(id, 1);
  }
  function create(skill) {
    skills.push(skill);
  }
// function edit(check) {
//     if(check === "on") skills.done = true;
// }
function update(id, string) {
    if(string === "on") {      
        skills[id].done = true;
    } else {
        skills[id].done = false;
    }
    return skills[id].done
}
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};