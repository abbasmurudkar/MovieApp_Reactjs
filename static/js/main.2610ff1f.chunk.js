(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r,i,c,o=t(1),a=t.n(o),l=t(23),s=t.n(l),d=(t(36),t(37),t(4)),b=t(6),g=t(3),j=t(2),p=t(10),u=j.b.ul(r||(r=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),h=Object(j.b)(p.b)(i||(i=Object(g.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),m=t(0),D=function(){var n=Object(d.f)();return console.log(n),Object(m.jsx)("div",{children:Object(m.jsx)(u,{children:[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}].map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)(h,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text}),"  "]},t)}))})})},x=Object(o.memo)(D),w=j.b.div(c||(c=Object(g.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),f=function(n){var e=n.title,t=n.subtitle;return console.log("render"),Object(m.jsxs)(w,{children:[Object(m.jsx)("h1",{children:e}),Object(m.jsx)("p",{children:t})]})},O=Object(o.memo)(f),v=function(n){var e=n.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{title:"MoviesApp",subtitle:"Looking for movie here it is"}),Object(m.jsx)(x,{}),e]})},A=t(21),y=t.n(A),X=t(28),S="https://api.tvmaze.com";function k(n){return N.apply(this,arguments)}function N(){return(N=Object(X.a)(y.a.mark((function n(e){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(S).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var C,W,R,L,E=t(29),B=t.n(E),H=Object(j.b)(B.a)(C||(C=Object(g.a)(["\ndisplay: flex;\njustify-content: center;\nflex-wrap: wrap;\n"]))),V=j.b.div(W||(W=Object(g.a)(["\nwidth: 300px;\nheight: 100%;\nmargin: 0 15px 40px;\n.img-wrapper{\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img{\n        object-fit: cover;\n        height: 100%;\n        width: 100%;\n\n    }\n}\n\nh1{\n    margin: 10px 0;\n    font-size: 21px;\n}\np{\n    margin: 0;\n}\n"]))),Q=j.b.div(R||(R=Object(g.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),T=Object(j.b)(V)(L||(L=Object(g.a)(["\n.btns{\n    margin-top:15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a{\n        text-decoration-color: #000;\n        color:#000;\n        &:hover{\n            text-decoration-color:blue;\n            color:blue;\n        }\n    }\nbutton{\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n    }\n}\n}\n\n"]))),q=function(n){var e=n.id,t=n.name,r=n.summary,i=n.image,c=n.onStarclick,o=n.isStarred,a=r?"".concat(r.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return console.log("results"),Object(m.jsxs)(T,{children:[Object(m.jsx)("div",{className:"img-wrapper",children:Object(m.jsx)("img",{src:i,alt:"loading"})}),Object(m.jsx)("h1",{children:t}),Object(m.jsx)("p",{children:a}),Object(m.jsxs)("div",{className:"btns",children:[Object(m.jsx)(p.b,{to:"/show/".concat(e),children:"Read more"}),Object(m.jsx)("button",{onClick:c,children:Object(m.jsx)(Q,{active:o})})]})]})},J=Object(o.memo)(q),K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAEUCAMAAABUNq4iAAAC1lBMVEXm5uYAAAD/tgD/lgD/lwD/lgD/lwD/lwD/lgD/lgD/lgD/lwD/mAD/mwD/vwD/lgD/lwD/lgD/mQD/lwD/lwD/mgD/lwD/lwD/qgD/lwD//wD/lgD/nQD/lgD/lgD/lwD/lwD/lwD/lwD/lgD/lgD/lwD/lgD/lwD/lwD/lgD/lwD/qgD/lgD/lwD/mQD/qgD/lgD/nQD/mAD/lwD/mgD/lwD/ogD/oQD/lwD/lwD/mQD/lwD/lgD/mQD/mAD/lwD/lgD/mAD/lgD/mAD/lgD/lwD/lwD/lwD/lwD/pAD/lgD/lwD/lgD/lgD/lwD/lwD/mAD/lwD/lgD/mQD/lwD/lwD/mQD/mQD/nwD/lgD/lwD/lgD/mgD/lgD/lwD/lwD/lgD/nwD/ngD/lgD/lwD/lgD/lwD/lgD//wD/lgD/lgD/mAD/mQD/qgD/lgD/mwD/mAD/mgD/mQD/lwD/lgD/lwD/mQD/lwD/lwD/mAD/lgD/nAD/lwD/mwD/lwD/mAD/lgD/lgD/lgD/lwD/lwD/mQD/lgD/lwD/lwD/lwD/lwD/lgD/mQD/mAD/lwD/nAD/lgD/lwD/mAD/mwD/lwD/lwD/mAD/lgD/lwD/lgD/lgD/lwD/lwD/mgD/ngD/mAD/mQD/mAD/mQD/lwD/mAD/lgD/lwD/mAD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/lwD/mgD/lgD/lgD/lwD/mAD/lwD/lwD/lgD/lwD/lgD/lwD/mAD/lwD/lgD/lwD/lwD/mAD/mAD/lwD/lwD/lgD/lwD/mAD/lgD/lgD/lgD/lgD/lgD/mAD/nwD/lwD/lwD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/mwD/lwD/lwD/lgD/mAD/lwD/lgD/lgD/lgD/lwD/lgD/mAD/lwD/lwD/lwD/mAD/nAD/lwD/mAD/lgD/lwD/mQD/mAD/lwD/lgD/lgD/lwB92HTLAAAA8nRSTlP/AAdJmMzm/P/23cF+LgRmwjgezpM16bwMsAF8GpfuQnaQ8qqSldH+pvt4CTPJQQa7DXmpMJELE9BHMrXIBWG68y/UTREbYOGsDrKATvH5iUhA7yjY4y0jEFWF6j/ibn+hCB09W/1dcAKGz1dGA4spKitQnbRYN8vV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",M=t(30);function F(n,e){switch(e.type){case"ADD":return[].concat(Object(M.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function U(n,e,t){var r=Object(o.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),i=Object(b.a)(r,2),c=i[0],a=i[1];return Object(o.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,a]}function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return U(F,[],n)}var z,G,P,Y,I,_,$,nn,en,tn,rn,cn,on,an,ln=function(n){var e=n.data,t=Z(),r=Object(b.a)(t,2),i=r[0],c=r[1];return Object(m.jsx)(H,{children:e.map((function(n){var e=i.includes(n.show.id);return Object(m.jsx)(J,{isStarred:e,onStarclick:function(){c(e?{type:"REMOVE",showId:n.show.id}:{type:"ADD",showId:n.show.id})},id:n.show.id,name:n.show.name,image:n.show.image?n.show.image.medium:K,summary:n.show.summary},n.show.id)}))})},sn=Object(j.b)(V)(z||(z=Object(g.a)(["\n.deathday{\n    margin:0;\n    margin-top:15px;\n    font-weight:bold;\n}\n"]))),dn=function(n){var e=n.name,t=n.image,r=n.country,i=n.birthday,c=n.deathday,o=n.gender;return Object(m.jsxs)(sn,{children:[Object(m.jsx)("div",{className:"img-wrapper",children:Object(m.jsx)("img",{src:t,alt:"loading"})}),Object(m.jsxs)("h1",{children:[e,o?"(".concat(o,")"):null]}),Object(m.jsx)("p",{className:"deathday",children:r?"Comes from ".concat(r):"No Country known"}),i?"Born On ".concat(i):null,c?"Died ".concat(c):"Alive"]})},bn=function(n){var e=n.data;return Object(m.jsx)(H,{children:e.map((function(n){return Object(m.jsx)(dn,{country:n.person.country?n.person.country.name:null,gender:n.person.gender,deathday:n.person.deathday,birthday:n.person.birthday,name:n.person.name,image:n.person.image?n.person.image.medium:K},n.person.id)}))})},gn=j.b.input(G||(G=Object(g.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),jn=j.b.div(P||(P=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),pn=j.b.div(Y||(Y=Object(g.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),un=t(12),hn=t(31),mn=["label"],Dn=j.b.label(I||(I=Object(g.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),xn=function(n){var e=n.label,t=Object(hn.a)(n,mn);return console.log("results"),Object(m.jsxs)(Dn,{htmlFor:t.id,children:[e,Object(m.jsx)("input",Object(un.a)(Object(un.a)({id:"search-movies"},t),{},{type:"radio"})),Object(m.jsx)("span",{})]})},wn=Object(o.memo)(xn),fn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(o.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(b.a)(e,2),r=t[0],i=t[1];return[r,function(e){i(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(b.a)(n,2),t=e[0],r=e[1],i=Object(o.useState)(null),c=Object(b.a)(i,2),a=c[0],l=c[1],s=Object(o.useState)("shows"),d=Object(b.a)(s,2),g=d[0],j=d[1],p="shows"===g,u=function(){k("/search/".concat(g,"?q=").concat(t)).then((function(n){l(n),console.log(n)}))},h=Object(o.useCallback)((function(n){j(n.target.value)}),[]);return Object(m.jsxs)(v,{children:[Object(m.jsx)(gn,{type:"text",onChange:function(n){r(n.target.value)},value:t,onKeyDown:function(n){13===n.keyCode&&u()}}),Object(m.jsxs)(jn,{children:[Object(m.jsx)("div",{children:Object(m.jsx)(wn,{label:"Shows",id:"search-movies",checked:p,onChange:h,value:"shows"})}),Object(m.jsx)("div",{children:Object(m.jsx)(wn,{label:"Actors",id:"search-actors",checked:!p,onChange:h,value:"people"})})]}),Object(m.jsx)(pn,{children:Object(m.jsx)("button",{type:"button",onClick:u,children:"Search"})}),a&&0===a.length?Object(m.jsx)("div",{children:"No mathces found"}):a&&a.length>0?a[0].show?Object(m.jsx)(ln,{data:a}):Object(m.jsx)(bn,{data:a}):null]})},On=function(){var n=Z(),e=Object(b.a)(n,1)[0],t=Object(o.useState)(null),r=Object(b.a)(t,2),i=r[0],c=r[1],a=Object(o.useState)(!0),l=Object(b.a)(a,2),s=l[0],d=l[1],g=Object(o.useState)(null),j=Object(b.a)(g,2),p=j[0],u=j[1];return Object(o.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return k("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){console.log(n),c(n),d(!1)})).catch((function(n){u(n.message),d(!1)}))}else d(!1);return function(){}}),[e]),Object(m.jsxs)(v,{children:[s&&Object(m.jsx)("div",{children:"SHOW ARE LOADING"}),p&&Object(m.jsxs)("div",{children:["ERROR OCCURRED :",p]}),s&&!p&&Object(m.jsx)("div",{children:"NO SHOWS ARE STARRED"}),!s&&!p&&Object(m.jsx)(ln,{data:i})]})},vn=j.b.div(_||(_=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),An=function(n){var e=n.cast;return Object(m.jsx)(vn,{children:e.map((function(n,e){var t=n.person,r=n.voice,i=n.character;return Object(m.jsxs)("div",{className:"cast-item",children:[Object(m.jsx)("div",{className:"pic-wrapper",children:Object(m.jsx)("img",{src:t.image?t.image.medium:K,alt:"CAST-PERSON"})}),Object(m.jsx)("div",{className:"actor",children:Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"bold",children:t.name}),"| ",i.name,"  ",r?"|Voice":"| No voice"]})})]},e)}))})},yn=j.b.div($||($=Object(g.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),Xn=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(m.jsxs)(yn,{children:[Object(m.jsxs)("p",{children:["status: ",Object(m.jsx)("span",{children:e})]}),Object(m.jsxs)("p",{children:["Premeired ",t," ",r?"on ".concat(r.name):null]})]})},Sn=j.b.div(nn||(nn=Object(g.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),kn=j.b.div(en||(en=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),Nn=j.b.div(tn||(tn=Object(g.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),Cn=function(n){var e=n.name,t=n.image,r=n.rating,i=n.summary,c=n.tags;return Object(m.jsxs)(Sn,{children:[Object(m.jsx)("img",{src:t?t.original:K,alt:"Images"}),Object(m.jsxs)("div",{className:"text-side",children:[Object(m.jsxs)(kn,{children:[Object(m.jsx)("h1",{children:e}),Object(m.jsxs)("div",{children:[Object(m.jsx)(Q,{active:!0}),Object(m.jsx)("span",{children:r.average||"N/A"})]})]}),Object(m.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:i}}),Object(m.jsxs)("div",{children:["Tags:"," ",Object(m.jsx)(Nn,{children:c.map((function(n,e){return Object(m.jsx)("span",{children:n},e)}))})]})]})]})},Wn=j.b.div(rn||(rn=Object(g.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),Rn=j.b.div(cn||(cn=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),Ln=function(n){var e=n.seasons;return Object(m.jsxs)(Wn,{children:[Object(m.jsxs)("p",{children:["Seasons in total: ",Object(m.jsx)("span",{children:e.length})]}),Object(m.jsxs)("p",{children:["Episodes in total: "," ",Object(m.jsxs)("span",{children:[e.reduce((function(n,e){return n+e.episodeOrder}),0),"  "]})]}),Object(m.jsx)(Rn,{children:e.map((function(n){return Object(m.jsxs)("div",{className:"season-item",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("p",{children:n.number}),Object(m.jsxs)("p",{children:["Episode:",Object(m.jsx)("span",{children:n.episodeOrder})]})]}),Object(m.jsxs)("div",{className:"right",children:["Aired : "," ",Object(m.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},En=j.b.div(on||(on=Object(g.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),Bn=j.b.div(an||(an=Object(g.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),Hn=function(){var n=Object(d.g)().id,e=Object(o.useReducer)((function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isloading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(un.a)(Object(un.a)({},n),{},{error:e.error,isloading:!1});default:return n}}),{show:null,isloading:!0,error:null}),t=Object(b.a)(e,2),r=t[0],i=r.show,c=r.isloading,a=r.error,l=t[1];return Object(o.useEffect)((function(){var e=!0;return k("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&l({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&l({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),console.log(i),c?Object(m.jsx)("div",{children:"Data is being Loaded"}):a?Object(m.jsxs)("div",{children:["Error Message:",a]}):Object(m.jsxs)(En,{children:[Object(m.jsx)(Cn,{image:i.image,name:i.name,rating:i.rating,tags:i.genres,summary:i.summary}),Object(m.jsxs)(Bn,{children:[Object(m.jsx)("h2",{children:"Details"}),Object(m.jsx)(Xn,{status:i.status,premiered:i.premiered,network:i.network})]}),Object(m.jsxs)(Bn,{children:[Object(m.jsx)("h2",{children:"Seasons"}),Object(m.jsx)(Ln,{seasons:i._embedded.seasons})]}),Object(m.jsxs)(Bn,{children:[Object(m.jsx)("h2",{children:"Cast"}),Object(m.jsx)(An,{cast:i._embedded.cast})]})]})},Vn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Qn=function(){return Object(m.jsxs)(j.a,{theme:Vn,children:["   ",Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",children:Object(m.jsx)(fn,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/starred",children:Object(m.jsx)(On,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/show/:id",children:Object(m.jsx)(Hn,{})}),Object(m.jsx)(d.a,{children:"ERROR FOR 404"})]})]})},Tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))},qn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Jn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsxs)(p.a,{children:["    ",Object(m.jsx)(Qn,{})]})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/MovieApp_Reactjs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/MovieApp_Reactjs","/service-worker.js");qn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Jn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Jn(e,n)}))}}(),Tn()}},[[46,1,2]]]);
//# sourceMappingURL=main.2610ff1f.chunk.js.map