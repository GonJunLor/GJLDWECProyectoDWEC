
export class Persona{
    #apellidos; // # para poner privado
    empleo;
    static valor=123;

    constructor(n,a,f){
        this.nombre = n;
        this.#apellidos = a;
        this.nacimiento=f;
    }
    
    getApellidos(){
        return this.#apellidos;
    }

    get edad(){
        let hoy = new Date();
        return hoy.getFullYear()-this.nacimiento;
    }


    saludar(){
        console.log("hola ");
    }

    static despedirse(){
        console.log("adios " + this.nombre);
    }

}

Persona.hola="aaa";
var p1 = new Persona("pepe", "lopez","1960");
p1.empleos = "cajero";

console.log(Persona.valor);

console.log(p1.getApellidos());
console.log(p1.edad);

console.log(Persona.despedirse());

export class Nino extends Persona{
    camina = false;
    constructor(n,a,f,cam){
        super(n,a,f);
        this.camina = cam;
    }

    saludar(){
        super.saludar();
        console.log("Hola soy el niño " + this.nombre)
    };
}

// n1 = new Nino("pepe", "dos", "2000", true)
// console.log(n1.saludar());
