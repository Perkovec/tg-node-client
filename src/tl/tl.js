const TLConstructor = require('./tlconstructor');
const TLMethod = require('./tlmethod');
const tl_schema = require('./tl_schema');

class TL {
  constructor() {
    this.constructors = tl_schema.constructors;
    this.constructor_id = {};
    this.constructor_type = {};
    for (i in this.constructors) {
      const constructor = new TLConstructor(this.constructors[i]);
      this.constructor_id[constructor.id] = constructor;
      this.constructor_type[constructor.predicate] = constructor;
    }

    this.methods = tl_schema.methods;
    this.method_id = {};
    this.method_name = {};
    for (i in this.methods) {
      const method = new TLMethod();
      self.method_id[method.id] = method;
      self.method_name[method.predicate] = method;
    }
  }
}

module.exports = TL;