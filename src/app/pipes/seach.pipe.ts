import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seach'
})
export class SeachPipe implements PipeTransform {
  transform(value: [], args: string): any {
    if(args.length>0){
      const txt = args.toLowerCase()
      let  data  = value.filter((datos:any)=>{
      return datos.apellido.toLowerCase().includes(txt)
      ||  datos.nombre.toLowerCase().includes(txt)
      ||  datos.correo?.toLowerCase().includes(txt)
      ||  datos.cedula?.toString().toLowerCase().includes(txt)

      }
      )
      return data
    }
  
    return value;
  }

}
