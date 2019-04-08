<h1>Back prueba técnica Atlas</h1>

El backend se ha realizado con el nodejs. El backend se encuentra dentro de un contenedor docker.


<h2>Despliegue</h2>

<ul>
<li>
<strong>docker-compose up</strong> Levantaremos nuestro contenedor docker para poder trabajar.
</li>
<li>
<strong>node app.js</strong> Levantaremos la aplicacion. En el futuro lo tendremos dentro del servicio de carga de datos y logs
</li>
<li>
<strong>./init.sh</strong> Realiza una carga de datos para las pruebas del backend
</li>
</ul>

<h2>Testing</h2>
<ul>
<li>
<strong>npm run test</strong> Realizaremos los test unitarios a nuestros backend.
</li>
</ul>