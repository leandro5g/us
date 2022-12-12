import React from "react";

import { ContainerBackground } from "../../global/components/utils/container-background/container-background.component";
import { HeaderProfile } from "./components/header-profile/header-profile.component";
import { AvatarUser } from "./components/avatar-user/avatar-user.components";
import { FormProfile } from "./components/form-profile/form-profile.component";
import { Scroll } from "../../global/components/utils/scroll/scroll.component";
import { KeyboardAvoiding } from "../../global/components/utils/keyboard-avoiding/keyboard-avoiding.component";

import { Content } from "./profile.styles";

const Profile: React.FC = () => {
  return (
    <ContainerBackground>
      <KeyboardAvoiding behavior="padding">
        <Scroll>
          <HeaderProfile />

          <Content>
            <AvatarUser />

            <FormProfile />
          </Content>
        </Scroll>
      </KeyboardAvoiding>
    </ContainerBackground>
  );
};

export { Profile };
