(this["webpackJsonptab-u-later"]=this["webpackJsonptab-u-later"]||[]).push([[0],{396:function(e,t,n){},397:function(e,t,n){},418:function(e,t){},420:function(e,t){},429:function(e,t){},431:function(e,t){},456:function(e,t){},457:function(e,t){},462:function(e,t){},464:function(e,t){},488:function(e,t){},527:function(e,t){},637:function(e,t){},803:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),i=n(17),o=n.n(i),s=(n(396),n.p,n(397),n(52)),u=n.n(s),j=n(83),l=n(41),b=n(69),d=n(24),O=n(19),f=n(18),x=n(836),p=n(843),h=n(845),m=n(847),v=n(859),g=n(841),y=n(842),k=n(862),w=n(846),S=n(840),C=n(848),E=n(849),T=n(863),I=n(861);function N(){var e=Object(O.a)(["\n  margin-right: 5px !important;\n"]);return N=function(){return e},e}function z(){var e=Object(O.a)(["\n  margin-left: 10px !important;\n"]);return z=function(){return e},e}function D(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return D=function(){return e},e}function M(){var e=Object(O.a)(["\n  text-align: left;\n"]);return M=function(){return e},e}function A(){var e=Object(O.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 15px 0px;\n"]);return A=function(){return e},e}function B(){var e=Object(O.a)(["\n  position: relative;\n  margin: 15px 10px !important;\n"]);return B=function(){return e},e}function F(){var e=Object(O.a)(["\n  position: fixed !important;\n  top: 400px;\n  left: 320px;\n  right: 20px;\n"]);return F=function(){return e},e}var L=Object(f.a)(x.a)(F()),P=Object(f.a)(v.a)(B()),R=f.a.div(A()),J=f.a.h2(M()),U=f.a.div(D()),q=Object(f.a)(g.a)(z()),W=Object(f.a)(y.a)(N()),G=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),o=Object(d.a)(i,2),s=o[0],O=o[1],f=Object(r.useState)({}),x=Object(d.a)(f,2),v=x[0],g=x[1],N=Object(r.useState)(!1),z=Object(d.a)(N,2),D=z[0],M=z[1],A=Object(r.useState)(null),B=Object(d.a)(A,2),F=B[0],G=B[1],H=Object(r.useState)(null),K=Object(d.a)(H,2),Q=K[0],V=K[1],X=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in a(!1),t=[],v)!0!==v[n].checked&&!0!==F||t.push({title:n,url:v[n].url});return e.next=5,chrome.storage.sync.set(Object(l.a)({},Q,t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){chrome.tabs.query({currentWindow:!0},(function(e){O(e);var t={};e.forEach((function(e){t=Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},e.title,{checked:!1,url:e.url}))})),g(t)}))}),[]),Object(r.useEffect)((function(){var e=F;for(var t in v)!0===v[t].checked&&(e=!0);M(e&&null!==Q&&""!==Q)})),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{onClick:function(e){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&a(!n)}(e)},color:"secondary","aria-label":"add",children:Object(c.jsx)(p.a,{})}),Object(c.jsx)(k.a,{anchor:"left",open:n,children:s?Object(c.jsxs)("div",{children:[Object(c.jsxs)(U,{children:[Object(c.jsx)(J,{children:"Create Session"}),Object(c.jsx)(y.a,{onClick:function(){return a(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(P,{id:"outlined-basic",label:"Session Name",variant:"outlined",size:"small",value:Q,onChange:function(e){return V(e.target.value)}}),Object(c.jsx)(w.a,{}),Object(c.jsxs)(R,{children:[Object(c.jsx)(q,{onClick:function(){return function(){var e={};for(var t in v)e=Object(b.a)(Object(b.a)({},e),{},Object(l.a)({},t,{url:v[t].url,checked:!F}));g(e),G(!F)}()},color:"secondary",children:"Select All"}),D?Object(c.jsx)(W,{color:"secondary",onClick:X,children:Object(c.jsx)(m.a,{})}):null]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(S.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Opened Tabs"}),children:s.map((function(e){return Object(c.jsx)(E.a,{children:Object(c.jsx)(T.a,{control:Object(c.jsx)(I.a,{color:"primary",checked:!!v[e.title]&&v[e.title].checked,onChange:function(t){return n=t,c=e.url,void g(Object(b.a)(Object(b.a)({},v),{},Object(l.a)({},n.target.name,{checked:n.target.checked,url:c})));var n,c},name:e.title}),label:e.title.length>15?e.title.substring(0,15)+"...":e.title})})}))})]}):Object(c.jsx)("h3",{children:"No Tabs open. Add more tabs to your window"})})]})},H=n(118),K=n(804),Q=n(853),V=n(854),X=n(855),Y=n(850),Z=n(851),$=n(852),_=n(402),ee=n(620);var te=n(860),ne=n(844),ce=n(805),re=n(383),ae=Object(re.a)({palette:{primary:{main:"#82b1ff"},secondary:{main:"#7c4dff"}},overrides:{MuiDrawer:{width:"250px"}}}),ie=function(e){var t=e.open,n=e.toggleModal,r=Object(f.b)(ae),a=Object(Y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(r);return Object(c.jsx)(te.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,BackdropComponent:ne.a,BackdropProps:{timeout:500},children:Object(c.jsx)(ce.a,{in:t,children:Object(c.jsxs)(K.a,{className:a.paper,children:[Object(c.jsx)("h2",{children:"Error"}),Object(c.jsx)("p",{id:"transition-modal-description",children:"The URL you provided is not valid"})]})})})};function oe(){var e=Object(O.a)(['\n  font-size: 1.5em !important;\n  font-family: "Open Sans" !important;\n\n']);return oe=function(){return e},e}function se(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  margin: 3px 10px 3px 15px;\n"]);return se=function(){return e},e}function ue(){var e=Object(O.a)(["\n  text-align: left;\n\n"]);return ue=function(){return e},e}function je(){var e=Object(O.a)(["\n"]);return je=function(){return e},e}var le=Object(f.a)(v.a)(je()),be=f.a.h2(ue()),de=f.a.div(se()),Oe=f.a.p(oe()),fe=function(e){var t=Object(r.useState)(null),n=Object(d.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(null),s=Object(d.a)(o,2),b=s[0],O=s[1],f=Object(r.useState)(!1),x=Object(d.a)(f,2),p=x[0],m=x[1],v=Object(r.useState)(e.content),g=Object(d.a)(v,2),T=g[0],I=g[1],N=Object(Y.a)((function(){return{successIcon:{color:"green"},errorIcon:{color:"red"}}}))();var z=function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,chrome.storage.sync.remove([e.name]);case 2:return t.next=4,chrome.storage.sync.set(Object(l.a)({},a,T));case 4:i(""),e.toggleDrawer(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t,n;n=function(t){404!==t?(chrome.storage.sync.set(Object(l.a)({},e.name,[].concat(Object(H.a)(T),[t]))),I([].concat(Object(H.a)(T),[t]))):m(!0)},_(t="https://cors-anywhere.herokuapp.com/"+(t=b),(function(e,c,r){var a={};e?a=404:e||200!==c.statusCode?(console.log("Error = ".concat(e,", code = ").concat(c.statusCode)),a=404):a={title:ee.load(r)("head > title").text().trim(),url:t},n(a)}))};return Object(c.jsx)(k.a,{anchor:"left",open:e.open,children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(de,{children:[Object(c.jsx)(be,{children:"Edit ".concat(e.name)}),Object(c.jsx)(y.a,{onClick:function(){return e.toggleDrawer(!1)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(S.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Change Session Name"}),children:Object(c.jsxs)(E.a,{children:[Object(c.jsx)(le,{id:"outlined-basic",label:"Rename Session",variant:"outlined",size:"small",value:a,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(y.a,{className:null===a||""===a?"null":N.successIcon,disabled:null===a||""===a,onClick:z,children:Object(c.jsx)(Z.a,{})})]})}),Object(c.jsx)(w.a,{}),Object(c.jsxs)(S.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Add a Tab"}),children:[Object(c.jsxs)(E.a,{children:[Object(c.jsx)(le,{id:"outlined-basic",label:"Tab URL",variant:"outlined",size:"small",value:b,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)(y.a,{className:null===b||""===b?"null":N.successIcon,disabled:null===b||""===b,onClick:function(){return D()},children:Object(c.jsx)(Z.a,{})})]}),Object(c.jsx)(ie,{toggleModal:m,open:p})]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(S.a,{subheader:Object(c.jsx)(C.a,{disableSticky:!0,children:"Saved Tabs"}),children:T.map((function(t){return Object(c.jsxs)(E.a,{children:[Object(c.jsx)(y.a,{size:"medium",className:N.errorIcon,onClick:function(){return function(t){var n=[];T.forEach((function(e){e.title!==t&&n.push(e)})),I(n),chrome.storage.sync.set(Object(l.a)({},e.name,n))}(t.title)},children:Object(c.jsx)($.a,{})}),Object(c.jsx)(Oe,{children:t.title.length>15?t.title.substring(0,15)+"...":t.title})]})}))})]})})};function xe(){var e=Object(O.a)(["\n  position: relative !important:\n  top: 10px !important;\n"]);return xe=function(){return e},e}function pe(){var e=Object(O.a)(["\n  position: relative !important:\n  top: 10px !important;\n  display: flex;\n  flex-direction: row;\n  right: 0;\n  left: auto;\n  margin-bottom: 5px;\n"]);return pe=function(){return e},e}function he(){var e=Object(O.a)(['\n  position: relative !important:\n  top: 10px !important;\n  text-align: center;\n  font-family: "Open Sans";\n  font-size: 1.5em;\n  font-weight: bold;\n']);return he=function(){return e},e}function me(){var e=Object(O.a)(["\n  height: 100px;\n  width: 150px;\n  margin: 5px;\n"]);return me=function(){return e},e}var ve=Object(f.a)(K.a)(me()),ge=f.a.p(he()),ye=f.a.div(pe()),ke=f.a.div(xe()),we=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),u=s[0],j=s[1],l=Object(r.useState)([]),b=Object(d.a)(l,2),O=(b[0],b[1]);Object(r.useEffect)((function(){var t=[],n=[];e.content.forEach((function(e){t.push(e.url),n.push(e.title)})),j(t),O(n)}),[]);return Object(c.jsxs)(ve,{elevation:3,children:[Object(c.jsxs)(ke,{children:[Object(c.jsx)(ge,{children:e.name}),Object(c.jsxs)(ye,{children:[Object(c.jsx)(y.a,{onClick:function(){chrome.windows.create({url:Object(H.a)(u)})},children:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(y.a,{onClick:function(){return i(!0)},children:Object(c.jsx)(V.a,{})}),Object(c.jsx)(y.a,{onClick:function(){chrome.storage.sync.remove([e.name])},children:Object(c.jsx)(X.a,{})})]})]}),Object(c.jsx)(fe,{open:a,content:e.content,name:e.name,toggleDrawer:i})]})},Se=n(856),Ce=n(857);function Ee(){var e=Object(O.a)(["\n  margin-bottom: 15px;\n"]);return Ee=function(){return e},e}function Te(){var e=Object(O.a)(["\n  text-align: center;\n  margin: 15px 0px;\n"]);return Te=function(){return e},e}function Ie(){var e=Object(O.a)(["\n  position: absolute;\n  top: 80px;\n  left: 20px;\n  margin: 10px;\n"]);return Ie=function(){return e},e}var Ne=Object(f.a)(Se.a)(Ie()),ze=f.a.h1(Te()),De=f.a.div(Ee()),Me=function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,chrome.storage.sync.get(null,(function(e){a(e)}));case 2:case"end":return e.stop()}}),e)})))),Object(c.jsxs)(De,{children:[Object(c.jsx)(Ce.a,{children:Object(c.jsx)(ze,{children:"My Sessions"})}),Object(c.jsx)(Ne,{container:!0,justify:"flex-start",spacing:3,children:Object.entries(n).map((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)(Se.a,{item:!0,children:Object(c.jsx)(we,{name:n,content:r})},n)}))})]})};n(802);var Ae=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(Me,{}),Object(c.jsx)(G,{})]})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,864)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Fe=n(858);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Fe.a,{theme:ae,children:Object(c.jsx)(Ae,{})})}),document.getElementById("root")),Be()}},[[803,1,2]]]);