/* ---------- Fondo: hojas de ka'aguy ---------- */
(function(){
  const c=document.getElementById('selva');if(!c)return;const x=c.getContext('2d');
  function draw(){
    const r=c.getBoundingClientRect(),d=window.devicePixelRatio||1;c.width=r.width*d;c.height=r.height*d;x.scale(d,d);
    let s=7;const rnd=()=>{s=(s*9301+49297)%233280;return s/233280};
    const cols=['#2d6b4c','#245a40','#3c7d55','#8fb339'];
    for(let i=0;i<70;i++){
      const px=r.width*(0.35+rnd()*0.7),py=rnd()*r.height,len=30+rnd()*70,a=rnd()*Math.PI*2;
      x.save();x.translate(px,py);x.rotate(a);x.fillStyle=cols[Math.floor(rnd()*cols.length)];x.globalAlpha=.35+rnd()*.5;
      x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(len*.5,-len*.28,len,0);x.quadraticCurveTo(len*.5,len*.28,0,0);x.fill();
      x.strokeStyle='rgba(0,0,0,.18)';x.lineWidth=1;x.beginPath();x.moveTo(0,0);x.lineTo(len,0);x.stroke();x.restore();
    }
  }
  draw();addEventListener('resize',()=>{const t=c.getContext('2d');t.setTransform(1,0,0,1,0,0);draw()});
})();

/* ---------- Unidades ---------- */
const UNIDADES=[
 {id:'u1',nombre:'Unidad 1',titulo:'Introducción a la Antropología Social y Cultural',
  lead:'La antropología estudia al ser humano: cómo vive, cómo se organiza, qué cree y cómo se comunica. Aquí aprendimos las palabras clave para mirar cualquier cultura, empezando por la nuestra.',
  c:[
   ['Antropología','Ciencia social que estudia al ser humano en sociedad y su cultura. Se divide en física (el cuerpo y la evolución) y social o cultural (las formas de vida).','Estudiar por qué en Luque se festeja San Juan con pelota tata.'],
   ['Sociedad','Grupo de personas que conviven, se organizan y se relacionan entre sí.','Tu compañía, tu curso, tu familia.'],
   ['Cultura','Todo lo que un grupo aprende y comparte: idioma, comidas, creencias, costumbres, objetos y valores. Puede ser material (objetos) o inmaterial (ideas, creencias).','El tereré (material) y la costumbre de compartirlo en ronda (inmaterial).'],
   ['Pautas culturales','Formas de actuar que el grupo considera normales y esperadas.','Saludar con "la bendición" a los abuelos.'],
   ['Endoculturación','Aprender la cultura propia desde que nacemos, en la familia y la comunidad.','Tu abuela te enseña a hacer chipa.'],
   ['Aculturación','Un grupo adopta rasgos de otra cultura con la que está en contacto, a veces perdiendo los suyos.','Pueblos indígenas que dejan su lengua para usar solo el castellano.'],
   ['Transculturación','Intercambio entre culturas del que nace algo nuevo, distinto de las dos originales.','El jopara: guaraní y castellano mezclados en una forma propia.'],
   ['Etnocentrismo','Juzgar a otras culturas desde la propia, creyendo que la nuestra es la mejor o la "normal".','Decir que la comida de otro país es fea porque no es como la nuestra.'],
   ['Relativismo cultural','Comprender cada cultura desde su propio contexto, sin juzgarla con los valores de otra.','Entender por qué un pueblo come lo que come antes de opinar.'],
  ]},
 {id:'u2',nombre:'Unidad 2',titulo:'Identidad Cultural y Realidad Paraguaya',
  lead:'Quiénes somos los paraguayos: el mestizaje, los pueblos originarios que siguen vivos hoy y un país donde conviven dos idiomas oficiales.',
  c:[
   ['Mestizaje','Proceso de mezcla biológica y cultural entre españoles y guaraníes desde el siglo XVI, origen de la mayor parte de la población paraguaya.','Comemos mandi\'o (herencia guaraní) con carne vacuna (herencia española).'],
   ['Pueblos originarios','En Paraguay viven 19 pueblos indígenas agrupados en 5 familias lingüísticas: Guaraní, Lengua Maskoy, Mataco Mataguayo, Zamuco y Guaicurú.','Mbya y Aché (Guaraní), Ayoreo (Zamuco), Nivaclé (Mataco Mataguayo), Qom (Guaicurú).'],
   ['Derechos indígenas','La Constitución de 1992 (artículos 62 al 67) reconoce a los pueblos indígenas como anteriores al Estado y protege su tierra, identidad y cultura.','Derecho a la propiedad comunitaria de la tierra.'],
   ['Cosmovisión','Forma en que un pueblo entiende el mundo, el origen de la vida y su lugar en la naturaleza.','Para los guaraníes, Ñamandú crea el mundo y existe la búsqueda de Yvy Marã\'ỹ, la tierra sin mal.'],
   ['Bilingüismo','Uso de dos lenguas. Desde 1992 el castellano y el guaraní son idiomas oficiales del Paraguay.','Hablar guaraní con la familia y castellano con el médico.'],
   ['Diglosia','Dos lenguas conviven pero con usos y prestigio distintos: una para lo formal, otra para lo familiar.','Guaraní en casa y en el recreo, castellano en el examen.'],
   ['Sincretismo','Mezcla de creencias de culturas distintas que forma una religiosidad nueva.','Los jesuitas usaron el nombre Tupã, dios creador guaraní, para nombrar al Dios cristiano.'],
   ['Identidad nacional','Sentimiento de pertenecer a un pueblo, construido con la historia, la lengua y las costumbres compartidas.','Sentir orgullo cuando alguien habla guaraní en el extranjero.'],
  ]},
 {id:'u3',nombre:'Unidad 3',titulo:'Manifestaciones Culturales de la Sociedad Paraguaya',
  lead:'El saber popular que se transmite de boca en boca: mitos, fiestas, remedios, artesanías, música y comidas. Es el corazón del proyecto Ka\'aguy porã.',
  c:[
   ['Folclore','Saber tradicional del pueblo, transmitido de generación en generación, casi siempre de forma oral.','Los cuentos de miedo que te contaban de chico.'],
   ['Mito','Relato tradicional que explica el origen del mundo, de las cosas o de los seres sobrenaturales.','Los siete hijos de Tau y Kerana: Teju Jagua, Mbói Tu\'i, Moñái, Jasy Jateré, Kurupi, Ao Ao y Luisón.'],
   ['Leyenda','Relato tradicional ligado a un lugar, persona o hecho, que mezcla lo real con lo fantástico.','Historias de aparecidos en un lugar conocido de tu compañía.'],
   ['Religiosidad popular','Forma en que el pueblo vive su fe con ritos propios, más allá de la iglesia oficial.','Fiesta de la Virgen del Rosario en Luque (7 de octubre), promesas, Kurusu Ára el 3 de mayo.'],
   ['Pohã ñana','Medicina natural con plantas, los "remedios yuyos". Saber guaraní que sigue vivo.','Machacar yuyos en el mortero para el tereré.'],
   ['Artesanía','Objetos hechos a mano con técnicas tradicionales.','Ñandutí de Itauguá, ao po\'i de Yataity, cerámica de Areguá y Tobatí.'],
   ['Música','Expresión que identifica al pueblo y cuenta su historia.','La polca paraguaya y la guarania, creada por José Asunción Flores.'],
   ['Gastronomía como patrimonio','Las comidas típicas guardan historia, técnicas y modos de compartir.','Sopa paraguaya, chipa, mbeju, vori vori.'],
  ]},
 {id:'u4',nombre:'Unidad 4',titulo:'Problemática Social y Globalización',
  lead:'Se trabaja en noviembre y aparece en el panel de cambio cultural de cada puesto: cómo cambian nuestras costumbres con la desigualdad, la migración y las redes.',
  c:[
   ['Estratificación social','División de la sociedad en capas o grupos con distinto acceso a recursos, educación y oportunidades.','Familias con y sin acceso a salud privada.'],
   ['Desigualdad y exclusión','Diferencias injustas que dejan a algunas personas fuera de derechos básicos.','Niños que trabajan en la calle en lugar de ir a la escuela.'],
   ['Migración interna','Traslado de personas dentro del país, sobre todo del campo a la ciudad.','Una familia del interior que se muda a Luque por trabajo.'],
   ['Migración externa','Personas que se van a vivir a otro país.','Paraguayos que trabajan en Buenos Aires o en España.'],
   ['Globalización','Conexión mundial que hace circular rápido productos, información y costumbres.','Un baile de TikTok que se hace igual en Luque y en Corea.'],
   ['Identidad juvenil','Cómo los jóvenes se reconocen y se expresan; hoy se forma mucho en redes sociales.','Mezclar guaraní con palabras en inglés en los memes.'],
  ]},
];
const uTabs=document.getElementById('uTabs'),uPanel=document.getElementById('uPanel');
function showU(i){
  [...uTabs.children].forEach((b,j)=>b.setAttribute('aria-selected',j===i));
  const u=UNIDADES[i];
  uPanel.innerHTML=`<div class="unidad" role="tabpanel"><div style="display:grid;gap:8px"><span class="eyebrow">${u.nombre}</span><h3 style="font-size:26px">${u.titulo}</h3><p class="lead">${u.lead}</p></div>
  <dl class="conceptos">${u.c.map(c=>`<div class="concepto"><dt>${c[0]}</dt><dd>${c[1]}</dd><dd class="ej">Ejemplo: ${c[2]}</dd></div>`).join('')}</dl>
  ${u.id==='u4'?'<p class="nota">Esta unidad se desarrolla en noviembre. Ya puedes leerla para preparar el panel de cambio cultural de tu puesto.</p>':''}</div>`;
}
UNIDADES.forEach((u,i)=>{const b=document.createElement('button');b.className='tab';b.type='button';b.setAttribute('role','tab');b.textContent=u.nombre;b.onclick=()=>showU(i);uTabs.appendChild(b)});
showU(0);

/* ---------- Banco de preguntas N2–N5 ---------- */
const PREG=[
 // U1
 ['u1',2,'Explica con tus palabras qué estudia la antropología social.','Estudia al ser humano que vive en sociedad: su cultura, cómo se organiza, qué cree, cómo se comunica y cómo cambia con el tiempo.'],
 ['u1',2,'¿Qué diferencia hay entre sociedad y cultura?','La sociedad es el grupo de personas que conviven. La cultura es el modo de vida que ese grupo aprende y comparte: idioma, comidas, creencias, costumbres.'],
 ['u1',3,'Da un ejemplo de endoculturación que viviste en tu familia.','Algo que aprendiste desde chico sin ir a la escuela: preparar tereré, hablar guaraní, pedir "la bendición", rezar en una novena, festejar San Juan.'],
 ['u1',3,'En la Noche de San Juan, señala un elemento de la cultura material y uno de la cultura inmaterial.','Material: la pelota tata, el kambuchi jejoka, el pastel mandi\'o. Inmaterial: las creencias y adivinanzas sobre el futuro, las reglas de los juegos, el sentido de compartir en comunidad.'],
 ['u1',4,'Compara etnocentrismo y relativismo cultural usando una situación del colegio.','Etnocentrismo: burlarse de un compañero por su forma de hablar o comer. Relativismo: preguntarle por qué lo hace así y entender que en su familia eso es lo normal. Uno juzga desde afuera, el otro comprende desde adentro.'],
 ['u1',4,'¿Por qué el jopara puede verse como transculturación y no como "hablar mal"?','Porque nace del contacto entre guaraní y castellano y forma una manera nueva de hablar, propia del Paraguay, con reglas que la gente entiende. No es un error, es el resultado de un intercambio cultural.'],
 ['u1',5,'¿Estás de acuerdo con la frase "nuestra cultura es mejor que las demás"? Justifica.','Una buena respuesta reconoce el valor de lo propio, pero explica con el relativismo cultural que cada cultura responde a su historia y ambiente, y que no hay una escala para decir cuál es "mejor".'],
 ['u1',5,'¿Para qué le sirve la antropología a tu comunidad? Da un argumento concreto.','Ejemplos: ayuda a registrar saberes que se están perdiendo (remedios, relatos), a entender conflictos entre grupos o a valorar la cultura local frente a lo que llega de afuera.'],
 // U2
 ['u2',2,'Explica qué fue el mestizaje en el origen de la población paraguaya.','Fue la mezcla biológica y cultural entre españoles y guaraníes desde la llegada de los conquistadores. De allí vienen nuestro idioma, nuestra comida y muchas costumbres.'],
 ['u2',2,'¿Qué es la diglosia? Explícala con un ejemplo.','Dos lenguas conviven pero se usan en espacios distintos y con distinto prestigio. Ejemplo: el guaraní en casa y entre amigos, el castellano en la escuela y en las oficinas.'],
 ['u2',3,'Nombra al menos dos familias lingüísticas indígenas del Paraguay y un pueblo de cada una.','Guaraní (Mbya, Aché, Paĩ Tavyterã, Avá Guaraní), Lengua Maskoy (Enxet, Sanapaná, Angaité), Mataco Mataguayo (Nivaclé, Maká, Manjui), Zamuco (Ayoreo, Yshir), Guaicurú (Qom).'],
 ['u2',3,'Observa un día en tu casa: ¿en qué situaciones se usa guaraní y en cuáles castellano?','Anota situaciones reales: chistes, retos, la ronda de tereré, la televisión, las tareas, el celular. Luego fíjate si hay un patrón: ¿qué idioma aparece en lo familiar y cuál en lo formal?'],
 ['u2',4,'¿Por qué en muchas instituciones se usa más el castellano aunque gran parte de la gente hable guaraní?','Causas: historia colonial en la que el castellano era la lengua del poder, una escuela que por años enseñó solo en castellano y el prestigio social de esa lengua. Eso es diglosia.'],
 ['u2',4,'¿Por qué el caso de Tupã es un ejemplo claro de sincretismo?','Tupã era el dios supremo y creador para los guaraníes. Los jesuitas tomaron ese nombre para hablar del Dios cristiano. Así una palabra guaraní quedó unida a una creencia española y formó algo nuevo.'],
 ['u2',5,'"Los pueblos indígenas deberían dejar sus costumbres y adaptarse a la vida moderna." ¿Qué opinas?','Una respuesta fuerte usa los derechos de la Constitución de 1992 (arts. 62 al 67), el relativismo cultural y el valor de la diversidad. Puede reconocer que las culturas cambian, pero por decisión propia y no por obligación.'],
 ['u2',5,'¿El guaraní es parte de tu identidad? Defiende tu postura con ejemplos.','No hay una única respuesta correcta. Se valora que des ejemplos reales (con quién lo hablas, qué sientes al escucharlo) y que uses conceptos como identidad, bilingüismo o diglosia.'],
 // U3
 ['u3',2,'¿Qué diferencia hay entre un mito y una leyenda?','El mito explica orígenes y seres sobrenaturales, como los hijos de Tau y Kerana. La leyenda se liga a un lugar, persona o hecho y mezcla lo real con lo fantástico.'],
 ['u3',2,'¿Qué es la religiosidad popular? Da un ejemplo de Luque.','Es la forma en que el pueblo vive su fe con ritos propios. Ejemplo: la fiesta de la Virgen del Rosario el 7 de octubre, las promesas, las procesiones, el Kurusu Ára.'],
 ['u3',3,'Clasifica: ñandutí, guarania, chipa y pohã ñana. ¿Qué manifestación cultural representa cada uno?','Ñandutí: artesanía. Guarania: música. Chipa: gastronomía. Pohã ñana: medicina tradicional.'],
 ['u3',3,'Escribe tres preguntas para entrevistar a un abuelo o abuela sobre remedios yuyos.','Ejemplos: ¿Qué yuyo usa para el dolor de panza y cómo lo prepara? ¿Quién le enseñó? ¿Hoy los jóvenes siguen usando estos remedios? Buenas preguntas son abiertas, no de sí o no.'],
 ['u3',4,'Compara el mito guaraní de la creación con el relato del Génesis: un parecido y una diferencia.','Parecido: un ser supremo crea el mundo (Ñamandú / Dios). Diferencia: por ejemplo, en el relato guaraní la creación surge en medio de la oscuridad primera y se busca una tierra sin mal (Yvy Marã\'ỹ); en el Génesis la creación se ordena en siete días.'],
 ['u3',4,'¿Por qué el ñandutí o el ao po\'i son patrimonio y no solo productos para vender?','Porque guardan técnicas heredadas, historia de comunidades como Itauguá o Yataity y una forma de identidad. Si se pierde quien sabe hacerlos, se pierde un saber, no solo un producto.'],
 ['u3',5,'¿Es igual de confiable un video de TikTok sobre el Pombero que lo que cuenta tu abuela? Justifica como investigador.','Un buen investigador pregunta: ¿quién lo dice?, ¿de dónde lo sabe?, ¿se puede comparar con otras fuentes? El testimonio directo de una persona mayor es una fuente primaria valiosa; un video puede copiar sin verificar.'],
 ['u3',5,'Si tuvieras que elegir una sola manifestación cultural para mostrar quiénes somos los luqueños, ¿cuál elegirías y por qué?','Elige una (por ejemplo, la fiesta del Rosario o la música) y justifícala con al menos dos razones: historia, participación de la comunidad, lo que transmite.'],
 // U4
 ['u4',2,'¿Qué es la estratificación social?','Es la división de la sociedad en grupos con distinto acceso a dinero, educación, salud y oportunidades.'],
 ['u4',2,'Diferencia migración interna y externa con ejemplos paraguayos.','Interna: alguien de un pueblo del interior se muda a Luque o Asunción. Externa: alguien se va a trabajar a Argentina o España.'],
 ['u4',3,'Entrevista a un familiar o vecino que haya migrado: ¿por qué se fue y qué cambió en su vida?','Registra causas (trabajo, estudio, familia) y consecuencias (lo que extraña, lo que aprendió, qué costumbres mantiene o cambió).'],
 ['u4',3,'Identifica una costumbre nueva que llegó a tu vida por las redes sociales.','Puede ser una forma de hablar, un baile, una comida, una moda. Describe de dónde viene y cómo la adaptaron en tu entorno.'],
 ['u4',4,'Elige una costumbre de tu puesto y analiza cómo cambió: antes, ahora y por qué.','Usa la estructura del panel: Antes / Ahora / Causa del cambio / Conclusión. Si puedes, usa un concepto: globalización, aculturación o transculturación.'],
 ['u4',4,'¿Qué relación hay entre pobreza y migración del campo a la ciudad?','La falta de trabajo, tierra o servicios en el campo empuja a las familias a la ciudad, donde muchas veces terminan en barrios con nuevas carencias. Es una causa y también una consecuencia.'],
 ['u4',5,'¿Las redes sociales hacen perder la identidad de los jóvenes paraguayos o la transforman? Argumenta.','Una respuesta fuerte toma postura y da ejemplos de los dos lados: lo que se pierde y lo que se reinventa (memes en guaraní, cuentas que difunden folclore).'],
 ['u4',5,'Propón una acción concreta para valorar la cultura local usando la tecnología.','Ejemplos: un podcast de relatos de abuelos, un mapa digital de yuyos de la compañía, videos cortos sobre juegos tradicionales. Explica a quién llega y qué cambiaría.'],
];
const NLAB={2:'Comprender',3:'Aplicar',4:'Analizar',5:'Evaluar'};
const fU=document.getElementById('fU'),fN=document.getElementById('fN'),qList=document.getElementById('qList'),qCount=document.getElementById('qCount');
let selU='todas',selN='todos';
function mkChips(box,items,get,set){items.forEach(([v,l])=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=l;b.setAttribute('aria-pressed',v===get());b.onclick=()=>{set(v);[...box.querySelectorAll('.chip')].forEach(x=>x.setAttribute('aria-pressed',x===b));renderQ()};box.appendChild(b)})}
mkChips(fU,[['todas','Todas'],['u1','U1'],['u2','U2'],['u3','U3'],['u4','U4']],()=>selU,v=>selU=v);
mkChips(fN,[['todos','Todos'],[2,'N2'],[3,'N3'],[4,'N4'],[5,'N5']],()=>selN,v=>selN=v);
function renderQ(hl){
  const f=PREG.filter(p=>(selU==='todas'||p[0]===selU)&&(selN==='todos'||p[1]===selN));
  qCount.textContent=f.length+(f.length===1?' pregunta':' preguntas');
  qList.innerHTML=f.map((p,i)=>`<article class="q${hl===p?' hl':''}" data-i="${PREG.indexOf(p)}"><div class="q-top"><span class="badge">${p[0].toUpperCase()}</span><span class="badge n n${p[1]}">N${p[1]} · ${NLAB[p[1]]}</span></div><p class="q-text">${p[2]}</p><details><summary>Ver orientación</summary><p>${p[3]}</p></details></article>`).join('');
}
renderQ();
document.getElementById('azar').onclick=()=>{
  const f=PREG.filter(p=>(selU==='todas'||p[0]===selU)&&(selN==='todos'||p[1]===selN));if(!f.length)return;
  const p=f[Math.floor(Math.random()*f.length)];renderQ(p);
  const el=qList.querySelector(`[data-i="${PREG.indexOf(p)}"]`);el&&el.scrollIntoView({behavior:'smooth',block:'center'});
};

/* ---------- La Oca del Ka'aguy ---------- */
const MC=[
 ['La endoculturación es…',['Aprender la cultura propia desde la infancia','Copiar costumbres de otro país','Rechazar la cultura de los abuelos'],0,'Es el aprendizaje de nuestra cultura en la familia y la comunidad.'],
 ['La antropología social estudia…',['Solo los fósiles y huesos antiguos','Al ser humano, su cultura y su forma de vivir en sociedad','Únicamente a los pueblos que ya no existen'],1,'Estudia al ser humano en sociedad, hoy y en el pasado.'],
 ['Creer que tu cultura es superior a las demás se llama…',['Relativismo cultural','Etnocentrismo','Mestizaje'],1,'Etnocentrismo: juzgar a otros desde lo propio.'],
 ['El relativismo cultural propone…',['Comprender cada cultura desde su propio contexto','Elegir la mejor cultura del mundo','Que todas las culturas sean iguales'],0,'Entender antes de juzgar.'],
 ['La población paraguaya se originó principalmente del encuentro…',['Hispano-guaraní','Portugués-africano','Italiano-alemán'],0,'El mestizaje entre españoles y guaraníes.'],
 ['La diglosia ocurre cuando…',['Una persona olvida su idioma','Dos lenguas conviven con usos y prestigio distintos','Se habla un solo idioma en todo el país'],1,'Por ejemplo, guaraní en casa y castellano en lo formal.'],
 ['Según la Constitución de 1992, los idiomas oficiales del Paraguay son…',['Castellano e inglés','Castellano y guaraní','Guaraní y portugués'],1,'El Paraguay es un país bilingüe.'],
 ['¿Cómo se llama la mezcla de guaraní y castellano en el habla diaria?',['Jopara','Ñandutí','Pohã ñana'],0,'Jopara significa "mezcla".'],
 ['El pueblo Ayoreo pertenece a la familia lingüística…',['Guaicurú','Zamuco','Guaraní'],1,'Zamuco, igual que los Yshir.'],
 ['El pueblo Nivaclé pertenece a la familia lingüística…',['Mataco Mataguayo','Lengua Maskoy','Guaraní'],0,'Vive principalmente en el Chaco.'],
 ['¿Para qué usaron los jesuitas la palabra Tupã?',['Para nombrar al trueno','Para nombrar al Dios cristiano','Para nombrar a un río'],1,'Tupã era el dios creador guaraní: ejemplo claro de sincretismo.'],
 ['¿En qué ciudad es tradicional el ñandutí?',['Itauguá','Encarnación','Concepción'],0,'Ñandutí significa "tela de araña".'],
 ['El ao po\'i es un tejido tradicional de…',['Yataity (Guairá)','Pilar (Ñeembucú)','Fuerte Olimpo (Alto Paraguay)'],0,'Ao po\'i significa "tela fina".'],
 ['¿Quién creó la guarania?',['Agustín Barrios','José Asunción Flores','Emiliano R. Fernández'],1,'José Asunción Flores la creó en la década de 1920.'],
 ['El pohã ñana es…',['Un baile tradicional','La medicina con remedios yuyos','Un tipo de cerámica'],1,'Plantas medicinales, muy usadas en el tereré.'],
 ['¿Quién es la patrona de Luque?',['Virgen de Caacupé','Nuestra Señora del Rosario','Santa Rosa de Lima'],1,'Su fiesta es el 7 de octubre.'],
 ['¿A qué personaje se le deja tabaco o caña para tenerlo contento?',['Pombero','Ao Ao','Mbói Tu\'i'],0,'Según la tradición, así no molesta en la casa.'],
 ['¿A qué hora del día se asocia al Jasy Jateré?',['A la medianoche','A la siesta','Al amanecer'],1,'Se dice que aparece a los chicos que no duermen la siesta.'],
 ['Ciudad cercana a Luque conocida por la cerámica y las frutillas:',['Areguá','Pedro Juan Caballero','Villarrica'],0,'Areguá, junto al lago Ypacaraí.'],
 ['El sincretismo es…',['La mezcla de creencias de distintas culturas en una nueva forma','Un tipo de música','Olvidar la religión propia'],0,'Como Tupã y el Dios cristiano.'],
 ['¿Qué juego con fuego es típico de la Noche de San Juan?',['Pelota tata','Trompo','Tuka\'ẽ'],0,'Se juega con una pelota de trapo encendida.'],
 ['¿Qué día se celebra a la Virgen de Caacupé?',['7 de octubre','8 de diciembre','24 de junio'],1,'¿Recuerdas el error del calendario? Caacupé no es en julio.'],
 ['¿Cuál es un buen ejemplo de trabajo de campo?',['Copiar un texto de internet','Entrevistar a personas de la comunidad','Ver una película en casa'],1,'El antropólogo va al lugar y escucha a la gente.'],
 ['La transculturación es…',['Un intercambio entre culturas que crea algo nuevo','Perder toda la cultura propia','Viajar a otro país'],0,'El jopara es un ejemplo.'],
 ['La migración interna más común en Paraguay es…',['Del campo a la ciudad','De la ciudad al campo','De Paraguay a Europa'],0,'Muchas familias buscan trabajo en las ciudades.'],
 ['La globalización es…',['La conexión mundial que hace circular costumbres, productos e información','Un juego tradicional','Una ley de lenguas'],0,'Las redes sociales la aceleran.'],
 ['La aculturación ocurre cuando…',['Un grupo adopta rasgos de otra cultura con la que está en contacto','Un niño aprende de sus padres','Se crea una artesanía'],0,'A veces se pierden rasgos propios.'],
 ['¿Cuál de estos es un género musical paraguayo?',['Reggaetón','Polca paraguaya','Cumbia villera'],1,'La polca y la guarania son nuestras.'],
 ['¿Cuántos hijos tuvieron Tau y Kerana según la mitología guaraní?',['Siete','Tres','Doce'],0,'Teju Jagua, Mbói Tu\'i, Moñái, Jasy Jateré, Kurupi, Ao Ao y Luisón.'],
 ['¿Qué se celebra tradicionalmente el 3 de mayo en Paraguay?',['Día de la Cruz (Kurusu Ára)','Día de la Independencia','Día del Folclore'],0,'Se adornan las cruces con chipa y flores.'],
 ['¿Cuántas familias lingüísticas indígenas hay en Paraguay?',['Dos','Cinco','Diez'],1,'Guaraní, Lengua Maskoy, Mataco Mataguayo, Zamuco y Guaicurú.'],
 ['¿Qué artículos de la Constitución protegen a los pueblos indígenas?',['Del 62 al 67','Del 1 al 3','Del 140 al 145'],0,'El capítulo V, De los pueblos indígenas.'],
];
const ABIERTAS=PREG.filter(p=>p[1]>=4);
const ESP={5:'arbol',9:'arbol',14:'arbol',18:'arbol',23:'arbol',27:'arbol',32:'arbol',6:'balsa',19:'terere',11:'desafio',25:'desafio',30:'pombero',34:'luison',36:'meta'};
const ESP_TXT={arbol:'Árbol',balsa:'Balsa',terere:'Tereré rupa',desafio:'Desafío',pombero:'Pombero',luison:'Luisón',meta:'Ka\'aguy porã'};
const ARBOLES=[5,9,14,18,23,27,32];
const DEF_NOMBRES=['Guerreros del Terreno','Influencers del Folclore','Cantina Tereré Rupa','Artesanos del Bosque'];
const LET=['A','B','C','D'];
let nEq=4,J=[],turno=0,ocupado=false,mazo=[],mazoA=[];
const $=id=>document.getElementById(id);
function nombresUI(){
  $('ocaNames').innerHTML=Array.from({length:nEq},(_,i)=>`<div class="row"><span class="ficha f${LET[i]}" style="width:22px;height:22px;font-size:11px">${LET[i]}</span><label class="sr" for="eq${i}" hidden>Equipo ${LET[i]}</label><input id="eq${i}" value="${DEF_NOMBRES[i]}" aria-label="Nombre del equipo ${LET[i]}"></div>`).join('');
}
document.querySelectorAll('#ocaSetup [data-n]').forEach(b=>b.onclick=()=>{nEq=+b.dataset.n;document.querySelectorAll('#ocaSetup [data-n]').forEach(x=>x.setAttribute('aria-pressed',x===b));nombresUI()});
nombresUI();
function barajar(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function cellPos(n){const rb=Math.floor((n-1)/6),k=(n-1)%6,col=rb%2===0?k:5-k;return [6-rb,col+1]}
function dibujarTablero(){
  const t=$('tablero');t.innerHTML='';
  for(let n=1;n<=36;n++){
    const [r,c]=cellPos(n),tipo=ESP[n]||'';const d=document.createElement('div');
    d.className='casilla '+tipo;d.style.gridRow=r;d.style.gridColumn=c;
    d.innerHTML=`<span class="num">${n}</span><span class="ico">${tipo?ESP_TXT[tipo]:''}</span><span class="fichas">${J.map((j,i)=>j.pos===n?`<span class="ficha f${LET[i]}">${LET[i]}</span>`:'').join('')}</span>`;
    t.appendChild(d);
  }
  $('marcador').innerHTML=J.map((j,i)=>`<div class="jug${i===turno?' act':''}"><span class="ficha f${LET[i]}">${LET[i]}</span>${j.nombre}${j.skip?' · descansa':''}<span class="pos">${j.pos===0?'Salida':'Casilla '+j.pos}</span></div>`).join('');
  $('turnoTxt').textContent='Turno: '+J[turno].nombre;
}
function log(t){const p=document.createElement('div');p.textContent=t;$('log').prepend(p)}
function sigTurno(){
  let guard=0;
  do{turno=(turno+1)%J.length;
    if(J[turno].skip){J[turno].skip=false;log(J[turno].nombre+' termina su descanso del tereré.');continue}
    break;}while(++guard<10);
  ocupado=false;$('tirar').disabled=false;dibujarTablero();
}
function cartaMC(j,prev){
  if(!mazo.length)mazo=barajar(MC);const q=mazo.pop();
  const z=$('cartaZona');
  z.innerHTML=`<div class="carta"><span class="eyebrow">Pregunta para ${j.nombre}</span><p class="q-text">${q[0]}</p><div class="opts">${q[1].map((o,i)=>`<button class="opt" data-i="${i}" type="button">${String.fromCharCode(97+i)}) ${o}</button>`).join('')}</div><p class="fb" id="fb"></p></div>`;
  z.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i,ok=i===q[2];
    z.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(+x.dataset.i===q[2])x.classList.add('ok')});
    if(!ok)b.classList.add('bad');
    const fb=$('fb');fb.className='fb '+(ok?'ok':'bad');
    fb.textContent=(ok?'¡Correcto! Te quedas en la casilla '+j.pos+'. ':'Incorrecto. Vuelves a la casilla '+(prev||'de salida')+'. ')+q[3];
    if(!ok){j.pos=prev}
    log(j.nombre+(ok?' acierta.':' falla y vuelve a '+(prev||'la salida')+'.'));
    dibujarTablero();
    addContinuar(z,()=>sigTurno());
  });
}
function addContinuar(z,fn,txt){const b=document.createElement('button');b.className='btn';b.type='button';b.textContent=txt||'Siguiente turno';b.style.justifySelf='start';b.onclick=()=>{z.innerHTML='';fn()};z.firstElementChild.appendChild(b);b.focus()}
function cartaDesafio(j){
  if(!mazoA.length)mazoA=barajar(ABIERTAS);const p=mazoA.pop();const z=$('cartaZona');
  z.innerHTML=`<div class="carta" style="border-color:var(--sol)"><span class="eyebrow">Desafío N${p[1]} · ${NLAB[p[1]]} · ${j.nombre}</span><p class="q-text">${p[2]}</p><details><summary>Orientación para la profe</summary><p style="color:var(--muted);font-size:15px;margin-top:6px">${p[3]}</p></details><div class="row" style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="dOk" type="button">Respuesta aceptada (+2)</button><button class="btn sec" id="dNo" type="button">No alcanza</button></div></div>`;
  $('dOk').onclick=()=>{z.innerHTML='';j.pos=Math.min(36,j.pos+2);log(j.nombre+' supera el desafío y avanza 2.');dibujarTablero();if(j.pos===36)return ganar(j);sigTurno()};
  $('dNo').onclick=()=>{z.innerHTML='';log(j.nombre+' no supera el desafío; se queda donde está.');sigTurno()};
}
function ganar(j){
  ocupado=true;$('tirar').disabled=true;dibujarTablero();
  $('cartaZona').innerHTML=`<div class="carta" style="border-color:var(--sol)"><span class="eyebrow">¡Llegaron al bosque hermoso!</span><h3>${j.nombre} gana la partida</h3><p>Aguyje! Pueden empezar otra con "Nueva partida".</p></div>`;
  log(j.nombre+' llega a la casilla 36.');
}
function mostrarAviso(t,fn,boton){const z=$('cartaZona');z.innerHTML=`<div class="carta"><p class="q-text">${t}</p></div>`;addContinuar(z,fn,boton)}
function resolver(j,prev){
  const tipo=ESP[j.pos];dibujarTablero();
  if(j.pos===36)return ganar(j);
  if(tipo==='arbol'){
    const sig=ARBOLES.find(a=>a>j.pos);
    if(sig){const de=j.pos;j.pos=sig;log(j.nombre+': de árbol en árbol, de '+de+' a '+sig+'.');dibujarTablero();
      return mostrarAviso('De árbol en árbol: saltas de la '+de+' a la '+sig+' y vuelves a tirar.',()=>{ocupado=false;$('tirar').disabled=false},'Tirar otra vez');}
    log(j.nombre+' llega al último árbol.');
    return mostrarAviso('Último árbol del bosque: vuelves a tirar.',()=>{ocupado=false;$('tirar').disabled=false},'Tirar otra vez');
  }
  if(tipo==='balsa'){j.pos=12;log(j.nombre+' cruza en balsa a la 12.');dibujarTablero();return mostrarAviso('La balsa te cruza el río hasta la casilla 12. Vuelves a tirar.',()=>{ocupado=false;$('tirar').disabled=false},'Tirar otra vez')}
  if(tipo==='terere'){j.skip=true;log(j.nombre+' se queda en la ronda de tereré.');return mostrarAviso('Tereré rupa: te quedas en la ronda. Pierdes un turno.',sigTurno)}
  if(tipo==='pombero'){j.pos=21;log(j.nombre+': el Pombero lo pierde, vuelve a 21.');dibujarTablero();return mostrarAviso('El Pombero te pierde en el monte. Vuelves a la casilla 21.',sigTurno)}
  if(tipo==='luison'){j.pos=18;log(j.nombre+': el Luisón lo asusta, vuelve a 18.');dibujarTablero();return mostrarAviso('¡El Luisón! Sales corriendo y vuelves a la casilla 18.',sigTurno)}
  if(tipo==='desafio')return cartaDesafio(j);
  cartaMC(j,prev);
}
$('tirar').onclick=()=>{
  if(ocupado)return;ocupado=true;$('tirar').disabled=true;
  const d=1+Math.floor(Math.random()*6),dado=$('dado');dado.classList.remove('roll');void dado.offsetWidth;dado.classList.add('roll');dado.textContent=d;
  const j=J[turno],prev=j.pos;let dest=prev+d;
  if(dest>36){dest=36-(dest-36);log(j.nombre+' saca '+d+', se pasa y rebota hasta la '+dest+'.')}else log(j.nombre+' saca '+d+' y va a la '+dest+'.');
  j.pos=dest;setTimeout(()=>resolver(j,prev),450);
};
$('ocaStart').onclick=()=>{
  J=Array.from({length:nEq},(_,i)=>({nombre:($('eq'+i).value.trim()||'Equipo '+LET[i]),pos:0,skip:false}));
  turno=0;ocupado=false;mazo=barajar(MC);mazoA=barajar(ABIERTAS);
  $('ocaSetup').hidden=true;$('ocaGame').hidden=false;$('log').innerHTML='';$('cartaZona').innerHTML='';$('dado').textContent='–';$('tirar').disabled=false;
  dibujarTablero();log('Empieza la partida con '+nEq+' equipos.');
};
$('ocaReset').onclick=()=>{$('ocaGame').hidden=true;$('ocaSetup').hidden=false};

/* ---------- Memoria ---------- */
const PARES=[
 ['Endoculturación','Tu abuela te enseña a preparar chipa.'],
 ['Aculturación','Una comunidad deja su lengua y usa solo el castellano.'],
 ['Transculturación','Del guaraní y el castellano nace el jopara.'],
 ['Etnocentrismo','"La comida de ese país es fea porque no es como la nuestra."'],
 ['Relativismo cultural','Entender por qué otro pueblo come lo que come antes de opinar.'],
 ['Diglosia','Guaraní en el recreo, castellano en el examen.'],
 ['Sincretismo','Los jesuitas llaman Tupã al Dios cristiano.'],
 ['Mestizaje','El encuentro hispano-guaraní que origina a los paraguayos.'],
 ['Pohã ñana','Yuyos machacados en el mortero para el tereré.'],
 ['Religiosidad popular','Promesa y procesión a la Virgen del Rosario el 7 de octubre.'],
 ['Globalización','Un baile de TikTok que se hace igual en Luque y en Corea.'],
 ['Migración interna','Una familia del interior se muda a Luque por trabajo.'],
 ['Artesanía','El ñandutí tejido a mano en Itauguá.'],
];
let mCartas=[],mAbiertas=[],mInt=0,mPar=0,mBloq=false;
function memNueva(){
  const sel=barajar(PARES).slice(0,8);mCartas=barajar(sel.flatMap((p,i)=>[{id:i,t:p[0],c:true},{id:i,t:p[1],c:false}]));
  mAbiertas=[];mInt=0;mPar=0;mBloq=false;$('mMsg').textContent='';$('mMsg').className='fb';memDibujar();
}
function memDibujar(){
  $('mInt').textContent=mInt;$('mPar').textContent=mPar;
  $('mem').innerHTML=mCartas.map((k,i)=>{const ab=k.par||mAbiertas.includes(i);
    return `<button class="carta-m${ab?' abierta':''}${ab&&k.c?' concepto-c':''}${k.par?' par':''}${k.mal?' mal':''}" data-i="${i}" type="button" ${k.par?'disabled':''} aria-label="${ab?k.t:'Carta tapada'}">${ab?k.t:'<span class="dorso">?</span>'}</button>`}).join('');
  $('mem').querySelectorAll('.carta-m').forEach(b=>b.onclick=()=>memClic(+b.dataset.i));
}
function memClic(i){
  if(mBloq||mAbiertas.includes(i)||mCartas[i].par)return;
  mAbiertas.push(i);memDibujar();
  if(mAbiertas.length===2){
    mInt++;const [a,b]=mAbiertas;
    if(mCartas[a].id===mCartas[b].id&&mCartas[a].c!==mCartas[b].c){
      mCartas[a].par=mCartas[b].par=true;mPar++;mAbiertas=[];
      const con=mCartas[a].c?mCartas[a].t:mCartas[b].t;$('mMsg').className='fb ok';$('mMsg').textContent='¡Par! '+con+'.';
      memDibujar();
      if(mPar===8){$('mMsg').textContent='¡Completaste los 8 pares en '+mInt+' intentos! Mezcla de nuevo para practicar otros conceptos.'}
    }else{
      mBloq=true;mCartas[a].mal=mCartas[b].mal=true;memDibujar();$('mMsg').className='fb bad';$('mMsg').textContent='No coinciden. Intenta recordar dónde estaban.';
      setTimeout(()=>{mCartas[a].mal=mCartas[b].mal=false;mAbiertas=[];mBloq=false;memDibujar()},1300);
    }
  }
}
$('mNew').onclick=memNueva;memNueva();
