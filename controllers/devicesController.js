import deviceModel from "../models/dviceModel.js";

export async function numProducts(req, res, next) {
  try {
    const result = await deviceModel.aggregate([
      {$group: {
        _id:'$manufacturer', num_products:{$sum:1}
      }}
    ]);
    res.json(result)
  } catch (e) {
    next(e);
  }
}

export async function getAllDevices(req, res, next) {
  try {
    const result = await deviceModel.aggregate([
      {
        $group: {
          _id: { maker: "$manufacturer" },
          categories: { $push: "$category" },
        },
      },
    ]);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function addNewDevice(req, res, next) {
  try {
    const result = await deviceModel.create(req.body);
    console.log(result);
    res.json(result);
  } catch (e) {
    console.log(error);
    next(e);
  }
}

export async function getDeviceById(req, res, next) {
  try {
    const { dev_id } = req.params;
    const result = await deviceModel.findOne({ _id: dev_id });
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function updateDeviceById(req, res, next) {
  try {
    const { div_id } = req.params;
    const new_name = req.body.name;

    const result = await deviceModel.updateOne(
      { div_id },
      { $set: { name: new_name } }
    );
    console.log(div_id);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function deleteDeviceById(req, res, next) {
  try {
  } catch (e) {
    next(e);
  }
}

// devicesRouter.get('/', numProducts);
// devicesRouter.get('/', sumPrice);

// devicesRouter.get('/', getAllDevices);
// devicesRouter.post('/', addNewDevice);
// devicesRouter.get('/', getDeviceById);
// devicesRouter.put('/', updateDeviceById);
// devicesRouter.delete('/', deleteDeviceById);
