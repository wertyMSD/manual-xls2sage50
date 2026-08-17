---
title: Conexión con SAGE 50 API
date: 2026-01-07
keywords:
  - conectar sage 50 api
  - configurar conexion api
  - test conexion sage
  - puerto api sage 50
aliases:
  - modo-api/conexion.html
description: Aprenda a configurar y establecer la conexión entre xls2sage50 y la API de SAGE 50. Incluye configuración de puertos, firewall y solución de problemas.
status: published
---

# Conexión con SAGE 50

Para utilizar el modo API de xls2sage50, primero debe establecer una conexión correcta con el servidor de API de SAGE 50.

## Requisitos Previos

Antes de configurar la conexión, verifique:

- [ ] SAGE 50 está instalado en su sistema
- [ ] La licencia de SAGE 50 incluye el módulo API
- [ ] El servicio de API de SAGE 50 está habilitado
- [ ] El firewall de Windows permite la conexión

!!! note "Versiones Compatibles**

    El modo API es compatible con SAGE 50 versión 2020 y superiores.

## Configuración del Servidor API en SAGE 50

### Paso 1: Habilitar el Servidor API

1. Abra SAGE 50
2. Vaya a **Herramientas** > **Opciones** > **API**
3. Marque la casilla **"Habilitar servidor API"**

![Habilitar API en SAGE 50](img:conexion-habilitar-api.png)

### Paso 2: Configurar el Puerto

El puerto predeterminado es **16500**, pero puede cambiarlo:

| Configuración | Valor Predeterminado | Descripción |
|---------------|---------------------|-------------|
| Puerto | 16500 | Puerto de comunicación |
| Timeout | 30 segundos | Tiempo de espera de conexión |
| Máx. conexiones | 10 | Conexiones simultáneas permitidas |

!!! warning "Puerto en Uso**

    Si el puerto 16500 está en uso por otra aplicación, seleccione un puerto diferente y configúrelo también en xls2sage50.

### Paso 3: Configurar el Firewall

El firewall de Windows puede bloquear la conexión. Configure una excepción:

1. Abra **Firewall de Windows Defender**
2. Haga clic en **"Configuración avanzada"**
3. Seleccione **"Reglas de entrada"** > **"Nueva regla"**
4. Seleccione **"Puerto"** > **"TCP"**
5. Escriba el puerto (16500)
6. Seleccione **"Permitir la conexión"**
7. Asigne un nombre (por ejemplo, "SAGE 50 API")

## Configurar la Conexión en xls2sage50

### Paso 1: Abrir Configuración de Conexión

1. Abra xls2sage50
2. Haga clic en **Configuración** > **Conexión SAGE 50**

![Configuración de conexión](img:conexion-configurar.png)

### Paso 2: Configurar los Parámetros

Complete los campos:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Host** | Dirección del servidor API | localhost |
| **Puerto** | Puerto de comunicación | 16500 |
| **Timeout** | Tiempo de espera (segundos) | 30 |
| **Usuario** (opcional) | Usuario de autenticación | admin |
| **Contraseña** (opcional) | Contraseña de autenticación | ******** |

### Paso 3: Guardar la Configuración

Haga clic en **"Guardar"** para almacenar la configuración.

## Probar la Conexión

### Desde la Interfaz Gráfica

1. En la pantalla de configuración, haga clic en **"Probar Conexión"**
2. Espere unos segundos
3. Revise el resultado:

![Resultado del test de conexión](img:conexion-test-resultado.png)

| Resultado | Significado | Acción |
|-----------|-------------|--------|
| :white_check_mark: Conexión exitosa | Todo funciona correctamente | Puede continuar |
| :x: Conexión fallida | Problema de configuración | Revise los pasos |
| :warning: Timeout | SAGE 50 no responde | Verifique que SAGE 50 está ejecutándose |

### Desde Línea de Comandos

```bash
# Ejecutar test de conexión
python xls2sage50.py test-connection

# Salida esperada
Conectando a localhost:16500...
Conexión exitosa!
Versión de SAGE 50: 2024.0
```

## Solución de Problemas de Conexión

### Problema: "Conexión rechazada"

!!! error "Conexión rechazada"

    **Causas posibles:**
    - SAGE 50 no está ejecutándose
    - El servidor API no está habilitado
    - El puerto es incorrecto

    **Solución:**
    1. Verifique que SAGE 50 está abierto
    2. Habilite el servidor API en SAGE 50
    3. Verifique que el puerto en xls2sage50 coincide con el de SAGE 50

### Problema: "Timeout"

!!! error "Timeout de conexión"

    **Causas posibles:**
    - Firewall bloqueando la conexión
    - SAGE 50 está ocupado
    - Timeout demasiado corto

    **Solución:**
    1. Añada una excepción en el firewall
    2. Aumente el valor de timeout
    3. Cierre otras aplicaciones que usen SAGE 50

### Problema: "Puerto en uso"

!!! error "El puerto ya está en uso"

    **Causa:** Otra aplicación está usando el puerto 16500

    **Solución:**
    ```bash
    # Ver qué proceso usa el puerto
    netstat -ano | findstr :16500

    # Cambiar el puerto en SAGE 50 y xls2sage50
    ```

## Conexión Remota

Si SAGE 50 está en un servidor remoto:

### Configuración

| Campo | Valor |
|-------|-------|
| **Host** | Dirección IP o nombre del servidor |
| **Puerto** | 16500 (o el configurado) |
| **Timeout** | 60 segundos (aumentar por latencia de red) |

!!! tip "VPN para Conexión Remota**

    Para conectar con SAGE 50 en otra oficina, use una VPN corporate para garantizar la seguridad y el acceso.

### Requisitos de Red

- **Latencia:** Menos de 100 ms
- **Ancho de banda:** Mínimo 1 Mbps
- **Estabilidad:** Conexión estable sin cortes frecuentes

## Verificación de la Conexión

### Lista de Verificación

Antes de comenzar a importar, verifique:

- [ ] SAGE 50 está ejecutándose
- [ ] El servidor API está habilitado
- [ ] El puerto está configurado correctamente
- [ ] El firewall permite la conexión
- [ ] El test de conexión es exitoso

### Test de Rendimiento

Para medir la velocidad de conexión:

```bash
# Ejecutar test de rendimiento
python xls2sage50.py benchmark-connection

# Salida esperada
Tiempo de conexión: 45 ms
Tiempo de ping: 12 ms
Rendimiento: Excelente
```

## Próximo Paso

Una vez establecida la conexión:

- [Mapeo de Campos](mapeo.md) - Configure la relación entre columnas Excel y campos SAGE 50

!!! question "¿Problemas Persistentes?**

    Si no puede establecer la conexión después de seguir estos pasos, consulte [Errores de Conexión](../../solucion-problemas/errores-conexion.md) para más ayuda.
