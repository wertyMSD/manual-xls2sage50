---
title: Requisitos del Sistema para xls2sage50
date: 2026-01-07
keywords:
  - requisitos sistema xls2sage50
  - windows version
  - python requisitos
  - sage 50 version
  - memoria ram
aliases:
  - instalacion/requisitos.html
description: Conozca los requisitos del sistema necesarios para instalar y ejecutar xls2sage50: sistema operativo, hardware, software y versiones compatibles de SAGE 50.
status: published
---

# Requisitos del Sistema

Antes de instalar xls2sage50, asegúrese de que su equipo cumple con los requisitos mínimos y recomendados para un funcionamiento óptimo.

## Requisitos Hardware

### Especificaciones Mínimas

| Componente | Requisito Mínimo | Notas |
|------------|-----------------|-------|
| **Procesador** | Intel Core i3 o equivalente | Arquitectura de 64 bits |
| **Memoria RAM** | 4 GB | Puede ser insuficiente para archivos grandes |
| **Espacio en Disco** | 500 MB | Solo para la aplicación |
| **Resolución de Pantalla** | 1280 x 720 | Para visualización correcta de la interfaz |

### Especificaciones Recomendadas

| Componente | Recomendación | Beneficio |
|------------|---------------|-----------|
| **Procesador** | Intel Core i5 o superior | Mejor rendimiento en procesamiento |
| **Memoria RAM** | 8 GB o superior | Manejo de archivos grandes sin problemas |
| **Espacio en Disco** | 2 GB o superior | Incluye logs y archivos temporales |
| **Resolución de Pantalla** | 1920 x 1080 | Experiencia de usuario óptima |

!!! warning "Archivos Grandes"

    Si planea procesar archivos Excel con más de 10.000 filas, se recomienda un mínimo de 8 GB de RAM para evitar problemas de rendimiento.

## Requisitos Software

### Sistema Operativo

| Sistema | Versión Mínima | Estado de Soporte |
|---------|----------------|-------------------|
| **Windows** | Windows 10 (64-bit) | Completamente compatible |
| **Windows** | Windows 11 (64-bit) | Completamente compatible |
| **Windows Server** | 2016 o superior | Compatible |
| **macOS** | No soportado | - |
| **Linux** | No soportado | - |

!!! info "Limitación de Plataforma"

    xls2sage50 está diseñado específicamente para Windows debido a la dependencia de la API de SAGE 50. La aplicación no funcionará en macOS o Linux directamente, aunque puede ejecutarse en una máquina virtual Windows.

### Python (Solo instalación desde código)

| Componente | Versión Requerida | Notas |
|------------|-------------------|-------|
| **Python** | 3.12 o superior | Descargar desde [python.org](https://www.python.org/) |
| **pip** | Última versión | Incluido con Python 3.12+ |

### Dependencias de Python

Las siguientes librerías se instalan automáticamente con la aplicación:

- **Flet** >= 0.80.0 - Framework de interfaz gráfica
- **Polars** >= 1.36.1 - Procesamiento de datos de alto rendimiento
- **FastExcel** >= 0.18.0 - Lectura de archivos Excel
- **Typer** >= 0.21.0 - Interfaz de línea de comandos
- **Rich** >= 14.2.0 - Formateo de salida en terminal
- **PythonNET** >= 3.0.5 - Interoperabilidad con .NET (requerido para SAGE 50 API)

## Requisitos de SAGE 50

Los requisitos dependen del modo de operación que desee utilizar:

### Modo API (Importación Directa)

| Requisito | Detalle |
|-----------|---------|
| **Versión de SAGE 50** | 2020 o superior |
| **Módulo API** | Debe estar instalado y habilitado |
| **Licencia** | Debe incluir acceso a la API |
| **Estado** | SAGE 50 puede estar cerrado durante la importación |

!!! tip "Verificar Disponibilidad de API"

    Para verificar si su licencia de SAGE 50 incluye el módulo API, consulte con su proveedor de software o revise la documentación de SAGE 50.

### Modo CSV (Generación de Archivos)

| Requisito | Detalle |
|-----------|---------|
| **Versión de SAGE 50** | Cualquier versión |
| **Módulo API** | No necesario |
| **Licencia** | No requiere licencia especial |
| **Estado** | SAGE 50 debe estar abierto para importar manualmente |

## Requisitos de Red (Opcional)

Si utiliza SAGE 50 en modo servidor o accede a archivos en red:

| Componente | Requisito |
|------------|-----------|
| **Conexión de red** | 100 Mbps o superior |
| **Latencia** | < 50 ms para modo API |
| **Permisos** | Acceso de lectura/escritura a carpetas compartidas |

## Requisitos de Seguridad

### Permisos de Usuario

La aplicación requiere los siguientes permisos:

- **Lectura/Escritura** en su carpeta de Documentos
- **Lectura** en la carpeta de instalación de SAGE 50
- **Escritura** en la carpeta de logs de la aplicación

### Firewall y Antivirus

Configure su firewall y antivirus para permitir:

- **Ejecución** de `xls2sage50.exe`
- **Conexiones** al puerto de SAGE 50 API (normalmente 16500)
- **Acceso** a carpetas de documentos y temporales

!!! warning "Exclusiones de Antivirus"

    Algunos antivirus pueden bloquear la conexión con SAGE 50 API. Si experimenta problemas de conexión, añada xls2sage50 a la lista de exclusiones de su antivirus.

## Verificación de Compatibilidad

### Script de Verificación

Puede ejecutar el siguiente comando para verificar si su sistema es compatible:

```bash
# Ejecutar desde la línea de comandos
python -c "import platform; print(f'Python: {platform.python_version()}'); print(f'Sistema: {platform.system()}'); print(f'Arquitectura: {platform.machine()}')"
```

**Salida esperada:**
```
Python: 3.12.0
Sistema: Windows
Arquitectura: AMD64
```

## Próximo Paso

Una vez verificado que su sistema cumple los requisitos:

- [Instalación](instalacion.md) - Proceda con la instalación
- [Configuración Inicial](configuracion-inicial.md) - Configure la aplicación por primera vez

!!! question "¿Su equipo no cumple los requisitos?"

    Si su equipo no cumple los requisitos mínimos, considere actualizar el hardware o utilizar un equipo alternativo para ejecutar xls2sage50.
