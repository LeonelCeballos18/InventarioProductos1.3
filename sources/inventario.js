class Inventario{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo){
        if (this.primero==null)
            this.primero=nuevo;
        else{
            let temp=this.primero;
        while (temp.siguiente!=null)
            temp=temp.siguiente;
            temp.siguiente=nuevo;
        }
    }

    eliminar(code){
        let aux = this.primero;
        if(this.primero !== null){
            if(this.primero.codigo === code){
                this.primero = null;
                this.primero = aux.siguiente;
            }
            while(aux.siguiente != null){
                if(aux.siguiente.codigo === code){
                    aux.siguiente = aux.siguiente.siguiente;
                    break;
                }
                aux = aux.siguiente;
            }
        }
    }

    buscar(code){
        let aux = this.primero;
        while(aux !== null){
            if(aux.codigo === code){
                return aux;
            }
            aux=aux.siguiente;
        }
        return null;
    }

    listar(){
        let lista = "";
        this.inventario.forEach((inv, i) => {
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$ <br>`;
        });
        return lista;
    }

    listadoInverso(){
        let lista = "";
        for(let i=this.inventario.length-1; i>=0; i--){
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$/ <br>`;
        }
        return lista;
    }
}