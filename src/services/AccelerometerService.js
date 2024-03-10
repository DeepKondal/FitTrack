import { Accelerometer } from 'expo-sensors';

export const startAccelerometer = (callback) => {
  const options = {
    intervalMs: 1000, 
  };
  const subscription = Accelerometer.addListener((data) => {
    callback(data);
  }, options);

  return subscription;
};

export const stopAccelerometer = (subscription) => {
  subscription && subscription.remove();
};

