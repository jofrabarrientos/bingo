# Reglas y Mejores Prácticas para el Proyecto: Nuxt 4 + Tailwind CSS v4

Este documento establece las directrices, reglas y mejores prácticas a seguir para el desarrollo de este proyecto, que utiliza **Nuxt 4** y **Tailwind CSS v4**, y está optimizado para su despliegue en **Cloudflare Pages**.

---

## 1. Arquitectura y Estructura del Proyecto (Nuxt 4)

Nuxt 4 introduce una arquitectura más limpia aislando el código de la aplicación.

*   **Uso del directorio `app/`**: Todo el código específico de la aplicación (componentes, composables, layouts, páginas y plugins) **debe** residir dentro del directorio `app/`. Esto mantiene el directorio raíz limpio y separado de los archivos de configuración (`nuxt.config.ts`, `server/`, `public/`).
*   **Lógica del Servidor en `server/`**: Toda la lógica de negocio sensible y las rutas de API deben ir en el directorio `server/api/`. Utiliza `defineEventHandler` para manejar las peticiones. Esto mantiene el bundle del cliente ligero.
*   **TypeScript**: El proyecto debe aprovechar al máximo TypeScript. Define tipos claros para las respuestas de API y el estado.
*   **Auto-imports**: Maximiza el uso de la función de auto-importación de Nuxt para composables y componentes.

## 2. Obtención de Datos (Data Fetching)

*   **Peticiones Cancelables (Abortable Requests)**: Usa `useAsyncData` o `useFetch` con soporte para `AbortController` (disponible en Nuxt 4.2+). Esto es vital para características como búsquedas o filtros, para cancelar peticiones pendientes cuando el usuario dispara una nueva.
*   **Centralización**: Crea *composables* dedicados para las llamadas a la API. Esto permite compartir datos entre componentes, evitar peticiones duplicadas y definir estrategias de caché claras.
*   **Claves Consistentes**: Asegúrate de que los componentes que comparten datos utilicen claves consistentes en `useFetch` o `useAsyncData` para aprovechar la compartición de *payloads* de Nuxt.

## 3. Rendimiento (Performance)

*   **Renderizado Híbrido**: Utiliza `routeRules` en `nuxt.config.ts` para definir estrategias de renderizado y caché granulares (ej. `prerender: true` para páginas estáticas, `isr` para contenido dinámico).
*   **Optimización de Imágenes y Fuentes**:
    *   Usa `@nuxt/image` para la optimización automática de imágenes (WebP/AVIF) y mejorar el LCP.
    *   Usa `@nuxt/fonts` para optimizar la carga de fuentes y evitar cambios de diseño (layout shifts).
    *   Usa `@nuxt/scripts` para cargar scripts de terceros de manera eficiente.
*   **Efectos Secundarios**: Mantén el código específico del navegador (acceso a `window` o `document`) dentro de hooks como `onMounted` o envuélvelos en componentes `<ClientOnly>` para asegurar una correcta Hidratación.

## 4. Tailwind CSS v4

Tailwind CSS v4 trae cambios importantes y se debe utilizar a través de su plugin oficial de Vite.

*   **Plugin de Vite**: Utiliza `@tailwindcss/vite` en lugar del módulo comunitario tradicional de Nuxt.
    ```typescript
    // nuxt.config.ts
    import tailwindcss from '@tailwindcss/vite';

    export default defineNuxtConfig({
      vite: {
        plugins: [
          tailwindcss(),
        ],
      },
    });
    ```
*   **Cero Configuración**: Tailwind v4 se inclina hacia un modelo de "cero configuración". No se requiere un archivo `tailwind.config.js` extenso. Gran parte de la configuración (colores, fuentes, etc.) se debe manejar directamente en el archivo CSS global utilizando variables CSS estándar.
*   **Importación Global**: Importa Tailwind en tu archivo CSS principal (ej. `assets/css/main.css` dentro de la carpeta `app/`):
    ```css
    @import "tailwindcss";
    ```

## 5. Despliegue en Cloudflare Pages

El proyecto está diseñado para ser desplegado en Cloudflare Pages aprovechando el motor Nitro de Nuxt.

### Opción A: Integración con Git (Recomendada)
Esta es la forma más sencilla. Cloudflare compilará y desplegará automáticamente el sitio con cada *push* al repositorio.

1.  Conecta tu repositorio en el panel de Cloudflare (Workers & Pages > Pages > Connect to Git).
2.  Configuración de compilación (Build Settings):
    *   **Framework preset**: Nuxt.js
    *   **Build command**: `nuxt build` (para SSR y renderizado híbrido)
    *   **Build output directory**: `.output/public`

### Opción B: Despliegue Directo (CLI Wrangler)
Si necesitas compilar localmente o en un CI/CD personalizado:

1.  Configura el *preset* en `nuxt.config.ts`:
    ```typescript
    export default defineNuxtConfig({
      nitro: {
        preset: 'cloudflare_pages'
      }
    })
    ```
2.  Compila el proyecto: `npx nuxt build`
3.  Despliega usando Wrangler: `npx wrangler pages deploy .output/public`

### Consideraciones para Cloudflare:
*   Si experimentas problemas con las rutas (Cloudflare intentando servir HTML estático en lugar de la función SSR), desactiva el índice de subcarpetas en `nuxt.config.ts`:
    ```typescript
    export default defineNuxtConfig({
      nitro: {
        prerender: {
          autoSubfolderIndex: false
        }
      }
    })
    ```
