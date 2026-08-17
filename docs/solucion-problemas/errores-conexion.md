---
title: Errores de Conexión con SAGE 50
date: 2026-01-07
keywords:
  - errores conexion sage 50
  - solucionar problemas api
  - timeout conexion
  - puerto bloqueado
aliases:
  - solucion-problemas/errores-conexion.html
description: Solución de errores de conexión al usar el modo API de xls2sage50 para conectarse con SAGE 50.
status: published
---

# Errores de Conexión

Esta sección describe los errores más comunes de conexión con SAGE 50 API y sus soluciones.

## Diagnóstico de Conexión

### Paso 1: Verificar SAGE 50

Primero, asegúrese de que SAGE 50 está correctamente instalado:

1. Abra SAGE 50
2. Verifique que funciona correctamente
3. Vaya a **Herramientas** > **Opciones** > **API**
4. Confirme que el servidor API está habilitado

### Paso 2: Probar Conexión desde xls2sage50

1. Abra xls2sage50
2. Vaya a **Configuración** > **Conexión SAGE 50**
3. Haga clic en **"Probar Conexión"**
4. Anote el mensaje de error exacto

## Errores Comunes

### Error: "Conexión rechazada"

!!! error "Connection refused"

    **Síntomas:**
    - Mensaje: "No se puede conectar al servidor"
    - Error: `[Errno 61] Connection refused`
    - Código de error: 10061

    **Causas posibles:**
    1. SAGE 50 no está ejecutándose
    2. El servidor API no está habilitado en SAGE 50
    3. El puerto configurado es incorrecto

    **Soluciones:**

    **1. Verificar que SAGE 50 está abierto:**
    ```bash
    # Verificar proceso de SAGE 50
    tasklist | findstr /i "sage"
    ```

    **2. Habilitar servidor API en SAGE 50:**
    1. Abra SAGE 50
    2. Vaya a **Herramientas** > **Opciones**
    3. Busque la sección **API** o **Conectividad**
    4. Marque "Habilitar servidor API"
    5. Reinicie SAGE 50

    **3. Verificar el puerto:**
    ```bash
    # Verificar qué escucha en el puerto 16500
    netstat -ano | findstr :16500
    ```

### Error: "Timeout de conexión"

!!! error "Connection timeout"

    **Síntomas:**
    - La aplicación se queda esperando
    - Mensaje: "Tiempo de espera agotado"
    - Error: `[Errno 10060] Connection timed out`

    **Causas posibles:**
    1. Firewall bloqueando la conexión
    2. SAGE 50 está ocupado
    3. Timeout configurado muy corto
    4. Latencia de red excesiva

    **Soluciones:**

    **1. Configurar el firewall:**
    - Abra **Firewall de Windows Defender**
    - **Reglas de entrada** > **Nueva regla**
    - **Puerto** > **TCP** > `16500`
    - **Permitir la conexión**
    - **Perfiles**: Dominio, Privado, Público
    - Nombre: `SAGE 50 API`

    **2. Aumentar el timeout:**
    ```ini
    # En config.ini
    [API]
    API_TIMEOUT = 60
    ```

    **3. Verificar latencia de red:**
    ```bash
    # Hacer ping al servidor (si es remoto)
    ping sage50-server

    # La latencia debe ser menor a 100ms
    ```

### Error: "Puerto en uso"

!!! error "Address already in use"

    **Síntomas:**
    - Mensaje: "El puerto ya está en uso"
    - Error: `[Errno 10048] Address already in use`

    **Causas posibles:**
    1. Otra instancia de SAGE 50 está ejecutándose
    2. Otra aplicación está usando el puerto 16500

    **Soluciones:**

    **1. Verificar qué usa el puerto:**
    ```bash
    netstat -ano | findstr :16500
    ```

    **2. Terminar el proceso si es necesario:**
    ```bash
    taskkill /PID <numero_de_proceso> /F
    ```

    **3. Cambiar el puerto:**
    ```ini
    # En config.ini de xls2sage50
    [API]
    API_PORT = 16501

    # Y configurar el mismo en SAGE 50
    ```

### Error: "Host no alcanzable"

!!! error "Host unreachable"

    **Síntomas:**
    - Mensaje: "No se puede resolver el nombre del host"
    - Error: `[Errno 11001] getaddrinfo failed`

    **Causas posibles:**
    1. El nombre del servidor es incorrecto
    2. Problemas de DNS
    3. El servidor está apagado

    **Soluciones:**

    **1. Verificar el nombre del host:**
    ```ini
    # En config.ini
    [API]
    API_HOST = 192.168.1.100  # Usar IP en lugar de nombre
    ```

    **2. Hacer ping al servidor:**
    ```bash
    ping nombre-servidor
    ping 192.168.1.100
    ```

    **3. Verificar la conexión de red:**
    - Cables conectados
    - Wi-Fi funcionando
    - VPN conectada (si aplica)

### Error: "Certificado no válido"

!!! error "SSL certificate error"

    **Síntomas:**
    - Mensaje: "Error de certificado SSL"
    - Error relacionado con HTTPS/TLS

    **Causas posibles:**
    1. El certificado de SAGE 50 ha expirado
    2. El certificado es auto-firmado
    3. El nombre del certificado no coincide con el host

    **Soluciones:**

    **1. Deshabilitar verificación de SSL (solo para desarrollo):**
    ```ini
    # En config.ini - NO usar en produccion
    [API]
    SSL_VERIFY = false
    ```

    **2. Instalar el certificado:**
    - Obtener el certificado del servidor SAGE 50
    - Instalar en "Entidades de certificación raíz de confianza"
    - Reiniciar xls2sage50

## Solución Paso a Paso

Siga estos pasos en orden para resolver problemas de conexión:

### 1. Verificar Requisitos Básicos

```bash
# 1. Verificar que SAGE 50 está instalado
dir "C:\Program Files (x86)\Sage\Sage 50"

# 2. Verificar que SAGE 50 se puede ejecutar
"C:\Program Files (x86)\Sage\Sage 50\sage50.exe"

# 3. Verificar versión de SAGE 50 (debe ser 2020+)
# (Revisar en Ayuda > Acerca de)
```

### 2. Verificar Configuración de API en SAGE 50

1. Abra SAGE 50
2. **Herramientas** > **Opciones**
3. Busque la sección **API**
4. Verifique:
   - [ ] Servidor API habilitado
   - [ ] Puerto configurado (normalmente 16500)
   - [ ] Sin límite de conexiones

### 3. Configurar Firewall

```bash
# Abrir firewall con regla para SAGE 50
netsh advfirewall firewall add rule name="SAGE 50 API" dir=in action=allow protocol=TCP localport=16500
```

### 4. Verificar Conexión desde xls2sage50

```bash
# Ejecutar test de conexión
python xls2sage50.py test-connection

# O usando la interfaz gráfica
# Configuración > Conexión SAGE 50 > Probar Conexión
```

### 5. Revisar Logs

Si todo lo anterior falla, revise los logs:

```
%USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log
```

Busque errores con "connection", "API" o "SAGE".

## Problemas de Red Específicos

### Conexión Remota

Si SAGE 50 está en un servidor remoto:

1. **Verificar VPN:**
   - La VPN debe estar conectada
   - El servidor debe ser alcanzable

2. **Verificar latencia:**
   ```bash
   ping servidor-sage50
   # La latencia debe ser < 100ms
   ```

3. **Configurar timeout más largo:**
   ```ini
   [API]
   API_TIMEOUT = 60
   ```

### Conexión por VPN

Si usa VPN para conectar:

1. **Verificar que la VPN está conectada:**
   ```bash
   ipconfig
   # Buscar el adaptador de VPN
   ```

2. **Usar IP en lugar de nombre:**
   ```ini
   [API]
   API_HOST = 10.0.0.50  # IP del servidor en VPN
   ```

3. **Configurar hosts file (si es necesario):**
   ```
   # C:\Windows\System32\drivers\etc\hosts
   10.0.0.50  sage50-server
   ```

## Herramientas de Diagnóstico

### Telnet

Para probar si el puerto es accesible:

```bash
telnet localhost 16500
```

Si la conexión tiene éxito, verá una pantalla negra (o el banner de SAGE 50).

### PowerShell Test-NetConnection

```powershell
Test-NetConnection -ComputerName localhost -Port 16500
```

Salida esperada:
```
ComputerName     : localhost
RemoteAddress    : 127.0.0.1
RemotePort       : 16500
TcpTestSucceeded  : True
```

## Contactar Soporte

Si después de intentar todas estas soluciones el problema persiste:

1. **Exporte el informe de diagnóstico:**
   - Abra xls2sage50
   - **Ayuda** > **Diagnóstico**
   - **Generar Informe**

2. **Recolecte información:**
   - Versión de xls2sage50
   - Versión de SAGE 50
   - Mensaje de error exacto
   - Captura de pantalla del error

3. **Contacte soporte:**
   - Email: soporte@alcalic.com
   - Incluya todos los datos recolectados

!!! tip "Información Necesaria**

    Al contactar soporte, incluya siempre: versión de SAGE 50, versión de xls2sage50, mensaje de error exacto y el archivo de diagnóstico.

## Próximo Paso

- [Errores de Importación](errores-importacion.md) - Solucionar problemas durante la importación

!!! question "¿Problema Resuelto?**

    Si el problema no está listado aquí, consulte [Problemas Comunes](comunes.md) para más soluciones.
**Evitación de error de certificado (productos sin MSIX)**

Los productos distribuidos como archivo ZIP (no MSIX) pueden mostrar advertencias
de certificado SSL/TLS al conectarse al servidor Sage 50. Este bloque describe
cómo evitar o resolver estos errores.

**{{producto}} — Error: Certificado no válido**

**Síntomas**
- Mensaje: "Error de certificado SSL" o "El certificado no es de confianza".
- La conexión se establece pero el usuario recibe una advertencia en cada inicio.
- En algunos casos, la consulta a Sage 50 falla hasta que se confirma la excepción.

**Causas principales**
1. **Certificado expirado**: El certificado emitido por el servidor Sage 50 ha
   vencido y ya no es válido.
2. **Certificado auto-firmado**: Sage 50 utiliza un certificado auto-firmado en
   lugar de uno emitido por una autoridad de certificación (CA) de confianza.
3. **Nombre de certificado no coincide**: El nombre del certificado no corresponde
   con el host o dirección IP desde la que se está conectando.

**Solución recomendada (desarrollo / entorno controlado)**

**Opción A — Deshabilitar temporalmente la verificación de SSL** (solo para
desarrollo o entornos aislados donde se controle el riesgo):

En el archivo de configuración del producto (generalmente `config.ini`,
`.env` o similar), añade o modifica la variable:

```
SSL_VERIFY = false
```

Esto desactiva la comprobación de validez del certificado y permite la conexión
sin advertencias. **No aplicar en entornos de producción sin evaluación de riesgo.**

**Opción B — Instalar el certificado en el almacén de confianza**

1. Obtén el certificado del servidor Sage 50 (archivo `.crt` o `.pem`).
   Puedes exportarlo desde el navegador cuando aparezca el aviso de certificado,
   o solicitarlo al administrador del servidor Sage 50.

2. Instala el certificado en el almacén de entidades de certificación raíz de
   confianza del sistema:

   - **Windows**: Ejecuta `certmgr.msc`, ve a `Acciones > Todas las tareas > Importar`,
     selecciona el archivo `.crt` e inclúyelo en `Entidades de certificación raíz de
     confianza`.

   - **Linux/macOS**: Ejecuta `sudo cp archivo.crt /usr/local/share/ca-certificates/`
     y luego `sudo update-ca-certificates` o `sudo security add-trusted-cert -d
     /etc/pki/ca-trust/source/anchors/ archivo.crt`.

3. Reinicia el cliente o servicio que se conecta a Sage 50 para que el nuevo
   certificado surta efecto.

**Pasos complementarios**

- Si utilizas `xls2sage50`, también revisa el archivo
  `guia/instalacion/instalacion.md` donde se menciona la configuración de pip con
  certificados corporativos: `pip install --cert [ruta-al-certificado] -r requirements.txt`.

- Si el error persiste después de la opción B, verifica la fecha y hora del
  sistema (un reloj desincronizado puede causar validación de certificado fallida).

- Para entornos con SmartScreen o políticas de seguridad corporativas, puede que
  sea necesario añadir la URL de Sage 50 a la lista de sitios de confianza en las
  políticas de seguridad del sistema.

**Consulta también**
- Fragmento `remotecall` para instrucciones de conexión general a RemoteCall.
- Documentación del producto específico: `{{enlace_doc_producto}}`.

---
*Fragmento mantenido en `_shared/fragments/certificado-no-msix.md`.
Última actualización: {{fecha_actual}}.*
<!-- shared:certificado-no-msix:start -->
**Evitación de error de certificado (productos sin MSIX)**

Los productos distribuidos como archivo ZIP (no MSIX) pueden mostrar advertencias
de certificado SSL/TLS al conectarse al servidor Sage 50. Este bloque describe
cómo evitar o resolver estos errores.

**{{producto}} — Error: Certificado no válido**

**Síntomas**
- Mensaje: "Error de certificado SSL" o "El certificado no es de confianza".
- La conexión se establece pero el usuario recibe una advertencia en cada inicio.
- En algunos casos, la consulta a Sage 50 falla hasta que se confirma la excepción.

**Causas principales**
1. **Certificado expirado**: El certificado emitido por el servidor Sage 50 ha
   vencido y ya no es válido.
2. **Certificado auto-firmado**: Sage 50 utiliza un certificado auto-firmado en
   lugar de uno emitido por una autoridad de certificación (CA) de confianza.
3. **Nombre de certificado no coincide**: El nombre del certificado no corresponde
   con el host o dirección IP desde la que se está conectando.

**Solución recomendada (desarrollo / entorno controlado)**

**Opción A — Deshabilitar temporalmente la verificación de SSL** (solo para
desarrollo o entornos aislados donde se controle el riesgo):

En el archivo de configuración del producto (generalmente `config.ini`,
`.env` o similar), añade o modifica la variable:

```
SSL_VERIFY = false
```

Esto desactiva la comprobación de validez del certificado y permite la conexión
sin advertencias. **No aplicar en entornos de producción sin evaluación de riesgo.**

**Opción B — Instalar el certificado en el almacén de confianza**

1. Obtén el certificado del servidor Sage 50 (archivo `.crt` o `.pem`).
   Puedes exportarlo desde el navegador cuando aparezca el aviso de certificado,
   o solicitarlo al administrador del servidor Sage 50.

2. Instala el certificado en el almacén de entidades de certificación raíz de
   confianza del sistema:

   - **Windows**: Ejecuta `certmgr.msc`, ve a `Acciones > Todas las tareas > Importar`,
     selecciona el archivo `.crt` e inclúyelo en `Entidades de certificación raíz de
     confianza`.

   - **Linux/macOS**: Ejecuta `sudo cp archivo.crt /usr/local/share/ca-certificates/`
     y luego `sudo update-ca-certificates` o `sudo security add-trusted-cert -d
     /etc/pki/ca-trust/source/anchors/ archivo.crt`.

3. Reinicia el cliente o servicio que se conecta a Sage 50 para que el nuevo
   certificado surta efecto.

**Pasos complementarios**

- Si utilizas `xls2sage50`, también revisa el archivo
  `guia/instalacion/instalacion.md` donde se menciona la configuración de pip con
  certificados corporativos: `pip install --cert [ruta-al-certificado] -r requirements.txt`.

- Si el error persiste después de la opción B, verifica la fecha y hora del
  sistema (un reloj desincronizado puede causar validación de certificado fallida).

- Para entornos con SmartScreen o políticas de seguridad corporativas, puede que
  sea necesario añadir la URL de Sage 50 a la lista de sitios de confianza en las
  políticas de seguridad del sistema.

**Consulta también**
- Fragmento `remotecall` para instrucciones de conexión general a RemoteCall.
- Documentación del producto específico: `{{enlace_doc_producto}}`.

---
*Fragmento mantenido en `_shared/fragments/certificado-no-msix.md`.
Última actualización: {{fecha_actual}}.*
<!-- shared:certificado-no-msix:end -->
