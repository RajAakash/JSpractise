const toLetter = {
  0: ['', ''],
  1: ['One', 'Ten'],
  2: ['Two', 'Twenty'],
  3: ['Three', 'Thirty'],
  4: ['Four', 'Forty'],
  5: ['Five', 'Fifty'],
  6: ['Six', 'Sixty'],
  7: ['Seven', 'Seventy'],
  8: ['Eight', 'Eighty'],
  9: ['Nine', 'Ninety'],
}
const tens = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
]
const units = ['', 'Thousand', 'Million', 'Billion', 'Trillion']
function convert(n) {
  let s = n.toString()
  let k = 0
  let w = ''
  for (let i = s.length - 1; i >= 0; i--) {
    switch ((s.length - i - 1) % 3) {
      case 0:
        w = toLetter[s[i]][0] + ' ' + units[k] + ' ' + w
        k++
        break
      case 1:
        if (s[i] == 1) {
          const l = s[i + 1]
          const corres = toLetter[s[i + 1]][0]
          w = w.substr(corres.length + 1)

          w = tens[l] + ' ' + w
        } else {
          w = toLetter[s[i]][1] + ' ' + w
        }
        break
      case 2:
        w = toLetter[s[i]][0] + ' hundred ' + w
        break
      default:
        w = w
    }
  }
  return w
}

console.log(convert(12345678900))
