// productos.js — catálogo del micro marketplace de panadería
// Los precios están en pesos colombianos (COP), sin puntos ni símbolo.
// Las imágenes van en la carpeta /img (renombra tus capturas con estos nombres).

const productos = [
  {
    id: 1,
    nombre: "Torta de Almojábana",
    categoria: "Tortas",
    vendedor: "My Cake",
    presentacion: "8 porciones",
    precio: 71000,
    precioAnterior: null,
    imagen: "img/torta-almojabana.jpg",
    sellos: []
  },
  {
    id: 2,
    nombre: "Torta Casera",
    categoria: "Tortas",
    vendedor: "My Cake",
    presentacion: "20 porciones",
    precio: 75000,
    precioAnterior: null,
    imagen: "img/torta-casera.jpg",
    sellos: []
  },
  {
    id: 3,
    nombre: "Ponqué RAMO Tradicional",
    categoria: "Ponqués",
    vendedor: "Éxito",
    presentacion: "230 g · 6 porciones",
    precio: 5385,
    precioAnterior: 7180,
    imagen: "img/ponque-ramo.jpg",
    sellos: ["Exceso en azúcares", "Exceso en grasas saturadas"]
  },
  {
    id: 4,
    nombre: "Pan Artesano Bimbo tajado blanco, masa madre",
    categoria: "Panes",
    vendedor: "Éxito",
    presentacion: "500 g",
    precio: 8250,
    precioAnterior: null,
    imagen: "img/pan-artesano-bimbo.jpg",
    invima: "NSA-0011644-2021",
    sellos: ["Exceso en sodio"]
  },
  {
    id: 5,
    nombre: "Pan tajado Frescampo blanco",
    categoria: "Panes",
    vendedor: "Éxito",
    presentacion: "450 g",
    precio: 2980,
    precioAnterior: null, // el descuento real era de $10, no se muestra
    imagen: "img/pan-frescampo.jpg",
    sellos: ["Exceso en sodio"]
  },

  // ---- Productos 6 a 9: tomados de Farmatodo Colombia (verifica precios antes de entregar) ----
  {
    id: 6,
    nombre: "Pan Bimbo Tajado Artesano Mantequilla",
    categoria: "Panes",
    vendedor: "Farmatodo",
    presentacion: "500 g",
    precio: 9150,
    precioAnterior: null,
    imagen: "img/pan-artesano-mantequilla.jpg",
    invima: "RSIAE11M04796",
    sellos: []
  },
  {
    id: 7,
    nombre: "Pan Bimbo Artesano Banano Nueces (bloque)",
    categoria: "Panes dulces",
    vendedor: "Farmatodo",
    presentacion: "355 g",
    precio: 13200,
    precioAnterior: null,
    imagen: "img/pan-banano-nueces.jpg",
    sellos: []
  },
  {
    id: 8,
    nombre: "Galletas Danima de mantequilla tipo danesa",
    categoria: "Galletas",
    vendedor: "Farmatodo",
    presentacion: "114 g · 4 porciones · frasco",
    precio: 10990,
    precioAnterior: null,
    imagen: "img/galletas-danima.jpg",
    invima: "NSA-0013428-2023",
    sellos: []
  },
  {
    id: 9,
    nombre: "Pan Coco Buena Vida Fitcook 100% integral",
    categoria: "Panes",
    vendedor: "Farmatodo",
    presentacion: "430 g · vegano, sin azúcar, fibra prebiótica",
    precio: 9675,
    precioAnterior: null,
    imagen: "img/pan-coco-fitcook.jpg",
    sellos: []
  }
];
