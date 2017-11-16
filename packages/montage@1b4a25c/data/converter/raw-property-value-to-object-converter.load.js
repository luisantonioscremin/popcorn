montageDefine("1b4a25c","data/converter/raw-property-value-to-object-converter",{dependencies:["core/converter/converter","core/criteria","data/model/data-query","core/meta/object-descriptor-reference","core/promise","frb/scope","frb/parse"],factory:function(e,r,t){var i=e("core/converter/converter").Converter,o=e("core/criteria").Criteria,n=e("data/model/data-query").DataQuery,s=e("core/meta/object-descriptor-reference").ObjectDescriptorReference,c=e("core/promise").Promise,v=e("frb/scope"),h=e("frb/parse");r.RawPropertyValueToObjectConverter=i.specialize({serializeSelf:{value:function(e){e.setProperty("convertExpression",this.convertExpression),e.setProperty("foreignDescriptor",this._foreignDescriptorReference),e.setProperty("revertExpression",this.revertExpression),e.setProperty("root",this.owner),e.setProperty("serviceIdentifier",this.serviceIdentifier),e.setProperty("service",this.service)}},deserializeSelf:{value:function(e){var r=e.getProperty("convertExpression");r&&(this.convertExpression=r),r=e.getProperty("revertExpression"),r&&(this.revertExpression=r),r=e.getProperty("foreignDescriptor"),r&&(this._foreignDescriptorReference=r),r=e.getProperty("service"),r&&(this.service=r),r=e.getObjectByLabel("root"),r&&(this.owner=r),r=e.getProperty("serviceIdentifier"),r&&(this.serviceIdentifier=r),e.deserializeUnit("bindings")}},initWithConvertExpression:{value:function(e){return this.convertExpression=e,this}},_convertExpression:{value:null},convertExpression:{get:function(){return this._convertExpression},set:function(e){e!==this._convertExpression&&(this._convertExpression=e,this._convertSyntax=void 0)}},_convertSyntax:{value:void 0},convertSyntax:{get:function(){return this._convertSyntax||(this._convertSyntax=h(this.convertExpression))}},_revertExpression:{value:null},revertExpression:{get:function(){return this._revertExpression},set:function(e){e!==this._revertExpression&&(this._revertExpression=e,this._revertSyntax=void 0)}},_revertSyntax:{value:void 0},revertSyntax:{get:function(){return this._revertSyntax||(this._revertSyntax=h(this.revertExpression))}},foreignDescriptor:{serializable:!1,get:function(){return this._foreignDescriptorReference&&this._foreignDescriptorReference.promise(e)},set:function(e){this._foreignDescriptorReference=(new s).initWithValue(e)}},objectDescriptor:{get:function(){return this._objectDescriptor?c.resolve(this._objectDescriptor):this.owner&&this.owner.objectDescriptor?c.resolve(this.owner.objectDescriptor):this.owner&&this.owner instanceof c?this._objectDescriptorReference:void 0},set:function(e){this._objectDescriptor=e}},_objectDescriptorReference:{get:function(){var e=this;return this.owner.then(function(r){var t=r.objectDescriptor;return e.objectDescriptor=t,t})}},_descriptorToFetch:{get:function(){if(!this.__descriptorToFetch){var e=this;this.__descriptorToFetch=this.foreignDescriptor?this.foreignDescriptor.then(function(r){return r||e.objectDescriptor}):c.resolve(this.objectDescriptor)}return this.__descriptorToFetch}},owner:{get:function(){return this._owner?this._owner.then?this._owner:c.resolve(this._owner):void 0},set:function(e){this._owner=e}},__scope:{value:null},scope:{get:function(){return this.__scope||(this.__scope=new v(this))}},service:{get:function(){return this._service?this._service:this.owner?this.owner.then(function(e){return e.service}):void 0},set:function(e){this._service=!e||e.then?e:c.resolve(e)}},serviceIdentifier:{value:void 0},convert:{value:function(e){var r,t=this,i=(new o).initWithSyntax(t.convertSyntax,e);return this._descriptorToFetch.then(function(e){var o=[e.module.id,e.name].join("/");return t.serviceIdentifier&&(i.parameters.serviceIdentifier=t.serviceIdentifier),r=n.withTypeAndCriteria(o,i),t.service?t.service.then(function(e){return e.rootService.fetchData(r)}):null})}},revert:{value:function(e){if(e){if(this._revertSyntax){var r=this.scope;return r.parameters=e,c.resolve(this._revertSyntax(r))}return c.resolve(e)}return c.resolve(void 0)}}})}});