# Examen de FrontEnd II 

Para esta evaluación final, pondremos en práctica todos los conocimientos que
hemos adquirido en este track. Desde la creación y manejo de formularios,
Hooks (como useState, useContext, useReducer), estilos, props, peticiones
asincrónicas e integración con API, routing, testing y demás apartados
fundamentales del ecosistema de React. Para ello, te pediremos que crees una
aplicación web ligada a la temática de la salud. Integrando diferentes rutas,
formularios de contacto, temas de estado, entre otros.



## Características principales

- **Creación del Context:** Deberán crear un contexto global en su aplicación que ponga a disposición la
siguiente información:
- **Creación de rutas:**Utilizando React Router deberán crear las siguientes direcciones:
■ /home
○ Donde tendrán que renderizar una card por cada dentista devuelto por la API.
■ /dentist/:id
○ Donde mostrarán en detalle la información de cada dentista (nombre, email,
teléfono, website).
○ Cada card renderizada en la ruta /home debe ser un link hacia esta dirección.
■ /contacto
○ Donde deberán implementar un form (con sus validaciones pertinentes) que
capture la información del usuario que desea contactar a la empresa. Los
campos serán los siguientes:
■ Nombre completo (con longitud mayor a 5).
■ Email (con formato correcto de email).
○ En caso de haber un error, mostrar el siguiente mensaje de error: “Por favor
verifique su información nuevamente”.
○ Una vez enviado el formulario, deberán mostrar un mensaje de éxito que
contenga el siguiente formato: “Gracias [nombre del usuario], te
contactaremos cuando antes vía mail”.

■ /destacados
○ Renderizar las cards pertinentes a los dentistas destacados. Dicha información
deberá estar almacenada dentro del localStorage del browser.

■ Homogéneo a todas las rutas, deberá mostrarse un navbar (con links de navegación y
un botón para cambiar el theme) y footer.
- **Funcionalidad de destacados:** 
■ Cada card renderizada debe tener la opción de poder agregarse a destacados.
■ Las cards destacadas deben guardarse en la sesión actual del localStorage.
■ Manejar dicho comportamiento con el Hook useReducer.

## Instrucciones de uso


## Requisitos previos 📋

- Node.js (v18.12.1)
- npm (8.19.2)

## Instalacion 🚀

 _Clonar repo Git_

    git clone "https://github.com/JhonatanCremona/FronEndBalanzaAntonativa.git"
_cd FronEndBalanzaAntonativa_

_Instala las Dependecias con npm_

    npm install
_Ejecutar proyecto_

    npm run dev