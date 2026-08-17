---
title: Instalación de xls2sage50
date: 2026-01-07
keywords:
  - instalar xls2sage50
  - instalacion exe
  - instalacion python
  - pip install
aliases:
  - instalacion/instalacion.html
  - install.html
description: Guía paso a paso para instalar xls2sage50 en Windows mediante instalador ejecutable o desde código fuente con Python.
status: published
---

# Instalación de xls2sage50

Esta guía le acompañará durante el proceso de instalación de xls2sage50 en su sistema Windows.

## Método 1: Instalación mediante Ejecutable (Recomendado)

El instalador ejecutable es la forma más sencilla de instalar xls2sage50. Incluye todas las dependencias necesarias y configura la aplicación automáticamente.

### Paso 1: Descargar el Instalador

1. Acceda al repositorio oficial de xls2sage50
2. Descargue la versión más reciente del archivo `xls2sage50-setup.exe`
3. Guarde el archivo en una carpeta accesible (por ejemplo, Descargas)

!!! tip "Verificar Integridad del Archivo"

    Si descarga el archivo desde una fuente externa, verifique que el hash SHA256 coincide con el proporcionado en el repositorio oficial.

### Paso 2: Ejecutar el Instalador

![Instalador xls2sage50](img:instalacion-pantalla-bienvenida.png){ align=right width=400 }

1. **Haga doble clic** en el archivo `xls2sage50-setup.exe`
2. Si Windows muestra una advertencia de SmartScreen, haga clic en **"Más información"** y luego en **"Ejecutar de todas formas"**
3. Seleccione el idioma de instalación y haga clic en **"Aceptar"**

### Paso 3: Seleccionar Carpeta de Instalación

![Carpeta de instalación](img:instalacion-directorio.png)

1. La carpeta predeterminada es `C:\Program Files\xls2sage50`
2. Puede cambiar la ubicación haciendo clic en **"Examinar"**
3. Haga clic en **"Siguiente"** para continuar

!!! note "Permisos de Administrador"

    Si instala en `Program Files`, Windows solicitará permisos de administrador. Confirme la acción para continuar.

### Paso 4: Configurar Opciones Adicionales

![Opciones de instalación](img:instalacion-opciones.png)

Seleccione las opciones adicionales que desee:

| Opción | Descripción | Recomendado |
|--------|-------------|-------------|
| Crear acceso directo en el escritorio | Añade un icono en el escritorio | Sí |
| Crear acceso directo en el menú de inicio | Añade xls2sage50 al menú de inicio | Sí |
| Asociar archivos .xlsx | Abre archivos Excel con xls2sage50 | No |

### Paso 5: Completar la Instalación

![Instalación completada](img:instalacion-completada.png)

1. Revise la configuración seleccionada
2. Haga clic en **"Instalar"**
3. Espere a que el proceso de instalación finalice
4. Haga clic en **"Finalizar"** para cerrar el instalador

## Método 2: Instalación desde Código Fuente

Este método está dirigido a usuarios avanzados y desarrolladores.

### Paso 1: Instalar Python

1. Descargue Python 3.12 o superior desde [python.org](https://www.python.org/downloads/)
2. Ejecute el instalador
3. **IMPORTANTE:** Marque la casilla **"Add Python to PATH"**
4. Haga clic en **"Install Now"**

!!! warning "Agregar Python al PATH"

    Si no marca la opción "Add Python to PATH", deberá configurar las variables de entorno manualmente.

### Paso 2: Descargar el Código Fuente

**Opción A: Descargar ZIP**

1. Vaya al repositorio de GitHub
2. Haga clic en **"Code"** y luego en **"Download ZIP"**
3. Extraiga el contenido en una carpeta de su elección

**Opción B: Clonar con Git**

```bash
git clone https://github.com/alcalic/xls2sage50.git
cd xls2sage50
```

### Paso 3: Crear Entorno Virtual (Recomendado)

```bash
# Crear entorno virtual
python -m venv .venv

# Activar entorno virtual
.venv\Scripts\activate
```

!!! tip "¿Por qué usar un entorno virtual?"

    El entorno virtual aísla las dependencias de xls2sage50 de otras aplicaciones Python, evitando conflictos entre versiones.

### Paso 4: Instalar Dependencias

```bash
# Instalar todas las dependencias
pip install -r requirements.txt

# O instalar con el proyecto en modo editable
pip install -e .
```

### Paso 5: Verificar Instalación

```bash
# Ejecutar la aplicación
python xls2sage50.py
```

## Desinstalación

### Desde Instalador Ejecutable

1. Abra **Panel de Control** > **Programas y Características**
2. Busque **xls2sage50** en la lista
3. Haga clic derecho y seleccione **Desinstalar**
4. Siga las instrucciones del asistente

### Desde Código Fuente

```bash
# Desactivar entorno virtual (si está activo)
deactivate

# Eliminar el directorio del proyecto
rmdir /s xls2sage50
```

## Actualización

### Actualizar desde Instalador

1. Descargue la nueva versión del instalador
2. Ejecute el instalador
3. Seleccione **"Reparar"** o **"Actualizar"** cuando se le solicite

### Actualizar desde Código Fuente

```bash
# Activar entorno virtual
.venv\Scripts\activate

# Actualizar dependencias
pip install --upgrade -r requirements.txt

# O actualizar el proyecto si está instalado en modo editable
pip install --upgrade -e .
```

## Instalación en Entornos Corporativos

Si su empresa tiene políticas de seguridad restrictivas, tenga en cuenta:

### Requisitos de Red

- Acceso a `pypi.org` para descargar dependencias (solo instalación desde código)
- Acceso al repositorio de SAGE 50 API si se usa el modo API

### Requisitos de Certificados

Algunos entornos corporativos requieren:

```bash
# Configurar pip para usar certificados corporativos
pip install --cert [ruta-al-certificado] -r requirements.txt
```

## Próximo Paso

Una vez completada la instalación:

- [Configuración Inicial](configuracion-inicial.md) - Configure la aplicación por primera vez
- [Verificación](verificacion.md) - Compruebe que todo funciona correctamente

!!! question "¿Problemas durante la instalación?"

    Si encuentra algún problema, consulte la sección de [Solución de Problemas](../solucion-problemas/comunes.md) o contacte con [soporte técnico](../solucion-problemas/soporte.md).
