const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;

const precionConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precionConDescuento
})