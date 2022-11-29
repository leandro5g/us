import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../global/libs/responsive-size";

import { Feather } from "@expo/vector-icons";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";

import {
  Container,
  HeaderCardFeeling,
  TitleCardFeeling,
  DescriptionCardFeeling
} from "./card-feeling.styles";

type CardFeelingProps = {
  data: Feeling.FeelingModel;
  onPress(feeling: Feeling.FeelingModel): void;
};

const CardFeeling: React.FC<CardFeelingProps> = ({ data, onPress }) => {
  const { COLORS } = useTheme();

  return (
    <Container onPress={() => onPress(data)}>
      <HeaderCardFeeling>
        <TitleCardFeeling>
          {data?.emoji}
          {"   " + data?.title}
        </TitleCardFeeling>

        <ButtonVoid>
          <Feather
            name="chevron-right"
            size={RFValue(20)}
            color={COLORS.CAPTION_400}
          />
        </ButtonVoid>
      </HeaderCardFeeling>

      <DescriptionCardFeeling>{data?.description}</DescriptionCardFeeling>
    </Container>
  );
};

export { CardFeeling };
