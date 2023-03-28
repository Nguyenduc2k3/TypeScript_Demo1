"use strict";
// exports.__esModule = true;
var getData = function (props) {
    return props;
};
var project = {
    id: "1",
    name: "abc",
    image: "http://..."
};
getData(project);
var projectList = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" }
];
var listProject = function (projects) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n                Du an\n            ";
        }).join("");
    }
};
// listProject(projectList)
var updateProject = function (projects, id) {
    var currentProject = projects.find(function (item) { return item.id == id; });
    if (currentProject) {
        currentProject.id = id;
        currentProject.name = "Update";
    }
    return projects;
};
console.log(updateProject(projectList, 1));
