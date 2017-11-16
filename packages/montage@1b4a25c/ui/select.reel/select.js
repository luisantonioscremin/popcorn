var Bindings=require("core/bindings").Bindings,RangeController=require("core/range-controller").RangeController,Control=require("ui/control").Control,PressComposer=require("composer/press-composer").PressComposer,Select=exports.Select=Control.specialize({_fromInput:{value:null},_synching:{value:null},hasTemplate:{value:!1},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){for(var t=this.content,n=[],s=0,l=e.length;s<l;s++)n.push(t[e[s]][this.valuePropertyPath||"value"]);e.length<=1?this.value=n[0]:this.values=n}},constructor:{value:function(){this["super"](),this._selectedIndexes=[],this._selectedIndexes.addRangeChangeListener(this,"selectedIndexes")}},handleSelectedIndexesRangeChange:{value:function(){this.needsDraw===!1&&(this.needsDraw=this._synching||!this._fromInput)}},_setContentControllerSelectedIndexes:{value:function(e){for(var t,n=this.content,s=this._contentController.selection,l=0,i=n.length;l<i;l++)e.indexOf(l)>=0?s.indexOf(n[l])===-1&&s.push(n[l]):(t=s.indexOf(n[l]),t>=0&&s.splice(t,1))}},_content:{value:null,enumerable:!1},content:{set:function(e){if(this._content=e,!this.contentController){var t=new RangeController;t.content=e,t.selection=[],this.contentController=t}this.needsDraw=!0},get:function(){return this._content}},valuePropertyPath:{value:null},textPropertyPath:{value:null},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){this._contentController!==e&&(this._contentController=e,e.allowsMultipleSelection=this.multiple,Bindings.defineBindings(this,{content:{"<-":"_contentController.organizedContent"},_selection:{"<-":"_contentController.selection"},"_selectedIndexes.rangeContent()":{"<-":"content.enumerate().filter{$_selection.has(.1)}.map{.0}"}}))}},_getSelectedValuesFromIndexes:{value:function(){var e,t,n=this._selectedIndexes,s=this._content,l=n.length;if(l>0){e=[],t=this.valuePropertyPath||"value";for(var i=0;i<l;i++)s[n[i]][t]&&e.push(s[n[i]][t])}return e}},_synchValues:{value:function(){this._synching||(this._synching=!0,this.values=this._getSelectedValuesFromIndexes(),this.value=this.values&&this.values.length>0?this.values[0]:null,this._synching=!1)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=this.content;if(e&&t&&(this._values=e,!this._synching)){for(var n,s=[],l=0,i=this._values.length;l<i;l++)n=this._indexOf(this._values[l]),n>=0&&s.push(n);this._synching=!0,this._setContentControllerSelectedIndexes(s),this._synching=!1}}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._synching||(null===e||void 0===e?this.values=[]:this.values=[e])}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},_addOptionsFromMarkup:{value:function(){var e=this.element,t=e.querySelectorAll("option");if(!this.contentController){var n=new RangeController,s=[],l=[];if(t&&t.length>0){for(var i,o=0,r=t.length;o<r;o++){i=t[o].getAttribute("selected");var u={value:t[o].value,text:t[o].textContent};i&&s.push(u),l.push(u)}0===s.length&&r>0&&s.push(l[0]),this._fromInput=!0,this.contentController=n,n.content=l,n.selection=s}}}},deserializedFromTemplate:{value:function(){this._addOptionsFromMarkup()}},_removeAll:{value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},_refreshOptions:{value:function(){var e,t,n,s,l=this.content||[],i=l.length;for(e=0;e<i;e++)t=document.createElement("option"),"string"==typeof l[e]?n=s=l[e]:(n=l[e][this.textPropertyPath||"text"],s=l[e][this.valuePropertyPath||"value"]),t.value=s,t.textContent=n||s,this._selectedIndexes&&this._selectedIndexes.length>0&&this._selectedIndexes.indexOf(e)>=0&&t.setAttribute("selected","true"),this.element.appendChild(t);0===this._selectedIndexes.length&&this.element.selectedIndex>=0&&(this._selectedIndexes[0]=this.element.selectedIndex)}},enterDocument:{value:function(e){e&&(this.element.addEventListener("focus",this),this.element.addEventListener("change",this))}},prepareForActivationEvents:{value:function(){var e=new PressComposer;this.addComposer(e)}},draw:{enumerable:!1,value:function(){var e=this.element;this._fromInput=!1,this._synching=!1,this._removeAll(e),this._refreshOptions(),this["super"]()}},didDraw:{value:function(){this._synchValues()}},_indexOf:{value:function(e){var t,n,s=this.content||[],l=s.length;for(t=0;t<l;t++)if(n="string"==typeof s[t]?s[t]:s[t][this.valuePropertyPath||"value"],n&&n===e)return t;return-1}},_getSelectedOptions:{value:function(e){var t,n=e.querySelectorAll("option"),s=n.length,l=[];for(t=0;t<s;t++)n[t].selected&&l.push(n[t]);return l}},_getSelectedOptionsIndexes:{value:function(e){var t,n=e.querySelectorAll("option"),s=n.length,l=[];for(t=0;t<s;t++)n[t].selected&&l.push(t);return l}},handleChange:{value:function(e){var t=this._getSelectedOptionsIndexes(this.element);t.length>0&&(this._fromInput=!0,this._synching=!1,this._setContentControllerSelectedIndexes(t),this._synchValues()),this._dispatchActionEvent()}}});Select.addAttributes({autofocus:{dataType:"boolean"},disabled:{dataType:"boolean"},form:null,multiple:{dataType:"boolean"},name:null,required:{dataType:"boolean"},size:{dataType:"number",value:"1"}});