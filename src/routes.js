import { createCategory, getAllCategories, getVehiclesForCategory } from './controller/category.controller';
import { createVehicle, getAllVehicles } from './controller/vehicle.controller';

export default function (app) {
  app.post('/category/create', createCategory);
  app.get('/category/', getAllCategories);
  app.get('/category/:id', getVehiclesForCategory);
  app.post('/vehicle/create', createVehicle);
  app.get('/vehicle/', getAllVehicles)
}