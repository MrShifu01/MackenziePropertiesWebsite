module.exports = function (api) {
    api.cache.using(() => "development");
    return {
      plugins: ['macros'],
    }
  }
  