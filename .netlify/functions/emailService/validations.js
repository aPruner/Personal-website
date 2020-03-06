// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
exports.validateEmail = (ctx, str) => {
  if (typeof str !== 'string' && !(str instanceof String)) {
    throw TypeError(`${ctx} must be a string`)
  }

  exports.validateLength(ctx, str, 5, 30)

  if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(str)) {
    throw TypeError(`${ctx} is not an email address`)
  }
}

exports.validateLength = (ctx, str, ...args) => {
  let min, max

  if (args.length === 1) {
    min = 0
    max = args[0]
  } else {
    min = args[0]
    max = args[1]
  }

  if (typeof str !== 'string' && !(str instanceof String)) {
    throw TypeError(`${ctx} must be a string`)
  }

  if (str.length < min) {
    throw TypeError(`${ctx} must be at least ${min} chars long`)
  }

  if (str.length > max) {
    throw TypeError(`${ctx} must contain ${max} chars at most`)
  }
}
