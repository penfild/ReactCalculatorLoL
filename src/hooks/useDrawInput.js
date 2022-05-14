const useDrawInput = (e) => {
  const simbol = e.target.textContent.toString()
  const input = document.getElementsByTagName('input');
  input[0].value = input[0].value + simbol
  
  if (input[0].value == '+' || input[0].value == '-' || input[0].value == '/' || input[0].value == '*' || input[0].value == '=') {
    input[0].value = ''
  }
  const checkFontSize = () => {
    if (input[0].value.length >= 11) {
      input[0].style.fontSize = '40px'
      if (input[0].value.length >= 16) {
        input[0].style.fontSize = '30px'
      }
      if (input[0].value.length >= 20) {
        input[0].style.fontSize = '25px'
      }
      if (input[0].value.length >= 25) {
        input[0].style.fontSize = '20px'
      }
      if (input[0].value.length >= 32) {
        input[0].style.fontSize = '16px'
      }
      if (input[0].value.length >= 39) {
        input[0].value = input[0].value.slice(0, -1)
        alert('Больше символов не ввести')
      }
    } else {
      input[0].style.fontSize = '60px'
    }
  }
  if (simbol == 'C') {
    input[0].value = ''
    checkFontSize()
  }
  if (simbol == '=') {
    if ((input[0].value.includes('*')) || (input[0].value.includes('+')) || (input[0].value.includes('-')) || (input[0].value.includes('/'))) {
      if (input[0].value.includes('*')) {
        const numbersMassive = input[0].value.split('*')

        const lol = numbersMassive[1].split('')
        const withoutRavno = lol.pop()
        const lastNumber = lol.join('')

        const result = Number(numbersMassive[0] * lastNumber)
        input[0].value = result
        checkFontSize()
      }
      if (input[0].value.includes('+')) {
        const numbersMassive = input[0].value.split('+')

        const lol = numbersMassive[1].split('')
        const withoutRavno = lol.pop()
        const lastNumber = lol.join('')

        const result = (Number(numbersMassive[0])) + (Number(lastNumber))
        input[0].value = result
        checkFontSize()
      }
      if (input[0].value.includes('/')) {
        const numbersMassive = input[0].value.split('/')

        const lol = numbersMassive[1].split('')
        const withoutRavno = lol.pop()
        const lastNumber = lol.join('')

        const result = (Number(numbersMassive[0])) / (Number(lastNumber))
        input[0].value = result
        checkFontSize()
      }
      if (input[0].value.includes('-')) {
        const numbersMassive = input[0].value.split('-')

        const lol = numbersMassive[1].split('')
        const withoutRavno = lol.pop()
        const lastNumber = lol.join('')

        const result = (Number(numbersMassive[0])) - (Number(lastNumber))
        input[0].value = result
        checkFontSize()
      }
      input[0].style.backgroundColor = 'rgb(236, 236, 236)'
      input[0].style.transition = '0s'
      setInterval(() => {
        input[0].style.backgroundColor = 'rgba(218, 255, 197, 0.589)'
        input[0].style.transition = '0.3s ease-out'
      }, 100)
    } else {
      input[0].style.backgroundColor = 'rgb(236, 236, 236)'
      input[0].style.transition = '0s'
      setInterval(() => {
        input[0].style.backgroundColor = 'rgba(218, 255, 197, 0.589)'
        input[0].style.transition = '0.3s ease-out'
      }, 100)
      input[0].value = input[0].value.slice(0, -1)
    }
  }
  checkFontSize()
}
export default useDrawInput