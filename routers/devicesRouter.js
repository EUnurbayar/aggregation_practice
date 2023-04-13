import { Router } from 'express'; 
import {getAllDevices, addNewDevice, getDeviceById, updateDeviceById, deleteDeviceById} from '../controllers/devicesController.js'

const devicesRouter = Router();

devicesRouter.get('/', getAllDevices);
devicesRouter.post('/', addNewDevice);
devicesRouter.get('/', getDeviceById);
devicesRouter.put('/', updateDeviceById);
devicesRouter.delete('/', deleteDeviceById);




export default devicesRouter;
