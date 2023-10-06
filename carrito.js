class Carrito {
  constructor(productos) {
    this.productos = productos;
    this.itemsSeleccionados = [];
  }
  agregarItem(id) {
    this.itemsSeleccionados.push(this.productos[id]);

    this.mostrarItems();
  }
  EliminarItem(id) {
    console.log(this.itemsSeleccionados);
    this.itemsSeleccionados.slice(id, 1);
    console.log(this.itemsSeleccionados.splice(id, 1));
    this.mostrarItems();
  }
  mostrarItems() {
    let productosCodigoHTML = "";
    let total = 0;
    for (let i = 0; i < this.itemsSeleccionados.length; i++) {
      let productoSeleccionado = `<li class="list-group-item d-flex flex-row justify-content-evenly align-items-center">
        <img
          src="${this.itemsSeleccionados[i].img}"
          class="item-img"
          alt="..."
        />
        <p>${this.itemsSeleccionados[i].name}</p>
        <p><i>${this.itemsSeleccionados[i].precio}</i></p>
        <button type="button" class="btn btn-danger" onclick="eliminarClick(${i});">Eliminar</button>
      </li>`;
      productosCodigoHTML += productoSeleccionado;
      total += this.itemsSeleccionados[i].precio;
    }
    document.getElementById("carrito-compras-lista").innerHTML = productosCodigoHTML;
    console.clear();
    console.log(total);
  }
}
