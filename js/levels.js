var levels = [
  {
    helpTitle : "Sélectionner des éléments par leur type",
    selectorName : "Type Selector",
    doThis : "Sélectionne les assiettes",
    selector : "plate",
    syntax : "A",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Sélectionne les boîtes bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionner des éléments par leur type",
    selectorName : "Type Selector",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Sélectionne l'assiette fancy",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Sélectionner des éléments avec un ID",
    syntax: "#id",
    help : 'Sélectionne l\'\u00e9lément avec un <strong>id</strong> spécifique. Tu peux aussi combiner le sélecteur d\'ID avec le sélecteur de type.',
    examples : [
      '<strong>#cool</strong> sélectionne tout élément avec <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Sélectionner un élément à l'intérieur d'un autre",
    selectorName : "Descendant Selector",
    doThis : "Sélectionne la pomme sur l'assiette",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les <strong>B</strong> à l'intérieur de <strong>A</strong>. <strong>B</strong> est appelé un descendant car il est à l'intérieur d'un autre élément.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> qui sont à l\'intérieur de n\'importe quel <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur de l\'élément avec <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Sélectionne le cornichon sur l'assiette fancy",
    selector : "#fancy pickle",
    helpTitle: "Combiner les sélecteurs Descendant & ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Tu peux combiner n\'importe quel sélecteur avec le sélecteur de descendant.',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur d\'éléments avec <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Sélectionne les petites pommes",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Sélectionner des éléments par leur classe",
    syntax: ".classname",
    help : 'Le sélecteur de classe sélectionne tous les éléments avec cet attribut class. Les éléments ne peuvent avoir qu\'un seul ID, mais plusieurs classes.',
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Sélectionne les petites oranges",
    selector : "orange.small",
    helpTitle: "Combiner le sélecteur de classe",
    syntax: "A.className",
    help : 'Tu peux combiner le sélecteur de classe avec d\'autres sélecteurs, comme le sélecteur de type.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> qui ont aussi <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Sélectionne les petites oranges dans les bentos",
    selector : "bento orange.small",
    syntax: "Allez, tu peux le faire !",
    helpTitle: "Tu en es capable...",
    help : 'Combine ce que tu as appris dans les derniers niveaux pour résoudre celui-ci !',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Sélectionne toutes les assiettes et les bentos",
    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combiner des sélecteurs avec... des virgules !",
    syntax : "A, B",
    help : 'Grâce à la technologie Shatner, ceci sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Tu peux combiner n\'importe quels sélecteurs de cette manière, et tu peux en spécifier plus de deux.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> ainsi que tous les éléments avec <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Sélectionne tout !",
    selector : "*",
    selectorName:  "The Universal Selector",
    helpTitle: "Tu peux tout sélectionner !",
    syntax : "*",
    help : 'Tu peux sélectionner tous les éléments avec le sélecteur universel ! ',
    examples : [
      '<strong>p *</strong> sélectionne n\'importe quel élément à l\'intérieur de tous les éléments <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Sélectionne tout ce qui est sur une assiette",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combiner le sélecteur universel",
    help : 'Ceci sélectionne tous les éléments à l\'intérieur de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments à l\'intérieur de tous les éléments <tag>p</tag>.',
      '<strong>ul.fancy *</strong> sélectionne tous les éléments à l\'intérieur de tous les éléments <tag>ul class="fancy"</tag>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Sélectionne chaque pomme qui est juste après une assiette",
    selector : "plate + apple",
    helpTitle: "Sélectionner un élément qui suit directement un autre",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "Ceci sélectionne tous les éléments <strong>B</strong> qui suivent directement <strong>A</strong>. Les éléments qui se suivent sont appelés frères (siblings). Ils sont au même niveau, ou profondeur. <br/><br/>Dans le balisage HTML de ce niveau, les éléments qui ont la même indentation sont frères.",
    examples : [
      '<strong>p + .intro</strong> sélectionne chaque élément avec <strong>class="intro"</strong> qui suit directement un <tag>p</tag>',
      '<strong>div + a</strong> sélectionne chaque élément <tag>a</tag> qui suit directement un <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Sélectionner des éléments qui suivent un autre",
    syntax: "A ~ B",
    doThis : "Sélectionne les cornichons à côté du bento",
    selector : "bento ~ pickle",
    help : "Tu peux sélectionner tous les frères d'un élément qui le suivent. C'est comme le sélecteur Adjacent (A + B) sauf qu'il récupère tous les éléments suivants au lieu d'un seul.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous les <strong>B</strong> qui suivent un <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Sélectionne la pomme directement sur une assiette",
    selector : "plate > apple",
    helpTitle: "Sélectionner les enfants directs d'un élément",
    help : "Tu peux sélectionner des éléments qui sont des enfants directs d'autres éléments. Un élément enfant est tout élément qui est imbriqué directement dans un autre élément. <br><br>Les éléments qui sont imbriqués plus profondément sont appelés éléments descendants.",
    examples : [
      '<strong>A > B</strong> sélectionne tous les <strong>B</strong> qui sont des enfants directs de <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Sélectionner le premier élément enfant à l'intérieur d'un autre",
    doThis : "Sélectionne l'orange du haut",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Tu peux sélectionner le premier élément enfant. Un élément enfant est tout élément qui est directement imbriqué dans un autre élément. Tu peux combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
      '<strong>:first-child</strong> sélectionne tous les éléments premiers enfants.',
      '<strong>p:first-child</strong> sélectionne tous les éléments <tag>p</tag> qui sont premiers enfants.',
      '<strong>div p:first-child</strong> sélectionne tous les éléments <tag>p</tag> premiers enfants qui sont dans un <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Sélectionner un élément qui est le seul à l'intérieur d'un autre.",
    doThis : "Sélectionne la pomme et le cornichon sur les assiettes",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Tu peux sélectionner tout élément qui est le seul élément à l'intérieur d'un autre.",
    examples : [
      '<strong>span:only-child</strong> sélectionne les éléments <tag>span</tag> qui sont l\'unique enfant d\'un autre élément.',
      '<strong>ul li:only-child</strong> sélectionne le seul élément <tag>li</tag> qui est dans un <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Sélectionner le dernier élément à l'intérieur d'un autre",
    doThis : "Sélectionne la petite pomme et le cornichon",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Tu peux utiliser ce sélecteur pour sélectionner un élément qui est le dernier élément enfant à l'intérieur d'un autre. <br><br>Astuce &rarr; Dans les cas où il n'y a qu'un seul élément, cet élément compte comme first-child, only-child et last-child !",
    examples : [
      '<strong>:last-child</strong> sélectionne tous les éléments derniers enfants.',
      '<strong>span:last-child</strong> sélectionne tous les éléments <tag>span</tag> derniers enfants.',
      '<strong>ul li:last-child</strong> sélectionne le dernier élément <tag>li</tag> à l\'intérieur de n\'importe quel <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Sélectionner un élément par son ordre dans un autre",
    doThis : "Sélectionne la 3ème assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Sélectionne le <strong>nième</strong> (Ex: 1er, 3ème, 12ème etc.) élément enfant dans un autre élément.",
    examples : [
      '<strong>:nth-child(8)</strong> sélectionne chaque élément qui est le 8ème enfant d\'un autre élément.',
      '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Sélectionner un élément par son ordre dans un autre, en comptant depuis la fin",
    doThis : "Sélectionne le 1er bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Sélectionne les enfants depuis le bas du parent. C'est comme nth-child, mais en comptant depuis la fin !",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous les avant-derniers éléments enfants.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Sélectionner le premier élément d'un type spécifique",
    doThis : "Sélectionne la première pomme",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Sélectionne le premier élément de ce type à l'intérieur d'un autre élément.",
    examples : [
      '<strong>span:first-of-type</strong> sélectionne le premier <tag>span</tag> dans n\'importe quel élément.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Sélectionne toutes les assiettes paires",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Sélectionne un élément spécifique basé sur son type et son ordre dans un autre élément - ou les instances paires ou impaires de cet élément.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> sélectionne la deuxième instance d\'un div.',
      '<strong>.example:nth-of-type(odd)</strong> sélectionne toutes les instances impaires de la classe example.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Sélectionne une assiette sur 2, en commençant à la 3ème",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La formule nth-of-type sélectionne chaque nième élément, en commençant le comptage à une instance spécifique de cet élément.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> sélectionne chaque 6ème instance d\'un <tag>span</tag>, en commençant à partir de (et incluant) la deuxième instance.'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Sélectionner les éléments qui sont les seuls de leur type dans leur élément parent",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Sélectionne la pomme sur l'assiette du milieu",
    help : "Sélectionne le seul élément de son type à l'intérieur d'un autre élément.",
    examples : [
      '<strong>p span:only-of-type</strong> sélectionne un <tag>span</tag> dans n\'importe quel <tag>p</tag> si c\'est le seul <tag>span</tag> à l\'intérieur.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Sélectionner le dernier élément d'un type spécifique",
    doThis : "Sélectionne la dernière pomme et la dernière orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Sélectionne chaque dernier élément de ce type à l'intérieur d'un autre élément. Rappelle-toi que le type fait référence au type de balise, donc <tag>p</tag> et <tag>span</tag> sont des types différents. <br><br> Je me demande si c'est comme ça que le dernier dinosaure a été sélectionné avant qu'il ne disparaisse.",
    examples : [
      '<strong>div:last-of-type</strong> sélectionne le dernier <tag>div</tag> dans chaque élément.',
      '<strong>p span:last-of-type</strong> sélectionne le dernier <tag>span</tag> dans chaque <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Sélectionner les éléments qui n'ont pas d'enfants",
    doThis : "Sélectionne les bentos vides",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Sélectionne les éléments qui n'ont pas d'autres éléments à l'intérieur.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous les éléments <tag>div</tag> vides.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Sélectionner tous les éléments qui ne correspondent pas au sélecteur de négation",
    doThis : "Sélectionne les grosses pommes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Tu peux utiliser ceci pour sélectionner tous les éléments qui ne correspondent pas au sélecteur <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> sélectionne tous les éléments qui n\'ont pas <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> sélectionne chaque <tag>div</tag> qui n\'est pas un premier enfant.',
      '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments qui n\'ont pas <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Sélectionner tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionne les éléments pour quelqu'un",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Les attributs apparaissent à l\'intérieur de la balise ouvrante d\'un élément, comme ceci : <tag>span attribute="value"</tag>. Un attribut n\'a pas toujours de valeur, il peut être vide !',
    examples : [
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont un attribut <strong>href="anything"</strong>.',
      '<strong>[type]</strong> sélectionne tous les éléments qui ont un attribut <strong>type="anything"</strong>.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Sélectionner tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionne les assiettes pour quelqu'un",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combine le sélecteur d'attribut avec un autre sélecteur (comme le sélecteur de nom de balise) en l'ajoutant à la fin.",
    examples : [
      '<strong>[value]</strong> sélectionne tous les éléments qui ont un attribut <strong>value="anything"</strong>.',
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont un attribut <strong>href="anything"</strong>.',
      '<strong>input[disabled]</strong> sélectionne tous les éléments <tag>input</tag> avec l\'attribut <strong>disabled</strong>'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut spécifique",
    doThis : "Sélectionne le repas de Vitaly",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Les sélecteurs d'attribut sont sensibles à la casse, chaque caractère doit correspondre exactement.",
    examples : [
      '<strong>input[type="checkbox"]</strong> sélectionne tous les éléments input de type checkbox.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui commence par des caractères spécifiques",
    doThis : "Sélectionne les éléments pour les noms qui commencent par 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> sélectionne les éléments avec la classe <strong>toy</strong> et soit <strong>category="Swimwear"</strong> soit <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui se termine par des caractères spécifiques",
    doThis : "Sélectionne les éléments pour les noms qui se terminent par 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> sélectionne toutes les images qui affichent une image <strong>.jpg</strong>.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui contient des caractères spécifiques n'importe où",
    syntax: '[attribute*="value"]',
    doThis : "Sélectionne les repas pour les noms qui contiennent 'obb'",
    selector : '[for*="obb"]',
    help : 'Un sélecteur utile si tu peux identifier un motif commun dans des attributs comme <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne tous les éléments image qui affichent des images du dossier "thumbnails".',
      '<strong>[class*="heading"]</strong> sélectionne tous les éléments avec "heading" dans leur classe, comme <strong>class="main-heading"</strong> et <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
