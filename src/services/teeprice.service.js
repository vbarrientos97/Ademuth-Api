const { models } = require("../libs/sequelize");

class TeepriceService {
  constructor() {}

  async find() {
    const res = await models.Teeprice.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Teeprice.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Teeprice.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }
}

module.exports = TeepriceService;
