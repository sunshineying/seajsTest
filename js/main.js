// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖

  var $ = require('jquery');
  // 异步加载
  // require.async('bs');
  require('bs');

  // 通过 exports 对外提供接口
   function doH1 (){
    $('h1 a').text('lishaoy.net');
  }


  // 或者通过 module.exports 提供整个接口
   module.exports = doH1();

});
