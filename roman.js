function convert(arabic) {
  if (arabic == 1) {
    return 'I'
  } 
  if (arabic == 2) {
    return 'II'
  }
  if (arabic == 3){
    return 'III'
  }

  if (arabic === 4) {
    return 'IV'
  }
  
  if (arabic == 5) {
    return 'V'
  }
  
  if (arabic == 6) {
    return 'VI'
  }

  if (arabic == 7) {
    return 'VII'
  }

  if (arabic == 8) {
    return 'VIII'
  }
if (arabic == 9) {
  return 'IX'
}
return 'X'

}

module.exports = { convert }