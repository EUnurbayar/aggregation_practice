import deviceModel from "../models/dviceModel.js";

export async function getAllDevices(req, res, next) {
  try {
    const result = await deviceModel.aggregate([
      {
        $group: {
          _id: { maker: "$manufacturer" },
          categories: { $addToSet: "$category" },
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
  } catch (e) {
    next(e);
  }
}

export async function updateDeviceById(req, res, next) {
  try {
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

// devicesRouter.get('/', getAllDevices);
// devicesRouter.post('/', addNewDevice);
// devicesRouter.get('/', getDeviceById);
// devicesRouter.put('/', updateDeviceById);
// devicesRouter.delete('/', deleteDeviceById);
