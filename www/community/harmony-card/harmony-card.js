/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e=new WeakMap,n=t=>(...n)=>{const i=t(...n);return e.set(i,!0),i},i=t=>"function"==typeof t&&e.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r={},a={},c=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${l}`);class u{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let s=0,r=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)h(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[a],n=f.exec(e)[2],i=n.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const s=o.split(d);this.parts.push({type:"attribute",index:r,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const i=t.parentNode,o=e.split(d),s=o.length-1;for(let e=0;e<s;e++){let n,s=o[e];if(""===s)n=m();else{const t=f.exec(s);null!==t&&h(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===o[s]?(i.insertBefore(m(),t),n.push(t)):t.data=o[s],a+=s}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&r!==s||(r++,e.insertBefore(m(),t)),s=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const h=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},p=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,r=0,a=0,c=i.nextNode();for(;r<n.length;)if(s=n[r],p(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=e.pop(),c=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${c} `;class _{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const s=f.exec(t);e+=null===s?t+(n?v:l):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class w{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(y(t)||!b(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||y(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const n=new g(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const o of t)n=e[i],void 0===n&&(n=new x(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(o),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class C extends w{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const A=new class{handleAttributeExpressions(t,e,n,i){const o=e[0];if("."===o){return new C(t,e.slice(1),n).parts}return"@"===o?[new E(t,e.slice(1),i.eventContext)]:"?"===o?[new $(t,e.slice(1),n)]:new w(t,e,n).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function N(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(c);return n=e.keyString.get(i),void 0===n&&(n=new u(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const T=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const V=(t,...e)=>new _(t,e,"html",A)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t,e){const{element:{content:n},parts:i}=t,o=document.createTreeWalker(n,133,null,!1);let s=B(i),r=i[s],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,s=B(i,s),r=i[s]}l.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},B=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(p(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const H=t=>e=>{const n=Y(e.type,t);let i=T.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},T.set(n,i));let o=i.stringsArray.get(e.strings);if(void 0!==o)return o;const s=e.strings.join(c);if(o=i.keyString.get(s),void 0===o){const n=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(n,t),o=new u(e,n),i.keyString.set(s,o)}return i.stringsArray.set(e.strings,o),o},I=["html","svg"],U=new Set,q=(t,e,n)=>{U.add(t);const i=n?n.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{I.forEach(e=>{const n=T.get(Y(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),D(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:o}=t;if(null==n)return void i.appendChild(e);const s=document.createTreeWalker(i,133,null,!1);let r=B(o),a=0,c=-1;for(;s.nextNode();){for(c++,s.currentNode===n&&(a=j(e),n.parentNode.insertBefore(e,n));-1!==r&&o[r].index===c;){if(a>0){for(;-1!==r;)o[r].index+=a,r=B(o,r);return}r=B(o,r)}}}(n,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),D(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:L},W=Promise.resolve(!0);class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=L){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||z,o="function"==typeof i?i:i.fromAttribute;return o?o(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||z.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=F){const i=this.constructor,o=i._attributeNameForProperty(t,n);if(void 0!==o){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||F;this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,o=i._classProperties.get(t)||F;i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}});function K(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):X(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new tt(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const nt=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,o=e.length;i<o;i++){const o=e[i];Array.isArray(o)?t(o,n):n.push(o)}return n}(t);class it extends J{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){nt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}it.finalized=!0,it.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,o=O.has(e),r=R&&11===e.nodeType&&!!e.host,a=r&&!U.has(i),c=a?document.createDocumentFragment():e;if(((t,e,n)=>{let i=O.get(e);void 0===i&&(s(e,e.firstChild),O.set(e,i=new x(Object.assign({templateFactory:N},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:H(i)},n)),a){const t=O.get(c);O.delete(c);const n=t.value instanceof g?t.value.template:void 0;q(i,c,n),s(e,e.firstChild),e.appendChild(c),O.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var ot={},st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",at=/\[([^]*?)\]/gm,ct=function(){};function lt(t,e){for(var n=[],i=0,o=t.length;i<o;i++)n.push(t[i].substr(0,e));return n}function dt(t){return function(e,n,i){var o=i[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~o&&(e.month=o)}}function ut(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pt=["January","February","March","April","May","June","July","August","September","October","November","December"],mt=lt(pt,3),ft=lt(ht,3);ot.i18n={dayNamesShort:ft,dayNames:ht,monthNamesShort:mt,monthNames:pt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var gt={D:function(t){return t.getDate()},DD:function(t){return ut(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return ut(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return ut(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return ut(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return ut(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return ut(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return ut(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return ut(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return ut(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return ut(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return ut(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ut(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},vt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+rt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var n=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?n-1:n)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",ct],ddd:[rt,ct],MMM:[rt,dt("monthNamesShort")],MMMM:[rt,dt("monthNames")],a:[rt,function(t,e,n){var i=e.toLowerCase();i===n.amPm[0]?t.isPm=!1:i===n.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var n,i=(e+"").match(/([+-]|\d\d)/gi);i&&(n=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?n:-n)}]};vt.dd=vt.d,vt.dddd=vt.ddd,vt.DD=vt.D,vt.mm=vt.m,vt.hh=vt.H=vt.HH=vt.h,vt.MM=vt.M,vt.ss=vt.s,vt.A=vt.a,ot.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},ot.format=function(t,e,n){var i=n||ot.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=ot.masks[e]||e||ot.masks.default;var o=[];return(e=(e=e.replace(at,(function(t,e){return o.push(e),"@@@"}))).replace(st,(function(e){return e in gt?gt[e](t,i):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return o.shift()}))},ot.parse=function(t,e,n){var i=n||ot.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=ot.masks[e]||e,t.length>1e3)return null;var o={},s=[],r=[];e=e.replace(at,(function(t,e){return r.push(e),"@@@"}));var a,c=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(st,(function(t){if(vt[t]){var e=vt[t];return s.push(e[1]),"("+e[0]+")"}return t}));c=c.replace(/@@@/g,(function(){return r.shift()}));var l=t.match(new RegExp(c,"i"));if(!l)return null;for(var d=1;d<l.length;d++)s[d-1](o,l[d],i);var u,h=new Date;return!0===o.isPm&&null!=o.hour&&12!=+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12==+o.hour&&(o.hour=0),null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,u=new Date(Date.UTC(o.year||h.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):u=new Date(o.year||h.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),u};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var _t=["closed","locked","off"],yt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o},bt=function(t){yt(window,"haptic",t)},wt=function(t,e,n,i){var o;if("double_tap"===i&&n.double_tap_action?o=n.double_tap_action:"hold"===i&&n.hold_action?o=n.hold_action:"tap"===i&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(bt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(n.entity||n.camera_image)&&yt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":o.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),yt(window,"location-changed",{replace:n})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,o=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===o?"homeassistant":o;switch(o){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(s,i,{entity_id:e})})(t,e,_t.includes(t.states[e].state))}(e,n.entity),bt("success"));break;case"call-service":if(!o.service)return void bt("failure");var s=o.service.split(".",2);e.callService(s[0],s[1],o.service_data),bt("success")}};function St(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xt=new WeakMap,$t=n(t=>e=>{if(!(e instanceof S)||e instanceof P||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=e,{style:i}=n.element;xt.has(e)||(i.cssText=n.strings.join(" "));const o=xt.get(e);for(const e in o)e in t||(-1===e.indexOf("-")?i[e]=null:i.removeProperty(e));for(const e in t)-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e]);xt.set(e,t)});customElements.define("fa-icon",class extends it{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}static get styles(){return et`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}getSources(t){const e={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},n=t=>t.replace("fa-","");let i=(t=>{let i=t.split(" ");return[e[i[0]],n(i[1])]})(t);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${i[0]}.svg#${i[1]}`}constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}firstUpdated(){this.src=this.getSources(this.iClass)}_parseStyles(){return`\n      ${this.size?`width: ${this.size};`:""}\n      ${this.size?`height: ${this.size};`:""}\n      ${this.color?`fill: ${this.color};`:""}\n      ${this.style}\n    `}render(){return V`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `}});const Ct=et`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
  }

  :host ::slotted(.card-content) {
    padding: 16px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * .6);
    height: calc(var(--mmp-unit) * .6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color .25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: .5;
  }

  .play-pause {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .activities {
      display: flex;
      flex-wrap: wrap;
  }

  .activities>mwc-button:not(:first-child) {
    flex-grow: 1;
  }

  .remote {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  .xbox-buttons {
    display: grid;
    grid-template-columns: auto auto 10px auto auto auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .volume-controls {
      display: flex;
      justify-content: center;
  }

  .volume-controls>paper-slider {
    flex: 1;
  }
`,Pt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let kt=class extends it{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _volume_entity(){return this._config&&this._config.volume_entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return V``;const t=Object.keys(this.hass.states).filter(t=>"remote"===t.substr(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"media_player"===t.substr(0,t.indexOf(".")));return V`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Pt.required.icon}`}></ha-icon>
            <div class="title">${Pt.required.name}</div>
          </div>
          <div class="secondary">${Pt.required.secondary}</div>
        </div>
        ${Pt.required.show?V`
              <div class="values">
                <paper-dropdown-menu
                  label="Harmony Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>V`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div class="values">
                <paper-dropdown-menu
                  label="Volume Entity"
                  @value-changed=${this._valueChanged}
                  .configValue=${"volume_entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._volume_entity)}>
                    ${e.map(t=>V`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Pt.actions.icon}`}></ha-icon>
            <div class="title">${Pt.actions.name}</div>
          </div>
          <div class="secondary">${Pt.actions.secondary}</div>
        </div>
        ${Pt.actions.show?V`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${Pt.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${Pt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Pt.actions.options.tap.secondary}</div>
                </div>
                ${Pt.actions.options.tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${Pt.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${Pt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Pt.actions.options.hold.secondary}</div>
                </div>
                ${Pt.actions.options.hold.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${Pt.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${Pt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Pt.actions.options.double_tap.secondary}</div>
                </div>
                ${Pt.actions.options.double_tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Pt.appearance.icon}`}></ha-icon>
            <div class="title">${Pt.appearance.name}</div>
          </div>
          <div class="secondary">${Pt.appearance.secondary}</div>
        </div>
        ${Pt.appearance.show?V`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${`Toggle warning ${this._show_warning?"off":"on"}`}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${`Toggle error ${this._show_error?"off":"on"}`}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,Pt.actions.options)}_toggleOption(t){this._toggleThing(t,Pt)}_toggleThing(t,e){const n=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=n,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),yt(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([K()],kt.prototype,"hass",void 0),t([K()],kt.prototype,"_config",void 0),t([K()],kt.prototype,"_toggle",void 0),kt=t([Z("harmony-card-editor")],kt);const Et="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Mt extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Et?"100px":"50px",height:Et?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1});const n=t=>{if(this.cooldownStart)return;let e,n;this.held=!1,t.touches?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,n),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},i=n=>{this.cooldownEnd||["touchend","touchcancel"].includes(n.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?yt(t,"action",{action:"hold"}):e.hasDoubleTap?1===n.detail||"keyup"===n.type?this.dblClickTimeout=window.setTimeout(()=>{yt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),yt(t,"action",{action:"double_tap"})):yt(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("keyup",t=>{if(13===t.keyCode)return i(t)}),/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",n,{passive:!0}),t.addEventListener("click",i))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-harmony",Mt);const At=(t,e)=>{const n=(()=>{const t=document.body;if(t.querySelector("action-handler-harmony"))return t.querySelector("action-handler-harmony");const e=document.createElement("action-handler-harmony");return t.appendChild(e),e})();n&&n.bind(t,e)},Nt=n((t={})=>e=>{At(e.committer.element,t)}),Tt={volume_down:{command:"VolumeDown",icon:"mdi:volume-medium",hide:!1},volume_up:{command:"VolumeUp",icon:"mdi:volume-high",hide:!1},volume_mute:{command:"Mute",icon:"mdi:volume-off",hide:!1},skip_back:{command:"SkipBack",icon:"mdi:skip-previous",hide:!1},play:{command:"Play",icon:"mdi:play",hide:!1},pause:{command:"Pause",icon:"mdi:pause",hide:!1},skip_forward:{command:"SkipForward",icon:"mdi:skip-next",hide:!1},dpad_up:{command:"DirectionUp",icon:"mdi:chevron-up-circle",hide:!1},dpad_down:{command:"DirectionDown",icon:"mdi:chevron-down-circle",hide:!1},dpad_left:{command:"DirectionLeft",icon:"mdi:chevron-left-circle",hide:!1},dpad_right:{command:"DirectionRight",icon:"mdi:chevron-right-circle",hide:!1},dpad_center:{command:"OK",icon:"mdi:checkbox-blank-circle",hide:!1},xbox:{command:"Xbox",icon:"mdi:xbox",hide:!1},back:{command:"Back",icon:"mdi:undo-variant",hide:!1},a:{command:"A",icon:"mdi:alpha-a-circle",hide:!1,color:"#2d9f1c"},b:{command:"B",icon:"mdi:alpha-b-circle",hide:!1,color:"#e43308"},x:{command:"X",icon:"mdi:alpha-x-circle",hide:!1,color:"#003bbd"},y:{command:"Y",icon:"mdi:alpha-y-circle",hide:!1,color:"#f1c70f"}};var Ot={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Vt={common:Ot},Dt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},jt={common:Dt},Bt={en:Object.freeze({__proto__:null,common:Ot,default:Vt}),nb:Object.freeze({__proto__:null,common:Dt,default:jt})};function Yt(t,e="",n=""){const i=t.split(".")[0],o=t.split(".")[1],s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var r;try{r=Bt[s][i][o]}catch(t){r=Bt.en[i][o]}return void 0===r&&(r=Bt.en[i][o]),""!==e&&""!==n&&(r=r.replace(e,n)),r}var Rt=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===Ht}(t)}(t)};var Ht="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function It(t,e){return!1!==e.clone&&e.isMergeableObject(t)?Ft((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function Ut(t,e,n){return t.concat(e).map((function(t){return It(t,n)}))}function qt(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function zt(t,e){try{return e in t}catch(t){return!1}}function Lt(t,e,n){var i={};return n.isMergeableObject(t)&&qt(t).forEach((function(e){i[e]=It(t[e],n)})),qt(e).forEach((function(o){(function(t,e){return zt(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(zt(t,o)&&n.isMergeableObject(e[o])?i[o]=function(t,e){if(!e.customMerge)return Ft;var n=e.customMerge(t);return"function"==typeof n?n:Ft}(o,n)(t[o],e[o],n):i[o]=It(e[o],n))})),i}function Ft(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||Ut,n.isMergeableObject=n.isMergeableObject||Rt,n.cloneUnlessOtherwiseSpecified=It;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):Lt(t,e,n):It(e,n)}Ft.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return Ft(t,n,e)}),{})};var Wt=Ft;console.info(`%c  HARMONY-CARD \n%c  ${Yt("common.version")} 0.11.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Jt=class extends it{static async getConfigElement(){return document.createElement("harmony-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t||t.show_error)throw new Error(Yt("common.invalid_configuration"));if(!t.entity||"remote"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the remote domain for a harmony hub.");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:""},t)}preventBubbling(t){t.stopPropagation(),t.cancelBubble=!0}deviceCommand(t,e,n){var i,o;this.preventBubbling(t),null!=e&&(null===(i=this.hass)||void 0===i||i.callService("remote","send_command",{entity_id:null===(o=this._config)||void 0===o?void 0:o.entity,command:n,device:e}))}harmonyCommand(t,e){var n,i,o,s;this.preventBubbling(t),null==e||"off"==e||"turn_off"==e?null===(n=this.hass)||void 0===n||n.callService("remote","turn_off",{entity_id:null===(i=this._config)||void 0===i?void 0:i.entity}):null===(o=this.hass)||void 0===o||o.callService("remote","turn_on",{entity_id:null===(s=this._config)||void 0===s?void 0:s.entity,activity:e})}volumeCommand(t,e,n){var i,o,s;if(this.preventBubbling(t),null===(i=this._config)||void 0===i?void 0:i.volume_entity){var r={entity_id:null===(o=this._config)||void 0===o?void 0:o.volume_entity};null===(s=this.hass)||void 0===s||s.callService("media_player",e,Object.assign(r,n||{}))}}shouldUpdate(t){return!!t.has("config")||this.hasEntityChanged(this,t,"entity")}hasEntityChanged(t,e,n){if(t._config.entity){const i=e.get("hass");return i&&(i.states[t._config[n]],t.hass.states[t._config[n]]),!0}return!1}render(){var t;if(!this._config||!this.hass)return V``;if(this._config.show_warning)return V`
        <ha-card>
          <div class="warning">${Yt("common.show_warning")}</div>
        </ha-card>
      `;var e=this.hass.states[this._config.entity],n=e.state,i=e.attributes.current_activity,o=this._config.activities.find(t=>t.name===i),s=null===(t=o)||void 0===t?void 0:t.device,r=this.computeButtonConfig(this._config,o);return V`
      <ha-card
        style=${this.computeStyles()}
        .header=${this._config.name}
        @action=${this._handleAction}
        .actionHandler=${Nt({hasHold:St(this._config.hold_action),hasDoubleTap:St(this._config.double_tap_action),repeat:this._config.hold_action?this._config.hold_action.repeat:void 0})}
        tabindex="0"
        aria-label=${`Harmony: ${this._config.entity}`}
      >
        <div class="card-content">
            <div class="activities">
                <mwc-button ?outlined="${"off"===n}" label="Off" @click="${t=>this.harmonyCommand(t,"turn_off")}" @touchstart="${t=>this.preventBubbling(t)}"></mwc-button>
                
                ${this._config.activities.map(t=>V`
                    <mwc-button ?outlined="${i===t.name}" label=${t.name} @click="${e=>this.harmonyCommand(e,t.name)}" @touchstart="${t=>this.preventBubbling(t)}"></mwc-button>
                `)}
            </div>

            ${this.renderVolumeControls(this.hass,this._config,r,o)}

            <div class="play-pause">
                ${this.renderIconButton(r.skip_back,s)}
                ${this.renderIconButton(r.play,s)}
                ${this.renderIconButton(r.pause,s)}
                ${this.renderIconButton(r.skip_forward,s)}
            </div>

            <div class="remote">
                ${this.renderIconButton(r.dpad_left,s,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_right,s,{"grid-column":"3","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_up,s,{"grid-column":"2","grid-row":"1"})}
                ${this.renderIconButton(r.dpad_down,s,{"grid-column":"2","grid-row":"3"})}
                ${this.renderIconButton(r.dpad_center,s,{"grid-column":"2","grid-row":"2"})}        
            </div>        

            <div class="xbox-buttons">
                ${this.renderIconButton(r.xbox,s,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.back,s,{"grid-column":"2","grid-row":"2"})}
                ${this.renderIconButton(r.a,s,{"grid-column":"4","grid-row":"2"})}
                ${this.renderIconButton(r.b,s,{"grid-column":"5","grid-row":"2"})}
                ${this.renderIconButton(r.x,s,{"grid-column":"6","grid-row":"2"})}        
                ${this.renderIconButton(r.y,s,{"grid-column":"7","grid-row":"2"})}        
            </div>
        </div>
      </ha-card>
    `}renderIconButton(t,e,n){if(!0===t.hide)return V``;var i=Object.assign(n||{},{color:t.color});return V`
            <ha-icon-button 
                icon="${t.icon}" 
                style="${$t(i)}"
                @click="${n=>this.deviceCommand(n,t.device||e,t.command||"")}" 
                @touchstart="${t=>this.preventBubbling(t)}">
            </ha-icon-button>
        `}renderVolumeControls(t,e,n,i){var o,s,r,a;return(null===(o=i)||void 0===o?void 0:o.volume_entity)?this.renderMediaPlayerVolumeControls(t,null===(s=i)||void 0===s?void 0:s.volume_entity,n):(null===(r=i)||void 0===r?void 0:r.volume_device)?this.renderDeviceVolumeControls(null===(a=i)||void 0===a?void 0:a.volume_device,n):e.volume_entity?this.renderMediaPlayerVolumeControls(t,e.volume_entity,n):e.volume_device?this.renderDeviceVolumeControls(e.volume_device,n):V``}renderMediaPlayerVolumeControls(t,e,n){var i=t.states[e],o=i.attributes.volume_level,s=i.attributes.is_volume_muted,r=Object.assign({},{color:n.volume_down.color}),a=Object.assign({},{color:n.volume_up.color}),c=Object.assign({},{color:n.volume_mute.color});return V`
            <div class="volume-controls">
                <ha-icon-button style="${$t(r)}" icon="${n.volume_down.icon}" @click="${t=>this.volumeCommand(t,"volume_down")}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
                <ha-icon-button style="${$t(a)}" icon="${n.volume_up.icon}" @click="${t=>this.volumeCommand(t,"volume_up")}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
                <paper-slider           
                    @change=${t=>this.volumeCommand(t,"volume_set",{volume_level:t.target.value/100})}
                    @click=${t=>t.stopPropagation()}
                    @touchstart="${t=>this.preventBubbling(t)}"
                    ?disabled=${s}
                    min=0 max=100
                    value=${100*o}
                    dir=${"ltr"}
                    ignore-bar-touch pin>
                </paper-slider>
                
                <ha-icon-button style="${$t(c)}" icon="${n.volume_mute.icon}" @click="${t=>this.volumeCommand(t,"volume_mute",{is_volume_muted:!0})}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
            </div>`}renderDeviceVolumeControls(t,e){return V`
            <div class="volume-controls">
                ${this.renderIconButton(e.volume_down,t)}
                ${this.renderIconButton(e.volume_up,t)}

                ${this.renderIconButton(e.volume_mute,t)}
            </div>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&wt(this,this.hass,this._config,t.detail.action)}computeStyles(){var t,e=(null===(t=this._config)||void 0===t?void 0:t.scale)||1;return $t({"--mmp-unit":`${40*e}px`})}computeButtonConfig(t,e){let n=Wt(Tt,t.buttons||{});return e&&(n=Wt(n,e.buttons||{})),n}static get styles(){return[et`
            .warning {
                display: block;
                color: black;
                background-color: #fce588;
                padding: 8px;
            }
            
            div {
                font-size:16px;
            }`,Ct]}};t([K()],Jt.prototype,"hass",void 0),t([K()],Jt.prototype,"_config",void 0),Jt=t([Z("harmony-card")],Jt);export{Jt as HarmonyCard};
