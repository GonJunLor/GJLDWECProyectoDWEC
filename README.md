<!-- **title**: README -->
# CFGS Desarrollo de Aplicaciones Web

|  CFGS DESARROLLO  DE APLICACIONES WEB |
|**:-----------**:|
|![Alt](webroot/media/images/dwec.jpg)|
| DESARROLLO WEB EN ENTORNO DEL CLIENTE


- **[CFGS Desarrollo de Aplicaciones Web](#cfgs-desarrollo-de-aplicaciones-web)
  - **[1. BOM](#1-bom)
    - **[1.1 History](#11-history)
    - **[1.2 Location](#12-location)
    - **[1.3 screen](#13-screen)
    - **[1.4 navigator](#14-navigator)
    - **[1.5 console](#15-console)
    - **[1.6 objeto window](#16-objeto-window)
  - **[2. DOM](#2-dom)
    - **[2.1 document](#21-document)
  - **[3.Proximamente](#3proximamente)

## 1. BOM

### 1.1 History
Contiene todas las URLs que ha visitado el usuario. 
Se usa con window.history o sólo **history**.

**Métodos**
- **back()**: Carga la página anterior
- **forward()**: Carga la página siguiente
- **go()**: Carga una página especifica, se controla por medio de indices.
  Con 0 recarga la misma página, con valores negativos carga paginas anteriores y con valores positivos carga páginas siguientes. 
  ````
  Ejemplo: // Para cargar una página que está dos posiciones atrás.
  <button onclick="history.go(-2)">Go Back 2 Pages</button>
  ````

**Propiedades** 
- **length**: devuelve el número de paginas almacenadas.

### 1.2 Location
Contiene información sobre la URL actual.
Se usa con window.location o sólo **location**.

**Métodos**
- **assign()**:	carga un nuevo documento en la ventana del navegador, haciendo que la URL actual se muestre en la barra de direcciones y se guarde en el historial
````
// Redirige el navegador a una nueva página
window.location.assign("https://www.ejemplo.com");
````
- **reload()**:	para recargar la página web actual, similar al botón "actualizar" del navegador.
````
// Para asegurar que la página se recargue completamente desde el servidor, puedes usar un parámetro true.
location.reload(true);
````
- **replace()**:	se utiliza para redirigir al usuario a una nueva URL sin añadir la página actual al historial de navegación
````
// Después de ejecutar este código no podrá usar el botón de "atrás" para volver a la página donde se ejecutó el script. 
window.location.replace("https**://www.ejemplo.com/otra-pagina");
````

**Propiedades** 
- hash	

Establece o devuelve la sección de "ancla" o "fragmento" de una URL, que es la parte que sigue al signo de almohadilla (#). Se utiliza para obtener y manipular la parte de la URL que se usa para apuntar a secciones específicas dentro de una misma página web, como al hacer clic en un enlace interno. 
````
Si la URL es http**://www.ejemplo.com/pagina#seccion, window.location.hash devolverá #seccion. Si no hay un hash, devuelve una cadena vacía ("").
````
- **host**: Establece o devuelve el hostname y número de puerto de una URL.
- **hostname**:	Establece o devuelve el hostname de una URL.
- **href**:	Establece o devuelve la URL entera.
- **origin**:	Devuelve el protocolo, hostname y número de puerto de una URL.
- **pathname**:	Establece o devuelve el path name de una URL.
````
Ejemplo:
URL: https://www.ejemplo.com/usuarios/perfil.html?id=123#seccion
location.pathname: /usuarios/perfil.html
````
- **port**:	Establece o devuelve el número de puerto de una URL.
- **protocol**:	Establece o devuelve el protocolo de una URL.
- **search**:	Establece o devuelve la cadena de consulta de la URL actual.
````
Ejemplo**: 
URL**: http**://ejemplo.com/pagina?id=123, 
location.search**: ?id=123.
````
### 1.3 screen
Contiene información sobre la pantalla del usuario. Se accede a él mediante window.screen o simplemente screen.

**Propiedades** 
- **width**:	Ancho total de la pantalla en píxeles.
- **height**:	Altura total de la pantalla en píxeles.
- **availWidth**:	Ancho de la pantalla disponible, excluyendo características de la interfaz del sistema operativo (como la barra de tareas).
- **availHeight**:	Altura de la pantalla disponible, excluyendo características de la interfaz del sistema operativo (como la barra de tareas).
- **colorDepth**:	Número de bits utilizados para mostrar un color (profundidad de color).
- **pixelDepth**:	Profundidad de píxeles del dispositivo (similar a colorDepth).

### 1.4 navigator
Representa el estado y la identidad del agente de usuario (generalmente el navegador). Se accede a él mediante window.navigator o simplemente navigator.

**Métodos**
Los que tiene estan obsoletos

**Propiedades** 
- **userAgent**:	Devuelve la cadena que identifica el navegador y el sistema operativo.
- **platform**:	Devuelve una cadena que representa la plataforma del navegador (por ejemplo, "Win32", "Linux").
- **cookieEnabled**:	Valor booleano que indica si las cookies están habilitadas.
- **onLine**:	Valor booleano que indica si el navegador está conectado a internet.
- **language**:	Devuelve el idioma preferido del navegador.
- **hardwareConcurrency**:	El número de núcleos de procesador lógicos disponibles.
- **geolocation**:	Objeto para acceder a la ubicación geográfica del dispositivo.
- **mediaDevices**:	Interfaz para acceder a dispositivos multimedia disponibles.
- **appName, appCodeName, appVersion**:	Propiedades heredadas y generalmente obsoletas; es mejor usar userAgent.

### 1.5 console
Proporciona una interfaz para acceder a la consola de depuración del navegador (la Consola Web). Se accede a él mediante window.console o simplemente console.

**Métodos**
- **log()**:	Muestra un mensaje en la consola (el más común).
- **warn()**:	Muestra un mensaje de advertencia.
- **error()**:	Muestra un mensaje de error.
- **info()**:	Muestra un mensaje informativo.
- **table()**:	Muestra datos tabulares (arrays de objetos) como una tabla interactiva.
- **clear()**:	Limpia la consola.
- **time(), timeEnd()**:	Inicia y finaliza un temporizador con una etiqueta, mostrando el tiempo transcurrido.	Medir el rendimiento de un bloque de código.
- **assert()**:	Registra un error y muestra un mensaje si la aserción (condición) es falsa.
- **trace()**:	Imprime una traza de pila desde el punto donde se llamó.
- **dir()**:	Muestra una lista interactiva de las propiedades del objeto JavaScript especificado.
- **count()**: Sirve para contar cuántas veces se ha llamado una función o línea de código específica,
- **group()**: Crea un nuevo grupo en línea en la consola. Esto sangra los siguientes mensajes de la consola un nivel más, hasta que se llama a console.groupEnd().
- **groupCollapsed()**: Crea un nuevo grupo en línea en la consola. Sin embargo, el nuevo grupo se crea contraído. El usuario deberá usar el botón de divulgación para expandirlo.

### 1.6 objeto window
El objeto window representa una ventana abierta en un navegador.

Si un documento contiene marcos (etiquetas iframe), el navegador crea un objeto de ventana para el documento HTML y un objeto de ventana adicional para cada marco.

**Propiedades** 
- **closed**: Devuelve un booleano, true si una ventana está cerrada.
- **console**: Devuelve el Objeto Console para la ventana. (Ver también El Objeto Console.)
- **defaultStatus**: Obsoleto.
- **document**: Devuelve el Objeto Document para la ventana. (Ver también El Objeto Document.)
- **frameElement**: Devuelve el frame (marco) en el que se ejecuta la ventana.
- **frames**: Devuelve todos los objetos window que se ejecutan en la ventana.
- **history**: Devuelve el Objeto History para la ventana. (Ver también El Objeto History.)
- **innerHeight**: Devuelve la altura del área de contenido de la ventana (viewport), incluyendo las barras de desplazamiento.
- **innerWidth**: Devuelve el ancho del área de contenido de la ventana (viewport), incluyendo las barras de desplazamiento.
- **length**: Devuelve el número de elementos iframe en la ventana actual.
- **localStorage**: Permite guardar pares clave/valor en un navegador web. Almacena los datos sin fecha de caducidad.
- **location**: Devuelve el Objeto Location para la ventana. (Ver también El Objeto Location.)
- **name**: Establece o devuelve el nombre de una ventana.
- **navigator**: Devuelve el Objeto Navigator para la ventana. (Ver también El Objeto Navigator.)
- **opener**: Devuelve una referencia a la ventana que creó la ventana actual.
- **outerHeight**: Devuelve la altura de la ventana del navegador, incluyendo barras de herramientas/barras de desplazamiento.
- **outerWidth**: Devuelve el ancho de la ventana del navegador, incluyendo barras de herramientas/barras de desplazamiento.
- **pageXOffset**: Devuelve los píxeles que el documento actual se ha desplazado (horizontalmente) desde la esquina superior izquierda de la ventana.
- **pageYOffset**: Devuelve los píxeles que el documento actual se ha desplazado (verticalmente) desde la esquina superior izquierda de la ventana.
- **parent**: Devuelve la ventana padre de la ventana actual.
- **screen**: Devuelve el Objeto Screen para la ventana. (Ver también El Objeto Screen.)
- **screenLeft**: Devuelve la coordenada horizontal de la ventana relativa a la pantalla.
- **screenTop**: Devuelve la coordenada vertical de la ventana relativa a la pantalla.
- **screenX**: Devuelve la coordenada horizontal de la ventana relativa a la pantalla.
- **screenY**: Devuelve la coordenada vertical de la ventana relativa a la pantalla.
- **sessionStorage**: Permite guardar pares clave/valor en un navegador web. Almacena los datos solo para una sesión.
- **scrollX**: Un alias de pageXOffset.
- **scrollY**: Un alias de pageYOffset.
- **self**: Devuelve la ventana actual.
- **status**: Obsoleto. Evita usarlo.
- **top**: Devuelve la ventana del navegador más alta (la principal o topmost).

**Métodos**
- **addEventListener()**: Asocia un manejador de eventos (event handler) a la ventana.
- **alert()**: Muestra un cuadro de alerta con un mensaje y un botón de Aceptar.
- **atob()**: Decodifica una cadena codificada en base-64.
- **blur()**: Quita el foco de la ventana actual.
- **btoa()**: Codifica una cadena en base-64.
- **clearInterval()****: Limpia un temporizador establecido con setInterval().
- **clearTimeout()****: Limpia un temporizador establecido con setTimeout().
- **close()**: Cierra la ventana actual.
- **confirm()**: Muestra un cuadro de diálogo con un mensaje y un botón de Aceptar y uno de Cancelar.
- **focus()**: Establece el foco en la ventana actual.
- **getComputedStyle()**: Obtiene los estilos CSS calculados actualmente aplicados a un elemento.
- **getSelection()**: Devuelve un objeto Selection que representa el rango de texto seleccionado por el usuario.
- **matchMedia()**: Devuelve un objeto MediaQueryList que representa la cadena de consulta de medios CSS especificada.
- **moveBy()**: Mueve una ventana relativa a su posición actual.
- **moveTo()**: Mueve una ventana a la posición especificada.
- **open()**: Abre una nueva ventana del navegador.
- **print()**: Imprime el contenido de la ventana actual.
- **prompt()**: Muestra un cuadro de diálogo que solicita una entrada al visitante.
- **removeEventListener()**: Elimina un manejador de eventos de la ventana.
- **requestAnimationFrame()**: Solicita al navegador que llame a una función para actualizar una animación antes del próximo repintado.
- **resizeBy()**: Cambia el tamaño de la ventana en la cantidad de píxeles especificada.
- **resizeTo()**: Cambia el tamaño de la ventana al ancho y alto especificados.
- **scroll()**: Obsoleto. Usa scrollTo() en su lugar.
- **scrollBy()**: Desplaza el documento por el número de píxeles especificado.
- **scrollTo()**: Desplaza el documento a las coordenadas especificadas.
- **setInterval()**: Llama a una función o evalúa una expresión a intervalos especificados (en milisegundos).
- **setTimeout()**: Llama a una función o evalúa una expresión después de un número específico de milisegundos.
- **stop()**: Detiene la carga de la ventana.

## 2. DOM

### 2.1 documents
Cuando un documento HTML se carga en un navegador web, se convierte en un objeto document.


## 3.Proximamente



> **Gonzalo Junquera Lorenzo**  
> Curso**: 2025/2026  
> 2º Curso CFGS Desarrollo de Aplicaciones Web  

