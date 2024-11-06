let OpciónElegida = localStorage.getItem('OpcionElegida')

// Crea las etiquetas que almacenaran el nombre del lugar y una breve descripcion
let NombreDestino = document.createElement('h1')
NombreDestino.id = 'NombreDestino'

let DescripcionDestino = document.createElement('p')
DescripcionDestino.id = 'DescripcionDestino'

document.getElementById('ImagenFondo').appendChild(NombreDestino)    
document.getElementById('ImagenFondo').appendChild(DescripcionDestino)    

let ContenedorOpciones = document.getElementById('ContenedorOpciones')

let BarraDeNavegacionDePaises = document.createElement('div')
BarraDeNavegacionDePaises.id = 'BarraDeNavegaciondePaise'
document.getElementById('ImagenFondo').appendChild(BarraDeNavegacionDePaises) 

try {
    for(let Pais in Destinos){
        let BanderaPais = document.createElement('img')
        BanderaPais.src = Destinos[Pais].Bandera
        BanderaPais.id = `Imagen${Pais}`
        document.getElementById('BarraDeNavegaciondePaises').appendChild(BanderaPais) 
    }
} catch (error) {
    alert('¡Lo sentimos! A ocurrido un error')
    window.location.href = '../PaginaPrincipal/Pagina principal.html'
}

try {
    let Banderas = document.getElementById('BarraDeNavegaciondePaises').querySelectorAll('img')
    Banderas.forEach(Bandera => {
        Bandera.addEventListener('click', function(){
            for(let Pais in Destinos){
                if(Bandera.id == `Imagen${Pais}`){
                    OpciónElegida = Pais
                    ContenedorOpciones.innerHTML = ''
                    document.getElementById('ImagenFondo').classList.add('AnimacionDeEntradaContenedor')
                    MostrarDestinos()
                    document.getElementById('ContenedorOpciones').classList.add('AnimacionDeEntradaContenedor')
                    setTimeout(() => {
                        document.getElementById('ImagenFondo').classList.remove('AnimacionDeEntradaContenedor')
                        document.getElementById('ContenedorOpciones').classList.remove('AnimacionDeEntradaContenedor')
                    }, 1000);
                }
            }
        })
    })
} catch (error) {
    alert('¡Lo sentimos! No se ha podido cambiar de pais. Regresaras a la página principal')
    window.location.href = '../PaginaPrincipal/Pagina principal.html'
}


/*Revisa todos los objetos hasta llegar a llaves que no sean objetos (Imagen, Nombre, Descripcion)
y crea las etiquetas que mostraran las opciones de destino por pais*/

let Ciudades = []
let RecorrerDestinos = (Objeto) => {
        try {
        for(let Pais in Objeto){
            if(typeof Objeto[Pais] == 'object'){
                RecorrerDestinos(Objeto[Pais])
            }else{
                if(!Ciudades.includes(Objeto) && !Object.keys(Objeto).includes('ImagenPais')){
                    ContenedorOpciones.innerHTML = ''
                    Ciudades.push(Objeto)
                    Ciudades.forEach(Ciudad => {
                        let opcionDiv = document.createElement('div')
                        opcionDiv.style.backgroundImage = `${Ciudad.Imagen}`
                        opcionDiv.classList = 'OpcionDestino'
                        let NombreCiudad = document.createElement('h1')
                        NombreCiudad.innerText = Ciudad.Nombre
                        opcionDiv.appendChild(NombreCiudad)
                        ContenedorOpciones.appendChild(opcionDiv)
                        
                        let opciones = ContenedorOpciones.querySelectorAll('div')
                        opciones.forEach(opcion => {
                            opcion.addEventListener('click', function(){
                                ImgPrincipalyRemover(Ciudades, opcion)
                            })
                        })
                    })
                }
            }
        } 
    }
    
 catch (error) {
    ContenedorOpciones.innerText = 'No se pudo cargar la cinta de ciudades😣. Visita otros paises🌐'
}}


// Activa la función 'Recorrer Destinos' cuando el usuario elige un pais, para mostrar los destinos con respecto a ese pais
function MostrarDestinos(){
    for(let Pais in Destinos){
        if(Pais == OpciónElegida){
            ContenedorOpciones.innerHTML = ''
            Ciudades = []
            document.getElementById('ImagenPrincipal').style. backgroundImage = ''
            document.getElementById('ImagenFondo').style. backgroundImage = ''
            RecorrerDestinos(Destinos[Pais])
            document.getElementById('ImagenPrincipal').style. backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${Destinos[Pais].ImagenPais}`
            document.getElementById('ImagenFondo').style. backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${Destinos[Pais].ImagenPais}`
            NombreDestino.innerText = Pais
            DescripcionDestino.innerText = Destinos[Pais].DescripcionPais
            document.getElementById('PanoramicaDeLugar').innerHTML = Destinos[Pais].ImagenPais2
            // Aqui se pone la informacion de caso base del Pais(cuando aun no se ha elegido una ciudad)
        }
    }
}
MostrarDestinos()


/*Se encarga de hacer la animación y cambiar los datos cuando el usuario elija una cuidad
    Además, mueve la opcion elegida al final*/

function ImgPrincipalyRemover(Ciudades, opcion){
    document.getElementById('ImagenPrincipal').classList.add('AnimacionDeEntrada')
    document.getElementById('ImagenPrincipal').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${opcion.style.backgroundImage}`
   
    opcion.remove()
    Ciudades.forEach(Ciudad => {
        if(Ciudad.Imagen == opcion.style.backgroundImage){
            NombreDestino.innerText = Ciudad.Nombre
            DescripcionDestino.innerText = Ciudad.Descripcion
            NombreDestino.classList.add('AnimacionDeEntradaTexto')
            DescripcionDestino.classList.add('AnimacionDeEntradaTexto')
            CambiarInformaciónAdicional(Ciudad)

            let Indice = Ciudades.indexOf(Ciudad)
                Ciudades.splice(Indice, 1)
            Ciudades.push(Ciudad)
            ContenedorOpciones.appendChild(opcion)
        }
        setTimeout(() => {
            document.getElementById('ImagenFondo').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${opcion.style.backgroundImage}`
        }, 810)

        setTimeout(() => {
                document.getElementById('ImagenPrincipal').classList.remove('AnimacionDeEntrada')
                NombreDestino.classList.remove('AnimacionDeEntradaTexto')
                DescripcionDestino.classList.remove('AnimacionDeEntradaTexto')
            
        }, 800)
       })
}


//Alexis de aquí pa abajo es lo suyo

let DestinoNombre = document.createElement('h1')
let InformacionDestino = document.createElement('p')
let HistoriaDestino = document.createElement ('p')
let ImagenRestaurante = document.createElement ('img')
let MasInfo = document.createElement ('p')


function CambiarInformaciónAdicional(Ciudad){
    
    document.getElementById('Restaurante').style.backgroundImage = ''
    document.getElementById('Hoteles').style.backgroundImage = ''
    document.getElementById('Atraccioes').style.backgroundImage = ''

    DestinoNombre.innerText = Ciudad.NombrePanoramica
    DestinoNombre.id = "DestinoNombre"

    InformacionDestino.id = "InformacionDestino"
    InformacionDestino.innerText = Ciudad.DescripcionPanoramica

    HistoriaDestino.id = "HistoriaDestino"
    HistoriaDestino.innerText = Ciudad.HistoriaDelDestino

    MasInfo.id = "MasInfo"
    MasInfo.innerText = Ciudad.MasInfo

    document.getElementById('NombreyLogo').appendChild(DestinoNombre)
    document.getElementById('DescripcionPanoramica').appendChild(InformacionDestino)
    document.getElementById('HistoriaDelLugar').appendChild(HistoriaDestino)
    document.getElementById('MasInformacion').appendChild(MasInfo)
    document.getElementById('')
    document.getElementById('PanoramicaDeLugar').innerHTML = Ciudad.Panoramica
    document.getElementById('PanoramicaDeLugar').innerHTML = Ciudad.Panoramica

    console.log(Ciudad.Panoramica)
}