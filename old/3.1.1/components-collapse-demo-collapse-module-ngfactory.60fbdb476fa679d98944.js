(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+6bh":function(l,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i});var u=e("CcnG"),o=e("Ip0R"),t=e("oxqd"),a=u.ab({encapsulation:2,styles:[],data:{}});function s(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.Ua(16777216,null,null,1,null,s)),u.bb(2,671744,null,0,o.l,[u.Ea],{ngComponentOutlet:[0,"ngComponentOutlet"],ngComponentOutletInjector:[1,"ngComponentOutletInjector"]},null),(l()(),u.Ua(0,null,null,0))],function(l,n){var e=n.component;l(n,2,0,n.context.$implicit.outlet,e.sectionInjections(n.context.$implicit))},null)}function i(l){return u.wb(2,[(l()(),u.Ua(16777216,null,null,1,null,c)),u.bb(1,802816,null,0,o.m,[u.Ea,u.Z,u.A],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.content)},null)}u.Ya("docs-section",t.a,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"docs-section",[],null,null,null,i,a)),u.bb(1,49152,null,0,t.a,[u.y],null,null)],null,null)},{content:"content"},{},[])},"1WuW":function(l,n){l.exports='<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="isCollapsed" class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},"9G7Q":function(l,n){l.exports='<div class="row">\n  <div class="col-md-3">\n    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n            [attr.aria-expanded]="!isCollapsed" aria-controls="collapseEvent">Toggle collapse\n    </button>\n  </div>\n  <div class="col-md-9">\n    <pre class="card card-block card-header">Event: {{message}}</pre>\n  </div>\n</div>\n<hr>\n<div id="collapseEvent" class="card card-block card-header"\n     (collapsed)="collapsed()" (expanded)="expanded()" [collapse]="isCollapsed">\n  <div class="well well-lg">Some content</div>\n</div>\n'},AHj1:function(l,n){l.exports='<button type="button" class="btn btn-success" (click)="collapse.display=\'inline-block\'"\n        aria-controls="collapseBasic">Inline-block\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.display=\'none\'"\n        aria-controls="collapseBasic">None\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="!isCollapsed" #collapse="bs-collapse" class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},AlpK:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),o=function(){return function(){}}(),t=e("+R8e"),a=e("R23a"),s=e("7ctM"),c=e("A8CJ"),i=e("qzmI"),r=e("BFzJ"),p=e("/jpH"),d=e("ybC4"),b=e("+6bh"),m=e("oxqd"),h=function(){return function(){this.isCollapsed=!1}}(),g=function(){return function(){this.isOpen=!1}}(),f=function(){function l(){this.isCollapsed=!1}return l.prototype.collapsed=function(){this.message="collapsed"},l.prototype.expanded=function(){this.message="expanded"},l}(),v=e("ClAA"),y=e("y20O"),C=e("nk7K"),w=function(){return function(){}}(),x=function(){return function(){this.isCollapsed=!1}}(),k=e("l3GJ"),E=[{name:"Usage",anchor:"usage",outlet:v.a,content:{doc:e("eLGa")}},{name:"Examples",anchor:"examples",outlet:y.a,content:[{title:"Basic",anchor:"basic",component:e("gtL+"),html:e("1WuW"),outlet:h},{title:"Events",anchor:"events",component:e("gkUM"),html:e("9G7Q"),description:"Collapse directive exposes 2 events: <code>collapsed</code>, that fires when a content was hidden, \n                      and <code>expanded</code>, that fires when a content was shown",outlet:f},{title:"Manual toggle",anchor:"manual-toggle",component:e("amDU"),html:e("cSet"),outlet:g},{title:"Inline display",anchor:"inline-display",component:e("FoJB"),html:e("AHj1"),outlet:x},{title:"Accessibility",anchor:"accessibility",outlet:w}]},{name:"API Reference",anchor:"api-reference",outlet:C.a,content:[{title:"CollapseDirective",anchor:"collapse-directive",outlet:k.b}]}],M=function(){return function(){this.name="Collapse",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse",this.componentContent=E}}(),I=u.ab({encapsulation:2,styles:[],data:{}});function B(l){return u.wb(2,[(l()(),u.cb(0,0,null,null,23,"demo-section",[],null,null,null,p.b,p.a)),u.bb(1,49152,null,0,d.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),u.cb(2,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the "])),(l()(),u.cb(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["required transitions component"])),(l()(),u.ub(-1,null,["("])),(l()(),u.cb(7,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["not yet implemented"])),(l()(),u.ub(-1,null,[")) for easy toggle behavior."])),(l()(),u.cb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["The easiest way to add the collapse component to your app (will be added to the root module)"])),(l()(),u.cb(12,0,null,0,9,"pre",[["class","prettyprint lang-bash prettyprinted"]],null,null,null,null,null)),(l()(),u.cb(13,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["ng add ngx"])),(l()(),u.cb(15,0,null,null,1,"span",[["class","pun"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["-"])),(l()(),u.cb(17,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["bootstrap "])),(l()(),u.ub(-1,null,[" --component "])),(l()(),u.cb(20,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["collapse"])),(l()(),u.cb(22,0,null,0,1,"docs-section",[],null,null,null,b.b,b.a)),u.bb(23,49152,null,0,m.a,[u.y],{content:[0,"content"]},null)],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,23,0,e.componentContent)},null)}var O=u.Ya("collapse-section",M,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"collapse-section",[],null,null,null,B,I)),u.bb(1,49152,null,0,M,[],null,null)],null,null)},{},{},[]),S=e("yD1i"),D=u.ab({encapsulation:2,styles:[],data:{}});function U(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-primary"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var u=!0,o=l.component;"click"===n&&(u=!1!=(o.isCollapsed=!o.isCollapsed)&&u);return u},null,null)),(l()(),u.ub(-1,null,["Toggle collapse\n"])),(l()(),u.cb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.cb(3,0,null,null,3,"div",[["class","card card-block card-header"],["id","collapseBasic"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),u.bb(4,16384,null,0,S.a,[u.p,u.Q],{collapse:[0,"collapse"]},null),(l()(),u.cb(5,0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["Some content"]))],function(l,n){l(n,4,0,n.component.isCollapsed)},function(l,n){l(n,0,0,!n.component.isCollapsed),l(n,3,0,u.mb(n,4).isCollapse,u.mb(n,4).display,u.mb(n,4).isExpanded,u.mb(n,4).isExpanded,u.mb(n,4).isExpanded,u.mb(n,4).isCollapsed,u.mb(n,4).isCollapsing)})}var A=u.Ya("collapse-demo",h,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"collapse-demo",[],null,null,null,U,D)),u.bb(1,49152,null,0,h,[],null,null)],null,null)},{},{},[]),Y=u.ab({encapsulation:2,styles:[],data:{}});function G(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.cb(1,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),u.cb(2,0,null,null,1,"button",[["aria-controls","collapseEvent"],["class","btn btn-primary"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var u=!0,o=l.component;"click"===n&&(u=!1!=(o.isCollapsed=!o.isCollapsed)&&u);return u},null,null)),(l()(),u.ub(-1,null,["Toggle collapse "])),(l()(),u.cb(4,0,null,null,2,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),u.cb(5,0,null,null,1,"pre",[["class","card card-block card-header"]],null,null,null,null,null)),(l()(),u.ub(6,null,["Event: ",""])),(l()(),u.cb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.cb(8,0,null,null,3,"div",[["class","card card-block card-header"],["id","collapseEvent"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],[[null,"collapsed"],[null,"expanded"]],function(l,n,e){var u=!0,o=l.component;"collapsed"===n&&(u=!1!==o.collapsed()&&u);"expanded"===n&&(u=!1!==o.expanded()&&u);return u},null,null)),u.bb(9,16384,null,0,S.a,[u.p,u.Q],{collapse:[0,"collapse"]},{collapsed:"collapsed",expanded:"expanded"}),(l()(),u.cb(10,0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["Some content"]))],function(l,n){l(n,9,0,n.component.isCollapsed)},function(l,n){var e=n.component;l(n,2,0,!e.isCollapsed),l(n,6,0,e.message),l(n,8,0,u.mb(n,9).isCollapse,u.mb(n,9).display,u.mb(n,9).isExpanded,u.mb(n,9).isExpanded,u.mb(n,9).isExpanded,u.mb(n,9).isCollapsed,u.mb(n,9).isCollapsing)})}var T=u.Ya("collapse-demo-events",f,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"collapse-demo-events",[],null,null,null,G,Y)),u.bb(1,49152,null,0,f,[],null,null)],null,null)},{},{},[]),H=u.ab({encapsulation:2,styles:[],data:{}});function J(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"button",[["aria-controls","collapseManual"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0;"click"===n&&(o=!1!==u.mb(l,6).show()&&o);return o},null,null)),(l()(),u.ub(-1,null,["Show content\n"])),(l()(),u.cb(2,0,null,null,1,"button",[["aria-controls","collapseManual"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0;"click"===n&&(o=!1!==u.mb(l,6).hide()&&o);return o},null,null)),(l()(),u.ub(-1,null,["Hide content\n"])),(l()(),u.cb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.cb(5,0,null,null,3,"div",[["class","card card-block card-header"],["id","collapseManual"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),u.bb(6,16384,[["collapse",4]],0,S.a,[u.p,u.Q],{collapse:[0,"collapse"]},null),(l()(),u.cb(7,0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["Some content"]))],function(l,n){l(n,6,0,n.component.isOpen)},function(l,n){l(n,5,0,u.mb(n,6).isCollapse,u.mb(n,6).display,u.mb(n,6).isExpanded,u.mb(n,6).isExpanded,u.mb(n,6).isExpanded,u.mb(n,6).isCollapsed,u.mb(n,6).isCollapsing)})}var R=u.Ya("toggle-manual-demo",g,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"toggle-manual-demo",[],null,null,null,J,H)),u.bb(1,49152,null,0,g,[],null,null)],null,null)},{},{},[]),j=u.ab({encapsulation:2,styles:[],data:{}});function q(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,22,"p",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["Be sure to add "])),(l()(),u.cb(2,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["aria-expanded"])),(l()(),u.ub(-1,null,[" to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of "])),(l()(),u.cb(5,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,['aria-expanded="false"'])),(l()(),u.ub(-1,null,[". If you\u2019ve set the collapsible element to be open by default using the "])),(l()(),u.cb(8,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["show"])),(l()(),u.ub(-1,null,[" class, set "])),(l()(),u.cb(11,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,['aria-expanded="true"'])),(l()(),u.ub(-1,null,[" on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed. If the control element\u2019s HTML element is not a button (e.g., an "])),(l()(),u.cb(14,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["<a>"])),(l()(),u.ub(-1,null,[" or "])),(l()(),u.cb(17,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["<div>"])),(l()(),u.ub(-1,null,["), the attribute "])),(l()(),u.cb(20,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,['role="button"'])),(l()(),u.ub(-1,null,[" should be added to the element."])),(l()(),u.cb(23,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),u.ub(-1,null,["If your control element is targeting a single collapsible element \u2013 i.e. the "])),(l()(),u.cb(25,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["data-target"])),(l()(),u.ub(-1,null,[" attribute is pointing to an "])),(l()(),u.cb(28,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["id"])),(l()(),u.ub(-1,null,[" selector \u2013 you should add the "])),(l()(),u.cb(31,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["aria-controls"])),(l()(),u.ub(-1,null,[" attribute to the control element, containing the "])),(l()(),u.cb(34,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["id"])),(l()(),u.ub(-1,null,[" of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself."]))],null,null)}var F=u.Ya("demo-accessibility",w,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"demo-accessibility",[],null,null,null,q,j)),u.bb(1,49152,null,0,w,[],null,null)],null,null)},{},{},[]),Q=u.ab({encapsulation:2,styles:[],data:{}});function z(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-success"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0;"click"===n&&(o=!1!==(u.mb(l,6).display="inline-block")&&o);return o},null,null)),(l()(),u.ub(-1,null,["Inline-block\n"])),(l()(),u.cb(2,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0;"click"===n&&(o=!1!==(u.mb(l,6).display="none")&&o);return o},null,null)),(l()(),u.ub(-1,null,["None\n"])),(l()(),u.cb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.cb(5,0,null,null,3,"div",[["class","card card-block card-header"],["id","collapseBasic"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),u.bb(6,16384,[["collapse",4]],0,S.a,[u.p,u.Q],{collapse:[0,"collapse"]},null),(l()(),u.cb(7,0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),u.ub(-1,null,["Some content"]))],function(l,n){l(n,6,0,!n.component.isCollapsed)},function(l,n){l(n,5,0,u.mb(n,6).isCollapse,u.mb(n,6).display,u.mb(n,6).isExpanded,u.mb(n,6).isExpanded,u.mb(n,6).isExpanded,u.mb(n,6).isCollapsed,u.mb(n,6).isCollapsing)})}var L=u.Ya("inline-display-demo",x,function(l){return u.wb(0,[(l()(),u.cb(0,0,null,null,1,"inline-display-demo",[],null,null,null,z,Q)),u.bb(1,49152,null,0,x,[],null,null)],null,null)},{},{},[]),N=e("Ip0R"),W=e("gIcY"),Z=e("vSOO"),K=e("ZYCi"),P=e("HxCd"),$=e("YAQW"),V=e("1H/a"),X=e("RGtq"),_=e("k3/p");e.d(n,"DemoCollapseModuleNgFactory",function(){return ll});var ll=u.Za(o,[],function(l){return u.jb([u.kb(512,u.m,u.Pa,[[8,[t.a,a.a,s.a,c.a,i.a,r.a,O,A,T,R,F,L]],[3,u.m],u.G]),u.kb(4608,N.p,N.o,[u.C,[2,N.y]]),u.kb(4608,W.z,W.z,[]),u.kb(4608,Z.a,Z.a,[N.i,K.n]),u.kb(5120,P.c,P.b,[[3,P.c]]),u.kb(4608,$.f,$.f,[]),u.kb(4608,V.a,V.a,[]),u.kb(1073742336,S.b,S.b,[]),u.kb(1073742336,N.c,N.c,[]),u.kb(1073742336,W.w,W.w,[]),u.kb(1073742336,W.k,W.k,[]),u.kb(1073742336,$.d,$.d,[]),u.kb(1073742336,k.d,k.d,[]),u.kb(1073742336,K.q,K.q,[[2,K.v],[2,K.n]]),u.kb(1073742336,y.b,y.b,[]),u.kb(1073742336,C.b,C.b,[]),u.kb(1073742336,v.b,v.b,[]),u.kb(1073742336,X.a,X.a,[]),u.kb(1073742336,_.a,_.a,[]),u.kb(1073742336,o,o,[]),u.kb(1024,K.l,function(){return[[{path:"",component:M}]]},[])])})},FoJB:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'inline-display-demo',\n  templateUrl: './inline-display.html'\n})\nexport class InlineDisplayDemoComponent {\n  isCollapsed = false;\n}\n"},amDU:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'toggle-manual-demo',\n  templateUrl: './toggle-manual.html'\n})\nexport class ToggleManualDemoComponent {\n  isOpen = false;\n}\n"},cSet:function(l,n){l.exports='<button type="button" class="btn btn-primary" (click)="collapse.show()"\n        aria-controls="collapseManual">Show content\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.hide()"\n        aria-controls="collapseManual">Hide content\n</button>\n<hr>\n<div id="collapseManual" #collapse="bs-collapse" [collapse]="isOpen"\n     class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},eLGa:function(l,n){l.exports="// RECOMMENDED\nimport { CollapseModule } from 'ngx-bootstrap/collapse';\n// or\nimport { CollapseModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [CollapseModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},gkUM:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo-events',\n  templateUrl: './events.html'\n})\nexport class CollapseDemoEventsComponent {\n  isCollapsed = false;\n  message: string;\n\n  collapsed(): void {\n    this.message = 'collapsed';\n  }\n\n  expanded(): void {\n    this.message = 'expanded';\n  }\n}\n"},"gtL+":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo',\n  templateUrl: './basic.html'\n})\nexport class CollapseDemoComponent {\n  isCollapsed = false;\n}\n"}}]);