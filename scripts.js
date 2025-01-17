document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: 'Camiseta Roja', category: 'ropa', price: 15, image: 'camisa-roja.jpg' },
        { id: 2, name: 'Laptop HP', category: 'electronica', price: 500, image: 'Laptop-HP.jpg' },
        { id: 3, name: 'Libro de JavaScript', category: 'libros', price: 30, image: 'Libro-Javascript.webp' },
        { id: 4, name: 'Auriculares Sony', category: 'electronica', price: 80, image: 'Auriculares-Sony.webp' },
        { id: 5, name: 'Sudadera Negra', category: 'ropa', price: 40, image: 'Sudadera-Negra.jpg' },
        { id: 6, name: 'Camiseta Azul', category: 'ropa', price: 20, image: 'Camisa-azul.jpg' },
        // Agregar más productos según sea necesario
    ];

    const productList = document.getElementById("product-list");
    const searchBar = document.getElementById("search-bar");
    const categoryFilter = document.getElementById("category-filter");

    // Función para mostrar productos
    const displayProducts = (filteredProducts) => {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    };

    // Filtrar por búsqueda
    const searchProducts = () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredBySearch = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        const selectedCategory = categoryFilter.value;
        const filteredByCategory = selectedCategory ? filteredBySearch.filter(product => product.category === selectedCategory) : filteredBySearch;
        displayProducts(filteredByCategory);
    };

    // Filtrar por categoría
    const filterByCategory = () => {
        const selectedCategory = categoryFilter.value;
        const filteredByCategory = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
        displayProducts(filteredByCategory);
    };

    // Escuchar cambios en la búsqueda y en el filtro
    searchBar.addEventListener('input', searchProducts);
    categoryFilter.addEventListener('change', filterByCategory);

    // Inicializar la tienda con todos los productos
    displayProducts(products);
});
