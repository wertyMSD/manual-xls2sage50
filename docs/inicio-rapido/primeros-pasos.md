---
title: Primeros Pasos con xls2sage50
date: 2026-01-07
keywords:
  - primeros pasos xls2sage50
  - conocer interfaz
  - elementos interfaz
  - navegacion
aliases:
  - inicio-rapido/primeros-pasos.html
description: Aprenda a conocer la interfaz de usuario de xls2sage50, sus elementos principales y cómo navegar por la aplicación para comenzar a importar datos.
status: published
---

# Primeros Pasos

En esta sección conocerá la interfaz de xls2sage50 y aprenderá a navegar por la aplicación.

## Iniciar la Aplicación

### Desde el Acceso Directo

1. Busque el icono de xls2sage50 en su escritorio
2. Haga doble clic para abrir la aplicación

### Desde el Menú de Inicio

1. Presione la tecla Windows o haga clic en el botón de Inicio
2. Escriba "xls2sage50"
3. Seleccione la aplicación de los resultados

### Desde Línea de Comandos

```bash
# Navegar al directorio de instalación
cd "C:\Program Files\xls2sage50"

# Ejecutar la aplicación
xls2sage50.exe
```

## Pantalla de Bienvenida

Al iniciar xls2sage50 por primera vez, verá la pantalla de bienvenida:

![Pantalla de bienvenida](img:primeros-pasos-bienvenida.png)

Esta pantalla le permite:

- **Iniciar un nuevo proceso:** Comenzar una nueva importación desde cero
- **Cargar una plantilla:** Usar una configuración previamente guardada
- **Ver la documentación:** Acceder a esta guía de usuario
- **Configurar la aplicación:** Modificar la configuración

!!! tip "No mostrar de nuevo**

    Puede marcar la casilla "No mostrar de nuevo" para ir directamente a la interfaz principal en los siguientes inicios.

## Interfaz Principal

La interfaz principal de xls2sage50 se divide en varias áreas:

![Interfaz principal](img:primeros-pasos-interfaz-principal.png)

### 1. Barra Superior (Header)

Contiene los elementos principales de navegación:

| Elemento | Descripción |
|----------|-------------|
| **Menú Archivo** | Nuevo proceso, abrir plantilla, guardar plantilla, salir |
| **Menú Editar** | Configuración, preferencias |
| **Menú Ver** | Cambiar entre modos, mostrar/ocultar paneles |
| **Menú Ayuda** | Documentación, diagnosticar, acerca de |

### 2. Barra Lateral de Navegación

![Barra de navegación](img:primeros-pasos-navegacion.png)

Permite cambiar entre las diferentes secciones de la aplicación:

| Icono | Sección | Descripción |
|-------|---------|-------------|
| :material-home: | Inicio | Vista principal y acceso rápido |
| :material-table_large: | Proceso API | Importación directa por API |
| :material-file_csv: | Proceso CSV | Generación de archivos CSV |
| :material.bookmark: | Plantillas | Gestión de plantillas guardadas |
| :material.settings: | Configuración | Configuración de la aplicación |

### 3. Panel de Trabajo Principal

Es el área central donde realizará las operaciones. Su contenido cambia según la sección seleccionada.

### 4. Barra de Estado (Footer)

Muestra información sobre el estado actual de la aplicación:

| Elemento | Descripción |
|----------|-------------|
| **Estado** | Listo, Procesando, Error, etc. |
| **Conexión** | Estado de la conexión con SAGE 50 |
| **Progreso** | Barra de progreso de operaciones largas |

## Sección Proceso API

Esta sección se utiliza para la importación directa mediante la API de SAGE 50.

![Sección Proceso API](img:primeros-pasos-seccion-api.png)

### Elementos de la Sección API

| Componente | Función |
|------------|---------|
| **Selector de Archivo** | Para seleccionar el archivo Excel de origen |
| **Selector de Hoja** | Para elegir la hoja del libro de Excel |
| **Área de Mapeo** | Para relacionar columnas Excel con campos SAGE 50 |
| **Opciones de Importación** | Configuración específica de la importación |
| **Botón Ejecutar** | Para iniciar el proceso de importación |
| **Área de Resultados** | Para ver el progreso y resultados |

## Sección Proceso CSV

Esta sección se utiliza para generar archivos CSV y SQL.

![Sección Proceso CSV](img:primeros-pasos-seccion-csv.png)

### Elementos de la Sección CSV

| Componente | Función |
|------------|---------|
| **Selector de Archivo** | Para seleccionar el archivo Excel de origen |
| **Selector de Hoja** | Para elegir la hoja del libro de Excel |
| **Opciones de Salida** | Formato CSV, SQL, o ambos |
| **Separador de Campos** | Coma, punto y coma, tabulador |
| **Codificación** | UTF-8, Latin1, etc. |
| **Botón Generar** | Para iniciar la generación de archivos |
| **Vista Previa** | Para ver los datos antes de generar |

## Sección Plantillas

Esta sección permite gestionar las configuraciones guardadas.

![Sección Plantillas](img:primeros-pasos-seccion-plantillas.png)

### Funciones Disponibles

| Acción | Descripción |
|--------|-------------|
| **Ver lista** | Mostrar todas las plantillas guardadas |
| **Cargar** | Cargar una plantilla para usarla |
| **Editar** | Modificar una plantilla existente |
| **Eliminar** | Borrar una plantilla |
| **Exportar** | Exportar una plantilla a un archivo |
| **Importar** | Importar una plantilla desde un archivo |

## Conceptos de Navegación

### Cambiar entre Secciones

1. Haga clic en el icono correspondiente en la barra lateral
2. O use el atajo de teclado (Ctrl + 1-5)

### Abrir un Archivo

1. Haga clic en el botón **"Seleccionar Archivo"**
2. Navegue hasta la ubicación del archivo
3. Seleccione el archivo y haga clic en **"Abrir"**

!!! tip "Arrastrar y Soltar**

    También puede arrastrar un archivo Excel desde el explorador de archivos y soltarlo en el área de trabajo.

### Guardar una Plantilla

1. Configure el mapeo y opciones deseadas
2. Haga clic en **"Guardar como Plantilla"**
3. Escriba un nombre descriptivo
4. Haga clic en **"Guardar"**

## Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + O` | Abrir archivo |
| `Ctrl + S` | Guardar plantilla |
| `Ctrl + N` | Nuevo proceso |
| `Ctrl + 1` | Ir a Inicio |
| `Ctrl + 2` | Ir a Proceso API |
| `Ctrl + 3` | Ir a Proceso CSV |
| `Ctrl + 4` | Ir a Plantillas |
| `Ctrl + 5` | Ir a Configuración |
| `F5` | Actualizar vista |
| `Esc` | Cancelar operación actual |

## Personalización de la Interfaz

### Cambiar el Tema

1. Vaya a **Configuración** > **Apariencia**
2. Seleccione **Claro**, **Oscuro** o **Automático**
3. Haga clic en **"Aplicar"**

### Ajustar el Tamaño de Fuente

1. Vaya a **Configuración** > **Acessibilidad**
2. Use el deslizador para ajustar el tamaño
3. Haga clic en **"Aplicar"**

## Próximo Paso

Ahora que conoce la interfaz:

- [Importación Básica](importacion-basica.md) - Realice su primera importación

!!! question "¿Dudas sobre la interfaz?"

    Consulte la sección de [Interfaz Gráfica](../interfaz-grafica/index.md) para obtener información detallada sobre cada componente.
