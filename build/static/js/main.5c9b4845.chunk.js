(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(61)},55:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),l=a.n(o),u=a(5),c=a(6),i=a(9),s=a(7),m=a(8),p=a(14),h=a(4),b=a(3),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={browsers:["Chrome","Firefox","IE/Edge"],matrix:[[.95,.23,.1],[.03,.75,.3],[.02,.02,.6]],population:[70.6,21,8.4],generations:5},a.handleMatrixChange=a.handleMatrixChange.bind(Object(h.a)(Object(h.a)(a))),a.handlePopulationChange=a.handlePopulationChange.bind(Object(h.a)(Object(h.a)(a))),a.handleGenerationChange=a.handleGenerationChange.bind(Object(h.a)(Object(h.a)(a))),a.handleComputeClick=a.handleComputeClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleMatrixChange",value:function(e,t){var a=this;return function(n){var r=Number(n.target.value);a.setState(function(a){var n=a.matrix;return n[e][t]=r,Object(p.a)({},a,{matrix:n})})}}},{key:"handlePopulationChange",value:function(e){var t=this;return function(a){var n=Number(a.target.value);t.setState(function(t){var a=t.population;return a[e]=n,Object(p.a)({},t,{population:a})})}}},{key:"handleGenerationChange",value:function(e){var t=Number(e.target.value);this.setState(function(e){return Object(p.a)({},e,{generations:t})})}},{key:"handleComputeClick",value:function(){this.props.compute(this.state.matrix,this.state.population,this.state.generations)}},{key:"getRow",value:function(e){var t=this;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},this.state.browsers[e]),[0,1,2].map(function(a){return r.a.createElement("td",null,r.a.createElement(b.d,{type:"number",min:"0",step:"0.01",onChange:t.handleMatrixChange(e,a),value:t.state.matrix[e][a]}))}),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(b.d,{type:"number",min:"0",step:"0.1",max:"100",onChange:this.handlePopulationChange(e),value:this.state.population[e]})))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.showSetup&&this.matrix,r.a.createElement(b.e,{style:{"margin-bottom":5}},r.a.createElement("h4",null,"Po\u010det generac\xed (m\u011bs\xedc\u016f)")),r.a.createElement(b.e,null,r.a.createElement(b.b,{sm:"2"},r.a.createElement(b.d,{type:"number",min:"1",value:this.state.generations,onChange:this.handleGenerationChange})),r.a.createElement(b.b,{sm:"4"},r.a.createElement(b.a,{color:"primary",onClick:this.handleComputeClick},"Vypo\u010d\xedtat"))))}},{key:"rows",get:function(){var e=this;return[0,1,2].map(function(t){return e.getRow(t)})}},{key:"matrix",get:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.e,null,r.a.createElement("h4",null,"Popula\u010dn\xed matice (Leslieho)")),r.a.createElement(b.e,null,r.a.createElement(b.f,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Prohl\xed\u017ee\u010d"),r.a.createElement("th",null,"Chrome"),r.a.createElement("th",null,"Firefox"),r.a.createElement("th",null,"IE/Edge"),r.a.createElement("th",null),r.a.createElement("th",null,"Po\u010d\xe1te\u010dn\xed populace [%]"))),r.a.createElement("tbody",null,this.rows))))}}]),t}(r.a.Component),d=a(10),v=a(35),E=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.browsers;return r.a.createElement(b.f,{responsive:!0,className:"resultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Prohl\xed\u017ee\u010d"),r.a.createElement("th",null,"Po\u010d\xe1te\u010dn\xed populace"),Object(d.a)(Array(t-1)).map(function(e,t){return r.a.createElement("th",null,t+1,". m\u011bs\xedc")}))),r.a.createElement("tbody",null,Object.values(a).map(function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.name),e.population.map(function(e){return r.a.createElement("td",null,e.toFixed(2)," %")}))})))}}]),t}(r.a.Component),g=a(15),j=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"mapToXY",value:function(e){return e.map(function(e,t){return{x:t,y:e}})}},{key:"getLegend",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.values(e).map(function(e){return{title:"".concat(e.name).concat(t?" - simulovan\xfd":" - re\xe1ln\xfd"),color:e.color,strokeStyle:t?"dashed":null}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.realData,n=t.browsers;return r.a.createElement(g.b,{height:400,yDomain:[0,100]},r.a.createElement(g.a,{items:Object(d.a)(this.getLegend(a)).concat(Object(d.a)(this.getLegend(n,!0))),orientation:"horizontal"}),r.a.createElement(g.e,null),r.a.createElement(g.c,null),Object.values(a).map(function(t){return r.a.createElement(g.d,{data:e.mapToXY(t.population),color:t.color})}),Object.values(n).map(function(t){return r.a.createElement(g.d,{data:e.mapToXY(t.population),color:t.color,strokeStyle:"dashed"})}))}}]),t}(r.a.Component),y=a(34),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).realBrowsers={chrome:{name:"Chrome",population:[70.6,71,71.9,72.5,73.4,73.6,73.8,74.2,74.5,75,75.8,75.7,75.7,76.1,77.1,77.7,77.8,78.3,78.7,78.9,78.6,78.6,78.9,79.2,79.3,79.9,80.2,80.7,81,81.3,81.9,81.8,81.6,81.6],color:"#66a3ff"},firefox:{name:"Firefox",population:[21,20.8,20,19.6,18.9,18.9,19.1,18.8,18.3,17.8,17.3,17.5,17.4,17,16.1,15.6,15.6,15.3,15.3,15.1,15,14.6,14.6,14.6,14.5,13.8,13.8,13.3,13.2,13,12.8,12.6,12.5,12.3],color:"#ffa366"},edge:{name:"IE/Edge",population:[8.4,8.2,8.1,7.9,7.7,7.5,7.1,7,7.2,7.2,6.9,6.8,6.9,6.9,6.8,6.7,6.6,6.4,6,6,6.4,6.8,6.5,6.2,6.2,6.3,6,6,5.8,5.7,5.3,5.6,5.9,6.1],color:"#66ff66"}},a.cropRealBrowsers=a.cropRealBrowsers.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"cropRealBrowsers",value:function(e){return Object.entries(this.realBrowsers).reduce(function(t,a){var n=Object(v.a)(a,2),r=n[0],o=n[1];return t[r]={name:o.name,color:o.color,population:o.population.slice(0,Math.min(e,o.population.length))},t},{})}},{key:"render",value:function(){var e=this.props.populations.length,t=this.groupByBrowser,a=this.cropRealBrowsers(e),n=this.csvData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.e,{style:{"margin-top":20}},r.a.createElement("h4",null,"V\xfdsledek - simulovan\xe9 vyu\u017eit\xed prohl\xed\u017ee\u010d\u016f"),r.a.createElement(E,{count:e,browsers:t}),r.a.createElement(y.CSVLink,{filename:"data.csv",headers:n.headers,data:n.data,style:{"margin-left":10,"margin-bottom":20}},"Export do CSV")),r.a.createElement(b.e,null,r.a.createElement("h4",null,"Graf - re\xe1ln\xe1 data vs simulovan\xe1"),r.a.createElement(b.b,{sm:{size:8,offset:2}},r.a.createElement(j,{realData:a,browsers:t}))))}},{key:"flattenPopulations",get:function(){return this.props.populations.map(function(e){return e.map(function(e){return e[0]})})}},{key:"groupByBrowser",get:function(){var e=this.flattenPopulations,t={chrome:{name:"Chrome",population:[],color:"#0066ff"},firefox:{name:"Firefox",population:[],color:"#ff6600"},edge:{name:"IE/Edge",population:[],color:"#00cc00"}};return e.forEach(function(e){t.chrome.population.push(e[0]),t.firefox.population.push(e[1]),t.edge.population.push(e[2])}),t}},{key:"csvData",get:function(){var e=this.props.populations.length,t=this.cropRealBrowsers(e),a=this.groupByBrowser;return{headers:["Prohl\xed\u017ee\u010d"].concat(Object(d.a)(Object(d.a)(Array(e)).map(function(e,t){return"".concat(t+1,". m\u011bs\xedc")}))),data:Object(d.a)(Object.values(t).map(function(e){return["".concat(e.name," - skute\u010dn\xfd")].concat(Object(d.a)(e.population))})).concat(Object(d.a)(Object.values(a).map(function(e){return["".concat(e.name," - simulovan\xfd")].concat(Object(d.a)(e.population))})))}}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={matrix:[],initialPopulation:[],generations:0,showResult:!1,showSetup:!1},a.setValuesAndCompute=a.setValuesAndCompute.bind(Object(h.a)(Object(h.a)(a))),a.computePopulations=a.computePopulations.bind(Object(h.a)(Object(h.a)(a))),a.toggleSetup=a.toggleSetup.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setValuesAndCompute",value:function(e,t,a){var n=this;this.setState(function(){return{matrix:e,generations:a,initialPopulation:t}},function(){return n.computePopulations()})}},{key:"computePopulations",value:function(){var e=[];this.state.initialPopulation.forEach(function(t){return e.push([t])});var t,a=[],n=e;a.push(n);for(var r=0;r<this.state.generations;r++)t=this.multiplyMatrices(this.state.matrix,n),a.push(t),n=t;this.setState(function(e){return Object(p.a)({},e,{browsers:a,showResult:!0})})}},{key:"multiplyMatrices",value:function(e,t){if(0===e.length||0===t.length)throw new Error("Matrices cannot be empty");if(e[0].length!==t.length)throw new Error("Matrices must have the same size");for(var a=[],n=0;n<e.length;n++){for(var r=[],o=0;o<t[0].length;o++){for(var l=0,u=0;u<t.length;u++)l+=e[n][u]*t[u][o];r.push(l)}a.push(r)}return a}},{key:"toggleSetup",value:function(){this.setState(function(e){return Object(p.a)({},e,{showSetup:!e.showSetup})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{sm:{size:4,offset:4},style:{"margin-top":10}},r.a.createElement("h1",null,"MOSIM projekt")),r.a.createElement("p",null,r.a.createElement("strong",null,"T\xe9ma:")," Pr\u016fb\u011bh vyu\u017eit\xed prohl\xed\u017ee\u010d\u016f v \u010dase",r.a.createElement("br",null),r.a.createElement("strong",null,"Auto\u0159i:")," Pavla Grossmannov\xe1, Luk\xe1\u0161 Stuchl\xedk",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Tento projekt se sna\u017e\xed modelovat v\xfdvoj procentu\xe1ln\xedho vyu\u017eit\xed 3 hlavn\xedch prohl\xed\u017ee\u010d\u016f v \u010dase, p\u0159i\u010dem\u017e vych\xe1z\xedme z ",r.a.createElement("a",{href:"https://www.w3schools.com/browsers/default.asp"},"n\xe1sleduj\xedc\xedch dat")," (leden 2016 - \u0159\xedjen 2018)."),r.a.createElement("li",null,"Nesrovnalosti s re\xe1ln\xfdmi daty lze vysv\u011btlit podle n\xe1s t\xedm, \u017ee mohou se vyskytnout n\xe1hl\xe9 ud\xe1losti, kter\xe9 ovlivn\xed rozlo\u017een\xed u\u017eivatel\u016f, nap\u0159. ve Firefoxu se vyskytne chyba v zabezpe\u010den\xed, uniknou u\u017eivatelsk\xe1 data, tak \u010d\xe1st lid\xed hromadn\u011b migruje k Chromu, tyto ud\xe1losti nelze s t\xedmto modelem zachytit a modelovat. "),r.a.createElement("li",null,"Simulace by mohla b\xfdt o n\u011bco p\u0159esn\u011bj\u0161\xed, kdyby se popula\u010dn\xed matice mohla m\u011bnit v \u010dase, co\u017e stejn\u011b ov\u0161em ne\u0159e\u0161\xed odhady dat do budoucna."),r.a.createElement("li",null,"K simulaci vyu\u017e\xedv\xe1me Leslieho popula\u010dn\xed matici. Tato matice m\xe1 p\u0159edem vypln\u011bn\xe9 hodnoty, kter\xe9 jsme experiment\xe1ln\u011b zjistili. Pro zobrazen\xed nebo zm\u011bnu hodnot matice nebo po\u010d\xe1te\u010dn\xed populace klikn\u011bte zde: ",r.a.createElement(b.a,{color:"link",onClick:this.toggleSetup,style:{padding:0}},this.state.showSetup?"Skr\xfdt nastaven\xed":"Zobrazit nastaven\xed")))),r.a.createElement(f,{showSetup:this.state.showSetup,compute:this.setValuesAndCompute}),this.state.showResult&&r.a.createElement(O,{populations:this.state.browsers}))}}]),t}(r.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.c,{fluid:!0},r.a.createElement(b.b,{sm:{size:8,offset:2}},r.a.createElement(k,null)))}}]),t}(n.Component);a(55),a(57),a(59);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.5c9b4845.chunk.js.map