import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreatePost } from "../../pages/create-post/create-post.screen";
import { CreatePostContextProvider } from "../../contexts/app-contexts/create-post.context";

const { Navigator, Screen } = createNativeStackNavigator();

const CreatePostRoutes: React.FC = () => {
  return (
    <CreatePostContextProvider>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen
          options={{
            animation: "slide_from_bottom"
          }}
          name="CreatePost"
          component={CreatePost}
        />
      </Navigator>
    </CreatePostContextProvider>
  );
};

export { CreatePostRoutes };
