const pullrequest = {
    title: "Se agrego el modulo de pruebas",
    branchName: "Edicion1",
    dateCreated: "10-abril-2022",
    status: "Open",
    repositoryNameAssociated: "BackendLaunchX",
    getStatus: function(){
        return "El estado del repositorio esta "+this.status;
    },
    getTitleAndAutor: function(){
        return ` El nombre del repositorio es  ${this.getStatus} y se agrego a la rama ${this.branchName} para su validacion, el estado actual del repositorio es ${this.getStatus}`
    }
}

console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAutor());