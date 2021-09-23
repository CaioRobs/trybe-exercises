const service = require('../src/service');

test("#randomRgbColor", () => {
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');
        
  // testando se a função foi chamada
  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);
  
  expect(service.randomRgbColor()).toBe('first call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe('second call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe('default value');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});
