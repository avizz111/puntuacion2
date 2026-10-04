# Formula 1

Sitio web estático de práctica que presenta formularios relacionados con la Fórmula 1. Permite capturar información de autos, escuderías y corredores, además de elegir relaciones entre pilotos y equipos. Al pulsar **Guardar**, JavaScript muestra cada respuesta en una ventana `alert` independiente.

## Contenido del proyecto

| Archivo o carpeta | Descripción |
| --- | --- |
| `index.html` | Página de inicio y menú de navegación. |
| `autos.html` | Formulario para indicar modelo, color, foto y estado activo de un auto. |
| `escuderia.html` | Formulario para capturar el nombre y la descripción de una escudería. |
| `corredor.html` | Formulario para capturar nombre, apellidos, edad, género y foto de un corredor. |
| `relaciones.html` | Selectores para relacionar un piloto con una escudería y con un compañero. |
| `css/style.css` | Hoja de estilos compartida por las páginas. |
| `js/script.js` | Funciones que leen los controles y muestran sus respuestas. |
| `img/` | Imagen de fondo y favicon utilizados por las páginas. |

## Requisitos y ejecución

No se requiere instalar dependencias ni ejecutar un proceso de compilación. Para probar el sitio:

1. Descarga o clona el proyecto y conserva su estructura de carpetas.
2. Abre `index.html` en un navegador web.
3. Usa el menú lateral para abrir una sección y completar sus controles.
4. Pulsa **Guardar** para revisar las respuestas en alertas.

Las fuentes Montserrat y Nunito se cargan desde Google Fonts y requieren conexión a Internet. La imagen de fondo y el favicon se sirven desde la carpeta local `img`.

## Formularios y comportamiento

Las páginas de captura cargan `js/script.js` al final del documento. El botón de cada página invoca mediante su atributo `onclick` la función correspondiente:

- `mostrarRespuestasAutos()` lee el modelo, el color, el nombre del archivo seleccionado y el estado activo.
- `mostrarRespuestasEscuderia()` lee el nombre y la descripción.
- `mostrarRespuestasCorredor()` lee los datos personales, el género elegido y el nombre del archivo seleccionado.
- `mostrarRespuestasRelaciones()` lee el texto visible de cada opción seleccionada.

Cada respuesta se presenta en un `alert` separado. Los botones son de tipo `button`, por lo que las acciones no envían los formularios. La aplicación no guarda la información ni carga archivos a un servidor; en el caso de las fotos, únicamente muestra el nombre del archivo seleccionado. Como consecuencia del tipo de botón, el navegador tampoco ejecuta automáticamente la validación nativa asociada a `required`.

## Estilos

`css/style.css` proporciona el diseño común, la composición de página, la navegación y la apariencia de los controles. Entre los recursos de CSS utilizados y comentados junto a sus reglas están:

- **Selectores por tipo**, como `h1` y `body`, que aplican estilos a elementos HTML de ese tipo.
- **Herencia**, por la que propiedades como la fuente y el color pueden transmitirse desde un elemento ancestro. En el selector universal `*` del proyecto, esas propiedades se asignan directamente a cada elemento.
- **`transition`**, que suaviza cambios de estilo.
- **`backdrop-filter`**, que aplica desenfoque al fondo visible detrás de los `fieldset`.
- **`:focus` y `outline`**, para dar estilo al control activo y retirar el contorno predeterminado en las reglas correspondientes.
- **`:checked` y `accent-color`**, para seleccionar el radio marcado y definir el color de su indicador.

Parte de las reglas utiliza anidamiento nativo de CSS. Se recomienda abrir el proyecto en una versión actualizada de un navegador que admita esta sintaxis.

## Alcance

El proyecto es una interfaz de demostración del lado del cliente. No incluye backend, base de datos, almacenamiento persistente, envío de formularios ni carga real de imágenes.
