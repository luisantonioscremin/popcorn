montageDefine("1b4a25c","data/model/object-descriptor",{dependencies:["core/core","data/model/property-descriptor"],factory:function(r,t,e){var o=r("core/core").Montage,p=r("data/model/property-descriptor").PropertyDescriptor;t.ObjectDescriptor=o.specialize({typeName:{value:void 0},objectPrototype:{value:o.prototype},propertyDescriptors:{get:function(){return this._propertyDescriptors||(this._propertyDescriptors={}),this._propertyDescriptors}},setPropertyDescriptor:{value:function(r,t){this.propertyDescriptors[r]=t}},deletePropertyDescriptor:{value:function(r){delete this.propertyDescriptors[r]}},makePropertyDescriptor:{value:function(){return new p}},_setPropertyDescriptorsFromTypes:{value:function(r){var t,e,o,p=Object.keys(r);for(t=0;o=p[t];++t)e=this.makePropertyDescriptor(),this.setPropertyDescriptor(o,e)}},_setPropertyDescriptorsFromPrototype:{value:function(r){for(var t,e,p,s;r!==o.prototype&&null!==r;r=Object.getPrototypeOf(r))for(t=Object.getOwnPropertyNames(r),p=0,s=t.length;p<s;p+=1)this.propertyDescriptors[t[p]]||(e=this.makePropertyDescriptor(),this.setPropertyDescriptor(t[p],e))}}},{getterFor:{value:function(r,t,e){var o=this;return function(){return this.hasOwnProperty("_TYPE")||(this._TYPE=new o,this._TYPE.typeName=t,this._TYPE.objectPrototype=r[t].prototype,e?this._TYPE._setPropertyDescriptorsFromTypes(e):this._TYPE._setPropertyDescriptorsFromPrototype(this._TYPE.objectPrototype)),this._TYPE}}}})}});