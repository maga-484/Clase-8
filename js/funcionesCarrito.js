import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  //usamos la funcion que pide el carrito al localStorage
  const carrito = obtenerCarrito();
  carrito.push(producto);

  //usamos la funcion que guarda el carrito en el localStorage
  guardarCarrito(carrito);

  //usamos la funcion UI que actualiza en numero en carrito
  actualizarContador(carrito);
  mostrarMensaje("El señor cliente ha agregado un producto 🎉");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  //Elimina un elemento del array
  carrito.splice(indice, 1);

  //actualizamos el carrito en el localStorage
  guardarCarrito(carrito);

  //actualizamos el contador
  actualizarContador(carrito);
  mostrarMensaje(
    "El señor cliente ha eliminado un producto. Puede enviarnos un mensaje si desea que le enviemos novedades✅",
  );
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje(
    "El señor cliente ha vaciado el carrito. Puede enviarnos un mensaje si desea que le enviemos novedades",
  );
};
