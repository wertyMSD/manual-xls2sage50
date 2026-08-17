---
title: Configuración de xls2sage50
date: 2026-01-07
keywords:
  - configuracion xls2sage50
  - config.ini
  - preferencias aplicacion
  - ajustes sistema
aliases:
  - configuracion.html
description: Guía completa de configuración de xls2sage50: archivo config.ini, variables de entorno y opciones avanzadas.
status: published
---

# Configuración

Esta sección describe todas las opciones de configuración disponibles en xls2sage50.

## Contenido de esta Sección

1. [Archivo config.ini](config-ini.md) - Estructura y opciones del archivo principal
2. [Variables de Entorno](variables-entorno.md) - Configuración mediante variables de entorno
3. [Directorios y Archivos](directorios.md) - Estructura de carpetas y archivos
4. [Registro de Logs](logs.md) - Sistema de registro y depuración

## Tipos de Configuración

xls2sage50 puede configurarse de tres formas:

| Método | Prioridad | Descripción |
|--------|-----------|-------------|
| **Archivo config.ini** | Alta | Configuración persistente |
| **Variables de entorno** | Media | Sobrescribe config.ini |
| **Argumentos CLI** | Máxima | Sobrescribe todo |

## Ubicación de Archivos de Configuración

```
%USERPROFILE%\Documents\xls2sage50\
├── config.ini              ← Configuración principal
├── plantillas/              ← Plantillas guardadas
├── csv/                     ← Archivos CSV generados
├── logs/                    ← Archivos de registro
└── procesos/                ← Archivos temporales
```

## Configuración Rápida

### Cambiar una Opción

1. Abra xls2sage50
2. Vaya a **Configuración**
3. Modifique la opción deseada
4. Haga clic en **"Guardar"**

### Editar config.ini Manualmente

1. Cierre xls2sage50
2. Abra `%USERPROFILE%\Documents\xls2sage50\config.ini`
3. Modifique los valores deseados
4. Guarde el archivo
5. Reinicie xls2sage50

!!! warning "Cierre la Aplicación Primero**

    Si edita config.ini manualmente, asegúrese de que xls2sage50 esté cerrado para evitar que se sobrescriban los cambios.

## Configuración Inicial

Al iniciar por primera vez, xls2sage50 crea un config.ini predeterminado:

```ini
[API]
API_SAGE50 = true
API_PORT = 16500
API_TIMEOUT = 30

[APPLICATION]
DEFAULT_MODE = BOTH
DEFAULT_PORT = 5900

[DIRECTORIES]
PROCESOS_DIR = procesos
UPLOADS_SUBDIR = uploads
TEMPLATES_SUBDIR = plantillas
CSV_SUBDIR = csv

[LOGGING]
LOG_LEVEL = INFO
FILE_LOGGING = true
CONSOLE_LOGGING = true
```

## Próximo Paso

- [Archivo config.ini](config-ini.md) - Detalles del archivo de configuración

!!! question "¿Necesita Ayuda?**

    Consulte [Solución de Problemas](../solucion-problemas/index.md) si tiene problemas con la configuración.
