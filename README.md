# Pagina web - Procesadora Monegro MC

Sitio brochure corporativo para el dominio principal `procesadoramonegro.com`.

## Desarrollo local

```powershell
cd "C:\Desktop\APLICACION ASISTENCIA\pagina web"
npm.cmd install
npm.cmd run dev
```

URL local por defecto:

```text
http://localhost:5174
```

## Produccion

```powershell
npm.cmd run build
```

El build queda en `dist`.

## GitHub Pages

Este repositorio publica la web con GitHub Actions desde la carpeta `dist`.

1. Crea un repositorio en GitHub.
2. Sube esta carpeta al repositorio.
3. En GitHub, entra a `Settings > Pages` y selecciona `GitHub Actions` como fuente.
4. Cada push a `main` reconstruye y publica la pagina.

Para el enlace normal de GitHub Pages (`usuario.github.io/repositorio`), el workflow ajusta la ruta base automaticamente.
Si luego usas un dominio propio en GitHub Pages, crea la variable del repositorio `VITE_BASE_PATH` con valor `/`.
