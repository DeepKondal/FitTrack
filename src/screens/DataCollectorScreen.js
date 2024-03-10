import React from 'react';
import { View, Text } from 'react-native';
import DataCollection from '../services/DataCollectionService';

const CollectedData = () => {
  const accelerometerData = DataCollection();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accelerometer Data:</Text>
      {accelerometerData && (
        <View>
          <Text>X: {accelerometerData.x}</Text>
          <Text>Y: {accelerometerData.y}</Text>
          <Text>Z: {accelerometerData.z}</Text>
          <Text>Timestamp: {accelerometerData.timestamp}</Text>
        </View>
      )}
    </View>
  );
};

export default CollectedData;
