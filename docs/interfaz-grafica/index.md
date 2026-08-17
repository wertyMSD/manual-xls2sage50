---
title: Interfaz Gráfica de xls2sage50
date: 2026-01-07
keywords:
  - interfaz grafica xls2sage50
  - gui flet
  - pantalla principal
  - navegacion interfaz
aliases:
  - interfaz-grafica.html
description: Guía completa de la interfaz gráfica de usuario de xls2sage50 basada en Flet. Conozca todos los elementos de la pantalla, navegación y componentes.
status: published
---

# Interfaz Gráfica

La interfaz gráfica de xls2sage50 está basada en Flet, un framework moderno que proporciona una experiencia de usuario fluida e intuitiva.

## Características de la Interfaz

| Característica | Descripción |
|----------------|-------------|
| :white_check_mark: **Moderna** | Diseño actualizado con Material Design |
| :white_check_mark: **Responsive** | Se adapta a diferentes tamaños de pantalla |
| :white_check_mark: **Intuitiva** | Fácil de usar para usuarios no técnicos |
| :white_check_mark: **Accesible** | Compatible con leitores de pantalla |
| :white_check_mark: **Personalizable** | Temas claros y oscuros |

## Contenido de esta Sección

1. [Pantalla Principal](pantalla-principal.md) - Vista general de la ventana principal
2. [Barra de Navegación](navegacion.md) - Uso de la barra lateral de navegación
3. [Pestaña Proceso API](pestanha-api.md) - Detalles de la sección de importación API
4. [Pestaña Proceso CSV](pestanha-csv.md) - Detalles de la sección de generación CSV
5. [Configuración en la UI](../modo-csv/configuracion.md) - Ajustes y preferencias

## Diseño General

```
+----------------------------------------------------------+
|  BARRA SUPERIOR  |  Archivo  Editar  Ver  Ayuda  |  O  X  |
+----------------------------------------------------------+
|  |                                                  |      |
|  |                                                  |      |
|  |            ÁREA DE TRABAJO PRINCIPAL              |      |
|  |                                                  |      |
|  |                                                  |      |
|  |                                                  |      |
|  |                                                  |      |
+----------------------------------------------------------+
|  ICONO  |  Inicio   API   CSV   Plantillas   Conf  |   |
|  BARRA  |  =====================================  |   |
|  LATERAL |                                          |   |
+----------------------------------------------------------+
|  Estado: Listo   |   Conexión: Conectado            |      |
+----------------------------------------------------------+
```

## Componentes Principales

### 1. Barra Superior (Header)

Contiene los menús principales y controles de ventana:

| Elemento | Descripción |
|----------|-------------|
| **Menú Archivo** | Nuevo, abrir, guardar, salir |
| **Menú Editar** | Deshacer, rehacer, preferencias |
| **Menú Ver** | Cambiar vista, mostrar/ocultar paneles |
| **Menú Ayuda** | Documentación, diagnosticar, acerca de |
| **Controles de ventana** | Minimizar, maximizar, cerrar |

### 2. Área de Trabajo Principal

Es el área central donde se realiza el trabajo. Su contenido cambia según la sección seleccionada:

- **Inicio:** Pantalla de bienvenida y acceso rápido
- **Proceso API:** Herramientas para importación por API
- **Proceso CSV:** Herramientas para generación CSV
- **Plantillas:** Gestión de plantillas
- **Configuración:** Ajustes de la aplicación

### 3. Barra Lateral de Navegación

Permite cambiar entre las diferentes secciones:

| Icono | Sección | Descripción |
|-------|---------|-------------|
| :material-home: | Inicio | Página principal |
| :material.table_large: | Proceso API | Importación por API |
| :material.file_csv: | Proceso CSV | Generación CSV |
| :material.bookmark: | Plantillas | Gestión de plantillas |
| :material.settings: | Configuración | Ajustes |

### 4. Barra de Estado

Muestra información sobre el estado actual:

| Campo | Descripción |
|-------|-------------|
| **Estado** | Listo, Procesando, Error |
| **Conexión** | Estado de la conexión con SAGE 50 |
| **Progreso** | Barra de progreso de operaciones |

## Temas y Apariencia

### Tema Claro

Modo claro con colores brillantes:

![Tema claro](img:interfaz-tema-claro.png)

### Tema Oscuro

Modo oscuro para reducir fatiga visual:

![Tema oscuro](img:interfaz-tema-oscuro.png)

### Cambiar el Tema

1. Vaya a **Configuración** > **Apariencia**
2. Seleccione **Claro**, **Oscuro** o **Automático**
3. Haga clic en **"Aplicar"**

## Accesibilidad

### Características de Accesibilidad

xls2sage50 incluye varias características para usuarios con discapacidades:

| Característica | Descripción |
|----------------|-------------|
| **Lector de pantalla** | Compatible con NVDA y JAWS |
| **Alto contraste** | Modo de alto contraste disponible |
| **Tamaño de fuente** | Ajustable en Configuración |
| **Navegación por teclado** | Todas las funciones accesibles por teclado |
| **Atajos de teclado** | Atajos para tareas comunes |

### Atajos de Teclado Principales

| Atajo | Acción |
|-------|--------|
| `Ctrl + O` | Abrir archivo |
| `Ctrl + S` | Guardar |
| `Ctrl + N` | Nuevo proceso |
| `F1` | Ayuda |
| `F5` | Actualizar |
| `Esc` | Cancelar |

## Responsive Design

La interfaz se adapta a diferentes tamaños de pantalla:

### Pantalla Completa (1280+ px ancho)

Todos los elementos visibles con layout de 3 columnas.

### Tablet (768-1279 px ancho)

Layout de 2 columnas con algunos elementos colapsados.

### Móvil (<768 px ancho)

Layout de 1 columna con menú hamburguesa.

## Personalización

### Reordenar Elementos

Algunos elementos pueden reordenarse:

1. Mantenga presionado el botón izquierdo del ratón
2. Arrastre el elemento a la nueva posición
3. Suelte para colocar

### Ajustar Tamaños

Los paneles pueden redimensionarse:

1. Pase el cursor sobre el borde del panel
2. Cuando el cursor cambie de forma, arrastre
3. Suelte para fijar el nuevo tamaño

## Próximo Paso

- [Pantalla Principal](pantalla-principal.md) - Conozca en detalle la pantalla principal
