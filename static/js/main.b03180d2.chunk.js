(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(51)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(34),t(35),t(36),t(37),t(9)),i=t(27),s=t(13),u=function(e,a){switch(a.type){case"GET_MARKERS":return a.payload;case"ADD_MARKER":return[a.payload].concat(Object(s.a)(e));case"UPDATE_MARKER":return e.map(function(e){return e.id===a.id?Object(i.a)({},e,{coordinates:a.payload}):e});case"REMOVE_MARKER":return e.filter(function(e){return e.id!==a.id});default:return e}},d=[],m=Object(n.createContext)(d),E=function(e){var a=e.children,t=Object(n.useReducer)(u,d),l=Object(o.a)(t,2),c=l[0],i=l[1];return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("markers"));e&&i({type:"GET_MARKERS",payload:e})},[]),Object(n.useEffect)(function(){localStorage.setItem("markers",JSON.stringify(c))},[c]),r.a.createElement(m.Provider,{value:{markers:c,addMarker:function(e){i({type:"ADD_MARKER",payload:e})},updateMarker:function(e,a){i({type:"UPDATE_MARKER",id:e,payload:a})},removeMarker:function(e){i({type:"REMOVE_MARKER",id:e})}}},a)},p=t(54),f=t(55),b=t(57),w=t(56),v=t(15),k=t(25),y=t.n(k),g=Object(v.c)({accessToken:"pk.eyJ1IjoiZG9yeXNraSIsImEiOiJjazhrZTdjaDcwMHQ2M210aGoxdTl6bnBsIn0.T6vaQGeUkM3Dv9CjX2Iuxw"}),h=function(){var e=Object(n.useContext)(m),a=e.addMarker,t=e.updateMarker,l=e.markers;return r.a.createElement(g,{style:"mapbox://styles/mapbox/streets-v11",containerStyle:{height:"50vh",width:"100vw"},zoom:[1],onClick:function(e,t){!function(e){var t=e.lngLat.lng,n=e.lngLat.lat;a({id:y()(),coordinates:[t,n]})}(t)}},r.a.createElement(v.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15","icon-size":2}},l.map(function(e){return r.a.createElement(v.a,{key:e.id,coordinates:[e.coordinates[0],e.coordinates[1]],draggable:!0,onDrag:function(a){return function(e,a){var n=a.lngLat.lng,r=a.lngLat.lat;t(e,[n,r])}(e.id,a)}})})))},O=t(52),M=t(53),R=function(){var e=Object(n.useContext)(m),a=e.markers,t=e.removeMarker;return r.a.createElement(O.a,{striped:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Longitude"),r.a.createElement("th",null,"Latitude"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,a.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},String(e.id).slice(0,6)),r.a.createElement("td",null,e.coordinates[0].toFixed(6)),r.a.createElement("td",null,e.coordinates[1].toFixed(6)),r.a.createElement("td",null,r.a.createElement(M.a,{color:"danger",size:"xs",onClick:function(){return t(e.id)}},"X")))})))},j=function(){var e=r.a.useState([]),a=Object(o.a)(e,2),t=a[0],n=a[1],l=function(e){t.includes(e)?n(t.filter(function(a){return a!==e})):n([].concat(Object(s.a)(t),[e]))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"acordeon"},r.a.createElement("div",{"aria-multiselectable":!0,id:"accordion",role:"tablist"},r.a.createElement(p.a,{className:"no-transition"},r.a.createElement(f.a,{className:"card-collapse",id:"headingOne",role:"tab"},r.a.createElement("h5",{className:"mb-0 panel-title text-center"},r.a.createElement("a",{"aria-expanded":t.includes(1),className:"collapsed","data-parent":"#accordion",href:"#pablo",id:"collapseOne",onClick:function(e){e.preventDefault(),l(1)}},"Mapa"," ",t.includes(1)?r.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-up"}):r.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-down"})))),r.a.createElement(b.a,{isOpen:t.includes(1)},r.a.createElement(w.a,null,r.a.createElement(h,null))),r.a.createElement(f.a,{className:"card-collapse",id:"headingTwo",role:"tab"},r.a.createElement("h5",{className:"mb-0 panel-title text-center"},r.a.createElement("a",{"aria-controls":"collapseTwo","aria-expanded":t.includes(2),className:"collapsed ","data-parent":"#accordion",href:"#pablo",id:"collapseTwo",onClick:function(e){e.preventDefault(),l(2)}},"Tabela"," ",t.includes(2)?r.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-up"}):r.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-down"})))),r.a.createElement(b.a,{isOpen:t.includes(2)},r.a.createElement(w.a,null,r.a.createElement(R,null)))))))},x=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(j,null)))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b03180d2.chunk.js.map