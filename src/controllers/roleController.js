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

const getAllRoles = async (req, res, next) => {
  try {
    const role = await roleService.getAllRoles()
    return res.status(StatusCodes.OK).json(role)
  } catch (error) {
    next(error)
  }
}

const deleteRole = async (req, res, next) => {
  try {
    const role = await roleService.deleteRole(req.query.id)
    return res.status(StatusCodes.OK).json(role)
  } catch (error) {
    next(error)
  }
}
const updateRole = async (req, res, next) => {
  try {
    const role = await roleService.updateRole(req.body)
    return res.status(StatusCodes.OK).json(role)
  } catch (error) {
    next(error)
  }
}

export const roleController = { createRoles, getAllRoles, deleteRole, updateRole }
