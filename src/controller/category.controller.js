import Category from '../model/category.model';

export async function createCategory(req, res) {
  if (req.body) {
    const category = new Category(req.body);
    await category.save()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
  }
}

export async function getAllCategories(req, res) {
  await Category.find({}).populate('vehicles', '_id name type model code')
  .then(data => {
    res.status(200).send(data);
  })
  .catch(error => {
    res.status(500).send(error.message);
  });
}

export async function getVehiclesForCategory(req, res) {
  if (req.params && req.params.id) {
    await Category.findById(req.params.id).populate('vehicles', '_id name type model code')
    .then(data => {
      res.status(200).send(data.vehicles);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
  }
}