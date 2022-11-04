import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

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
};

const CardFeeling: React.FC<CardFeelingProps> = ({ data }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderCardFeeling>
        <TitleCardFeeling>
          {data?.emoji} Estou me sentindo {data?.title}
        </TitleCardFeeling>

        <ButtonVoid>
          <Feather
            name="chevron-right"
            size={RFValue(20)}
            color={COLORS.CAPTION_400}
          />
        </ButtonVoid>
      </HeaderCardFeeling>

      <DescriptionCardFeeling>
        O Google Tradutor é um serviço virtual gratuito da subsidiaria Google da
        Alphabet Inc.
      </DescriptionCardFeeling>
    </Container>
  );
};

export { CardFeeling };
