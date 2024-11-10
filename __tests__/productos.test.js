const filtrarProductos = require('../js/productos');

// Escribir los tests debajo
describe('filtrarProductos', () => {
    // Datos de prueba
    const productosTest = [
        {
            "id": "abrigo-01",
            "titulo": "Campera 1",
            "imagen": "./img/campera-01.jpg",
            "categoria": "camperas",
            "precio": 1000
        },
        {
            "id": "abrigo-05",
            "titulo": "Campera 5",
            "imagen": "./img/campera-05.jpg",
            "categoria": "camperas",
            "precio": 1000
        },
        {
            "id": "camiseta-08",
            "titulo": "Remera 8",
            "imagen": "./img/remera-08.jpg",
            "categoria": "remeras",
            "precio": 1000
        },
        {
            "id": "pantalon-05",
            "titulo": "Pantalón 05",
            "imagen": "./img/pantalon-05.png",
            "categoria": "pantalones",
            "precio": 1000
        }
    ];

    const productosTest2 = [
        {
            "id": "camiseta-08",
            "titulo": "Remera 8",
            "imagen": "./img/remera-08.jpg",
            "categoria": "remeras",
            "precio": 1000
        },
        {
            "id": "pantalon-01",
            "titulo": "Pantalón 01",
            "imagen": "./img/pantalon-01.png",
            "categoria": "pantalones",
            "precio": 1000
        },
        {
            "id": "pantalon-02",
            "titulo": "Pantalón 02",
            "imagen": "./img/pantalon-02.png",
            "categoria": "pantalones",
            "precio": 1000
        }
    ]

    test('filtra correctamente por categoría camperas', () => {
        const resultadoCamperas = filtrarProductos(productosTest, 'camperas');
        expect(resultadoCamperas).toHaveLength(2);
        expect(resultadoCamperas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ categoria: 'camperas' })
            ])
        );
    });

    test('filtra correctamente en una categoria invalida', () => {
        const resultadoCatInvalida = filtrarProductos(productosTest, 'camperasss');
        expect(resultadoCatInvalida).toHaveLength(0);
        
    });

    test('filtra correctamente solo dos productos de ese tipo', () => {
        const resultadoTest3 = filtrarProductos(productosTest2, 'pantalones');
        expect(resultadoTest3).toHaveLength(2);
        expect(resultadoTest3).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ categoria: 'pantalones' })
            ])
        );
    });

    test('filtra correctamente al devolver un array vacio con una categoria correcta', () => {
        const resultadoTest4 = filtrarProductos(productosTest2, 'camperas');
        expect(resultadoTest4).toHaveLength(0);
    });
});
