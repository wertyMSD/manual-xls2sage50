---
title: Directorios y Archivos de xls2sage50
date: 2026-01-07
keywords:
  - directorios xls2sage50
  - estructura archivos
  - carpetas configuracion
  - ubicacion archivos
aliases:
  - configuracion/directorios.html
description: Estructura de directorios y archivos de xls2sage50. Ubicación de configuraciones, plantillas, logs y archivos de trabajo.
status: published
---

# Directorios y Archivos

Esta sección describe la estructura de directorios y archivos de xls2sage50.

## Estructura Principal

```
%USERPROFILE%\Documents\xls2sage50\
├── config.ini                  ← Configuración principal
├── procesos/                   ← Archivos de trabajo
│   └── uploads/               ← Archivos temporales de entrada
├── plantillas/                 ← Plantillas de configuración
│   ├── *.PREDEFINIDO          ← Plantillas guardadas
│   └── backup/                ← Copias de seguridad
├── csv/                        ← Archivos CSV generados
├── logs/                       ← Archivos de registro
│   ├── xls2sage50.log         ← Log principal
│   ├── error.log              ← Solo errores
│   └── debug.log              ← Log de depuración
└── backups/                   ← Copias de seguridad
    ├── config/                ← Backups de configuración
    └── plantillas/            ← Backups de plantillas
```

## Directorio de Instalación

```
C:\Program Files\xls2sage50\
├── xls2sage50.exe             ← Ejecutable principal
├── codigo/                    ← Código Python
│   ├── __init__.py
│   ├── xls2sage50.py          ← Punto de entrada
│   ├── gui/                   ← Módulos de interfaz
│   ├── core/                  ← Módulos centrales
│   └── utils/                 ← Utilidades
├── assets/                    ← Recursos
│   ├── images/               ← Imágenes e iconos
│   └── fonts/                ← Fuentes
└── libs/                      ← Dependencias
```

## Archivos de Configuración

### config.ini

Archivo principal de configuración.

**Ubicación:** `%USERPROFILE%\Documents\xls2sage50\config.ini`

**Contenido principal:**
- Configuración de API
- Directorios de trabajo
- Opciones de exportación CSV
- Configuración de logging

Ver: [Archivo config.ini](config-ini.md)

### .env

Archivo opcional para variables de entorno.

**Ubicación:** Directorio desde donde se ejecuta xls2sage50

**Uso:** Sobrescribe valores de config.ini

## Directorio de Plantillas

Contiene todas las plantillas de configuración.

```
plantillas/
├── Clientes_Mensual.PREDEFINIDO
├── Articulos_Precios.PREDEFINIDO
├── Asientos_Trimestral.PREDEFINIDO
├── backup/
│   ├── Clientes_Mensual.backup.20240115.PREDEFINIDO
│   └── ...
└── temp/                     ← Plantillas temporales
```

### Formato de Archivo

Las plantillas usan formato `.PREDEFINIDO` que es JSON con extensión personalizada.

!!! tip "Backup Automático**

    xls2sage50 crea automáticamente copias de seguridad de las plantillas antes de modificarlas.

## Directorio de Procesos

Contiene los archivos temporales durante el procesamiento.

```
procesos/
├── uploads/                  ← Archivos subidos por el usuario
│   ├── clientes_20240115.xlsx
│   └── ...
└── temp/                     ← Archivos temporales internos
    ├── cache/                ← Caché de DataFrames
    └── lock/                 ← Archivos de bloqueo
```

!!! note "Limpieza Automática**

    Los archivos temporales se eliminan automáticamente después de 7 días.

## Directorio de Logs

Contiene todos los archivos de registro.

```
logs/
├── xls2sage50.log           ← Log principal (INFO)
├── error.log                ← Solo errores (ERROR+)
├── debug.log                ← Depuración (DEBUG)
└── archive/                 ← Logs antiguos
    ├── xls2sage50.2024-01.log
    └── ...
```

### Rotación de Logs

Los logs se rotan automáticamente:

- **Tamaño máximo:** 10 MB por archivo
- **Archivos retenidos:** 30
- **Compresión:** Los logs antiguos se comprimen con gzip

## Directorio de Salida CSV

Contiene los archivos generados en modo CSV.

```
csv/
├── clientes_20240115.csv    ← CSV generado
├── clientes_20240115.sql    ← SQL generado
├── articulos_20240115.csv
└── reports/                 ← Reportes de generación
    └── clientes_20240115.html
```

## Archivos Temporales

### Lock Files

Archivos que previenen múltiples instancias:

```
%TEMP%\xls2sage50\
├── instance.lock            ← Bloqueo de instancia
└── upload_*.tmp             ← Archivos de subida temporal
```

### Caché

Archivos de caché para rendimiento:

```
%LOCALAPPDATA%\xls2sage50\
└── cache\
    ├── excel_metadata.cache  ← Metadatos de Excel
    └── api_session.cache     ← Sesiones API
```

## Ubicaciones por Tipo de Archivo

| Tipo de Archivo | Ubicación |
|-----------------|-----------|
| **Configuración** | `%USERPROFILE%\Documents\xls2sage50\` |
| **Plantillas** | `%USERPROFILE%\Documents\xls2sage50\plantillas\` |
| **Logs** | `%USERPROFILE%\Documents\xls2sage50\logs\` |
| **CSV generados** | `%USERPROFILE%\Documents\xls2sage50\csv\` |
| **Temporales** | `%TEMP%\xls2sage50\` |
| **Caché** | `%LOCALAPPDATA%\xls2sage50\cache\` |
| **Ejecutable** | `C:\Program Files\xls2sage50\` |

## Personalización de Ubicaciones

### Cambiar el Directorio Base

Para cambiar todas las ubicaciones a la vez:

```ini
# En config.ini
[APPLICATION]
BASE_DIR = D:\MisDocumentos\xls2sage50
```

### Directorios Individuales

O configure cada directorio individualmente:

```ini
[DIRECTORIES]
PROCESOS_DIR = D:\Procesos
TEMPLATES_DIR = E:\Configuraciones\Plantillas
CSV_SUBDIR = F:\Exportaciones\CSV
```

## Permisos Requeridos

La aplicación necesita permisos de:

| Directorio | Permisos |
|------------|----------|
| **Instalación** | Lectura |
| **Documentos\xls2sage50** | Lectura/Escritura |
| **Temp** | Lectura/Escritura |
| **LocalAppData** | Lectura/Escritura |

!!! warning "Permisos de Escritura**

    Asegúrese de que el usuario tiene permisos de escritura en las carpetas de Documents y Temp.

## Espacio en Disco

### Requisitos por Tipo de Uso

| Uso | Espacio Requerido |
|-----|-------------------|
| **Instalación** | 500 MB |
| **Operación normal** | 100 MB adicionales |
| **Archivos grandes** | 2x el tamaño del archivo Excel |
| **Logs extensos** | Hasta 500 MB (con rotación) |

### Limpieza de Espacio

Para liberar espacio:

1. **Eliminar logs antiguos:**
   ```bash
   del "%USERPROFILE%\Documents\xls2sage50\logs\archive\*.log"
   ```

2. **Eliminar CSV antiguos:**
   ```bash
   forfiles /P "%USERPROFILE%\Documents\xls2sage50\csv" /D -30 /C "cmd /c del @path"
   ```

3. **Vaciar caché:**
   ```bash
   rmdir /s /q "%LOCALAPPDATA%\xls2sage50\cache"
   ```

## Copias de Seguridad

### Backup Automático

xls2sage50 crea copias de seguridad de:

- **config.ini** antes de cambios importantes
- **Plantillas** antes de modificar
- **Archivos de trabajo** antes de procesar

### Ubicación de Backups

```
backups/
├── config/
│   └── config.backup.YYYYMMDDHHMMSS.ini
└── plantillas/
    └── *.backup.YYYYMMDDHHMMSS.PREDEFINIDO
```

## Próximo Paso

- [Registro de Logs](logs.md) - Configurar y revisar logs

!!! question "¿Necesita Ayuda?**

    Consulte [Solución de Problemas](../../solucion-problemas/index.md) si tiene problemas con archivos o directorios.
