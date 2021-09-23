const service = require('../src/service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});
