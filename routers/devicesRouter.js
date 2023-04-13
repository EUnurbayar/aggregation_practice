import { Router } from 'express'; 
import {getAllDevices, addNewDevice, getDeviceById, updateDeviceById, deleteDeviceById, numProducts} from '../controllers/devicesController.js'

const devicesRouter = Router();

devicesRouter.get('/', getAllDevices);
devicesRouter.get('/num_products', numProducts);
// devicesRouter.get('/', sumPrice);

devicesRouter.post('/', addNewDevice);
devicesRouter.get('/:dev_id', getDeviceById);
devicesRouter.put('/:dev_id', updateDeviceById);
devicesRouter.delete('/:dev_id', deleteDeviceById);





export default devicesRouter;
