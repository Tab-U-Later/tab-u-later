(this["webpackJsonptab-u-later"]=this["webpackJsonptab-u-later"]||[]).push([[0],{396:function(e,t,n){},398:function(e,t,n){},419:function(e,t){},421:function(e,t){},430:function(e,t){},432:function(e,t){},457:function(e,t){},458:function(e,t){},463:function(e,t){},465:function(e,t){},489:function(e,t){},528:function(e,t){},638:function(e,t){},803:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n.n(a),i=n(17),s=n.n(i),o=(n(396),n(20)),u=(n(397),n(398),n(85)),l=n.n(u),j=n(149),b=n(33),O=n(19),d=n(21),f=n(18),p=n(836),x=n(843),h=n(845),m=n(847),v=n(859),g=n(841),y=n(842),S=n(862),k=n(846),w=n(840),C=n(848),E=n(849),D=n(863),N=n(861),I=n(84),T=Object(a.createContext)();function A(e,t){switch(t.type){case"SET_SESSIONS":return{sessions:t.payload};case"ADD_SESSION":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},t.payload.seshName,t.payload.session))});case"REMOVE_SESSION":var n=e.sessions;return delete n[t.payload],Object(O.a)(Object(O.a)({},e),{},{sessions:n});case"ADD_TAB":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},t.payload.name,[].concat(Object(I.a)(e.sessions[t.payload.name]),[t.payload.url])))});case"REMOVE_TAB":return Object(O.a)(Object(O.a)({},e),{},{sessions:Object(O.a)(Object(O.a)({},e.sessions),{},Object(b.a)({},t.payload.name,t.payload.session))})}}function R(){var e=Object(d.a)(["\n  margin-right: 5px !important;\n"]);return R=function(){return e},e}function _(){var e=Object(d.a)(["\n  margin-left: 10px !important;\n"]);return _=function(){return e},e}function M(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return M=function(){return e},e}function B(){var e=Object(d.a)(["\n  text-align: left;\n"]);return B=function(){return e},e}function F(){var e=Object(d.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 15px 0px;\n"]);return F=function(){return e},e}function z(){var e=Object(d.a)(["\n  position: relative;\n  margin: 15px 10px !important;\n"]);return z=function(){return e},e}function V(){var e=Object(d.a)(["\n  position: fixed !important;\n  top: 400px;\n  left: 320px;\n  right: 20px;\n"]);return V=function(){return e},e}var L=Object(f.a)(p.a)(V()),P=Object(f.a)(v.a)(z()),J=f.a.div(F()),U=f.a.h2(B()),q=f.a.div(M()),W=Object(f.a)(g.a)(_()),G=Object(f.a)(y.a)(R()),H=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),s=Object(o.a)(i,2),u=s[0],d=s[1],f=Object(a.useState)({}),p=Object(o.a)(f,2),v=p[0],g=p[1],I=Object(a.useState)(!1),A=Object(o.a)(I,2),R=A[0],_=A[1],M=Object(a.useState)(null),B=Object(o.a)(M,2),F=B[0],z=B[1],V=Object(a.useState)(null),H=Object(o.a)(V,2),K=H[0],Q=H[1],X=Object(a.useContext)(T),Y=(X.state,X.dispatch),Z=function(){var e={};u.forEach((function(t){e=Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},t.title,{checked:!1,url:t.url}))})),g(e),Q("")},$=function(e,t){g(Object(O.a)(Object(O.a)({},v),{},Object(b.a)({},e.target.name,{checked:e.target.checked,url:t})))},ee=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in r(!1),t=[],v)!0!==v[n].checked&&!0!==F||t.push({title:n,url:v[n].url});return Y({type:"ADD_SESSION",payload:{seshName:K,session:t}}),e.next=6,chrome.storage.sync.set(Object(b.a)({},K,t));case 6:Z();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e={};for(var t in v)e=Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},t,{url:v[t].url,checked:!F}));g(e),z(!F)};return Object(a.useEffect)((function(){chrome.tabs.query({currentWindow:!0},(function(e){d(e);var t={};e.forEach((function(e){t=Object(O.a)(Object(O.a)({},t),{},Object(b.a)({},e.title,{checked:!1,url:e.url}))})),g(t)}))}),[]),Object(a.useEffect)((function(){var e=F;for(var t in v)!0===v[t].checked&&(e=!0);_(e&&null!==K&&""!==K)}),[$,te]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{onClick:function(e){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&r(!n)}(e)},color:"secondary","aria-label":"add",children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(S.a,{anchor:"left",open:n,children:u?Object(c.jsxs)("div",{children:[Object(c.jsxs)(q,{children:[Object(c.jsx)(U,{children:"Create Session"}),Object(c.jsx)(y.a,{onClick:function(){return r(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(P,{id:"outlined-basic",label:"Session Name",variant:"outlined",size:"small",value:K,onChange:function(e){return Q(e.target.value)}}),Object(c.jsx)(k.a,{}),Object(c.jsxs)(J,{children:[Object(c.jsx)(W,{onClick:function(){return te()},color:"secondary",children:"Select All"}),R?Object(c.jsx)(G,{color:"secondary",onClick:ee,children:Object(c.jsx)(m.a,{})}):null]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Opened Tabs"}),children:u.map((function(e){return Object(c.jsx)(E.a,{children:Object(c.jsx)(D.a,{control:Object(c.jsx)(N.a,{color:"primary",checked:!!v[e.title]&&v[e.title].checked,onChange:function(t){return $(t,e.url)},name:e.title}),label:e.title.length>15?e.title.substring(0,15)+"...":e.title})})}))})]}):Object(c.jsx)("h3",{children:"No Tabs open. Add more tabs to your window"})})]})},K=n(38),Q=n(850),X=n(804),Y=n(853),Z=n(854),$=n(855),ee=n(851),te=n(852),ne=n(403),ce=n(621);var ae=n(860),re=n(844),ie=n(805),se=n(383),oe=Object(se.a)({palette:{primary:{main:"#82b1ff"},secondary:{main:"#7c4dff"}},overrides:{MuiDrawer:{width:"250px"}}}),ue=function(e){var t=e.open,n=e.toggleModal,a=Object(f.c)(oe),r=Object(Q.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(a);return Object(c.jsx)(ae.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500},children:Object(c.jsx)(ie.a,{in:t,children:Object(c.jsxs)(X.a,{className:r.paper,children:[Object(c.jsx)("h2",{children:"Error"}),Object(c.jsx)("p",{id:"transition-modal-description",children:"The URL you provided is not valid"})]})})})};function le(){var e=Object(d.a)(["\n  &.new{\n    background-color: #D0FF4D;\n    &.isVisible{\n      animation: "," ease 2s 1;\n      animation-fill-mode: forwards\n    }\n  }\n"]);return le=function(){return e},e}function je(){var e=Object(d.a)(["\n  from {background-color: #D0FF4D;}\n  to {background-color: white;}\n"]);return je=function(){return e},e}function be(){var e=Object(d.a)(['\n  font-size: 1.5em !important;\n  font-family: "Open Sans" !important;\n\n']);return be=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return Oe=function(){return e},e}function de(){var e=Object(d.a)(["\n  text-align: left;\n\n"]);return de=function(){return e},e}function fe(){var e=Object(d.a)(["\n"]);return fe=function(){return e},e}var pe=Object(f.a)(v.a)(fe()),xe=f.a.h2(de()),he=f.a.div(Oe()),me=f.a.p(be()),ve=Object(f.b)(je()),ge=Object(f.a)(E.a)(le(),ve),ye=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(null),u=Object(o.a)(s,2),O=u[0],d=u[1],f=Object(a.useState)(!1),p=Object(o.a)(f,2),x=p[0],m=p[1],v=Object(a.useState)(null),g=Object(o.a)(v,2),D=g[0],N=g[1],A=Object(a.useContext)(T),R=A.state,_=A.dispatch,M=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}(R.sessions[e.name]),B=Object(a.useRef)(),F=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],i=new IntersectionObserver((function(e){var t=Object(o.a)(e,1)[0];return r(t.isIntersecting)}));return Object(a.useEffect)((function(){return void 0!==e.current&&null!==e.current&&(i.observe(e.current),function(){i.disconnect()})}),[e,i]),c}(B),z=Object(Q.a)((function(){return{successIcon:{color:"#82b1ff"},errorIcon:{color:"red"}}}))();var V=function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,chrome.storage.sync.remove([e.name]);case 2:return t.next=4,chrome.storage.sync.set(Object(b.a)({},r,R.sessions[e.name]));case 4:i(""),e.toggleDrawer(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t,n;n=function(t){404!==t?(chrome.storage.sync.set(Object(b.a)({},e.name,[].concat(Object(I.a)(R.sessions[e.name]),[t]))),_({type:"ADD_TAB",payload:{name:e.name,url:t}}),d("")):m(!0)},ne(t="https://cors-anywhere.herokuapp.com/"+(t=O),(function(e,c,a){var r={};e?r=404:e||200!==c.statusCode?(console.log("Error = ".concat(e,", code = ").concat(c.statusCode)),r=404):r={title:ce.load(a)("head > title").text().trim(),url:t},n(r)}))};return Object(a.useEffect)((function(){if(void 0!==M){var t=R.sessions[e.name].filter((function(e){return!M.includes(e)}));N(t[0])}}),[R.sessions[e.name]]),Object(a.useEffect)((function(){if(!0===F)return function(){N(null)}}),[F]),Object(c.jsx)(S.a,{anchor:"left",open:e.open,children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(he,{children:[Object(c.jsx)(xe,{children:"Edit ".concat(e.name)}),Object(c.jsx)(y.a,{onClick:function(){return e.toggleDrawer(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Change Session Name"}),children:Object(c.jsxs)(E.a,{children:[Object(c.jsx)(pe,{id:"outlined-basic",label:"Rename Session",variant:"outlined",size:"small",value:r,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(y.a,{className:null===r||""===r?"null":z.successIcon,disabled:null===r||""===r,onClick:V,children:Object(c.jsx)(ee.a,{})})]})}),Object(c.jsx)(k.a,{}),Object(c.jsxs)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Add a Tab"}),children:[Object(c.jsxs)(E.a,{children:[Object(c.jsx)(pe,{id:"outlined-basic",label:"Tab URL",variant:"outlined",size:"small",value:O,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)(y.a,{className:null===O||""===O?"null":z.successIcon,disabled:null===O||""===O,onClick:function(){return L()},children:Object(c.jsx)(ee.a,{})})]}),Object(c.jsx)(ue,{toggleModal:m,open:x})]}),Object(c.jsx)(k.a,{}),Object(c.jsx)(w.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Saved Tabs"}),children:R.sessions[e.name].map((function(t){return Object(c.jsxs)(ge,{ref:D&&(t.title===D.title?B:null),className:D&&(t.title===D.title?F?"new isVisible":"new":null),children:[Object(c.jsx)(y.a,{size:"medium",className:z.errorIcon,onClick:function(){return function(t){var n=[];R.sessions[e.name].forEach((function(e){e.title!==t&&n.push(e)})),_({type:"REMOVE_TAB",payload:{name:e.name,session:n}}),chrome.storage.sync.set(Object(b.a)({},e.name,n))}(t.title)},children:Object(c.jsx)(te.a,{})}),Object(c.jsx)(me,{children:t.title.length>15?t.title.substring(0,15)+"...":t.title})]})}))})]})})};function Se(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  right: 0;\n  left: auto;\n  margin-bottom: 5px;\n"]);return Se=function(){return e},e}function ke(){var e=Object(d.a)(['\n  text-align: center;\n  font-family: "Open Sans";\n  font-size: 1.5em;\n  font-weight: bold;\n']);return ke=function(){return e},e}var we=f.a.p(ke()),Ce=f.a.div(Se()),Ee=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],b=Object(a.useContext)(T),O=b.state,d=b.dispatch,f=Object(K.a)(oe),p=Object(Q.a)((function(e){return{paper:{padding:e.spacing(),display:"flex",flexDirection:"column",justifyContent:"center",height:"100px",width:"150px"}}}))(f);Object(a.useEffect)((function(){var t=[];O.sessions[e.name].forEach((function(e){t.push(e.url)})),j(t)}),[]);return Object(c.jsxs)(X.a,{className:p.paper,elevation:3,children:[Object(c.jsx)(we,{children:e.name}),Object(c.jsxs)(Ce,{children:[Object(c.jsx)(y.a,{onClick:function(){chrome.windows.create({url:Object(I.a)(l)})},children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(y.a,{onClick:function(){return i(!0)},children:Object(c.jsx)(Z.a,{})}),Object(c.jsx)(y.a,{onClick:function(){return d({type:"REMOVE_SESSION",payload:e.name}),void chrome.storage.sync.remove([e.name])},children:Object(c.jsx)($.a,{})})]}),Object(c.jsx)(ye,{open:r,name:e.name,toggleDrawer:i})]})},De=n(856),Ne=n(857);function Ie(){var e=Object(d.a)(["\n  margin-bottom: 15px;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 15px 0px;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(d.a)(["\n  position: absolute;\n  top: 80px;\n  left: 20px;\n  margin: 10px;\n"]);return Ae=function(){return e},e}var Re=Object(f.a)(De.a)(Ae()),_e=f.a.h1(Te()),Me=f.a.div(Ie()),Be=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch;return Object(a.useEffect)((function(){chrome.storage.sync.get(null,(function(e){n({type:"SET_SESSIONS",payload:e})}))}),[]),Object(c.jsxs)(Me,{children:[Object(c.jsx)(Ne.a,{children:Object(c.jsx)(_e,{children:"My Sessions"})}),Object(c.jsx)(Re,{container:!0,justify:"flex-start",spacing:3,children:Object.keys(t.sessions).length>=1?Object.entries(t.sessions).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return Object(c.jsx)(De.a,{item:!0,children:Object(c.jsx)(Ee,{name:n})},n)})):Object(c.jsx)("div",{children:"hi"})})]})};var Fe=function(){var e=Object(a.useReducer)(A,{sessions:{}}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(T.Provider,{value:{state:n,dispatch:r},children:[Object(c.jsx)(Be,{}),Object(c.jsx)(H,{})]})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,864)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},Ve=n(858);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Ve.a,{theme:oe,children:Object(c.jsx)(Fe,{})})}),document.getElementById("root")),ze()}},[[803,1,2]]]);