Meteor.publish("country",function(){
	return Country.find();
});
Meteor.publish("company",function(){
	return Company.find();
});
Meteor.publish("relation",function(){
	return Relation.find();
});

Meteor.startup(function() {
	return Meteor.methods({
		resetAllCompany: function() {
			Company.remove({});
			Company.insert({company: ""});
			Company.insert({company: "--Nova empresa--"});
		},
		resetAllCollections: function() {
			Company.remove({});
			Company.insert({company: ""});
			Company.insert({company: "--Nova empresa--"});

			Relation.remove({});

			Country.remove({});
		},
		addCompanyNumber: function(company, country) {
			if (Company.find({index: company.toLowerCase()}).count() == 0) {
				Company.insert({company: company, index: company.toLowerCase()});
			};
			if (Relation.find({index: company.toLowerCase(), country: country}).count() == 0) {
				Relation.insert({company: company, country: country, quantity: 1, index: company.toLowerCase()});
				Country.update({id: country}, {$inc: {students: 1}});
			} else{
				Relation.update({index:company.toLowerCase(),country:country},
					{ $inc: {quantity: 1}});
				Country.update({id: country}, {$inc: {students: 1}});
			};
		},
		updateCountryCollectionDummy: function() {
			Country.update({id:"MX"}, {$inc: {students: '9'}});
			Country.update({id:"BR"}, {$inc: {students: '55'}});
			Country.update({id:"US"}, {$inc: {students: '15'}});
			Country.update({id:"AF"}, {$inc: {students: '105'}});
		},
		incCountry: function(country,num) {
			Country.update({id: country}, {$inc: {students: num}})
		},
		initCountryCollection: function() {
			Country.insert({students:0,name:"Afeganistão",id:"AF"});
			Country.insert({students:0,name:"Albânia",id:"AL"});
			Country.insert({students:0,name:"Argélia",id:"DZ"});
			Country.insert({students:0,name:"Samoa",id:"WS"});
			Country.insert({students:0,name:"Andorra",id:"AD"});
			Country.insert({students:0,name:"Angola",id:"AO"});
			Country.insert({students:0,name:"Antígua e Barbuda",id:"AG"});
			Country.insert({students:0,name:"Azerbaijão",id:"AZ"});
			Country.insert({students:0,name:"Argentina",id:"AR"});
			Country.insert({students:0,name:"Austrália",id:"AU"});
			Country.insert({students:0,name:"Áustria",id:"AT"});
			Country.insert({students:0,name:"Bahamas",id:"BS"});
			Country.insert({students:0,name:"Barém",id:"BH"});
			Country.insert({students:0,name:"Bangladeche",id:"BD"});
			Country.insert({students:0,name:"Armenia",id:"AM"});
			Country.insert({students:0,name:"Barbados",id:"BB"});
			Country.insert({students:0,name:"Bélgica",id:"BE"});
			Country.insert({students:0,name:"Bermudas",id:"BM"});
			Country.insert({students:0,name:"Butão",id:"BT"});
			Country.insert({students:0,name:"Bolívia",id:"BO"});
			Country.insert({students:0,name:"Bósnia e Herzegovina",id:"BA"});
			Country.insert({students:0,name:"Botsuana",id:"BW"});
			Country.insert({students:0,name:"Ilha Bouvet",id:"BV"});
			Country.insert({students:0,name:"Brasil",id:"BR"});
			Country.insert({students:0,name:"Belize",id:"BZ"});
			Country.insert({students:0,name:"Ilhas Salomão",id:"SB"});
			Country.insert({students:0,name:"Ilhas Virgens Britânicas",id:"VG"});
			Country.insert({students:0,name:"Brunei",id:"BN"});
			Country.insert({students:0,name:"Bulgária",id:"BG"});
			Country.insert({students:0,name:"Birmânia",id:"MM"});
			Country.insert({students:0,name:"Burúndi",id:"BI"});
			Country.insert({students:0,name:"Bielorrússia",id:"BY"});
			Country.insert({students:0,name:"Camboja",id:"KH"});
			Country.insert({students:0,name:"Camarões",id:"CM"});
			Country.insert({students:0,name:"Canadá",id:"CA"});
			Country.insert({students:0,name:"Cabo Verde",id:"CV"});
			Country.insert({students:0,name:"Ilhas Caimão",id:"KY"});
			Country.insert({students:0,name:"República Centro-Africana",id:"CF"});
			Country.insert({students:0,name:"Sri Lanca",id:"LK"});
			Country.insert({students:0,name:"Chade",id:"TD"});
			Country.insert({students:0,name:"Chile",id:"CL"});
			Country.insert({students:0,name:"China",id:"CN"});
			Country.insert({students:0,name:"Taiwan",id:"TW"});
			Country.insert({students:0,name:"Ilha do Natal",id:"CX"});
			Country.insert({students:0,name:"Colômbia",id:"CO"});
			Country.insert({students:0,name:"Comores",id:"KM"});
			Country.insert({students:0,name:"Mayotte",id:"YT"});
			Country.insert({students:0,name:"Congo-Brazzaville",id:"CG"});
			Country.insert({students:0,name:"Congo-Kinshasa",id:"CD"});
			Country.insert({students:0,name:"Ilhas Cook",id:"CK"});
			Country.insert({students:0,name:"Costa Rica",id:"CR"});
			Country.insert({students:0,name:"Croácia",id:"HR"});
			Country.insert({students:0,name:"Cuba",id:"CU"});
			Country.insert({students:0,name:"Chipre",id:"CY"});
			Country.insert({students:0,name:"República Checa",id:"CZ"});
			Country.insert({students:0,name:"Benim",id:"BJ"});
			Country.insert({students:0,name:"Dinamarca",id:"DK"});
			Country.insert({students:0,name:"Domínica",id:"DM"});
			Country.insert({students:0,name:"República Dominicana",id:"DO"});
			Country.insert({students:0,name:"Equador",id:"EC"});
			Country.insert({students:0,name:"Salvador",id:"SV"});
			Country.insert({students:0,name:"Guiné Equatorial",id:"GQ"});
			Country.insert({students:0,name:"Etiópia",id:"ET"});
			Country.insert({students:0,name:"Eritreia",id:"ER"});
			Country.insert({students:0,name:"Estónia",id:"EE"});
			Country.insert({students:0,name:"Faroé",id:"FO"});
			Country.insert({students:0,name:"Ilhas Malvinas",id:"FK"});
			Country.insert({students:0,name:"Geórgia do Sul e Ilhas Sandwich",id:"GS"});
			Country.insert({students:0,name:"Fiji",id:"FJ"});
			Country.insert({students:0,name:"Finlândia",id:"FI"});
			Country.insert({students:0,name:"França",id:"FR"});
			Country.insert({students:0,name:"Polinésia Francesa",id:"PF"});
			Country.insert({students:0,name:"Territórios Austrais Franceses",id:"TF"});
			Country.insert({students:0,name:"Jibuti",id:"DJ"});
			Country.insert({students:0,name:"Gabão",id:"GA"});
			Country.insert({students:0,name:"Geórgia",id:"GE"});
			Country.insert({students:0,name:"Gâmbia",id:"GM"});
			Country.insert({students:0,name:"Faixa de Gaza",id:"PS"});
			Country.insert({students:0,name:"Alemanha",id:"DE"});
			Country.insert({students:0,name:"Gana",id:"GH"});
			Country.insert({students:0,name:"Gibraltar",id:"GI"});
			Country.insert({students:0,name:"Quiribáti",id:"KI"});
			Country.insert({students:0,name:"Grécia",id:"GR"});
			Country.insert({students:0,name:"Gronelândia",id:"GL"});
			Country.insert({students:0,name:"Granada",id:"GD"});
			Country.insert({students:0,name:"Guame",id:"GU"});
			Country.insert({students:0,name:"Guatemala",id:"GT"});
			Country.insert({students:0,name:"Guiné",id:"GN"});
			Country.insert({students:0,name:"Guiana",id:"GY"});
			Country.insert({students:0,name:"Haiti",id:"HT"});
			Country.insert({students:0,name:"Ilhas Heard e McDonald",id:"HM"});
			Country.insert({students:0,name:"Vaticano",id:"VA"});
			Country.insert({students:0,name:"Honduras",id:"HN"});
			Country.insert({students:0,name:"Hong Kong",id:"HK"});
			Country.insert({students:0,name:"Hungria",id:"HU"});
			Country.insert({students:0,name:"Islândia",id:"IS"});
			Country.insert({students:0,name:"Índia",id:"IN"});
			Country.insert({students:0,name:"Indonésia",id:"ID"});
			Country.insert({students:0,name:"Irão",id:"IR"});
			Country.insert({students:0,name:"Iraque",id:"IQ"});
			Country.insert({students:0,name:"Irlanda",id:"IE"});
			Country.insert({students:0,name:"Israel",id:"IL"});
			Country.insert({students:0,name:"Itália",id:"IT"});
			Country.insert({students:0,name:"Costa do Marfim",id:"CI"});
			Country.insert({students:0,name:"Jamaica",id:"JM"});
			Country.insert({students:0,name:"Japão",id:"JP"});
			Country.insert({students:0,name:"Cazaquistão",id:"KZ"});
			Country.insert({students:0,name:"Jordânia",id:"JO"});
			Country.insert({students:0,name:"Quénia",id:"KE"});
			Country.insert({students:0,name:"Coréia do Norte",id:"KP"});
			Country.insert({students:0,name:"Coréia do Sul",id:"KR"});
			Country.insert({students:0,name:"Kuwait",id:"KW"});
			Country.insert({students:0,name:"Quirguizistão",id:"KG"});
			Country.insert({students:0,name:"Laos",id:"LA"});
			Country.insert({students:0,name:"Líbano",id:"LB"});
			Country.insert({students:0,name:"Lesoto",id:"LS"});
			Country.insert({students:0,name:"Letónia",id:"LV"});
			Country.insert({students:0,name:"Libéria",id:"LR"});
			Country.insert({students:0,name:"Líbia",id:"LY"});
			Country.insert({students:0,name:"Listenstaine",id:"LI"});
			Country.insert({students:0,name:"Lituânia",id:"LT"});
			Country.insert({students:0,name:"Luxemburgo",id:"LU"});
			Country.insert({students:0,name:"Macau",id:"MO"});
			Country.insert({students:0,name:"Madagáscar",id:"MG"});
			Country.insert({students:0,name:"Malávi",id:"MW"});
			Country.insert({students:0,name:"Malásia",id:"MY"});
			Country.insert({students:0,name:"Maldivas",id:"MV"});
			Country.insert({students:0,name:"Mali",id:"ML"});
			Country.insert({students:0,name:"Malta",id:"MT"});
			Country.insert({students:0,name:"Martinique",id:"MQ"});
			Country.insert({students:0,name:"Mauritânia",id:"MR"});
			Country.insert({students:0,name:"Maurícia",id:"MU"});
			Country.insert({students:0,name:"México",id:"MX"});
			Country.insert({students:0,name:"Mónaco",id:"MC"});
			Country.insert({students:0,name:"Mongólia",id:"MN"});
			Country.insert({students:0,name:"Moldávia",id:"MD"});
			Country.insert({students:0,name:"Montenegro",id:"ME"});
			Country.insert({students:0,name:"Monserrate",id:"MS"});
			Country.insert({students:0,name:"Marrocos",id:"MA"});
			Country.insert({students:0,name:"Moçambique",id:"MZ"});
			Country.insert({students:0,name:"Omã",id:"OM"});
			Country.insert({students:0,name:"Namíbia",id:"NA"});
			Country.insert({students:0,name:"Nauru",id:"NR"});
			Country.insert({students:0,name:"Nepal",id:"NP"});
			Country.insert({students:0,name:"Países Baixos",id:"NL"});
			Country.insert({students:0,name:"Aruba",id:"AW"});
			Country.insert({students:0,name:"Nova Caledónia",id:"NC"});
			Country.insert({students:0,name:"Vanuatu",id:"VU"});
			Country.insert({students:0,name:"Nova Zelândia",id:"NZ"});
			Country.insert({students:0,name:"Nicarágua",id:"NI"});
			Country.insert({students:0,name:"Niger",id:"NE"});
			Country.insert({students:0,name:"Nigéria",id:"NG"});
			Country.insert({students:0,name:"Niue",id:"NU"});
			Country.insert({students:0,name:"Ilha Norfolk",id:"NF"});
			Country.insert({students:0,name:"Noruega",id:"NO"});
			Country.insert({students:0,name:"Marianas do Norte",id:"MP"});
			Country.insert({students:0,name:"Micronésia",id:"FM"});
			Country.insert({students:0,name:"Marshall Islands",id:"MH"});
			Country.insert({students:0,name:"Palau",id:"PW"});
			Country.insert({students:0,name:"Paquistão",id:"PK"});
			Country.insert({students:0,name:"Panamá",id:"PA"});
			Country.insert({students:0,name:"Papua-Nova Guiné",id:"PG"});
			Country.insert({students:0,name:"Paraguai",id:"PY"});
			Country.insert({students:0,name:"Peru",id:"PE"});
			Country.insert({students:0,name:"Filipinas",id:"PH"});
			Country.insert({students:0,name:"Pitcairn",id:"PN"});
			Country.insert({students:0,name:"Polónia",id:"PL"});
			Country.insert({students:0,name:"Portugal",id:"PT"});
			Country.insert({students:0,name:"Guiné-Bissau",id:"GW"});
			Country.insert({students:0,name:"Timor Leste",id:"TL"});
			Country.insert({students:0,name:"Porto Rico",id:"PR"});
			Country.insert({students:0,name:"Catar",id:"QA"});
			Country.insert({students:0,name:"Reunion",id:"RE"});
			Country.insert({students:0,name:"Roménia",id:"RO"});
			Country.insert({students:0,name:"Rússia",id:"RU"});
			Country.insert({students:0,name:"Ruanda",id:"RW"});
			Country.insert({students:0,name:"Santa Helena",id:"SH"});
			Country.insert({students:0,name:"São Cristóvão e Neves",id:"KN"});
			Country.insert({students:0,name:"Anguila",id:"AI"});
			Country.insert({students:0,name:"Santa Lúcia",id:"LC"});
			Country.insert({students:0,name:"São Pedro e Miquelon",id:"PM"});
			Country.insert({students:0,name:"São Vicente e Granadinas",id:"VC"});
			Country.insert({students:0,name:"São Marinho",id:"SM"});
			Country.insert({students:0,name:"São Tomé e Príncipe",id:"ST"});
			Country.insert({students:0,name:"Arábia Saudita",id:"SA"});
			Country.insert({students:0,name:"Senegal",id:"SN"});
			Country.insert({students:0,name:"Serbia",id:"RS"});
			Country.insert({students:0,name:"Seicheles",id:"SC"});
			Country.insert({students:0,name:"Serra Leoa",id:"SL"});
			Country.insert({students:0,name:"Singapura",id:"SG"});
			Country.insert({students:0,name:"Eslováquia",id:"SK"});
			Country.insert({students:0,name:"Vietname",id:"VN"});
			Country.insert({students:0,name:"Eslovénia",id:"SI"});
			Country.insert({students:0,name:"Somália",id:"SO"});
			Country.insert({students:0,name:"África do Sul",id:"ZA"});
			Country.insert({students:0,name:"Zimbabué",id:"ZW"});
			Country.insert({students:0,name:"Espanha",id:"ES"});
			Country.insert({students:0,name:"Sara Ocidental",id:"EH"});
			Country.insert({students:0,name:"Sudão",id:"SD"});
			Country.insert({students:0,name:"Suriname",id:"SR"});
			Country.insert({students:0,name:"Svalbard e Jan Mayen",id:"SJ"});
			Country.insert({students:0,name:"Suazilândia",id:"SZ"});
			Country.insert({students:0,name:"Suécia",id:"SE"});
			Country.insert({students:0,name:"Suíça",id:"CH"});
			Country.insert({students:0,name:"Síria",id:"SY"});
			Country.insert({students:0,name:"Tajiquistão",id:"TJ"});
			Country.insert({students:0,name:"Tailândia",id:"TH"});
			Country.insert({students:0,name:"Togo",id:"TG"});
			Country.insert({students:0,name:"Tokelau",id:"TK"});
			Country.insert({students:0,name:"Tonga",id:"TO"});
			Country.insert({students:0,name:"Trindade e Tobago",id:"TT"});
			Country.insert({students:0,name:"Emiratos Árabes Unidos",id:"AE"});
			Country.insert({students:0,name:"Tunísia",id:"TN"});
			Country.insert({students:0,name:"Turquia",id:"TR"});
			Country.insert({students:0,name:"Turquemenistão",id:"TM"});
			Country.insert({students:0,name:"Ilhas Turcas e Caicos",id:"TC"});
			Country.insert({students:0,name:"Tuvalu",id:"TV"});
			Country.insert({students:0,name:"Uganda",id:"UG"});
			Country.insert({students:0,name:"Ucrânia",id:"UA"});
			Country.insert({students:0,name:"Macedónia",id:"MK"});
			Country.insert({students:0,name:"Egíto",id:"EG"});
			Country.insert({students:0,name:"Reino Unido",id:"GB"});
			Country.insert({students:0,name:"Guernsey",id:"GG"});
			Country.insert({students:0,name:"Jersey",id:"JE"});
			Country.insert({students:0,name:"Ilha de Man",id:"IM"});
			Country.insert({students:0,name:"Tanzânia",id:"TZ"});
			Country.insert({students:0,name:"Estados Unidos",id:"US"});
			Country.insert({students:0,name:"Ilhas Virgens",id:"VI"});
			Country.insert({students:0,name:"Guiana Francesa",id:"GF"});
			Country.insert({students:0,name:"Burquina Faso",id:"BF"});
			Country.insert({students:0,name:"Uruguai",id:"UY"});
			Country.insert({students:0,name:"Usbequistão",id:"UZ"});
			Country.insert({students:0,name:"Venezuela",id:"VE"});
			Country.insert({students:0,name:"Wallis e Futuna",id:"WF"});
			Country.insert({students:0,name:"Samoa Americana",id:"WS"});
			Country.insert({students:0,name:"Iémen",id:"YE"});
			Country.insert({students:0,name:"Zâmbia",id:"ZM"});
		},
		initCompanyCollection: function() {
			Company.insert({company: "3WT", index: "3WT".toLowerCase()});
			Company.insert({company: "8d digital", index: "8d digital".toLowerCase()});
			Company.insert({company: "Ablevision", index: "Ablevision".toLowerCase()});
			Company.insert({company: "Accenture", index: "Accenture".toLowerCase()});
			Company.insert({company: "Amdocs", index: "Amdocs".toLowerCase()});
			Company.insert({company: "Aptor", index: "Aptor".toLowerCase()});
			Company.insert({company: "Arvinmeritor", index: "Arvinmeritor".toLowerCase()});
			Company.insert({company: "ATeCH", index: "ATeCH".toLowerCase()});
			Company.insert({company: "Atenatec", index: "Atenatec".toLowerCase()});
			Company.insert({company: "Atos origin", index: "Atos origin".toLowerCase()});
			Company.insert({company: "Autbank", index: "Autbank".toLowerCase()});
			Company.insert({company: "Avon", index: "Avon".toLowerCase()});
			Company.insert({company: "Axoon", index: "Axoon".toLowerCase()});
			Company.insert({company: "Claro", index: "Claro".toLowerCase()});
			Company.insert({company: "Bm&F", index: "Bm&F".toLowerCase()});
			Company.insert({company: "Bosch", index: "Bosch".toLowerCase()});
			Company.insert({company: "Bull", index: "Bull".toLowerCase()});
			Company.insert({company: "Ci&T", index: "Ci&T".toLowerCase()});
			Company.insert({company: "Conectiva", index: "Conectiva".toLowerCase()});
			Company.insert({company: "Consulte TI", index: "Consulte TI".toLowerCase()});
			Company.insert({company: "Contern", index: "Contern".toLowerCase()});
			Company.insert({company: "Coss Consulting", index: "Coss Consulting".toLowerCase()});
			Company.insert({company: "CPm Braxis", index: "CPm Braxis".toLowerCase()});
			Company.insert({company: "CPqd", index: "CPqd".toLowerCase()});
			Company.insert({company: "Banco Credit suisse", index: "Banco Credit suisse".toLowerCase()});
			Company.insert({company: "Banco Itaú", index: "Banco Itaú".toLowerCase()});
			Company.insert({company: "Banco santander", index: "Banco santander".toLowerCase()});
			Company.insert({company: "daitanlabs", index: "daitanlabs".toLowerCase()});
			Company.insert({company: "danone", index: "danone".toLowerCase()});
			Company.insert({company: "data solutions", index: "data solutions".toLowerCase()});
			Company.insert({company: "Philips", index: "Philips".toLowerCase()});
			Company.insert({company: "dmr Consulting", index: "dmr Consulting".toLowerCase()});
			Company.insert({company: "doois Tecnologia", index: "doois Tecnologia".toLowerCase()});
			Company.insert({company: "easy software", index: "easy software".toLowerCase()});
			Company.insert({company: "ergo&Ação", index: "ergo&Ação".toLowerCase()});
			Company.insert({company: "elektro", index: "elektro".toLowerCase()});
			Company.insert({company: "embrapa", index: "embrapa".toLowerCase()});
			Company.insert({company: "enalta", index: "enalta".toLowerCase()});
			Company.insert({company: "enjoy", index: "enjoy".toLowerCase()});
			Company.insert({company: "everis", index: "everis".toLowerCase()});
			Company.insert({company: "eyetec", index: "eyetec".toLowerCase()});
			Company.insert({company: "FAI", index: "FAI".toLowerCase()});
			Company.insert({company: "FacTI", index: "FacTI".toLowerCase()});
			Company.insert({company: "FBm Brasil", index: "FBm Brasil".toLowerCase()});
			Company.insert({company: "Freeddom ", index: "Freeddom ".toLowerCase()});
			Company.insert({company: "Freios rodoviários", index: "Freios rodoviários".toLowerCase()});
			Company.insert({company: "H.m.sandres", index: "H.m.sandres".toLowerCase()});
			Company.insert({company: "IBm", index: "IBm".toLowerCase()});
			Company.insert({company: "Ícaro", index: "Ícaro".toLowerCase()});
			Company.insert({company: "imAX Games", index: "imAX Games".toLowerCase()});
			Company.insert({company: "Indusoft", index: "Indusoft".toLowerCase()});
			Company.insert({company: "Integris", index: "Integris".toLowerCase()});
			Company.insert({company: "Instituto eldorado", index: "Instituto eldorado".toLowerCase()});
			Company.insert({company: "Itautec", index: "Itautec".toLowerCase()});
			Company.insert({company: "Itera Inovação", index: "Itera Inovação".toLowerCase()});
			Company.insert({company: "Iteris", index: "Iteris".toLowerCase()});
			Company.insert({company: "Johnson & Johnson", index: "Johnson & Johnson".toLowerCase()});
			Company.insert({company: "linkway", index: "linkway".toLowerCase()});
			Company.insert({company: "lnls - luz síncrotron", index: "lnls - luz síncrotron".toLowerCase()});
			Company.insert({company: "luz engenharia", index: "luz engenharia".toLowerCase()});
			Company.insert({company: "mC1 TI", index: "mC1 TI".toLowerCase()});
			Company.insert({company: "mds Inform.", index: "mds Inform.".toLowerCase()});
			Company.insert({company: "merial", index: "merial".toLowerCase()});
			Company.insert({company: "microsoft", index: "microsoft".toLowerCase()});
			Company.insert({company: "motorola", index: "motorola".toLowerCase()});
			Company.insert({company: "multicorpos", index: "multicorpos".toLowerCase()});
			Company.insert({company: "oracle", index: "oracle".toLowerCase()});
			Company.insert({company: "PadTec", index: "PadTec".toLowerCase()});
			Company.insert({company: "Paggo", index: "Paggo".toLowerCase()});
			Company.insert({company: "Phisystems", index: "Phisystems".toLowerCase()});
			Company.insert({company: "Pinuts studios", index: "Pinuts studios".toLowerCase()});
			Company.insert({company: "Portugal Telecom", index: "Portugal Telecom".toLowerCase()});
			Company.insert({company: "Pref são Carlos", index: "Pref são Carlos".toLowerCase()});
			Company.insert({company: "Pro IT", index: "Pro IT".toLowerCase()});
			Company.insert({company: "Primeup", index: "Primeup".toLowerCase()});
			Company.insert({company: "Promon logicalis", index: "Promon logicalis".toLowerCase()});
			Company.insert({company: "PTls", index: "PTls".toLowerCase()});
			Company.insert({company: "rA Catering", index: "rA Catering".toLowerCase()});
			Company.insert({company: "rede PrePag", index: "rede PrePag".toLowerCase()});
			Company.insert({company: "royal Canin", index: "royal Canin".toLowerCase()});
			Company.insert({company: "rhodia", index: "rhodia".toLowerCase()});
			Company.insert({company: "s&V Consultoria", index: "s&V Consultoria".toLowerCase()});
			Company.insert({company: "siemens", index: "siemens".toLowerCase()});
			Company.insert({company: "siena ", index: "siena ".toLowerCase()});
			Company.insert({company: "senior solution", index: "senior solution".toLowerCase()});
			Company.insert({company: "simula", index: "simula".toLowerCase()});
			Company.insert({company: "sIsGrAPH", index: "sIsGrAPH".toLowerCase()});
			Company.insert({company: "solução Integrada", index: "solução Integrada".toLowerCase()});
			Company.insert({company: "sYm Tecnologia", index: "sYm Tecnologia".toLowerCase()});
			Company.insert({company: "Talent Pro IT", index: "Talent Pro IT".toLowerCase()});
			Company.insert({company: "Tecumseh", index: "Tecumseh".toLowerCase()});
			Company.insert({company: "Telefonica", index: "Telefonica".toLowerCase()});
			Company.insert({company: "Trópicos", index: "Trópicos".toLowerCase()});
			Company.insert({company: "Trust Agro", index: "Trust Agro".toLowerCase()});
			Company.insert({company: "uCube", index: "uCube".toLowerCase()});
			Company.insert({company: "ultragaz", index: "ultragaz".toLowerCase()});
			Company.insert({company: "unesp", index: "unesp".toLowerCase()});
			Company.insert({company: "unilever", index: "unilever".toLowerCase()});
			Company.insert({company: "uol", index: "uol".toLowerCase()});
			Company.insert({company: "Verdartis", index: "Verdartis".toLowerCase()});
			Company.insert({company: "Vertis", index: "Vertis".toLowerCase()});
			Company.insert({company: "Whirlpool", index: "Whirlpool".toLowerCase()});
			Company.insert({company: "Vectura", index: "Vectura".toLowerCase()});
			Company.insert({company: "Yordan", index: "Yordan".toLowerCase()});
			Company.insert({company: "Zarpsystem", index: "Zarpsystem".toLowerCase()});
		}
	});
});
