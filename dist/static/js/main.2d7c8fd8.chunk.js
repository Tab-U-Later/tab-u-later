(this["webpackJsonptab-u-later"]=this["webpackJsonptab-u-later"]||[]).push([[0],{396:function(e,n,t){},398:function(e,n,t){},419:function(e,n){},421:function(e,n){},430:function(e,n){},432:function(e,n){},457:function(e,n){},458:function(e,n){},463:function(e,n){},465:function(e,n){},489:function(e,n){},528:function(e,n){},638:function(e,n){},803:function(e,n,t){"use strict";t.r(n);var c=t(3),a=t(0),r=t.n(a),i=t(17),s=t.n(i),o=(t(396),t(20)),u=(t(397),t(398),t(85)),l=t.n(u),j=t(149),b=t(33),O=t(21),d=t(19),f=t(18),p=t(836),x=t(843),h=t(845),m=t(847),v=t(859),g=t(841),y=t(842),S=t(862),k=t(846),w=t(840),C=t(848),E=t(849),N=t(863),I=t(861),T=t(84),D=Object(a.createContext)();function A(e,n){switch(n.type){case"SET_SESSIONS":return{sessions:n.payload};case"ADD_SESSION":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},n.payload.seshName,n.payload.session))});case"REMOVE_SESSION":var t=e.sessions;return delete t[n.payload],Object(O.a)(Object(O.a)({},e),{},{sessions:t});case"ADD_TAB":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},n.payload.name,[].concat(Object(T.a)(e.sessions[n.payload.name]),[n.payload.url])))});case"REMOVE_TAB":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},n.payload.name,n.payload.session))})}}function R(){var e=Object(d.a)(["\n  margin-right: 5px !important;\n"]);return R=function(){return e},e}function _(){var e=Object(d.a)(["\n  margin-left: 10px !important;\n"]);return _=function(){return e},e}function M(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return M=function(){return e},e}function B(){var e=Object(d.a)(["\n  text-align: left;\n"]);return B=function(){return e},e}function z(){var e=Object(d.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 15px 0px;\n"]);return z=function(){return e},e}function V(){var e=Object(d.a)(["\n  position: relative;\n  margin: 15px 10px !important;\n"]);return V=function(){return e},e}function F(){var e=Object(d.a)(["\n  position: fixed !important;\n  top: 400px;\n  left: 320px;\n  right: 20px;\n"]);return F=function(){return e},e}var L=Object(f.a)(p.a)(F()),P=Object(f.a)(v.a)(V()),J=f.a.div(z()),U=f.a.h2(B()),q=f.a.div(M()),W=Object(f.a)(g.a)(_()),G=Object(f.a)(y.a)(R()),H=function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(null),s=Object(o.a)(i,2),u=s[0],d=s[1],f=Object(a.useState)({}),p=Object(o.a)(f,2),v=p[0],g=p[1],T=Object(a.useState)(!1),A=Object(o.a)(T,2),R=A[0],_=A[1],M=Object(a.useState)(null),B=Object(o.a)(M,2),z=B[0],V=B[1],F=Object(a.useState)(null),H=Object(o.a)(F,2),K=H[0],Q=H[1],X=Object(a.useContext)(D),Y=(X.state,X.dispatch),Z=function(e,n){g(Object(O.a)(Object(O.a)({},v),{},Object(b.a)({},e.target.name,{checked:e.target.checked,url:n})))},$=function(){var e=Object(j.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t in r(!1),n=[],v)!0!==v[t].checked&&!0!==z||n.push({title:t,url:v[t].url});return Y({type:"ADD_SESSION",payload:{seshName:K,session:n}}),e.next=6,chrome.storage.sync.set(Object(b.a)({},K,n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e={};for(var n in v)e=Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,{url:v[n].url,checked:!z}));g(e),V(!z)};return Object(a.useEffect)((function(){chrome.tabs.query({currentWindow:!0},(function(e){d(e);var n={};e.forEach((function(e){n=Object(O.a)(Object(O.a)({},n),{},Object(b.a)({},e.title,{checked:!1,url:e.url}))})),g(n)}))}),[]),Object(a.useEffect)((function(){var e=z;for(var n in v)!0===v[n].checked&&(e=!0);_(e&&null!==K&&""!==K)}),[Z,ee]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{onClick:function(e){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&r(!t)}(e)},color:"secondary","aria-label":"add",children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(S.a,{anchor:"left",open:t,children:u?Object(c.jsxs)("div",{children:[Object(c.jsxs)(q,{children:[Object(c.jsx)(U,{children:"Create Session"}),Object(c.jsx)(y.a,{onClick:function(){return r(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(P,{id:"outlined-basic",label:"Session Name",variant:"outlined",size:"small",value:K,onChange:function(e){return Q(e.target.value)}}),Object(c.jsx)(k.a,{}),Object(c.jsxs)(J,{children:[Object(c.jsx)(W,{onClick:function(){return ee()},color:"secondary",children:"Select All"}),R?Object(c.jsx)(G,{color:"secondary",onClick:$,children:Object(c.jsx)(m.a,{})}):null]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Opened Tabs"}),children:u.map((function(e){return Object(c.jsx)(E.a,{children:Object(c.jsx)(N.a,{control:Object(c.jsx)(I.a,{color:"primary",checked:!!v[e.title]&&v[e.title].checked,onChange:function(n){return Z(n,e.url)},name:e.title}),label:e.title.length>15?e.title.substring(0,15)+"...":e.title})})}))})]}):Object(c.jsx)("h3",{children:"No Tabs open. Add more tabs to your window"})})]})},K=t(804),Q=t(853),X=t(854),Y=t(855),Z=t(850),$=t(851),ee=t(852),ne=t(403),te=t(621);var ce=t(860),ae=t(844),re=t(805),ie=t(383),se=Object(ie.a)({palette:{primary:{main:"#82b1ff"},secondary:{main:"#7c4dff"}},overrides:{MuiDrawer:{width:"250px"}}}),oe=function(e){var n=e.open,t=e.toggleModal,a=Object(f.c)(se),r=Object(Z.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(a);return Object(c.jsx)(ce.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:n,onClose:function(){return t(!1)},closeAfterTransition:!0,BackdropComponent:ae.a,BackdropProps:{timeout:500},children:Object(c.jsx)(re.a,{in:n,children:Object(c.jsxs)(K.a,{className:r.paper,children:[Object(c.jsx)("h2",{children:"Error"}),Object(c.jsx)("p",{id:"transition-modal-description",children:"The URL you provided is not valid"})]})})})};function ue(){var e=Object(d.a)(["\n  &.new{\n    background-color: green;\n    &.isVisible{\n      animation: "," ease 2s 1;\n      animation-fill-mode: forwards\n    }\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object(d.a)(["\n  from {background-color: green;}\n  to {background-color: white;}\n"]);return le=function(){return e},e}function je(){var e=Object(d.a)(['\n  font-size: 1.5em !important;\n  font-family: "Open Sans" !important;\n\n']);return je=function(){return e},e}function be(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return be=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  text-align: left;\n\n"]);return Oe=function(){return e},e}function de(){var e=Object(d.a)(["\n"]);return de=function(){return e},e}var fe=Object(f.a)(v.a)(de()),pe=f.a.h2(Oe()),xe=f.a.div(be()),he=f.a.p(je()),me=Object(f.b)(le()),ve=Object(f.a)(E.a)(ue(),me),ge=function(e){var n=Object(a.useState)(null),t=Object(o.a)(n,2),r=t[0],i=t[1],s=Object(a.useState)(null),u=Object(o.a)(s,2),O=u[0],d=u[1],f=Object(a.useState)(!1),p=Object(o.a)(f,2),x=p[0],m=p[1],v=Object(a.useState)(null),g=Object(o.a)(v,2),N=g[0],I=g[1],A=Object(a.useContext)(D),R=A.state,_=A.dispatch,M=function(e){var n=Object(a.useRef)();return Object(a.useEffect)((function(){n.current=e})),n.current}(R.sessions[e.name]),B=Object(a.useRef)(),z=function(e){var n=Object(a.useState)(!1),t=Object(o.a)(n,2),c=t[0],r=t[1],i=new IntersectionObserver((function(e){var n=Object(o.a)(e,1)[0];return r(n.isIntersecting)}));return Object(a.useEffect)((function(){return void 0!==e.current&&null!==e.current&&(i.observe(e.current),function(){i.disconnect()})}),[e,i]),c}(B),V=Object(Z.a)((function(){return{successIcon:{color:"green"},errorIcon:{color:"red"}}}))();var F=function(){var n=Object(j.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,chrome.storage.sync.remove([e.name]);case 2:return n.next=4,chrome.storage.sync.set(Object(b.a)({},r,R.sessions[e.name]));case 4:i(""),e.toggleDrawer(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n,t;t=function(n){404!==n?(chrome.storage.sync.set(Object(b.a)({},e.name,[].concat(Object(T.a)(R.sessions[e.name]),[n]))),_({type:"ADD_TAB",payload:{name:e.name,url:n}}),d("")):m(!0)},ne(n="https://cors-anywhere.herokuapp.com/"+(n=O),(function(e,c,a){var r={};e?r=404:e||200!==c.statusCode?(console.log("Error = ".concat(e,", code = ").concat(c.statusCode)),r=404):r={title:te.load(a)("head > title").text().trim(),url:n},t(r)}))};return Object(a.useEffect)((function(){if(void 0!==M){var n=R.sessions[e.name].filter((function(e){return!M.includes(e)}));I(n[0])}}),[R.sessions[e.name]]),Object(a.useEffect)((function(){if(!0===z)return function(){I(null)}}),[z]),Object(c.jsx)(S.a,{anchor:"left",open:e.open,children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(xe,{children:[Object(c.jsx)(pe,{children:"Edit ".concat(e.name)}),Object(c.jsx)(y.a,{onClick:function(){return e.toggleDrawer(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Change Session Name"}),children:Object(c.jsxs)(E.a,{children:[Object(c.jsx)(fe,{id:"outlined-basic",label:"Rename Session",variant:"outlined",size:"small",value:r,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(y.a,{className:null===r||""===r?"null":V.successIcon,disabled:null===r||""===r,onClick:F,children:Object(c.jsx)($.a,{})})]})}),Object(c.jsx)(k.a,{}),Object(c.jsxs)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Add a Tab"}),children:[Object(c.jsxs)(E.a,{children:[Object(c.jsx)(fe,{id:"outlined-basic",label:"Tab URL",variant:"outlined",size:"small",value:O,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)(y.a,{className:null===O||""===O?"null":V.successIcon,disabled:null===O||""===O,onClick:function(){return L()},children:Object(c.jsx)($.a,{})})]}),Object(c.jsx)(oe,{toggleModal:m,open:x})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Saved Tabs"}),children:R.sessions[e.name].map((function(n){return Object(c.jsxs)(ve,{ref:N&&(n.title===N.title?B:null),className:N&&(n.title===N.title?z?"new isVisible":"new":null),children:[Object(c.jsx)(y.a,{size:"medium",className:V.errorIcon,onClick:function(){return function(n){var t=[];R.sessions[e.name].forEach((function(e){e.title!==n&&t.push(e)})),_({type:"REMOVE_TAB",payload:{name:e.name,session:t}}),chrome.storage.sync.set(Object(b.a)({},e.name,t))}(n.title)},children:Object(c.jsx)(ee.a,{})}),Object(c.jsx)(he,{children:n.title.length>15?n.title.substring(0,15)+"...":n.title})]})}))})]})})};function ye(){var e=Object(d.a)(["\n  position: relative !important:\n  top: 10px !important;\n  display: flex;\n  flex-direction: row;\n  right: 0;\n  left: auto;\n  margin-bottom: 5px;\n"]);return ye=function(){return e},e}function Se(){var e=Object(d.a)(['\n  position: relative !important:\n  top: 10px !important;\n  text-align: center;\n  font-family: "Open Sans";\n  font-size: 1.5em;\n  font-weight: bold;\n']);return Se=function(){return e},e}function ke(){var e=Object(d.a)(["\n  height: 100px;\n  width: 150px;\n  margin: 5px;\n"]);return ke=function(){return e},e}var we=Object(f.a)(K.a)(ke()),Ce=f.a.p(Se()),Ee=f.a.div(ye()),Ne=function(e){var n=Object(a.useState)(!1),t=Object(o.a)(n,2),r=t[0],i=t[1],s=Object(a.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],b=Object(a.useContext)(D),O=b.state,d=b.dispatch;Object(a.useEffect)((function(){var n=[];O.sessions[e.name].forEach((function(e){n.push(e.url)})),j(n)}),[]);return Object(c.jsxs)(we,{elevation:3,children:[Object(c.jsx)(Ce,{children:e.name}),Object(c.jsxs)(Ee,{children:[Object(c.jsx)(y.a,{onClick:function(){chrome.windows.create({url:Object(T.a)(l)})},children:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(y.a,{onClick:function(){return i(!0)},children:Object(c.jsx)(X.a,{})}),Object(c.jsx)(y.a,{onClick:function(){return d({type:"REMOVE_SESSION",payload:e.name}),void chrome.storage.sync.remove([e.name])},children:Object(c.jsx)(Y.a,{})})]}),Object(c.jsx)(ge,{open:r,name:e.name,toggleDrawer:i})]})},Ie=t(856),Te=t(857);function De(){var e=Object(d.a)(["\n  margin-bottom: 15px;\n"]);return De=function(){return e},e}function Ae(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 15px 0px;\n"]);return Ae=function(){return e},e}function Re(){var e=Object(d.a)(["\n  position: absolute;\n  top: 80px;\n  left: 20px;\n  margin: 10px;\n"]);return Re=function(){return e},e}var _e=Object(f.a)(Ie.a)(Re()),Me=f.a.h1(Ae()),Be=f.a.div(De()),ze=function(){var e=Object(a.useContext)(D),n=e.state,t=e.dispatch;return Object(a.useEffect)((function(){chrome.storage.sync.get(null,(function(e){t({type:"SET_SESSIONS",payload:e})}))}),[]),Object(c.jsxs)(Be,{children:[Object(c.jsx)(Te.a,{children:Object(c.jsx)(Me,{children:"My Sessions"})}),Object(c.jsx)(_e,{container:!0,justify:"flex-start",spacing:3,children:Object.keys(n.sessions).length>=1?Object.entries(n.sessions).map((function(e){var n=Object(o.a)(e,2),t=n[0];n[1];return Object(c.jsx)(Ie.a,{item:!0,children:Object(c.jsx)(Ne,{name:t})},t)})):Object(c.jsx)("div",{children:"hi"})})]})};var Ve=function(){var e=Object(a.useReducer)(A,{sessions:{}}),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(c.jsxs)(D.Provider,{value:{state:t,dispatch:r},children:[Object(c.jsx)(ze,{}),Object(c.jsx)(H,{})]})},Fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,864)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))},Le=t(858);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Le.a,{theme:se,children:Object(c.jsx)(Ve,{})})}),document.getElementById("root")),Fe()}},[[803,1,2]]]);