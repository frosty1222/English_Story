/*jslint browser: true*/
/*global cmtt_data, console, document, jQuery*/

/*
 https://mths.be/he v1.2.0 by @mathias | MIT license */
(function(w){var n="object"==typeof exports&&exports,x="object"==typeof module&&module&&module.exports==n&&module,l="object"==typeof global&&global;if(l.global===l||l.window===l)w=l;var F=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,G=/[\x01-\x7F]/g,H=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,y=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
m={"\u00ad":"shy","\u200c":"zwnj","\u200d":"zwj","\u200e":"lrm","\u2063":"ic","\u2062":"it","\u2061":"af","\u200f":"rlm","\u200b":"ZeroWidthSpace","\u2060":"NoBreak","\u0311":"DownBreve","\u20db":"tdot","\u20dc":"DotDot","\t":"Tab","\n":"NewLine","\u2008":"puncsp","\u205f":"MediumSpace","\u2009":"thinsp","\u200a":"hairsp","\u2004":"emsp13","\u2002":"ensp","\u2005":"emsp14","\u2003":"emsp","\u2007":"numsp","\u00a0":"nbsp","\u205f\u200a":"ThickSpace","\u203e":"oline",_:"lowbar","\u2010":"dash","\u2013":"ndash",
"\u2014":"mdash","\u2015":"horbar",",":"comma",";":"semi","\u204f":"bsemi",":":"colon","\u2a74":"Colone","!":"excl","\u00a1":"iexcl","?":"quest","\u00bf":"iquest",".":"period","\u2025":"nldr","\u2026":"mldr","\u00b7":"middot","'":"apos","\u2018":"lsquo","\u2019":"rsquo","\u201a":"sbquo","\u2039":"lsaquo","\u203a":"rsaquo",'"':"quot","\u201c":"ldquo","\u201d":"rdquo","\u201e":"bdquo","\u00ab":"laquo","\u00bb":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","\u2308":"lceil",
"\u2309":"rceil","\u230a":"lfloor","\u230b":"rfloor","\u2985":"lopar","\u2986":"ropar","\u298b":"lbrke","\u298c":"rbrke","\u298d":"lbrkslu","\u298e":"rbrksld","\u298f":"lbrksld","\u2990":"rbrkslu","\u2991":"langd","\u2992":"rangd","\u2993":"lparlt","\u2994":"rpargt","\u2995":"gtlPar","\u2996":"ltrPar","\u27e6":"lobrk","\u27e7":"robrk","\u27e8":"lang","\u27e9":"rang","\u27ea":"Lang","\u27eb":"Rang","\u27ec":"loang","\u27ed":"roang","\u2772":"lbbrk","\u2773":"rbbrk","\u2016":"Vert","\u00a7":"sect",
"\u00b6":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","\u2030":"permil","\u2031":"pertenk","\u2020":"dagger","\u2021":"Dagger","\u2022":"bull","\u2043":"hybull","\u2032":"prime","\u2033":"Prime","\u2034":"tprime","\u2057":"qprime","\u2035":"bprime","\u2041":"caret","`":"grave","\u00b4":"acute","\u02dc":"tilde","^":"Hat","\u00af":"macr","\u02d8":"breve","\u02d9":"dot","\u00a8":"die","\u02da":"ring","\u02dd":"dblac","\u00b8":"cedil","\u02db":"ogon","\u02c6":"circ",
"\u02c7":"caron","\u00b0":"deg","\u00a9":"copy","\u00ae":"reg","\u2117":"copysr","\u2118":"wp","\u211e":"rx","\u2127":"mho","\u2129":"iiota","\u2190":"larr","\u219a":"nlarr","\u2192":"rarr","\u219b":"nrarr","\u2191":"uarr","\u2193":"darr","\u2194":"harr","\u21ae":"nharr","\u2195":"varr","\u2196":"nwarr","\u2197":"nearr","\u2198":"searr","\u2199":"swarr","\u219d":"rarrw","\u219d\u0338":"nrarrw","\u219e":"Larr","\u219f":"Uarr","\u21a0":"Rarr","\u21a1":"Darr","\u21a2":"larrtl","\u21a3":"rarrtl","\u21a4":"mapstoleft",
"\u21a5":"mapstoup","\u21a6":"map","\u21a7":"mapstodown","\u21a9":"larrhk","\u21aa":"rarrhk","\u21ab":"larrlp","\u21ac":"rarrlp","\u21ad":"harrw","\u21b0":"lsh","\u21b1":"rsh","\u21b2":"ldsh","\u21b3":"rdsh","\u21b5":"crarr","\u21b6":"cularr","\u21b7":"curarr","\u21ba":"olarr","\u21bb":"orarr","\u21bc":"lharu","\u21bd":"lhard","\u21be":"uharr","\u21bf":"uharl","\u21c0":"rharu","\u21c1":"rhard","\u21c2":"dharr","\u21c3":"dharl","\u21c4":"rlarr","\u21c5":"udarr","\u21c6":"lrarr","\u21c7":"llarr","\u21c8":"uuarr",
"\u21c9":"rrarr","\u21ca":"ddarr","\u21cb":"lrhar","\u21cc":"rlhar","\u21d0":"lArr","\u21cd":"nlArr","\u21d1":"uArr","\u21d2":"rArr","\u21cf":"nrArr","\u21d3":"dArr","\u21d4":"iff","\u21ce":"nhArr","\u21d5":"vArr","\u21d6":"nwArr","\u21d7":"neArr","\u21d8":"seArr","\u21d9":"swArr","\u21da":"lAarr","\u21db":"rAarr","\u21dd":"zigrarr","\u21e4":"larrb","\u21e5":"rarrb","\u21f5":"duarr","\u21fd":"loarr","\u21fe":"roarr","\u21ff":"hoarr","\u2200":"forall","\u2201":"comp","\u2202":"part","\u2202\u0338":"npart",
"\u2203":"exist","\u2204":"nexist","\u2205":"empty","\u2207":"Del","\u2208":"in","\u2209":"notin","\u220b":"ni","\u220c":"notni","\u03f6":"bepsi","\u220f":"prod","\u2210":"coprod","\u2211":"sum","+":"plus","\u00b1":"pm","\u00f7":"div","\u00d7":"times","<":"lt","\u226e":"nlt","<\u20d2":"nvlt","=":"equals","\u2260":"ne","=\u20e5":"bne","\u2a75":"Equal",">":"gt","\u226f":"ngt",">\u20d2":"nvgt","\u00ac":"not","|":"vert","\u00a6":"brvbar","\u2212":"minus","\u2213":"mp","\u2214":"plusdo","\u2044":"frasl",
"\u2216":"setmn","\u2217":"lowast","\u2218":"compfn","\u221a":"Sqrt","\u221d":"prop","\u221e":"infin","\u221f":"angrt","\u2220":"ang","\u2220\u20d2":"nang","\u2221":"angmsd","\u2222":"angsph","\u2223":"mid","\u2224":"nmid","\u2225":"par","\u2226":"npar","\u2227":"and","\u2228":"or","\u2229":"cap","\u2229\ufe00":"caps","\u222a":"cup","\u222a\ufe00":"cups","\u222b":"int","\u222c":"Int","\u222d":"tint","\u2a0c":"qint","\u222e":"oint","\u222f":"Conint","\u2230":"Cconint","\u2231":"cwint","\u2232":"cwconint",
"\u2233":"awconint","\u2234":"there4","\u2235":"becaus","\u2236":"ratio","\u2237":"Colon","\u2238":"minusd","\u223a":"mDDot","\u223b":"homtht","\u223c":"sim","\u2241":"nsim","\u223c\u20d2":"nvsim","\u223d":"bsim","\u223d\u0331":"race","\u223e":"ac","\u223e\u0333":"acE","\u223f":"acd","\u2240":"wr","\u2242":"esim","\u2242\u0338":"nesim","\u2243":"sime","\u2244":"nsime","\u2245":"cong","\u2247":"ncong","\u2246":"simne","\u2248":"ap","\u2249":"nap","\u224a":"ape","\u224b":"apid","\u224b\u0338":"napid",
"\u224c":"bcong","\u224d":"CupCap","\u226d":"NotCupCap","\u224d\u20d2":"nvap","\u224e":"bump","\u224e\u0338":"nbump","\u224f":"bumpe","\u224f\u0338":"nbumpe","\u2250":"doteq","\u2250\u0338":"nedot","\u2251":"eDot","\u2252":"efDot","\u2253":"erDot","\u2254":"colone","\u2255":"ecolon","\u2256":"ecir","\u2257":"cire","\u2259":"wedgeq","\u225a":"veeeq","\u225c":"trie","\u225f":"equest","\u2261":"equiv","\u2262":"nequiv","\u2261\u20e5":"bnequiv","\u2264":"le","\u2270":"nle","\u2264\u20d2":"nvle","\u2265":"ge",
"\u2271":"nge","\u2265\u20d2":"nvge","\u2266":"lE","\u2266\u0338":"nlE","\u2267":"gE","\u2267\u0338":"ngE","\u2268\ufe00":"lvnE","\u2268":"lnE","\u2269":"gnE","\u2269\ufe00":"gvnE","\u226a":"ll","\u226a\u0338":"nLtv","\u226a\u20d2":"nLt","\u226b":"gg","\u226b\u0338":"nGtv","\u226b\u20d2":"nGt","\u226c":"twixt","\u2272":"lsim","\u2274":"nlsim","\u2273":"gsim","\u2275":"ngsim","\u2276":"lg","\u2278":"ntlg","\u2277":"gl","\u2279":"ntgl","\u227a":"pr","\u2280":"npr","\u227b":"sc","\u2281":"nsc","\u227c":"prcue",
"\u22e0":"nprcue","\u227d":"sccue","\u22e1":"nsccue","\u227e":"prsim","\u227f":"scsim","\u227f\u0338":"NotSucceedsTilde","\u2282":"sub","\u2284":"nsub","\u2282\u20d2":"vnsub","\u2283":"sup","\u2285":"nsup","\u2283\u20d2":"vnsup","\u2286":"sube","\u2288":"nsube","\u2287":"supe","\u2289":"nsupe","\u228a\ufe00":"vsubne","\u228a":"subne","\u228b\ufe00":"vsupne","\u228b":"supne","\u228d":"cupdot","\u228e":"uplus","\u228f":"sqsub","\u228f\u0338":"NotSquareSubset","\u2290":"sqsup","\u2290\u0338":"NotSquareSuperset",
"\u2291":"sqsube","\u22e2":"nsqsube","\u2292":"sqsupe","\u22e3":"nsqsupe","\u2293":"sqcap","\u2293\ufe00":"sqcaps","\u2294":"sqcup","\u2294\ufe00":"sqcups","\u2295":"oplus","\u2296":"ominus","\u2297":"otimes","\u2298":"osol","\u2299":"odot","\u229a":"ocir","\u229b":"oast","\u229d":"odash","\u229e":"plusb","\u229f":"minusb","\u22a0":"timesb","\u22a1":"sdotb","\u22a2":"vdash","\u22ac":"nvdash","\u22a3":"dashv","\u22a4":"top","\u22a5":"bot","\u22a7":"models","\u22a8":"vDash","\u22ad":"nvDash","\u22a9":"Vdash",
"\u22ae":"nVdash","\u22aa":"Vvdash","\u22ab":"VDash","\u22af":"nVDash","\u22b0":"prurel","\u22b2":"vltri","\u22ea":"nltri","\u22b3":"vrtri","\u22eb":"nrtri","\u22b4":"ltrie","\u22ec":"nltrie","\u22b4\u20d2":"nvltrie","\u22b5":"rtrie","\u22ed":"nrtrie","\u22b5\u20d2":"nvrtrie","\u22b6":"origof","\u22b7":"imof","\u22b8":"mumap","\u22b9":"hercon","\u22ba":"intcal","\u22bb":"veebar","\u22bd":"barvee","\u22be":"angrtvb","\u22bf":"lrtri","\u22c0":"Wedge","\u22c1":"Vee","\u22c2":"xcap","\u22c3":"xcup","\u22c4":"diam",
"\u22c5":"sdot","\u22c6":"Star","\u22c7":"divonx","\u22c8":"bowtie","\u22c9":"ltimes","\u22ca":"rtimes","\u22cb":"lthree","\u22cc":"rthree","\u22cd":"bsime","\u22ce":"cuvee","\u22cf":"cuwed","\u22d0":"Sub","\u22d1":"Sup","\u22d2":"Cap","\u22d3":"Cup","\u22d4":"fork","\u22d5":"epar","\u22d6":"ltdot","\u22d7":"gtdot","\u22d8":"Ll","\u22d8\u0338":"nLl","\u22d9":"Gg","\u22d9\u0338":"nGg","\u22da\ufe00":"lesg","\u22da":"leg","\u22db":"gel","\u22db\ufe00":"gesl","\u22de":"cuepr","\u22df":"cuesc","\u22e6":"lnsim",
"\u22e7":"gnsim","\u22e8":"prnsim","\u22e9":"scnsim","\u22ee":"vellip","\u22ef":"ctdot","\u22f0":"utdot","\u22f1":"dtdot","\u22f2":"disin","\u22f3":"isinsv","\u22f4":"isins","\u22f5":"isindot","\u22f5\u0338":"notindot","\u22f6":"notinvc","\u22f7":"notinvb","\u22f9":"isinE","\u22f9\u0338":"notinE","\u22fa":"nisd","\u22fb":"xnis","\u22fc":"nis","\u22fd":"notnivc","\u22fe":"notnivb","\u2305":"barwed","\u2306":"Barwed","\u230c":"drcrop","\u230d":"dlcrop","\u230e":"urcrop","\u230f":"ulcrop","\u2310":"bnot",
"\u2312":"profline","\u2313":"profsurf","\u2315":"telrec","\u2316":"target","\u231c":"ulcorn","\u231d":"urcorn","\u231e":"dlcorn","\u231f":"drcorn","\u2322":"frown","\u2323":"smile","\u232d":"cylcty","\u232e":"profalar","\u2336":"topbot","\u233d":"ovbar","\u233f":"solbar","\u237c":"angzarr","\u23b0":"lmoust","\u23b1":"rmoust","\u23b4":"tbrk","\u23b5":"bbrk","\u23b6":"bbrktbrk","\u23dc":"OverParenthesis","\u23dd":"UnderParenthesis","\u23de":"OverBrace","\u23df":"UnderBrace","\u23e2":"trpezium","\u23e7":"elinters",
"\u2423":"blank","\u2500":"boxh","\u2502":"boxv","\u250c":"boxdr","\u2510":"boxdl","\u2514":"boxur","\u2518":"boxul","\u251c":"boxvr","\u2524":"boxvl","\u252c":"boxhd","\u2534":"boxhu","\u253c":"boxvh","\u2550":"boxH","\u2551":"boxV","\u2552":"boxdR","\u2553":"boxDr","\u2554":"boxDR","\u2555":"boxdL","\u2556":"boxDl","\u2557":"boxDL","\u2558":"boxuR","\u2559":"boxUr","\u255a":"boxUR","\u255b":"boxuL","\u255c":"boxUl","\u255d":"boxUL","\u255e":"boxvR","\u255f":"boxVr","\u2560":"boxVR","\u2561":"boxvL",
"\u2562":"boxVl","\u2563":"boxVL","\u2564":"boxHd","\u2565":"boxhD","\u2566":"boxHD","\u2567":"boxHu","\u2568":"boxhU","\u2569":"boxHU","\u256a":"boxvH","\u256b":"boxVh","\u256c":"boxVH","\u2580":"uhblk","\u2584":"lhblk","\u2588":"block","\u2591":"blk14","\u2592":"blk12","\u2593":"blk34","\u25a1":"squ","\u25aa":"squf","\u25ab":"EmptyVerySmallSquare","\u25ad":"rect","\u25ae":"marker","\u25b1":"fltns","\u25b3":"xutri","\u25b4":"utrif","\u25b5":"utri","\u25b8":"rtrif","\u25b9":"rtri","\u25bd":"xdtri",
"\u25be":"dtrif","\u25bf":"dtri","\u25c2":"ltrif","\u25c3":"ltri","\u25ca":"loz","\u25cb":"cir","\u25ec":"tridot","\u25ef":"xcirc","\u25f8":"ultri","\u25f9":"urtri","\u25fa":"lltri","\u25fb":"EmptySmallSquare","\u25fc":"FilledSmallSquare","\u2605":"starf","\u2606":"star","\u260e":"phone","\u2640":"female","\u2642":"male","\u2660":"spades","\u2663":"clubs","\u2665":"hearts","\u2666":"diams","\u266a":"sung","\u2713":"check","\u2717":"cross","\u2720":"malt","\u2736":"sext","\u2758":"VerticalSeparator",
"\u27c8":"bsolhsub","\u27c9":"suphsol","\u27f5":"xlarr","\u27f6":"xrarr","\u27f7":"xharr","\u27f8":"xlArr","\u27f9":"xrArr","\u27fa":"xhArr","\u27fc":"xmap","\u27ff":"dzigrarr","\u2902":"nvlArr","\u2903":"nvrArr","\u2904":"nvHarr","\u2905":"Map","\u290c":"lbarr","\u290d":"rbarr","\u290e":"lBarr","\u290f":"rBarr","\u2910":"RBarr","\u2911":"DDotrahd","\u2912":"UpArrowBar","\u2913":"DownArrowBar","\u2916":"Rarrtl","\u2919":"latail","\u291a":"ratail","\u291b":"lAtail","\u291c":"rAtail","\u291d":"larrfs",
"\u291e":"rarrfs","\u291f":"larrbfs","\u2920":"rarrbfs","\u2923":"nwarhk","\u2924":"nearhk","\u2925":"searhk","\u2926":"swarhk","\u2927":"nwnear","\u2928":"toea","\u2929":"tosa","\u292a":"swnwar","\u2933":"rarrc","\u2933\u0338":"nrarrc","\u2935":"cudarrr","\u2936":"ldca","\u2937":"rdca","\u2938":"cudarrl","\u2939":"larrpl","\u293c":"curarrm","\u293d":"cularrp","\u2945":"rarrpl","\u2948":"harrcir","\u2949":"Uarrocir","\u294a":"lurdshar","\u294b":"ldrushar","\u294e":"LeftRightVector","\u294f":"RightUpDownVector",
"\u2950":"DownLeftRightVector","\u2951":"LeftUpDownVector","\u2952":"LeftVectorBar","\u2953":"RightVectorBar","\u2954":"RightUpVectorBar","\u2955":"RightDownVectorBar","\u2956":"DownLeftVectorBar","\u2957":"DownRightVectorBar","\u2958":"LeftUpVectorBar","\u2959":"LeftDownVectorBar","\u295a":"LeftTeeVector","\u295b":"RightTeeVector","\u295c":"RightUpTeeVector","\u295d":"RightDownTeeVector","\u295e":"DownLeftTeeVector","\u295f":"DownRightTeeVector","\u2960":"LeftUpTeeVector","\u2961":"LeftDownTeeVector",
"\u2962":"lHar","\u2963":"uHar","\u2964":"rHar","\u2965":"dHar","\u2966":"luruhar","\u2967":"ldrdhar","\u2968":"ruluhar","\u2969":"rdldhar","\u296a":"lharul","\u296b":"llhard","\u296c":"rharul","\u296d":"lrhard","\u296e":"udhar","\u296f":"duhar","\u2970":"RoundImplies","\u2971":"erarr","\u2972":"simrarr","\u2973":"larrsim","\u2974":"rarrsim","\u2975":"rarrap","\u2976":"ltlarr","\u2978":"gtrarr","\u2979":"subrarr","\u297b":"suplarr","\u297c":"lfisht","\u297d":"rfisht","\u297e":"ufisht","\u297f":"dfisht",
"\u299a":"vzigzag","\u299c":"vangrt","\u299d":"angrtvbd","\u29a4":"ange","\u29a5":"range","\u29a6":"dwangle","\u29a7":"uwangle","\u29a8":"angmsdaa","\u29a9":"angmsdab","\u29aa":"angmsdac","\u29ab":"angmsdad","\u29ac":"angmsdae","\u29ad":"angmsdaf","\u29ae":"angmsdag","\u29af":"angmsdah","\u29b0":"bemptyv","\u29b1":"demptyv","\u29b2":"cemptyv","\u29b3":"raemptyv","\u29b4":"laemptyv","\u29b5":"ohbar","\u29b6":"omid","\u29b7":"opar","\u29b9":"operp","\u29bb":"olcross","\u29bc":"odsold","\u29be":"olcir",
"\u29bf":"ofcir","\u29c0":"olt","\u29c1":"ogt","\u29c2":"cirscir","\u29c3":"cirE","\u29c4":"solb","\u29c5":"bsolb","\u29c9":"boxbox","\u29cd":"trisb","\u29ce":"rtriltri","\u29cf":"LeftTriangleBar","\u29cf\u0338":"NotLeftTriangleBar","\u29d0":"RightTriangleBar","\u29d0\u0338":"NotRightTriangleBar","\u29dc":"iinfin","\u29dd":"infintie","\u29de":"nvinfin","\u29e3":"eparsl","\u29e4":"smeparsl","\u29e5":"eqvparsl","\u29eb":"lozf","\u29f4":"RuleDelayed","\u29f6":"dsol","\u2a00":"xodot","\u2a01":"xoplus",
"\u2a02":"xotime","\u2a04":"xuplus","\u2a06":"xsqcup","\u2a0d":"fpartint","\u2a10":"cirfnint","\u2a11":"awint","\u2a12":"rppolint","\u2a13":"scpolint","\u2a14":"npolint","\u2a15":"pointint","\u2a16":"quatint","\u2a17":"intlarhk","\u2a22":"pluscir","\u2a23":"plusacir","\u2a24":"simplus","\u2a25":"plusdu","\u2a26":"plussim","\u2a27":"plustwo","\u2a29":"mcomma","\u2a2a":"minusdu","\u2a2d":"loplus","\u2a2e":"roplus","\u2a2f":"Cross","\u2a30":"timesd","\u2a31":"timesbar","\u2a33":"smashp","\u2a34":"lotimes",
"\u2a35":"rotimes","\u2a36":"otimesas","\u2a37":"Otimes","\u2a38":"odiv","\u2a39":"triplus","\u2a3a":"triminus","\u2a3b":"tritime","\u2a3c":"iprod","\u2a3f":"amalg","\u2a40":"capdot","\u2a42":"ncup","\u2a43":"ncap","\u2a44":"capand","\u2a45":"cupor","\u2a46":"cupcap","\u2a47":"capcup","\u2a48":"cupbrcap","\u2a49":"capbrcup","\u2a4a":"cupcup","\u2a4b":"capcap","\u2a4c":"ccups","\u2a4d":"ccaps","\u2a50":"ccupssm","\u2a53":"And","\u2a54":"Or","\u2a55":"andand","\u2a56":"oror","\u2a57":"orslope","\u2a58":"andslope",
"\u2a5a":"andv","\u2a5b":"orv","\u2a5c":"andd","\u2a5d":"ord","\u2a5f":"wedbar","\u2a66":"sdote","\u2a6a":"simdot","\u2a6d":"congdot","\u2a6d\u0338":"ncongdot","\u2a6e":"easter","\u2a6f":"apacir","\u2a70":"apE","\u2a70\u0338":"napE","\u2a71":"eplus","\u2a72":"pluse","\u2a73":"Esim","\u2a77":"eDDot","\u2a78":"equivDD","\u2a79":"ltcir","\u2a7a":"gtcir","\u2a7b":"ltquest","\u2a7c":"gtquest","\u2a7d":"les","\u2a7d\u0338":"nles","\u2a7e":"ges","\u2a7e\u0338":"nges","\u2a7f":"lesdot","\u2a80":"gesdot",
"\u2a81":"lesdoto","\u2a82":"gesdoto","\u2a83":"lesdotor","\u2a84":"gesdotol","\u2a85":"lap","\u2a86":"gap","\u2a87":"lne","\u2a88":"gne","\u2a89":"lnap","\u2a8a":"gnap","\u2a8b":"lEg","\u2a8c":"gEl","\u2a8d":"lsime","\u2a8e":"gsime","\u2a8f":"lsimg","\u2a90":"gsiml","\u2a91":"lgE","\u2a92":"glE","\u2a93":"lesges","\u2a94":"gesles","\u2a95":"els","\u2a96":"egs","\u2a97":"elsdot","\u2a98":"egsdot","\u2a99":"el","\u2a9a":"eg","\u2a9d":"siml","\u2a9e":"simg","\u2a9f":"simlE","\u2aa0":"simgE","\u2aa1":"LessLess",
"\u2aa1\u0338":"NotNestedLessLess","\u2aa2":"GreaterGreater","\u2aa2\u0338":"NotNestedGreaterGreater","\u2aa4":"glj","\u2aa5":"gla","\u2aa6":"ltcc","\u2aa7":"gtcc","\u2aa8":"lescc","\u2aa9":"gescc","\u2aaa":"smt","\u2aab":"lat","\u2aac":"smte","\u2aac\ufe00":"smtes","\u2aad":"late","\u2aad\ufe00":"lates","\u2aae":"bumpE","\u2aaf":"pre","\u2aaf\u0338":"npre","\u2ab0":"sce","\u2ab0\u0338":"nsce","\u2ab3":"prE","\u2ab4":"scE","\u2ab5":"prnE","\u2ab6":"scnE","\u2ab7":"prap","\u2ab8":"scap","\u2ab9":"prnap",
"\u2aba":"scnap","\u2abb":"Pr","\u2abc":"Sc","\u2abd":"subdot","\u2abe":"supdot","\u2abf":"subplus","\u2ac0":"supplus","\u2ac1":"submult","\u2ac2":"supmult","\u2ac3":"subedot","\u2ac4":"supedot","\u2ac5":"subE","\u2ac5\u0338":"nsubE","\u2ac6":"supE","\u2ac6\u0338":"nsupE","\u2ac7":"subsim","\u2ac8":"supsim","\u2acb\ufe00":"vsubnE","\u2acb":"subnE","\u2acc\ufe00":"vsupnE","\u2acc":"supnE","\u2acf":"csub","\u2ad0":"csup","\u2ad1":"csube","\u2ad2":"csupe","\u2ad3":"subsup","\u2ad4":"supsub","\u2ad5":"subsub",
"\u2ad6":"supsup","\u2ad7":"suphsub","\u2ad8":"supdsub","\u2ad9":"forkv","\u2ada":"topfork","\u2adb":"mlcp","\u2ae4":"Dashv","\u2ae6":"Vdashl","\u2ae7":"Barv","\u2ae8":"vBar","\u2ae9":"vBarv","\u2aeb":"Vbar","\u2aec":"Not","\u2aed":"bNot","\u2aee":"rnmid","\u2aef":"cirmid","\u2af0":"midcir","\u2af1":"topcir","\u2af2":"nhpar","\u2af3":"parsim","\u2afd":"parsl","\u2afd\u20e5":"nparsl","\u266d":"flat","\u266e":"natur","\u266f":"sharp","\u00a4":"curren","\u00a2":"cent",$:"dollar","\u00a3":"pound","\u00a5":"yen",
"\u20ac":"euro","\u00b9":"sup1","\u00bd":"half","\u2153":"frac13","\u00bc":"frac14","\u2155":"frac15","\u2159":"frac16","\u215b":"frac18","\u00b2":"sup2","\u2154":"frac23","\u2156":"frac25","\u00b3":"sup3","\u00be":"frac34","\u2157":"frac35","\u215c":"frac38","\u2158":"frac45","\u215a":"frac56","\u215d":"frac58","\u215e":"frac78","\ud835\udcb6":"ascr","\ud835\udd52":"aopf","\ud835\udd1e":"afr","\ud835\udd38":"Aopf","\ud835\udd04":"Afr","\ud835\udc9c":"Ascr","\u00aa":"ordf","\u00e1":"aacute","\u00c1":"Aacute",
"\u00e0":"agrave","\u00c0":"Agrave","\u0103":"abreve","\u0102":"Abreve","\u00e2":"acirc","\u00c2":"Acirc","\u00e5":"aring","\u00c5":"angst","\u00e4":"auml","\u00c4":"Auml","\u00e3":"atilde","\u00c3":"Atilde","\u0105":"aogon","\u0104":"Aogon","\u0101":"amacr","\u0100":"Amacr","\u00e6":"aelig","\u00c6":"AElig","\ud835\udcb7":"bscr","\ud835\udd53":"bopf","\ud835\udd1f":"bfr","\ud835\udd39":"Bopf","\u212c":"Bscr","\ud835\udd05":"Bfr","\ud835\udd20":"cfr","\ud835\udcb8":"cscr","\ud835\udd54":"copf","\u212d":"Cfr",
"\ud835\udc9e":"Cscr","\u2102":"Copf","\u0107":"cacute","\u0106":"Cacute","\u0109":"ccirc","\u0108":"Ccirc","\u010d":"ccaron","\u010c":"Ccaron","\u010b":"cdot","\u010a":"Cdot","\u00e7":"ccedil","\u00c7":"Ccedil","\u2105":"incare","\ud835\udd21":"dfr","\u2146":"dd","\ud835\udd55":"dopf","\ud835\udcb9":"dscr","\ud835\udc9f":"Dscr","\ud835\udd07":"Dfr","\u2145":"DD","\ud835\udd3b":"Dopf","\u010f":"dcaron","\u010e":"Dcaron","\u0111":"dstrok","\u0110":"Dstrok","\u00f0":"eth","\u00d0":"ETH","\u2147":"ee",
"\u212f":"escr","\ud835\udd22":"efr","\ud835\udd56":"eopf","\u2130":"Escr","\ud835\udd08":"Efr","\ud835\udd3c":"Eopf","\u00e9":"eacute","\u00c9":"Eacute","\u00e8":"egrave","\u00c8":"Egrave","\u00ea":"ecirc","\u00ca":"Ecirc","\u011b":"ecaron","\u011a":"Ecaron","\u00eb":"euml","\u00cb":"Euml","\u0117":"edot","\u0116":"Edot","\u0119":"eogon","\u0118":"Eogon","\u0113":"emacr","\u0112":"Emacr","\ud835\udd23":"ffr","\ud835\udd57":"fopf","\ud835\udcbb":"fscr","\ud835\udd09":"Ffr","\ud835\udd3d":"Fopf","\u2131":"Fscr",
"\ufb00":"fflig","\ufb03":"ffilig","\ufb04":"ffllig","\ufb01":"filig",fj:"fjlig","\ufb02":"fllig","\u0192":"fnof","\u210a":"gscr","\ud835\udd58":"gopf","\ud835\udd24":"gfr","\ud835\udca2":"Gscr","\ud835\udd3e":"Gopf","\ud835\udd0a":"Gfr","\u01f5":"gacute","\u011f":"gbreve","\u011e":"Gbreve","\u011d":"gcirc","\u011c":"Gcirc","\u0121":"gdot","\u0120":"Gdot","\u0122":"Gcedil","\ud835\udd25":"hfr","\u210e":"planckh","\ud835\udcbd":"hscr","\ud835\udd59":"hopf","\u210b":"Hscr","\u210c":"Hfr","\u210d":"Hopf",
"\u0125":"hcirc","\u0124":"Hcirc","\u210f":"hbar","\u0127":"hstrok","\u0126":"Hstrok","\ud835\udd5a":"iopf","\ud835\udd26":"ifr","\ud835\udcbe":"iscr","\u2148":"ii","\ud835\udd40":"Iopf","\u2110":"Iscr","\u2111":"Im","\u00ed":"iacute","\u00cd":"Iacute","\u00ec":"igrave","\u00cc":"Igrave","\u00ee":"icirc","\u00ce":"Icirc","\u00ef":"iuml","\u00cf":"Iuml","\u0129":"itilde","\u0128":"Itilde","\u0130":"Idot","\u012f":"iogon","\u012e":"Iogon","\u012b":"imacr","\u012a":"Imacr","\u0133":"ijlig","\u0132":"IJlig",
"\u0131":"imath","\ud835\udcbf":"jscr","\ud835\udd5b":"jopf","\ud835\udd27":"jfr","\ud835\udca5":"Jscr","\ud835\udd0d":"Jfr","\ud835\udd41":"Jopf","\u0135":"jcirc","\u0134":"Jcirc","\u0237":"jmath","\ud835\udd5c":"kopf","\ud835\udcc0":"kscr","\ud835\udd28":"kfr","\ud835\udca6":"Kscr","\ud835\udd42":"Kopf","\ud835\udd0e":"Kfr","\u0137":"kcedil","\u0136":"Kcedil","\ud835\udd29":"lfr","\ud835\udcc1":"lscr","\u2113":"ell","\ud835\udd5d":"lopf","\u2112":"Lscr","\ud835\udd0f":"Lfr","\ud835\udd43":"Lopf",
"\u013a":"lacute","\u0139":"Lacute","\u013e":"lcaron","\u013d":"Lcaron","\u013c":"lcedil","\u013b":"Lcedil","\u0142":"lstrok","\u0141":"Lstrok","\u0140":"lmidot","\u013f":"Lmidot","\ud835\udd2a":"mfr","\ud835\udd5e":"mopf","\ud835\udcc2":"mscr","\ud835\udd10":"Mfr","\ud835\udd44":"Mopf","\u2133":"Mscr","\ud835\udd2b":"nfr","\ud835\udd5f":"nopf","\ud835\udcc3":"nscr","\u2115":"Nopf","\ud835\udca9":"Nscr","\ud835\udd11":"Nfr","\u0144":"nacute","\u0143":"Nacute","\u0148":"ncaron","\u0147":"Ncaron","\u00f1":"ntilde",
"\u00d1":"Ntilde","\u0146":"ncedil","\u0145":"Ncedil","\u2116":"numero","\u014b":"eng","\u014a":"ENG","\ud835\udd60":"oopf","\ud835\udd2c":"ofr","\u2134":"oscr","\ud835\udcaa":"Oscr","\ud835\udd12":"Ofr","\ud835\udd46":"Oopf","\u00ba":"ordm","\u00f3":"oacute","\u00d3":"Oacute","\u00f2":"ograve","\u00d2":"Ograve","\u00f4":"ocirc","\u00d4":"Ocirc","\u00f6":"ouml","\u00d6":"Ouml","\u0151":"odblac","\u0150":"Odblac","\u00f5":"otilde","\u00d5":"Otilde","\u00f8":"oslash","\u00d8":"Oslash","\u014d":"omacr",
"\u014c":"Omacr","\u0153":"oelig","\u0152":"OElig","\ud835\udd2d":"pfr","\ud835\udcc5":"pscr","\ud835\udd61":"popf","\u2119":"Popf","\ud835\udd13":"Pfr","\ud835\udcab":"Pscr","\ud835\udd62":"qopf","\ud835\udd2e":"qfr","\ud835\udcc6":"qscr","\ud835\udcac":"Qscr","\ud835\udd14":"Qfr","\u211a":"Qopf","\u0138":"kgreen","\ud835\udd2f":"rfr","\ud835\udd63":"ropf","\ud835\udcc7":"rscr","\u211b":"Rscr","\u211c":"Re","\u211d":"Ropf","\u0155":"racute","\u0154":"Racute","\u0159":"rcaron","\u0158":"Rcaron","\u0157":"rcedil",
"\u0156":"Rcedil","\ud835\udd64":"sopf","\ud835\udcc8":"sscr","\ud835\udd30":"sfr","\ud835\udd4a":"Sopf","\ud835\udd16":"Sfr","\ud835\udcae":"Sscr","\u24c8":"oS","\u015b":"sacute","\u015a":"Sacute","\u015d":"scirc","\u015c":"Scirc","\u0161":"scaron","\u0160":"Scaron","\u015f":"scedil","\u015e":"Scedil","\u00df":"szlig","\ud835\udd31":"tfr","\ud835\udcc9":"tscr","\ud835\udd65":"topf","\ud835\udcaf":"Tscr","\ud835\udd17":"Tfr","\ud835\udd4b":"Topf","\u0165":"tcaron","\u0164":"Tcaron","\u0163":"tcedil",
"\u0162":"Tcedil","\u2122":"trade","\u0167":"tstrok","\u0166":"Tstrok","\ud835\udcca":"uscr","\ud835\udd66":"uopf","\ud835\udd32":"ufr","\ud835\udd4c":"Uopf","\ud835\udd18":"Ufr","\ud835\udcb0":"Uscr","\u00fa":"uacute","\u00da":"Uacute","\u00f9":"ugrave","\u00d9":"Ugrave","\u016d":"ubreve","\u016c":"Ubreve","\u00fb":"ucirc","\u00db":"Ucirc","\u016f":"uring","\u016e":"Uring","\u00fc":"uuml","\u00dc":"Uuml","\u0171":"udblac","\u0170":"Udblac","\u0169":"utilde","\u0168":"Utilde","\u0173":"uogon","\u0172":"Uogon",
"\u016b":"umacr","\u016a":"Umacr","\ud835\udd33":"vfr","\ud835\udd67":"vopf","\ud835\udccb":"vscr","\ud835\udd19":"Vfr","\ud835\udd4d":"Vopf","\ud835\udcb1":"Vscr","\ud835\udd68":"wopf","\ud835\udccc":"wscr","\ud835\udd34":"wfr","\ud835\udcb2":"Wscr","\ud835\udd4e":"Wopf","\ud835\udd1a":"Wfr","\u0175":"wcirc","\u0174":"Wcirc","\ud835\udd35":"xfr","\ud835\udccd":"xscr","\ud835\udd69":"xopf","\ud835\udd4f":"Xopf","\ud835\udd1b":"Xfr","\ud835\udcb3":"Xscr","\ud835\udd36":"yfr","\ud835\udcce":"yscr",
"\ud835\udd6a":"yopf","\ud835\udcb4":"Yscr","\ud835\udd1c":"Yfr","\ud835\udd50":"Yopf","\u00fd":"yacute","\u00dd":"Yacute","\u0177":"ycirc","\u0176":"Ycirc","\u00ff":"yuml","\u0178":"Yuml","\ud835\udccf":"zscr","\ud835\udd37":"zfr","\ud835\udd6b":"zopf","\u2128":"Zfr","\u2124":"Zopf","\ud835\udcb5":"Zscr","\u017a":"zacute","\u0179":"Zacute","\u017e":"zcaron","\u017d":"Zcaron","\u017c":"zdot","\u017b":"Zdot","\u01b5":"imped","\u00fe":"thorn","\u00de":"THORN","\u0149":"napos","\u03b1":"alpha","\u0391":"Alpha",
"\u03b2":"beta","\u0392":"Beta","\u03b3":"gamma","\u0393":"Gamma","\u03b4":"delta","\u0394":"Delta","\u03b5":"epsi","\u03f5":"epsiv","\u0395":"Epsilon","\u03dd":"gammad","\u03dc":"Gammad","\u03b6":"zeta","\u0396":"Zeta","\u03b7":"eta","\u0397":"Eta","\u03b8":"theta","\u03d1":"thetav","\u0398":"Theta","\u03b9":"iota","\u0399":"Iota","\u03ba":"kappa","\u03f0":"kappav","\u039a":"Kappa","\u03bb":"lambda","\u039b":"Lambda","\u03bc":"mu","\u00b5":"micro","\u039c":"Mu","\u03bd":"nu","\u039d":"Nu","\u03be":"xi",
"\u039e":"Xi","\u03bf":"omicron","\u039f":"Omicron","\u03c0":"pi","\u03d6":"piv","\u03a0":"Pi","\u03c1":"rho","\u03f1":"rhov","\u03a1":"Rho","\u03c3":"sigma","\u03a3":"Sigma","\u03c2":"sigmaf","\u03c4":"tau","\u03a4":"Tau","\u03c5":"upsi","\u03a5":"Upsilon","\u03d2":"Upsi","\u03c6":"phi","\u03d5":"phiv","\u03a6":"Phi","\u03c7":"chi","\u03a7":"Chi","\u03c8":"psi","\u03a8":"Psi","\u03c9":"omega","\u03a9":"ohm","\u0430":"acy","\u0410":"Acy","\u0431":"bcy","\u0411":"Bcy","\u0432":"vcy","\u0412":"Vcy",
"\u0433":"gcy","\u0413":"Gcy","\u0453":"gjcy","\u0403":"GJcy","\u0434":"dcy","\u0414":"Dcy","\u0452":"djcy","\u0402":"DJcy","\u0435":"iecy","\u0415":"IEcy","\u0451":"iocy","\u0401":"IOcy","\u0454":"jukcy","\u0404":"Jukcy","\u0436":"zhcy","\u0416":"ZHcy","\u0437":"zcy","\u0417":"Zcy","\u0455":"dscy","\u0405":"DScy","\u0438":"icy","\u0418":"Icy","\u0456":"iukcy","\u0406":"Iukcy","\u0457":"yicy","\u0407":"YIcy","\u0439":"jcy","\u0419":"Jcy","\u0458":"jsercy","\u0408":"Jsercy","\u043a":"kcy","\u041a":"Kcy",
"\u045c":"kjcy","\u040c":"KJcy","\u043b":"lcy","\u041b":"Lcy","\u0459":"ljcy","\u0409":"LJcy","\u043c":"mcy","\u041c":"Mcy","\u043d":"ncy","\u041d":"Ncy","\u045a":"njcy","\u040a":"NJcy","\u043e":"ocy","\u041e":"Ocy","\u043f":"pcy","\u041f":"Pcy","\u0440":"rcy","\u0420":"Rcy","\u0441":"scy","\u0421":"Scy","\u0442":"tcy","\u0422":"Tcy","\u045b":"tshcy","\u040b":"TSHcy","\u0443":"ucy","\u0423":"Ucy","\u045e":"ubrcy","\u040e":"Ubrcy","\u0444":"fcy","\u0424":"Fcy","\u0445":"khcy","\u0425":"KHcy","\u0446":"tscy",
"\u0426":"TScy","\u0447":"chcy","\u0427":"CHcy","\u045f":"dzcy","\u040f":"DZcy","\u0448":"shcy","\u0428":"SHcy","\u0449":"shchcy","\u0429":"SHCHcy","\u044a":"hardcy","\u042a":"HARDcy","\u044b":"ycy","\u042b":"Ycy","\u044c":"softcy","\u042c":"SOFTcy","\u044d":"ecy","\u042d":"Ecy","\u044e":"yucy","\u042e":"YUcy","\u044f":"yacy","\u042f":"YAcy","\u2135":"aleph","\u2136":"beth","\u2137":"gimel","\u2138":"daleth"},t=/["&'<>`]/g,I={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},
J=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,K=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,L=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
M={aacute:"\u00e1",Aacute:"\u00c1",abreve:"\u0103",Abreve:"\u0102",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",acirc:"\u00e2",Acirc:"\u00c2",acute:"\u00b4",acy:"\u0430",Acy:"\u0410",aelig:"\u00e6",AElig:"\u00c6",af:"\u2061",afr:"\ud835\udd1e",Afr:"\ud835\udd04",agrave:"\u00e0",Agrave:"\u00c0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03b1",Alpha:"\u0391",amacr:"\u0101",Amacr:"\u0100",amalg:"\u2a3f",amp:"&",AMP:"&",and:"\u2227",And:"\u2a53",andand:"\u2a55",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",
ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsd:"\u2221",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\u00c5",angzarr:"\u237c",aogon:"\u0105",Aogon:"\u0104",aopf:"\ud835\udd52",Aopf:"\ud835\udd38",ap:"\u2248",apacir:"\u2a6f",ape:"\u224a",apE:"\u2a70",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",
aring:"\u00e5",Aring:"\u00c5",ascr:"\ud835\udcb6",Ascr:"\ud835\udc9c",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",atilde:"\u00e3",Atilde:"\u00c3",auml:"\u00e4",Auml:"\u00c4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",bcy:"\u0431",Bcy:"\u0411",bdquo:"\u201e",becaus:"\u2235",
because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",beta:"\u03b2",Beta:"\u0392",beth:"\u2136",between:"\u226c",bfr:"\ud835\udd1f",Bfr:"\ud835\udd05",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",
blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bnot:"\u2310",bNot:"\u2aed",bopf:"\ud835\udd53",Bopf:"\ud835\udd39",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxhD:"\u2565",
boxHd:"\u2564",boxHD:"\u2566",boxhu:"\u2534",boxhU:"\u2568",boxHu:"\u2567",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",
Breve:"\u02d8",brvbar:"\u00a6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsol:"\\",bsolb:"\u29c5",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpe:"\u224f",bumpE:"\u2aae",bumpeq:"\u224f",Bumpeq:"\u224e",cacute:"\u0107",Cacute:"\u0106",cap:"\u2229",Cap:"\u22d2",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",
ccaron:"\u010d",Ccaron:"\u010c",ccedil:"\u00e7",Ccedil:"\u00c7",ccirc:"\u0109",Ccirc:"\u0108",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",cdot:"\u010b",Cdot:"\u010a",cedil:"\u00b8",Cedilla:"\u00b8",cemptyv:"\u29b2",cent:"\u00a2",centerdot:"\u00b7",CenterDot:"\u00b7",cfr:"\ud835\udd20",Cfr:"\u212d",chcy:"\u0447",CHcy:"\u0427",check:"\u2713",checkmark:"\u2713",chi:"\u03c7",Chi:"\u03a7",cir:"\u25cb",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",
circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\u00ae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cire:"\u2257",cirE:"\u29c3",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",colone:"\u2254",Colone:"\u2a74",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",
complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\u00a9",COPY:"\u00a9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",cscr:"\ud835\udcb8",Cscr:"\ud835\udc9e",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",
cularr:"\u21b6",cularrp:"\u293d",cup:"\u222a",Cup:"\u22d3",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\u00a4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",dArr:"\u21d3",
Darr:"\u21a1",dash:"\u2010",dashv:"\u22a3",Dashv:"\u2ae4",dbkarow:"\u290f",dblac:"\u02dd",dcaron:"\u010f",Dcaron:"\u010e",dcy:"\u0434",Dcy:"\u0414",dd:"\u2146",DD:"\u2145",ddagger:"\u2021",ddarr:"\u21ca",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\u00b0",Del:"\u2207",delta:"\u03b4",Delta:"\u0394",demptyv:"\u29b1",dfisht:"\u297f",dfr:"\ud835\udd21",Dfr:"\ud835\udd07",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\u00b4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",
DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\u00a8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\u00f7",divide:"\u00f7",divideontimes:"\u22c7",divonx:"\u22c7",djcy:"\u0452",DJcy:"\u0402",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",dopf:"\ud835\udd55",Dopf:"\ud835\udd3b",dot:"\u02d9",Dot:"\u00a8",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",
doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\u00a8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",downarrow:"\u2193",Downarrow:"\u21d3",DownArrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21f5",
DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVector:"\u21bd",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295f",DownRightVector:"\u21c1",DownRightVectorBar:"\u2957",DownTee:"\u22a4",DownTeeArrow:"\u21a7",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",dscr:"\ud835\udcb9",Dscr:"\ud835\udc9f",dscy:"\u0455",DScy:"\u0405",dsol:"\u29f6",dstrok:"\u0111",Dstrok:"\u0110",dtdot:"\u22f1",dtri:"\u25bf",
dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",dzcy:"\u045f",DZcy:"\u040f",dzigrarr:"\u27ff",eacute:"\u00e9",Eacute:"\u00c9",easter:"\u2a6e",ecaron:"\u011b",Ecaron:"\u011a",ecir:"\u2256",ecirc:"\u00ea",Ecirc:"\u00ca",ecolon:"\u2255",ecy:"\u044d",Ecy:"\u042d",eDDot:"\u2a77",edot:"\u0117",eDot:"\u2251",Edot:"\u0116",ee:"\u2147",efDot:"\u2252",efr:"\ud835\udd22",Efr:"\ud835\udd08",eg:"\u2a9a",egrave:"\u00e8",Egrave:"\u00c8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",
ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",emacr:"\u0113",Emacr:"\u0112",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp:"\u2003",emsp13:"\u2004",emsp14:"\u2005",eng:"\u014b",ENG:"\u014a",ensp:"\u2002",eogon:"\u0119",Eogon:"\u0118",eopf:"\ud835\udd56",Eopf:"\ud835\udd3c",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",epsilon:"\u03b5",Epsilon:"\u0395",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",
eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",esim:"\u2242",Esim:"\u2a73",eta:"\u03b7",Eta:"\u0397",eth:"\u00f0",ETH:"\u00d0",euml:"\u00eb",Euml:"\u00cb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",fcy:"\u0444",Fcy:"\u0424",
female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",ffr:"\ud835\udd23",Ffr:"\ud835\udd09",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",fopf:"\ud835\udd57",Fopf:"\ud835\udd3d",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\u00bd",frac13:"\u2153",frac14:"\u00bc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",
frac34:"\u00be",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",gamma:"\u03b3",Gamma:"\u0393",gammad:"\u03dd",Gammad:"\u03dc",gap:"\u2a86",gbreve:"\u011f",Gbreve:"\u011e",Gcedil:"\u0122",gcirc:"\u011d",Gcirc:"\u011c",gcy:"\u0433",Gcy:"\u0413",gdot:"\u0121",Gdot:"\u0120",ge:"\u2265",gE:"\u2267",gel:"\u22db",gEl:"\u2a8c",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",ges:"\u2a7e",
gescc:"\u2aa9",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",gfr:"\ud835\udd24",Gfr:"\ud835\udd0a",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",gjcy:"\u0453",GJcy:"\u0403",gl:"\u2277",gla:"\u2aa5",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",gopf:"\ud835\udd58",Gopf:"\ud835\udd3e",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",
GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",gscr:"\u210a",Gscr:"\ud835\udca2",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gt:">",Gt:"\u226b",GT:">",gtcc:"\u2aa7",gtcir:"\u2a7a",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\u00bd",hamilt:"\u210b",hardcy:"\u044a",HARDcy:"\u042a",
harr:"\u2194",hArr:"\u21d4",harrcir:"\u2948",harrw:"\u21ad",Hat:"^",hbar:"\u210f",hcirc:"\u0125",Hcirc:"\u0124",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",hstrok:"\u0127",Hstrok:"\u0126",
HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",iacute:"\u00ed",Iacute:"\u00cd",ic:"\u2063",icirc:"\u00ee",Icirc:"\u00ce",icy:"\u0438",Icy:"\u0418",Idot:"\u0130",iecy:"\u0435",IEcy:"\u0415",iexcl:"\u00a1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",igrave:"\u00ec",Igrave:"\u00cc",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",ijlig:"\u0133",IJlig:"\u0132",Im:"\u2111",imacr:"\u012b",Imacr:"\u012a",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",
imagpart:"\u2111",imath:"\u0131",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2","in":"\u2208",incare:"\u2105",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131","int":"\u222b",Int:"\u222c",intcal:"\u22ba",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",iocy:"\u0451",IOcy:"\u0401",iogon:"\u012f",Iogon:"\u012e",iopf:"\ud835\udd5a",Iopf:"\ud835\udd40",iota:"\u03b9",Iota:"\u0399",iprod:"\u2a3c",
iquest:"\u00bf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",itilde:"\u0129",Itilde:"\u0128",iukcy:"\u0456",Iukcy:"\u0406",iuml:"\u00ef",Iuml:"\u00cf",jcirc:"\u0135",Jcirc:"\u0134",jcy:"\u0439",Jcy:"\u0419",jfr:"\ud835\udd27",Jfr:"\ud835\udd0d",jmath:"\u0237",jopf:"\ud835\udd5b",Jopf:"\ud835\udd41",jscr:"\ud835\udcbf",Jscr:"\ud835\udca5",jsercy:"\u0458",Jsercy:"\u0408",jukcy:"\u0454",Jukcy:"\u0404",kappa:"\u03ba",
Kappa:"\u039a",kappav:"\u03f0",kcedil:"\u0137",Kcedil:"\u0136",kcy:"\u043a",Kcy:"\u041a",kfr:"\ud835\udd28",Kfr:"\ud835\udd0e",kgreen:"\u0138",khcy:"\u0445",KHcy:"\u0425",kjcy:"\u045c",KJcy:"\u040c",kopf:"\ud835\udd5c",Kopf:"\ud835\udd42",kscr:"\ud835\udcc0",Kscr:"\ud835\udca6",lAarr:"\u21da",lacute:"\u013a",Lacute:"\u0139",laemptyv:"\u29b4",lagran:"\u2112",lambda:"\u03bb",Lambda:"\u039b",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\u00ab",larr:"\u2190",
lArr:"\u21d0",Larr:"\u219e",larrb:"\u21e4",larrbfs:"\u291f",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",lat:"\u2aab",latail:"\u2919",lAtail:"\u291b",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",lcaron:"\u013e",Lcaron:"\u013d",lcedil:"\u013c",Lcedil:"\u013b",lceil:"\u2308",lcub:"{",lcy:"\u043b",Lcy:"\u041b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",
ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",leftarrow:"\u2190",Leftarrow:"\u21d0",LeftArrow:"\u2190",LeftArrowBar:"\u21e4",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21c3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",Leftrightarrow:"\u21d4",LeftRightArrow:"\u2194",
leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTee:"\u22a3",LeftTeeArrow:"\u21a4",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangle:"\u22b2",LeftTriangleBar:"\u29cf",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21bf",LeftUpVectorBar:"\u2958",LeftVector:"\u21bc",LeftVectorBar:"\u2952",leg:"\u22da",lEg:"\u2a8b",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",les:"\u2a7d",lescc:"\u2aa8",
lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",lfr:"\ud835\udd29",Lfr:"\ud835\udd0f",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",ljcy:"\u0459",
LJcy:"\u0409",ll:"\u226a",Ll:"\u22d8",llarr:"\u21c7",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",lmidot:"\u0140",Lmidot:"\u013f",lmoust:"\u23b0",lmoustache:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",Longleftarrow:"\u27f8",LongLeftArrow:"\u27f5",longleftrightarrow:"\u27f7",Longleftrightarrow:"\u27fa",LongLeftRightArrow:"\u27f7",longmapsto:"\u27fc",
longrightarrow:"\u27f6",Longrightarrow:"\u27f9",LongRightArrow:"\u27f6",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",lopf:"\ud835\udd5d",Lopf:"\ud835\udd43",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",
Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",lstrok:"\u0142",Lstrok:"\u0141",lt:"<",Lt:"\u226a",LT:"<",ltcc:"\u2aa6",ltcir:"\u2a79",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\u00af",male:"\u2642",malt:"\u2720",maltese:"\u2720",map:"\u21a6",Map:"\u2905",mapsto:"\u21a6",
mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",mcy:"\u043c",Mcy:"\u041c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",mfr:"\ud835\udd2a",Mfr:"\ud835\udd10",mho:"\u2127",micro:"\u00b5",mid:"\u2223",midast:"*",midcir:"\u2af0",middot:"\u00b7",minus:"\u2212",minusb:"\u229f",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",mopf:"\ud835\udd5e",Mopf:"\ud835\udd44",
mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",mu:"\u03bc",Mu:"\u039c",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",nacute:"\u0144",Nacute:"\u0143",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natur:"\u266e",natural:"\u266e",naturals:"\u2115",nbsp:"\u00a0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",ncaron:"\u0148",Ncaron:"\u0147",ncedil:"\u0146",Ncedil:"\u0145",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",
ncy:"\u043d",Ncy:"\u041d",ndash:"\u2013",ne:"\u2260",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",nfr:"\ud835\udd2b",Nfr:"\ud835\udd11",nge:"\u2271",ngE:"\u2267\u0338",ngeq:"\u2271",ngeqq:"\u2267\u0338",
ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",ngt:"\u226f",nGt:"\u226b\u20d2",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",njcy:"\u045a",NJcy:"\u040a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nle:"\u2270",nlE:"\u2266\u0338",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",
nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nlt:"\u226e",nLt:"\u226a\u20d2",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\u00a0",nopf:"\ud835\udd5f",Nopf:"\u2115",not:"\u00ac",Not:"\u2aec",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",
NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangle:"\u22ea",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",
NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangle:"\u22eb",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",
NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",npar:"\u2226",nparallel:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",npre:"\u2aaf\u0338",nprec:"\u2280",npreceq:"\u2aaf\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrc:"\u2933\u0338",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",
nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",nscr:"\ud835\udcc3",Nscr:"\ud835\udca9",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsube:"\u2288",nsubE:"\u2ac5\u0338",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupe:"\u2289",nsupE:"\u2ac6\u0338",nsupset:"\u2283\u20d2",
nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",ntilde:"\u00f1",Ntilde:"\u00d1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",nu:"\u03bd",Nu:"\u039d",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",
nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",oacute:"\u00f3",Oacute:"\u00d3",oast:"\u229b",ocir:"\u229a",ocirc:"\u00f4",Ocirc:"\u00d4",ocy:"\u043e",Ocy:"\u041e",odash:"\u229d",odblac:"\u0151",Odblac:"\u0150",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",oelig:"\u0153",OElig:"\u0152",ofcir:"\u29bf",ofr:"\ud835\udd2c",Ofr:"\ud835\udd12",ogon:"\u02db",ograve:"\u00f2",Ograve:"\u00d2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",
olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",omacr:"\u014d",Omacr:"\u014c",omega:"\u03c9",Omega:"\u03a9",omicron:"\u03bf",Omicron:"\u039f",omid:"\u29b6",ominus:"\u2296",oopf:"\ud835\udd60",Oopf:"\ud835\udd46",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",or:"\u2228",Or:"\u2a54",orarr:"\u21bb",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\u00aa",ordm:"\u00ba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",
oS:"\u24c8",oscr:"\u2134",Oscr:"\ud835\udcaa",oslash:"\u00f8",Oslash:"\u00d8",osol:"\u2298",otilde:"\u00f5",Otilde:"\u00d5",otimes:"\u2297",Otimes:"\u2a37",otimesas:"\u2a36",ouml:"\u00f6",Ouml:"\u00d6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",par:"\u2225",para:"\u00b6",parallel:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",pcy:"\u043f",Pcy:"\u041f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",
pfr:"\ud835\udd2d",Pfr:"\ud835\udd13",phi:"\u03c6",Phi:"\u03a6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",pi:"\u03c0",Pi:"\u03a0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plus:"+",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\u00b1",plusmn:"\u00b1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\u00b1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\u00a3",pr:"\u227a",
Pr:"\u2abb",prap:"\u2ab7",prcue:"\u227c",pre:"\u2aaf",prE:"\u2ab3",prec:"\u227a",precapprox:"\u2ab7",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportion:"\u2237",
Proportional:"\u221d",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",pscr:"\ud835\udcc5",Pscr:"\ud835\udcab",psi:"\u03c8",Psi:"\u03a8",puncsp:"\u2008",qfr:"\ud835\udd2e",Qfr:"\ud835\udd14",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",qscr:"\ud835\udcc6",Qscr:"\ud835\udcac",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",racute:"\u0155",Racute:"\u0154",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",
rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\u00bb",rarr:"\u2192",rArr:"\u21d2",Rarr:"\u21a0",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21a3",Rarrtl:"\u2916",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",rcaron:"\u0159",
Rcaron:"\u0158",rcedil:"\u0157",Rcedil:"\u0156",rceil:"\u2309",rcub:"}",rcy:"\u0440",Rcy:"\u0420",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",Re:"\u211c",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",rect:"\u25ad",reg:"\u00ae",REG:"\u00ae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",rho:"\u03c1",
Rho:"\u03a1",rhov:"\u03f1",RightAngleBracket:"\u27e9",rightarrow:"\u2192",Rightarrow:"\u21d2",RightArrow:"\u2192",RightArrowBar:"\u21e5",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVector:"\u21c2",RightDownVectorBar:"\u2955",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTee:"\u22a2",
RightTeeArrow:"\u21a6",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangle:"\u22b3",RightTriangleBar:"\u29d0",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVector:"\u21be",RightUpVectorBar:"\u2954",RightVector:"\u21c0",RightVectorBar:"\u2953",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoust:"\u23b1",rmoustache:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",
Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",sacute:"\u015b",Sacute:"\u015a",sbquo:"\u201a",sc:"\u227b",Sc:"\u2abc",scap:"\u2ab8",scaron:"\u0161",
Scaron:"\u0160",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",scedil:"\u015f",Scedil:"\u015e",scirc:"\u015d",Scirc:"\u015c",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",scy:"\u0441",Scy:"\u0421",sdot:"\u22c5",sdotb:"\u22a1",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\u00a7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",sfr:"\ud835\udd30",Sfr:"\ud835\udd16",sfrown:"\u2322",sharp:"\u266f",shchcy:"\u0449",
SHCHcy:"\u0429",shcy:"\u0448",SHcy:"\u0428",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\u00ad",sigma:"\u03c3",Sigma:"\u03a3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",
smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",softcy:"\u044c",SOFTcy:"\u042c",sol:"/",solb:"\u29c4",solbar:"\u233f",sopf:"\ud835\udd64",Sopf:"\ud835\udd4a",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",squ:"\u25a1",square:"\u25a1",Square:"\u25a1",
SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squf:"\u25aa",srarr:"\u2192",sscr:"\ud835\udcc8",Sscr:"\ud835\udcae",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",star:"\u2606",Star:"\u22c6",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\u00af",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",sube:"\u2286",subE:"\u2ac5",subedot:"\u2ac3",submult:"\u2ac1",subne:"\u228a",
subnE:"\u2acb",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succ:"\u227b",succapprox:"\u2ab8",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",
sung:"\u266a",sup:"\u2283",Sup:"\u22d1",sup1:"\u00b9",sup2:"\u00b2",sup3:"\u00b3",supdot:"\u2abe",supdsub:"\u2ad8",supe:"\u2287",supE:"\u2ac6",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supne:"\u228b",supnE:"\u2acc",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",
swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\u00df",Tab:"\t",target:"\u2316",tau:"\u03c4",Tau:"\u03a4",tbrk:"\u23b4",tcaron:"\u0165",Tcaron:"\u0164",tcedil:"\u0163",Tcedil:"\u0162",tcy:"\u0442",Tcy:"\u0422",tdot:"\u20db",telrec:"\u2315",tfr:"\ud835\udd31",Tfr:"\ud835\udd17",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",theta:"\u03b8",Theta:"\u0398",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",thinsp:"\u2009",ThinSpace:"\u2009",
thkap:"\u2248",thksim:"\u223c",thorn:"\u00fe",THORN:"\u00de",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",times:"\u00d7",timesb:"\u22a0",timesbar:"\u2a31",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",top:"\u22a4",topbot:"\u2336",topcir:"\u2af1",topf:"\ud835\udd65",Topf:"\ud835\udd4b",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",
triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",tscr:"\ud835\udcc9",Tscr:"\ud835\udcaf",tscy:"\u0446",TScy:"\u0426",tshcy:"\u045b",TSHcy:"\u040b",tstrok:"\u0167",Tstrok:"\u0166",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",uacute:"\u00fa",Uacute:"\u00da",uarr:"\u2191",uArr:"\u21d1",Uarr:"\u219f",Uarrocir:"\u2949",ubrcy:"\u045e",Ubrcy:"\u040e",
ubreve:"\u016d",Ubreve:"\u016c",ucirc:"\u00fb",Ucirc:"\u00db",ucy:"\u0443",Ucy:"\u0423",udarr:"\u21c5",udblac:"\u0171",Udblac:"\u0170",udhar:"\u296e",ufisht:"\u297e",ufr:"\ud835\udd32",Ufr:"\ud835\udd18",ugrave:"\u00f9",Ugrave:"\u00d9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",umacr:"\u016b",Umacr:"\u016a",uml:"\u00a8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",
uogon:"\u0173",Uogon:"\u0172",uopf:"\ud835\udd66",Uopf:"\ud835\udd4c",uparrow:"\u2191",Uparrow:"\u21d1",UpArrow:"\u2191",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",Updownarrow:"\u21d5",UpDownArrow:"\u2195",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",upsilon:"\u03c5",Upsilon:"\u03a5",UpTee:"\u22a5",UpTeeArrow:"\u21a5",upuparrows:"\u21c8",urcorn:"\u231d",
urcorner:"\u231d",urcrop:"\u230e",uring:"\u016f",Uring:"\u016e",urtri:"\u25f9",uscr:"\ud835\udcca",Uscr:"\ud835\udcb0",utdot:"\u22f0",utilde:"\u0169",Utilde:"\u0168",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",uuml:"\u00fc",Uuml:"\u00dc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",
varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",vcy:"\u0432",Vcy:"\u0412",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",vee:"\u2228",Vee:"\u22c1",veebar:"\u22bb",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",vfr:"\ud835\udd33",Vfr:"\ud835\udd19",
vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",vopf:"\ud835\udd67",Vopf:"\ud835\udd4d",vprop:"\u221d",vrtri:"\u22b3",vscr:"\ud835\udccb",Vscr:"\ud835\udcb1",vsubne:"\u228a\ufe00",vsubnE:"\u2acb\ufe00",vsupne:"\u228b\ufe00",vsupnE:"\u2acc\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",wcirc:"\u0175",Wcirc:"\u0174",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",wfr:"\ud835\udd34",Wfr:"\ud835\udd1a",wopf:"\ud835\udd68",Wopf:"\ud835\udd4e",wp:"\u2118",wr:"\u2240",wreath:"\u2240",
wscr:"\ud835\udccc",Wscr:"\ud835\udcb2",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",xfr:"\ud835\udd35",Xfr:"\ud835\udd1b",xharr:"\u27f7",xhArr:"\u27fa",xi:"\u03be",Xi:"\u039e",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",xopf:"\ud835\udd69",Xopf:"\ud835\udd4f",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",xscr:"\ud835\udccd",Xscr:"\ud835\udcb3",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",yacute:"\u00fd",Yacute:"\u00dd",
yacy:"\u044f",YAcy:"\u042f",ycirc:"\u0177",Ycirc:"\u0176",ycy:"\u044b",Ycy:"\u042b",yen:"\u00a5",yfr:"\ud835\udd36",Yfr:"\ud835\udd1c",yicy:"\u0457",YIcy:"\u0407",yopf:"\ud835\udd6a",Yopf:"\ud835\udd50",yscr:"\ud835\udcce",Yscr:"\ud835\udcb4",yucy:"\u044e",YUcy:"\u042e",yuml:"\u00ff",Yuml:"\u0178",zacute:"\u017a",Zacute:"\u0179",zcaron:"\u017e",Zcaron:"\u017d",zcy:"\u0437",Zcy:"\u0417",zdot:"\u017c",Zdot:"\u017b",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",zeta:"\u03b6",Zeta:"\u0396",zfr:"\ud835\udd37",
Zfr:"\u2128",zhcy:"\u0436",ZHcy:"\u0416",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",zscr:"\ud835\udccf",Zscr:"\ud835\udcb5",zwj:"\u200d",zwnj:"\u200c"},N={aacute:"\u00e1",Aacute:"\u00c1",acirc:"\u00e2",Acirc:"\u00c2",acute:"\u00b4",aelig:"\u00e6",AElig:"\u00c6",agrave:"\u00e0",Agrave:"\u00c0",amp:"&",AMP:"&",aring:"\u00e5",Aring:"\u00c5",atilde:"\u00e3",Atilde:"\u00c3",auml:"\u00e4",Auml:"\u00c4",brvbar:"\u00a6",ccedil:"\u00e7",Ccedil:"\u00c7",cedil:"\u00b8",cent:"\u00a2",copy:"\u00a9",COPY:"\u00a9",
curren:"\u00a4",deg:"\u00b0",divide:"\u00f7",eacute:"\u00e9",Eacute:"\u00c9",ecirc:"\u00ea",Ecirc:"\u00ca",egrave:"\u00e8",Egrave:"\u00c8",eth:"\u00f0",ETH:"\u00d0",euml:"\u00eb",Euml:"\u00cb",frac12:"\u00bd",frac14:"\u00bc",frac34:"\u00be",gt:">",GT:">",iacute:"\u00ed",Iacute:"\u00cd",icirc:"\u00ee",Icirc:"\u00ce",iexcl:"\u00a1",igrave:"\u00ec",Igrave:"\u00cc",iquest:"\u00bf",iuml:"\u00ef",Iuml:"\u00cf",laquo:"\u00ab",lt:"<",LT:"<",macr:"\u00af",micro:"\u00b5",middot:"\u00b7",nbsp:"\u00a0",not:"\u00ac",
ntilde:"\u00f1",Ntilde:"\u00d1",oacute:"\u00f3",Oacute:"\u00d3",ocirc:"\u00f4",Ocirc:"\u00d4",ograve:"\u00f2",Ograve:"\u00d2",ordf:"\u00aa",ordm:"\u00ba",oslash:"\u00f8",Oslash:"\u00d8",otilde:"\u00f5",Otilde:"\u00d5",ouml:"\u00f6",Ouml:"\u00d6",para:"\u00b6",plusmn:"\u00b1",pound:"\u00a3",quot:'"',QUOT:'"',raquo:"\u00bb",reg:"\u00ae",REG:"\u00ae",sect:"\u00a7",shy:"\u00ad",sup1:"\u00b9",sup2:"\u00b2",sup3:"\u00b3",szlig:"\u00df",thorn:"\u00fe",THORN:"\u00de",times:"\u00d7",uacute:"\u00fa",Uacute:"\u00da",
ucirc:"\u00fb",Ucirc:"\u00db",ugrave:"\u00f9",Ugrave:"\u00d9",uml:"\u00a8",uuml:"\u00fc",Uuml:"\u00dc",yacute:"\u00fd",Yacute:"\u00dd",yen:"\u00a5",yuml:"\u00ff"},z={0:"\ufffd",128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",
158:"\u017e",159:"\u0178"},A=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65E3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,
393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],B=String.fromCharCode,p={}.hasOwnProperty,C=function(a,c){if(!a)return c;var e={},b;for(b in c)e[b]=p.call(a,b)?a[b]:c[b];return e},D=function(a,c){var e="";if(55296<=a&&57343>=a||1114111<a)return c&&f("character reference outside the permissible Unicode range"),"\ufffd";if(p.call(z,a))return c&&f("disallowed character reference"),z[a];
var b;if(b=c)a:{b=-1;for(var g=A.length;++b<g;)if(A[b]==a){b=!0;break a}b=!1}b&&f("disallowed character reference");65535<a&&(a-=65536,e+=B(a>>>10&1023|55296),a=56320|a&1023);return e+=B(a)},O=function(a){return"&#x"+a.toString(16).toUpperCase()+";"},P=function(a){return"&#"+a+";"},f=function(a){throw Error("Parse error: "+a);},u=function(a,c){c=C(c,u.options);c.strict&&K.test(a)&&f("forbidden code point");var e=c.useNamedReferences,b=c.allowUnsafeSymbols,g=c.decimal?P:O,h=function(d){return g(d.charCodeAt(0))};
c.encodeEverything?(a=a.replace(G,function(d){return e&&p.call(m,d)?"&"+m[d]+";":h(d)}),e&&(a=a.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),e&&(a=a.replace(y,function(d){return"&"+m[d]+";"}))):e?(b||(a=a.replace(t,function(d){return"&"+m[d]+";"})),a=a.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;"),a=a.replace(y,function(d){return"&"+m[d]+";"})):b||(a=a.replace(t,h));return a.replace(F,function(d){var q=d.charCodeAt(0);d=d.charCodeAt(1);
return g(1024*(q-55296)+d-56320+65536)}).replace(H,h)};u.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1};var r=function(a,c){c=C(c,r.options);var e=c.strict;e&&J.test(a)&&f("malformed character reference");return a.replace(L,function(b,g,h,d,q,Q,E,R,S){if(g)return M[g];if(h){if(d&&c.isAttributeValue)return e&&"="==d&&f("`&` did not start a character reference"),b;e&&f("named character reference was not terminated by a semicolon");return N[h]+(d||"")}if(q)return e&&
!Q&&f("character reference was not terminated by a semicolon"),b=parseInt(q,10),D(b,e);if(E)return e&&!R&&f("character reference was not terminated by a semicolon"),b=parseInt(E,16),D(b,e);e&&f("named character reference was not terminated by a semicolon");return b})};r.options={isAttributeValue:!1,strict:!1};var k={version:"1.2.0",encode:u,decode:r,escape:function(a){return a.replace(t,function(c){return I[c]})},unescape:r};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return k});
else if(n&&!n.nodeType)if(x)x.exports=k;else for(var v in k)p.call(k,v)&&(n[v]=k[v]);else w.he=k})(this);

var CM_Tooltip = {};
var CMTT_Footnote = {};

/*
 *
 * @use jQuery
 * @use document
 * @param {type} opts
 * @returns {CM_Tooltip.gtooltip.methods}
 */
CM_Tooltip.gtooltip = function (opts) {
    "use strict";
    var currentElement, tooltipWrapper, tooltipWrapperInit, tooltipTop, tooltipContainer, tooltipBottom, tooltipButtonClose, h, w, id, alpha, tooltipApi, closeButtonClicked, tooltipWrapperClicked;

    tooltipWrapper = null;
    tooltipWrapperInit = null;
    id = 'tt';
    alpha = 0;

    tooltipApi = {
        create: function (switchElement) {
            closeButtonClicked = false;
            tooltipWrapperClicked = false;
            if (tooltipWrapperInit === 1) {
                return;
            }
            tooltipWrapper = document.getElementById(id);
            if (tooltipWrapper === null) {
                tooltipWrapper = document.createElement('div');
            }
            jQuery(tooltipWrapper).html(''); //reset the content if it's there

            tooltipWrapper.setAttribute('id', id);
            tooltipWrapper.setAttribute('role', 'tooltip');
            tooltipWrapper.setAttribute('aria-hidden', true);
            tooltipWrapper.setAttribute('aria-label', 'Tooltip wrapper');

            tooltipTop = document.createElement('div');
            tooltipTop.setAttribute('id', id + 'top');

            tooltipContainer = document.createElement('div');
            tooltipContainer.setAttribute('id', id + 'cont');
            tooltipContainer.style.padding = opts.padding;
            tooltipContainer.style.backgroundColor = opts.background;
            tooltipContainer.style.color = opts.foreground;
            tooltipContainer.style.borderWidth = opts.borderWidth;
            tooltipContainer.style.borderStyle = opts.borderStyle;
            tooltipContainer.style.borderColor = opts.borderColor;
            tooltipContainer.style.borderRadius = opts.borderRadius;
            tooltipContainer.style.fontSize = opts.fontSize;

            tooltipBottom = document.createElement('div');
            tooltipBottom.setAttribute('id', id + 'bot');

            if (opts.close_button !== false && ((opts.close_button_mobile === true && CM_Tools.Modernizr.touch) || opts.close_button_mobile === false)) {
                tooltipButtonClose = document.createElement('span');
                tooltipButtonClose.setAttribute('id', id + '-btn-close');
                tooltipButtonClose.setAttribute('class', 'dashicons ' + opts.close_symbol);
                tooltipButtonClose.setAttribute('aria-label', 'Close the tooltip');
                tooltipTop.appendChild(tooltipButtonClose);

                /*
                 * Always register event if the button was added
                 */
                jQuery(tooltipWrapper).on('click touchstart', function (e) {
                    var tooltipVisible = jQuery('#tt').is(':visible');
                    var audioLinkClicked = 'A' === e.target.tagName && jQuery(e.target).parents('.cmtt-audio-player').length >= 1;
                    closeButtonClicked = jQuery(e.target).attr('id') === 'tt-btn-close';
                    if (tooltipVisible && !audioLinkClicked && closeButtonClicked) {
                        tooltipApi.hide();
                    }
                });
            }
            tooltipWrapper.appendChild(tooltipTop);
            tooltipWrapper.appendChild(tooltipContainer);
            tooltipWrapper.appendChild(tooltipBottom);

            document.body.appendChild(tooltipWrapper);

            tooltipWrapper.style.opacity = 0;
            tooltipWrapper.style.filter = 'alpha(opacity=0)';

            /*
             * Options for when tooltip should be clickable 
             */
            if (opts.clickable !== false) {
                jQuery(tooltipWrapper).on('mouseover', function () {
                    clearTimeout(CM_Tooltip.timeoutId);
                    if (closeButtonClicked) {
                        clearTimeout(CM_Tooltip.delayId);
                        tooltipWrapper.style.display = 'none';
                    }
                    if (jQuery(this).is(':animated') && !closeButtonClicked) {
                        //animation effects
                        jQuery(tooltipWrapper).removeClass('force-hide');
                        jQuery(tooltipWrapper).removeClass('flipOutY');
                        jQuery(tooltipWrapper).removeClass('zoomOut');
                        jQuery(tooltipWrapper).removeClass('fadeOut');
                        tooltipWrapper.style.opacity = opts.endalpha / 100;
                        if (opts.tooltipDisplayanimation === 'no_animation') {
                            tooltipWrapper.style.display = 'block';
                        } else if (opts.tooltipDisplayanimation === 'fade_in') {
                            jQuery(tooltipWrapper).addClass('fadeIn');
                        } else if (opts.tooltipDisplayanimation === 'grow') {
                            jQuery(tooltipWrapper).addClass('zoomIn');
                        } else if (opts.tooltipDisplayanimation === 'horizontal_flip') {
                            jQuery(tooltipWrapper).addClass('flipInY');
                        } else if (opts.tooltipDisplayanimation === 'center_flip') {
                        } else {
                            jQuery(this).stop().fadeTo(opts.timer, (opts.endalpha / 100)).show();
                        }
                    }
                });

                jQuery(document).keyup(function (e) {
                    if (e.keyCode === 27) { // escape key maps to keycode `27`
                        tooltipApi.hide();
                    }
                });

                if (opts.close_on_moveout) {
                    jQuery(tooltipWrapper).on('mouseleave', function () {
                        clearTimeout(CM_Tooltip.delayId);
                        if (!jQuery(this).is(':animated')) {
                            tooltipApi.hide();
                        }
                    });
                }
            } else {
                /*
                 * If tooltip is not clickable, move it with the mouse movement
                 */
                document.onmousemove = this.pos;
            }

            /*
             * Hide tooltip on touching anywhere in the body (outside of tt)
             * When: 
             * "Close tooltips only on button click?" is NOT selected
             * "Close tooltips on touch outside?" is selected
             */
            if (opts.touch_anywhere && !opts.only_on_button) {
                jQuery('body').on('click touchstart', function (e) {
                    tooltipWrapperClicked = jQuery(e.target).parents('#tt').length;
                    var tooltipVisible = jQuery('#tt').is(':visible');
                    if (tooltipVisible && !tooltipWrapperClicked) {
                        tooltipApi.hide();
                    }
                });
            }

            /*
             * Link the whole tooltip to the glossary term page
             */
            if (opts.link_whole_tt) {
                tooltipWrapper.style.cursor="pointer";
                jQuery('body').on('click touchstart', function (e) {
                    tooltipWrapperClicked = jQuery(e.target).parents('#tt').length;
                    var tooltipVisible = jQuery('#tt').is(':visible');
                    var isLink = typeof currentElement !== 'undefined' && null !== currentElement && currentElement.tagName === 'A';
                    if (tooltipVisible && tooltipWrapperClicked && isLink) {
                        CM_Tooltip.redirecting = true;
                        window.location = currentElement.href;
                    }
                });
            }

            /*
             * This ensures that init runs only one time
             */
            tooltipWrapperInit = 1;
        },
        show: function (content, switchElement) {
            /*
             * Create the tooltip
             */
            this.create(switchElement);
            clearTimeout(CM_Tooltip.timeoutId);

            currentElement = switchElement;
            
            /*
             * Restore to 'sane' values in case they were set too low
             * (to avoid glitches/tooltip malfunction)
             */
            if(opts.top < 5){
                opts.top = 5;
            }
            if(opts.left < 5){
                opts.left = 5;
            }
            if(opts.endalpha < 10){
                opts.endalpha = 95;
            }

            CM_Tooltip.delayId = setTimeout(function () {
                if (switchElement && jQuery(switchElement).hasClass('transparent')) {
                    tooltipContainer.style.backgroundColor = 'transparent';
                } else {
                    tooltipContainer.style.backgroundColor = opts.background;
                }

                tooltipContainer.innerHTML = content;

                CM_Tooltip.parseAudioPlayer();

                tooltipWrapper.style.display = 'block';
                tooltipWrapper.style.width = 'auto';
                tooltipWrapper.style.maxWidth = opts.maxw + 'px';
                tooltipWrapper.setAttribute('aria-hidden', false);

                h = parseInt(tooltipWrapper.offsetHeight, 10) + opts.top;
                //center flip issue
                if (opts.tooltipDisplayanimation === 'center_flip' || opts.tooltipHideanimation === 'center_flip') {

                    var urlNew = jQuery(document.location);
                    var paramsNew = new URL(urlNew[0]['href']).searchParams.get('disable_tooltips');

                    var $tt = jQuery('#tt');
                    if ($tt.hasClass('no-in')) {
                        $tt.css({'display': 'block'});
                        $tt.removeClass('out');
                    } else {
                        if (paramsNew === 1) {
                            jQuery('#tt').remove();
                        }
                        $tt.addClass('in');
                        $tt.removeClass('out');
                    }
                }
                jQuery(tooltipWrapper).removeClass('force-hide');
                jQuery(tooltipWrapper).removeClass('flipOutY');
                jQuery(tooltipWrapper).removeClass('zoomOut');
                jQuery(tooltipWrapper).removeClass('fadeOut');
                tooltipWrapper.style.opacity = opts.endalpha / 100;
                if (opts.tooltipDisplayanimation === 'no_animation') {
                    tooltipWrapper.style.display = 'block';
                    jQuery(tooltipWrapper).stop().fadeTo(opts.timer, (opts.endalpha / 100));
                } else if (opts.tooltipDisplayanimation === 'fade_in') {
                    jQuery(tooltipWrapper).addClass('fadeIn');
                } else if (opts.tooltipDisplayanimation === 'grow') {
                    jQuery(tooltipWrapper).addClass('zoomIn');
                } else if (opts.tooltipDisplayanimation === 'horizontal_flip') {
                    jQuery(tooltipWrapper).addClass('flipInY');
                } else if (opts.tooltipDisplayanimation === 'center_flip') {
                } else {
                    jQuery(tooltipWrapper).stop().fadeTo(opts.timer, (opts.endalpha / 100));
                }
            }, opts.delay);
        },
        pos: function (e) {
            /*
             * If wrapper not ready - bail
             */
            if(typeof tooltipWrapper === 'undefined' || null === tooltipWrapper){
                return;
            }
            /*
             * Common part
             */
            var u, l, topShift, leftShift, screenWidth, screenHeight, horizontalOffscreen, verticalOffscreenBot, verticalOffscreenTop, fullWidth = false;
            h = parseInt(tooltipWrapper.offsetHeight, 10) + opts.top;
            w = parseInt(tooltipWrapper.offsetWidth, 10) + opts.top;

            var tooltipVisible = jQuery('#tt').is(':visible');
            if (!tooltipVisible) {
                return;
            }

            if (typeof e.pageX === 'undefined' && e.type === 'touchstart') {
                u = e.originalEvent.touches[0].pageY;
                l = e.originalEvent.touches[0].pageX;
            } else if (e.type === 'focusin') {
                return;
            } else {
                u = e.pageY;
                l = e.pageX;
            }

            /*
             * Move the tooltip element right after the element which invoked tooltip
             */
            if (opts.toolip_dom_move && typeof e.target !== 'undefined') {
                e.target.after(tooltipWrapper);
                u = e.target.offsetTop + opts.top;
                l = e.target.offsetLeft + opts.left;
            }
            
            if ('vertical' === opts.placement) {

                jQuery(tooltipWrapper).removeClass('vertical_bottom');
                jQuery(tooltipWrapper).removeClass('vertical_top');

                topShift = (u + opts.top + 10);
                leftShift = (l - w) > 28 ? (l - w / 2) : 28;

                screenWidth = jQuery(window).width();

                tooltipWrapper.style.right = 'none';
                tooltipWrapper.style.left = 'none';

                /*
                 * Check the vertical offscreen
                 */
                screenHeight = jQuery(window).height();

                var docViewTop = jQuery(window).scrollTop();
                var docViewBottom = docViewTop + screenHeight;

                var elemTop = topShift;
                var elemBottom = elemTop + h;

                if (jQuery('#wpadminbar').length)
                {
                    docViewTop += jQuery('#wpadminbar').height();
                }

                verticalOffscreenBot = elemBottom > docViewBottom;

                if (verticalOffscreenBot)
                {
                    topShift = (u - opts.top - h);
                    verticalOffscreenTop = topShift < docViewTop;
                    if (verticalOffscreenTop)
                    {
                        topShift = elemTop;
                        jQuery(tooltipWrapper).addClass('vertical_top');
                    } else {
                        jQuery(tooltipWrapper).addClass('vertical_bottom');
                    }
                } else {
                    jQuery(tooltipWrapper).addClass('vertical_top');
                }

                tooltipWrapper.style.top = topShift + 'px';

                /*
                 * Check the horizontal offscreen
                 */

                horizontalOffscreen = (screenWidth - leftShift) < opts.minw;

                if (horizontalOffscreen)
                {
                    tooltipWrapper.style.width = 'auto';
                    tooltipWrapper.style.left = null;
                    tooltipWrapper.style.right = 0 + 'px';
                    /*
                     * Recalculate the height
                     */
                    h = parseInt(tooltipWrapper.offsetHeight, 10) + opts.top;
                    fullWidth = true;
                    topShift -= h / 2 + 10;
                } else
                {
                    tooltipWrapper.style.width = 'auto';
                    tooltipWrapper.style.left = leftShift + 'px';
                    tooltipWrapper.style.right = null;
                }
            } else {
                topShift = (u - h) > 28 ? (u - h / 2) : 28;
                leftShift = (l + opts.left - 5);
                screenWidth = jQuery(window).width();

                tooltipWrapper.style.right = 'none';
                tooltipWrapper.style.left = 'none';

                /*
                 * Check the vertical offscreen
                 */

                horizontalOffscreen = (screenWidth - leftShift) < opts.minw;

                if (horizontalOffscreen)
                {
                    tooltipWrapper.style.width = 'auto';
                    tooltipWrapper.style.left = null;
                    tooltipWrapper.style.right = 0 + 'px';
                    /*
                     * Recalculate the height
                     */
                    h = parseInt(tooltipWrapper.offsetHeight, 10) + opts.top;
                    fullWidth = true;
                    topShift -= h / 2 + 10;
                } else
                {
                    tooltipWrapper.style.width = 'auto';
                    tooltipWrapper.style.left = leftShift + 'px';
                    tooltipWrapper.style.right = null;
                }

                /*
                 * Check the vertical offscreen
                 */
                screenHeight = jQuery(window).height();

                var docViewTop = jQuery(window).scrollTop();
                var docViewBottom = docViewTop + screenHeight;

                var elemTop = topShift;
                var elemBottom = elemTop + h;

                if (jQuery('#wpadminbar').length)
                {
                    docViewTop += jQuery('#wpadminbar').height();
                }

                verticalOffscreenBot = elemBottom > docViewBottom;
                verticalOffscreenTop = elemTop < docViewTop;

                if (verticalOffscreenBot)
                {
                    topShift -= ((elemBottom - docViewBottom) + 1);
                }
                if (verticalOffscreenTop)
                {
                    if (fullWidth)
                    {
                        topShift += h + 20;
                    } else
                    {
                        topShift += ((docViewTop - elemTop) + 1);
                    }
                }

                tooltipWrapper.style.top = topShift + 'px';
            }

            /*
             * If the tooltip has to be clickable we have to turnoff it's repositioning 'feature'
             */
            if (opts.clickable) {
                document.onmousemove = null;
            }
            /*
             * Touch devices should not fire this
             */
            if (CM_Tools.Modernizr.touch)
            {
                document.onmousemove = null;
            }
        },
        hide: function () {
            if (!tooltipWrapperInit) {
                return;
            }
            currentElement = null;
            tooltipWrapper.setAttribute('aria-hidden', true);
            //animation effects
            if (opts.tooltipDisplayanimation === 'center_flip' || opts.tooltipHideanimation === 'center_flip') {

                if (jQuery('#tt').hasClass('no-out')) {
                    jQuery('#tt').addClass('temp');
                    jQuery('#tt').removeClass('in');
                } else {
                    var url = jQuery(document.location);
                    var params = new URL(url[0]['href']).searchParams.get('disable_tooltips')

                    if (params == 1) {
                        jQuery('#tt').remove()
                    } else {
                        // console.log('show');
                    }

                    jQuery('#tt').addClass('out');
                    jQuery('#tt').removeClass('in');
                }
            }
            jQuery(tooltipWrapper).removeClass('flipInY');
            jQuery(tooltipWrapper).removeClass('zoomIn');
            jQuery(tooltipWrapper).removeClass('fadeIn');
            jQuery(tooltipWrapper).removeClass('tooltip-bloated-content');
            if (opts.tooltipHideanimation === 'no_animation') {
                jQuery(tooltipWrapper).addClass('force-hide');
                tooltipWrapper.style.display = 'none !important';
                jQuery(tooltipWrapper).stop().fadeOut(opts.timer).fadeTo(0, 0).css('top', '-9999px').css('left', '-9999px').css('display', 'none');
            } else if (opts.tooltipHideanimation == 'fade_out') {
                jQuery(tooltipWrapper).addClass('fadeOut');
            } else if (opts.tooltipHideanimation == 'shrink') {
                jQuery(tooltipWrapper).addClass('zoomOut');
            } else if (opts.tooltipHideanimation == 'horizontal_flip') {
                jQuery(tooltipWrapper).addClass('flipOutY');
            } else if (opts.tooltipHideanimation == 'center_flip') {

            } else {
                jQuery(tooltipWrapper).stop().fadeOut(opts.timer).fadeTo(0, 0).css('top', '-9999px').css('left', '-9999px').css('display', 'none');
            }
            jQuery('#tt audio').each(function () {
                this.pause(); // Stop playing
                this.currentTime = 0; // Reset time
            });

            CM_Tooltip.timeoutId = setTimeout(function () {
                jQuery(tooltipWrapper).stop().fadeOut(opts.timer).fadeTo(0, 0).css('top', '-9999px').css('left', '-9999px').css('display', 'none');
            }, opts.timer);

            jQuery('#tt iframe').remove();
        }
    };
    return tooltipApi;
};

CM_Tooltip.glossaryTip = null;

/*
 * Inside this closure we use $ instead of jQuery in case jQuery is reinitialized again before document.ready()
 */
(function ($) {
    "use strict";
    $.fn.glossaryTooltip = function (options) {
        var decoder, opts = {
            top: 3,
            left: 23,
            maxw: 400,
            minw: 200,
            speed: 10,
            timer: 500,
            delay: 500,
            endalpha: 95,
            borderStyle: 'none',
            borderWidth: '0px',
            borderColor: '#000',
            borderRadius: '6px',
            padding: '2px 12px 3px 7px',
            clickable: true,
            close_button: false,
            close_button_mobile: true,
            only_on_button: false,
            close_on_moveout: true,
            touch_anywhere: false,
            placement: 'horizontal',
            toolip_dom_move: false,
            link_whole_tt: true
        };
        opts = $.extend({}, opts, options);
        CM_Tooltip.glossaryTip = CM_Tooltip.gtooltip(opts);

        if (this.length)
        {
            if (this[0].tagName === 'A' && CM_Tools.Modernizr.touch)
            {
                $(document).on('click', '[data-cmtooltip]', function (e) {
                    e.preventDefault();
                });
            }

            opts.mobile = 0;

            if(typeof he !== 'undefined'){
                decoder = he;
            } else {
                decoder = exports;
            }
                    
            return this.each(function () {
                var tooltipContent, tooltipContentMaybeHash, $inputCopy;

                tooltipContentMaybeHash = $(this).data('cmtooltip');
                if (typeof window.cmtt_data.cmtooltip_definitions !== 'undefined' && typeof window.cmtt_data.cmtooltip_definitions[tooltipContentMaybeHash] !== 'undefined') {
                    tooltipContent = jQuery('<div>' + window.cmtt_data.cmtooltip_definitions[tooltipContentMaybeHash] + '</div>').html();
                    $(this).data('cmtooltip',tooltipContent);
                } else {
                    /*
                     * Changed in 4.0.4 - required for Elementor to work and to display images and links properly
                     */
                    tooltipContent = decoder.decode(tooltipContentMaybeHash);
                }

                if (this.tagName === 'A' && CM_Tools.Modernizr.touch)
                {
                    opts.mobile = 1;
                    /*
                     * Add link at the bottom of the tooltip
                     */
                    if (window.cmtt_data !== undefined && window.cmtt_data.mobile_support === "1") {
                        $inputCopy = $(this).clone();
                        $inputCopy.removeAttr('data-cmtooltip');
                        tooltipContent += $('<div class="mobile-link"/>').append($inputCopy)[0].outerHTML;
                    }

                    /*
                     * Proper support for touch devices
                     */
                    $(this).on('touchstart', function (e) {
                        CM_Tooltip.glossaryTip.show(tooltipContent, this);

                        setTimeout(function () {
                            CM_Tooltip.glossaryTip.pos(e);
                        }, opts.delay + 100);
                    });

                    $(this).on('touchmove', function (e) {
                        e.preventDefault();
                        return false;
                    });

                    /*
                     * Support for touch+mouse devices
                     */
                    $(this).on('click', function (e) {
                        CM_Tooltip.glossaryTip.show(tooltipContent, this);
                        setTimeout(function () {
                            CM_Tooltip.glossaryTip.pos(e);
                        }, opts.delay + 100);
                        return false;
                    });
                } else {
                    /*
                     * Display tooltips on click and not on hover
                     */
                    if (window.cmtt_data !== undefined && window.cmtt_data.tooltip_on_click === "1") {
                        $(this).on('click', function (e) {
                            CM_Tooltip.glossaryTip.show(tooltipContent, this);
                            setTimeout(function () {
                                CM_Tooltip.glossaryTip.pos(e);
                            }, opts.delay + 100);
                            return false;
                        });
                    } else {
                        /*
                         * Display tooltips on hover
                         */
                        $(this).on('mouseenter focusin', function (e) {
                            clearTimeout(CM_Tooltip.timeoutId);
                            CM_Tooltip.timeoutId = false;
                            CM_Tooltip.glossaryTip.show(tooltipContent, this);
                            setTimeout(function () {
                                CM_Tooltip.glossaryTip.pos(e);
                            }, opts.delay + 100);
                        }).on('mouseleave focusout', function () {
                            //Additional protection for event being doubled
                            if (opts.close_on_moveout && !CM_Tooltip.timeoutId) {
                                clearTimeout(CM_Tooltip.delayId);
                                CM_Tooltip.timeoutId = setTimeout(function () {
                                    CM_Tooltip.glossaryTip.hide();
                                }, opts.timer);
                            }
                        });
                    }
                }
            });
        }
    };

    $(function () {

        setTimeout(function () {
            $(document).trigger('glossaryTooltipReady');
        }, 5);

        $(document).ajaxComplete(function (event, xhr, options) {
            if (typeof window.cmtt_data.exclude_ajax !== 'undefined') {
                var reg = new RegExp(window.cmtt_data.exclude_ajax, 'g');
                var is_excluded = reg.test(options.data);
                if (!is_excluded) {
                    setTimeout(function () {
                        $(document).trigger('glossaryTooltipReady');
                    }, 1000);
                }
            }
        });

        $(document).on("ninja_table_loaded", function () {
            $(document).trigger('glossaryTooltipReady');
        });

        $(document).on("glossaryTooltipReady", function () {
            if (window.cmtt_data !== undefined && window.cmtt_data.cmtooltip) {

                /*
                 * Mobile detected and tooltips hidden
                 */
                if (CM_Tools.Modernizr.touch && window.cmtt_data.mobile_disable_tooltips === "1") {
                    return;
                }

                /*
                 * Disable tooltips on desktops
                 */
                if (!CM_Tools.Modernizr.touch && window.cmtt_data.desktop_disable_tooltips === "1") {
                    return;
                }

                if (window.cmtt_data !== undefined && window.cmtt_data.tooltip_on_click === "1") {
                    /*
                     * If tooltips are opened onclick they have to be clickable
                     */
                    window.cmtt_data.cmtooltip.clickable = true;
                }

                if(CM_Tools.Modernizr.touch){
                    /*
                     * If tooltips are opened on a touch device they have to be clickable
                     */
                    window.cmtt_data.cmtooltip.clickable = true;
                }
                /*
                 * Initialize the tooltips
                 */
                $("[data-cmtooltip]").glossaryTooltip(window.cmtt_data.cmtooltip);
            }
        });

        $(document).on('change', 'select[name="cmtt-language-switch"]', function (e) {
            e.preventDefault();

            var value = $(e.target).val();
            var data = {
                action: 'cmtt_switch_language',
                language: value,
                post_id: window.cmtt_data.post_id,
                nonce: window.cmtt_data.nonce_language_switch
            };

            $.ajax({
                url: window.cmtt_data.ajaxurl,
                method: 'POST',
                data: data,
                success: function () {
                    window.location.reload();
                },
                error: function (err) {
                    console.log(err);
                }
            });
        });

        /*
         * CM Glossary Theme toggle
         */
        $(document).on('click', 'a.cmtt-glossary-theme-toggle', function () {
            var $this, $body, bodyClass;

            $this = $(this);
            $body = $(document).find('body');
            bodyClass = $this.data('bodyclass');

            if (bodyClass.length)
            {
                $body.toggleClass(bodyClass);
            }
        });

        /*
         * Update tooltips on Datatables redraw
         */
        if (typeof $.fn.dataTable !== 'undefined') {
            $(document).on("draw.dt", function () {
                $(document).trigger('glossaryTooltipReady');
            });
        }

        /**
         * Update tooltips on NinjaForm redraw
         */
        $(document).on("after.ft.paging", function () {
            $(document).trigger('glossaryTooltipReady');
        });

        /*
         * CM Tooltip Custom Code
         */
        $('.cmtt-post-tags').on('click', 'a', function () {
            var $this, $url, $parent, $tempform;
            $this = $(this);
            $parent = $this.closest('.cmtt-post-tags');
            $url = $parent.data('glossary-url');
            $tempform = $('<form/>', {
                'action': $url,
                'method': 'post'
            });
            $tempform.append($('<input type="hidden" name="gtags[]" value="' + $this.data('tagid') + '" />'));
            $parent.append($tempform);
            $tempform.submit();
        });

        /*
         * CM Tooltip Custom Code
         */
        $('.cmtt-taxonomy-single').on('click', 'a', function () {
            var $this, $url, $parent, $tempform;
            $this = $(this);
            $parent = $this.closest('.cmtt-taxonomy-single');
            $url = $parent.data('glossary-url');
            $tempform = $('<form/>', {
                'action': $url,
                'method': 'post'
            });
            $tempform.append($('<input type="hidden" name="' + $this.data('taxonomy-name') + '" value="' + $this.data('tagid') + '" />'));
            $parent.append($tempform);
            $tempform.submit();
        });

        if (window.cmtt_data !== undefined && window.cmtt_data.doubleclick_api === "1") {
            $(document).on('dblclick', function (e) {
                window.cmtt_data.dblclick_timeout = setTimeout(function () {
                    var $this = $(e.target);
                    var selection = (document.selection && document.selection.createRange().text) || (window.getSelection && window.getSelection().toString());

                    var data = {
                        action: 'cmtt_api_call',
                        selection: selection
                    };

                    $.post(window.cmtt_data.ajaxurl, data, function (response) {
                        /*
                         * Show response if there is any
                         */
                        if (response && response.length > 2) {
                            CM_Tooltip.glossaryTip.show(response);
                        } else {
                            CM_Tooltip.glossaryTip.hide();
                        }
                    });

                    CM_Tooltip.glossaryTip.show('Loading...');
                }, 300);
            });
        }

        CM_Tooltip.parseAudioPlayer = function () {
            var settings = {
                // if the <video width> is not specified, this is the default
                defaultVideoWidth: 480,
                // if the <video height> is not specified, this is the default
                defaultVideoHeight: 270,
                // if set, overrides <video width>
                videoWidth: -1,
                // if set, overrides <video height>
                videoHeight: -1,
                // width of audio player
                audioWidth: '95.5%',
                // height of audio player
                audioHeight: 30,
                // initial volume when the player starts
                startVolume: 0.8,
                // useful for <audio> player loops
                loop: false,
                // enables Flash and Silverlight to resize to content size
                enableAutosize: true,
                // the order of controls you want on the control bar (and other plugins below)
                features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen'],
                // Hide controls when playing and mouse is not over the video
                alwaysShowControls: false,
                // force iPad's native controls
                iPadUseNativeControls: false,
                // force iPhone's native controls
                iPhoneUseNativeControls: false,
                // force Android's native controls
                AndroidUseNativeControls: false,
                // forces the hour marker (##:00:00)
                alwaysShowHours: false,
                // show framecount in timecode (##:00:00:00)
                showTimecodeFrameCount: false,
                // used when showTimecodeFrameCount is set to true
                framesPerSecond: 25,
                // turns keyboard support on and off for this instance
                enableKeyboard: true,
                // when this player starts, it will pause other players
                pauseOtherPlayers: true,
                // array of keyboard commands
                keyActions: [],
                // boolean, video or audio
                isVideo: false
            };

            if (typeof _wpmejsSettings !== 'undefined')
                settings.pluginPath = _wpmejsSettings.pluginPath;

            if ($('#tt').find('.cmtt-audio-shortcode').length)
            {
                if (typeof $.fn.mediaelementplayer === 'undefined')
                {
                    console.log('The $ doesn\'t have the function required for displaying the AudioPlayer. \n\ This is probably because the $ has been reinitialized after the "mediaplayerelement" has already been added.');
                } else
                {
                    $('#tt').find('.cmtt-audio-shortcode').mediaelementplayer(settings);
                }
            } else {
                if (typeof $.fn.mediaelementplayer === 'undefined')
                {
                    console.log('The $ doesn\'t have the function required for displaying the AudioPlayer. \n\ This is probably because the $ has been reinitialized after the "mediaplayerelement" has already been added.');
                } else
                {
                    $('.glossary-item-audio').find('.cmtt-audio-shortcode').mediaelementplayer(settings);
                }
            }

        };

        CM_Tooltip.parseAudioPlayer();

        /*
         * Sharing Box
         */
        CM_Tooltip.shareBox = function () {

            /*
             * We will assume that if we don't have the box we don't need this scripts
             */
            if ($(".cmtt-social-box").length === 0) {
                return;
            }

            /*
             * We will assume that if we have one type of button we have them all
             */
            if ($(".twitter-share-button").length === 0) {
                return;
            }

            if (typeof (twttr) !== 'undefined' && typeof (twttr.widgets) !== 'undefined') {
                twttr.widgets.load();
            } else {
                $.getScript('//platform.twitter.com/widgets.js');
            }

            //Linked-in
            if (typeof (IN) !== 'undefined') {
                IN.parse();
            } else {
                $.getScript("//platform.linkedin.com/in.js");
            }

            (function () {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = '//apis.google.com/js/plusone.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(po, s);
            })();

            (function (d, s, id) {
                if (typeof window.fbAsyncInit === 'undefined')
                {
                    window.fbAsyncInit = function () {
                        // Don't init the FB as it needs API_ID just parse the likebox
                        FB.XFBML.parse();
                    };

                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id))
                        return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'facebook-jssdk'));
        };
        CM_Tooltip.shareBox();

        $('.cmtt-embed-btn').click(function (ev) {
            ev.preventDefault();
            var overlay = CM_Tooltip.Utils.overlay($(document).find('.cmtt-embed-modal'));
            overlay.find('.cmtt-embed-modal').show();
            overlay.find('.cmtt-embed-modal textarea').click(function () {
                this.select();
            });
            $(".cmtt-embed-copy-btn", overlay).click(function (e) {
                e.preventDefault();
                var wrapper = $(this).parents('.cmtt-embed-modal');
                wrapper.find("textarea").select();
                document.execCommand('copy');
            });
        });

        CMTT_Footnote.linkClickHandler = function (e) {
            e.preventDefault();
            var link = $(this);
            var href = link.attr('href');
            var ftid = href.substring(1, href.length);
            var parentSpan = $(link).parent().parent();
            var parentSpanId = $(parentSpan).attr('id');
            var defLinkId = parentSpanId.slice(0, parentSpanId.length - 2); // cleared parent id
            var backLinkId = '#' + defLinkId;  // def block id

            $('a.cmtt-footnote-deflink').css('background-color', '');
            $(this).css('background-color', '#eaf3ff')

            var linkAddon = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
            var callBackId = defLinkId + '-' + linkAddon;
            $(parentSpan).attr('id', callBackId);
            $(backLinkId).find('a').attr('href', '#' + callBackId);


            $('.cmtt-footnote-def').css('background-color', '');
            var footnoteContentBlock = $('.' + ftid);
            if (!footnoteContentBlock.length) {
                footnoteContentBlock = $('#' + ftid);
            }
            footnoteContentBlock.css('background-color', '#eaf3ff');

            if (footnoteContentBlock.length) {
                $('html, body').animate({
                    scrollTop: footnoteContentBlock.offset().top - 50
                }, 500);
            }


        };

        CMTT_Footnote.linkBackClickHandler = function (e) {
            e.preventDefault();
            var link = $(this);
            var href = link.attr('href');
            var backElement = $(href);
            $('.cmtt-footnote-deflink').css('background-color', '');
            $('.cmtt-footnote-deflink').parent().css('background-color', '');

            $(backElement).find('sup').css('background-color', '#eaf3ff');

            if (backElement.length) {
                $('html, body').animate({
                    scrollTop: backElement.offset().top - 100
                }, 500);
            }
        }

        CMTT_Footnote.showMoreHandler = function (e) {
            e.preventDefault();
            $(this).hide();
            $('.cmtt-footnote-def.hidden').removeClass('hidden');
        }

        $(document).on("click", ".cmtt-footnote-deflink", CMTT_Footnote.linkClickHandler);
        $(document).on("click", ".cmtt-footnote-backlink", CMTT_Footnote.linkBackClickHandler);
        $(document).on("click", ".cmtt-footnote-showmore-btn", CMTT_Footnote.showMoreHandler);

    });

    window.CM_Tooltip.Utils = {
        addSingleHandler: function (handlerName, selector, action, func) {
            var obj;
            if (typeof selector == 'string')
                obj = $(selector);
            else
                obj = selector;
            obj.each(function () {
                var obj = $(this);
                if (obj.data(handlerName) != '1') {
                    obj.data(handlerName, '1');
                    obj.on(action, func);
                }
            });
        },
        leftClick: function (func) {
            return function (e) {
                // Allow to use middle-button to open thread in a new tab:
                if (e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)
                    return;
                func.apply(this, [e]);
                return false;
            }
        },
        toast: function (msg, className, duration) {
            if (typeof className != 'string')
                className = 'info';
            if (typeof duration == 'undefined')
                duration = 5;
            var toast = $('<div/>', {"class": "cmtt-toast " + className, "style": "display:none"});
            toast.text(msg);
            $('body').append(toast);
            toast.fadeIn(500, function () {
                setTimeout(function () {
                    toast.fadeOut(500);
                }, duration * 1000);
            });
        },
        overlay: function (content) {
            var overlay = $('<div>', {"class": 'cmtt-overlay'});
            var contentOuter = $('<div>', {"class": 'cmtt-overlay-content-outer'});
            var contentWrapper = $('<div>', {"class": 'cmtt-overlay-content'});
            var closeButton = $('<span>', {"class": 'cmtt-overlay-close'})
            closeButton.html('&times;');
            $('body').append(overlay);
            overlay.append(contentOuter);
            contentOuter.append(contentWrapper);
            if (typeof content == 'string')
                contentWrapper.html(content);
            else
                contentWrapper.append(content.clone());
            contentWrapper.append(closeButton);
            overlay.fadeIn('fast');
            var close = function () {
                overlay.fadeOut('fast', function () {
                    overlay.remove();
                });
            };
            overlay.click(function (ev) {
                var target = $(ev.target);
                if (target.hasClass('cmtt-overlay')) {
                    close();
                }
            });
            closeButton.click(close);
            $(window).keydown(function (ev) {
                if (ev.keyCode == 27) {
                    close();
                }
            });
            return overlay;
        }

    };

}(jQuery));

/**
 * WordPress inline HTML embed
 *
 * @since 4.4.0
 *
 * This file cannot have ampersands in it. This is to ensure
 * it can be embedded in older versions of WordPress.
 * See https://core.trac.wordpress.org/changeset/35708.
 */
(function (window, document) {
    'use strict';

    var supportedBrowser = false,
            loaded = false;

    if (document.querySelector) {
        if (window.addEventListener) {
            supportedBrowser = true;
        }
    }

    /** @namespace wp */
    window.wp = window.wp || {};

    window.wp.receiveEmbedMessage = null;

    if (!!window.wp.receiveEmbedMessage) {
        return;
    }

    window.wp.receiveEmbedMessage = function (e) {
        var data = e.data;

        if (null === data) {
            return;
        }

        if (!(data.secret || data.message || data.value)) {
            return;
        }

        if (typeof data.secret === 'undefined') {
            return;
        }

        if (/[^a-zA-Z0-9]/.test(data.cmsecret)) {
            return;
        }
        if (/[^a-zA-Z0-9]/.test(data.secret)) {
            return;
        }

        var cmsecret = data.secret.replace("__cm__", "");
        var iframes = document.querySelectorAll('iframe[data-cmsecret="' + cmsecret + '"]'),
                blockquotes = document.querySelectorAll('blockquote[data-cmsecret="' + cmsecret + '"]'),
                i, source, height, sourceURL, targetURL;

        for (i = 0; i < blockquotes.length; i++) {
            blockquotes[ i ].style.display = 'none';
        }

        for (i = 0; i < iframes.length; i++) {
            source = iframes[ i ];

            if (e.source !== source.contentWindow) {
                continue;
            }

//			source.removeAttribute( 'style' );

            /* Resize the iframe on request. */
            if ('height' === data.message) {
                height = parseInt(data.value, 10);
                if (height > 1000) {
                    height = 1000;
                } else if (~~height < 200) {
                    height = 200;
                }

                source.height = height;
            }

            /* Link to a specific URL on request. */
            if ('link' === data.message) {
                sourceURL = document.createElement('a');
                targetURL = document.createElement('a');

                sourceURL.href = source.getAttribute('src');
                targetURL.href = data.value;

                /* Only continue if link hostname matches iframe's hostname. */
                if (targetURL.host === sourceURL.host) {
                    if (document.activeElement === source) {
                        var win = window.open(data.value, '_blank');
                        win.focus();
//                        window.top.location.href = data.value;
                    }
                }
            }
        }
    };

    function onLoad() {
        if (loaded) {
            return;
        }

        loaded = true;

        var isIE10 = -1 !== navigator.appVersion.indexOf('MSIE 10'),
                isIE11 = !!navigator.userAgent.match(/Trident.*rv:11\./),
                iframes = document.querySelectorAll('iframe.cm-embedded-content'),
                iframeClone, i, source, secret;

        for (i = 0; i < iframes.length; i++) {
            source = iframes[ i ];

            if (!source.getAttribute('data-cmsecret')) {
                /* Add secret to iframe */
                secret = Math.random().toString(36).substr(2, 10);
                source.src += '#?cmsecret=' + secret;
                source.setAttribute('data-secret', '__cm__' + secret);
                source.setAttribute('data-cmsecret', secret);
            }

            /* Remove security attribute from iframes in IE10 and IE11. */
            if ((isIE10 || isIE11)) {
                iframeClone = source.cloneNode(true);
                iframeClone.removeAttribute('security');
                source.parentNode.replaceChild(iframeClone, source);
            }
        }
    }

    if (supportedBrowser) {
        window.addEventListener('message', window.wp.receiveEmbedMessage, false);
        document.addEventListener('DOMContentLoaded', onLoad, false);
        window.addEventListener('load', onLoad, false);
    }

})(window, document);
