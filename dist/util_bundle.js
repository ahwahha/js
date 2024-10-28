(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){if(this._entity=null,null!=t){if("string"==typeof t)return r.get(t);if(t instanceof HTMLElement)return this._entity=t,this;if(t instanceof r)return t}}function n(t=null){let e=t instanceof r?t:new r(t),n=null,o=null,i=!1,l=!1,a=!1,s=0,d={label:"",columns:[{header:"Header",data:"",filter:"",filterPlaceholder:"---",headerStyle:{},filterStyle:{},rowsStyle:{},sortable:!0,filterEditable:!0,class:""}],sortedBy:"###row-index",ascending:!0,start:1,defaultStart:1,end:10,defaultEnd:10,maxRows:100,tableClass:"jsonTable",buttonClass:"button",showSelectingGroup:!0,multiSelect:!0,actionsGroupStyle:{},paginationGroupStyle:{width:"100%","text-align":"center"},maxHeight:void 0,selectAllFiltered:"Select all filtered",unselectAllFiltered:"Unselect all filtered",noOfSelected:"No. of selected: ",noOfEdited:"No. of edited: ",resetFilters:"Reset filters",resetData:"Reset data",resetSelectedData:"Reset selected data",selectAllEdited:"Select all edited",editFilter:"Edit filter value:",toBegining:"<<",previousPage:r.create("span",{style:"padding:0px 8px;"}).appendContent("<"),nextPage:r.create("span",{style:"padding:0px 8px;"}).appendContent(">"),toEnding:">>",headersStyle:{"border-radius":"5px",border:"#aaa solid 1px",height:"calc(100% - 8px)",display:"flex","flex-flow":"column nowrap",padding:"3px",margin:"1px","text-align":"center","font-weight":"bold","background-color":"#add","white-space":"nowrap"},filtersStyle:{width:"calc(100% - 2px)","border-radius":"5px",border:"#aaa solid 1px",margin:"1px","text-align":"center","font-size":"11px",overflow:"hidden",cursor:"help"},rowsStyle:{"text-align":"center"},oddRowsStyle:{},evenRowsStyle:{"background-color":"hsl(0 0 95)"},editedStyle:{display:"revert",color:"hsl(0, 100%, 30%)","font-size":"70%"},insertedStyle:{border:"2px solid hsl(160, 100%, 50%)"},removedStyle:{"text-decoration":"line-through","text-decoration-color":"hsl(0, 100%, 30%)"},filterDebounceDelay:500,filterReturnTrueWhenEmpty:!0,filterFunction:function(t,e){try{return null!=t&&("boolean"==typeof t?""==e.trim()||t==("true"==e||"false"!=e&&null)||r.match(String(t),e.trim(),"`",!1):""===t?c.filterReturnTrueWhenEmpty:isNaN(t)?S(t)?""==e.trim()||u(t,e)||r.match(String(t),e.trim(),"`",!1):""==e.trim()||r.match(r.isObjectOrArray(t)?JSON.stringify(t):String(t),e.trim(),"`",!1):""==e.trim()||p(t,e)||r.match(String(t),e.trim(),"`",!1))}catch(n){return""==e.trim()||r.match(r.isObjectOrArray(t)?JSON.stringify(t):String(t),e.trim(),"`",!1)}},onrefresh:null},c=d,p=function(t,e){if(isNaN(t))throw"@ filterNumber: NaN";let r=e.trim(),n=r.substring(1).trim(),o=r.substring(2).trim();return r.startsWith("<")&&!isNaN(n)?t<parseFloat(n):r.startsWith("<=")&&!isNaN(o)?t<=parseFloat(o):r.startsWith("=")&&!isNaN(n)?t==parseFloat(n):r.startsWith(">=")&&!isNaN(o)?t>=parseFloat(o):r.startsWith(">")&&!isNaN(n)?t>parseFloat(n):t==parseFloat(r)},u=function(t,e){try{let r=t.trim(),n=e.trim(),o=n.substring(1).trim(),i=n.substring(2).trim();return n.startsWith("<")&&S(o)?E(r)<E(o):n.startsWith("<=")&&S(i)?E(r)<=E(i):n.startsWith("=")&&S(o)?E(r)==E(o):n.startsWith(">=")&&S(i)?E(r)>=E(i):n.startsWith(">")&&S(o)?E(r)>E(o):E(r)==E(n)}catch(t){throw"@ filterDates: "+t}},h=function(){try{return n=r.clone(o),a=!1,this}catch(t){throw new Error("error caught @ resetData(): "+t)}},f=function(t){try{return null!=n&&Array.isArray(n)&&(n=n.map((e=>e["###row-filtered"]?{...e,"###row-selected":!e["###row-removed"]&&t}:e))),this}catch(e){throw new Error("error caught @ setAllFilteredSelected("+t+"): "+e)}},y=function(t,e){try{if(null!=t&&Array.isArray(t)){let n=[];for(let o of t)e(o)&&n.push(r.clone(o));return n}return null}catch(r){throw new Error("error caught @ deepFilter("+t+", "+e+"): "+r)}},g=function(t){try{if(null!=(t=t||n)&&Array.isArray(t)){a=!1;for(let e=0;e<t.length;e++){let n=t[e],i=o.find((t=>t["###row-index"]===n["###row-index"])),l=!1;for(let t in n)if(!t.startsWith("###row-")&&!t.startsWith("###ori-")&&(r.isObjectOrArray(n[t])?JSON.stringify(n[t]):n[t])!==(r.isObjectOrArray(i[t])?JSON.stringify(i[t]):i[t])){l=!0;break}n["###row-edited"]=l,a=!(!a&&!l)}}return this}catch(t){throw new Error("error caught @ setEdited(): "+t.toString())}},w=function(t){try{return null!=(t=t||n)&&Array.isArray(t)?y(t,(t=>t["###row-selected"])):null}catch(t){throw new Error("error caught @ getSelected(): "+t.toString())}},m=function(t){try{return null!=(t=t||n)&&Array.isArray(t)?y(t,(t=>t["###row-filtered"])):null}catch(t){throw new Error("error caught @ getFiltered(): "+t.toString())}},x=function(t){try{return null!=(t=t||n)&&Array.isArray(t)?(g(t),y(t,(t=>t["###row-edited"]))):null}catch(t){throw new Error("error caught @ getedited(): "+t.toString())}},b=function(){try{return null!=n&&Array.isArray(n)&&n.forEach((t=>{if(null!=c.columns&&Array.isArray(c.columns)){let e=!0;for(let n of c.columns){let o=null==t[n.data]?"":r.isObjectOrArray(t[n.data])?JSON.stringify(t[n.data]):t[n.data],i=null==n.filter?"":r.isObjectOrArray(n.filter)?JSON.stringify(n.filter):n.filter;if(!c.filterFunction(o,i)){e=!1;break}}t["###row-filtered"]=e}})),this}catch(t){throw new Error("error caught @ filterRows(): "+t)}},v=function(t,e){return c.sortedBy=t,c.ascending=e,this},S=function(t){try{return/^(\d{2})[-\/](\d{2})[-\/](\d{4})$|^(\d{4})[-\/](\d{2})[-\/](\d{2})$|^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2})$|^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(t)}catch(e){throw new Error("error caught @ isDateString("+t+"): "+e)}},E=function(t){try{let e=null,r=null;return/^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.test(t)?(e=/^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(t),e&&(r=new Date(e[3]+"-"+e[2]+"-"+e[1]+" 00:00:00").getTime())):/^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.test(t)?(e=/^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(t),e&&(r=new Date(e[1]+"-"+e[2]+"-"+e[3]+" 00:00:00").getTime())):/^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2})$/.test(t)?(e=/^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2})$/.exec(t),e&&(r=new Date(e[1]+"-"+e[2]+"-"+e[3]+" "+e[4]+":"+e[5]+":00").getTime())):/^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(t)?(e=/^(\d{4})[-\/](\d{2})[-\/](\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(t),e&&(r=new Date(e[1]+"-"+e[2]+"-"+e[3]+" "+e[4]+":"+e[5]+":"+e[6]).getTime())):r=0,r}catch(t){return 0}},C=function(t){try{let e=parseInt(t);return Number.isNaN(e)||(c={...c,start:Math.max(Math.min(e,c.end),Math.max(0===m().length?0:1,c.end-c.maxRows+1))}),this}catch(e){throw new Error("error caught @ setStart("+t+") - "+e)}},A=function(t){try{let e=parseInt(t);return Number.isNaN(e)||(c={...c,end:Math.min(Math.max(e,c.start),Math.min(m().length,c.start+c.maxRows-1))}),this}catch(e){throw new Error("error caught @ setEnd("+t+") - "+e)}},j=function(t,e){try{return null!=c&&null!=c.columns&&Array.isArray(c.columns)&&(c.columns[t].filter=e),this}catch(r){throw new Error("error caught @ setFilter("+t+", "+e+") - "+r)}},T=function(){try{if(null!=c){let t=c.end-c.start+1;C(0===m().length?0:1),A(Math.max(t,c.defaultEnd))}return this}catch(t){throw new Error("error caught @ resetPageNumbers() - "+t)}},O=function(){let t=null;try{let e=r.create("tbody",null);try{if(null!=c.columns&&Array.isArray(c.columns)){let t=r.create("tr",null);c.columns.forEach((e=>{let n={...c.headersStyle||{},...e.headerStyle||{}};t.appendContent(r.create("td",{class:e.class}).appendContent(r.create("div",{style:r.objToStyle(n),class:c.tableClass+" sort-header "+(c.sortedBy===e.data?"sorting":"")}).addEventHandlerIf("click",(()=>{v(e.data,c.sortedBy===e.data?!c.ascending:c.ascending),k()}),void 0,e.sortable).appendContent(r.create("div",{style:"flex:1;"})).appendContent(e.header+(c.sortedBy===e.data?c.ascending?"▲":"▼":"")).appendContent(r.create("div",{style:"flex:1;"}))))})),e.appendContent(t)}}catch(t){throw"@ headers: "+t}try{if(null!=c.columns&&Array.isArray(c.columns)){let t,n=r.create("tr",null);c.columns.forEach((e=>{let o=r.objToStyle({...{...c.filtersStyle||{},...e.filterStyle||{}},...e.filterEditable?{}:{"background-color":"#DDD"}}),i=e.filter||"";e.filterElement=r.create("input",{style:"display:block; "+o,value:i,placeholder:e.filterPlaceholder||"",...e.filterEditable?{}:{disabled:"true"}}).addEventHandler("contextmenu",(e=>{e.preventDefault(),r.get("html")[0].appendContent(t=r.create("div",{style:r.objToStyle({position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%","z-index":"9999","background-color":"hsla(0, 100%, 0%, 0.1)",display:"flex","flex-flow":"column nowrap","justify-content":"center","align-items":"center"})}).appendContent(r.create("textarea",{style:"padding:10px; background-color:#FFF; width:800px; height:400px; font-size:85%; border:1px solid #AAA;"}).addEventHandler("focus",(t=>{t.target.blur()})).appendContent("Filtering Guide:\n\n1. Boolean\n    'true' / 'false'\n\n2. Numbers\n    '<' / '<=' / '=' / '>' / '>=' + (number string)\n\n3. Dates\n    '<' / '<=' / '=' / '>' / '>=' + dd-MM-yyyy / yyyy-MM-dd / yyyy-MM-dd hh:mm / yyyy-MM-dd hh:mm:ss\n\n4. Strings\n    String Separator: Space ( )\n    Delimiter: Backtick (`)\n    A condition clause:\n        Include Strings: Space-separated strings that to be included.\n        Exclude Strings: Space-separated strings that to be excluded, placed after a backtick (`) after the Include Strings.\n        Strings between double quotes are treated as a single string (eg. \"mango tart\")\n        example: (apple pear ` tart)\n    Multiple Condition Clauses:\n        multiple condition clauses separate by double backticks (``).\n        example: (apple pear ` tart `` \"mango tart\")\n    Example:\n        data strings: [\"apple pie with pear\", \"apple tart with pear\", \"mango apple tart\", \"apple mango tart\", \"chocolate pie\"]\n\tFilter: (apple pear ` tart `` \"mango tart\" `` choco)\n        filtering result: [\"apple pie with pear\", \"mango tart\", \"chocolate pie\"]")).appendContent(r.create("span",{style:"padding: 10px;"}).appendContent("right click to close")).addEventHandler("contextmenu",(e=>{e.preventDefault(),t.remove()})))})),n.appendContent(r.create("td",{class:e.class}).appendContent(e.filterElement))})),e.appendContent(n)}}catch(t){throw"@ filters: "+t}try{let t=c.start,n=c.end,o=m();null!=o&&Array.isArray(o)&&null!=c.columns&&Array.isArray(c.columns)&&o.slice(t-1,n).forEach(((t,n)=>{try{let o=t=>({...c.rowsStyle||"",...t.rowsStyle||""}),i=t=>n%2==1?c.evenRowsStyle:c.oddRowsStyle,l=null;if(t["###row-removed"])try{l=r.create("tr",null),c.columns.forEach((e=>{try{let n=void 0!==t[e.data]?String(t[e.data]):"";if("###row-removed"===e.data){if("function"==typeof e.modifier){let r=Object.assign({},t);n=e.modifier(r)}}else"###row-selected"===e.data&&(n="");l.appendContent(r.create("td",{class:e.class,style:r.objToStyle({...i(e),...o(e)})}).appendContent(r.create("span",{style:r.objToStyle(c.removedStyle)}).appendContent(n)))}catch(t){throw"@ col['data'] = "+e.data+": "+t}}))}catch(t){throw"@ ###row-removed: "+t}else try{l=r.create("tr",t["###row-inserted"]?{style:r.objToStyle(c.insertedStyle)}:null),c.columns.forEach((e=>{let n=null!=t[e.data]?String(t[e.data]):"",a=t["###ori-"+e.data]||"";if(e.modifier)try{if("function"==typeof e.modifier){let r=Object.assign({},t);n=e.modifier(r)}}catch(t){throw"@ col.modifier: "+t}l.appendContent(r.create("td",{class:e.class,style:r.objToStyle({...i(e),...o(e)})}).appendContent(n).appendContentIf(r.create("br"),t["###row-edited"]).appendContentIf(r.create("span",{style:r.objToStyle(c.editedStyle)}).appendContentIf("("+("string"==typeof a?'"'+a+'"':JSON.stringify(a))+")",void 0!==t["###ori-"+e.data]),t["###row-edited"]))}))}catch(t){throw"@ not ###row-removed: "+t}e.appendContent(l)}catch(t){throw"@ index "+n+", content: "+t}}))}catch(t){throw"@ rows: "+t}try{t=r.create("div",{style:r.objToStyle({position:"relative",width:"100%",display:"flex","flex-flow":"column nowrap","justify-content":"flex-start","align-items":"center","row-gap":"3px","background-color":"#fff"})}).appendContent(r.create("div",{style:r.objToStyle({width:"100%",display:"flex","flex-flow":"row wrap","justify-content":"flex-start","align-items":"center","column-gap":"3px"})}).appendContent(r.create("div").appendContent(c.label)).appendContent(r.create("div",{style:"flex:1"})).appendContent(r.create("div",{style:r.objToStyle(c.actionsGroupStyle)}).appendContent(r.create("div",{style:r.objToStyle({display:"flex","flex-flow":(a?"column":"row")+" wrap","justify-content":"flex-start","align-items":"flex-end","column-gap":"3px"})}).appendContentIf(function(){let t=null;try{if(null!=n&&Array.isArray(n)){let e=n.filter((t=>t["###row-selected"])).length;1==c.multiSelect&&i&&(t=r.create("div",{style:r.objToStyle({display:"flex","flex-flow":"row wrap","justify-content":"flex-start","align-items":"center","column-gap":"3px"})}).appendContent(r.create("div",e>0?{}:{style:"display:none"}).appendContent(c.noOfSelected+e.toString())).appendContent(r.create("div",{style:r.objToStyle({display:"flex","flex-flow":"row wrap","justify-content":"flex-start","align-items":"center","column-gap":"3px"})}).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{f(!0),k()})).appendContent(c.selectAllFiltered)).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{f(!1),k()})).appendContent(c.unselectAllFiltered)).appendContentIf(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{!function(t){try{return null!=n&&Array.isArray(n)&&(n=n.map((e=>e["###row-edited"]?{...e,"###row-selected":!e["###row-removed"]&&t}:e))),this}catch(t){throw new Error("error caught @ setAllFilteredSelected(true): "+t)}}(!0),k()})).appendContent(c.selectAllEdited),a)))}return t}catch(t){throw new Error("error caught @ createSelectingGroup() - "+t)}}(),c.showSelectingGroup).appendContent(function(){let t=null;if(null!=n&&Array.isArray(n)&&null!=c)try{let e=n.filter((t=>t["###row-edited"])).length;t=r.create("div",{style:r.objToStyle({display:"flex","flex-flow":"row wrap","justify-content":"flex-start","align-items":"center","column-gap":"3px"})}).appendContentIf(c.noOfEdited+e,a).appendContentIf(r.create("div",{style:r.objToStyle({display:"flex","flex-flow":"row wrap","justify-content":"flex-start","align-items":"center","column-gap":"3px"})}).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{h(),k()})).appendContent(c.resetData)).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{!function(){try{let t=x(w());for(let e of t){let t=o.find((t=>t["###row-index"]===e["###row-index"]));if(null!=n&&Array.isArray(n)){let r=n.find((t=>t["###row-index"]===e["###row-index"]));Object.assign(r,t)}}return g(),this}catch(t){throw new Error("error caught @ resetSelectedData(): "+t)}}(),k()})).appendContent(c.resetSelectedData)),a)}catch(t){throw new Error("error caught @ createSelectingGroup() - "+t)}return t}()).appendContent(function(){let t=null;if(null!=c)try{t=r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{(function(){try{return null!=c&&null!=c.columns&&Array.isArray(c.columns)&&c.columns.forEach((t=>{t.filter=""})),this}catch(t){throw new Error("error caught @ resetFilters() - "+t)}})(),b(),T(),k()})).appendContent(c.resetFilters)}catch(t){throw new Error("error caught @ createResetFiltersButton() - "+t)}return t}()))).appendContent(r.create("div",{style:"width:100%;overflow:auto;"+(c.maxHeight?" max-height:"+c.maxHeight+";":"")}).appendContent(r.create("table",{style:r.objToStyle({width:"100%",height:"min-content","border-collapse":"collapse"})}).appendContent(e))).appendContent(function(){let t=null;if(null!=n&&Array.isArray(n)&&null!=c)try{t=r.create("div",{style:r.objToStyle(c.paginationGroupStyle)}).appendContent(r.create("div",{style:r.objToStyle({width:"100%",display:"flex","flex-flow":"row wrap","justify-content":"center","align-items":"center","column-gap":"3px"})}).appendContent(r.create("div").appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{!function(){try{let t=c.end-c.start+1;return c.start=0===m().length?0:1,c.end=Math.min(m().length,c.start+t-1),this}catch(t){throw new Error("error caught @ toBegining() - "+t)}}(),k()})).appendContent(c.toBegining)).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass,style:"margin-left:5px;"}).addEventHandler("click",(t=>{!function(){try{if(null!=n&&Array.isArray(n)&&null!=c){let t=c.end-c.start+1;c.start=Math.max(0===m().length?0:1,c.start-t),c.end=Math.min(n.length,c.start+t-1)}return this}catch(t){throw new Error("error caught @ priviousPage() - "+t)}}(),k()})).appendContent(c.previousPage))).appendContent(r.create("div").appendContent(r.create("input",{type:"text",style:r.objToStyle({"text-align":"center",padding:"3px 8px",width:8*Math.max(1,Math.ceil(Math.log10(n.length+1)))+20+"px"}),value:c.start}).addEventHandler("change",(t=>{C(t.target.value),k()}))).appendContent(r.create("span",{style:"margin: 0px 5px;"}).appendContent("-")).appendContent(r.create("input",{type:"text",style:r.objToStyle({"text-align":"center",padding:"3px 8px",width:8*Math.max(1,Math.ceil(Math.log10(n.length+1)))+20+"px"}),value:c.end}).addEventHandler("change",(t=>{A(t.target.value),k()}))).appendContent(r.create("span",{style:"margin: 0px 5px;"}).appendContent("/")).appendContent(m().length)).appendContent(r.create("div").appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass}).addEventHandler("click",(t=>{!function(){try{if(null!=c){let t=c.end-c.start+1;c.end=Math.min(m().length,c.end+t),c.start=Math.max(1,c.end-t+1)}return this}catch(t){throw new Error("error caught @ nextPage() - "+t)}}(),k()})).appendContent(c.nextPage)).appendContent(r.create("span",{class:c.tableClass+" "+c.buttonClass,style:"margin-left:5px;"}).preventDefault("click").addEventHandler("click",(t=>{!function(){try{if(null!=c){let t=c.end-c.start+1;c.end=m().length,c.start=Math.max(1,c.end-t+1)}return this}catch(t){throw new Error("error caught @ priviousPage() - "+t)}}(),k()})).appendContent(c.toEnding))))}catch(t){throw new Error("error caught @ createPaginationGroup() - "+t)}return t}()))}catch(t){throw"@ output: "+t}}catch(t){throw new Error("error caught @ createTable(): "+t)}return t},k=(t=!1)=>{try{return null!=e&&(function(){try{let t=c.sortedBy,e=c.ascending;if(null!=n&&Array.isArray(n)){let r=n.sort(((r,n)=>{if(null==r[t]||null==n[t])return null==r[t]&&null==n[t]?0:e&&null==r[t]?-1:1;if("boolean"==typeof r[t]&&"boolean"==typeof n[t])return r[t]==n[t]?0:e&&r[t]?1:-1;if(!isNaN(r[t])&&!isNaN(r[t]))return parseFloat(r[t])==parseFloat(n[t])?0:e?parseFloat(r[t])-parseFloat(n[t]):parseFloat(n[t])-parseFloat(r[t]);if("object"==typeof r[t]&&"object"==typeof n[t]){let o=JSON.stringify(r[t]),i=JSON.stringify(n[t]);return o==i?0:e?o-i:i-o}{let o=String(r[t]),i=String(n[t]);if(!S(o)||!S(i))return e?o.localeCompare(i):i.localeCompare(o);{let t=E(o),r=E(i);if(!isNaN(t)&&!isNaN(r))return e?t-r:r-t}}return 0}));n=r}return this}catch(t){throw new Error("error caught @ sort("+data+", "+order+"): "+t)}}(),b(),t&&T(),e.clear().appendContent(O()),N(),"function"==typeof c.onrefresh&&c.onrefresh()),this}catch(t){throw new Error("error caught @ refreshTable(): "+t)}},N=function(){let t=["keyup","dragend"];if(null!=c.columns&&Array.isArray(c.columns))for(let e of c.columns){let n=e.filterElement;n&&n.addEventHandler(t,r.debounce((t=>{let r=n.entity().selectionStart,o=n.entity().selectionEnd;j(c.columns.indexOf(e),n.entity().value),b(),T(),k();let i=c.columns[c.columns.indexOf(e)].filterElement.entity();n.entity(i),i.setSelectionRange(r,o),i.focus()}),c.filterDebounceDelay))}};return{setData:function(t){try{return a=!1,null!=t&&(t.forEach(((t,e)=>{t["###row-index"]=e+1,t["###row-filtered"]=!0,t["###row-selected"]=!1,t["###row-edited"]=!1,t["###row-inserted"]=!1,t["###row-removed"]=!1})),n=t,o=r.clone(t)),this}catch(e){throw new Error("error caught @ setData("+t+"): "+e)}},getData:function(){try{return n}catch(t){throw new Error("error caught @ getData(): "+t.toString())}},resetData:h,insertData:function(t){try{if(null!=n&&Array.isArray(n)){if(Array.isArray(t))t.forEach((t=>{let e={...t,"###row-index":-1*++s,"###row-filtered":!1,"###row-selected":!1,"###row-edited":!1,"###row-inserted":!0,"###row-removed":!1};n.push(e),o.push(r.clone(e))}));else{let e={...t,"###row-index":-1*++s,"###row-filtered":!1,"###row-selected":!1,"###row-edited":!1,"###row-inserted":!0,"###row-removed":!1};n.push(e),o.push(r.clone(e))}a=!0,g()}return this}catch(t){throw new Error("error caught @ insertData(): "+t)}},setTableSettings:function(t){try{c={...d,...t},c.headersStyle={...d.headersStyle,...t.headersStyle},c.filtersStyle={...d.filtersStyle,...t.filtersStyle},c.rowsStyle={...d.rowsStyle,...t.rowsStyle},c.oddRowsStyle={...d.oddRowsStyle,...t.oddRowsStyle},c.evenRowsStyle={...d.evenRowsStyle,...t.evenRowsStyle},c.editedStyle={...d.editedStyle,...t.editedStyle},c.insertedStyle={...d.insertedStyle,...t.insertedStyle},c.removedStyle={...d.removedStyle,...t.removedStyle};for(let t=0;t<c.columns.length;t++)c.columns[t]={...d.columns[0],...c.columns[t]};return this}catch(e){throw new Error("error caught @ setTableSettings("+t+"): "+e)}},getTableSettings:function(){return c},sortAsOriginal:function(){try{return v("###row-index",!0),k(),this}catch(t){throw new Error("error caught @ sortAsOriginal(): "+t)}},getSelected:w,getFiltered:m,getEdited:x,getInserted:function(t){try{return null!=(t=t||n)&&Array.isArray(t)?y(t,(t=>t["###row-inserted"])):null}catch(t){throw new Error("error caught @ getInserted(): "+t.toString())}},getRemoved:function(t){try{return null!=(t=t||n)&&Array.isArray(t)?y(t,(t=>t["###row-removed"])):null}catch(t){throw new Error("error caught @ getRemoved(): "+t.toString())}},getNotRemoved:function(t){try{return null!=(t=t||n)&&Array.isArray(t)?y(t,(t=>!t["###row-removed"])):null}catch(t){throw new Error("error caught @ getNotRemoved(): "+t.toString())}},createSelectBox:function(t){try{return i||(i=!0),r.create("input",{type:"checkbox",...t["###row-selected"]?{checked:""}:{}}).addEventHandler("click",(e=>{"boolean"!=typeof c.multiSelect||c.multiSelect||function(t){try{return null!=n&&Array.isArray(n)&&(n=n.map((e=>({...e,"###row-selected":!e["###row-removed"]&&t})))),this}catch(t){throw new Error("error caught @ setAllSelected(false): "+t)}}(!1),function(t,e){try{return null!=n&&Array.isArray(n)&&(n=n.map((r=>r["###row-index"]===t?{...r,"###row-selected":e}:r))),this}catch(r){throw new Error("error caught @ setSelected("+t+", "+e+"): "+r)}}(t["###row-index"],e.target.checked),k()}))}catch(e){throw new Error("error caught @ createSelectBox("+t+"): "+e)}},createRemoveBox:function(t){try{return l||(l=!0),r.create("input",{type:"checkbox",...t["###row-removed"]?{checked:""}:{}}).addEventHandler("click",(e=>{!function(t,e){try{return null!=n&&Array.isArray(n)&&(n=n.map((r=>r["###row-index"]===t?{...r,"###row-removed":e,"###row-selected":!1}:r))),this}catch(e){throw new Error("error caught @ setRemoved("+t+", "+selected+"): "+e)}}(t["###row-index"],e.target.checked),k()}))}catch(e){throw new Error("error caught @ createRemoveBox("+t+"): "+e)}},editData:function(t,e,o){try{if(null!=n&&Array.isArray(n)){let i,l=n.find((e=>e["###row-index"]===t));try{i=JSON.parse(o)}catch(t){i=o}(r.isObjectOrArray(l[e])?JSON.stringify(l[e]):l[e])!==JSON.stringify(i)&&(void 0===l["###ori-"+e]?l["###ori-"+e]=l[e]:l["###ori-"+e]===o&&delete l["###ori-"+e],l[e]=i,g([l]))}return this}catch(r){throw new Error("error caught @ editData("+t+", "+e+", "+o+"): "+r)}},setContainer:function(t){return e&&e.clear(),e=t instanceof r?t:new r(t),this},refreshTable:k}}t.r(e),t.d(e,{JsonTable:()=>n,Util:()=>r}),r.get=function(t){if("string"==typeof t){if(t.trim().startsWith("#"))return new r(document.querySelector(t));{let e=[];return document.querySelectorAll(t).forEach((t=>{e.push(new r(t))})),e}}return null},r.isObjectOrArray=function(t){return null!=t&&("object"==typeof t||Array.isArray(t))},r.debounce=function(t,e){let r;return async function(...n){clearTimeout(r),r=setTimeout((function(){t.apply(this,n)}),e)}},r.create=function(t,e){let n=document.createElement(t);if(null!=e&&"object"==typeof e)for(let t in e)e.hasOwnProperty(t)&&n.setAttribute(t,e[t]);return new r(n)},r.objToStyle=function(t){var e=null;try{e="";for(let r in t||{})e+=(e?" ":"")+r+":"+t[r]+";"}catch(e){throw new Error("error caught @ objToStyle("+t+"): "+e)}return e},r.styleToObj=function(t){var e=null;try{e={},t.split(";").forEach((function(t){if(t.trim()){var r=t.split(":"),n=r[0].trim(),o=r[1].trim();e[n]=o}}))}catch(e){throw new Error("error caught @ styleToObj("+t+"): "+e)}return e},r.clone=function(t){if(t instanceof r){let e=new r(t.entity());if(t._eventListenerList){e._eventListenerList=[];for(let r of t._eventListenerList)e.addEventHandler(r.type,r.listener,r.options)}return e}if(Array.isArray(t))return t.map(r.clone);if("object"==typeof t&&null!=t){if(t instanceof Node)return t;let e={};for(let n in t)t.hasOwnProperty(n)&&(e[n]=r.clone(t[n]));return e}return t},r.openBlob=function(t){let e=null;try{e=URL.createObjectURL(t),window.open(e,"_blank")}catch(t){console.error("Error opening blob:",t)}finally{e&&URL.revokeObjectURL(e)}},r.downloadBlob=function(t,e="filename"){let r=null;try{r=URL.createObjectURL(t);let n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),n.remove()}catch(t){console.error("Error downloading blob:",t)}finally{r&&URL.revokeObjectURL(r)}},r.prototype.parent=function(){return new r(this._entity.parentElement)},r.prototype.entity=function(t){return null==t?this._entity:(this._entity=t,this)},r.prototype.hide=function(){return this._entity&&this.css("display","none"),this},r.prototype.show=function(){return this._entity&&this.css("display","unset"),this},r.prototype.clear=function(){return this._entity&&(this._entity.innerHTML=""),this},r.prototype.fireEvent=function(t){return this._entity&&this._entity.dispatchEvent(new Event(t)),this},r.prototype.addEventHandler=function(t,e,r){try{if(this._eventListenerList=this._eventListenerList?this._eventListenerList:[],"string"==typeof t)this._entity.addEventListener(t,e,r),this._eventListenerList.push({type:t,listener:e,options:r});else{if(!Array.isArray(t))throw"invalid event input list:"+t;t.forEach((n=>{if("string"!=typeof n)throw"invalid events in input list:"+t;this._entity.addEventListener(n,e,r),this._eventListenerList.push({type:n,listener:e,options:r})}))}return this}catch(t){throw"@ addEventHandler: "+t}},r.prototype.addEventHandlerIf=function(t,e,r,n){return n&&this.addEventHandler(t,e,r),this},r.prototype.removeAllEventHandlers=function(){return this._eventListenerList&&this._eventListenerList.length>0&&this._eventListenerList.forEach((t=>{this._entity.removeEventListener(t.type,t.listener,t.options)})),this._eventListenerList=void 0,this},r.prototype.content=function(t){return void 0===t?this._entity.innerHTML:(t&&this.clear().appendContent(t),this)},r.prototype.appendContent=function(t){try{if(null!=t)if("string"==typeof t)this._entity.append(t);else if("number"==typeof t)this._entity.append(t);else if(t instanceof HTMLElement)this._entity.appendChild(t);else{if(!(t instanceof r))throw"content must be a string or number or HTMLElement or Util";this.appendContent(t.entity())}}catch(e){throw"@ appendContent("+JSON.stringify(t)+"): "+e}return this},r.prototype.appendContentIf=function(t,e=!0){try{e&&this.appendContent(t)}catch(e){throw"@ appendContentIf("+t+"): "+e}return this},r.prototype.appendContentOf=function(t,e=function(t){return t},r=function(t){return!0}){try{for(let n of t)this.appendContentIf(e(n),r(n))}catch(e){throw"@ appendContentOf("+t+", "+func+"): "+e}},r.prototype.appendSelect=function(t){return this.appendContent(r.createSelect(t))},r.createSelect=function(t){let e=r.create("select");if(t&&Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){let o=r.create("option");if("object"==typeof t[n]&&null!=t[n])for(let e in t[n])"content"===e?o.appendContent(t[n][e]):"eventHandler"===e?o.addEventHandler(e.events,e.func):o.attr(e,t[n][e]);e.appendContent(o)}return e},r.prototype.preventDefault=function(t){return this.addEventHandler(t,(function(t){t.preventDefault()})),this},r.prototype.val=function(t){return void 0===t?this._entity.value:(this._entity.value=t,this)},r.prototype.attr=function(t,e){return void 0===e?this._entity.getAttribute(t):("unset"==e?this._entity.removeAttribute(t):this._entity.setAttribute(t,e),this)},r.prototype.prop=function(t,e){return void 0===e?this[t]:(this[t]="unset"==e?void 0:e,this)},r.prototype.css=function(t,e){if(null==t)return this.attr("style");{this.attr("style",null==this.attr("style")?"":this.attr("style"));let n=r.styleToObj(this.attr("style"));return void 0===e?null==n?null:n[t]:("unset"==e?delete n[t]:n[t]=e,this.attr("style",r.objToStyle(n)),this)}},r.prototype.remove=function(){return this._entity.remove(),this._entity=void 0,this},r.downloadBlob=function(t,e="data"){try{let r=window.URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}catch(t){throw new Error("error caught @ downloadBlob: "+t)}},r.parseCsv=function(t,e=","){function r(t,e){const r=new RegExp(`(?:^|${e})("(?:[^"]+|"")*"|[^${e}]*)`,"g"),n=[];let o;for(;o=r.exec(t);)n.push(o[1].replace(/^\"|\"$/g,"").replace(/\"\"/g,'"'));return n}function n(t,e){const r={};for(let n=0;n<t.length;n++)r[t[n]]=e[n];return r}const o=function(t){const e=[];let r="",n=!1;for(let o=0;o<t.length;o++){const i=t[o],l=t[o+1];'"'===i?n&&'"'===l?(r+='"',o++):n=!n:n||"\n"!==i&&("\r"!==i||"\n"===l)?n||"\r"!==i||"\n"!==l?r+=i:(e.push(r),r="",o++):(e.push(r),r="")}return r&&e.push(r),e}(t),i=r(o[0],e),l=[];for(let t=1;t<o.length;t++){const a=n(i,r(o[t],e));l.push(a)}return l},r.objectArrayToCsv=function(t,e=",",r="\n"){let n="",o=Object.keys(t[0]).sort(((t,e)=>t.localeCompare(e)));return t.forEach((function(t){let i=o.map((e=>JSON.stringify(t[e]))).join(e);n+=(""==n?"":r)+i})),n=o.join(e)+r+n,n},r.downloadAsCsv=function(t,e="data.csv",n=","){try{if(t&&t.length>0){let o=r.objectArrayToCsv(t,n);r.downloadBlob(new Blob([o],{type:"text/csv"}),e)}}catch(t){throw new Error("error caught @ downloadAsCsv: "+t)}},r.prototype.noFocus=function(){this.addEventHandler("focus",(t=>{this.entity().blur()}))},r.loaded=function(t){null!=t&&"function"==typeof t&&document.addEventListener("DOMContentLoaded",t)},r.createFileElement=function(t="",e={}){let n,o,i,l=r.create("div").appendContent(n=r.create("div",{style:r.objToStyle({width:"calc(100% - 4px)",padding:"1px",border:"hsl(0 0 90) solid 1px","border-radius":"4px",display:"flex","flex-flow":"row nowrap","justify-content":"flex-start","align-items":"center",gap:"3px"}),...e.container||{}}).appendContent(o=r.create("input",{type:"file",name:t,style:r.objToStyle({width:"calc(100% - 30px)"}),...e.inputField||{}})).appendContent(i=r.create("div",{style:r.objToStyle({width:"30px",height:"20px",display:"flex","flex-flow":"row nowrap","justify-content":"center","align-items":"center","font-size":"15px","font-weight":"bold",cursor:"pointer",margin:"0px",padding:"0px",border:"1px solid #888888","border-radius":"3px",color:"#000000;","background-color":"#f3f3f3",outline:"none"}),...e.removeButton||{}}).appendContent("✕").addEventHandler("click",(t=>{l.remove()}))));return l.prop("container",n).prop("inputField",o).prop("removeButton",i)},r.createFileGroup=function(t="",e,n,o={}){let i,l={width:"100%",display:"flex","flex-flow":"column nowrap","justify-content":"flex-start","align-items":"flex-start"},a=r.create("div",{style:r.objToStyle(l)}),s=r.create("div",{style:r.objToStyle({display:"flex","flex-flow":"row nowrap","justify-content":"center","align-items":"center","font-size":"100%",cursor:"pointer",margin:"0px",padding:"0px 3px",border:"1px solid #888888","border-radius":"3px",color:"#000000;","background-color":"#f3f3f3",outline:"none"})}).appendContent("Add").addEventHandler("click",(e=>{(null==n||a.entity().children.length<n)&&a.appendContent(r.createFileElement(t,o).css("width","100%").css("padding-bottom","3px"))}));new MutationObserver((()=>{a.entity().children.length<n&&"none"===s.entity().style.display?s.show():a.entity().children.length==n&&"none"!==s.entity().style.display&&s.hide()})).observe(a.entity(),{attributes:!1,childList:!0,subtree:!0});for(let n=0;n<e;n++)a.appendContent(r.createFileElement(t,o).css("width","100%").css("padding-bottom","3px"));return i=r.create("div").appendContent(r.create("div",{style:r.objToStyle(l)}).appendContent(a).appendContent(s)),i.prop("container",i).prop("files",a).prop("addButton",s)},r.prototype.appendMovableDiv=function(t){return this.css("position","relative").appendContent(r.createMovableDiv(t)),this},r.createMovableDiv=function(t){let e=r.create("div",{style:this.objToStyle({position:"absolute",height:"min-content",width:"min-content","min-height":"50px","min-width":"50px",margin:"0px",padding:"0px",border:"solid #ddd 1px","z-index":"50","box-sizing":"border-box","background-color":"#fff"})});return e.appendContent(r.create("div",{style:this.objToStyle({height:"20px",width:"20px",margin:"0px",padding:"0px",position:"absolute",right:"-21px",top:"-1px","border-top":"solid #ddd 1px","border-bottom":"solid #ddd 1px","border-right":"solid #ddd 1px",display:"flex","justify-content":"center","align-items":"center","font-size":"15px","box-sizing":"border-box",color:"inherit","background-color":"inherit"})}).appendContent("✖")).appendContent(r.create("div",{style:this.objToStyle({height:"20px",width:"20px",margin:"0px",padding:"0px",position:"absolute",right:"-21px",top:"-1px","box-sizing":"border-box"})}).addEventHandler("mouseover",(function(t){t.target.style.cursor="pointer"})).addEventHandler("mouseout",(function(t){t.target.style.cursor="default"})).addEventHandler("focus",(function(t){t.target.blur()})).addEventHandler("click",(t=>{e.remove()}))).appendContent(r.create("div",{style:this.objToStyle({height:"20px",width:"20px",margin:"0px",padding:"0px",position:"absolute",right:"-21px",top:"19px","border-right":"solid #ddd 1px","border-bottom":"solid #ddd 1px",display:"flex","justify-content":"center","align-items":"center","font-size":"15px","box-sizing":"border-box",color:"inherit","background-color":"inherit"})}).appendContent("✠")).appendContent(r.create("div",{style:this.objToStyle({height:"20px",width:"20px",margin:"0px",padding:"0px",position:"absolute",right:"-21px",top:"19px","box-sizing":"border-box"})}).addEventHandler("mouseover",(function(t){t.target.style.cursor="move"})).addEventHandler("mouseout",(function(t){t.target.style.cursor="default"})).addEventHandler("focus",(function(t){t.target.blur()})).drag(e)).appendContentIf(t,t),e},r.prototype.drag=function(t){let e;return this.addEventHandler("mousedown",(n=>{this.hold={},this.hold.x=n.clientX,this.hold.y=n.clientY,r.get("html")[0].appendContent(e=r.create("div",{style:r.objToStyle({position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%","z-index":"9999"})}).addEventHandler(["mouseup","mouseleave"],(t=>{this.hold&&(this.hold=void 0,e.remove())})).addEventHandler("mousemove",(e=>{this.hold&&(t.css("left",t.entity().offsetLeft+e.clientX-this.hold.x+"px"),t.css("top",t.entity().offsetTop+e.clientY-this.hold.y+"px"),this.hold.x=e.clientX,this.hold.y=e.clientY)})))})),this},Object.defineProperty(r,"directions",{value:{up:0,right:1,down:2,left:3},writable:!1,configurable:!1,enumerable:!1}),r.createSplitedDiv=function(t,e,n){t=null==t?1:t,e=null==e?"50%":e,n=null!=n&&n;let o,i=r.create("div",{style:r.objToStyle({padding:"0px",margin:"0px","box-sizing":"border-box",width:"100%",height:"100%",display:"flex","align-items":"center"})}).css("flex-flow",(t%2==0?"column":"row")+" nowrap").css("justify-content",t%3==0?"flex-end":"flex-start").css("flex-direction",(t%2==0?"column":"row")+(t%3==0?"-reverse":"")),l=r.create("div",{style:r.objToStyle({padding:"0px",margin:"0px","box-sizing":"border-box"})}).css(t%2==0?"width":"height","100%").css(t%2==0?"height":"width",e),a=r.create("div",{style:r.objToStyle({padding:"0px",margin:"0px","box-sizing":"border-box",flex:"1"})}).css(t%2==0?"width":"height","100%"),s=r.create("div",{style:r.objToStyle({padding:"0px",margin:"0px","box-sizing":"border-box",cursor:n?t%2==0?"row-resize":"col-resize":"unset","box-sizing":"border-box",border:"0px","background-image":"linear-gradient(to "+(t%2==0?"bottom":"right")+",  #eee, #eee, #f8f8f8, #eee, #eee)"})}).css(t%2==0?"width":"height","100%").css(t%2==0?"height":"width","3px");return n&&s.addEventHandler("mousedown",(e=>{s.hold={},s.hold[t%2==0?"y":"x"]=t%2==0?e.clientY:e.clientX,r.get("html")[0].appendContent(o=r.create("div",{style:r.objToStyle({position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%","z-index":"9999"})}).addEventHandler(["mouseup","mouseleave"],(t=>{s.hold&&(s.hold=void 0,o.remove())})).addEventHandler("mousemove",(e=>{s.hold&&(l.css(t%2==0?"height":"width",l.entity()[t%2==0?"offsetHeight":"offsetWidth"]+(t%3==0?"-1":"1")*(t%2==0?e.clientY:e.clientX)-(t%3==0?"-1":"1")*s.hold[t%2==0?"y":"x"]+"px"),s.hold[t%2==0?"y":"x"]=t%2==0?e.clientY:e.clientX)})))})),i.prop("a",l).prop("b",a).prop("divider",s).appendContent(l).appendContent(s).appendContent(a)},r.getStrParts=(t,e="`",r=1)=>{try{let n=(t,e,r)=>{let o=t.split(e.repeat(r));if(r>1){let t=[];for(let i=0;i<o.length;i++){let l=n(o[i],e,r-1);t.push(l)}return t}return o};return n(t,e,r)}catch(t){throw new Error("error caught @ getStrParts: "+t)}},r.match=function(t,e,n,o){let i=!1;try{if(null==t&&""!==e)i=!1;else if(e.trim().startsWith("regex:"))i=new RegExp(e.trim().substring(6)).test(t);else{o||(t=t.toUpperCase(),e=e.toUpperCase());let l=r.getStrParts(e,n,2),a=t=>{try{let e=[],r=!1,n="";for(let o=0;o<t.length;o++){let i=t[o];r||" "!==i&&","!==i&&"+"!==i&&"\t"!==i?'"'===i?(r=!r,r||""===n||(e.push(n),n="")):n+=i:""!==n&&(e.push(n),n="")}return""!==n&&e.push(n),e}catch(t){throw"@ splitPart: "+t}},s=(t,e)=>{try{let r=e[0]?a(e[0]):[],n=e[1]?a(e[1]):[],o=!0;for(let e of n)if(o=o&&-1===t.indexOf(e),!o)return!1;let i=0!==r.length;for(let e of r)if(i=i&&-1!==t.indexOf(e),!i)return!1;return!0}catch(t){throw"@ check: "+t}};i=!1;for(let e=0;e<l.length;e++)if(s(t,l[e])){i=!0;break}}return i}catch(t){throw new Error("error caught @ match: "+t)}},n.cleanKeys=function(t){try{return n.removeKeys(t,"###%")}catch(e){throw new Error("error caught @ removeKeys("+JSON.stringify(t)+"): "+e.toString())}},n.removeKeys=function(t,e){try{if(null!=t&&Array.isArray(t))if("string"==typeof e)if(e.endsWith("%")){let r=e.slice(0,-1);for(let e=0;e<t.length;e++)for(let n in t[e])n.startsWith(r)&&delete t[e][n]}else for(let r=0;r<t.length;r++)delete t[r][e];else{if(!Array.isArray(e))throw new Error("keys argument must be a string or an array of strings");for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++)if(e[n].endsWith("%")){let o=e[n].slice(0,-1);for(let e in t[r])e.startsWith(o)&&delete t[r][e]}else delete t[r][e[n]]}return t}catch(r){throw new Error("error caught @ removeKeys("+JSON.stringify(t)+", "+JSON.stringify(e)+"): "+r.toString())}};var o=window;for(var i in e)o[i]=e[i];e.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();