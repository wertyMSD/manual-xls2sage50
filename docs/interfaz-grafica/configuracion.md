---
title: Configuración en la Interfaz de xls2sage50
date: 2026-01-07
keywords:
  - configuracion interfaz xls2sage50
  - apariencia aplicacion
  - conexion sage 50 interfaz
  - preferencias usuario
aliases:
  - interfaz-grafica/configuracion.html
description: Opciones de configuración desde la interfaz de xls2sage50: apariencia, accesibilidad, conexión con SAGE 50 y visor de logs de la aplicación.
status: published
---

# Configuración en la Interfaz

La sección Configuración de la aplicación permite ajustar las opciones de xls2sage50 sin editar archivos manualmente.

## Cambiar una Opción

1. Abra xls2sage50
2. Vaya a **Configuración**
3. Modifique la opción deseada
4. Haga clic en **"Guardar"**

## Apariencia y Accesibilidad

El tema de la interfaz se selecciona desde **Configuración** > **Apariencia**, eligiendo **Claro**, **Oscuro** o **Automático** y aplicando los cambios. El tamaño de fuente se ajusta desde **Configuración** > **Accesibilidad** con el deslizador correspondiente.

## Conexión con SAGE 50

Desde **Configuración** > **Conexión SAGE 50** se configuran los parámetros de conexión con la API de SAGE 50 y se puede probar la conexión antes de iniciar una importación.

## Visor de Logs

Desde **Configuración** > **Logs** se abre el visor de registros, que incluye filtrado por nivel y búsqueda de texto. Desde **Ayuda** > **Diagnóstico** se pueden exportar todos los logs a un archivo `.zip`.

## Relación con config.ini

Los cambios guardados desde la interfaz se almacenan en el archivo de configuración de la aplicación. La configuración puede aplicarse de tres formas:

| Método | Prioridad |
|--------|-----------|
| **Archivo config.ini** | Alta |
| **Variables de entorno** | Media, sobrescribe config.ini |
| **Argumentos CLI** | Máxima, sobrescribe todo |

!!! warning "Edición manual"

    Si edita el archivo de configuración a mano, cierre antes xls2sage50 para evitar que los cambios se sobrescriban.

## Documentación Relacionada

- [Configuración Avanzada](../configuracion/index.md) - Referencia completa de la configuración
- [Archivo config.ini](../configuracion/config-ini.md) - Estructura y opciones del archivo
- [Sistema de Logs](../configuracion/logs.md) - Niveles, ubicación y revisión de logs
