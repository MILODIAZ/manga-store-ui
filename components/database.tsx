

const database = [
  {
    "image": 'https://images.cdn2.buscalibre.com/fit-in/360x360/49/bb/49bbd5156c3b634e5a118938c974440b.jpg',
    "name": 'Naruto #1',
    "price": `$ ${5.50} USD`,
    "id": 1,
    "description": 'Naruto, Vol. 1: Uzumaki Naruto',
    "description_large": `Naruto es un joven shinobi con una habilidad incorregible para las travesuras. Tiene un gran sentido del humor, ¡pero Naruto se toma completamente en serio su misión de ser el mejor ninja del mundo!

    Hace doce años, la Aldea Oculta entre las Hojas fue atacada por una temible amenaza. 
    Un espíritu zorro de nueve colas se cobró la vida del líder de la aldea, el Hokage y muchos otros. Hoy, 
    el pueblo está en paz y un niño problemático llamado Naruto está luchando por graduarse de la Academia Ninja.
    Puede que su objetivo sea convertirse en el próximo Hokage, 
    pero su verdadero destino será mucho más complicado. ¡La aventura comienza ahora!`,
    "author": `Masashi Kishimoto`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://cdnx.jumpseller.com/shazam-online/image/17332513/1.jpg?1625328829',
    "name": 'Attack on Titan #1',
    "price": `$ ${6.50} USD`,
    "id": 2,
    "description": 'Attack on Titan Season 1 Part 1 ',
    "description_large": `La humanidad ha sido devastada por los extraños y gigantes humanoides conocidos como los Titanes. 
    Poco se sabe sobre de dónde vinieron o por qué están empeñados en consumir a la humanidad. Aparentemente poco inteligentes, 
    han vagado por el mundo matando a la humanidad durante años. Durante el siglo pasado, lo que queda de la humanidad se ha escondido en una ciudad gigante de tres murallas. 
    La gente cree que sus muros de 100 metros de altura los protegerán de los titanes, que miden entre 10 y 20 metros de altura. Pero la repentina aparición de un inmenso Titán está a punto de cambiarlo todo.`,
    "author": `Hajime Isayama`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://images.cdn3.buscalibre.com/fit-in/360x360/5c/55/5c558c0472e5b78726e7c703aa5a55e8.jpg',
    "name": 'Hunter X Hunter #1',
    "price": `$ ${8.50} USD`,
    "id": 3,
    "description": 'Hunter x Hunter, Vol. 1',
    "description_large": `Los cazadores son una raza especial, dedicada a rastrear tesoros, bestias mágicas e incluso otras personas. Pero tales actividades requieren una licencia, y menos de uno entre cien mil puede aprobar el agotador examen de calificación. 
    Aquellos que pasan obtienen acceso a áreas restringidas, increíbles reservas de información y el derecho a llamarse a sí mismos Cazadores.

    Puede que Gon sea un chico de campo, pero tiene grandes aspiraciones. 
    A pesar de las protestas de su tía Mito, Gon decide seguir los pasos de su padre y convertirse en un cazador legendario. Los aspirantes a Cazador comienzan su viaje en un barco sacudido por una tormenta, donde Gon conoce a Leorio y Kurapika, los únicos otros solicitantes que no están devastados por ataques de mareo.
    
    Después de haber sobrevivido a los terrores de alta mar, Gon y sus compañeros ahora tienen que demostrar su valía en una variedad de pruebas para encontrar la elusiva sala de exámenes. Y una vez que lleguen allí, ¿alguna vez saldrán con vida...?`,
    "author": `Yoshihiro Togashi`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://cdnx.jumpseller.com/shazam-online/image/16713613/187399676_10159106106169246_2618465024110458039_n__2_.jpg?1644614770',
    "name": 'Slam Dunk #1',
    "price": `$ ${4.50} USD`,
    "id": 4,
    "description": 'Slam Dunk, Vol. 1',
    "description_large": `Ganar no lo es todo en el baloncesto, pero ¿quién quiere quedar segundo? Se necesita dedicación y disciplina para ser el mejor, y el equipo de baloncesto de Shohoku High quiere ser precisamente eso. Tienen un último año para hacer realidad el sueño de su capitán de llegar a la final. ¿Lo lograrán?

    El legendario y querido manga de baloncesto de Takehiko Inoue finalmente está aquí y la historia de su vida está en tus manos.
    
    Hanamichi Sakuragi no tiene ningún juego con las chicas, ¡ninguno en absoluto! No ayuda que sea conocido por derribar en cualquier momento y siempre salir victorioso. ¡Un matón sin remedio, ha sido rechazado por 50 chicas seguidas! Todo eso cambia cuando conoce a la chica de sus sueños, Haruko, ¡y ella en realidad no le tiene miedo! Cuando ella le introduce en el juego de baloncesto, su vida cambia para siempre...`,
    "author": `Takehiko Inoue`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://images.cdn2.buscalibre.com/fit-in/360x360/35/ad/35adda162d2241148a057fae26520792.jpg',
    "name": 'Full Metal Alchemist #1',
    "price": `$ ${9.75} USD`,
    "id": 5,
    "description": 'Fullmetal Alchemist, Vol. 1',
    "description_large": ` En un ritual alquímico que salió mal, Edward Elric perdió su brazo y su pierna, y su hermano Alphonse se convirtió en nada más que un alma con una armadura. Equipado con miembros mecánicos de "autocorreo", Edward se convierte en un alquimista estatal y busca lo único que puede restaurar sus cuerpos y los de su hermano... la legendaria Piedra Filosofal.

    Alquimia: el poder místico de alterar el mundo natural; algo entre magia, arte y ciencia. Cuando dos hermanos, Edward y Alphonse Elric, incursionaron en este poder para cumplir su más preciado deseo, uno de ellos perdió un brazo y una pierna... y el otro se convirtió en nada más que un alma encerrada en un cuerpo de acero vivo. Ahora Edward es un agente del gobierno, un esclavo del complejo militar-alquímico, que usa sus poderes únicos para obedecer órdenes... incluso para matar. Excepto que sus poderes no son únicos. El mundo ha sido devastado por el abuso de la alquimia. Y en la búsqueda del tesoro alquímico supremo, la Piedra Filosofal, sus enemigos son aún más despiadados que ellos...`,
    "author": `Hiromu Arakawa`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://cdnx.jumpseller.com/kioscosch/image/17176007/Dr._Stone_1.jpg?1623959648',
    "name": 'Dr. Stone #1',
    "price": `$ ${8.25} USD`,
    "id": 6,
    "description": 'Dr. STONE, Vol. 1',
    "description_large": `Un fatídico día, toda la humanidad se convirtió en piedra. Muchos milenios después, 
    Taiju se libera de la petrificación y se encuentra rodeado de estatuas. La situación parece sombría, ¡hasta que se encuentra con su amigo Senku, amante de la ciencia! ¡Juntos planean reiniciar la civilización con el poder de la ciencia!`,
    "author": `Riichiro Inagaki e Boichi`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://www.worldsendcomics.com//images/content/products/2018-10/78200903353000311.jpg',
    "name": 'Dragon Ball Z #3',
    "price": `$ ${11.50} USD`,
    "id": 7,
    "description": 'Dragon Ball Z, Vol. 3',
    "description_large": ` Después de años de entrenamiento y aventuras, Goku se ha convertido en el guerrero definitivo de la Tierra. Y su hijo, Gohan, es aún más prometedor. Pero lo que está en juego aumenta a medida que enemigos aún más letales amenazan al planeta. DRAGON BALL Z es el manga definitivo de ciencia ficción y artes marciales.

    Mientras Goku corre hacia la Tierra a lo largo del Camino de la Serpiente de un millón de kilómetros, los artistas marciales más poderosos del mundo hacen su última resistencia contra los invasores alienígenas decididos a acabar con la raza humana. 
    Piccolo. Gohan, Krilin, Tenshinhan y Chaozu luchan cinco a uno contra Nappa, sólo para descubrir que el poder de sus oponentes es mayor de lo que jamás soñaron. Su última oportunidad es Goku... 
    pero ¿podrá llegar a tiempo? ¿E incluso él y el milagroso Kaiô-ken son rivales para el comandante de Nappa, Vegeta?`,
    "author": `Akira Toriyama`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
  {
    "image": 'https://www.crazyallcomics.cl/media/catalog/product/cache/23/image/500x400/17f82f742ffe127f42dca9de82fb58b1/a/k/akira_esp_01.jpg',
    "name": 'Akira #1',
    "price": `$ ${5.50} USD`,
    "id": 8,
    "description": 'Akira, Vol. 1',
    "description_large": ` Bienvenido a Neo-Tokio, construido sobre las cenizas de un Tokio aniquilado por una explosión de origen desconocido que desencadenó la Tercera Guerra Mundial. Las vidas de dos astutos amigos adolescentes, Tetsuo y Kaneda, cambian para siempre cuando habilidades paranormales comienzan a despertar en Tetsuo, convirtiéndolo en el objetivo de una oscura agencia que no se detendrá ante nada para evitar otra catástrofe como la que arrasó Tokio. En el centro de la motivación de la agencia se encuentra un miedo crudo y devorador a un poder monstruoso e impensable conocido sólo como Akira.

    La impresionante obra maestra de ciencia ficción de Katsuhiro Otomo es considerada por muchos como la mejor obra de ficción gráfica jamás producida, y la brillante versión cinematográfica animada de Otomo es considerada en todo el mundo como un clásico.
    
    ¡Esta edición incluye un nuevo prólogo del autor y una posdata del editor de Dark Horse, Mike Richardson!`,
    "author": `Katsuhiro Ôtomo`,
    "stock": 10,
    "Category": ['Acción', 'artes marciales', 'aventura', 'comedia', 'fantasía'],
    "shipping": 'Este es el area de envios',
  },
]

export { database };