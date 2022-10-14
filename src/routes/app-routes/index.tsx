import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab-routes';
import { CreatePost } from '../../pages/create-post/create-post.screen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen
        options={{
          animation: 'slide_from_bottom'
        }}
        name="CreatePost"
        component={CreatePost}
      />
    </Navigator>
  );
};

export { AppRoutes };
