---
title: Configuración Inicial de xls2sage50
date: 2026-01-07
keywords:
  - configuracion inicial xls2sage50
  - primera configuracion
  - config.ini
  - sage 50 conexion
aliases:
  - instalacion/configuracion-inicial.html
description: Guía para la primera configuración de xls2sage50. Aprenda a configurar el archivo config.ini, establecer conexión con SAGE 50 y personalizar las opciones iniciales.
status: published
---

# Configuración Inicial

Después de instalar xls2sage50, deberá realizar una configuración inicial antes de poder utilizar la aplicación. Esta guía le acompañará paso a paso.

## Primer Inicio de la Aplicación

### Paso 1: Iniciar xls2sage50

**Desde el Acceso Directo:**
1. Haga doble clic en el icono de xls2sage50 en el escritorio
2. O busque "xls2sage50" en el menú de inicio

**Desde Línea de Comandos:**
```bash
# Navegar al directorio de instalación
cd "C:\Program Files\xls2sage50"

# Ejecutar la aplicación
xls2sage50.exe
```

### Paso 2: Pantalla de Bienvenida

![Pantalla de bienvenida](img:configuracion-pantalla-bienvenida.png)

Al iniciar por primera vez, verá la pantalla de bienvenida que le guiará a través del proceso de configuración inicial.

## Asistente de Configuración Inicial

### Paso 1: Selección de Idioma

![Selección de idioma](img:configuracion-idioma.png)

1. Seleccione su idioma preferido (Español, Inglés)
2. Haga clic en **"Siguiente"**

El idioma seleccionado se aplicará a toda la interfaz de la aplicación.

### Paso 2: Modo de Operación

![Selección de modo](img:configuracion-modo-operacion.png)

Seleccione el modo de operación principal:

| Modo | Descripción | Cuándo Elegirlo |
|------|-------------|-----------------|
| **Modo API** | Importación directa usando SAGE 50 API | Tiene licencia API de SAGE 50 |
| **Modo CSV** | Generación de archivos para importar manual | No tiene licencia API o prefiere control manual |
| **Ambos** | Permite cambiar entre modos | Desea flexibilidad según la situación |

!!! tip "Recomendación"

    Si no está seguro, seleccione **"Ambos"**. Podrá cambiar el modo predeterminado más tarde en la configuración.

### Paso 3: Configuración de Directorios

![Configuración de directorios](img:configuracion-directorios.png)

Configure los directorios de trabajo:

| Directorio | Propósito | Ubicación Predeterminada |
|------------|-----------|--------------------------|
| **Procesos** | Archivos de trabajo y temporales | `%USERPROFILE%\Documents\xls2sage50\procesos` |
| **Plantillas** | Configuraciones de mapeo guardadas | `%USERPROFILE%\Documents\xls2sage50\plantillas` |
| **Logs** | Archivos de registro de errores | `%USERPROFILE%\Documents\xls2sage50\logs` |
| **Salida CSV** | Archivos CSV generados | `%USERPROFILE%\Documents\xls2sage50\csv` |

!!! info "Ubicación de Archivos"

    Los archivos de usuario se guardan en su carpeta de Documentos para evitar problemas de permisos en carpetas del sistema.

### Paso 4: Configuración de SAGE 50 (Opcional)

Si seleccionó el modo API, configure la conexión con SAGE 50:

![Configuración SAGE 50](img:configuracion-sage50.png)

Parámetros de conexión:

| Parámetro | Descripción | Valor Predeterminado |
|-----------|-------------|----------------------|
| **Puerto API** | Puerto de comunicación con SAGE 50 | 16500 |
| **Timeout** | Tiempo de espera de conexión (segundos) | 30 |
| **Base de Datos** | Ruta al archivo de base de datos | Detectar automáticamente |

!!! note "Detección Automática"

    xls2sage50 intentará detectar automáticamente la instalación de SAGE 50. Si no la encuentra, puede especificar la ruta manualmente.

### Paso 5: Resumen y Finalización

![Resumen de configuración](img:configuracion-resumen.png)

Revise la configuración seleccionada:

1. Verifique que todos los datos son correctos
2. Haga clic en **"Finalizar"** para guardar la configuración
3. La aplicación se iniciará con la configuración aplicada

## Archivo de Configuración

La configuración se guarda en el archivo `config.ini` ubicado en:

```
%USERPROFILE%\Documents\xls2sage50\config.ini
```

### Estructura del Archivo config.ini

```ini
[API]
# Habilitar modo de importación por API
API_SAGE50 = true
# Puerto de conexión
API_PORT = 16500
# Timeout en segundos
API_TIMEOUT = 30

[APPLICATION]
# Modo predeterminado: API, CSV o BOTH
DEFAULT_MODE = BOTH
# Puerto para interfaz web
DEFAULT_PORT = 5900

[DIRECTORIES]
# Directorio de procesos
PROCESOS_DIR = procesos
# Subdirectorio de uploads
UPLOADS_SUBDIR = uploads
# Subdirectorio de plantillas
TEMPLATES_SUBDIR = plantillas
# Subdirectorio de CSV
CSV_SUBDIR = csv

[LOGGING]
# Nivel de logging: DEBUG, INFO, WARNING, ERROR
LOG_LEVEL = INFO
# Habilitar logging a archivo
FILE_LOGGING = true
# Habilitar logging en consola
CONSOLE_LOGGING = true
```

!!! warning "No Edite config.ini Manualmente"

    Se recomienda modificar la configuración desde la interfaz de la aplicación. Si edita el archivo manualmente, asegúrese de no cambiar la estructura del formato INI.

## Modificar la Configuración Posteriormente

### Desde la Interfaz Gráfica

1. Abra xls2sage50
2. Haga clic en el icono de **Configuración** (engranaje) en la barra superior
3. Realice los cambios necesarios
4. Haga clic en **"Guardar"** para aplicar los cambios

### Editando el Archivo config.ini

1. Cierre xls2sage50
2. Abra el archivo `config.ini` con un editor de texto
3. Realice los cambios necesarios
4. Guarde el archivo y reinicie la aplicación

## Verificación de la Configuración

### Comprobar Directorios

Asegúrese de que los directorios de trabajo se hayan creado correctamente:

```bash
# Listar directorios de xls2sage50
dir "%USERPROFILE%\Documents\xls2sage50"
```

**Salida esperada:**
```
 El volumen en la unidad C es Windows
 Directorio de C:\Users\Usuario\Documents\xls2sage50

07/01/2026  10:30    <DIR>          .
07/01/2026  10:30    <DIR>          ..
07/01/2026  10:30    <DIR>          csv
07/01/2026  10:30    <DIR>          logs
07/01/2026  10:30    <DIR>          plantillas
07/01/2026  10:30    <DIR>          procesos
               1 File(s)        1,234 bytes
```

### Comprobar Conexión con SAGE 50 (Modo API)

Si configuró el modo API:

1. Asegúrese de que SAGE 50 está cerrado
2. En xls2sage50, vaya a **Configuración** > **Probar Conexión**
3. Haga clic en **"Probar Conexión"**
4. Debería ver el mensaje **"Conexión exitosa"**

!!! error "Error de Conexión"

    Si la conexión falla, verifique:
    - SAGE 50 está instalado correctamente
    - El puerto 16500 no está bloqueado por el firewall
    - La licencia de SAGE 50 incluye el módulo API

## Próximo Paso

Una vez completada la configuración inicial:

- [Verificación](verificacion.md) - Compruebe que todo funciona correctamente
- [Inicio Rápido](../inicio-rapido/primeros-pasos.md) - Realice su primera importación

!!! question "¿Necesita Ayuda?"

    Si tiene problemas con la configuración, consulte la sección de [Solución de Problemas](../solucion-problemas/comunes.md).
