const glob = require('glob')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')

glob(path.join(__dirname, 'dist/**/index.html'), {}, (err, files) => {
  files.forEach(reorderScripts)
})

function reorderScripts(fileName) {
  const file = fs.readFileSync(fileName, 'utf-8')

  const $ = cheerio.load(file)
  const regex = /^\/[\d]{1,2}\.[a-z0-9]{20,20}\.js/

  $('head script').toArray().forEach(script => {
    if (regex.test(script.attribs.src)) {
      const element = $(script)
      console.log('removing', script.attribs.src)
      element.remove()
    } else {
      console.log('nope, not removing')
    }
  })

  const newFile = $.html()

  fs.writeFileSync(fileName.replace('index.html', 'index.html'), newFile, 'utf-8')
}