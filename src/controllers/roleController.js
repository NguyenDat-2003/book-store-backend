import StatusCodes from 'http-status-codes'
import { roleService } from '~/services/roleService'

const createRoles = async (req, res, next) => {
  try {
    const role = await roleService.createNew(req.body)
    return res.status(StatusCodes.CREATED).json(role)
  } catch (error) {
    next(error)
  }
}

export const roleController = { createRoles }
