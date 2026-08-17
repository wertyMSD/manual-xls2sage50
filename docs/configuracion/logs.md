---
title: Sistema de Logs de xls2sage50
date: 2026-01-07
keywords:
  - logs xls2sage50
  - registro errores
  - depuracion debug
  - archivos log
aliases:
  - configuracion/logs.html
description: Guía del sistema de logging de xls2sage50: niveles, configuración, ubicación y revisión de archivos de registro.
status: published
---

# Sistema de Logs

El sistema de logs registra todos los eventos importantes de xls2sage50 para ayudar en el diagnóstico de problemas.

## Niveles de Log

| Nivel | Valor | Descripción | Uso |
|-------|-------|-------------|-----|
| **DEBUG** | 10 | Información detallada de depuración | Desarrollo |
| **INFO** | 20 | Información general | Producción |
| **WARNING** | 30 | Advertencias | Problemas no críticos |
| **ERROR** | 40 | Errores que ocurrieron | Problemas que requieren atención |
| **CRITICAL** | 50 | Errores críticos | Fallos graves de la aplicación |

## Archivos de Log

### Ubicación

```
%USERPROFILE%\Documents\xls2sage50\logs\
├── xls2sage50.log           ← Log principal (INFO+)
├── error.log                ← Solo errores (ERROR+)
└── debug.log                ← Depuración (DEBUG+)
```

### Contenido de Cada Archivo

| Archivo | Niveles incluidos | Tamaño típico |
|---------|-------------------|---------------|
| `xls2sage50.log` | INFO, WARNING, ERROR, CRITICAL | 1-10 MB |
| `error.log` | ERROR, CRITICAL | 100 KB - 1 MB |
| `debug.log` | Todos (DEBUG a CRITICAL) | 10-100 MB |

## Configurar el Logging

### Desde config.ini

```ini
[LOGGING]
# Nivel mínimo de logging
LOG_LEVEL = INFO

# Habilitar logging a archivo
FILE_LOGGING = true

# Habilitar logging en consola
CONSOLE_LOGGING = true

# Nombre del archivo principal
LOG_FILE = xls2sage50.log

# Tamaño máximo de archivo (bytes)
MAX_LOG_SIZE = 10485760

# Cantidad de archivos a retener
MAX_LOG_FILES = 30
```

### Desde Variables de Entorno

```bash
# Establecer nivel de logging
set XLS2SAGE50_LOG_LEVEL=DEBUG

# Deshabilitar logging a archivo
set XLS2SAGE50_LOG_TO_FILE=false
```

## Ejemplo de Log

### Formato de Entrada de Log

```
2024-01-15 10:30:45,123 [INFO] xls2sage50.main - Iniciando aplicación
2024-01-15 10:30:45,234 [INFO] xls2sage50.config - Cargando configuración desde config.ini
2024-01-15 10:30:45,345 [INFO] xls2sage50.api - Conectando a SAGE 50 API en localhost:16500
2024-01-15 10:30:45,456 [INFO] xls2sage50.api - Conexión establecida correctamente
2024-01-15 10:30:46,567 [INFO] xls2sage50.import - Iniciando importación de Clientes_Mensual
2024-01-15 10:30:46,678 [INFO] xls2sage50.import - Leyendo archivo clientes.xlsx...
2024-01-15 10:30:47,789 [INFO] xls2sage50.import - Encontrados 150 registros
2024-01-15 10:30:50,123 [INFO] xls2sage50.import - Importación completada: 150 exitosos, 0 errores
```

### Elementos de una Entrada

| Parte | Ejemplo | Descripción |
|-------|---------|-------------|
| **Timestamp** | `2024-01-15 10:30:45,123` | Fecha y hora con milisegundos |
| **Nivel** | `[INFO]` | Nivel de log |
| **Módulo** | `xls2sage50.import` | Módulo que generó el log |
| **Mensaje** | `Importación completada` | Mensaje descriptivo |

## Revisar los Logs

### Desde la Interfaz Gráfica

1. Abra xls2sage50
2. Vaya a **Configuración** > **Logs**
3. Seleccione el archivo a revisar
4. El visor de logs se abrirá

!!! tip "Visor de Logs**

    El visor de logs incluye:
    - Resaltado de sintaxis
    - Filtrado por nivel
    - Búsqueda de texto
    - Saltos a errores/warnings

### Desde Línea de Comandos

**Ver las últimas 50 líneas:**
```bash
powershell -command "Get-Content '%USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log' -Tail 50"
```

**Buscar errores:**
```bash
findstr /C:"ERROR" "%USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log"
```

**Ver log en tiempo real:**
```bash
powershell -command "Get-Content '%USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log' -Wait -Tail 20"
```

### Con Editores de Texto

**Notepad++ (recomendado):**
1. Abra el archivo de log
2. Use **Buscar** > **Marcar** para resaltar niveles
3. Marque "[ERROR]" en rojo, "[WARNING]" en amarillo
4. Use **Filtros** para mostrar solo líneas marcadas

**VS Code:**
1. Abra el archivo de log
2. Instale extensión "Log File Highlighter"
3. Los diferentes niveles se colorean automáticamente

## Debug Logging

El modo DEBUG registra información muy detallada:

!!! warning "Mucha Información**

    El modo DEBUG genera grandes cantidades de información. Úselo solo cuando esté diagnosticando un problema.

### Activar Debug

**Temporalmente (desde CLI):**
```bash
set XLS2SAGE50_LOG_LEVEL=DEBUG
python xls2sage50.py run --template=Clientes --file=clientes.xlsx
```

**Permanente (en config.ini):**
```ini
[LOGGING]
LOG_LEVEL = DEBUG
```

### Desactivar Debug

Vuelva a establecer el nivel en INFO:

```ini
[LOGGING]
LOG_LEVEL = INFO
```

## Rotación de Logs

Los logs se rotan automáticamente:

1. Cuando el log alcanza el tamaño máximo (10 MB)
2. Se renombra añadiendo un timestamp
3. Se crea un nuevo archivo de log
4. Los logs antiguos se eliminan después de 30 archivos

### Archivos Rotados

```
logs/
├── xls2sage50.log           ← Log actual
├── xls2sage50.log.20240115   ← Log del dia 15
├── xls2sage50.log.20240114   ← Log del dia 14
└── ...
```

## Logs de Errores

### error.log

Este archivo contiene solo errores y eventos críticos:

```log
2024-01-15 10:35:12,123 [ERROR] xls2sage50.api - Error de conexión: Connection refused
2024-01-15 10:35:12,234 [ERROR] xls2sage50.import - Fallo al importar registro CLI001: Código duplicado
2024-01-15 10:35:15,345 [CRITICAL] xls2sage50.main - Aplicación debe cerrarse por error fatal
```

!!! tip "Revisar error.log Primero**

    Cuando investigue un problema, revise primero error.log para identificar rápidamente los problemas.

## Exportar Logs

Para compartir logs con soporte:

### Desde la Interfaz Gráfica

1. Vaya a **Ayuda** > **Diagnóstico**
2. Haga clic en **"Exportar Logs"**
3. Se crea un archivo .zip con todos los logs

### Manualmente

```bash
# Crear archivo comprimido con logs
powershell -command "Compress-Archive -Path '%USERPROFILE%\Documents\xls2sage50\logs\*' -DestinationPath logs_para_soporte.zip"
```

## Análisis de Logs

### Patrones Comunes

| Patrón | Significado |
|--------|-------------|
| `Connection refused` | Error de conexión con SAGE 50 |
| `Timeout` | Operación tardó demasiado tiempo |
| `Duplicate key` | Código duplicado en importación |
| `Validation failed` | Dato no pasó validación |
| `Permission denied` | Problema de permisos |

### Buscar un Error Específico

```bash
# Buscar en logs
findstr /C:"Connection refused" "%USERPROFILE%\Documents\xls2sage50\logs\*.log"

# Con contexto (2 líneas antes y después)
findstr /C:"Connection refused" /C:"Timeout" "%USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log" > errores_encontrados.txt
```

## Problemas Comunes de Logging

### Log Crece Demasiado

!!! warning "Archivo de log muy grande"

    **Causa:** Nivel DEBUG activado permanentemente

    **Solución:**
    1. Establezca LOG_LEVEL=INFO
    2. Elimine logs antiguos
    3. El tamaño volverá a lo normal

### Log Sin Información

!!! warning "El log parece vacío o incompleto"

    **Causa:** Nivel demasiado alto (CRITICAL o ERROR) o logging deshabilitado

    **Solución:**
    1. Verifique FILE_LOGGING=true
    2. Establezca LOG_LEVEL=INFO o DEBUG
    3. Revise permisos en carpeta logs

## Próximo Paso

- [Solución de Problemas](../solucion-problemas/index.md) - Usar logs para resolver problemas

!!! question "¿Necesita Ayuda?**

    Si los logs no aportan información clara, use el modo DEBUG y repita la operación para obtener más detalles.
