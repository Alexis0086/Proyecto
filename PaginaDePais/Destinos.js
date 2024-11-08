const Destinos = {
    Bélgica: {
        Nombre: 'Bélgica',
        ImagenPais: 'url("../ImagenesDestinos/Belgica/Belgica.jpg")',
        DescripcionPais: 'Un pequeño país con un inmenso corazón europeo, donde cada ciudad revela una historia, sabores irresistibles y un arte que deslumbra',
        ImagenPais2: '<img src="../ImagenesDestinos/Belgica/BelgicaImg.jpg" alt="">',
        Bandera: '../ImagenesDestinos/Belgica/BanderaBelgica.jpg',
        Amberes: {
            Nombre: 'Amberes',
            Imagen: 'url("../ImagenesDestinos/Belgica/Amberes.jpg")',
            Descripcion: 'Amberes, la capital mundial de los diamantes, deslumbra con su impresionante puerto, su catedral gótica y su vibrante escena artística.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/5L3uinxwlU"></iframe>',
            NombrePanoramica: 'Grote Markt',
            DescripcionPanoramica: 'La plaza central de Amberes, llena de vida y rodeada de edificios históricos, es un lugar donde la historia y la modernidad se encuentran.',
            HistoriaDelDestino: 'Amberes, con uno de los puertos más grandes del mundo, es famosa por su comercio de diamantes. En la Edad Media, fue un destacado centro artístico. Hoy en día, sigue siendo un núcleo vibrante de arte y comercio',
            MasInfo: 'Amberes, hogar de la Catedral de Nuestra Señora y el Museo Real de Bellas Artes, es un centro de comercio de diamantes y vibrante vida cultural.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Namba osaka (no 360).jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/Shinjuku (tokyo).jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/Mikayima Hiroshima.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/Tsurugizaki, Kanagawa.jpg")',
            RestaurantesInfo: "De Peerdestal, The Jane, Café d'Anvers, 't Zilte",
            HotelesInfo: "Hotel Julien, Hotel Rubens-Grote Markt, Antwerp Central Youth Hostel, Hotel De Witte Lelie",
            AtraccionesInfo: 'Museo Real de Bellas Artes, Zoo de Amberes, Museo Plantin-Moretus',
            
        },
        Dinant: {
            Nombre: 'Dinant',
            Imagen: 'url("../ImagenesDestinos/Belgica/Dinant.jpg")',
            Descripcion: 'Emplazada a orillas del Mosa, Dinant te cautivará con sus imponentes acantilados, la majestuosa ciudadela y el legado del jazz de Adolphe Sax.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:18px;" src="https://panoraven.com/es/embed/F0ZuAQxMGu"></iframe>',
            NombrePanoramica: 'Iglesia Notre-Dame',
            DescripcionPanoramica: 'Ubicada en el corazón de Dinant, esta iglesia histórica alberga una impresionante colección de arte flamenco, incluido el famoso Madonna con el Niño de Miguel Ángel."',
            HistoriaDelDestino: 'Dinant, a orillas del río Mosa, es conocida por sus impresionantes acantilados y su histórica ciudadela. Esta ciudad medieval fue un importante centro comercial y es el lugar de nacimiento de Adolphe Sax, inventor del saxofón.',
            MasInfo: 'Dinant, conocida por sus bellas vistas del río Mosa y sus cuevas naturales, es famosa por sus coloridas casas a lo largo del río y su deliciosa couque de Dinant, una galleta dura tradicional.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: "La Cascade, Le Saint-Hubert, Chez Bouboule, L'atelier du Goût",
            HotelesInfo: 'Château de Vignée, Ibis Dinant, Hotel La Merveilleuse, Hotel Le Fenelon',
            AtraccionesInfo: 'Ciudadela de Dinant, Catedral de Notre-Dame, Museo de la Cerveza, Río Mosa',
        },
        Brujas: {
            Nombre: 'Brujas',
            Imagen: 'url("../ImagenesDestinos/Belgica/Brujas.jpg")',
            Descripcion: 'Sumérgete en la magia medieval de Brujas, con sus canales románticos, calles empedradas y encantadores puentes que invitan a perderse en el tiempo',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:18px;" src="https://panoraven.com/es/embed/kk9qYQ1QZA"></iframe>',
            NombrePanoramica: 'Rozenhoedkaai',
            DescripcionPanoramica: 'Considerado el rincón más hermoso y fotografiado de Brujas, donde los canales y las antiguas casas reflejan una postal perfecta del medievo.',
            HistoriaDelDestino: 'Brujas, con sus canales y arquitectura gótica, fue un próspero puerto en la Edad Media. Su centro histórico es Patrimonio de la Humanidad. Hoy en día, es uno de los destinos turísticos más encantadores de Europa',
            MasInfo: 'Amberes, hogar de la Catedral de Nuestra Señora y el Museo Real de Bellas Artes, es un centro de comercio de diamantes y vibrante vida cultural.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: 'De Karmeliet, Den Gouden Harynck, Brasserie Cambrinus, Bistro de Schiervelde',
            HotelesInfo: "Hotel de Orangerie, Hotel Dukes' Palace, St. Christopher's Inn Hostel, Hotel de Castillon",
            AtraccionesInfo: 'Plaza Mayor de Brujas, Campanario de Brujas, Museo Groeninge, Paseo en barco por los canales',
        },
        Bruselas: {
            Nombre: 'Bruselas',
            Imagen: 'url("../ImagenesDestinos/Belgica/Bruselas.jpg")',
            Descripcion: 'Descubre la vibrante capital de Europa, donde la arquitectura gótica se mezcla con la modernidad en una ciudad llena de arte, cultura y exquisita gastronomía."',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/ZlEaDyZzGK"></iframe>',
            NombrePanoramica: 'Grand Place',
            DescripcionPanoramica: 'El corazón vibrante de Bruselas, rodeado de majestuosos edificios históricos que exhiben una increíble arquitectura barroca y gótica.',
            HistoriaDelDestino: 'Capital de Bélgica y de la Unión Europea, Bruselas combina arquitectura histórica con modernos edificios administrativos. Conocida por su delicioso chocolate y cerveza, también alberga importantes instituciones culturales. Su Grand Pl',
            MasInfo: 'Bruselas, corazón administrativo de Europa, mezcla impresionantes edificios históricos como la Grand Place con una vida cultural vibrante y deliciosa gastronomía.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: "Comme Chez Soi, La Roue d'Or, Le Cirio, Noordzee Mer du Nord",
            HotelesInfo: 'Hotel Amigo, The Dominican, MEININGER Hotel Brussels City Center, Thon Hotel',
            AtraccionesInfo: 'Atracciones: Atomium, Grand Place, Manneken Pis, Museo Magritte',
        },
        Lieja: {
            Nombre: 'Lieja',
            Imagen: 'url("../ImagenesDestinos/Belgica/Lieja.jpg")',
            Descripcion: 'Lieja, la ardiente ciudad valona, te espera con su rica historia industrial, su dinamismo cultural y su deliciosa cocina regional',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:18px; );" src="https://panoraven.com/es/embed/gBk9rtFNmD"></iframe>',
            NombrePanoramica: 'Atlas V Bridge',
            DescripcionPanoramica: 'Este icónico puente ofrece vistas panorámicas inigualables del río Mosa y los pintorescos alrededores que te dejarán sin aliento',
            HistoriaDelDestino: 'Lieja, en la región de Valonia, tiene una rica historia industrial y estratégica. Conocida por su producción de hierro y acero, sigue siendo un importante centro económico. Su catedral gótica y la ciudadela son puntos destacados.',
            MasInfo: 'Lieja, crisol de arte contemporáneo y herencia industrial, es conocida por su animado mercado dominical y su rica historia cultural',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: 'La Cuisine de Pierre, Le Pain Quotidien, Chez Liègeois, Les Caves du Palais',
            HotelesInfo: 'Hotel Ibis Liège Centre Opéra, Hôtel Neuvice, Les Comtes de Méan, Van der Valk Hotel Liège',
            AtraccionesInfo: 'La Montagne de Bueren, Museo de la Vida Valona, Catedral de San Pablo, Parque de la Boverie',
        },
        Lovaina: {
            Nombre: 'Lovaina',
            Imagen: 'url("../ImagenesDestinos/Belgica/Lovaina.jpg")',
            Descripcion: 'Vive el ambiente estudiantil en Lovaina, hogar de una de las universidades más antiguas de Europa y famosa por su vibrante vida nocturna y cervezas artesanales',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:18px;" src="https://panoraven.com/es/embed/a1ZjALWPoV"></iframe>',
            NombrePanoramica: 'Leuven Town Hall',
            DescripcionPanoramica: 'Una joya de la arquitectura gótica, este ayuntamiento impresiona con sus torres elegantes y más de 230 esculturas detalladas que decoran su fachada.',
            HistoriaDelDestino: 'Lovaina, famosa por su Universidad Católica fundada en 1425, es un centro de aprendizaje y cultura. La ciudad combina su rica historia académica con una vibrante vida nocturna. También es conocida por sus cervezas artesanales.',
            MasInfo: 'Lovaina, con su prestigiosa universidad y animada vida estudiantil, destaca por sus festivales de cerveza y su biblioteca universitaria icónica.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: "De Werf, La Casa de la Paella, Brasserie T'Kaffekommune, De Hoorn",
            HotelesInfo: "Begijnhof Hotel, Martin's Klooster, Cube Hostel, The Fourth",
            AtraccionesInfo: ' Universidad de Lovaina, Biblioteca de la Universidad, Plaza del Mercado, Jardines Beguines',
        }
    
    },
    Japón: {
        Nombre: 'Japón',
        ImagenPais: 'url("../ImagenesDestinos/Japon/Shibuya.jpg")',
        ImagenPais2: ' <img src="../ImagenesDestinos/Japon/Japon.jpg" alt="">',
        DescripcionPais: 'Japón es un país con una rica historia y cultura que se remonta a miles de años. El país ha sido influenciado por una variedad de culturas, incluidas las de China, Corea y Occidente.',
        Bandera: '../ImagenesDestinos/Japon/Japon_bandera.png',
        Tokio: {
            Nombre: 'Tokio',
            Imagen: 'url("../ImagenesDestinos/Japon/Shinjuku (tokyo).jpg")',
            Descripcion: 'Tokio es una combinación de la tradición y la modernidad. La ciudad es conocida por su gastronomía, festivales, artes y entretenimiento, que atraen a turistas de todo el mundo.',
            Panoramica: '<iframe width="90%" height="500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/l7JUwqngcV"></iframe>',
            NombrePanoramica: 'Shinjuku',
            DescripcionPanoramica: 'Es un importante centro comercial y administrativo, que alberga la mitad norte de la estación de tren más concurrida del mundo. Y lo que se muestra en la imagen panoramica es el pase llamado "Kabuki-cho".',
            HistoriaDelDestino: 'Tokyo, antes Edo, se convirtió en la capital de Japón en 1868 y creció hasta ser hoy una de las ciudades más grandes y modernas del mundo.',
            MasInfo: 'Cultura única, como los santuarios. Gastronomía, como el sushi. Compras y tecnología, lo último en tecnología y moda.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Japon.gif")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/RestauranteTokyo.jpeg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/HotelTokyo.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/TokyoAtraccion.jpg")',
            RestaurantesInfo: 'Restaurante Samurai, Shinjuku, Zauo, Vampire Café, Ginza, Alicia en el libro de Fantasía, Shinjuku',
            HotelesInfo: 'El Mitsui Garden Hotel Roppongi Tokyo Premier, Hotel New Otani Tokyo Garden Tower, Odaiba Hilton Tokyo, Park Hyatt Tokio, Imperial Hotel Tokio',
            AtraccionesInfo: 'Templo Senso-Ji, Torre de Tokio, Parque Ueno, Skytree Tokio, Santuario Meiji (Meiji Jingu)',
        },

        Kioto: {
            Nombre: 'Kioto',
            Imagen: 'url("../ImagenesDestinos/Japon/Kioto Kiyumisu (no 360).jpg")',
            Descripcion: 'Kioto se encuentra rodeada de una rica belleza natural, y es una ciudad con un repertorio único que muestra una cultura de gran atractivo',
            Panoramica: '<iframe width="90%" height="500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;" src="https://panoraven.com/es/embed/HkAHo1Uccs"></iframe>',
            NombrePanoramica: 'Kioto',
            DescripcionPanoramica: 'Kioto es una ciudad histórica en Japón, famosa por sus templos, santuarios, jardines y arquitectura tradicional. Antigua capital, destaca por su rica herencia cultural y su papel en preservar las tradiciones japonesas.',
            HistoriaDelDestino: 'Fundada en 794, Kioto fue la capital de Japón hasta 1868, destacándose como centro cultural y religioso. Se salvó de bombardeos en la Segunda Guerra Mundial, conservando su arquitectura y templos históricos',
            MasInfo: 'Kioto ofrece templos, jardines y cultura tradicional, siendo un destino ideal para vivir la historia de Japón.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Toyokuni Shrine kioto (no 360).jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/Cafe Kyoto.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/Nijo Kioto.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/Templo Zen Kioto.jpeg")',
            RestaurantesInfo: 'Gion Kappo Sakamoto, Nishiki Warai, Menbaka Fire Ramen, Hyotei, Kyoboshi, Kichi Kichi Omurice',
            HotelesInfo: 'The Ritz-Carlton, Kyoto, Hotel Granvia Kyoto, Hoshinoya Kyoto, Kyoto Hotel Okura, Four Seasons Hotel Kyoto',
            AtraccionesInfo: 'Templo Kinkaku-ji (Pabellón de Oro),Santuario Fushimi Inari-taisha, Templo Kiyomizu-dera, Bosque de Bambú de Arashiyama, Castillo de Nijo',

        },
         
        Osaka: {
            Nombre: 'Osaka',
            Imagen: 'url("../ImagenesDestinos/Japon/Namba osaka (no 360).jpg")',
            Descripcion: 'Luces, bullicio y diversión: Osaka es un lugar de diversión y entretenimiento con pocas pretensiones.',
            Panoramica: '<iframe width="90%" height="500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/vdDGTRf6RD"></iframe>',
            NombrePanoramica: 'Namba',
            DescripcionPanoramica: 'Namba es el animado centro de entretenimiento y comercio de Osaka, famoso por sus calles llenas de tiendas, restaurantes y neones, especialmente en áreas como Dotonbori. Es un lugar popular para disfrutar de la gastronomía local y la vida nocturna.',
            HistoriaDelDestino: 'Osaka, antigua capital y puerto comercial, creció en el siglo XVI con el Castillo de Osaka y se consolidó en la era Edo como centro económico y "cocina de Japón". Hoy es una ciudad clave en economía y cultura gastronómica.',
            MasInfo: 'Gastronomía, Osaka es famosa por su comida callejera, como takoyaki. Historia y cultura, visitar el Castillo de Osaka y el histórico distrito de Namba.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Namba osaka (no 360).jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/Teppanyaki Ousaka.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/Hotel Miyako City Osaka.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/Osaka Dotonbori.jpg")',
            RestaurantesInfo: 'Ichiran Dotonbori, Kiji Umeda Sky Building, Dotonbori Imai Honten, Mizuno, Hozenji Sanpei',
            HotelesInfo: 'Osaka Marriott Miyako Hotel, The St. Regis Osaka, Hotel Granvia Osaka, Swissôtel Nankai Osaka, Conrad Osaka',
            AtraccionesInfo: 'Castillo de Osaka. Dotonbori, Universal Studios Japan, Acuario Kaiyukan, Umeda Sky Building',
        },
        
        Kanagawa:{
            Nombre: 'Kanagawa',
            Imagen: 'url("../ImagenesDestinos/Japon/Tsurugizaki, Kanagawa.jpg")',
            Descripcion: 'Kanagawa es una prefectura cerca de Tokio, famosa por Yokohama, Hakone y Kamakura, que combinan modernidad, naturaleza y tradición.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/OuptvKRKqO"></iframe>',
            NombrePanoramica: 'Tsurugizaki',
            DescripcionPanoramica: 'Tsurugizaki es un cabo en la península de Miura, en la prefectura de Kanagawa, Japón. Es conocido por su hermoso paisaje costero, acantilados y su faro, el Tsurugizaki Lighthouse, que ofrece vistas panorámicas del océano Pacífico.',
            HistoriaDelDestino: 'Kanagawa es una prefectura japonesa con una historia clave en la apertura al comercio exterior en 1859, marcando la modernización de Japón. Su capital, Yokohama, creció de puerto pesquero a ciudad próspera y moderna, importante en comercio y turismo.',
            MasInfo: 'Historia y cultura en Yokohama, vistas del Monte Fuji desde Hakone y santuarios y templos en Kamakura.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Tsurugizaki, Kanagawa.jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/Casa del té.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/Rei hotel.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/Kamakura Kanagawa.jpg")',
            RestaurantesInfo: 'Shin-Yokohama Ramen Museum, Saryo Itoen, Katsumidori Sushi , Naruse, Ganko Enoshima.',
            HotelesInfo: 'The Yokohama Bay Hotel Tokyu, Hyatt Regency Hakone Resort and Spa, Hotel New Grand, Hakone Kowakien Tenyu (Hakone), Kamakura Prince Hotel.',
            AtraccionesInfo: 'Minato Mirai 21, Santuario Tsurugaoka Hachimangu, Aguas termales de Hakone, Gran Buda (Daibutsu) de Kamakura, Museo de Ramen de Shin-Yokohama',
        },

        Nara: {
            Nombre: 'Nara',
            Imagen: 'url("../ImagenesDestinos/Japon/Nara Daibustu.jpg")',
            Descripcion: 'Nara es una ciudad histórica de Japón, famosa por sus templos y ciervos que deambulan libremente.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;" src="https://panoraven.com/es/embed/p3IZgezzCt"></iframe>',
            NombrePanoramica: 'Daibustu',
            DescripcionPanoramica: 'El Daibutsu es una enorme estatua de Buda ubicada en el templo Todai-ji en Nara, Japón. Este icónico Buda de bronce mide 15 metros de altura y es uno de los símbolos más importantes del budismo japonés, atrayendo a visitantes de todo el mundo.',
            HistoriaDelDestino: 'Nara fue la primera capital permanente de Japón durante el período Nara (710-794). En esta época se construyeron templos y monumentos importantes que marcaron el desarrollo del budismo y la cultura japonesa, muchos de los cuales aún se conservan como Patrimonio de la Humanidad.',
            MasInfo: 'Su rica historia como primera capital de Japón, templos antiguos como el Todai-ji con su gran Buda, el parque de Nara con ciervos libres, y sus sitios de Patrimonio de la Humanidad.',
            ImagenSec: 'url("../ImagenesDestinos/Japon/Nara Daibustu.jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/Menya Samurai Nara.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/nara hotel.jpg")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/Yakushiji Nara.jpg")',
            RestaurantesInfo: 'Maguro Koya, Kameya, Edogawa Naramachi, Kasuga Ninai Jyaya, Nino',
            HotelesInfo: 'Nara Hotel, Hotel Nikko Nara, Super Hotel Lohas JR Nara Station, Asukasou, Onyado Nono Nara Natural Hot Spring',
            AtraccionesInfo: 'Templo Todai-ji y el Gran Buda (Daibutsu), Parque de Nara (con sus ciervos), Santuario Kasuga Taisha, Templo Kofuku-ji, Jardín Isuien',
        },

        Hiroshima:{
            Nombre: 'Hiroshima',
            Imagen: 'url("../ImagenesDestinos/Japon/Mikayima Hiroshima.jpg")',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/6Lq5Gc7RAn"></iframe>',
            NombrePanoramica: 'Mikayima',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/Japon/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Japon/")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/")',
            ImagenAtraccion:'url("../ImagenesDestinos/Japon/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        }
    },
    EmiratosArabes: {
        Nombre: 'Emiratos Arabes',
        ImagenPais: 'url("../ImagenesDestinos/Emiratos Arabes/Imagen 1.jpg")',
        DescripcionPais: 'Un país de contrastes deslumbrantes, donde la tradición se encuentra con la modernidad en un entorno de lujo y hospitalidad.',
        ImagenPais2: '<img src="../ImagenesDestinos/Emiratos Arabes/Imagen pais 2.jpg" alt="">',
        Bandera: '../ImagenesDestinos/Emiratos Arabes/Logo.jpg',
        Dubai: {
            Nombre: 'Dubai',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/Imagen 1 Dubai.jpg")',
            Descripcion: 'Dubai, la joya del desierto, es famosa por sus rascacielos impresionantes, centros comerciales de lujo y una vibrante vida nocturna.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/DPjTIJOJRl"></iframe>',
            NombrePanoramica: 'Burj Khalifa',
            DescripcionPanoramica: 'El edificio más alto del mundo, símbolo de la modernidad de Dubai.',
            HistoriaDelDestino: 'Dubai ha pasado de ser un pequeño pueblo de pescadores a una metrópoli global en pocas décadas.',
            MasInfo: 'Conocida por sus lujosos hoteles y atracciones únicas como el Dubai Mall.',
            ImagenSec: '',
            ImagenRestaurante: '',
            ImagenHotel: '',
            ImagenAtraccion: '',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },
        AbuDhabi: {
            Nombre: 'Abu Dhabi',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/AbuDhabi imagen 1.jpg")',
            Descripcion: 'Abu Dhabi, la capital cultural de los Emiratos, ofrece una mezcla de modernidad y tradición, con hermosos palacios y museos de renombre.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/C8ULdPSz4E"></iframe>',
            NombrePanoramica: 'Sheikh Zayed Grand Mosque',
            DescripcionPanoramica: 'Una de las mezquitas más grandes y hermosas del mundo.',
            HistoriaDelDestino: 'Abu Dhabi se ha desarrollado rápidamente gracias a sus recursos petroleros desde los años 70.',
            MasInfo: 'Famosa por su rica cultura y eventos internacionales como el Gran Premio de Fórmula 1.',
            ImagenSec: '',
            ImagenRestaurante: '',
            ImagenHotel: '',
            ImagenAtraccion: '',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },
        Sharjah: {
            Nombre: 'Sharjah',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/Sharjah imagen 1.jpg")',
            Descripcion: 'Sharjah, reconocida por su rica herencia cultural, es un destino ideal para explorar museos, mercados tradicionales y arte islámico.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/Nv1HIeesmG"></iframe>',
            NombrePanoramica: 'Sharjah Arts Museum',
            DescripcionPanoramica: 'Un centro cultural que alberga obras de arte contemporáneo e islámico.',
            HistoriaDelDestino: 'Sharjah ha sido un importante centro cultural en la región desde su fundación.',
            MasInfo: 'Conocida como la "Capital Cultural del Mundo Árabe" por la UNESCO.',
            ImagenSec: '',
            ImagenRestaurante: '',
            ImagenHotel: '',
            ImagenAtraccion: '',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },
        Ajman: {
            Nombre: 'Ajman',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/Ajman imagen 1.jpg")',
            Descripcion: 'Ajman, el emirato más pequeño, es conocido por sus hermosas playas y su ambiente relajado, perfecto para unas vacaciones tranquilas.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/Djb5XIvlMR"></iframe>',
            NombrePanoramica: 'Ajman Beach',
            DescripcionPanoramica: 'Playa de arena blanca ideal para disfrutar del sol y el mar.',
            HistoriaDelDestino: 'Ajman ha sido un punto de encuentro comercial desde tiempos antiguos.',
            MasInfo: 'Ofrece una experiencia más tranquila en comparación con otros emiratos.',
            ImagenSec: '',
            ImagenRestaurante: '',
            ImagenHotel: '',
            ImagenAtraccion: '',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },
        RasAIKhaimah: {
            Nombre: 'Ras Al Khaimah',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/RasAIKhaimah imagen .jpg")',
            Descripcion: 'Ras Al Khaimah, un emirato lleno de historia, ofrece impresionantes paisajes montañosos y actividades al aire libre para los aventureros.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/siYdXLX3Gb"></iframe>',
            NombrePanoramica: 'Hilton Ras AI Khaimah',
            DescripcionPanoramica: 'La montaña más alta de los Emiratos, famosa por su tirolina.',
            HistoriaDelDestino: 'Ras Al Khaimah tiene una rica historia que se remonta a miles de años, siendo un importante centro comercial en la región.',
            MasInfo: 'Conocido por sus actividades al aire libre y su patrimonio cultural.',
            ImagenSec: 'url("../ImagenesDestinos/Emiratos Arabes/RasAIKhaimah imagen 2.jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Emiratos Arabes/Restaurante RasAIKhaimah.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Emiratos Arabes/Hotel de Ras AI Khaimah.jpg")',
            ImagenAtraccion: 'url("../ImagenesDestinos/Emiratos Arabes/Atraccion Ras AI Jaima.jpg")',
            RestaurantesInfo: 'The Lighthouse, Spice Route, Al Nafoorah, Trader Vics, The Grill House.',
            HotelesInfo: 'Waldorf Astoria Ras Al Khaimah, Rixos Bab Al Bahr, Hilton Ras Al Khaimah Beach Resort, DoubleTree by Hilton Resort & Spa Marjan Island, Banyan Tree Ras Al Khaimah Beach.',
            AtraccionesInfo: 'Jebel Jais, Ras Al Khaimah National Museum, Al Hamra Mall, Dhayah Fort, Iceland Water Park.',
        },
        Fujairah: {
            Nombre: 'Fujairah',
            Imagen: 'url("../ImagenesDestinos/Emiratos Arabes/Fujairah Imagen 1.jpg")',
            Descripcion: 'Fujairah, el único emirato en la costa este, es famoso por sus impresionantes montañas, playas y sitios históricos que reflejan su rica cultura.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/l62bimXWEm"></iframe>',
            NombrePanoramica: 'Wadi Tatoonie Fujairah',
            DescripcionPanoramica: 'Una fortaleza histórica que data del siglo XVI, símbolo de la herencia de Fujairah.',
            HistoriaDelDestino: 'Fujairah ha sido un importante centro comercial y cultural a lo largo de la historia.',
            MasInfo: 'Ofrece una mezcla de historia, cultura y naturaleza en un solo lugar.',
            ImagenSec: 'url("../ImagenesDestinos/Emiratos Arabes/Fujairah imagen 2.jpg")',
            ImagenRestaurante: 'url("../ImagenesDestinos/Emiratos Arabes/Restaurante de Fujairah.jpg")',
            ImagenHotel: 'url("../ImagenesDestinos/Emiratos Arabes/Hotel de InterContinental Fujairah.jpg")',
            ImagenAtraccion: 'url("../ImagenesDestinos/Emiratos Arabes/Atraccion de Fujairah.jpg")',
            RestaurantesInfo: 'Al Meshwar, The Market Kitchen, Saffron, Al Portico, Waves Beach Restaurant.  ',
            HotelesInfo: 'InterContinental Fujairah Resort, Le Meridien Al Aqah Beach Resort, Fujairah Rotana Resort & Spa, Novotel Fujairah, Concorde Fujairah Hotel.',
            AtraccionesInfo: 'Fujairah Fort, Al-Bidyah Mosque, Snoopy Island, Fujairah Museum, Ain Al Madhab Gardens.  ',
        }
    },

    Noruega: {
        ImagenPais: 'url("../ImagenesDestinos/")',
        ImagenPais2: ' <img src="../ImagenesDestinos/" alt="">',
        DescripcionPais: '',
        Bandera: '../ImagenesDestinos/',
        Tromso: {
            Nombre: '',
            Imagen: 'url("../ImagenesDestinos/")',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/EyZ6p7uKry"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/Japon/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },

        Lofoten: {
            Nombre: '',
            Imagen: 'url("../ImagenesDestinos/")',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/rjyep4LtYS"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },
         
        Bergen: {
            Nombre: '',
            Imagen: 'url("../ImagenesDestinos/")',
            Descripcion: '.',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/N5G1JKhumG"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',

        },
        
        Geiranger:{
            Nombre: '',
            Imagen: 'url("../ImagenesDestinos/")',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/YQ9EByGAWS"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',

        },

        Oslo: {
            Nombre: '',
            Imagen: 'url("../ImagenesDestinos/")',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/cuPTPU0pcC"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        },

        Norland:{
            Nombre: '',
            Imagen: '',
            Descripcion: '',
            Panoramica: '<iframe allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px;" src="https://panoraven.com/es/embed/xd7d5o8XXj"></iframe>',
            NombrePanoramica: '',
            DescripcionPanoramica: '',
            HistoriaDelDestino: '',
            MasInfo: '',
            ImagenSec: 'url("../ImagenesDestinos/")',
            ImagenRestaurante: 'url("../ImagenesDestinos/")',
            ImagenHotel: 'url("../ImagenesDestinos/")',
            ImagenAtraccion:'url("../ImagenesDestinos/")',
            RestaurantesInfo: '',
            HotelesInfo: '',
            AtraccionesInfo: '',
        }
    },
}