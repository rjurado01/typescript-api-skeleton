import {asClass, asValue} from 'awilix'

import {StatusGetController} from '../controllers/StatusGetController'

export const dependencies = {
  statusMsg: asValue('ok'),
  statusGetController: asClass(StatusGetController)
}
