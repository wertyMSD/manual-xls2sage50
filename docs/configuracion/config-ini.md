---
title: Archivo config.ini de xls2sage50
date: 2026-01-07
keywords:
  - config.ini xls2sage50
  - archivo configuracion
  - opciones config
  - parametros ini
aliases:
  - configuracion/config-ini.html
description: Estructura y opciones del archivo config.ini de xls2sage50. Aprenda a configurar todos los parámetros de la aplicación.
status: published
---

# Archivo config.ini

El archivo `config.ini` contiene toda la configuración de xls2sage50. Este documento describe su estructura y opciones.

## Ubicación

El archivo se encuentra en:

```
%USERPROFILE%\Documents\xls2sage50\config.ini
```

Para abrirlo rápidamente:

1. Presione `Win + R`
2. Escriba: `%USERPROFILE%\Documents\xls2sage50\config.ini`
3. Presione Enter

## Estructura del Archivo

```ini
[API]
API_SAGE50 = true
API_PORT = 16500
API_TIMEOUT = 30

[APPLICATION]
DEFAULT_MODE = BOTH
DEFAULT_PORT = 5900
SILENCIO = false

[DIRECTORIES]
PROCESOS_DIR = procesos
UPLOADS_SUBDIR = uploads
TEMPLATES_SUBDIR = plantillas
CSV_SUBDIR = csv

[CSV_EXPORT]
SEPARATOR = semicolon
ENCODING = utf8_bom
INCLUDE_HEADERS = true
QUOTE_MODE = necessary

[LOGGING]
LOG_LEVEL = INFO
FILE_LOGGING = true
CONSOLE_LOGGING = true
LOG_FILE = xls2sage50.log

[PERFORMANCE]
CHUNK_SIZE = 100
MAX_THREADS = 4
CACHE_ENABLED = true

[VALIDATION]
STRICT_MODE = false
VALIDATE_NIF = true
VALIDATE_CPostales = true
```

## Secciones y Opciones

### [API]

Configuración del modo de importación por API.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `API_SAGE50` | Boolean | `true` | Habilitar modo API |
| `API_PORT` | Integer | `16500` | Puerto de comunicación con SAGE 50 |
| `API_TIMEOUT` | Integer | `30` | Timeout en segundos |
| `API_HOST` | String | `localhost` | Host del servidor API |

!!! note "Configuración de Red**

    Si SAGE 50 está en otro servidor, configure `API_HOST` con la dirección IP o nombre del equipo.

### [APPLICATION]

Configuración general de la aplicación.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `DEFAULT_MODE` | String | `BOTH` | Modo predeterminado: API, CSV o BOTH |
| `DEFAULT_PORT` | Integer | `5900` | Puerto para interfaz web |
| `SILENCIO` | Boolean | `false` | Modo silencioso (sin ventana) |
| `THEME` | String | `system` | Tema: light, dark, system |
| `LANGUAGE` | String | `es` | Idioma de la interfaz |

### [DIRECTORIES]

Configuración de directorios de trabajo.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `PROCESOS_DIR` | String | `procesos` | Directorio de procesos |
| `UPLOADS_SUBDIR` | String | `uploads` | Subdirectorio de uploads |
| `TEMPLATES_SUBDIR` | String | `plantillas` | Subdirectorio de plantillas |
| `CSV_SUBDIR` | String | `csv` | Subdirectorio de CSV |

!!! tip "Rutas Relativas**

    Las rutas pueden ser relativas al directorio de la aplicación o absolutas (ej: `C:\MisDocumentos\plantillas`).

### [CSV_EXPORT]

Configuración de exportación CSV.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `SEPARATOR` | String | `semicolon` | Separador: comma, semicolon, tab |
| `ENCODING` | String | `utf8_bom` | Codificación: utf8, utf8_bom, latin1 |
| `INCLUDE_HEADERS` | Boolean | `true` | Incluir fila de encabezados |
| `QUOTE_MODE` | String | `necessary` | Comillas: always, necessary, never |
| `DATE_FORMAT` | String | `dd/mm/yyyy` | Formato de fecha |

### [LOGGING]

Configuración del sistema de registro.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `LOG_LEVEL` | String | `INFO` | Nivel: DEBUG, INFO, WARNING, ERROR |
| `FILE_LOGGING` | Boolean | `true` | Guardar logs en archivo |
| `CONSOLE_LOGGING` | Boolean | `true` | Mostrar logs en consola |
| `LOG_FILE` | String | `xls2sage50.log` | Nombre del archivo de log |
| `MAX_LOG_SIZE` | Integer | `10485760` | Tamaño máximo de log en bytes |

### [PERFORMANCE]

Opciones de rendimiento.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `CHUNK_SIZE` | Integer | `100` | Registros por lote |
| `MAX_THREADS` | Integer | `4` | Máximo de hilos de procesamiento |
| `CACHE_ENABLED` | Boolean | `true` | Habilitar caché de datos |
| `READ_ONLY` | Boolean | `false` | Abrir archivos como solo lectura |

### [VALIDATION]

Opciones de validación de datos.

| Opción | Tipo | Valor Por Defecto | Descripción |
|-------|------|-------------------|-------------|
| `STRICT_MODE` | Boolean | `false` | Modo estricto de validación |
| `VALIDATE_NIF` | Boolean | `true` | Validar formato de NIF |
| `VALIDATE_CPostales` | Boolean | `true` | Validar códigos postales |
| `VALIDATE_PHONES` | Boolean | `false` | Validar números de teléfono |
| `ALLOW_EMPTY_CODES` | Boolean | `false` | Permitir códigos vacíos |

## Valores Booleanos

Los valores booleanos se expresan como:

| Verdadero | Falso |
|-----------|-------|
| `true` | `false` |
| `1` | `0` |
| `yes` | `no` |

Ejemplos válidos:
```ini
API_SAGE50 = true
FILE_LOGGING = 1
CACHE_ENABLED = yes
```

## Modificar el Archivo

### Desde la Interfaz Gráfica

1. Abra xls2sage50
2. Vaya a **Configuración**
3. Modifique las opciones deseadas
4. Haga clic en **"Guardar"**
5. Los cambios se guardan en config.ini

### Editando Manualmente

1. Cierre xls2sage50
2. Abra config.ini en un editor de texto
3. Modifique los valores deseados
4. Guarde el archivo
5. Reinicie xls2sage50

!!! warning "Cierre la Aplicación Primero**

    Si edita config.ini mientras xls2sage50 está abierto, los cambios pueden sobrescribirse al cerrar.

## Variables de Entorno

Las variables de entorno pueden sobrescribir valores del config.ini:

| Variable | Sobrescribe |
|----------|-------------|
| `XLS2SAGE50_API_PORT` | `[API] API_PORT` |
| `XLS2SAGE50_LOG_LEVEL` | `[LOGGING] LOG_LEVEL` |
| `XLS2SAGE50_MODE` | `[APPLICATION] DEFAULT_MODE` |

### Ejemplo

```bash
# Sobrescribir puerto usando variable de entorno
set XLS2SAGE50_API_PORT=17000
python xls2sage50.py run --template=Clientes --file=clientes.xlsx
```

## Archivo de Configuración de Ejemplo

```ini
# ============================================================================
# xls2sage50 - Archivo de Configuración
# ============================================================================

[API]
# Configuración del modo API
API_SAGE50 = true
API_PORT = 16500
API_TIMEOUT = 30
API_HOST = localhost

[APPLICATION]
# Configuración general
DEFAULT_MODE = BOTH
DEFAULT_PORT = 5900
SILENCIO = false
THEME = system
LANGUAGE = es

[DIRECTORIES]
# Directorios de trabajo (relativos al directorio del usuario)
PROCESOS_DIR = procesos
UPLOADS_SUBDIR = uploads
TEMPLATES_SUBDIR = plantillas
CSV_SUBDIR = csv

[CSV_EXPORT]
# Configuración de exportación CSV
SEPARATOR = semicolon
ENCODING = utf8_bom
INCLUDE_HEADERS = true
QUOTE_MODE = necessary
DATE_FORMAT = dd/mm/yyyy
DECIMAL_SEPARATOR = comma

[LOGGING]
# Configuración de logging
LOG_LEVEL = INFO
FILE_LOGGING = true
CONSOLE_LOGGING = true
LOG_FILE = xls2sage50.log
MAX_LOG_SIZE = 10485760

[PERFORMANCE]
# Opciones de rendimiento
CHUNK_SIZE = 100
MAX_THREADS = 4
CACHE_ENABLED = true

[VALIDATION]
# Opciones de validación
STRICT_MODE = false
VALIDATE_NIF = true
VALIDATE_CPostales = true
```

## Validación del Archivo

Si config.ini tiene errores sintácticos, xls2sage50 mostrará:

```
Error al leer config.ini
Línea 15: valor inválido para API_PORT
Usando configuración predeterminada.
```

!!! tip "Validación de Configuración**

    Si sospecha que hay errores en config.ini, renombre el archivo y reinicie xls2sage50. Se creará uno nuevo con valores predeterminados.

## Próximo Paso

- [Variables de Entorno](variables-entorno.md) - Configuración mediante variables de entorno
