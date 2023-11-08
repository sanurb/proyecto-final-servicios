# Proyecto de Balanceador de Carga

## Descripción

Este proyecto implementa un balanceador de carga utilizando Nginx, destinado a distribuir el tráfico de entrada entre varios servidores web, aumentando la disponibilidad y la redundancia de nuestras aplicaciones web.

## Arquitectura propuesta
```mermaid
graph LR
  subgraph cluster0 [Client Zone]
    client1[Client 1]
    client2[Client 2]
    client3[Client 3]
  end

  subgraph cluster1 [Vagrant VMs]
    lb[Load Balancer - servidor_bc]
    web1[Web Server 1 - servidor_web_1]
    web2[Web Server 2 - servidor_web_2]
  end

  client1 -->|HTTP requests| lb
  client2 -->|HTTP requests| lb
  client3 -->|HTTP requests| lb

  lb -->|Proxy pass| web1
  lb -->|Proxy pass| web2

  classDef client fill:#a62a85,stroke:#333,stroke-width:4px;
  classDef server fill:#ab573b,stroke:#333,stroke-width:4px;
  classDef loadbalancer fill:#651ae4,stroke:#333,stroke-width:4px;

  class client1,client2,client3 client;
  class web1,web2 server;
  class lb loadbalancer;

```

## Características

- **Alta disponibilidad**: Asegura que el sistema esté operativo el mayor tiempo posible.
- **Escalabilidad**: Permite añadir o quitar servidores sin interrumpir el servicio.
- **Flexibilidad**: Admite diferentes algoritmos de balanceo de carga.
- **Monitoreo**: Integra herramientas de monitoreo para observar el rendimiento del sistema.

## Requisitos Previos

Antes de comenzar, asegúrese de tener instalado lo siguiente:

- Vagrant
- VirtualBox o cualquier otro proveedor de VM compatible con Vagrant
- Herramientas de línea de comandos para su sistema operativo (bash, PowerShell)

## Diagrama de flujo
```mermaid
sequenceDiagram
    participant Cliente
    participant Balanceador
    participant Servidor_Web_1 as Servidor Web 1
    participant Servidor_Web_2 as Servidor Web 2

    Cliente->>Balanceador: HTTP Request
    alt Carga en Servidor Web 1 es baja
        Balanceador->>Servidor_Web_1: Redirige Request
        Servidor_Web_1->>Balanceador: HTTP Response
        Balanceador->>Cliente: HTTP Response
    else Carga en Servidor Web 2 es baja
        Balanceador->>Servidor_Web_2: Redirige Request
        Servidor_Web_2->>Balanceador: HTTP Response
        Balanceador->>Cliente: HTTP Response
    end

```

Este diagrama asume que el balanceador de carga seleccionará el servidor web basándose en el servidor con menos conexiones activas
