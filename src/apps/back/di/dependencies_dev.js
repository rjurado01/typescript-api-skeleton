import {asValue, asClass} from 'awilix'

import {StatusGetController} from '../controllers/StatusGetController.js'

export const dependencies = {
  statusMsg: asValue('ok'),
  statusGetController: asClass(StatusGetController)
}
