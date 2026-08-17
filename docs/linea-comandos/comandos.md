---
title: Comandos Disponibles en CLI
date: 2026-01-07
keywords:
  - comandos cli xls2sage50
  - argumentos linea comandos
  - opciones python
  - sintaxis cli
aliases:
  - linea-comandos/comandos.html
description: Lista completa de comandos y opciones de la interfaz de línea de comandos de xls2sage50 con ejemplos de uso.
status: published
---

# Comandos Disponibles

Esta sección describe todos los comandos disponibles en la interfaz de línea de comandos de xls2sage50.

## Sintaxis General

```bash
python xls2sage50.py [COMANDO] [OPCIONES]
```

## Comando: run

Ejecuta una plantilla de importación.

### Sintaxis

```bash
python xls2sage50.py run --template=NOMBRE --file=ARCHIVO [OPCIONES]
```

### Opciones

| Opción | Corta | Descripción | Valor |
|--------|-------|-------------|-------|
| `--template` | `-t` | Nombre de la plantilla | String (requerido) |
| `--file` | `-f` | Archivo Excel a importar | String (requerido) |
| `--output` | `-o` | Directorio de salida | String |
| `--mode` | `-m` | Modo de importación (api, csv) | String |
| `--dry-run` | `-d` | Simula la importación | Boolean |
| `--verbose` | `-v` | Salida detallada | Boolean |
| `--quiet` | `-q` | Sin salida | Boolean |

### Ejemplos

```bash
# Ejecutar plantilla básica
python xls2sage50.py run --template=Clientes_Mensual --file=clientes.xlsx

# Con salida detallada
python xls2sage50.py run -t Clientes_Mensual -f clientes.xlsx --verbose

# Simulación sin importar
python xls2sage50.py run --template=Clientes_Mensual --file=clientes.xlsx --dry-run

# Especificar directorio de salida
python xls2sage50.py run --template=Articulos --file=articulos.xlsx --output=C:\Salida

# Modo silencioso (solo código de salida)
python xls2sage50.py run --template=Clientes --file=clientes.xlsx --quiet
```

## Comando: validate

Valida una plantilla sin importar datos.

### Sintaxis

```bash
python xls2sage50.py validate --template=NOMBRE [OPCIONES]
```

### Opciones

| Opción | Corta | Descripción | Valor |
|--------|-------|-------------|-------|
| `--template` | `-t` | Nombre de la plantilla | String (requerido) |
| `--file` | `-f` | Archivo Excel para validar | String |
| `--strict` | `-s` | Validación estricta | Boolean |

### Ejemplos

```bash
# Validar plantilla
python xls2sage50.py validate --template=Clientes_Mensual

# Validar con archivo
python xls2sage50.py validate --template=Clientes_Mensual --file=clientes.xlsx

# Validación estricta
python xls2sage50.py validate --template=Clientes_Mensual --strict
```

## Comando: list

Lista todas las plantillas disponibles.

### Sintaxis

```bash
python xls2sage50.py list [OPCIONES]
```

### Opciones

| Opción | Corta | Descripción | Valor |
|--------|-------|-------------|-------|
| `--format` | `-f` | Formato de salida (table, json, csv) | String |
| `--filter` | `-F` | Filtrar por tipo | String |

### Ejemplos

```bash
# Listar todas las plantillas
python xls2sage50.py list

# Listar en formato JSON
python xls2sage50.py list --format=json

# Filtrar por tipo
python xls2sage50.py list --filter=api
python xls2sage50.py list --filter=csv
```

### Salida Ejemplo

```
Plantillas disponibles:
┌─────────────────────────┬──────────┬─────────┬──────────────────────┐
│ Nombre                  │ Modo     │ Entidad │ Descripción          │
├─────────────────────────┼──────────┼─────────┼──────────────────────┤
│ Clientes_Mensual        │ API      │ Clientes│ Importación mensual   │
│ Articulos_Precios       │ CSV      │ Artículos│ Actualización precios│
│ Asientos_Trimestral     │ API      │ Asientos│ Asientos trimestrales│
└─────────────────────────┴──────────┴─────────┴──────────────────────┘
```

## Comando: info

Muestra información detallada de una plantilla.

### Sintaxis

```bash
python xls2sage50.py info --template=NOMBRE
```

### Opciones

| Opción | Corta | Descripción | Valor |
|--------|-------|-------------|-------|
| `--template` | `-t` | Nombre de la plantilla | String (requerido) |
| `--json` | `-j` | Salida en formato JSON | Boolean |

### Ejemplos

```bash
# Mostrar información
python xls2sage50.py info --template=Clientes_Mensual

# Mostrar en JSON
python xls2sage50.py info --template=Clientes_Mensual --json
```

## Comando: help

Muestra ayuda sobre comandos.

### Sintaxis

```bash
python xls2sage50.py help [COMANDO]
```

### Ejemplos

```bash
# Ayuda general
python xls2sage50.py help

# Ayuda de un comando específico
python xls2sage50.py help run
python xls2sage50.py help validate
```

## Opciones Globales

Estas opciones están disponibles para todos los comandos:

| Opción | Descripción | Valor |
|--------|-------------|-------|
| `--config` | Ruta al archivo de configuración | String |
| `--log-level` | Nivel de logging (DEBUG, INFO, WARNING, ERROR) | String |
| `--no-color` | Deshabilitar colores en la salida | Boolean |
| `--version` | Mostrar versión y salir | Boolean |

### Ejemplos

```bash
# Usar archivo de configuración personalizado
python xls2sage50.py run --template=Clientes --file=clientes.xlsx --config=config_prod.ini

# Establecer nivel de logging
python xls2sage50.py run --template=Clientes --file=clientes.xlsx --log-level=DEBUG

# Sin colores en la salida
python xls2sage50.py list --no-color

# Mostrar versión
python xls2sage50.py --version
```

## Códigos de Salida

| Código | Significado |
|--------|-------------|
| `0` | Ejecución exitosa |
| `1` | Errores durante la ejecución |
| `2` | Argumentos inválidos o faltantes |
| `3` | Archivo no encontrado |
| `4` | Error de conexión con SAGE 50 |
| `5` | Error de validación |
| `6` | Plantilla no encontrada |
| `7` | Error de permisos |

### Verificar Código de Salida

```bash
# En Windows
python xls2sage50.py run --template=Clientes --file=clientes.xlsx
echo %ERRORLEVEL%

# En PowerShell
python xls2sage50.py run --template=Clientes --file=clientes.xlsx
echo $LASTEXITCODE
```

## Salida en Formato JSON

Para procesamiento por scripts, algunos comandos soportan salida JSON:

```bash
# Listar plantillas en JSON
python xls2sage50.py list --format=json

# Info de plantilla en JSON
python xls2sage50.py info --template=Clientes_Mensual --json
```

### Ejemplo de Salida JSON

```json
{
  "plantillas": [
    {
      "nombre": "Clientes_Mensual",
      "modo": "API",
      "entidad": "Clientes",
      "descripcion": "Importación mensual de clientes",
      "campos": {
        "CODIGO": "CodigoCliente",
        "NOMBRE": "NombreCliente",
        "NIF": "NIF"
      }
    }
  ]
}
```

## Atajos y Alias

| Alias | Comando Completo |
|-------|------------------|
| `xls2sage50 ls` | `xls2sage50 list` |
| `xls2sage50 info` | `xls2sage50 list --info` |
| `xls2sage50 -v` | `xls2sage50 --version` |
| `xls2sage50 -h` | `xls2sage50 --help` |

## Variables de Entorno

Las variables de entorno pueden usarse para configurar el comportamiento:

| Variable | Descripción | Valor |
|----------|-------------|-------|
| `XLS2SAGE50_CONFIG` | Ruta al archivo de configuración | String |
| `XLS2SAGE50_LOG_LEVEL` | Nivel de logging predeterminado | String |
| `XLS2SAGE50_TEMPLATES_DIR` | Directorio de plantillas | String |
| `XLS2SAGE50_OUTPUT_DIR` | Directorio de salida predeterminado | String |

### Ejemplo

```bash
# Establecer directorio de plantillas
set XLS2SAGE50_TEMPLATES_DIR=C:\MisPlantillas
python xls2sage50.py list
```

## Próximo Paso

- [Automatización](automatizacion.md) - Crear tareas programadas y scripts
