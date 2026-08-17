---
title: Pestaña Proceso CSV de xls2sage50
date: 2026-01-07
keywords:
  - pestana proceso csv
  - generar csv interfaz
  - salida csv sql
  - vista previa csv
aliases:
  - interfaz-grafica/pestanha-csv.html
description: Descripción de la pestaña Proceso CSV de xls2sage50: selección de archivo, opciones de salida, vista previa y generación de archivos CSV y SQL.
status: published
---

# Pestaña Proceso CSV

La pestaña Proceso CSV genera archivos CSV y scripts SQL listos para importar manualmente en SAGE 50. Es la alternativa a la importación directa cuando no se dispone de licencia API.

## Componentes de la Pestaña

| Componente | Función |
|------------|---------|
| **Selector de Archivo** | Seleccionar el archivo Excel de origen |
| **Selector de Hoja** | Elegir la hoja del libro de Excel |
| **Opciones de Salida** | Elegir formato CSV, SQL o ambos |
| **Separador de Campos** | Coma, punto y coma o tabulador |
| **Codificación** | UTF-8, Latin1 u otras |
| **Vista Previa** | Ver los datos antes de generar |
| **Botón Generar** | Iniciar la generación de archivos |

## Flujo de Trabajo

1. Seleccione el archivo Excel y la hoja con los datos
2. Configure el formato de salida (CSV, SQL o ambos)
3. Ajuste el separador de campos y la codificación
4. Revise los datos en la vista previa
5. Haga clic en **"Generar"**

## Archivos Generados

| Archivo | Descripción |
|---------|-------------|
| `clientes.csv` | Archivo CSV con los datos |
| `clientes.sql` | Script SQL para importación |
| `importacion.log` | Registro del proceso |
| `errores.log` | Errores encontrados, si los hay |

Por defecto, los archivos se guardan en `%USERPROFILE%\Documents\xls2sage50\csv\`.

!!! tip "Revise antes de importar"

    El modo CSV permite revisar los archivos generados antes de importarlos en SAGE 50. Realice una copia de seguridad de la base de datos antes de la importación manual.

## Documentación Relacionada

- [Modo de Generación CSV](../modo-csv/index.md) - Documentación completa del modo CSV
- [Configuración CSV](../modo-csv/configuracion.md) - Formatos y opciones de generación
- [Importación Manual en SAGE 50](../modo-csv/importacion-manual.md) - Pasos para importar los archivos generados
