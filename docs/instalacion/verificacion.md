---
title: Verificación de Instalación de xls2sage50
date: 2026-01-07
keywords:
  - verificar instalacion xls2sage50
  - test conexion sage 50
  - comprobar instalacion
  - diagnostico
aliases:
  - instalacion/verificacion.html
description: Aprenda a verificar que la instalación de xls2sage50 es correcta y realizar pruebas de diagnóstico para asegurarse de que todo funciona antes de comenzar a usar la aplicación.
status: published
---

# Verificación de Instalación

Después de instalar y configurar xls2sage50, es importante verificar que todo funciona correctamente antes de comenzar a utilizar la aplicación.

## Verificación Rápida

### Test de Inicio de la Aplicación

El primer paso es asegurarse de que la aplicación se inicia correctamente:

1. Haga doble clic en el acceso directo de xls2sage50
2. Debería ver la pantalla de carga y luego la interfaz principal
3. No debería aparecer ningún mensaje de error

![Interfaz principal iniciada correctamente](img:verificacion-interfaz-principal.png)

!!! success "Aplicación Iniciada Correctamente"

    Si ve la interfaz principal sin errores, la instalación básica es correcta. Continúe con las verificaciones adicionales.

## Verificación de Componentes

### 1. Verificación de Directorios

Asegúrese de que todos los directorios necesarios se han creado:

```bash
# Verificar estructura de directorios
dir "%USERPROFILE%\Documents\xls2sage50" /s
```

**Estructura esperada:**
```
xls2sage50/
├── config.ini          ← Archivo de configuración
├── procesos/
│   └── uploads/        ← Archivos temporales de entrada
├── plantillas/         ← Plantillas de configuración
├── csv/                ← Archivos CSV generados
└── logs/               ← Archivos de registro
```

### 2. Verificación de Archivos de Configuración

Abra el archivo de configuración y verifique que existe:

1. Navegue a `%USERPROFILE%\Documents\xls2sage50\`
2. Abra `config.ini` con un editor de texto
3. Verifique que contiene las secciones `[API]`, `[APPLICATION]` y `[DIRECTORIES]`

### 3. Verificación de Dependencias

Para verificar que todas las dependencias de Python están instaladas correctamente:

```bash
# Listar paquetes instalados
pip list | findstr -i "flet polars typer rich"
```

**Salida esperada:**
```
flet                  0.80.0
polars                1.36.1
typer                 0.21.0
rich                  14.2.0
```

## Verificación de Conexión con SAGE 50

Si planea utilizar el modo API, debe verificar la conexión con SAGE 50.

### Test de Conexión desde la Interfaz

1. Abra xls2sage50
2. Haga clic en el icono de **Configuración** (engranaje)
3. Seleccione la pestaña **Conexión SAGE 50**
4. Haga clic en **"Probar Conexión"**

![Test de conexión](img:verificacion-test-conexion.png)

### Resultados del Test

| Resultado | Significado | Acción |
|-----------|-------------|--------|
| :white_check_mark: Conexión exitosa | Todo funciona correctamente | Puede continuar |
| :x: Error de conexión | Problema con SAGE 50 API | Revise la sección de errores |
| :warning: Timeout | SAGE 50 no responde | Verifique que SAGE 50 está instalado |

### Test de Conexión desde Línea de Comandos

```bash
# Ejecutar test de conexión
python -c "from codigo.cliente_api_sage50net import Sage50API; api = Sage50API(); print(api.test_connection())"
```

## Verificación de Funcionalidades

### Test de Lectura de Excel

Para verificar que la aplicación puede leer archivos Excel:

1. Descargue el archivo de prueba `test_data.xlsx` del repositorio
2. Abra xls2sage50
3. Seleccione el archivo de prueba
4. Verifique que las hojas se listan correctamente

!!! tip "Archivo de Prueba"

    Si no tiene un archivo de prueba, cree un Excel simple con dos hojas ("Clientes" y "Proveedores") y algunos datos de ejemplo.

### Test de Generación de CSV

Para verificar que la aplicación puede generar archivos CSV:

1. Abra xls2sage50
2. Seleccione un archivo Excel de prueba
3. Configure el mapeo básico de campos
4. Ejecute el proceso en modo CSV
5. Verifique que se crea el archivo en la carpeta `csv/`

### Test de la CLI (Línea de Comandos)

Para verificar que la interfaz de línea de comandos funciona:

```bash
# Mostrar ayuda
python xls2sage50.py --help

# Listar plantillas
python xls2sage50.py list
```

**Salida esperada:**
```
Uso: xls2sage50.py [COMANDO] [OPCIONES]

Comandos disponibles:
  run       Ejecutar una plantilla
  validate  Validar una plantilla
  list      Listar plantillas disponibles
  help      Mostrar este mensaje de ayuda
```

## Diagnóstico de Problemas

### Herramienta de Diagnóstico

xls2sage50 incluye una herramienta de diagnóstico que recopila información del sistema:

![Herramienta de diagnóstico](img:verificacion-diagnostico.png)

**Para ejecutar el diagnóstico:**

1. Abra xls2sage50
2. Haga clic en **Ayuda** > **Diagnóstico del Sistema**
3. Haga clic en **"Generar Informe"**
4. Revise los resultados

### Información Recopilada

El diagnóstico recopila:

| Categoría | Información |
|-----------|-------------|
| **Sistema** | Versión de Windows, RAM, procesador |
| **Aplicación** | Versión de xls2sage50, dependencias |
| **Configuración** | Contenido de config.ini |
| **SAGE 50** | Estado de conexión, versión detectada |
| **Logs** | Últimos errores registrados |

## Solución de Problemas Comunes

### La aplicación no se inicia

!!! error "xls2sage50 no se inicia"

    **Causas posibles:**
    - Python no está instalado (solo instalación desde código)
    - Falta una dependencia
    - El archivo config.ini está corrupto

    **Solución:**
    1. Reinstale la aplicación
    2. Verifique que Python esté instalado
    3. Elimine config.ini y reinicie la aplicación

### Error al conectar con SAGE 50

!!! error "Error de conexión con SAGE 50"

    **Causas posibles:**
    - SAGE 50 no está instalado
    - El módulo API no está habilitado
    - El firewall está bloqueando la conexión

    **Solución:**
    1. Verifique que SAGE 50 esté instalado
    2. Habilite el módulo API en SAGE 50
    3. Configure el firewall para permitir la conexión

### Error al leer archivos Excel

!!! error "Error al leer archivos Excel"

    **Causas posibles:**
    - El archivo está dañado
    - El formato no es compatible
    - Falta el driver de Excel

    **Solución:**
    1. Abra el archivo en Excel y guárdelo de nuevo
    2. Verifique que el formato es .xlsx o .xls
    3. Instale Microsoft Excel o el driver correspondiente

## Checklist de Verificación

Antes de comenzar a usar xls2sage50 regularmente, verifique lo siguiente:

- [ ] La aplicación se inicia sin errores
- [ ] Los directorios de trabajo se han creado
- [ ] El archivo config.ini existe y es válido
- [ ] La conexión con SAGE 50 funciona (si usa modo API)
- [ ] Puede leer archivos Excel correctamente
- [ ] Puede generar archivos CSV correctamente
- [ ] La línea de comandos funciona (opcional)

## Próximo Paso

Si todas las verificaciones son exitosas:

- [Inicio Rápido](../inicio-rapido/primeros-pasos.md) - Realice su primera importación

!!! question "¿Algún problema?"

    Si alguna verificación falla, consulte la sección de [Solución de Problemas](../solucion-problemas/comunes.md) para obtener ayuda específica.
