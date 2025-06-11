# App Rincones

Aplicación móvil desarrollada con **Ionic + Angular**, que permite a los usuarios explorar restaurantes, ver menús, promociones y realizar reservas.

---

## 🚀 Herramientas necesarias

Antes de iniciar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión recomendada: 18.x o superior)  
- **npm** (Node Package Manager)  
- **Ionic CLI**  
- **Angular CLI**
- **Git Bash**

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

### Generar las páginas necesarias
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
│   ├── pages/              → Carpeta que contiene todas las vistas (páginas) del proyecto
│   │   ├── home/           → Página de inicio
│   │   ├── login/          → Página de inicio de sesión
│   │   ├── promo/          → Página de promociones
│   │   ├── register/       → Página de registro de usuarios
│   │   ├── reserva/        → Página para visualizar las reservas (standalone)
│   │   └── tabs/           → Contenedor principal con navegación por pestañas
│   │       ├── tabs-routing.module.ts → Define rutas internas de las pestañas
│   │       ├── tabs.module.ts         → Módulo del componente tabs (si no es standalone)
│   │       └── tabs.page.ts/html/scss → Página que define las tabs de navegación
│
│   ├── app-routing.module.ts → Ruteador principal de la app (enlaza todas las páginas)
│   ├── app.component.ts      → Componente raíz que inicia la aplicación
│   ├── app.module.ts         → Módulo principal del proyecto
│
├── assets/                   → Carpeta de imágenes, íconos y recursos estáticos
│   ├── icon/                 → Íconos de app
│   └── img/                  → Imágenes de fondo y logos
│
├── theme/                    → Variables globales SCSS (colores, fuentes, etc.)
├── global.scss               → Estilos globales de la app
├── index.html                → Archivo HTML base
└── main.ts                   → Punto de entrada de la aplicación
## Pruebas en desarrollo
Ejecuta ionic serve para correr la app en el navegador.

Navega a http://localhost:8100 para ver la aplicación.

Verifica rutas como /pages/login, /pages/register, etc.

App Rincones — Proyecto de desarrollo móvil educativo.
Politecnico Grancolombiano / Programación Móvil – 2025.
