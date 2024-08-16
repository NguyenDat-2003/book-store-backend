import db from '~/models'

const createNew = async (roles) => {
  try {
    const allCurrentRoles = await db.Role.findAll({
      attributes: ['url', 'description']
    })

    // ----- TOPIC: How to get the difference between two arrays of objects in JavaScript
    const results = roles.filter(({ url: url1 }) => !allCurrentRoles.some(({ url: url2 }) => url1 === url2))
    if (results.length == 0) {
      return { message: 'Roles already exist' }
    }
    await db.Role.bulkCreate(results)
    return { message: `${results.length} roles successfully created` }
  } catch (error) {
    throw error
  }
}

export const roleService = { createNew }
