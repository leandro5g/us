import React from "react";
import { RFValue } from "../../../../../../global/libs/responsive-size";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { SubTitleDefault } from "../../../../../../global/components/texts/sub-title-default/sub-title-default.component";
import { Avatar } from "../../../../../../global/components/avatar/avatar.component";
import { TextDefault } from "../../../../../../global/components/texts/text-default/text-default.component";

import { Container, ContentText } from "./card-notification.styles";
import { returnDistanceDate } from "../../../../../../global/utils/return-distance-date";

type CardNotificationProps = {
  data: Notification.NotificationModel;
};

const CardNotification: React.FC<CardNotificationProps> = ({ data }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Avatar
        name_user={data?.author?.name}
        uri_avatar={data?.author?.avatar}
        is_anonymos={false}
      />

      <ContentText>
        <SubTitleDefault type="SPAM">
          {data?.author?.name}{" "}
          <TextDefault numberOfLines={2} type="h3">
            {data?.content}
          </TextDefault>
        </SubTitleDefault>

        <SubTitleDefault>
          {returnDistanceDate(new Date(data?.created_at))}
        </SubTitleDefault>
      </ContentText>
      <Feather
        name="chevron-right"
        size={RFValue(20)}
        color={COLORS.CAPTION_400}
      />
    </Container>
  );
};

export { CardNotification };
