// Obtener referencias a los elementos del DOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
const formularioInicioSesion = document.getElementById('loginForm');
const formularioRegistro = document.getElementById('registerForm');
const formularioRecuperarContrasena = document.getElementById('forgotPasswordForm');
const tituloFormulario = document.getElementById('formTitle');

const enlaceRegistro = document.getElementById('registerLink');
const enlaceRecuperarContrasena = document.getElementById('forgotPasswordLink');
const enlaceVolverInicioSesion = document.getElementById('backToLoginLink');
const enlaceVolverInicioSesion2 = document.getElementById('backToLoginLink2');

const continuarRecuperarContrasena = document.getElementById('continueResetPassword');
const cajaCodigoVerificacion = document.getElementById('verificationCodeBox');
const botonRecuperarContrasena = document.getElementById('resetPasswordButton');

const formRecuperacion = document.getElementById('formRecuperacion');
const modalVerificacion = document.getElementById('modalVerificacion');
const notificacionRecuperacion = document.getElementById('notificacionRecuperacion');
const inputUsuario = document.getElementById('usuarioRecuperar');
const checkboxRecordar = document.getElementById('recordarInfo');
const digitosVerificacion = document.querySelectorAll('.digito');

// Funciones de manejo de formularios vv
function mostrarFormularioRegistro() {
    formularioInicioSesion.style.display = 'none';
    formularioRegistro.style.display = 'flex';
    formularioRecuperarContrasena.style.display = 'none';
    tituloFormulario.textContent = 'Registro';
    animarCambioFormulario(formularioRegistro);
}

function mostrarFormularioRecuperarContrasena() {
    formularioInicioSesion.style.display = 'none';
    formularioRegistro.style.display = 'none';
    formularioRecuperarContrasena.style.display = 'flex';
    cajaCodigoVerificacion.style.display = 'none';
    botonRecuperarContrasena.style.display = 'none';
    tituloFormulario.textContent = 'Recuperar Contraseña';
    animarCambioFormulario(formularioRecuperarContrasena);
}

function mostrarFormularioInicioSesion() {
    formularioInicioSesion.style.display = 'flex';
    formularioRegistro.style.display = 'none';
    formularioRecuperarContrasena.style.display = 'none';
    tituloFormulario.textContent = 'Inicia Sesión';
    animarCambioFormulario(formularioInicioSesion);
}

// Modificación de la función mostrarCodigoVerificacion de vg (CREDITOS: YT DCODE)
function mostrarCodigoVerificacion(evento) {
    evento.preventDefault();
    verificationCodeBox.style.display = 'flex';
    resetPasswordButton.style.display = 'block';
    document.getElementById('continueResetPassword').style.display = 'none';
    
    // Generar y mostrar código de verificación (simulado)
    const codigoGenerado = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Código de verificación:', codigoGenerado);
    
    // Mostrar notificación de envío exitoso
    mostrarNotificacionRecuperacion("Código de verificación enviado exitosamente", "exito");
    
    // Simular la verificación del código después de un breve retraso
    setTimeout(() => {
        mostrarNotificacionRecuperacion("Verificando código...", "exito");
        
    }, 6000); // 6 segundos de espera 
}

function animarCambioFormulario(formulario) {
    formulario.style.opacity = '0';
    formulario.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        formulario.style.opacity = '1';
        formulario.style.transform = 'translateY(0)';
    }, 50);
}

// Funciones de almacenamiento local
function cargarInformacionGuardada() {
    const usuarioGuardado = localStorage.getItem('usuarioRecuperacion');
    const recordarGuardado = localStorage.getItem('recordarInfoRecuperacion');

    if (usuarioGuardado && recordarGuardado === 'true') {
        inputUsuario.value = usuarioGuardado;
        checkboxRecordar.checked = true;
    }
}

function guardarInformacion() {
    if (checkboxRecordar.checked) {
        localStorage.setItem('usuarioRecuperacion', inputUsuario.value);
        localStorage.setItem('recordarInfoRecuperacion', 'true');
    } else {
        localStorage.removeItem('usuarioRecuperacion');
        localStorage.setItem('recordarInfoRecuperacion', 'false');
    }
}

// Función de notificación
function mostrarNotificacionRecuperacion(mensaje, tipo) {
    notificacionRecuperacion.textContent = mensaje;
    notificacionRecuperacion.className = `notificacion-recuperacion ${tipo}`;
    notificacionRecuperacion.classList.add('mostrar-recuperacion');
    
    setTimeout(() => {
        notificacionRecuperacion.classList.remove('mostrar-recuperacion');
    }, 3000);
}


// EvenTSSSs principales
enlaceRegistro.addEventListener('click', mostrarFormularioRegistro);
enlaceRecuperarContrasena.addEventListener('click', mostrarFormularioRecuperarContrasena);
enlaceVolverInicioSesion.addEventListener('click', mostrarFormularioInicioSesion);
enlaceVolverInicioSesion2.addEventListener('click', mostrarFormularioInicioSesion);
continuarRecuperarContrasena.addEventListener('click', mostrarCodigoVerificacion);

// Configuración de campos de entrAda (ni se q hice, pero funciona)
document.querySelectorAll('.inputBox input').forEach(entrada => {
    entrada.addEventListener('focus', () => {
        entrada.parentElement.classList.add('focus');
    });
    
    entrada.addEventListener('blur', () => {
        if (entrada.value === '') {
            entrada.parentElement.classList.remove('focus');
        }
    });
});

// Configuración de campos de verificación vv
digitosVerificacion.forEach((input, indice) => {
    input.addEventListener('input', () => {
        if (input.value && indice < digitosVerificacion.length - 1) {
            digitosVerificacion[indice + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && indice > 0) {
            digitosVerificacion[indice - 1].focus();
        }
    });
});
// cOOKIES ssssssssssssssssssssssssss osea Galletasssss

// Elementos del DOM para cookies y términos
const ventanaCookies = document.getElementById('ventanaCookies');
const ventanaTerminos = document.getElementById('ventanaTerminos');
const botonAceptar = document.getElementById('aceptarCookies');
const botonRechazar = document.getElementById('rechazarCookies');
const botonVerTerminos = document.getElementById('verTerminos');
const botonCerrarTerminos = document.getElementById('cerrarTerminos');
const notificacionBienvenida = document.getElementById('notificacionBienvenida');
const notificacionError = document.getElementById('notificacionError');

// Configuración de cookiesss sss Creditos: (YT: Net Ninja )
const cookiesConfig = {
    necesarias: {
        analytics: {
            nombre: 'ga_analytics',
            duracion: 365,
            descripcion: 'Cookie de Google Analytics para análisis de uso'
        },
        sesion: {
            nombre: 'session_gt',
            duracion: 1,
            descripcion: 'Cookie de sesión para mantener el inicio de sesión'
        }
    },
    preferencias: {
        tema: {
            nombre: 'theme_preference',
            duracion: 30,
            descripcion: 'Preferencias de tema del usuario'
        },
        idioma: {
            nombre: 'language_pref',
            duracion: 30,
            descripcion: 'Preferencia de idioma del usuario'
        }
    },
    marketing: {
        personalizacion: {
            nombre: 'personalization',
            duracion: 90,
            descripcion: 'Preferencias de contenido personalizado'
        },
        ubicacion: {
            nombre: 'location_pref',
            duracion: 30,
            descripcion: 'Preferencias de ubicación para contenido local'
        }
    }
};

// Función para establecer una cookie
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expira = `expires=${fecha.toUTCString()}`;
    document.cookie = `${nombre}=${valor};${expira};path=/`;
}

// Función para obtener una cookie e galleta
function getCookie(nombre) {
    const nombreCookie = `${nombre}=`;
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) === 0) {
            return cookie.substring(nombreCookie.length, cookie.length);
        }
    }
    return null;
}

// Función para mostrar notificación vv
function mostrarNotificacion(elemento, duracion = 3000) {
    elemento.style.top = '20px';
    setTimeout(() => {
        elemento.style.top = '-100px';
    }, duracion);
}

// Función para establecer todas las cookies ssssssssssss
function establecerTodasLasCookies() {
    Object.values(cookiesConfig).forEach(categoria => {
        Object.values(categoria).forEach(cookie => {
            setCookie(cookie.nombre, 'aceptada', cookie.duracion);
        });
    });
}

// Variables para el manejo de cookies ssssssssss
let intentosRechazo = 0;

// Función para manejar el rechazo de cookies ssssssssssssssss
function rechazarCookies() {
    intentosRechazo++;
    
    if (intentosRechazo >= 3) {
        mostrarNotificacionError('Es necesario aceptar las cookies para continuar', true);
        setTimeout(() => {
            ventanaCookies.style.display = 'block';
            ventanaCookies.style.animation = 'deslizarArriba 0.8s ease-out forwards';
        }, 4000);
    } else {
        mostrarNotificacionError('Las cookies son necesarias para una mejor experiencia');
        setTimeout(() => {
            ventanaCookies.style.display = 'block';
            ventanaCookies.style.animation = 'deslizarArriba 0.8s ease-out forwards';
        }, 3000);
    }
}

// Función para mostrar notificación de error
function mostrarNotificacionError(mensaje, urgente = false) {
    notificacionError.querySelector('p').textContent = mensaje;
    notificacionError.classList.add('error');
    if (urgente) {
        notificacionError.style.animation = 'slideInNotification 0.5s forwards, shakeNotification 0.5s 0.5s';
    } else {
        notificacionError.style.animation = 'slideInNotification 0.5s forwards';
    }
    mostrarNotificacion(notificacionError, 3000);
}

// Función para manejar la aceptación de cookies
function aceptarCookies() {
    establecerTodasLasCookies();
    setCookie('cookies_aceptadas', 'true', 365);
    ventanaCookies.style.animation = 'deslizarAbajo 0.8s ease-out forwards';
    
    notificacionBienvenida.classList.add('success');
    mostrarNotificacion(notificacionBienvenida, 3000);
    
    setTimeout(() => {
        ventanaCookies.style.display = 'none';
    }, 800);
}

// MANEJO DE NACIONALIDADES (ALLAN YO NO SOY BRI, SI AGRUEGUE NICARAGUA)

// Datos de países y códigos telefónicos
const paisesData = {
    'Argentina': '+54',
    'Bolivia': '+591',
    'Brasil': '+55',
    'Chile': '+56',
    'Colombia': '+57',
    'Costa Rica': '+506',
    'Cuba': '+53',
    'Ecuador': '+593',
    'El Salvador': '+503',
    'Guatemala': '+502',
    'Honduras': '+504',
    'México': '+52',
    'Nicaragua': '+505',
    'Panamá': '+507',
    'Paraguay': '+595',
    'Perú': '+51',
    'Puerto Rico': '+1787',
    'República Dominicana': '+1809',
    'Uruguay': '+598',
    'Estados Unidos': '+1',
    'Venezuela': '+58',
    'Reino Unido': '+44',
    'Canadá': '+1'
};

// Configurar campo de nacionalidad (No se aceptan NICAS)
const campoNacionalidad = document.getElementById('nacionalidad');
const listaNacionalidades = document.getElementById('listaNacionalidades');
const codigoPais = document.getElementById('codigoPais');

// Función para crear la lista de nacionalidades (0 NICAS)
function crearListaNacionalidades() {
    listaNacionalidades.innerHTML = '';
    Object.keys(paisesData).forEach(pais => {
        const div = document.createElement('div');
        div.textContent = pais;
        div.addEventListener('click', () => seleccionarNacionalidad(pais));
        listaNacionalidades.appendChild(div);
    });
}

// Función para seleccionar nacionalidad (Sin dejar atras: 0 nicas)
function seleccionarNacionalidad(pais) {
    campoNacionalidad.value = pais;
    codigoPais.value = paisesData[pais];
    listaNacionalidades.style.display = 'none';
    campoNacionalidad.parentElement.classList.add('focus');
}

// Eventss para el campo de nacionalidad
campoNacionalidad.addEventListener('focus', () => {
    crearListaNacionalidades();
    listaNacionalidades.style.display = 'block';
});

document.addEventListener('click', (e) => {
    if (!campoNacionalidad.contains(e.target) && !listaNacionalidades.contains(e.target)) {
        listaNacionalidades.style.display = 'none';
    }
});

//                           EVENTOS Y CONFIGURACIÓN de vg

// Inicializar la carga de información guardada al cargar la página
window.addEventListener('load', cargarInformacionGuardada);

// Configuración de eventos para el botón de aceptar cookies sssssssssssssssss ssssssssssssssssssssssssssssssssssssssss
botonAceptar.addEventListener('click', aceptarCookies);

// Configuración de eventos para el botón de rechazar cookies sssssssssssssss
botonRechazar.addEventListener('click', rechazarCookies);

// Configuración de eventos para ver términos y condiciones
botonVerTerminos.addEventListener('click', () => {
    ventanaTerminos.style.display = 'flex';
});

// Configuración de eventos para cerrar la ventana de términos
botonCerrarTerminos.addEventListener('click', () => {
    ventanaTerminos.style.display = 'none';
});

// Configuración de eventoS para el campo de nacionalidaD
campoNacionalidad.addEventListener('input', () => {
    if (campoNacionalidad.value === '') {
        listaNacionalidades.style.display = 'none';
    }
});

//  FUNCIONALIDADES noMenso importantes

// Función para validar el formulario de registro bapbapbap
function validarFormularioRegistro(evento) {
    evento.preventDefault();
    const nombre = document.getElementById('nombreRegistro').value;
    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;
    const confirmarPassword = document.getElementById('confirmarPasswordRegistro').value;

    if (!nombre || !email || !password || !confirmarPassword) {
        mostrarNotificacionError('Por favor, complete todos los campos');
        return;
    }

    if (password !== confirmarPassword) {
        mostrarNotificacionError('Las contraseñas no coinciden');
        return;
    }

    // Aquí VA la lógica para enviar los datos al servidor de BRITANYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
    console.log('Registro exitoso:', { nombre, email });
    mostrarNotificacionRecuperacion('Registro exitoso', 'success');
}

// Función para validar el formulario BRITANY
function validarFormularioInicioSesion(evento) {
    evento.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    if (!email || !password) {
        mostrarNotificacionError('Por favor, ingrese email y contraseña');
        return;
    }

    // Aquí iría la lógica para autenticar al usuario BRITANYYYYYYYYYYYYYYYY
    console.log('Intento de inicio de sesión:', { email });
    mostrarNotificacionRecuperacion('Inicio de sesión exitoso', 'success');
}

// Función para manejar el cambio de tema entre linder (claro) y moises (oscuro)
function cambiarTema() {
    document.body.classList.toggle('tema-oscuro'); // Cambiar la clase del body
    const temaActual = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
    localStorage.setItem('tema', temaActual); // Guardar la preferencia en localStorage
}

// Carga el temaa preferido de MiaKhali
function cargarTemaPreferido() {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('tema-oscuro'); // Aplicar el tema oscuro si está guardado
    }
    
    // Mostrar el botón con animacióncioncion
    const botonCambiarTema = document.getElementById('cambiarTema');
    botonCambiarTema.classList.add('visible'); // Añadir la clase visible para la animación
}

// Evento para cambiar el tema
document.getElementById('cambiarTema').addEventListener('click', cambiarTema);

// Cargar el tema preferido al iniciar la página
window.addEventListener('load', cargarTemaPreferido);

// OTROS LISTENERRRSS

// Evento para el formulario de registro
document.getElementById('registerForm').addEventListener('submit', validarFormularioRegistro);

// Evento para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', validarFormularioInicioSesion);

// Evento para cambiar el tema
document.getElementById('cambiarTema').addEventListener('click', cambiarTema);

// Cargar el tema preferido al iniciar la página
window.addEventListener('load', cargarTemaPreferido);

// Ajustar el tamaño del canvas cuando se redimensiona la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// LA INNCIALIAZAIONION

// Verificar si las cookies ya han sido aceptadas
if (getCookie('cookies_aceptadas') !== 'true') {
    ventanaCookies.style.display = 'block';
}

// Función para validar la contraseña en tiempo real actual (noa fake)
function validarContraseñaEnTiempoReal() {
    const inputContraseña = document.getElementById('passwordRegistro');
    const barraProgreso = document.querySelector('.barra-seguridad .progreso');
    const requisitos = {
        mayuscula: document.querySelector('.requisito.mayuscula'),
        minuscula: document.querySelector('.requisito.minuscula'),
        numero: document.querySelector('.requisito.numero'),
        especial: document.querySelector('.requisito.especial'),
        longitud: document.querySelector('.requisito.longitud')
    };

    inputContraseña.addEventListener('input', function() {
        const contraseña = this.value;
        let puntuacion = 0;
        const validaciones = {
            mayuscula: /[A-Z]/.test(contraseña),
            minuscula: /[a-z]/.test(contraseña),
            numero: /[0-9]/.test(contraseña),
            especial: /[!@#$%^&*(),.?":{}|<>]/.test(contraseña),
            longitud: contraseña.length >= 8
        };

        // Acttualizaaaaaaaaaaaaaaaaaaaaaa cada requisito y calcular puntuación
        Object.keys(validaciones).forEach(criterio => {
            const elemento = requisitos[criterio];
            if (validaciones[criterio]) {
                elemento.classList.add('valido');
                elemento.style.color = '#00C851'; // Verde para requisitos cumplidos
                puntuacion++;
            } else {
                elemento.classList.remove('valido');
                elemento.style.color = '#ff4444'; // Rojo para requisitos no cumplidos
            }
        });

        // Actualizar la barra de progreso
        let porcentaje = (puntuacion / 5) * 100;
        barraProgreso.style.width = `${porcentaje}%`;

        // Cambiar el color de la barra según el nivel de seguridad fuap
        if (puntuacion <= 2) {
            barraProgreso.style.backgroundColor = '#ff4444'; // Rojo  Insegura (Hasta mi abuela)
        } else if (puntuacion <= 3) {
            barraProgreso.style.backgroundColor = '#ffbb33'; // Amarillo  Media (Mi perra si entra)
        } else if (puntuacion === 4) {
            barraProgreso.style.backgroundColor = '#00C851'; // Verde  Segura (Maso masa)
        } else if (puntuacion === 5) {
            barraProgreso.style.backgroundColor = '#3498db'; // Azul  Muy segura (Ni la CIA entra)
        }

        // Mostrar todos los requisitos cuando se empiece a escribir fuapPPPPPPPPPP
        if (contraseña.length > 0) {
            document.querySelector('.mensajes-validacion').style.display = 'block';
        } else {
            document.querySelector('.mensajes-validacion').style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', validarContraseñaEnTiempoReal);


// Fin despues de 536 lineas (7-11-24    00-43)
console.log('Script cargado completamente');