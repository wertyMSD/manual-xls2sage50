---
title: Configuración del Modo CSV
date: 2026-01-07
keywords:
  - configurar csv sage 50
  - opciones exportacion csv
  - separador csv
  - codificacion csv
aliases:
  - modo-csv/configuracion.html
description: Aprenda a configurar las opciones de generación CSV en xls2sage50: separadores, codificación, formatos y más.
status: published
---

# Configuración CSV

Configure las opciones de generación de archivos CSV para asegurar la compatibilidad con SAGE 50.

## Opciones de Configuración

### Pantalla de Configuración CSV

![Configuración CSV](img:csv-configuracion.png)

Acceda desde: **Proceso CSV** > **Opciones de Salida**

## Separador de Campos

El separador es el carácter que divide los campos en cada línea del archivo CSV.

### Opciones Disponibles

| Separador | Carácter | Cuándo Usarlo |
|-----------|----------|---------------|
| **Punto y coma** | `;` | SAGE 50 y formatos europeos |
| **Coma** | `,` | Formatos ingleses |
| **Tabulador** | Tab | Archivos de texto |

!!! warning "Separador para SAGE 50**

    Use siempre **punto y coma (;)** para SAGE 50, ya que es el separador estándar que espera la aplicación.

### Ejemplo con Diferentes Separadores

**Mismo archivo con coma:**
```csv
Nombre,Precio,Stock
"Producto A, variado",25.50,100
```

**Mismo archivo con punto y coma:**
```csv
Nombre;Precio;Stock
Producto A, variado;25,50;100
```

## Codificación de Caracteres

La codificación determina cómo se representan los caracteres especiales.

### Opciones Disponibles

| Codificación | Caracteres | Compatibilidad |
|--------------|------------|----------------|
| **UTF-8** | Todos los caracteres | Muy alta |
| **UTF-8 con BOM** | Todos los caracteres + marca | Máxima con SAGE 50 |
| **Latin1** | Caracteres europeos | Media |

!!! tip "UTF-8 con BOM para SAGE 50**

    Use UTF-8 con BOM (Byte Order Mark) para asegurar que SAGE 50 reconozca correctamente los caracteres especiales como la ñ y las vocales con tilde.

### Prueba de Caracteres Especiales

| Carácter | UTF-8 | Latin1 |
|----------|--------|--------|
| ñ | :white_check_mark: | :white_check_mark: |
| á, é, í, ó, ú | :white_check_mark: | :white_check_mark: |
| ç | :white_check_mark: | :white_check_mark: |
| | :white_check_mark: | :x: |
| | :white_check_mark: | :x: |

## Manejo de Comillas

Configure cuándo se deben usar comillas alrededor de los valores.

### Opciones Disponibles

| Opción | Descripción | Ejemplo |
|--------|-------------|---------|
| **Siempre** | Todos los valores entre comillas | `"valor"` |
| **Solo necesarias** | Solo si contiene separador o comillas | `"valor con, coma"` |
| **Nunca** | Nunca usar comillas | `valor` |

!!! tip "Use "Solo Necesarias"**

    Esta opción reduce el tamaño del archivo y mantiene la compatibilidad con SAGE 50.

## Formatos de Fecha y Hora

### Formatos de Fecha

| Formato | Ejemplo | Uso en SAGE 50 |
|---------|---------|----------------|
| **DD/MM/AAAA** | 01/02/2024 | :white_check_mark: Recomendado |
| **DD-MM-AAAA** | 01-02-2024 | :white_check_mark: Compatible |
| **AAAA/MM/DD** | 2024/02/01 | :warning: Puede requerir configuración |
| **AAAA-MM-DD** | 2024-02-01 | :warning: Formato ISO |

### Formatos de Hora

| Formato | Ejemplo |
|---------|---------|
| **HH:MM:SS** | 14:30:00 |
| **HH:MM** | 14:30 |

## Formatos Numéricos

### Separador Decimal

| Opción | Carácter | Ejemplo |
|--------|----------|---------|
| **Coma** | `,` | 1.234,56 |
| **Punto** | `.` | 1,234.56 |

!!! warning "Consistencia con SAGE 50**

    Use coma como separador decimal si SAGE 50 está configurado con formato español.

### Miles

| Opción | Carácter | Ejemplo |
|--------|----------|---------|
| **Punto** | `.` | 1.234,56 |
| **Ninguno** | - | 1234,56 |
| **Coma** | `,` | 1,234.56 (inglés) |

## Encabezados

Configure si el archivo debe incluir la fila de encabezados.

| Opción | Descripción |
|--------|-------------|
| **Incluir encabezados** | Primera fila con nombres de campos |
| **Sin encabezados** | Solo datos |

!!! tip "Incluya Encabezados**

    SAGE 50 requiere encabezados para identificar correctamente cada campo durante la importación.

## Archivo de Configuración

Puede guardar su configuración CSV preferida en el archivo `config.ini`:

```ini
[CSV_EXPORT]
# Separador de campos (comma, semicolon, tab)
separator = semicolon

# Codificación (utf8, utf8_bom, latin1)
encoding = utf8_bom

# Incluir BOM (true/false)
include_bom = true

# Manejo de comillas (always, necessary, never)
quote_mode = necessary

# Formato de fecha (dd/mm/yyyy, dd-mm-yyyy, yyyy-mm-dd)
date_format = dd/mm/yyyy

# Separador decimal (comma, period)
decimal_separator = comma

# Incluir encabezados (true/false)
include_headers = true
```

## Presets de Configuración

### Preset SAGE 50 (Recomendado)

Configuración optimizada para SAGE 50:

```yaml
separador: ";"
codificacion: "UTF-8 con BOM"
comillas: "Solo necesarias"
fecha: "DD/MM/AAAA"
decimal: ","
miles: "."
encabezados: Sí
```

### Preset Excel

Configuración para abrir directamente en Excel:

```yaml
separador: ","
codificacion: "UTF-8"
comillas: "Siempre"
fecha: "AAAA-MM-DD"
decimal: "."
miles: ","
encabezados: Sí
```

## Guardar Cargar Configuración

### Guardar Configuración

1. Configure las opciones deseadas
2. Haga clic en **"Guardar como Preset"**
3. Asigne un nombre (por ejemplo, "SAGE 50 Estándar")
4. Haga clic en **"Guardar"**

### Cargar Configuración

1. Haga clic en el desplegable de presets
2. Seleccione el preset deseado
3. Las opciones se cargarán automáticamente

## Próximo Paso

- [Generación de SQL](generacion-sql.md) - Aprenda a generar scripts SQL

!!! question "¿Problemas con la Importación?**

    Si SAGE 50 no reconoce correctamente el archivo, revise especialmente el separador y la codificación.
