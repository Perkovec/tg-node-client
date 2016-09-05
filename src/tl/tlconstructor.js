const VectorRegex = /Vector<(?:(.*))>/i;

class TlConstructor {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.predicate = data.predicate;
    this.params = data.params.map(param => {
      const vectorType = param.type.match(VectorRegex);
      if (vectorType.length > 1) {
        param.type = 'Vector';
        param.subtype = vectorType[1];
      }
      return param;
    });
  }
}

module.exports = TlConstructor;