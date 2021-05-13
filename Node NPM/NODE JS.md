# NODE JS

Comprobación de la versión instalación  `node -v`

Comprobación de la versión npm  `npm -v`

Ejecutar un comando en node `node/ruta/al/archivo.js`

Pasar parámetros `node app.js param1 param2`

Para leer los archivos desde **process.argv**



#### Basado en módulos

Para utilizar funciones ubicadas en otros ficheros`var doubleNumber = require('./duble.js')`



#### Process

Variable global

Versión de node actual `console.log(process.version)`

Uso de memoria `console.log(process.memoryUsage())` 

Cuanto tiempo ha tardado en ejecutarse ese script `console.log(process.uptime());` 

Finalizamos el proceso `process.exit(0)`

Id del proceso que se está ejecutando `proccess.pid`



#### Node Package Manager

La manera de trabajar es utilizar el **package.json** contiene toda la informaión de nuestro proyecto.

Es donde se registran las dependencias que vamos instalando.

Para crearlo `npm init`

No es necesario tener el archivo package.json



##### Instalación de paquetes local

`npm install package-name` se guarda en **node_modules/package-name**

Se registra en el package.json de dependencias.

Al borrar la carpeta node_modules, no se comitea, para recuperarla `npm init`

Instala un paquete sin registrarlo `--no save` 

Instalar un paquete de forma global `npm install package-name -g`



#### Dependencias de producción vs desarrollo

`npm install [nombe del paquete]`

`npm install [nombre del paquete] --save-dev`



#### Otras instrucciones

Todo el listado `npm ls`

Listado detallado `npm ls -l`

Listado paquetes de forma global `npm ls -g`

Desinstalar paquete `npm unistall [nombre del paquete]`

Actualizar todos los paquetes instalados `npm update`

Actualizar paquete determinado `npm update [nombre del paquete]`



#### Scripts

Definición de tareas o scripts en el package.json que podemos lanzar desde la ventana shell.

`"scripts": {`
	`"produccion": "node app.js"`
`}`



#### Core Modules

Paquetes preinstalados, para usarlos `require`



#### Module scope

Hablamos de que tenemos al alcance, que variables globales se pueden acceder en cualquier archivo













