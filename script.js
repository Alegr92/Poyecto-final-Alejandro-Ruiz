let total = 0;
let opcion = 0;
let carrito = [];
let products = [
  {
    id: "1",
    titulo: "Mario Odyssey",
    precio: 14000,
    cantidad: 1,
  },
  {
    id: "2",
    titulo: "Pokemon Arceus",
    precio: 16000,
    cantidad: 1,
  },
  {
    id: "3",
    titulo: "Animal Crossing",
    precio: 13000,
    cantidad: 1,
  },
  {
    id: "4",
    titulo: "Mario Kart 8",
    precio: 14000,
    cantidad: 1,
  },
];

// DECLARACION DE FUNCIONES////////////////////////////////////////////////////////////////////////////

function validarMenu(opcion) {
  while (
    opcion !== "1" &&
    opcion !== "2" &&
    opcion !== "3" &&
    opcion !== "4" &&
    opcion !== "0"
  ) {
    alert("Opcion no valida, ingrese nuevamente");
    opcion = prompt(
      "Ingrese una opcion\n1-Mostrar Productos\n2-Agregar un producto al carrito\n3-Eliminar un producto del carrito\n4-Realizar compra\n0-Salir\n\nPorfavor recuerde el ID del producto que desee comprar"
    );
  }
  return opcion;
}

function mostrarProductos(products) {
  let vista = [];
  products.forEach((obj) => {
    vista.push(
      "ID:" + obj.id + " " + obj.titulo + " " + "Precio:" + obj.precio
    );
  });
  alert(vista[0] + "\n" + vista[1] + "\n" + vista[2] + "\n" + vista[3]);
}

function validarId(id) {
  while (id !== "1" && id !== "2" && id !== "3" && id !== "4") {
    alert("ID inexistente, porfavor seleccione un ID adecuada");
    id = prompt("Ingrese el ID del producto que desee agregar al carrito");
  }
  return id;
}

function agregarProducto(products, carrito, id) {
  id2 = validarId(id);
  let existe = carrito.some((obj) => obj.id === id2);
  if (existe) {
    carrito.forEach((obj) => {
      if (obj.id === id2) {
        obj.cantidad++;
      }
    });
  } else {
    carrito.push(products[id2 - 1]);
  }
}

function eliminarCarrito(id, carrito) {
  let cortarWhile = 1;
  while (cortarWhile != 0) {
    let existe = carrito.some((obj) => obj.id === id);
    if (existe) {
      let item = carrito.find((obj) => obj.id === id);
      let index = carrito.indexOf(item);
      carrito.splice(index, 1);
      cortarWhile = 0;
    } else {
      alert("ID inexistente en el carrito, porfavor seleccione un ID adecuada");
      id = prompt("Ingrese el ID del producto que desee Eliminar del carrito");
    }
  }
}

function mostrarCompra(carrito) {
  carrito.forEach((obj) => {
    alert(
      obj.titulo +
        " Precio unitario: " +
        obj.precio +
        " Sub total: " +
        obj.precio * obj.cantidad
    );
    total += obj.precio * obj.cantidad;
  });
  alert("El total a pagar es de: " + total + "\nGracias por su compra!");
}

// EJECUCION DEL SCRIPT//////////////////////////////////////////////////////////////////////////////////////////

alert(
  "Bienvenido a GameOver Games\nPorfavor recuerde el ID del producto que desee comprar"
);

do {
  opcion = prompt(
    "Ingrese una opcion\n1-Mostrar Productos\n2-Agregar un producto al carrito\n3-Eliminar un producto del carrito\n4-Realizar compra\n0-Salir\n\nPorfavor recuerde el ID del producto que desee comprar"
  );
  opcion = validarMenu(opcion);

  switch (opcion) {
    case "1":
      mostrarProductos(products);
      break;
    case "2":
      let id = prompt(
        "Ingrese el ID del producto que desee agregar al carrito"
      );
      agregarProducto(products, carrito, id);
      console.table(carrito);
      break;
    case "3":
      if (carrito.length === 0) {
        alert("El carrito esta vacio , primero agregue un producto");
      } else {
        let id = prompt(
          "Ingrese el ID del producto que desee eliminar del carrito"
        );
        eliminarCarrito(id, carrito);
        console.table(carrito);
      }
      break;
    case "4":
      if (carrito.length === 0) {
        alert("El carrito esta vacio , primero agregue un producto");
      } else {
        mostrarCompra(carrito);
        opcion = 0;
      }
      break;

    default:
      break;
  }
} while (opcion != 0);
