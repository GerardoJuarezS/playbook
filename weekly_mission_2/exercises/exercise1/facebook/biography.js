const biography = {
    nombre: "Gerardo Juárez Salmorán",
    presentacion: "soy ISC desde el 2018",
    amigos: 25,
    seguidores: 1664,
    pasatiempo: "leer jugar ver tv",
    publicaciones: "la vida es bella",
    fecha: "25-04-2022",
    likes:120,
    coments:12,
    getprofile: function (){
        return "Mi biografia, mi nombre es: " + this.nombre + " descripcion "+ this.presentacion + " Amigos:  " +this.amigos+ "  Seguidores:  "+this.seguidores;
    },
    getstatus: function (){
        return ` la ultima publicacion fue  ${this.fecha} con el post ${this.publicaciones} tiene ${this.likes} ::> me gusta y ${this.coments} ::> comentarios`
    },
};
console.log(biography.getprofile());
console.log(biography.getstatus());