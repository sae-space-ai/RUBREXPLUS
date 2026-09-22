# RUBREX PLUS

**Premium Automotive Parts Platform**  
*Developed by Prof. Manuel GAGO FERNÁNDEZ*

---

## 🚀 Descripción

RUBREX PLUS es una plataforma web profesional para la gestión y presentación de componentes automotrices de alta calidad. Distribuido por Kapico South Africa, ofrece un catálogo completo de piezas para talleres en toda Sudáfrica.

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/rubrex-plus.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🌐 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Sube el código a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RUBREX PLUS by Prof. Manuel GAGO FERNÁNDEZ"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/rubrex-plus.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub

3. Click en **"Add New Project"**

4. Selecciona el repositorio `rubrex-plus`

5. Vercel detectará automáticamente Vite como framework

6. Click en **"Deploy"**

### Opción 2: Con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## 📋 Estructura del Proyecto

```
rubrex-plus/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección hero animada
│   │   ├── Categories.tsx  # Catálogo de categorías
│   │   ├── About.tsx       # Sobre RUBREX PLUS
│   │   ├── Features.tsx    # Ventajas competitivas
│   │   ├── Products.tsx    # Productos con filtros
│   │   ├── Testimonials.tsx # Testimonios
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globales
├── index.html              # HTML base
├── package.json            # Dependencias
├── tsconfig.json           # Configuración TypeScript
└── vite.config.js          # Configuración Vite
```

## 👨‍🏫 Autor

**Prof. Manuel GAGO FERNÁNDEZ**

---

© 2025 RUBREX PLUS. Todos los derechos reservados.  
Distribuido por Kapico South Africa (Pty) Ltd.
