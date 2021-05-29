export interface  FormularioModelInter{
    nombre: string,
    apellido: string,
    idt: string,
    cedula: number,
    sexo: string,
    edad:number,
    grupoEtnico: string,
    resguardo: any,
    cabillo: any,
    consejocomunitario: any,
    orgAftocolombia:  any,
    otroPert: any,
    direccion: string,
    municipio: string,
    telefono: number,
    correo: string,
    hogar: string,
    proceso: any,
    discapacidad: string,
    nombreorganizacion: string,
    cargorol: string,
    puebloindigena:any,
    firma: string,
}

export class FormularioModel implements FormularioModelInter{
    private _id:any;
   public nombre:string;
   public  apellido: string;
   public  idt: string;
    private  _cedula: number;
    public  sexo: string;
    public  edad:number;
    public  grupoEtnico: string;
    public  resguardo: any;
    public  cabillo: any;
    public  consejocomunitario: any;
    public  orgAftocolombia:  any;
    public  otroPert: any;
    public  direccion: string;
    public  municipio: string;
    public  telefono: number;
    public  correo: string;
    public  hogar: string;
    public proceso: any;
    public discapacidad: string;
    public nombreorganizacion: string;
    public cargorol: string;
    public puebloindigena:any;
    public firma: string;
    constructor(   
        nombre: string,
        apellido: string,
        idt: string,
        cedula: number,
        sexo: string,
        edad:number,
        grupoEtnico: string,
        resguardo: any,
        cabillo: any,
        puebloindigena:any,
        consejocomunitario: any,
        orgAftocolombia:  any,
        otroPert: any,
        direccion: string,
        municipio: string,
        telefono: number,
        correo: string,
        hogar: string,
        proceso: any,
        discapacidad: string,
        nombreorganizacion: string,
        cargorol: string,

        firma: string,
        id?:any ) {
            this.nombre = nombre
            this.apellido = apellido
            this.idt = idt
            this._cedula = cedula
            this.sexo=sexo
            this.edad=edad
            this.grupoEtnico = grupoEtnico
            this.resguardo = resguardo
            this.cabillo = cabillo
            this.consejocomunitario = consejocomunitario
            this.orgAftocolombia = orgAftocolombia
            this.otroPert = otroPert
            this.direccion= direccion
            this.municipio = municipio
            this.telefono =telefono
            this.correo = correo
            this.hogar = hogar
            this.proceso = proceso
            this.discapacidad =discapacidad
            this.nombreorganizacion =nombreorganizacion
            this.cargorol = cargorol
            this.puebloindigena = puebloindigena
            this.firma = firma
            this._id = id
        }

        get cedula(): number {
            return this._cedula;
        }
        set cedula(value: number) {
            this._cedula = value;
        }

        get id(): string {
            return this._id;
        }
        set id(value: string) {
            this._id = value;
        }
}