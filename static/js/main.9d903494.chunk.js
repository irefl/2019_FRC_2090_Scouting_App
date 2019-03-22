(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(29),o=a.n(l),i=(a(104),a(86)),u=a(87),s=a(97),m=a(88),b=a(98),d=a(11),E=a.n(d),h=(a(58),a(9)),f=(a(79),a(89)),g=a.n(f),v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{margin:"auto",marginTop:50,textAlign:"center"}},c.a.createElement(g.a,{type:"Oval",color:"#005696",height:"100",width:"100"})))},k=a(30),p=a(23),y=a(10),R=a(90),O=function(e){var t=e.style,a=e.onClick,n=e.children;return c.a.createElement(R.a,{style:Object(y.a)({},t,{backgroundColor:"#20508b"}),onClick:a||function(){return null}}," ",n)},S=[{link:"/enterinfo",name:"Enter match info"},{link:"/stats/0",name:"See statstics by team"},{link:"/allstats",name:"See all team statistics"}],w=function(e){var t=e.currentUser;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"FRC 2090 Scouting App"),c.a.createElement("h2",null,"Welcome, ",t.displayName),S.map(function(e,t){return c.a.createElement("div",{key:"pageButton"+t},c.a.createElement(k.b,{to:e.link},c.a.createElement(O,{style:{marginTop:10}},e.name)))}),c.a.createElement("hr",null),c.a.createElement(O,{style:{marginTop:10},onClick:function(){E.a.auth().signOut()}},"Sign out"))},L=a(63),j=a.n(L),C=a(94),T=a(201),A=a(202),H=a(207),N=a(203),x=[216,244,288,359,368,1378,1622,1661,1739,2090,2437,2438,2439,2441,2443,2444,2445,2465,2477,2853,2896,3008,3721,3800,3878,3881,3882,4253,4270,4984,5625,5701,6308,6309,6704,6909,7069],B={1378:"Hilo Viking Robotics",1622:"Team Spyder",1661:"Griffitrons",1739:"Chicago Knights",2090:"Buff 'n Blue",216:"More RoboDawgs",2437:"Lancer Robotics",2438:"'Iobotics",2439:"Bearbotics",244:"RoboDawgs 3D",2441:"Spartechs",2443:"Blue Thunder",2444:"Kamehameha RoboWarriors",2445:"RoboKAP",2465:"Kauaibots",2477:"Marauder Rascals",2853:"Hot Spot Robotics",288:"The RoboDawgs",2896:"MechaMonarchs",3008:"Team Magma",359:"Hawaiian Kids",368:"Team Kika Mana",3721:"Charger Robotics",3800:"Mustangs",3878:"Wildcats",3881:"WHEA Sharkbots",3882:"Lunas",4253:"Raid Zero",4270:"Crusaders",4984:"Bullseye",5625:"TrojanBots",5701:"RAIJINbotics",6308:"SPCS - Hafabots",6309:"SPCS - Koko Tek",6704:"Mid Pacific Owl Robotics",6909:"SAKURA Tempesta",7069:"Taipei 101"},F=function(e){var t=e.selectedTeam,a=e.setSelectedTeam,n=Object(r.useState)(!1),l=Object(h.a)(n,2),o=l[0],i=l[1];return c.a.createElement(T.a,{isOpen:o,toggle:function(){return i(!o)}},c.a.createElement(A.a,{caret:!0,style:{backgroundColor:"#20508b"}},0!==t?c.a.createElement(c.a.Fragment,null,t," - ",B[t]):c.a.createElement(c.a.Fragment,null,"Choose a team")),c.a.createElement(H.a,{modifiers:{setMaxHeight:{enabled:!0,order:890,fn:function(e){return Object(y.a)({},e,{styles:Object(y.a)({},e.styles,{overflow:"auto",maxHeight:.8*window.innerHeight})})}}}},x.map(function(e){return c.a.createElement(N.a,{key:e,onClick:function(){a(e)}},e," - ",B[e])})))},M=a(204),G=a(205),_=a(95),U=a(206),z=a(12),I=function(e){var t=e.matchNumber,a=e.setMatchNumber;return c.a.createElement(M.a,null,c.a.createElement(G.a,{addonType:"prepend"},c.a.createElement(_.a,null,"Match Number")),c.a.createElement(U.a,{value:0!==t?t:"",placeholder:"Number",type:"number",onChange:function(e){var t=Number(e.target.value);t>100||t<0?z.toast.warn("Match number must be between 0 and 100"):a(t)}}))},P=[{value:0,name:"No auto"},{value:1,name:"Attempted to move but didn't cross any lines"},{value:2,name:"COMPLETELY Crossed HAB line from level 1"},{value:3,name:"COMPLETELY Crossed HAB line from level 2"},{value:4,name:"Huge failure (details in notes)"}],W=function(e){var t=e.selectedAuton,a=e.setSelectedAuton,n=Object(r.useState)(!1),l=Object(h.a)(n,2),o=l[0],i=l[1];return c.a.createElement(T.a,{isOpen:o,toggle:function(){return i(!o)}},c.a.createElement(A.a,{caret:!0,style:{backgroundColor:"#20508b"}},-1!==t?c.a.createElement(c.a.Fragment,null,P[t].name):c.a.createElement(c.a.Fragment,null,"Select an autonomous")),c.a.createElement(H.a,{modifiers:{setMaxHeight:{enabled:!0,order:890,fn:function(e){return Object(y.a)({},e,{styles:Object(y.a)({},e.styles,{overflow:"auto",maxHeight:.8*window.innerHeight})})}}}},P.map(function(e){var t=e.value,n=e.name;return c.a.createElement(N.a,{key:t,onClick:function(){a(t)}},n)})))},D={NONE:"none",CARGO:"cargo",HATCH:"hatch",CARGO_AND_HATCH:"cargoAndHatch"},K=function(){return c.a.createElement("svg",{height:"50",width:"50"})},V=function(){return c.a.createElement("svg",{height:"50",width:"50"},c.a.createElement("circle",{cx:"25",cy:"25",r:"15",stroke:"#f4d941",strokeWidth:"0",fill:"#ffa500"}))},Y=function(){return c.a.createElement("svg",{height:"50",width:"50"},c.a.createElement("circle",{cx:"25",cy:"25",r:"15",stroke:"#f4d941",strokeWidth:"10",fill:"#eeeeee"}))},J=function(){return c.a.createElement("svg",{height:"50",width:"50"},c.a.createElement("circle",{cx:"25",cy:"25",r:"15",stroke:"#f4d941",strokeWidth:"10",fill:"#ffa500"}))},q=D.NONE,Q=D.CARGO,Z=D.CARGO_AND_HATCH,$=D.HATCH,X=function(e){var t=e.name,a=e.value,n=e.rocket,r=e.setRocket;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{width:51,height:51,border:"1px solid black",display:"inline-block",cursor:"pointer",userSelect:"none"},onClick:function(){!function(e,t,a){var n=Object(y.a)({},e);switch(e[a]){case q:n[a]=$;break;case $:n[a]=Q;break;case Q:n[a]=Z;break;case Z:default:n[a]=q}t(n)}(n,r,t)}},a===q&&c.a.createElement(K,null),a===$&&c.a.createElement(Y,null),a===Z&&c.a.createElement(J,null),a===Q&&c.a.createElement(V,null)))},ee=function(e){var t=e.rocket,a=e.setRocket;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:150}},"Top level "),c.a.createElement(X,{rocket:t,setRocket:a,name:"topLeft",value:t.topLeft}),c.a.createElement(X,{rocket:t,setRocket:a,name:"topRight",value:t.topRight})),c.a.createElement("div",null,c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:150}},"Mid level "),c.a.createElement(X,{rocket:t,setRocket:a,name:"midLeft",value:t.midLeft}),c.a.createElement(X,{rocket:t,setRocket:a,name:"midRight",value:t.midRight})),c.a.createElement("div",null,c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:150}},"Bot level "),c.a.createElement(X,{rocket:t,setRocket:a,name:"botLeft",value:t.botLeft}),c.a.createElement(X,{rocket:t,setRocket:a,name:"botRight",value:t.botRight})))},te=[{value:"LEFT",name:"LEFT"},{value:"RIGHT",name:"RIGHT"}],ae=function(e){var t=e.side,a=e.setSide,n=Object(r.useState)(!1),l=Object(h.a)(n,2),o=l[0],i=l[1];return c.a.createElement(T.a,{isOpen:o,toggle:function(){return i(!o)}},c.a.createElement(A.a,{caret:!0,style:{backgroundColor:"#20508b"}},""!==t?c.a.createElement(c.a.Fragment,null,t):c.a.createElement(c.a.Fragment,null,"Select a side")),c.a.createElement(H.a,{modifiers:{setMaxHeight:{enabled:!0,order:890,fn:function(e){return Object(y.a)({},e,{styles:Object(y.a)({},e.styles,{overflow:"auto",maxHeight:.8*window.innerHeight})})}}}},te.map(function(e){var t=e.value,n=e.name;return c.a.createElement(N.a,{key:t,onClick:function(){a(t)}},n)})))},ne=a(38),re=function(e){var t=e.rocket,a=e.setRocket,n=e.side;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,("LEFT"===n||""===n)&&c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:57}},"Nose"),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay1",value:t.bay1}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay2",value:t.bay2}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay3",value:t.bay3}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay4",value:t.bay4}),"RIGHT"===n&&c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:57}},"Nose")),c.a.createElement("div",null,("LEFT"===n||""===n)&&c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:57}},"Nose"),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay5",value:t.bay5}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay6",value:t.bay6}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay7",value:t.bay7}),c.a.createElement(X,{rocket:t,setRocket:a,name:"bay8",value:t.bay8}),"RIGHT"===n&&c.a.createElement("div",{style:{marginRight:5,fontSize:"1.5em",display:"inline-block",width:57}},"Nose")))},ce=a(96),le=a.n(ce),oe=a(24),ie={NONE:0,LEVEL_1:1,LEVEL_2:2,LEVEL_3:3},ue=ie.NONE,se=ie.LEVEL_1,me=ie.LEVEL_2,be=ie.LEVEL_3,de=[{value:ue,name:"None"},{value:se,name:"Level 1"},{value:me,name:"Level 2"},{value:be,name:"Level 3"}],Ee=(n={},Object(oe.a)(n,ue,"None"),Object(oe.a)(n,se,"Level 1"),Object(oe.a)(n,me,"Level 2"),Object(oe.a)(n,be,"Level 3"),n),he=function(e){var t=e.habBonus,a=e.setHabBonus,n=Object(r.useState)(!1),l=Object(h.a)(n,2),o=l[0],i=l[1];return c.a.createElement(T.a,{isOpen:o,toggle:function(){return i(!o)}},c.a.createElement(A.a,{caret:!0,style:{backgroundColor:"#20508b"}},""!==t?c.a.createElement(c.a.Fragment,null,Ee[t]):c.a.createElement(c.a.Fragment,null,"Select a parking bonus")),c.a.createElement(H.a,{modifiers:{setMaxHeight:{enabled:!0,order:890,fn:function(e){return Object(y.a)({},e,{styles:Object(y.a)({},e.styles,{overflow:"auto",maxHeight:.8*window.innerHeight})})}}}},de.map(function(e){var t=e.value,n=e.name;return c.a.createElement(N.a,{key:t,onClick:function(){a(t)}},n)})))},fe=function(e){var t=e.space||0;return c.a.createElement("div",{style:{marginTop:t}})},ge=D.NONE,ve=D.CARGO,ke=D.CARGO_AND_HATCH,pe=D.HATCH,ye=function(e){var t=0;return Object.keys(e).forEach(function(a){switch(e[a]){case ve:t+=3;break;case pe:t+=2;break;case ke:t+=5;break;default:t+=0}}),t},Re=function(e){var t=e.selectedTeam,a=e.matchNumber,n=e.side,r=e.selectedAuton,c=e.habBonus;return 0===t?(z.toast.error("You haven't selected a team!"),!1):""===n?(z.toast.error("You haven't selected a side!"),!1):0===a?(z.toast.error("You haven't provided a match number!"),!1):-1===r?(z.toast.error("You haven't provided info about autonomous!"),!1):""!==c||(z.toast.error("You haven't provided the habitat bonus info!"),!1)},Oe=function(){var e=Object(r.useState)(0),t=Object(h.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(0),o=Object(h.a)(l,2),i=o[0],u=o[1],s=Object(r.useState)(""),m=Object(h.a)(s,2),b=m[0],d=m[1],f=Object(r.useState)(-1),g=Object(h.a)(f,2),v=g[0],p=g[1],y=Object(r.useState)({topLeft:ge,topRight:ge,midLeft:ge,midRight:ge,botLeft:ge,botRight:ge}),R=Object(h.a)(y,2),S=R[0],w=R[1],L=Object(r.useState)({topLeft:ge,topRight:ge,midLeft:ge,midRight:ge,botLeft:ge,botRight:ge}),T=Object(h.a)(L,2),A=T[0],H=T[1],N=Object(r.useState)({bay1:ge,bay2:ge,bay3:ge,bay4:ge,bay5:ge,bay6:ge,bay7:ge,bay8:ge}),x=Object(h.a)(N,2),M=x[0],G=x[1],_=Object(r.useState)(""),P=Object(h.a)(_,2),D=P[0],K=P[1],V=Object(r.useState)(""),Y=Object(h.a)(V,2),J=Y[0],q=Y[1],Q=function(e){var t=e.selectedAuton,a=e.nearRocket,n=e.farRocket,r=e.cargo,c=e.habBonus,l=0;switch(t){case 2:l+=3;break;case 3:l+=6;break;default:l+=0}switch(l+=ye(a),l+=ye(n),l+=ye(r),c){case ie.LEVEL_1:l+=3;break;case ie.LEVEL_2:l+=6;break;case ie.LEVEL_3:l+=12;break;default:l+=0}return l}({selectedAuton:v,nearRocket:S,farRocket:A,cargo:M,habBonus:D});return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Enter match information"),c.a.createElement("h2",null,"General info"),c.a.createElement(F,{selectedTeam:a,setSelectedTeam:n}),c.a.createElement(fe,{space:10}),c.a.createElement(ae,{side:b,setSide:d}),c.a.createElement(fe,{space:10}),c.a.createElement(I,{matchNumber:i,setMatchNumber:u}),c.a.createElement(fe,{space:10}),c.a.createElement("img",{src:le.a,alt:"Platform reference",style:{width:150,border:"3px solid #20508b",borderRadius:10}}),c.a.createElement("h2",null,"Autonomous"),c.a.createElement(W,{selectedAuton:v,setSelectedAuton:p}),c.a.createElement(fe,{space:10}),c.a.createElement("h2",null,"Match"),c.a.createElement(ne.Grid,null,c.a.createElement(ne.Row,null,c.a.createElement(ne.Col,{md:6},c.a.createElement("h3",null,c.a.createElement("strong",null,"Far")," Rocket"),c.a.createElement(ee,{rocket:A,setRocket:H}),c.a.createElement("h3",null,c.a.createElement("strong",null,"Near")," Rocket"),c.a.createElement(ee,{rocket:S,setRocket:w})),c.a.createElement(ne.Col,{md:6},c.a.createElement("h3",null,"Cargo Ship"),c.a.createElement(re,{rocket:M,setRocket:G,side:b})))),c.a.createElement(fe,{space:20}),c.a.createElement("h3",null,"Habitat Parking Bonus"),c.a.createElement(he,{habBonus:D,setHabBonus:K}),c.a.createElement(fe,{space:10}),c.a.createElement("h2",null,"Notes and observations (optional)"),c.a.createElement(U.a,{type:"textarea",value:J,onChange:function(e){q(e.target.value)}}),c.a.createElement(fe,{space:10}),c.a.createElement("h2",null,"Review and submit"),0!==a&&c.a.createElement("p",{style:{fontSize:30,fontWeight:"bold"}},"Team ",a," - ",B[a]," has scored ",c.a.createElement("span",{style:{color:"#990000"}},Q)," points"),0===a&&c.a.createElement("p",null,"Please select a team"),c.a.createElement(O,{onClick:Object(C.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Re({selectedTeam:a,matchNumber:i,side:b,selectedAuton:v,habBonus:D})){e.next=29;break}return z.toast.info("Submitting data..."),e.next=5,E.a.database().ref("2019data/".concat(a,"/").concat(i)).once("value");case 5:if(!e.sent.val()){e.next=10;break}return z.toast.error("Match for this team has been recorded already!"),e.abrupt("return");case 10:return e.next=12,E.a.database().ref("2019data/".concat(a,"/").concat(i)).set({side:b,selectedAuton:v,nearRocket:S,farRocket:A,cargo:M,habBonus:D,observations:J,score:Q});case 12:return e.next=14,E.a.database().ref("2019data/".concat(a,"/").concat(i)).once("value");case 14:if(e.sent.val()){e.next=19;break}return z.toast.error("Match failed to upload. Please try again in a bit"),e.abrupt("return");case 19:z.toast.success("Match uploaded successfully"),n(0),u(0),d(""),p(-1),w({topLeft:ge,topRight:ge,midLeft:ge,midRight:ge,botLeft:ge,botRight:ge}),H({topLeft:ge,topRight:ge,midLeft:ge,midRight:ge,botLeft:ge,botRight:ge}),G({bay1:ge,bay2:ge,bay3:ge,bay4:ge,bay5:ge,bay6:ge,bay7:ge,bay8:ge}),K(""),q("");case 29:case"end":return e.stop()}},e)}))},"Submit"),c.a.createElement("hr",null),c.a.createElement(k.b,{to:"/"},c.a.createElement(O,null,"Back")))},Se=function(){return c.a.createElement("div",null,"This page is under construction")},we=function(){return c.a.createElement("div",null,"This page is under construction")},Le=function(e){var t=e.currentUser,a=Object(r.useState)(!1),n=Object(h.a)(a,2),l=n[0],o=n[1],i=Object(r.useState)(!0),u=Object(h.a)(i,2),s=u[0],m=u[1];return Object(r.useEffect)(function(){var e=E.a.database().ref("canSee");return e.on("value",function(e){var t=e.val()||!1;o(t),m(!1)}),function(){e.off()}},[]),s?c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(O,{style:{marginTop:10},onClick:function(){E.a.auth().signOut()}},"Sign out")):c.a.createElement(c.a.Fragment,null,l&&c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:function(){return c.a.createElement(w,{currentUser:t})}}),c.a.createElement(p.a,{path:"/enterinfo",component:function(){return c.a.createElement(Oe,{currentUser:t})}}),c.a.createElement(p.a,{path:"/stats/:team",component:function(){return c.a.createElement(Se,{currentUser:t})}}),c.a.createElement(p.a,{path:"/allstats",component:function(){return c.a.createElement(we,{currentUser:t})}})))),!l&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"You are not authorized to see this page."),c.a.createElement(O,{style:{marginTop:10},onClick:function(){E.a.auth().signOut()}},"Sign out")))},je=(a(198),a(199),new E.a.auth.GoogleAuthProvider),Ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:null,loading:!0},a.componentDidMount=function(){a.auth=E.a.auth().onAuthStateChanged(function(e){e?(a.setState({currentUser:e,loading:!1}),z.toast.success("Login successful",{autoClose:3e3})):a.setState({currentUser:null,loading:!1})})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentUser;return e.loading?c.a.createElement(v,null):c.a.createElement("div",{style:{marginLeft:"5%",marginRight:"5%",marginTop:"2%",marginBottom:"5%"}},c.a.createElement(z.ToastContainer,null),!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{margin:"auto",color:"#20508b"}},c.a.createElement("h1",null,"FRC 2090 Scouting App 2019"),c.a.createElement("h2",null,"Built by William Kwok"),c.a.createElement(O,{style:{marginTop:10},onClick:function(){E.a.auth().signInWithRedirect(je)}},"Log in via google"))),t&&c.a.createElement(Le,{currentUser:t}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("v1.0.0");E.a.initializeApp({apiKey:"AIzaSyDqNearNomkDkz8cgGN5jkvnKUcxabHQ1g",authDomain:"frc2090scouting.firebaseapp.com",databaseURL:"https://frc2090scouting.firebaseio.com",projectId:"frc2090scouting",storageBucket:"frc2090scouting.appspot.com",messagingSenderId:"536911532006"}),o.a.render(c.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a.p+"static/media/HabPlatforms.8d295c08.png"},99:function(e,t,a){e.exports=a(200)}},[[99,1,2]]]);
//# sourceMappingURL=main.9d903494.chunk.js.map