montageDefine("1b4a25c","core/converter/camel-case-converter",{dependencies:["./converter","lodash.camelcase"],factory:function(e,r,n){var t,c=e("./converter").Converter,o=e("lodash.camelcase"),a=r.CamelCaseConverter=c.specialize({constructor:{value:function(){return this.constructor===a?(t||(t=this),t):this}},convert:{value:o}});Object.defineProperty(r,"singleton",{get:function(){return t||(t=new a),t}})}});