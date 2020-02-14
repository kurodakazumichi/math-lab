parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BHXf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unifySign=function(e){return 0===e?0:e},exports.deg2rad=function(e){return Math.PI/180*e},exports.rad2deg=function(e){return 180/Math.PI*e};
},{}],"slJc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return e.prototype.equal=function(e){return this.x===e.x&&this.y===e.y},e.prototype.add=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.sub=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.times=function(e){return this.x*=e,this.y*=e,this},Object.defineProperty(e.prototype,"magnitude",{get:function(){var e=this.x,t=this.y;return Math.sqrt(e*e+t*t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"normalize",{get:function(){var t=this.magnitude;if(0==t)return{x:0,y:0};var n={x:this.x/t,y:this.y/t};return new e(n.x,n.y)},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.toString=function(){return"("+this.x+", "+this.y+")"},Object.defineProperty(e,"zero",{get:function(){return new e(0,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"one",{get:function(){return new e(1,1)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"up",{get:function(){return new e(0,1)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"down",{get:function(){return new e(0,-1)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"left",{get:function(){return new e(-1,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"right",{get:function(){return new e(1,0)},enumerable:!0,configurable:!0}),e.add=function(e,t){return e.clone().add(t)},e.sub=function(e,t){return e.clone().sub(t)},e.times=function(e,t){return e.clone().times(t)},e.inverse=function(e){return e.clone().times(-1)},e.isZero=function(e){return 0===e.x&&0===e.y},e.isParallel=function(e,t){return 0===e.x*t.y-e.y*t.x},e.isVertical=function(t,n){return 0===e.dot(t,n)},e.dot=function(e,t){return e.x*t.x+e.y*t.y},e.cross=function(e,t){return e.x*t.y-t.x*e.y},e.angle=function(t,n){var r=e.dot(t,n)/(t.magnitude*n.magnitude);return Math.acos(r)},e}();exports.default=e;
},{}],"ebvv":[function(require,module,exports) {
"use strict";var t=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i.default=t,i};Object.defineProperty(exports,"__esModule",{value:!0});var i=t(require("~/util")),e=function(){function t(){this._a=0,this._b=0,this._c=0,this._p=0,this._q=0,this._a=this._b=this._c=this._p=this._q=0}return Object.defineProperty(t.prototype,"a",{get:function(){return i.unifySign(this._a)},set:function(t){this._a=Number(t),this.initAPQ(this._a,this._p,this._q)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"b",{get:function(){return i.unifySign(this._b)},set:function(i){this._b=Number(i),this._p=t.calcP_By_ab(this.a,this.b),this._q=t.calcQ_By_abc(this.a,this.b,this.c)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"c",{get:function(){return i.unifySign(this._c)},set:function(i){this._c=Number(i),this._q=t.calcQ_By_abc(this.a,this.b,this.c)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"p",{get:function(){return i.unifySign(this._p)},set:function(i){this._p=Number(i),this._b=t.calcB_By_ap(this.a,this.p),this._c=t.calcC_By_pq(this.a,this.p,this.q)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"q",{get:function(){return i.unifySign(this._q)},set:function(i){this._q=Number(i),this._c=t.calcC_By_pq(this.a,this.p,this.q)},enumerable:!0,configurable:!0}),t.prototype.initABC=function(i,e,n){return this._a=i,this._b=e,this._c=n,this._p=t.calcP_By_ab(i,e),this._q=t.calcQ_By_abc(i,e,n),this},t.prototype.initAPQ=function(i,e,n){return this._a=i,this._p=e,this._q=n,this._b=t.calcB_By_ap(i,e),this._c=t.calcC_By_pq(i,e,n),this},t.prototype.initByApexAndPassPoint=function(i,e,n,r){var o=t.calcA_By_pqxy(i,e,n,r);return this.initAPQ(o,i,e),this},t.prototype.initByAxisAnd2PassPoints=function(i,e,n,r,o){var a=t.calcA_By_axixX_x1y1_x2y2(i,e,n,r,o),s=t.calcQ_By_axixX_x1y1_x2y2(i,e,n,r,o),c=i;return this.initAPQ(a,c,s),this},t.prototype.initBy3PassPoints=function(i,e,n,r,o,a){var s=t.calcA_By_x1y1_x2y2_x3y3(i,e,n,r,o,a),c=t.calcB_By_x1y1_x2y2_x3y3(i,e,n,r,o,a),u=t.calcC_By_x1y1_x2y2_x3y3(i,e,n,r,o,a);return this.initABC(s,c,u),this},t.prototype.fx=function(t){if(this.isInvalid)return 0;var i=this.a,e=this.p;return i*((t-e)*(t-e))+this.q},Object.defineProperty(t.prototype,"apex",{get:function(){return{x:this.p,y:this.q}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axis",{get:function(){return this.p},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isInvalid",{get:function(){return!t.isValidA(this.a)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasApex",{get:function(){var i=this.p,e=this.q;return t.hasApex(i,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){if(!(0<=this.a))return this.apex.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){if(!(this.a<=0))return this.apex.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"discriminant",{get:function(){var i=this.a,e=this.b,n=this.c;return t.discriminant(i,e,n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"solution",{get:function(){var i=this.a,e=this.b,n=this.c;return t.solution(i,e,n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPositiveDefinite",{get:function(){var i=this.a,e=this.b,n=this.c;return t.isPositiveDefinite(i,e,n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNegativeDefinite",{get:function(){var i=this.a,e=this.b,n=this.c;return t.isNegativeDefinite(i,e,n)},enumerable:!0,configurable:!0}),t.prototype.toStringOfSlope=function(t){return void 0===t&&(t=1),this.isInvalid?"なし":this.a.toFixed(t)},t.prototype.toStringOfAxis=function(t){return void 0===t&&(t=1),this.hasApex?"x="+this.axis.toFixed(t):"なし"},t.prototype.toStringOfApex=function(t){return void 0===t&&(t=1),this.hasApex?"("+this.apex.x.toFixed(t)+", "+this.apex.y.toFixed(t)+")":"なし"},t.prototype.toStringOfLatexAPQ=function(t){return void 0===t&&(t=1),this.isInvalid?"none":"$$y="+this.a.toFixed(t)+"(x - ("+this.p.toFixed(t)+"))^2 + ("+this.q.toFixed(t)+")$$"},t.prototype.toStringOfLatexABC=function(t){return void 0===t&&(t=1),this.isInvalid?"none":"$$y="+this.a.toFixed(t)+"x^2 + ("+this.b.toFixed(t)+")x + ("+this.c.toFixed(t)+")$$"},t.prototype.toStringAboutShape=function(){var t=this.a;return this.isInvalid?"":t<0?"上に凸":"下に凸"},t.prototype.toString=function(){var t=this;return"{a:"+t.a+", b:"+t.b+", c:"+t.c+", p:"+t.p+", q:"+t.q+"}"},t.calcP_By_ab=function(t,i){return-i/(2*t)},t.calcQ_By_abc=function(t,i,e){return-(Math.pow(i,2)-4*t*e)/(4*t)},t.calcB_By_ap=function(t,i){return-2*t*i},t.calcC_By_pq=function(t,i,e){return t*Math.pow(i,2)+e},t.calcA_By_pqxy=function(t,i,e,n){return(n-i)/Math.pow(e-t,2)},t.calcA_By_axixX_x1y1_x2y2=function(t,i,e,n,r){return(e-r)/(Math.pow(i-t,2)-Math.pow(n-t,2))},t.calcQ_By_axixX_x1y1_x2y2=function(t,i,e,n,r){return e-this.calcA_By_axixX_x1y1_x2y2(t,i,e,n,r)*Math.pow(i-t,2)},t.calcA_By_x1y1_x2y2_x3y3=function(t,i,e,n,r,o){return((i-n)*(t-r)-(i-o)*(t-e))/((t-e)*(t-r)*(e-r))},t.calcB_By_x1y1_x2y2_x3y3=function(t,i,e,n,r,o){return(i-n-this.calcA_By_x1y1_x2y2_x3y3(t,i,e,n,r,o)*(Math.pow(t,2)-Math.pow(e,2)))/(t-e)},t.calcC_By_x1y1_x2y2_x3y3=function(t,i,e,n,r,o){return i+(t*t*-this.calcA_By_x1y1_x2y2_x3y3(t,i,e,n,r,o)-this.calcB_By_x1y1_x2y2_x3y3(t,i,e,n,r,o)*t)},t.discriminant=function(t,i,e){return Math.pow(i,2)-4*t*e},t.solution=function(e,n,r){var o=t.discriminant(e,n,r);if(0!==e){if(o<0)return[];var a=2*e,s=i.unifySign((-n-Math.sqrt(o))/a),c=i.unifySign((-n+Math.sqrt(o))/a);return 0===o?[s]:[Math.min(s,c),Math.max(s,c)]}},t.isValidA=function(t){return 0!==t&&(!isNaN(t)&&1/0!=Math.abs(t))},t.hasApex=function(t,i){return!isNaN(t)&&!isNaN(i)&&(1/0!==Math.abs(t)&&1/0!==Math.abs(i))},t.isPositiveDefinite=function(i,e,n){return!!t.isValidA(i)&&(!(i<0)&&t.discriminant(i,e,n)<0)},t.isNegativeDefinite=function(i,e,n){return!!t.isValidA(i)&&(!(0<i)&&t.discriminant(i,e,n)<0)},t.intersect=function(i,e){var n={count:0,points:[]};if(i.isInvalid||e.isInvalid)return n;var r=(new t).initABC(i.a-e.a,i.b-e.b,i.c-e.c).solution;return void 0===r||0===r.length?n:(r.map(function(t){n.count++,n.points.push(t,i.fx(t))}),n)},t}();exports.default=e;
},{"~/util":"BHXf"}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./util"));exports.Util=r;var u=t(require("./Vector2"));exports.Vector2=u.default;var i=t(require("./Quadratic"));exports.Quadratic=i.default,"undefined"!=typeof window&&(window.MyMath={Util:r,Quadratic:i.default,Vector2:u.default});
},{"./util":"BHXf","./Vector2":"slJc","./Quadratic":"ebvv"}]},{},["QCba"], null)