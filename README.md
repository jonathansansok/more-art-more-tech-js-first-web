## WEB DE COMPARACION ENTRE CONSOLAS DE SONIDO. 🎧

  La idea de esta WEB es demostrar como se procesa un fragmento de canción a través de 4 consolas de sonido, las cuales son API - NEVE - SSL-E SS-G y NEVE. Cada usuario debería tener auriculares de gama media/alta o bafles/monitores de estudio.
  
La pagina inicial es la presentación del autor y debajo se muestras las comparaciones a nivel visual y auditivo de un fragmento de canción de Hard-Rock.

En el Header podemos encontar un menu con las opciones: HOME - API - NEVE - SSL-E SS-G - NEVE - CONTACTO

Al clickear en cada uno de ellos se verá la Respuesta de frecuencia de cad consola analizada de manera visual con un ecualizador analizador de espectro, el cual muestra su respuesta de frecuencia de 20 Hz. a 20Khz., Tambíen una imagen ampliada de los parámetros que utilizada cada equipo, un descripción general del mismo y una opinión personal sobre el ejemplo demostrado. 

En la Sección de "CONTACTOS" el usuario puede contactarme a mis redes sociales o bien enviarme un mail. 

## TECNOLOGIAS UTILIZADAS 🛠️

HTML - En el cual inserté todo el contenido necesario para el proyecto. 

CSS - Para darle estilos a todos los archivos *HTML.  

JAVASCRIPT - Para la funcionalidad del E-commerce y ciertas animaciones que favorecen al diseño responsive. 

 
## COMENZANDO 🚀 
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.  

## Pre-requisitos 📋 
Es necesario contar minimamente con la última versión estable de Visual Studio Code y Google Chrome. Para verificar que versión tienen instalada: 
Vsc -v 
gch -v 
Tener instalado el administrador de Base de Datos Postgres SQL 

## Instrucciones 🔧

1 - Clonar repositorio

Desde la consola de comandos, ubicarse en la carpeta en la cual se clonara el repositrio y luego ejecutar el comando git clone mas la url.
User/Folder git clone https://github.com/jonathansansok/jonathan-sanso-art-tech.git

2 - Abrir editor de codigo preferido

3 - Abrir en navegador Web (Google Chrome como recomendación)

-- PARA PROYECTOS AVANZADOS: --

En la ruta principal aparecen dos carpetas api y client.

3 - Instalar las Dependencias


Desde la consola de comandos ubicarse en la carpeta api, ejecutar el siguiente comando:
npm install
Posteriormente ubicarse en la carpeta client y ejecutar el mismo comando.

4 - Crear la Base De Datos


Ingresar en una nueva ventana de la terminal de comandos. Ejecutar el siguiente comando:
psql -U postgres 
Ingresar la contraseña agregada en la instalacion de Postgres.

Crear una Base de Datos nueva con el nombre ncr. Ingresar el siguiente comando:

CREATE DATABASE ncr;
No salir de esta linea de comandos porque posteriormente se utilizara para cargar datos.

4 - Crear archivo .env


Ubicado en la carpeta api crear un archivo con el nombre .env
Ingresar los siguientes datos:
# DB config

DB_USER= 'postgres'
DB_PASSWORD = 'tuContraseñaPostgres'
DB_HOST = 'localhost'
DB_PORT = '5432'
DB_NAME = 'ncr'

# Auth Config

AUTH_SECRET = 'secretncr'
AUTH_EXPIRES = 1D
AUTH_ROUNDS = 10

# HOST
FRONTEND_URL= 'http://localhost:3000'

5 - Inciar la Apliacion


Desde la terminal de comandos ubicarse en la carpeta api y ejecutar el siguiente comando:
npm start
Repetir el mismo proceso ubicado en la carpeta client

6 - Poblar Base de Datos


Dentro de la carpeta api se encuentra una carpeta llamada sql, en esta ultima hay un archivo database.sql.
Copiar las lineas correspondientes a las tiendas.
Pegar estas lineas en la terminal donde se creo la Base de Datos. Luego Presionar Enter.
Repetir el proceso con los datos de los usuarios.

7 - Loguearse


En la aplicacion ingresar las siguientes credenciales:
username: ssanchez
password: 123456

DOCUMENTACION API ✒️
Esta documentacion se realizo enteramente con Swagger. En la misma se encuentran los endpoints que se utilizaron para acceder a los datos del Backend. Cada uno de ellos brinda un servicio distinto, los cuales pueden ser probados ingresando los datos solicitados. Para poder ingresar a la documentacion y hacer uso de ella debe seguir los siguientes pasos:

Levantar el servidor: desde la consola, ubicado en la carpeta de proyecto, moverse a la carpeta api y ejecutar el comando npm start.

Ingresar en el navegador a la ruta http://localhost:3001/api-docs. Para un acceso mas rapido puede hacer clic en este link.

Los Endpoint estan protegidos con un Token de seguridad. Para poder acceder a este debe loguearse. Para ello debe ingresar en el Endpoint de login (POST). Precionar el boton de Try it out. Con las credencialies existentes precionar el boton Execute. Esta accion arroja una respuesta 200 con los datos de un usuario y su token de autenticacion.

Seleccionar y copiar el Token de autenticacion. En la parte superior derecha de la documentacion aparece el boton de Authorize 🔒 , hacer clic en él y pegar el token en el campo value. Ahora podra ingresar al resto de los Endpoints.
