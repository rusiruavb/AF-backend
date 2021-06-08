import Vehicle from '../model/vehicle.model';
import Category from '../model/category.model';

export async function createVehicle(req, res) {
  if (req.body) {
    const vehicle = new Vehicle(req.body);
    await vehicle.save()
    .then(data => {
      if (data.categories.length > 0) {
        data.categories.map(async (category) => {
          await Category.findByIdAndUpdate(category, { $push: { vehicles: data._id }}, { new: true, useFindAndModify: false })
        })
      }
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
  }
}

export async function getAllVehicles(req, res) {
  await Vehicle.find({}).populate('categories', '_id name')
  .then(data => {
    res.status(200).send(data);
  })
  .catch(error => {
    res.status(500).send(error.message);
  });
}