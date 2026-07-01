# Talento Tech Node.js Final

Proyecto final de Talento Tech.

API REST desarrollada con Node.js, Express y Firebase Firestore para la gestión de productos mediante operaciones CRUD.

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore
- CORS
- Dotenv

## Funcionalidades

- Obtener todos los productos.
- Obtener un producto por ID.
- Crear productos.
- Actualizar productos.
- Eliminar productos.
- Validación de datos.
- Manejo de errores HTTP.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/FerrariGianluca/talento-tech-nodejs-final.git
```

Instalar dependencias:

```bash
npm install
```

Configurar las variables de entorno utilizando el archivo `.env-example`.

Iniciar el servidor:

```bash
npm run start
```

## Endpoints

| Método | Endpoint | Descripción |
|----------|----------|-------------|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Obtener un producto por ID |
| POST | `/api/products` | Crear un producto |
| PUT | `/api/products/:id` | Actualizar un producto |
| DELETE | `/api/products/:id` | Eliminar un producto |

## Estructura del proyecto

```
src
├── config
├── controllers
├── middlewares
├── models
├── routes
├── seeders
├── utils
```

## Autor

Gianluca Ferrari