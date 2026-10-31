// app.js — pinta el catálogo desde productos.js, filtra y maneja el carrito

const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});
const formatear = (n) => (n == null ? "Consultar precio" : COP.format(n));

const $ = (id) => document.getElementById(id);
const unicos = (campo) => [...new Set(productos.map((p) => p[campo]))];

let categoria = "Todas";
let vendedor = "Todos";
const carrito = new Map(); // id del producto -> cantidad

/* ---------- Filtros ---------- */
function pintarCategorias() {
  $("categorias").innerHTML = ["Todas", ...unicos("categoria")]
    .map((c) => `<button class="chip" type="button" aria-pressed="${c === categoria}" data-categoria="${c}">${c}</button>`)
    .join("");
}

function pintarVendedores() {
  $("vendedor").innerHTML = ["Todos", ...unicos("vendedor")]
    .map((v) => `<option>${v}</option>`)
    .join("");
}

/* ---------- Catálogo ---------- */
function tarjeta(p) {
  const oferta = p.precioAnterior
    ? `<span class="oferta">-${Math.round((1 - p.precio / p.precioAnterior) * 100)}%</span>`
    : "";
  const anterior = p.precioAnterior
    ? `<s class="anterior">${formatear(p.precioAnterior)}</s>`
    : "";
  const sellos = p.sellos.length
    ? `<p class="sellos">${p.sellos.map((s) => `<span>${s}</span>`).join("")}</p>`
    : "";
  const invima = p.invima ? `<p class="invima">Registro Invima ${p.invima}</p>` : "";

  return `
    <article class="tarjeta">
      <div class="foto">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        ${oferta}
      </div>
      <div class="cuerpo">
        <h3>${p.nombre}</h3>
        <p class="meta">Vendido por ${p.vendedor}</p>
        <p class="meta">${p.presentacion}</p>
        ${sellos}
        ${invima}
        <div class="pie">
          <p class="precios"><span class="precio">${formatear(p.precio)}</span>${anterior}</p>
          <button class="btn" type="button" data-agregar="${p.id}" ${p.precio == null ? "disabled" : ""}>Añadir al carrito</button>
        </div>
      </div>
    </article>`;
}

function pintarCatalogo() {
  const lista = productos.filter(
    (p) =>
      (categoria === "Todas" || p.categoria === categoria) &&
      (vendedor === "Todos" || p.vendedor === vendedor)
  );
  $("resumen").textContent = `Mostrando ${lista.length} de ${productos.length} productos`;
  $("catalogo").innerHTML =
    lista.map(tarjeta).join("") ||
    `<p class="vacio">No hay productos con ese filtro. Prueba otra categoría u otro vendedor.</p>`;
}

/* ---------- Carrito ---------- */
function cambiar(id, delta) {
  const n = (carrito.get(id) || 0) + delta;
  if (n > 0) carrito.set(id, n);
  else carrito.delete(id);
  pintarCarrito();
}

function pintarCarrito() {
  let total = 0;
  let cantidad = 0;
  const filas = [...carrito].map(([id, n]) => {
    const p = productos.find((x) => x.id === id);
    total += p.precio * n;
    cantidad += n;
    return `
      <li class="linea">
        <span class="l-nombre">${p.nombre}</span>
        <span class="cant">
          <button type="button" data-menos="${id}" aria-label="Quitar uno de ${p.nombre}">-</button>
          <b>${n}</b>
          <button type="button" data-mas="${id}" aria-label="Agregar uno de ${p.nombre}">+</button>
        </span>
        <span class="l-precio">${formatear(p.precio * n)}</span>
      </li>`;
  });
  $("lineas").innerHTML =
    filas.join("") || `<li class="vacio">Tu carrito está vacío. Añade un producto del catálogo.</li>`;
  $("total").textContent = formatear(total);
  $("contador").textContent = cantidad;
  $("vaciar").disabled = cantidad === 0;
}

/* ---------- Eventos ---------- */
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const d = b.dataset;
  if (d.categoria) {
    categoria = d.categoria;
    pintarCategorias();
    pintarCatalogo();
  } else if (d.agregar) cambiar(Number(d.agregar), 1);
  else if (d.mas) cambiar(Number(d.mas), 1);
  else if (d.menos) cambiar(Number(d.menos), -1);
});

$("vendedor").addEventListener("change", (e) => {
  vendedor = e.target.value;
  pintarCatalogo();
});

$("abrir-carrito").addEventListener("click", () => $("carrito").showModal());
$("cerrar").addEventListener("click", () => $("carrito").close());
$("vaciar").addEventListener("click", () => {
  carrito.clear();
  pintarCarrito();
});

// Si una imagen no existe en /img, se muestra un recuadro en vez de un ícono roto
$("catalogo").addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") e.target.classList.add("sin-foto");
  },
  true
);

/* ---------- Inicio ---------- */
pintarCategorias();
pintarVendedores();
pintarCatalogo();
pintarCarrito();
