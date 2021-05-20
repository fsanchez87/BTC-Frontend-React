# React



## Instalación
- Uso manual

- Usando Creat React App

  `npm i -g create-react-app`
  `create-react-app miapp`
   ó
  `npx create-react-app miapp`
  NPX comprueba si tienes una dependencia de forma global instalada, si no está, la instala y ejecuta el comando
  
  
## JSX
Lenguaje de React que permite Mezclar HTML y JavaScript.
Extensión del sitaxis de JS

### Interpolar expresiones JS en JSX
`const name = 'Juan Perez';`
`const element = <h1>Hola, {name} </h1>;`
`ReactDOM.render(element, document.getElementById('root'));`

### Atributos en JSX
`const element = <div tabIndex="0"/>;`
`const element = <img src={user.avatarUrl} />;`

*Comillas (para valores de string o atributos) o llaves (para expresiones), pero no ambas en el mismo atributo.*

### Atributos camelCase
class se convierte en className en JSX, tabindex se convierte en tabIndex y onclick se convierte en onClick.