montageDefine("1b4a25c","core/serialization/deserializer/values-deserializer",{dependencies:["../../core","../../deprecate"],factory:function(e,t,i){var r=e("../../core").Montage,o=e("../../deprecate"),s=r.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},initWithObjectAndObjectDescriptorAndContext:{value:function(e,t,i){return this._object=e,this._objectDescriptor=t,this._context=i,this}},get:{value:function(e){return this._objectDescriptor.values?this._objectDescriptor.values[e]:this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},deserializeProperties:{value:o.deprecateMethod(void 0,function(e){return this.deserializeValues(e)},"deserializeProperties","deserializeValues")},deserializeValues:{value:function(e){var t,i=this._object,o=this._objectDescriptor.values||this._objectDescriptor.properties;if(o){e||(e=r.getSerializablePropertyNames(i));for(var s=0,c=e.length;s<c;s++)t=e[s],i[t]=o[t]}}},getObjectByLabel:{value:function(e){this._context.getObject(e)}}});t.ValuesDeserializer=s}});