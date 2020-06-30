import is from 'is_js'

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}   

export function validate(value, validation = null, type) {
  console.log(`val: ${value}, validation: ${validation}`)
  if (!validation) {
    return true
  }
  console.log(type)
  let isValid = true

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (validation.required && type === 'email') {
    isValid = is.email(value) && isValid
  }

  if (validation.required && type === 'password') {
    isValid = value.length >= 6 && isValid
  }

  return isValid
}

export function errorMessageGenerator(value, type) {
  if (value.trim() === '' && type === 'text') {
    return 'Произошла ошибка. Поле должно быть заполнено'
  }

  if (value.trim() !== '' && type === 'email') {
    return 'Введите корректный адресс электронной почты'
  }

  if (value.trim() !== '' && type === 'password') {
    return 'Пароль должен быть длинее 6 символов'
  }
}

export function validateForm(formControls) {
  let isFormValid = true
  
  for(let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid
    }
  }

  return isFormValid
}