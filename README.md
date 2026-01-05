# Reto Técnico – Listado de Países (Web Components)

Aplicación web desarrollada como parte del proceso de selección para la posición de **Analista de Desarrollo** en **Entelgy**.

El proyecto consume una API pública de países y presenta la información utilizando **Web Components** con **Lit JS**, priorizando una arquitectura modular, reutilizable y una experiencia de usuario amigable.

---

## Tecnologías utilizadas

- **JavaScript ES6**
- **Lit JS** (Web Components)
- **CSS3**
- **Vite JS** (entorno de desarrollo)
- **API REST**: [REST Countries](https://restcountries.com)

---

## Funcionalidades principales

- Listado de países de la región **América**
- Visualización de países en una **grilla 3 x 4**
- Componentes web reutilizables
- Modal informativo al hacer click en el nombre del país
- Información mostrada en el modal:
  - Capital
  - Población
  - Región
  - Idiomas y monedas
- Posibilidad de **marcar y desmarcar países como favoritos**
- Lista dedicada para visualizar países favoritos
- Animaciones suaves para mejorar la UX
- Diseño responsive y minimalista

---

## API utilizada

```
https://restcountries.com/v3.1/region/ame
```

## Instalación y ejecución

### Requisitos previos
- Node.js v18 o superior

### Pasos

```bash
git clone https://github.com/ELEyder/reto-lit
cd reto-lit
npm install
npm run dev
```

La aplicación estará disponible en:
```
http://localhost:5173
```

---

## Flujo de trabajo Git

El proyecto sigue una estructura basada en **git-flow**:

- main
- develop
- feature/*
- hotfix/*

Los commits mantienen una identidad clara y descriptiva.

---

## Autor

**Eyder Huayta**  
Reto técnico – Proceso de selección Entelgy

---

## Licencia

Proyecto desarrollado únicamente con fines evaluativos y académicos.
