import { Injectable } from "@angular/core";
import { Heroe } from "../Interface/heroe";
@Injectable({
  providedIn: "root"
})
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: "Super-Man",
      bio:
        "Nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. El joven Kent comenzó a mostrar habilidades superhumanas, las mismas que al llegar a su madurez decidiría usar para el beneficio de la humanidad.",
      img: "assets/img/superman.png",
      aparicion: "1938-06",
      casa: "DC"
    },
    {
      nombre: "Flash",
      bio:
        "Jay Garrick es un estudiante universitario que, durante un descanso para fumar, accidentalmente derrama su experimento científico de gases de agua pesada. Inhala la sustancia, se desmaya y ronda la muerte durante semanas… pero, finalmente, Garrick se recupera y nace Flash. Bendecido con velocidad sobrehumana y reflejos, en su primera aventura Garrick se las apaña para matar a cuatro enemigos.",
      img: "assets/img/flash.jpg",
      aparicion: "1940-01",
      casa: "DC"
    },
    {
      nombre: "Wonder Woman",
      bio:
        "Nacida en una isla secreta. Educada como una princesa. ¡Diana abandonó su hogar para defender la paz mundial convertida en Wonder Woman! Wonder Woman era una joven princesa que vivía en una isla secreta, pero dejó atrás su tierra natal para convertirse en la protectora de todo el planeta.",
      img: "assets/img/Wonder_Woman.png",
      aparicion: "1941-12",
      casa: "DC"
    },
    {
      nombre: "Firestorn",
      bio:
        "El joven estudiante Ronnie Raymond y el ganador del Premio Nobel en física, Martin Stein, fueron capturados en un accidente nuclear que les permitió a fundirse en el ( hombre nuclear ), Firestorm. Debido a que Stein estaba inconsciente durante el accidente, Raymond tomo el mando cuando ambos se encontraban en su identidad dual de Firestorm. La presencia de Stein era una voz de la razón dentro de la mente del joven. Bromas entre los dos era el sello distintivo de sus aventuras. Después del accidente que lo creó, Firestorm tomó a la defensa de Nueva York frente a amenazas como Multiplex y Killer Frost",
      img: "assets/img/firestorn.png",
      aparicion: "1978-03",
      casa: "DC"
    },
    {
      nombre: "Doctor Fate",
      bio:
        "Los poderes mágicos del Doctor Destino son extensos y provienen de su posesión por Destino, un miembro de la Orden de Nabu. Destino reside en el casco de Nabu, y cuando Kent se lo pone consigue recordar vagamente las experiencias de Destino. De esta forma se convierte en un hechicero de enorme poder capaz de rivalizar con cualquier otro mago. Hace uso de objetos de poder y hechizos derivados del equilibrio y enfoque interno. Sus poderes le permiten hacer uso de la telequinesis, levitar, aumentar su fuerza, y volverse resistente al daño exterior.",
      img: "assets/img/doctorfate.png",
      aparicion: "1940-05",
      casa: "DC"
    },
    {
      nombre: "Aquaman",
      bio:
        "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11",
      casa: "DC"
    },
    {
      nombre: "Batman",
      bio:
        "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05",
      casa: "DC"
    },
    {
      nombre: "Linterna Verde",
      bio:
        "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06",
      casa: "DC"
    },
    {
      nombre: "Daredevil",
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: "assets/img/daredevil.png",
      aparicion: "1964-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio:
        "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05",
      casa: "Marvel"
    },
    {
      nombre: "Spider-Man",
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: "assets/img/spiderman.png",
      aparicion: "1962-08",
      casa: "Marvel"
    },
    {
      nombre: "Iron Man",
      bio:
        'La vida de Tony es una vida llena de excesos y lujos, hasta que cierto día es secuestrado, dicho incidente hará que su vida corra peligro, pues un fragmento de metralla se clava cerca de su corazón.Los secuestradores pretenden obligarle a crear armas de destrucción masiva, en su lugar Tony se las ingeniara para crear una placa pectoral magnética que sea capaz de mantener a ralla la metralla que hay cerca de su corazón, y una armadura de metal llena de armas que le permita escapar de los terroristas.',
      img: "assets/img/ironman.jpg",
      aparicion: "1963-03",
      casa: "Marvel"
    },
    {
      nombre: "Capitan America",
      bio:
        'Steve Rogers nació durante la Depresión y creció, convirtiéndose en un joven débil en una familia pobre. Su padre murió cuando él era un niño; su madre, durante la adolescencia de Steve. Horrorizado ante un noticiario que mostraba a los nazis en Europa, Rogers intentó alistarse en el ejército. En cambio, debido a su fragilidad y su malestar, fue rechazado. Oyendo la súplica fervorosa del chico para que lo aceptaran, el General Chester Phillips del Ejército de USA ofreció a Rogers la oportunidad de formar parte de un experimento especial llamado Operación Renacimiento. Rogers aceptó y fue llevado a un laboratorio secreto en Washington D.C., donde fue presentado al Dr. Abraham Erskine, el creador de la fórmula del Supersoldado.',
      img: "assets/img/capiAmerica.png",
      aparicion: "1941-03",
      casa: "Marvel"
    },
    {
      nombre: "Thor",
      bio:
        'Thor Odinson, hijo de Odín y Frigga, reyes de Asgard, uno de los reinos más poderosos que conforman los nueve reinos; Midgard, el mundo de los humanos, es uno de ellos.Thor, tuvo una infancia feliz junto con su hermano adoptivo y mejor amigo Loki, con quien siempre competía para demostrar cual de los dos era el mejor. El origen de su rivalidad esta en la cuestión sucesoria, ambos tienen derecho al trono de Asgard como hijos de Odín pero su padre nunca se decanto por ninguno.Con el paso de los años, Thor se convierte en un joven, fuerte y digno, capaz de levantar a Mjölnir, el famoso martillo del Dios del trueno, y se convierte en el general del ejercito asgardiano. Loki, por su parte, siente celos de Thor y busca la manera de demostrar su valía constantemente. Con el tiempo se descubre que Loki es en realidad hijo de los gigantes del hielo, cosa que lo trastocará por completo y hará que abandone Asgard. A partir de ese momento Loki se convierte en uno de los mayores enemigos de Thor, pues conspirará constantemente para usurparle su derecho al trono y derrocar a Odín.',
      img: "assets/img/thor.png",
      aparicion: "1962-08",
      casa: "Marvel"
    },
    {
      nombre: "Ant-Man",
      bio:
        'Hank Pym, es un científico brillante que inventa una sustancia capaz de hacer que los humanos puedan cambiar el tamaño de su cuerpo a voluntad.Experto en biofísica, se casó una política disidente húngara, María Trovaya, a la que la policía secreta de su país asesina, dejando un Hank totalmente desolado e ido, que jura que en el futuro hará todo lo posible por luchar contra las injusticias.Tras estos acontecimientos el doctor Pym descubre lo que el llama “partículas Pym”, que es lo que permite a Ant-man cambiar el tamaño de su cuerpo. Con su nuevo descubrimiento bajo el brazo, Hank, se hará con un casco capaz de controlar a las hormigas y así es como nace Ant-man, quien a partir de ese momento se dedicaría a luchar contra el crimen.',
      img: "assets/img/antman.png",
      aparicion: "1962-01",
      casa: "Marvel"
    },
    {
      nombre: "Black Widow",
      bio:
        'Era el año de 1928 en Stalingrado (Volvograd) había sufrido un ataque nazi. Allí donde no parecía que había vida, se encontraba un soldado soviético de nombre Iván petróvich buscando a su hermana. En medio de la búsqueda, se adentra en el asedio de la ciudad, allí donde veo una construcción muy débil, encuentra a una señora en unos escombros. Al conversar con ella esta le menciona que cuida a su niña, que la cuide a pesar de ser una Romanoff y la arroja a los brazos de Iván.Acto seguido, el edificio colapsa acabando con la señora y dejando a la niña viva.Años después, Iván Petrovich recurre a su amigo Taras Romanov. Si bien tienen el mismo apellido (o parecido) no existe ningún vínculo familiar entre Natasha y Taras. Pues bien, Iván le encomienda a Taras el cuidado de Natasha, pues considera que este siendo un alto mando militar le puede dar mejor calidad de vida que simplemente enviarla a un orfanato.De esta forma Natasha entró a una etapa de entrenamiento. Así conocería a Logan, quien se encargaría de entrenarla.',
      img: "assets/img/blackWidow.png",
      aparicion: "1964-04",
      casa: "Marvel"
    },
    {
      nombre: "Ojo de Halcón",
      bio:
        'Clint Barton nació en Waverly, Iowa. A temprana edad perdió a sus padres en un accidente automovilístico. Huérfano pasó seis años en un orfanato al lado de su hermano mayor Barney, ambos se escaparon del orfanato para unirse al Carson Carnival of Travelling Wonders, en donde el joven Clint pronto llamó la atención del Espadachín, que lo tomó como su asistente. Con la ayuda de Trick Shot, Clint entreno para convertirse en un maestro arquero.Llamado ahora Ojo de Halcón (Hawkeye), también conocido como "el mejor tirador del mundo", las habilidades de tiro con arco de Clint lo convirtieron en la atracción estrella del carnaval.Años después, Clint presenciaría como Iron-Man detenía un vagón descontrolado, salvando la vida de muchas personas  y viendo la admiración que le tenía la gente, Clint se decidiría a ser también un héroe. Clint se fabrico su propio traje y se convirtió en un aventurero enmascarado. En su primera actuación como héroe detuvo a un ladrón de joyas, pero cuando la policía lo vio con el botín lo confundió con el ladrón e intentaron detenerlo, Clint huyó, y acabó combatiendo contra Iron-Man.',
      img: "assets/img/ojo-halcon.png",
      aparicion: "1964-10",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio:
        "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11",
      casa: "Marvel"
    }
  ];

  constructor() {}

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(idx: number) {
    return this.heroes[idx];
  }

  buscarHeroes(termino: string): Heroe[] {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}
