function CustomScriptLocationPlugin(options) {
  this.options = options
}

CustomScriptLocationPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-alter-asset-tags', (htmlPluginData, callback) => {
      let headTags = htmlPluginData.head.slice()
      let bodyTags = htmlPluginData.body.slice()
      if (this.options.head && this.options.head instanceof RegExp) {
        const newHeadTags = bodyTags.filter(tag => this.options.head.test(tag.attributes.src))
        newHeadTags.forEach(tag => {
          const oldIndex = bodyTags.indexOf(tag)
          bodyTags.splice(oldIndex, 1)
          headTags.push(tag)
        })
      }
      const result = Object.assign({}, htmlPluginData, {
        head: headTags,
        body: bodyTags
      })
      callback(null, result)
    })
  })
}

module.exports = CustomScriptLocationPlugin