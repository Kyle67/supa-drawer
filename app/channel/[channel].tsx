import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import DrawingBoard from '~/components/DrawingBoard';

const Page = () => {
  const { channel } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: `Channel ${channel}` }} />
      <DrawingBoard />
    </View>
  );
};

export default Page;
