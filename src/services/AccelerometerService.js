import { Accelerometer } from 'expo-sensors';

export const startAccelerometer = (callback) => {
  const subscription = Accelerometer.addListener((data) => {
    setTimeout(() => {
      callback(data);
    }, 500); // Add a delay of 500 milliseconds
  });

  return subscription;
};

export const stopAccelerometer = (subscription) => {
  subscription && subscription.remove();
};

