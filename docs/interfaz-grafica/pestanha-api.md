---
title: Pestaña Proceso API de xls2sage50
date: 2026-01-07
keywords:
  - pestana proceso api
  - importacion api interfaz
  - mapeo campos interfaz
  - importar excel sage 50 api
aliases:
  - interfaz-grafica/pestanha-api.html
description: Descripción de la pestaña Proceso API de xls2sage50: selección de archivo, mapeo de campos, opciones de importación y ejecución del proceso.
status: published
---

# Pestaña Proceso API

La pestaña Proceso API reúne las herramientas para importar datos directamente a SAGE 50 mediante su API oficial, sin archivos intermedios.

## Requisitos

!!! note "Licencia API requerida"

    - SAGE 50 versión 2020 o superior
    - Licencia que incluya el módulo API
    - Servidor de API habilitado en SAGE 50

## Componentes de la Pestaña

| Componente | Función |
|------------|---------|
| **Selector de Archivo** | Seleccionar el archivo Excel de origen |
| **Selector de Hoja** | Elegir la hoja del libro de Excel |
| **Área de Mapeo** | Relacionar columnas de Excel con campos de SAGE 50 |
| **Opciones de Importación** | Configurar el comportamiento de la importación |
| **Botón Ejecutar** | Iniciar el proceso de importación |
| **Área de Resultados** | Seguir el progreso y consultar los resultados |

## Flujo de Trabajo

1. Seleccione el archivo Excel (`.xlsx` o `.xls` con encabezados en la primera fila)
2. Elija la hoja que contiene los datos
3. Configure el mapeo entre columnas de Excel y campos de SAGE 50
4. Revise las opciones de importación
5. Haga clic en **"Importar"** y siga el progreso en el área de resultados
6. Al finalizar, revise los registros importados y los errores producidos

## Documentación Relacionada

- [Modo API](../modo-api/index.md) - Documentación completa del modo de importación por API
- [Conexión con SAGE 50](../modo-api/conexion.md) - Configurar y probar la conexión
- [Mapeo de Campos](../modo-api/mapeo.md) - Detalles del mapeo de columnas y campos
- [Proceso de Importación](../modo-api/proceso.md) - Ejecutar y monitorear importaciones
