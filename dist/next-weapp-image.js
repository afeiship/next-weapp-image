(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx;
  var nxWxpromisify = nx.wxPromisify || require('next-wx-promisify');


  var NxWeappImage = nx.declare('nx.weapp.Image', {
    statics: {
      choose: function (inOptions) {
        return new Promise(function (resolve, reject) {
          wx.chooseImage(
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