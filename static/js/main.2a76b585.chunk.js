(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){e.exports=n(349)},148:function(e,t,n){},150:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(59),i=n.n(r),s=(n(148),n(28)),c=n(29),l=n(31),u=n(30),p=n(32),m=(n(150),n(38)),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(m.withGoogleMap)(function(t){return o.a.createElement(m.GoogleMap,{defaultCenter:{lat:55.953,lng:-3.188},defaultZoom:13},e.props.markers&&e.props.markers.map(function(t,n){return o.a.createElement(m.Marker,{animation:t.isBounce?window.google.maps.Animation.BOUNCE:null,key:n,position:{lat:t.lat,lng:t.lng},onClick:function(){return e.props.openInfoWindow(t)}},t.isOpen&&o.a.createElement(m.InfoWindow,{key:t.id},o.a.createElement("div",{className:"info-window"},o.a.createElement("p",null,o.a.createElement("b",null,t.name)),o.a.createElement("p",null),o.a.createElement("p",null,"Address:"),o.a.createElement("p",null,t.address),o.a.createElement("p",null,t.city),o.a.createElement("p",null,t.postalCode))))}))});return o.a.createElement("div",null,o.a.createElement(t,{containerElement:o.a.createElement("div",{style:{height:"500px",width:"500px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:"nav",role:"navigation"},o.a.createElement("input",{type:"text",className:"input",title:"Filter Places",value:this.props.searchQuery,onChange:this.props.updateSearch,placeholder:"filter places"}),o.a.createElement("ul",{className:"button-list"},this.props.markers.filter(function(e){return!0===e.isShow}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("button",{onClick:function(){return e.props.openInfoWindow(t)}},o.a.createElement("b",null,t.name)))})))}}]),t}(a.Component),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).openInfoWindow=function(t){e.state.markers.map(function(t){t.isOpen=!1,t.isBounce=!1,e.setState({markers:Object.assign(e.state.markers,t)})}),t.isOpen=!0,t.isBounce=!0,e.setState({markers:Object.assign(e.state.markers,t)})},e.getPlaces=function(){fetch("https://api.foursquare.com/v2/venues/explore?client_id=OGJ2WWKTOHB0PARLTNR4WTUBLSETYALE10WNXGTL33P2BNAW&client_secret=4LB1EELLF4CDIOSBLJMALSBORN0XAGO22CXYTH0KFJES3UTF&v=20180323&limit=20&near=Edinburgh&query=top+picks").then(function(e){return e.json()}).then(function(t){console.log(t),console.log("this.state.places:",e.state.places);var n=t.response.groups[0].items,a=n.map(function(e){return{id:e.venue.id,name:e.venue.name,lat:e.venue.location.lat,lng:e.venue.location.lng,address:e.venue.location.address,postalCode:e.venue.location.postalCode,city:e.venue.location.city,isShow:!0,isOpen:!1,isBounce:!1}});e.setState({places:n,markers:a})}).catch(function(e){return console.log("Error",e)})},e.state={places:[],markers:[],searchQuery:""},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateSearch",value:function(e){this.setState({searchQuery:e.target.value.substr(0,20)}),console.log("[This.state.searchQuery]:",this.state.searchQuery)}},{key:"componentDidMount",value:function(){this.getPlaces()}},{key:"render",value:function(){var e=this,t=this.state.markers.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e.state.searchQuery.toLowerCase())});return o.a.createElement("div",{className:"app"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"app-title"},"Explore Edinburgh APP")),o.a.createElement("main",{className:"main",role:"main"},navigator.onLine&&o.a.createElement(d,{markers:t,searchQuery:this.state.searchQuery,updateSearch:this.updateSearch.bind(this),openInfoWindow:this.openInfoWindow}),o.a.createElement("section",{className:"map",role:"application"},navigator.onLine&&o.a.createElement(h,{places:this.state.places,openInfoWindow:this.openInfoWindow,markers:t}),!navigator.onLine&&o.a.createElement("div",null,"You're offline."))),o.a.createElement("footer",{className:"footer"},"FEND Project 8 Neighborhood Map by Jaroslaw Trzybinski"))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fend-p8-neighborhood-map-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fend-p8-neighborhood-map-test","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[143,2,1]]]);
//# sourceMappingURL=main.2a76b585.chunk.js.map