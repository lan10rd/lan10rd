function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/0DP":function(e,t,n){"use strict";n.r(t);var o,r=n("fXoL"),s=n("mrSG"),i=n("tk/3"),c=((o=function(){function e(t){_classCallCheck(this,e),this.http=t,this.note=""}return _createClass(e,[{key:"init",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("assets/index.json").toPromise();case 2:this.index=e.sent.filter((function(e){return e.includes("/notes/")})).map((function(e){return e.split("assets/notes/").join("")}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"changeNote",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get(e,{responseType:"text"}).toPromise();case 2:this.note=t.sent;case 3:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(e){return new(e||o)(r.Sb(i.a))},o.\u0275prov=r.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),a=n("ofXK"),u=n("Waoo");function l(e,t){if(1&e){var n=r.Pb();r.Mb(0),r.Ob(1,"div",1),r.Ob(2,"common-select-element",2),r.Wb("optionChange",(function(e){return r.ec(n),r.ac().selected=e}))("clicked",(function(e){return r.ec(n),r.ac().srv.changeNote("assets/notes/"+e)})),r.Nb(),r.Nb(),r.Ob(3,"pre",3),r.kc(4),r.Nb(),r.Lb()}if(2&e){var o=r.ac();r.zb(2),r.bc("options",o.srv.index)("option",o.selected)("searchEnabled",!0),r.zb(2),r.lc(o.srv.note)}}var p,f=((p=function(){function e(t){_classCallCheck(this,e),this.srv=t}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.srv.init();case 2:this.selected=this.srv.index[0],this.srv.changeNote("assets/notes/"+this.selected);case 4:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||p)(r.Jb(c))},p.\u0275cmp=r.Db({type:p,selectors:[["notes-txt-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"tcenter"],[1,"glo-drop","p","ubuntu-thin","bl",2,"padding-top","0",3,"options","option","searchEnabled","optionChange","clicked"],[1,"glo-drop","p","pre","ubuntu-mono",2,"margin-top","2rem"]],template:function(e,t){1&e&&r.jc(0,l,5,4,"ng-container",0),2&e&&r.bc("ngIf",t.srv.index)},directives:[a.j,u.a],styles:[""]}),p);n.d(t,"NotesComponent",(function(){return h}));var d,h=((d=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=r.Db({type:d,selectors:[["notes-component"]],decls:3,vars:0,consts:[[1,"glo-drop","p",2,"color","gold"],[1,"bl",2,"margin-top","2rem"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.kc(1," Ready to learn? Use the topics above to navigate to formal notes, or check the quick notes below!\n"),r.Nb(),r.Kb(2,"notes-txt-component",1))},directives:[f],styles:[""]}),d)}}]);