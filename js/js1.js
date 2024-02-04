//--------------------DISEÑO DE LA PAGINA------------------------------------------------------//

//--------------------SECCION INICIO----------------------------------------------------------//

//--------------------BARRA DE NAVEGACION--------------------//


// Función para cargar una imagen de forma asíncrona
async function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

// Función para cargar todas las imágenes de forma asíncrona
async function loadImagesAsync(srcArray) {
  return Promise.all(srcArray.map(src => loadImageAsync(src)));
}

document.addEventListener('DOMContentLoaded', async function () {
  const header = document.createElement('header');
  const logoImg = await loadImageAsync('imgs/logo.png');
  logoImg.id = 'logo';

  const nav = document.createElement('nav');
  nav.className = 'navegacion';

  const enlaces = ['Inicio', 'Galeria', 'Empleo']
  const secciones = ['secInicio', 'secGaleria', 'Secempleo'];

  for (let i = 0; i < enlaces.length; i++) {
    const a = document.createElement('a');
    a.href = '#' + secciones[i];
    a.innerText = enlaces[i];
    nav.appendChild(a);
}
  header.appendChild(logoImg);
  header.appendChild(nav);
  document.body.appendChild(header);

  // Sección inicio
  const secInicio = document.createElement('section');
secInicio.id = 'secInicio'; // Agregué el ID aquí
secInicio.className = 'secInicio';

  const inicioImages = ['imgs/Mendoza.jpg'];
  await loadImagesAsync(inicioImages);

  const mendozaImg = document.createElement('img');
  mendozaImg.src = inicioImages[0];
  mendozaImg.id = 'mendoza';

  const cumbrestext = document.createElement('h2');
  cumbrestext.id = 'cumbrestext';
  cumbrestext.innerText = 'Cumbres Hotel';

  secInicio.appendChild(mendozaImg);
  secInicio.appendChild(cumbrestext);
  document.body.appendChild(secInicio);

//--------------------SECCION GALERIA--------------------------------//
const secGaleria = document.createElement('section');
secGaleria.id = 'secGaleria'; // Agregué el ID aquí
secGaleria.className = 'secGaleria';

// Crear div con clase "ful-img" y id "fulImgBox"
const fulImgBox = document.createElement('div');
fulImgBox.className = 'ful-img';
fulImgBox.id = 'fulImgBox';

// Crear etiqueta img con id "fulImg"
const fulImg = document.createElement('img');
fulImg.id = 'fulImg';
fulImg.alt = '';

// Crear etiqueta span con evento onclick para cerrar la imagen
const closeSpan = document.createElement('span');
closeSpan.innerText = 'X';
closeSpan.onclick = function() {
document.querySelector('.ful-img').style.display = 'none';
};

// Agregar la etiqueta img y span al div
fulImgBox.appendChild(fulImg);
fulImgBox.appendChild(closeSpan);

// Crear etiqueta p para el párrafo
const servtex = document.createElement('p');
servtex.innerText = 'En nuestro hotel, nos enorgullece comprometernos con el turismo y la creación de experiencias inolvidables para nuestros visitantes. Creemos que cada viajero merece no solo un lugar para descansar, sino también un refugio que celebre la diversidad y la riqueza cultural de nuestro entorno. Nos esforzamos por ofrecer no solo un alojamiento de calidad, sino una experiencia única que permita a nuestros huéspedes sumergirse en la autenticidad de la región. Desde la atención personalizada hasta la promoción de actividades locales, nuestro compromiso es hacer que cada estancia sea memorable y contribuir al florecimiento del turismo sostenible. En nuestro hotel, no solo abrimos puertas, creamos conexiones y construimos recuerdos duraderos para aquellos que eligen explorar el mundo a través de nuestras puertas';
servtex.className = 'servtext';

// Crear div con clase "img-gallery"
const imgGallery = document.createElement('div');
imgGallery.className = 'img-gallery';

// Array con rutas de imágenes
const imgSources = ['imgs/img1slider.jpg', 'imgs/img2slider.jpg', 'imgs/img3slider.jpg','imgs/img4slider.jpg','imgs/img5slider.jpg','imgs/img6slider.jpg','imgs/img7slider.jpg','imgs/img8slider.jpg']
// Función para crear etiquetas img y asignar evento onclick
function createImg(src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onclick = function() {
    document.getElementById('fulImg').src = src;
    document.querySelector('.ful-img').style.display = 'flex';
    };
    return img;
}

// Crear etiquetas img y agregarlas al div de galería
imgSources.forEach(src => {
imgGallery.appendChild(createImg(src));
});

// Agregar las etiquetas al cuerpo del documento
secGaleria.appendChild(fulImgBox);
secGaleria.appendChild(servtex);
secGaleria.appendChild(imgGallery);

document.body.appendChild(secGaleria)


//--------------------SECCION EMPLEO----------------------------------//

 // Crear la sección empleo
 const Secempleo = document.createElement('section');
 Secempleo.id = 'Secempleo'; // Agregué el ID aquí
 Secempleo.className = 'Secempleo';

//Contenedor 
const empleoContainer = document.createElement('div')
empleoContainer.className = 'empleoContainer'

//Encabezado
const empleoHeader = document.createElement('div')
empleoHeader.className = 'empleoHeader'

//h2 
const h2Empleo = document.createElement('h2')
h2Empleo.innerText = 'SE PARTE DEL EQUIPO!'

//h4 
const h4Empleo = document.createElement('h4')
h4Empleo.innerText = 'Actualmente estamos en proceso de inicio en la localidad, buscamos todos los talentos';

empleoHeader.appendChild(h2Empleo)
empleoHeader.appendChild(h4Empleo)

//----FORMULARIO---//
const empleoForm = document.createElement('form')
empleoForm.className = 'empleoForm'
empleoForm.id = 'empleoForm'

//Casillas
const formControls = [
    { label: 'Nombre y apellido', type: 'text', id: 'nombre' },
    { label: 'Email', type: 'email', id: 'email' },
    { label: 'Telefono de contacto', type: 'number', id: 'tel' },
    {label:'Puesto', type: 'select', id:'puesto'},
    { label: 'Breve Presentacion', type: 'text', id: 'presentacion' },
]

formControls.forEach(control => {
    const formControlDiv = document.createElement('div')
    formControlDiv.className = 'form-control'

    const label = document.createElement('label')
    label.innerText = control.label

    let input;

    if (control.type === 'select') {
      // Para el tipo 'select', usar la barra desplegable
      input = document.createElement('select');
      input.id = control.id;
  
      // Agregar una opción predeterminada y desactivada como placeholder
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';  // Puedes establecer el valor que desees
      placeholderOption.innerText = 'Selecciona un puesto';  // Puedes establecer el texto que desees
      placeholderOption.disabled = true;  // La opción estará desactivada
      placeholderOption.selected = true;  // La opción estará seleccionada por defecto
      input.appendChild(placeholderOption);
  
      // Cargar opciones desde el JSON
      fetch('./js/Puestos.json')
          .then(response => response.json())
          .then(data => {
              // Verificar si data es un array
              if (Array.isArray(data.puestosHotel)) {
                  // Llenar la barra desplegable con las opciones del JSON
                  data.puestosHotel.forEach(opcion => {
                      const option = document.createElement('option');
                      option.value = opcion.id;
                      option.innerText = opcion.nombre;
                      input.appendChild(option);
                  });
              } else {
                  console.error('El contenido del JSON no es un array');
              }
          })
          .catch(error => console.error('Error al cargar el JSON:', error));
  } else {
      // Para otros tipos, como 'text' o 'email', usar input de texto
      input = document.createElement('input');
      input.type = control.type;
      input.id = control.id;
  }
  

    const smallError = document.createElement('small')
    smallError.innerText = 'Error message'
    
    // Si el control es la barra desplegable, agregar mensaje de error
    if (control.type === 'select') {
  formControlDiv.appendChild(smallError);

  // Agregar evento change para verificar si se selecciona una opción
  input.addEventListener('change', function () {
      if (input.value === '') {
          // Si se selecciona la opción predeterminada, aplicar estilo rojo
          formControlDiv.classList.add('error');
      } else {
          // Si se selecciona una opción válida, quitar estilo rojo
          formControlDiv.classList.remove('error');
        }
      });
  }
  
    formControlDiv.appendChild(label)
    formControlDiv.appendChild(input)
    formControlDiv.appendChild(smallError)
    empleoForm.appendChild(formControlDiv)
})


//Boton
const BotonSubmit = document.createElement('button')
BotonSubmit.innerText = 'Enviar'
BotonSubmit.className = 'BotonSubmit'


empleoForm.appendChild(BotonSubmit)
empleoContainer.appendChild(empleoHeader)
empleoContainer.appendChild(empleoForm)
Secempleo.appendChild(empleoContainer)
document.body.appendChild(Secempleo)



//--------------------FUNCIONAMIENTO DE LA PAGINA------------------------------------------------------//

//Elementos de interaccion del usuario
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const puesto = document.getElementById('puesto')
const presentacion = document.getElementById('presentacion')


//Añadir evento
empleoForm.addEventListener('submit', e => {
	e.preventDefault()
	checkInputs()
})


//Funcion de error
function MensajeError(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-control error'
	small.innerText = message
}
//funcion de exito
function MensajeExito(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control exito'
}

// Función para restablecer el formulario
function resetForm(hasErrors) {
  const formControls = document.querySelectorAll('.form-control')
  formControls.forEach(formControl => {
      if (!hasErrors) {
          formControl.classList.remove('exito')
      }
  });
}

 //Funcion verificacion de validez de datos
function checkInputs() {

  let validar = true
	
	const nombreValue = nombre.value.trim()
	const emailValue = email.value.trim()
	const telValue = tel.value.trim()
  const presentacionValue = presentacion.value.trim()
  const puestoValue = puesto.value.trim()


	if(nombreValue === '') {
		MensajeError(nombre, 'No pueden haber espacios en blanco')
    validar = false
	} else {
		MensajeExito(nombre)
	} 

	if(emailValue === '') {
		MensajeError(email, 'No pueden haber espacios en blanco')
    validar = false
	} else {
		MensajeExito(email)
	}
	
	if(telValue === '') {
		MensajeError(tel, 'No pueden haber espacios en blanco')
    validar = false
	} else if ((telValue.length) === 10) {
    MensajeExito(tel) 
  } else {
		MensajeError(tel, 'Ingrese un numero de telefono valido')
    validar = false
	}
	
  if(presentacionValue === '') {
		MensajeError(presentacion, 'No pueden haber espacios en blanco')
    validar = false
	} else {
		MensajeExito(presentacion)
	}

  if (puestoValue === '') {
    MensajeError(puesto, 'Seleccione una opción válida')
    validar = false
  } else {
    MensajeExito(puesto);
  }
  // Solo si todos los campos son válidos, crea el objeto aspirantes
  if (validar) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por elegirnos!, nos mantendremos en contacto con vos",
      showConfirmButton: false,
      timer: 3000
    })
        // Restablecer el formulario después del éxito
        resetForm(false)
    } else {
        // Si hay errores, restablecer el formulario sin eliminar los bordes verdes
        resetForm(true)
  }
}

});
