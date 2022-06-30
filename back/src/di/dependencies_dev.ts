import {asClass, asValue} from 'awilix'

import {StatusGetController} from '../controllers/StatusGetController'
import {StatusGetRoute} from '../routes/StatusGetRoute'

export const dependencies = {
  statusMsg: asValue('ok'),
  statusGetRoute: asClass(StatusGetRoute),
  statusGetController: asClass(StatusGetController)
}
