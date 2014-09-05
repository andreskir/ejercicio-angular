top-meli-sellers
================

### Objetivo

Construir una pequeña aplicación web con interactuando con la api pública de MercadoLibre. Se desea conocer quienes son los "top 3 sellers" en un momento dado y para una categoría en particular.

Un moqup de la posible interfaz:

![image](https://cloud.githubusercontent.com/assets/1585835/3677013/a0d20f20-128d-11e4-82dc-f75e7d4ffa8a.png)

### Tecnologías

Como lenguaje se utilizará JavaScript, con los siguientes frameworks:

- [AngularJs](https://angularjs.org/): MVW (Model-View-Whatever), resuelve concerns de vista, DI, comunicación con servidor, etc
- [Lo-Dash](http://lodash.com/): utilidades varias, sobre todo interesantes para trabajar con colecciones de forma funcional
 
y las siguientes herramientas:

- [Yeoman](http://yeoman.io/): responsable del scaffolding de la aplicación
- [Grunt](http://gruntjs.com/): task runner para automatizar la tarea de levantar el servidor y refrescar ante un cambio en el código
- [Bower](http://bower.io/): "a package manager for the web", es el que se encarga de bajar las dependencias de la app

### Por dónde arrancar?

Probablemente una buena idea sea jugar un poco con el template y entender dónde poner el código de los distintos concerns, guiandose por lo que ya está implementado.

En cuanto a MercadoLibre, todo lo necesario puede encontrarse en el [site de developers](http://developers.mercadolibre.com/). Para poder resolver el ejercicio, son necesarias al menos 3 requests a distintos recursos.

### Cómo correr la aplicación y los tests?

- Instalación de dependencias / setup inicial: `npm install && bower install`
- Servidor: `grunt serve`
- Tests: `grunt test`

Ambos comandos se quedan monitoreando cambios, por lo que conviene correrlos en 2 terminales diferentes.
