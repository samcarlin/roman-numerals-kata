const singleDigits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

function convert(arabic) {
  if (arabic == 10) {
    return 'X'
  }

  const index = arabic - 1
  return singleDigits[index]
}

module.exports = { convert }