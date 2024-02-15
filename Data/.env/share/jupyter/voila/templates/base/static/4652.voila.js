(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4652,2266,5455],{68585:(e,t,i)=>{"use strict";i.r(t);var n,s=i(18246),a=(i(76219),i(50558)),r=(i(22766),i(75324)),o=(i(74834),i(86282),i(38102),i(68082)),l=i(82361),d=(i(99969),i(53968)),u=(i(91238),i(23190)),h=(i(61933),i(55455)),c=i(41508);class g extends u.Widget{constructor(){super(),this._layoutDebouncer=new l.Debouncer((()=>{this._layoutModified.emit(void 0)}),0),this._layoutModified=new d.Signal(this),this.id="main";const e=new u.BoxLayout;e.alignment="start",e.spacing=0,this.addClass("jp-LabShell");const t=this._topHandler=new n.PanelHandler;t.panel.id="voila-top-panel",t.panel.node.setAttribute("role","banner"),u.BoxLayout.setStretch(t.panel,0),t.panel.hide(),e.addWidget(t.panel);const i=this._mainPanel=new u.BoxPanel;i.id="jp-main-content-panel",i.direction="top-to-bottom",u.BoxLayout.setStretch(i,1),e.addWidget(i);const s=this._bottomPanel=new u.Panel;s.node.setAttribute("role","contentinfo"),s.id="voila-bottom-panel",u.BoxLayout.setStretch(s,0),e.addWidget(s),s.hide(),this.layout=e}get currentWidget(){return this._mainPanel.widgets[0]}activateById(e){}add(e,t,i){switch(t){case"top":this._addToTopArea(e,i);break;case"bottom":this._addToBottomArea(e,i);break;case"main":this._mainPanel.addWidget(e);break;default:console.warn(`Area ${t} is not implemented yet!`)}}widgets(e){switch(e){case"top":return this._topHandler.panel.children();case"bottom":return this._bottomPanel.children();case"main":this._mainPanel.children();break;default:return[][Symbol.iterator]()}return[][Symbol.iterator]()}_addToTopArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:900;this._topHandler.addWidget(e,n),this._onLayoutModified(),this._topHandler.panel.isHidden&&this._topHandler.panel.show()}_addToBottomArea(e,t){e.id?(this._bottomPanel.addWidget(e),this._onLayoutModified(),this._bottomPanel.isHidden&&this._bottomPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_onLayoutModified(){this._layoutDebouncer.invoke()}}!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;s.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new u.Panel,o.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},a=s.ArrayExt.upperBound(this._items,n,e.itemCmp);s.ArrayExt.insert(this._items,a,n),this._panel.insertWidget(a,t)}}}(n||(n={}));const p=i(4147);class m extends c.JupyterFrontEnd{constructor(e){var t;if(super(Object.assign(Object.assign({},e),{shell:null!==(t=e.shell)&&void 0!==t?t:new g})),this.name="Voila",this.namespace=this.name,this.version=p.version,this._widgetManager=null,this._widgetManagerPromise=new a.PromiseDelegate,e.mimeExtensions)for(const t of(0,c.createRendermimePlugins)(e.mimeExtensions))this.registerPlugin(t)}get paths(){return{urls:{base:h.PageConfig.getOption("baseUrl"),notFound:h.PageConfig.getOption("notFoundUrl"),app:h.PageConfig.getOption("appUrl"),static:h.PageConfig.getOption("staticUrl"),settings:h.PageConfig.getOption("settingsUrl"),themes:h.PageConfig.getOption("themesUrl"),doc:h.PageConfig.getOption("docUrl"),translations:h.PageConfig.getOption("translationsApiUrl"),hubHost:h.PageConfig.getOption("hubHost")||void 0,hubPrefix:h.PageConfig.getOption("hubPrefix")||void 0,hubUser:h.PageConfig.getOption("hubUser")||void 0,hubServerName:h.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:h.PageConfig.getOption("appSettingsDir"),schemas:h.PageConfig.getOption("schemasDir"),static:h.PageConfig.getOption("staticDir"),templates:h.PageConfig.getOption("templatesDir"),themes:h.PageConfig.getOption("themesDir"),userSettings:h.PageConfig.getOption("userSettingsDir"),serverRoot:h.PageConfig.getOption("serverRoot"),workspaces:h.PageConfig.getOption("workspacesDir")}}}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}get widgetManagerPromise(){return this._widgetManagerPromise}set widgetManager(e){this._widgetManager=e,this._widgetManager&&this._widgetManagerPromise.resolve(this._widgetManager)}get widgetManager(){return this._widgetManager}}const y={id:"@voila-dashboards/voila:paths",activate:e=>e.paths,autoStart:!0,provides:c.JupyterFrontEnd.IPaths};var b=i(32247);const w={id:"@voila-dashboards/voila:translator",activate:e=>new b.TranslationManager,autoStart:!0,provides:b.ITranslator};var v=i(39003),f=i(78029),_=i(82094),P=i(97954),j=i(89571);class C extends u.Widget{processMessage(e){super.processMessage(e),"resize"===e.type&&window.dispatchEvent(new Event("resize"))}}const S="application/vnd.jupyter.widget-view+json",M={id:"@voila-dashboards/voila:widget-manager",autoStart:!0,requires:[v.IRenderMimeRegistry],provides:j.IJupyterWidgetRegistry,activate:async(e,t)=>{if(!(e instanceof m))throw Error("The Voila Widget Manager plugin must be activated in a VoilaApp");const i=h.PageConfig.getBaseUrl(),n=h.PageConfig.getOption("kernelId"),s=f.ServerConnection.makeSettings({baseUrl:i}),a=await f.KernelAPI.getKernelModel(n,s);if(!a)return{registerWidget(e){throw Error(`The model for kernel id ${n} does not exist`)}};const r=new _.KernelConnection({model:a,serverSettings:s}),o=new P.KernelWidgetManager(r,t);return e.widgetManager=o,t.removeMimeType(S),t.addFactory({safe:!1,mimeTypes:[S],createRenderer:e=>new P.WidgetRenderer(e,o)},-10),window.addEventListener("beforeunload",(e=>{const t=new FormData,n=document.cookie.match("\\b_xsrf=([^;]*)\\b"),s=n&&n[1]||"";t.append("_xsrf",s),window.navigator.sendBeacon(`${i}voila/api/shutdown/${r.id}`,t),r.dispose()})),{registerWidget:async t=>{(await e.widgetManagerPromise.promise).register(t)}}}},x={id:"@voila-dashboards/voila:render-outputs",autoStart:!0,requires:[v.IRenderMimeRegistry,j.IJupyterWidgetRegistry],activate:async(e,t)=>{var i;await(null===(i=t.latexTypesetter)||void 0===i?void 0:i.typeset(document.createElement("div"))),document.body.querySelectorAll("div.jp-MarkdownOutput").forEach((e=>{var i;null===(i=t.latexTypesetter)||void 0===i||i.typeset(e)})),document.body.querySelectorAll('script[type="application/vnd.voila.cell-output+json"]').forEach((async e=>{const i=JSON.parse(e.innerHTML),n=t.preferredMimeType(i.data,"any");if(!n)return null;const s=t.createRenderer(n);if(s.renderModel(i).catch((e=>{const t=document.createElement("pre");t.textContent=`Javascript Error: ${e.message}`,s.node.appendChild(t),t.className="lm-Widget jp-RenderedText",t.setAttribute("data-mime-type","application/vnd.jupyter.stderr")})),s.addClass("jp-OutputArea-output"),e.parentElement){const t=e.parentElement;t.removeChild(e),u.Widget.attach(s,t)}}));const n=document.getElementById("rendered_cells");if(n){const t=new C({node:n});e.shell.add(t,"main")}}};var E=i(7181),T=i(45494),k=i(4433);const O="JupyterLab Light";class L{constructor(e){this._current=null,this._links=[],this._overrides={},this._overrideProps={},this._outstanding=null,this._pending=0,this._requests={},this._themes={},this._themeChanged=new d.Signal(this),this._requestedTheme=O;const{host:t,url:i}=e;this.translator=e.translator||b.nullTranslator,this._trans=this.translator.load("jupyterlab"),this._base=i,this._host=t}get theme(){return this._current}get themes(){return Object.keys(this._themes)}get themeChanged(){return this._themeChanged}getCSS(e){var t;return null!==(t=this._overrides[e])&&void 0!==t?t:getComputedStyle(document.documentElement).getPropertyValue(`--jp-${e}`)}loadCSS(e){const t=this._base,i=h.URLExt.isLocal(e)?h.URLExt.join(t,e):e,n=this._links;return new Promise(((e,t)=>{const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i),s.addEventListener("load",(()=>{e(void 0)})),s.addEventListener("error",(()=>{t(`Stylesheet failed to load: ${i}`)})),document.body.appendChild(s),n.push(s),this.loadCSSOverrides()}))}loadCSSOverrides(){this._overrides={}}validateCSS(e,t){const i=this._overrideProps[e];return i?!!CSS.supports(i,t)||(console.warn(`CSS validation failed: invalid value.\nkey: '${e}', val: '${t}', prop: '${i}'`),!1):(console.warn(`CSS validation failed: could not find property corresponding to key.\nkey: '${e}', val: '${t}'`),!1)}register(e){const{name:t}=e,i=this._themes;if(i[t])throw new Error(`Theme already registered for ${t}`);return i[t]=e,this._themeChanged.emit({name:"",oldValue:null,newValue:""}),new r.DisposableDelegate((()=>{delete i[t]}))}async setTheme(e){this._requestedTheme=e,this._loadSettings()}isLight(e){return this._themes[e].isLight}themeScrollbars(e){return!1}getDisplayName(e){var t,i;return null!==(i=null===(t=this._themes[e])||void 0===t?void 0:t.displayName)&&void 0!==i?i:e}_loadSettings(){const e=this._outstanding,t=this._pending,i=this._requests;t&&(window.clearTimeout(t),this._pending=0);const n=this._themes,s=this._requestedTheme;if(e)return e.then((()=>{this._loadSettings()})).catch((()=>{this._loadSettings()})),void(this._outstanding=null);if(i[s]=i[s]?i[s]+1:1,n[s])return this._outstanding=this._loadTheme(s),void delete i[s];if(i[s]>20){const e=O;return delete i[s],n[e]?(console.warn(`Could not load theme ${s}, using default ${e}.`),void(this._outstanding=this._loadTheme(e))):void this._onError(this._trans.__("Neither theme %1 nor default %2 loaded.",s,e))}this._pending=window.setTimeout((()=>{this._loadSettings()}),75)}_loadTheme(e){const t=this._current,i=this._links,n=this._themes,s=new r.DisposableDelegate((()=>{}));i.forEach((e=>{e.parentElement&&e.parentElement.removeChild(e)})),i.length=0;const a=t?n[t].unload():Promise.resolve();return Promise.all([a,n[e].load()]).then((()=>{this._current=e,this._themeChanged.emit({name:"theme",oldValue:t,newValue:e}),this._host&&(this._host.hide(),requestAnimationFrame((()=>{this._host.show(),I.fitAll(this._host),s.dispose()})))})).catch((e=>{this._onError(e),s.dispose()}))}_onError(e){(0,T.showDialog)({title:this._trans.__("Error Loading Theme"),body:String(e),buttons:[T.Dialog.okButton({label:this._trans.__("OK")})]})}}var I;!function(e){e.fitAll=function e(t){for(const i of t.children())e(i);t.fit()}}(I||(I={}));const A=[y,w,M,x,{id:"@voila-dashboards/voila:theme-manager",description:"Provides the theme manager.",requires:[c.JupyterFrontEnd.IPaths],activate:(e,t)=>{const i=e.shell,n=h.URLExt.join(h.PageConfig.getBaseUrl(),t.urls.themes),s=new L({host:i,url:n});let a;return s.themeChanged.connect(((e,t)=>{a=t.newValue,a.length>0&&(document.body.dataset.jpThemeLight=String(s.isLight(a)),document.body.dataset.jpThemeName=a)})),s},autoStart:!0,provides:T.IThemeManager},{id:"@voila-dashboards/voila:theme",autoStart:!0,optional:[T.IThemeManager],activate:async(e,t)=>{if(k.jupyterHighlightStyle.module&&E.StyleModule.mount(document,k.jupyterHighlightStyle.module),!t)return;const i=h.PageConfig.getOption("jupyterLabTheme")||"light";"dark"!==i&&"light"!==i&&await t.setTheme(i),window.themeLoaded=!0,window.cellLoaded&&window.voila_finish()}}];class H extends f.EventManager{constructor(e={}){super(e),this.dispose()}}class U extends f.BaseManager{constructor(){super(...arguments),this.userChanged=new d.Signal(this),this.connectionFailure=new d.Signal(this),this.identity=null,this.permissions=null}refreshUser(){return Promise.resolve()}get isReady(){return!0}get ready(){return Promise.resolve()}}class D extends f.BaseManager{constructor(){super(...arguments),this.specsChanged=new d.Signal(this),this.connectionFailure=new d.Signal(this),this.specs=null}refreshSpecs(){return Promise.resolve()}get isReady(){return!0}get ready(){return Promise.resolve()}}const W=()=>!0;class B extends f.ServiceManager{constructor(e){var t,i,n,s,a;super({standby:null!==(t=null==e?void 0:e.standby)&&void 0!==t?t:W,kernelspecs:null!==(i=null==e?void 0:e.kernelspecs)&&void 0!==i?i:new D({}),events:null!==(n=null==e?void 0:e.events)&&void 0!==n?n:new H,user:null!==(s=null==e?void 0:e.user)&&void 0!==s?s:new U({}),contents:null!==(a=null==e?void 0:e.contents)&&void 0!==a?a:new f.ContentsManager})}}async function R(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(i){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),i}}function*N(e,t){let i;i=Object.prototype.hasOwnProperty.call(e,"__esModule")?e.default:e;const n=Array.isArray(i)?i:[i];for(const e of n)h.PageConfig.Extension.isDisabled(e.id)||t.includes(e.id)||t.includes(e.id.split(":")[0])||(yield e)}window.addEventListener("load",(async function(){const e=[i(90490).default.filter((e=>"@jupyterlab/codemirror-extension:languages"===e.id)),i(82810),i(83018),i(77187),i(47327),i(33717).ZP.filter((e=>"@jupyter-widgets/jupyterlab-manager:plugin"!==e.id)),A];!function(){const[e,t]=["fullMathjaxUrl","mathjaxConfig"],i=h.PageConfig.getOption(e),n=h.PageConfig.getOption(t);return("null"!==i||"null"!==n)&&(h.PageConfig.setOption(e,"null"===i?"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js":i),h.PageConfig.setOption(t,"null"===n?"TeX-AMS_CHTML-full,Safe":n),!0)}()?e.push(i(33294)):e.push(i(72249));const t=[i(23911),i(80051),i(56263)],n=JSON.parse(h.PageConfig.getOption("federated_extensions")),s=[],a=[],r=[];(await Promise.allSettled(n.map((async e=>(await async function(e,t){await function(e){return new Promise(((t,i)=>{const n=document.createElement("script");n.onerror=i,n.onload=t,n.async=!0,document.head.appendChild(n),n.src=e}))}(e),await i.I("default");const n=window._JUPYTERLAB[t];await n.init(i.S.default)}(`${h.URLExt.join(h.PageConfig.getOption("fullLabextensionsUrl"),e.name,e.load)}`,e.name),e))))).forEach((e=>{if("rejected"===e.status)return void console.error(e.reason);const t=e.value;t.extension&&s.push(R(t.name,t.extension)),t.mimeExtension&&a.push(R(t.name,t.mimeExtension)),t.style&&r.push(R(t.name,t.style))})),(await Promise.allSettled(s)).forEach((t=>{if("fulfilled"===t.status)for(const i of N(t.value,[]))e.push(i);else console.error(t.reason)})),(await Promise.allSettled(a)).forEach((e=>{if("fulfilled"===e.status)for(const i of N(e.value,[]))t.push(i);else console.error(e.reason)})),(await Promise.allSettled(r)).filter((({status:e})=>"rejected"===e)).forEach((e=>{console.error(e.reason)}));const o=new m({mimeExtensions:t,shell:new g,serviceManager:new B});o.registerPluginModules(e),await o.start(),window.jupyterapp=o}))},70584:e=>{"use strict";e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KPC9zdHlsZT4KPHBhdGggZD0iTTUuMiw1LjlMOSw5LjdsMy44LTMuOGwxLjIsMS4ybC00LjksNWwtNC45LTVMNS4yLDUuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAtMC42aDE4djE4SDBWLTAuNnoiLz4KPC9zdmc+Cg"},70764:()=>{},45158:()=>{},58635:()=>{},30139:()=>{},63653:()=>{},4147:e=>{"use strict";e.exports=JSON.parse('{"name":"@voila-dashboards/voila","version":"0.5.5","description":"The Voilà Frontend","author":"Voilà contributors","license":"BSD-3-Clause","main":"lib/index.js","browserslist":">0.8%, not ie 11, not op_mini all, not dead","dependencies":{"@jupyter-widgets/base":"^6.0.6","@jupyter-widgets/jupyterlab-manager":"^5.0.9","@jupyterlab/application":"^4.0.0","@jupyterlab/apputils":"^4.0.0","@jupyterlab/apputils-extension":"^4.0.0","@jupyterlab/codemirror":"^4.0.3","@jupyterlab/codemirror-extension":"^4.0.0","@jupyterlab/coreutils":"^6.0.0","@jupyterlab/docregistry":"^4.0.0","@jupyterlab/javascript-extension":"^4.0.0","@jupyterlab/json-extension":"^4.0.0","@jupyterlab/logconsole":"^4.0.0","@jupyterlab/mainmenu":"^4.0.0","@jupyterlab/markedparser-extension":"^4.0.0","@jupyterlab/mathjax-extension":"^4.0.0","@jupyterlab/mathjax2-extension":"^4.0.0","@jupyterlab/nbformat":"^4.0.0","@jupyterlab/notebook":"^4.0.0","@jupyterlab/outputarea":"^4.0.0","@jupyterlab/rendermime":"^4.0.0","@jupyterlab/rendermime-extension":"^4.0.0","@jupyterlab/services":"^7.0.0","@jupyterlab/settingregistry":"^4.0.0","@jupyterlab/theme-dark-extension":"^4.0.2","@jupyterlab/theme-light-extension":"^4.0.2","@jupyterlab/translation":"^4.0.0","@jupyterlab/ui-components":"^4.0.0","@jupyterlab/vega5-extension":"^4.0.0","@lumino/algorithm":"^2.0.0","@lumino/commands":"^2.0.0","@lumino/coreutils":"^2.0.0","@lumino/datagrid":"^2.1.2","@lumino/disposable":"^2.0.0","@lumino/domutils":"^2.0.0","@lumino/dragdrop":"^2.0.0","@lumino/messaging":"^2.0.0","@lumino/properties":"^2.0.0","@lumino/signaling":"^2.0.0","@lumino/virtualdom":"^2.0.0","@lumino/widgets":"^2.0.0","react":"^18.2.0","react-dom":"^18.2.0","style-mod":"^4.0.3"},"devDependencies":{"@jupyterlab/builder":"^4.0.0","@types/node":"~18.8.3","css-loader":"^6.7.2","fs-extra":"^9.1.0","glob":"~7.1.6","npm-run-all":"^4.1.5","p-limit":"^2.2.2","rimraf":"^3.0.2","style-loader":"~3.3.1","tsc-watch":"^6.0.0","typescript":"~5.0.2","watch":"^1.0.2","webpack":"^5.24.1","webpack-bundle-analyzer":"^4.4.0","webpack-cli":"^4.5.0","webpack-merge":"^5.7.3","whatwg-fetch":"^3.0.0"},"scripts":{"build":"npm run build:lib && webpack --mode=development","build:lib":"tsc","build:prod":"npm run build:lib && webpack --mode=production","clean":"jlpm run clean:lib && jlpm run clean:asset && rimraf build","clean:lib":"rimraf lib tsconfig.tsbuildinfo","clean:asset":"rimraf ../../share/jupyter/voila/schemas ../../share/jupyter/voila/themes ../../share/jupyter/voila/style.js","test":"echo \\"Error: no test specified\\" && exit 1","watch":"tsc-watch --onSuccess \\"webpack --mode=development\\"","watch:lib":"tsc -w","watch:bundle":"webpack --watch --mode=development"}}')}}]);