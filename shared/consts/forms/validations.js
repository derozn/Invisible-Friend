import * as ERROR_MSG from './errorMessages'

export const EMAIL_REG = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export const PASSWORD_REG = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
export const GAME_NAME_REG = /^[a-zA-Z-0-9]{0,15}$/

export const EMAIL = (value) => (
  value && EMAIL_REG.test(value)
)

export const REQUIRED = (value) => (
  !!value
)

export const PASSWORD = (value) => (
  value && PASSWORD_REG.test(value)
)

export const GAME_NAME = (value) => (
  value && GAME_NAME_REG.test(value)
)

export const FIELD_GAME_NAME_VALIDATION = (value) => (
  !GAME_NAME(value) ? ERROR_MSG.INVALID_GAME_NAME_HELP : undefined
)

export const LOGIN_SYNC_VALIDATION = ({ email, password }) => {
  const errors = {}

  if (!EMAIL(email)) {
    errors.email = ERROR_MSG.EMAIL
  }

  if (!PASSWORD(password)) {
    errors.password = ERROR_MSG.PASSWORD
  }

  return errors
}
