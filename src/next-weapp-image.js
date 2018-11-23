(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxpromisify = nx.wxPromisify || require('next-wx-promisify');


  var NxWeappImage = nx.declare('nx.WeappImage', {
    statics: {
      choose: function (inOptions) {
        return new Promise(function (resolve, reject) {
          global.wx.chooseImage(
            nx.mix(
              {
                count: 9,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera']
              },
              nxWxpromisify(resolve, reject),
              inOptions
            )
          );
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappImage;
  }

}());
