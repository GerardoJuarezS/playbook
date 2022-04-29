const issue = {
  title: "para que son las clases en javascript?",
  repositorynameassociated: "LaunchX",
  status: "active",
  numberofcomments: 150,
  labels: "NodeJS",
  author: "GerardoJuarezS",
  datecreated: "5-mar-2022",
  lastupdated: "10-mar-2022",
  getTitleAndAuthor: function () {
    return this.title +"  "+ "El autor es " + this.author;
  },
  getGeneralInfo: function () {
    return `´This repository ${this.repositorynameassociated} was created by ${this.author} in the ${this.datecreated} was update in the ${this.lastupdated} this label is ${this.labels} with the number of comments is ${this.numberofcomments} this status the this issue is ${this.status}`;
  },
};
console.log("***Datos del Issue: *** " + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());