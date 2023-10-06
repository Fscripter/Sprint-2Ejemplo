let listaProductos = [
  {
    name: "Arroz Diana",
    precio: 2800,
    descripcion: "1 lb arroz Diana",
    img: "https://http2.mlstatic.com/D_NQ_NP_633777-MCO48617012783_122021-O.webp",
  },
  {
    name: "Lentejas",
    precio: 2800,
    descripcion: "1 lb lentejas",
    img: "https://img.freepik.com/foto-gratis/lentejas_1368-8872.jpg?w=360",
  },
  {
    name: "Huevo",
    precio: 700,
    descripcion: "1 Huevo",
    img: "https://img.freepik.com/foto-gratis/huevos-marrones_2829-13455.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1696377600&semt=ais",
  },
];

function hiceClick(id) {
  console.log("diste click", id);
  eCommerceShop.agregarItem(id);
}
function eliminarClick(id) {
  console.log("diste click", id);
  eCommerceShop.EliminarItem(id);
}

function mostrarProductos() {
  let productosCodigoHTML = "";
  for (let i = 0; i < listaProductos.length; i++) {
    let producto = `<div class="card d-flex" style="width: 18rem">
    <img
      src="${listaProductos[i].img}"
      class="card-img-top d-flex align-self-center"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${listaProductos[i].name}</h5>
      <p class="card-text">
      ${listaProductos[i].descripcion}
      </p>
      <p class="card-text">${listaProductos[i].precio}</p>
      <a href="#" class="btn btn-primary" onclick="hiceClick(${i});">Comprar</a>
    </div>
  </div>`;
    productosCodigoHTML += producto;
  }
  document.getElementById("Catalogo-productos").innerHTML = productosCodigoHTML;
}

mostrarProductos();

let eCommerceShop = new Carrito(listaProductos);
