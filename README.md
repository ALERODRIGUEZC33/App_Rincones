# App Rincones

Aplicación móvil desarrollada con **Ionic + Angular**, que permite a los usuarios explorar restaurantes, ver menús, promociones y realizar reservas.

---

## 🚀 Herramientas necesarias

Antes de iniciar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión recomendada: 18.x o superior)  
- **npm** (Node Package Manager)  
- **Ionic CLI**  
- **Angular CLI**

### Instalación de herramientas:

```bash
# Instalar Angular CLI
npm install -g @angular/cli

# Instalar Ionic CLI
npm install -g @ionic/cli

# Crear un nuevo proyecto Ionic con Angular
ionic start AppRincones blank --type=angular

# Acceder al proyecto
cd AppRincones

# Crear estructura de carpetas para páginas
mkdir -p src/app/pages/login

# Generar las páginas necesarias
ionic generate page pages/login
ionic generate page pages/register
ionic generate page pages/home
ionic generate page pages/search
ionic generate page pages/promotions
ionic generate page pages/profile
ionic generate page pages/restaurant-detail
ionic generate page pages/menu
ionic generate page pages/reservations
ionic generate page pages/my-data
ionic generate page pages/confirm-reservation

# Ejecutar la aplicación en entorno local
ionic serve

# Esta es la estructura base de la app
src/
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── home/
│   │   ├── search/
│   │   ├── promotions/
│   │   ├── profile/
│   │   ├── restaurant-detail/
│   │   ├── menu/
│   │   ├── reservations/
│   │   ├── my-data/
│   │   └── confirm-reservation/
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
│   └── icon/
└── index.html

## Pruebas en desarrollo
Ejecuta ionic serve para correr la app en el navegador.

Navega a http://localhost:8100 para ver la aplicación.

Verifica rutas como /pages/login, /pages/register, etc.

App Rincones — Proyecto de desarrollo móvil educativo.
Politecnico Grancolombiano / Programación Móvil – 2025.
