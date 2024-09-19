import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const signUp = async (req, res, next) => {
  const correctCondition = Joi.object({
    firstName: Joi.string().required().messages({
      'any.required': 'This is required',
      'string.empty': 'Họ tên không được trống',
      'string.base': 'Họ tên không được nhập số'
    }),
    lastName: Joi.string().required().messages({
      'any.required': 'This is required',
      'string.empty': 'Tên không được trống',
      'string.base': 'Tên không được nhập số'
    }),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .messages({
        'any.required': 'This is required',
        'string.empty': 'Email không được trống',
        'string.base': 'Email không được nhập số',
        'string.email': 'Email phải có định dạng : Example@gmail.com',
        'string.trim': 'Email không được chứa khoảng trắng'
      })
      .trim(),
    password: Joi.string()
      .required()
      .min(6)
      .pattern(new RegExp('(?=.*[A-Z])')) // Ít nhất một ký tự hoa
      .pattern(new RegExp('(?=.*[0-9])')) // Ít nhất một chữ số
      .pattern(new RegExp('(?=.*[!@#$%^&*])')) // Ít nhất một ký tự đặc biệt
      .messages({
        'any.required': 'This is required',
        'string.empty': 'Mật khẩu không được trống',
        'string.min': 'Mật khẩu phải có ít nhất 6 ký tự',
        'string.trim': 'Mật khẩu không được chứa khoảng trắng',
        'string.pattern.base': 'Mật khẩu phải chứa ít nhất một ký tự hoa, một số và một ký tự đặc biệt'
      })
      .trim()
      .strict()
  }).unknown()

  try {
    await correctCondition.validateAsync(req.body)
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, error.message))
  }
}

export const authValidation = { signUp }
