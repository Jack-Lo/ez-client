import base from './base.js'

const {
  entry, moduleName, sourceMap,
  plugins, targetMap
} = base

const env = process.env
const { build, format } = env
var targets = []

if (format) {
  let fms = format.split('-')

  targets = fms.map((fm, index) => {
    return {
      dest: targetMap[fm],
      format: fm
    }
  })
}

const config = [
  {
    entry,
    moduleName,
    sourceMap,
    plugins,
    targets
  }
]

export default config