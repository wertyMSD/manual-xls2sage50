---
title: Importación Básica con xls2sage50
date: 2026-01-07
keywords:
  - importacion basica sage 50
  - tutorial importacion
  - mapeo campos
  - importar clientes
aliases:
  - inicio-rapido/importacion-basica.html
description: Aprenda a realizar una importación básica desde Excel a SAGE 50. Guía paso a paso para configurar el mapeo de campos y ejecutar su primera importación.
status: published
---

# Importación Básica

Esta guía le llevará paso a paso a través de su primera importación de datos desde Excel hacia SAGE 50.

## Preparación del Archivo Excel

Antes de comenzar, prepare su archivo Excel correctamente:

### Estructura Recomendada

Su archivo debe tener:

- **Fila de encabezados:** La primera fila con nombres descriptivos
- **Datos consistentes:** Cada columna debe contener un tipo de dato
- **Sin filas vacías:** Elimine filas en blanco entre datos

**Ejemplo de archivo de clientes:**

| Código | Nombre | Dirección | Población | Teléfono |
|--------|--------|-----------|-----------|----------|
| CLI001 | Juan Pérez | Calle A 123 | Madrid | 911234567 |
| CLI002 | María López | Calle B 456 | Barcelona | 922345678 |

!!! warning "Evitar Caracteres Especiales"

    No use caracteres especiales como comillas, comas o punto y coma en los datos, ya que pueden causar problemas en la importación.

## Paso 1: Seleccionar el Archivo

1. Abra xls2sage50
2. Haga clic en el botón **"Seleccionar Archivo"**

![Botón seleccionar archivo](img:importacion-basica-boton-archivo.png)

3. Navegue hasta la ubicación de su archivo Excel
4. Seleccione el archivo y haga clic en **"Abrir"**

### Métodos Alternativos

- **Arrastrar y soltar:** Arrastre el archivo Excel directamente a la aplicación
- **Archivo reciente:** Seleccione de la lista de archivos usados recientemente

## Paso 2: Seleccionar la Hoja

Después de cargar el archivo, xls2sage50 mostrará las hojas disponibles:

![Selector de hoja](img:importacion-basica-selector-hoja.png)

1. Seleccione la hoja que contiene los datos a importar
2. La aplicación mostrará una vista previa de los datos

!!! tip "Vista Previa de Datos"

    Revise siempre la vista previa para asegurarse de que los datos se han leído correctamente.

## Paso 3: Configurar el Mapeo de Campos

El mapeo es el proceso de relacionar las columnas de Excel con los campos de SAGE 50.

### Mapeo Automático

xls2sage50 intentará detectar automáticamente el mapeo:

![Mapeo automático](img:importacion-basica-mapeo-auto.png)

Las columnas con nombres similares se asociarán automáticamente.

### Mapeo Manual

Si el mapeo automático no es correcto:

1. Haga clic en **"Editar Mapeo"**
2. Para cada columna de Excel, seleccione el campo de SAGE 50 correspondiente

![Editor de mapeo](img:importacion-basica-editor-mapeo.png)

3. Use los controles para:
   - **Agregar** mapeo: Haga clic en el botón "+"
   - **Eliminar** mapeo: Haga clic en la "X"
   - **Reordenar**: Arrastre las filas

### Campos Requeridos

Algunos campos de SAGE 50 son obligatorios. Asegúrese de mapearlos:

| Entidad | Campos Requeridos |
|---------|-------------------|
| **Clientes** | Código, Nombre |
| **Artículos** | Código, Descripción |
| **Proveedores** | Código, Nombre |

!!! warning "Campos Obligatorios"

    Si no mapea todos los campos requeridos, la importación fallará. Revise el mensaje de error para identificar qué campos faltan.

## Paso 4: Configurar Opciones de Importación

Antes de ejecutar la importación, configure las opciones:

### Modo de Importación

Elija entre:

| Opción | Descripción |
|--------|-------------|
| **Insertar nuevos** | Solo agregar registros que no existen |
| **Actualizar existentes** | Actualizar registros que ya existen |
| **Insertar y actualizar** | Realizar ambas acciones |

### Manejo de Errores

Seleccione cómo manejar errores durante la importación:

| Opción | Descripción |
|--------|-------------|
| **Detener al primer error** | La importación se detiene si hay un error |
| **Continuar** | La importación continúa y registra errores |
| **Crear log de errores** | Guarda un archivo con todos los errores |

## Paso 5: Ejecutar la Importación

Una vez configurado todo:

1. Haga clic en el botón **"Importar"**

![Botón importar](img:importacion-basica-boton-importar.png)

2. Aparecerá una barra de progreso

![Barra de progreso](img:importacion-basica-progreso.png)

3. Espere a que finalice el proceso

!!! tip "No Cierre la Aplicación**

    Mientras la importación está en progreso, no cierre la aplicación ni el archivo Excel.

## Paso 6: Verificar Resultados

Al finalizar, verá un resumen de la importación:

![Resumen de resultados](img:importacion-basica-resultados.png)

### Información del Resumen

| Campo | Descripción |
|-------|-------------|
| **Registros leídos** | Cantidad de registros del archivo Excel |
| **Registros importados** | Cantidad de registros exitosos |
| **Registros con error** | Cantidad de registros que fallaron |
| **Tiempo transcurrido** | Duración del proceso |

### Revisar Errores (si los hay)

Si hubo errores:

1. Haga clic en **"Ver Errores"**
2. Revise cada error con su detalle
3. Corrija los datos en el archivo Excel
4. Ejecute la importación nuevamente

## Guardar como Plantilla

Si planea realizar esta importación regularmente:

1. Haga clic en **"Guardar como Plantilla"**
2. Escriba un nombre descriptivo (por ejemplo, "Clientes Mensuales")
3. La próxima vez podrá cargar esta plantilla directamente

!!! tip "Plantillas para Importaciones Recurrentes**

    Guardar la configuración como plantilla le ahorra tiempo en importaciones futuras con la misma estructura.

## Resumen del Proceso

```mermaid
flowchart LR
    A[Seleccionar Archivo] --> B[Elegir Hoja]
    B --> C[Configurar Mapeo]
    C --> D[Opciones de Importación]
    D --> E[Ejecutar]
    E --> F{¿Errores?}
    F -->|No| G[Importación Exitosa]
    F -->|Sí| H[Revisar Errores]
    H --> I[Corregir Datos]
    I --> E
    G --> J[Guardar Plantilla]
```

## Próximo Paso

- [Ejemplo Práctico](ejemplo-practico.md) - Siga un caso de uso completo
- [Modo API](../modo-api/index.md) - Profundice en la importación por API

!!! question "¿Problemas con la Importación?"

    Si la importación falla, consulte [Errores de Importación](../solucion-problemas/errores-importacion.md) para obtener ayuda específica.
