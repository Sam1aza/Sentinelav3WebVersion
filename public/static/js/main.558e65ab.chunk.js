(this.webpackJsonpsentinela=this.webpackJsonpsentinela||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(3),s=a.n(n),o=a(27),i=a.n(o),r=(a(81),a(17)),l=a(18),d=a(20),j=a(19),b=a(10),m=(a(82),a(23)),u=a.n(m),h=a(28),x=a.p+"static/media/logo-white.5c94dba9.png",p=(a(84),a(25)),O=a(9),v=a(72),f=(a(88),{apiKey:"AIzaSyDVH0PGpyfrPnZHVX3AkggceA6BNkRvcx8",authDomain:"sentinelav3.firebaseapp.com",databaseURL:"https://sentinelav3.firebaseio.com",projectId:"sentinelav3",storageBucket:"sentinelav3.appspot.com",messagingSenderId:"109578723185",appId:"1:109578723185:web:66d5f902f95b09d714e0d0",measurementId:"G-5WBJXPHCRL"}),g=v.a.initializeApp(f),N=(Object(O.a)({},f.databaseURL),g),k=a(73),y=s.a.createContext(),F=function(e){var t=e.children,a=Object(n.useState)(null),s=Object(k.a)(a,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){N.auth().onAuthStateChanged(i)}),[]),Object(c.jsx)(y.Provider,{value:{currentUser:o},children:t})},C=Object(p.g)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(h.a)(u.a.mark((function e(a){var c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=a.target.elements,n=c.email,s=c.password,e.prev=2,e.next=5,N.auth().signInWithEmailAndPassword(n.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),"auth/invalid-email"==e.t0.code?alert("Campo de email em branco ou invalido"):"auth/wrong-password"==e.t0.code?alert("Senha de acesso invalida"):alert("Verificar email/senha de acesso");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(y).currentUser?Object(c.jsx)(p.a,{to:"/"}):Object(c.jsxs)("div",{className:"logoPosIni",children:[Object(c.jsx)("img",{src:x,alt:"logo",className:"logoPagInicial"}),Object(c.jsx)("p",{children:"Sentinela"}),Object(c.jsxs)("div",{className:"paginicial col",children:[Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"nameInput",children:"Email"}),Object(c.jsx)("input",{className:"emailinput form-control",type:"email",placeholder:"E-mail",name:"email"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"idadeInput",children:"Senha"}),Object(c.jsx)("input",{className:"senhainput form-control",type:"password",placeholder:"Senha",name:"password"})]}),Object(c.jsx)("button",{className:"btnlogin btn btn-primary col",children:"Logar"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(b.b,{to:"/registrar",children:Object(c.jsx)("button",{className:" btn btn-secondary col",children:"Cadastrar"})}),Object(c.jsx)(b.b,{to:"/forgot",children:Object(c.jsx)("button",{className:" btn btn-link col",children:"Esqueci a senha"})})]})]})]})})),S=(a(93),Object(p.g)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(h.a)(u.a.mark((function e(a){var c,n,s,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c=a.target.elements,n=c.name,s=c.email,o=c.password,i=c.repassword,o.value!==i.value){e.next=15;break}return e.prev=3,e.next=6,N.auth().createUserWithEmailAndPassword(s.value,o.value);case 6:t.push("/home"),N.auth().currentUser.updateProfile({displayName:n.value}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),alert(e.t0);case 13:e.next=16;break;case 15:alert("As senhas informadas n\xe3o correspondem");case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Cadastrar usuario no Sentinela"}),Object(c.jsxs)("div",{className:"paginicial",children:[Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("div",{className:"form-group ",children:[Object(c.jsx)("label",{htmlFor:"nameid",children:"Nome"}),Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"Nome",name:"name",id:"nameid"})]}),Object(c.jsxs)("div",{className:"form-group ",children:[Object(c.jsx)("label",{htmlFor:"",children:"Email "}),Object(c.jsx)("input",{className:"form-control",type:"email",placeholder:"E-mail",name:"email"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"",children:"Senha"}),Object(c.jsx)("input",{className:"form-control",type:"password",placeholder:"Senha",name:"password"}),Object(c.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"Minimo 6 caracteres"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"",children:"Repetir a senha"}),Object(c.jsx)("input",{className:"form-control",type:"password",placeholder:"Repetir a senha",name:"repassword"})]}),Object(c.jsx)("button",{className:" btn btn-success col",type:"submit",children:"Cadastrar"})]}),Object(c.jsx)("div",{children:Object(c.jsx)(b.b,{to:"/login",children:Object(c.jsx)("button",{className:" btn btn-link col",children:"Voltar a tela de login"})})})]})]})}))),M=(a(39),a(94),a(95),a(96),a.p+"static/media/logosentinela2.f78debe1.png"),w=function(e){return Object(c.jsx)("aside",{className:"logo",children:Object(c.jsx)(b.b,{to:"/home",className:"logo",children:Object(c.jsx)("img",{src:M,alt:"logo"})})})},A=(a(97),function(e){return Object(c.jsxs)("aside",{className:"menu-area",children:[Object(c.jsxs)("div",{className:"divdouser",children:[Object(c.jsxs)("label",{className:"userLogged",children:["Ol\xe1, ",N.auth().currentUser.displayName,"!"]}),Object(c.jsx)("button",{className:"btnuser btn btn-outline-danger btn-sm",onClick:function(){return N.auth().signOut()},children:"Sair"})]}),Object(c.jsxs)("nav",{className:"menu",children:[Object(c.jsxs)(b.b,{to:"/home",children:[Object(c.jsx)("i",{className:"fa fa-home"})," Inicio"]}),Object(c.jsxs)(b.b,{to:"/glicose",children:[Object(c.jsx)("i",{className:"fa fa-tint"})," Glicose"]}),Object(c.jsxs)(b.b,{to:"/pressao",children:[Object(c.jsx)("i",{className:"fa fa-heartbeat"})," Press\xe3o/Batimentos"]}),Object(c.jsxs)(b.b,{to:"/medicacao",children:[Object(c.jsx)("i",{className:"fa fa-dot-circle-o"})," Medica\xe7\xe3o"]}),Object(c.jsx)("hr",{}),Object(c.jsxs)(b.b,{to:"/acervo",children:[Object(c.jsx)("i",{className:"fa fa-history"})," Historico"]})]})]})}),I=(a(98),function(e){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("span",{children:["Desenvolvido por ",Object(c.jsx)("a",{href:"https://github.com/Sam1aza",target:"_blank",children:Object(c.jsx)("strong",{children:"Samiaza"})})]})})}),z=a(24),P=(a(99),a(100),function(e){return Object(c.jsxs)("header",{className:"header d-none d-sm-flex flex-column",children:[Object(c.jsxs)("h1",{className:"mt-3",children:[Object(c.jsx)("i",{className:"fa fa-".concat(e.icon)}),e.title]}),Object(c.jsx)("p",{className:"lead text-muted",children:e.subtitle})]})}),q=function(e){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(P,Object(O.a)({},e)),Object(c.jsx)("main",{className:"content containter-fluid",children:Object(c.jsx)("div",{className:"p-3 mt-3",children:e.children})})]})},D=(a(101),a(102),{apontamento:{glicose:"",pressao:"",batimento:"",observacao:""},medicacao:{carbamazepina:""},user:{}}),L={disabled:!1},T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state=Object(O.a)({},D),e.checkboxProps=Object(O.a)({},L),e.clear=e.clear.bind(Object(z.a)(e)),e.saveApointment=e.saveApointment.bind(Object(z.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.database().ref("medicamentos").once("value").then((function(t){e.setState({medicacao:t.val()})}));N.auth().currentUser;N.auth().onAuthStateChanged((function(e){e.displayName}))}},{key:"updateFormApointment",value:function(e){var t=this.state.apontamento;t.data=(new Date).toLocaleDateString(),t.hora=(new Date).toLocaleTimeString(),t.usuario=N.auth().currentUser.displayName,t[e.target.name]=e.target.value,this.setState({apontamento:t})}},{key:"updateFormMedicine",value:function(e){var t=this.state.medicacao;t[e.target.name]=t[e.target.name]-1,this.setState({medicacao:t});var a=!this.checkboxProps.disabled;this.setState({checkboxProps:a}),console.log(t,a)}},{key:"saveApointment",value:function(){if(""===this.state.apontamento.glicose);else{var e=this.state.apontamento;N.database().ref("apontamentos").push(e),this.saveMedicine()}this.clear()}},{key:"saveMedicine",value:function(){var e=this.state.medicacao;N.database().ref("medicamentos").set(e)}},{key:"clear",value:function(){this.setState({apontamento:{glicose:"",pressao:"",batimento:"",observacao:"",apidra:"",basaglar:""}})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(q,{icon:"home",title:" Inicio ",subtitle:"Sentinela vers\xe3o web",children:[Object(c.jsx)("div",{className:"dysplay-4",children:"Painel inicial para apontamento das medica\xe7\xf5es e medi\xe7\xf5es"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("h4",{children:[(new Date).toLocaleDateString()," ",(new Date).toLocaleTimeString()," "]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"glicoseform form-group col",children:[Object(c.jsx)("label",{htmlFor:"nameInput",children:"Glicose mg/dl"}),Object(c.jsx)("input",{className:"emailinput form-control",name:"glicose",value:this.state.apontamento.glicose,onChange:function(t){return e.updateFormApointment(t)},type:"number",min:"0"})]}),Object(c.jsxs)("div",{className:"form-group col",children:[Object(c.jsx)("label",{htmlFor:"idadeInput",children:"Press\xe3o arterial"}),Object(c.jsx)("input",{className:"senhainput form-control",name:"pressao",value:this.state.apontamento.pressao,onChange:function(t){return e.updateFormApointment(t)},type:"number"})]}),Object(c.jsxs)("div",{className:"form-group col",children:[Object(c.jsx)("label",{htmlFor:"idadeInput",children:"Batimento cardiaco"}),Object(c.jsx)("input",{className:"senhainput form-control",name:"batimento",value:this.state.apontamento.batimento,onChange:function(t){return e.updateFormApointment(t)},type:"number",min:"0"})]}),Object(c.jsxs)("div",{className:"form-group col-md-6",children:[Object(c.jsx)("label",{htmlFor:"idadeInput",children:"Observa\xe7\xe3o"}),Object(c.jsx)("input",{className:"senhainput form-control",name:"observacao",value:this.state.apontamento.observacao,onChange:function(t){return e.updateFormApointment(t)},type:"text",min:"0"})]})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("fieldset",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"formToCheck custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"carbamazepina",name:"carbamazepina",onChange:function(t){return e.updateFormMedicine(t)},disabled:L.disabled,valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"carbamazepina",children:" Carbamazepina "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"risperidona",name:"risperidona",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"risperidona",children:" Risperidona "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"brilinta",name:"brilinta",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"brilinta",children:" Brilinta "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"losartana",name:"losartana",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"losartana",children:" Losartana "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"concor",name:"concor",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"concor",children:" Concor "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"zimpas",name:"zimpas",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"zimpas",children:" Zimpas "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"lasix",name:"lasix",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"lasix",children:" Lasix "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"aas",name:"aas",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"aas",children:" AAS "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"aldactone",name:"aldactone",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"aldactone",children:" Aldactone "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"ancorom",name:"ancorom",onChange:function(t){return e.updateFormMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"ancorom",children:" Ancorom "})]})]})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"botoesAcao",children:[Object(c.jsx)("button",{className:"btnsalvar btn btn-primary",onClick:this.saveApointment,children:"Salvar"}),Object(c.jsx)("button",{className:"btnlimpar btn btn-warning",onClick:this.clear,children:"Limpar"})]}),Object(c.jsx)("hr",{})]})}}]),a}(n.Component),R=(a(54),a(55),a(56),a(103),a(36)),E=a.n(R),B=a(33),U=a.n(B),H=a(37),G=a.n(H),V={rows:[],dados:{}},W=[{dataField:"data",text:"Data",sort:!0},{dataField:"hora",text:"Hora"},{dataField:"glicose",text:"Glicose"},{dataField:"observacao",text:"Observa\xe7\xe3o"},{dataField:"usuario",text:"Registrado por"}],Z=(U()({mode:"click"}),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state=Object(O.a)({},V),e.app=N,e.database=e.app.database().ref("apontamentos"),e.dados=Object(O.a)({},V.dados),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.database.once("value").then((function(t){e.setState({rows:t.val()}),e.convertObjToArray()}))}},{key:"convertObjToArray",value:function(){var e=[],t=Object(O.a)({},this.state.rows);for(var a in t)t.hasOwnProperty(a)&&e.push(t[a]);e.reverse(),this.setState({dados:e})}},{key:"render",value:function(){return Object(c.jsxs)(q,{icon:"tint",title:" Glicose",subtitle:"Sentinela vers\xe3o web",children:[Object(c.jsx)("div",{className:"dysplay-4",children:"Painel para monitoramento das medi\xe7\xf5es de glicose"}),Object(c.jsx)("hr",{}),Object(c.jsx)(E.a,{hover:!0,keyField:"data",data:this.state.dados,columns:W,pagination:G()()})]})}}]),a}(n.Component)),J={rows:[],dados:[{}]},Q=[{dataField:"data",text:"Data",sort:!0},{dataField:"hora",text:"Hora"},{dataField:"pressao",text:"Press\xe3o arterial"},{dataField:"batimento",text:"Batimento"},{dataField:"observacao",text:"Observa\xe7\xe3o"},{dataField:"usuario",text:"Registrado por"}],X=U()({mode:"click"}),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state=Object(O.a)({},J),e.app=N,e.database=e.app.database().ref("apontamentos"),e.dados=Object(O.a)({},J.dados),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.database.once("value").then((function(t){e.setState({rows:t.val()}),e.convertObjToArray()}))}},{key:"convertObjToArray",value:function(){var e=[],t=Object(O.a)({},this.state.rows);for(var a in t)t.hasOwnProperty(a)&&e.push(t[a]);e.reverse(),this.setState({dados:e})}},{key:"render",value:function(){return Object(c.jsxs)(q,{icon:"heartbeat",title:" Press\xe3o arterial e batimentos",subtitle:"Sentinela vers\xe3o web",children:[Object(c.jsx)("div",{className:"dysplay-4",children:"Painel para monitoramento das medi\xe7\xf5es da press\xe3o arterial e batimento cardiaco"}),Object(c.jsx)("hr",{}),Object(c.jsx)(E.a,{hover:!0,keyField:"data",data:this.state.dados,columns:Q,pagination:G()(),cellEdit:U()(X)},"data")]})}}]),a}(n.Component),$=(a(157),{apontamento:{glicose:"",pressao:"",batimento:"",observacao:""},medicacao:{}}),_={medicacaoAux:{}},Y={dataFinal:{carbamazepina:""}},ee={qtdToIncrease:{qtd:0}},te=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state=Object(O.a)({},$),e.days=Object(O.a)({},Y),e.status=Object(O.a)({},ee),e.medState=Object(O.a)({},_),e.saveIncreaseMedicine=e.saveIncreaseMedicine.bind(Object(z.a)(e)),e.clearInput=e.clearInput.bind(Object(z.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.database().ref("medicamentos").once("value").then((function(t){e.setState({medicacao:t.val()})}))}},{key:"updateStockMedicine",value:function(e){var t=this.status.qtdToIncrease.qtd,a=parseInt(t),c=this.state.medicacao;c[e.target.name]=c[e.target.name]+a,this.setState({medicacaoAux:c})}},{key:"qtdToUpdateMedicine",value:function(e){var t=this.status.qtdToIncrease;t[e.target.name]=e.target.value,this.setState({qtdToIncrease:t})}},{key:"saveIncreaseMedicine",value:function(){var e=this.state.medicacao;N.database().ref("medicamentos").set(e),this.clearInput()}},{key:"clearInput",value:function(){var e=this.status.qtdToIncrease;e.qtd=0,this.setState({qtdToIncrease:e})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(q,{icon:"dot-circle-o",title:" Medicamentos",subtitle:"Sentinela vers\xe3o web",children:[Object(c.jsx)("div",{className:"dysplay-4",children:"Painel do estoque atual de medicamentos, dosagem e aplica\xe7\xe3o"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("table",{className:"table table-hover table-responsive-sm table-sm table-borderless1",children:Object(c.jsxs)("thead",{className:"thead-dark",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Medica\xe7\xe3o"}),Object(c.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(c.jsx)("th",{children:"Dosagem"}),Object(c.jsx)("th",{children:"Frequencia"}),Object(c.jsx)("th",{children:"Estoque"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Carbamazepina"}),Object(c.jsx)("td",{children:"Carbamazepina"}),Object(c.jsx)("td",{children:"200 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3 e noite"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.carbamazepina})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Risperidona"}),Object(c.jsx)("td",{children:"Risperidona"}),Object(c.jsx)("td",{children:"1 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3 e noite"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.risperidona})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Brilinta"}),Object(c.jsx)("td",{children:"Brilinta"}),Object(c.jsx)("td",{children:"90 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3 e noite"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.brilinta})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Losartana (Aradois)"}),Object(c.jsx)("td",{children:"Losartana (Aradois)"}),Object(c.jsx)("td",{children:"25 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3 e noite"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.losartana})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Concor"}),Object(c.jsx)("td",{children:"Concor"}),Object(c.jsx)("td",{children:"2.5 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.concor})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Zimpas "}),Object(c.jsx)("td",{children:"Zimpas "}),Object(c.jsx)("td",{children:"10 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.zimpas})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Lasix"}),Object(c.jsx)("td",{children:"Lasix"}),Object(c.jsx)("td",{children:"40 Mlg"}),Object(c.jsx)("td",{children:"Manh\xe3"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.lasix})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"AAS"}),Object(c.jsx)("td",{children:"AAS"}),Object(c.jsx)("td",{children:"100 Mlg"}),Object(c.jsx)("td",{children:"Tarde"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.aas})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Aldactone"}),Object(c.jsx)("td",{children:"Aldactone"}),Object(c.jsx)("td",{children:"25 Mlg"}),Object(c.jsx)("td",{children:"Tarde"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.aldactone})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Ancorom(Clori. Amid.)"}),Object(c.jsx)("td",{children:"Ancorom(Clori. Amid.)"}),Object(c.jsx)("td",{children:"200 Mlg"}),Object(c.jsx)("td",{children:"Tarde"}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:this.state.medicacao.ancorom})})]})]})}),Object(c.jsx)("hr",{}),Object(c.jsx)("legend",{children:"Foi realizado a compra de algum dos medicamentos abaixo?"}),Object(c.jsx)("label",{children:"Qual a quantidade adquirida?"}),Object(c.jsx)("input",{className:"form-control col-md-1",min:"0",type:"number",name:"qtd",value:this.status.qtdToIncrease.qtd,onChange:function(t){return e.qtdToUpdateMedicine(t)}}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Qual a medica\xe7\xe3o adquirida?"}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"carbamazepina",name:"carbamazepina",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"carbamazepina",children:" Carbamazepina "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"risperidona",name:"risperidona",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"risperidona",children:" Risperidona "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"brilinta",name:"brilinta",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"brilinta",children:" Brilinta "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"losartana",name:"losartana",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"losartana",children:" Losartana "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"concor",name:"concor",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"concor",children:" Concor "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"zimpas",name:"zimpas",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"zimpas",children:" Zimpas "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"lasix",name:"lasix",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"lasix",children:" Lasix "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"aas",name:"aas",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"aas",children:" AAS "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"aldactone",name:"aldactone",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"aldactone",children:" Aldactone "})]}),Object(c.jsxs)("div",{className:"custom-control custom-checkbox col",children:[Object(c.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"ancorom",name:"ancorom",onChange:function(t){return e.updateStockMedicine(t)},valor:"codifica\xe7\xe3o"}),Object(c.jsx)("label",{className:"custom-control-label",htmlFor:"ancorom",children:" Ancorom "})]})]}),Object(c.jsx)("button",{className:"btnsalvar2 btn btn-outline-info",onClick:this.saveIncreaseMedicine,children:"Adicionar"})]})]})}}]),a}(n.Component),ae=function(e){return Object(c.jsxs)(q,{icon:"history",title:" Historico",subtitle:"Sentinela vers\xe3o web",children:[Object(c.jsx)("div",{className:"dysplay-4",children:"Historico de resultados e exames realizados"}),Object(c.jsx)("hr",{})]})},ce=function(e){return Object(c.jsxs)(p.d,{children:[Object(c.jsx)(p.b,{exact:!0,path:"/home",component:T}),Object(c.jsx)(p.b,{path:"/glicose",component:Z}),Object(c.jsx)(p.b,{path:"/pressao",component:K}),Object(c.jsx)(p.b,{path:"/medicacao",component:te}),Object(c.jsx)(p.b,{path:"/acervo",component:ae}),Object(c.jsx)(p.a,{from:"*",to:"/home"})]})},ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(w,{}),Object(c.jsx)(A,{}),Object(c.jsx)(ce,{}),Object(c.jsx)(I,{})]})})}}]),a}(n.Component),se=a(74),oe=function(e){var t=e.component,a=Object(se.a)(e,["component"]),s=Object(n.useContext)(y).currentUser;return Object(c.jsx)(p.b,Object(O.a)(Object(O.a)({},a),{},{render:function(e){return s?Object(c.jsx)(t,Object(O.a)({},e)):Object(c.jsx)(p.a,{to:"/login"})}}))},ie=Object(p.g)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(h.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=a.target.elements.email,e.prev=2,e.next=5,N.auth().sendPasswordResetEmail(c.value);case 5:t.push("/login"),alert("Mensagem enviada com sucesso"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Recuperar senha de acesso"}),Object(c.jsxs)("div",{className:"paginicial",children:[Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("div",{className:"form-group ",children:[Object(c.jsx)("label",{htmlFor:"emailid",children:"Email para recuperar a senha"}),Object(c.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",id:"emailid"})]}),Object(c.jsx)("button",{className:"btn btn-dark col",type:"submit",children:"Recuperar"})]}),Object(c.jsx)("div",{children:Object(c.jsx)(b.b,{to:"/login",children:Object(c.jsx)("button",{className:" btn btn-link col",children:"Voltar a tela de login"})})})]})]})})),re=function(){return Object(c.jsx)(F,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(p.b,{path:"/login",component:C}),Object(c.jsx)(p.b,{path:"/registrar",component:S}),Object(c.jsx)(p.b,{path:"/forgot",component:ie}),Object(c.jsx)(oe,{path:"/",component:ne}),Object(c.jsx)(p.a,{from:"*",to:"/login"})]})})},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)(b.a,{children:Object(c.jsx)("div",{className:"pageLogin",children:Object(c.jsx)(re,{})})})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[158,1,2]]]);
//# sourceMappingURL=main.558e65ab.chunk.js.map