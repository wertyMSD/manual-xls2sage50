---
title: Modo de Importación API - xls2sage50
date: 2026-01-07
keywords:
  - modo api sage 50
  - importacion directa sage 50
  - sage 50 sdk
  - conexion api sage
aliases:
  - modo-api.html
description: Documentación completa del modo API de xls2sage50 para importación directa de datos desde Excel a SAGE 50 mediante la API oficial.
status: published
---

# Modo de Importación API

El modo API permite importar datos directamente a SAGE 50 utilizando su API oficial. Este es el método más rápido y seguro para transferir datos.

## Ventajas del Modo API

| Ventaja | Descripción |
|---------|-------------|
| :white_check_mark: **Automático** | No requiere intervención manual |
| :white_check_mark: **Inmediato** | Los datos se actualizan en tiempo real |
| :white_check_mark: **Validado** | SAGE 50 valida los datos durante la importación |
| :white_check_mark: **Seguro** | Menor riesgo de errores humanos |
| :white_check_mark: **Rastreable** | Cada operación queda registrada |

## Requisitos del Modo API

!!! note "Licencia API Requerida"

    Para usar el modo API necesita:
    - SAGE 50 versión 2020 o superior
    - Licencia que incluya el módulo API
    - El servidor de API habilitado en SAGE 50

### Verificar Requisitos

Para verificar si su licencia incluye el módulo API:

1. Abra SAGE 50
2. Vaya a **Herramientas** > **Opciones**
3. Busque la sección **API** o **Conectividad**
4. Verifique que esté habilitada

## Contenido de esta Sección

1. [Conceptos Básicos](conceptos.md) - Arquitectura y funcionamiento del modo API
2. [Conexión con SAGE 50](conexion.md) - Configurar y probar la conexión
3. [Mapeo de Campos](mapeo.md) - Relacionar columnas Excel con campos SAGE 50
4. [Proceso de Importación](proceso.md) - Ejecutar y monitorear importaciones
5. [Ejemplos de Uso](ejemplos.md) - Casos prácticos detallados

## Flujo de Trabajo del Modo API

```mermaid
flowchart LR
    A[Archivo Excel] --> B[xls2sage50]
    B --> C[Conexión API SAGE 50]
    C --> D[Validación de Datos]
    D --> E[Importación por Lotes]
    E --> F[Confirmación en SAGE 50]
    F --> G[Reporte de Resultados]
```

## Arquitectura del Modo API

El modo API funciona de la siguiente manera:

1. **Conexión:** xls2sage50 establece una conexión con el servidor de API de SAGE 50
2. **Preparación:** Los datos del archivo Excel se validan y transforman
3. **Transmisión:** Los datos se envían a SAGE 50 en lotes para optimizar el rendimiento
4. **Procesamiento:** SAGE 50 procesa cada registro y valida los datos
5. **Confirmación:** SAGE 50 confirma cada registro procesado
6. **Reporte:** xls2sage50 muestra el resultado final

### Procesamiento por Lotes

Para optimizar el rendimiento, el modo API procesa los datos en lotes:

| Configuración | Valor Predeterminado | Descripción |
|---------------|---------------------|-------------|
| Tamaño de lote | 100 registros | Cantidad de registros por envío |
| Timeout | 30 segundos | Tiempo de espera por lote |
| Reintentos | 3 | Intentos en caso de fallo |

!!! tip "Ajuste el Tamaño de Lote**

    Para archivos grandes, puede aumentar el tamaño de lote para mejorar el rendimiento. Para conexiones lentas, reduzcalo.

## Entidades Soportadas

El modo API soporta la importación de las siguientes entidades de SAGE 50:

| Entidad | Descripción | Campos Principales |
|---------|-------------|-------------------|
| **Clientes** | Información de clientes | Código, Nombre, NIF, Dirección |
| **Proveedores** | Información de proveedores | Código, Nombre, NIF, Dirección |
| **Artículos** | Catálogo de productos | Código, Descripción, Precio, Stock |
| **Asientos** | Asientos contables | Fecha, Cuenta, Debe, Haber |
| **Facturas** | Facturas de venta/compra | Serie, Número, Fecha, Cliente |

## Proceso de Importación

### Paso 1: Preparar el Archivo

Asegúrese de que su archivo Excel cumpla con:

- Formato `.xlsx` o `.xls`
- Primera fila con encabezados
- Datos consistentes y limpios
- Campos obligigatorios completos

### Paso 2: Configurar la Conexión

1. Vaya a **Configuración** > **Conexión SAGE 50**
2. Configure los parámetros de conexión
3. Pruebe la conexión

### Paso 3: Ejecutar la Importación

1. Cargue el archivo Excel
2. Configure el mapeo de campos
3. Seleccione las opciones de importación
4. Haga clic en **"Importar"**
5. Monitoree el progreso

### Paso 4: Verificar Resultados

Al finalizar, revise:

- Cantidad de registros importados
- Errores producidos (si los hay)
- Tiempo total del proceso

## Comparación con Modo CSV

| Característica | Modo API | Modo CSV |
|----------------|----------|----------|
| **Velocidad** | Muy rápida | Más lento |
| **Intervención manual** | No necesaria | Requerida |
| **Validación** | Inmediata | Posterior |
| **Requisitos** | Licencia API | Ninguno |
| **Ideal para** | Importaciones frecuentes | Importaciones ocasionales |

!!! question "¿Qué Modo Elegir?"

    - Elija **Modo API** si tiene licencia y realiza importaciones frecuentes
    - Elija **Modo CSV** si no tiene licencia API o prefiere control manual

## Próximo Paso

- [Conceptos Básicos](conceptos.md) - Aprenda sobre la arquitectura del modo API
- [Conexión con SAGE 50](conexion.md) - Configure la conexión con SAGE 50

!!! warning "Limitaciones de la API**

    Algunas versiones de SAGE 50 tienen limitaciones en la API. Consulte la documentación de SAGE 50 para más información.
