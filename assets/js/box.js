const box = (item) => {
    return `
        <div class="card w-auto mt-4 ms-4 me-4 mb-5" style="width: 18rem;">
            <img src="${item.src}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
            <p class="card-title class="lead"">${item.descripcion}</p>
            <br>
            <p class="card-text origen">${item.origen}</p>
            <p class="card-text direccion"><i class="fas fa-map-marker-alt"></i> ${item.direccion}</p>
        </div>
        <hr size=0.6>
        <div class="card-body prices pt-0 pe-5">
                <span class="card-text original pe-3">$${item.precioOriginal.toLocaleString("da-DK")}</span>
                <span class="card-text oferta text-success">$${item.precioOferta.toLocaleString("da-DK")}</span>
        </div>
    </div>
    `;
}

const boxes = [
    {
        src: "/assets/img/cupon-1.jpg",
        alt: "",
        descripcion: "Plumón Coral Fleece estampado en modelo y tamaño a elección",
        origen: "Plumones Manolino",
        direccion: "9191 Avenida Vitacura, Chile",
        precioOriginal: 45990,
        precioOferta: 22990
    },
    {
        src: "/assets/img/cupon-2.jpg",
        alt: "",
        descripcion: "Entrada para compartir + platos de fondo + postres + bebestibles",
        origen: "V for Vegan",
        direccion: "777 Jesse Pinkman, Chile",
        precioOriginal: 30990,
        precioOferta: 12990
    },
    {
        src: "/assets/img/cupon-3.jpg",
        alt: "",
        descripcion: "Evaluación integral + blanqueamiento dental led + limpieza + fluoración",
        origen: "Clínica Dental Quijada",
        direccion: "1342, Blanco Encalada, Chile",
        precioOriginal: 300000,
        precioOferta: 25990
    },
    {
        src: "/assets/img/cupon-4.jpg",
        alt: "",
        descripcion: "Colación para 2 personas + postre (no incluye bebidas)",
        origen: "Suricata almacen",
        direccion: "1071 Miguel Claro, Chile",
        precioOriginal: 4200,
        precioOferta: 2100
    },
    {
        src: "/assets/img/cupon-5.jpg",
        alt: "",
        descripcion: "1, 2 o 4 tickets para Stukids. Elige sucursal",
        origen: "Stukids Centro de Eventos",
        direccion: "133 El tranque, Chile",
        precioOriginal: 4000,
        precioOferta: 2500
    },
    {
        src: "/assets/img/cupon-6.jpg",
        alt: "",
        descripcion: "San Pedro de Atacama : 1 o 2 noches en alojamiento a elección",
        origen: "D-Latam Travel",
        direccion: " ",
        precioOriginal: 80200,
        precioOferta: 44100
    }
];

for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    document.getElementById("content-container")
        .insertAdjacentHTML("beforeend", box(element));
}