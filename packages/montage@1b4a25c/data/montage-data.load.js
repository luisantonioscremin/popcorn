montageDefine("1b4a25c","data/montage-data",{dependencies:["core/serialization/deserializer/montage-deserializer"],factory:function(e,i,a){var r=e("core/serialization/deserializer/montage-deserializer").MontageDeserializer;a.exports=function(e,i){var a;return e.async(i).then(function(i){return a=(new r).init(JSON.stringify(i),e),a.deserializeObject()})}}});