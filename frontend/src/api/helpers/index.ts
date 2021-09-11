export const buildKeys = (obj: { [key: string]: any }): string => {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const build: Array<string> = []
  keys.forEach((key, index) => {
    build.push(key + '=' + String(values[index]).replace(/\s+/g, '%20'))
  })
  if (build.length) return '?' + build.join('&')
  else return ''
}