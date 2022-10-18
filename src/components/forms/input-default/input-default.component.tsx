import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Control, Controller } from "react-hook-form";

import { Feather } from "@expo/vector-icons";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";

import {
  Container,
  Input,
  ContainerInput,
  TextError
} from "./input-default.styles";

interface InputDefaultProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  notMargin?: boolean;
  control: Control;
  name: string;
  isLoading?: boolean;
  error?: string;
  pass?: boolean;
}

const InputDefault: React.FC<InputDefaultProps> = ({
  icon,
  notMargin,
  control,
  name,
  isLoading,
  error,
  pass,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isViewInput, setIsViewInput] = useState(pass);

  const { COLORS, FONTSIZES } = useTheme();

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlue = useCallback(() => {
    setIsFocus(false);
  }, []);

  const handleChangeView = useCallback(() => {
    setIsViewInput((oldValue) => !oldValue);
  }, []);

  return (
    <Container notMargin={notMargin}>
      <ContainerInput isError={!!error} isFocus={isFocus}>
        <Feather
          name={icon}
          size={FONTSIZES.MD}
          color={isFocus ? COLORS.PRIMARY : COLORS.CAPTION_500}
        />

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              onFocus={onFocus}
              editable={!isLoading}
              onBlur={onBlue}
              placeholderTextColor={COLORS.CAPTION_500}
              secureTextEntry={isViewInput}
              {...rest}
            />
          )}
        ></Controller>

        {pass && (
          <ButtonVoid onPress={handleChangeView}>
            <Feather
              name={isViewInput ? "eye-off" : "eye"}
              size={FONTSIZES.MD}
              color={COLORS.PRIMARY}
            />
          </ButtonVoid>
        )}
      </ContainerInput>
      {!!error && <TextError>{error}</TextError>}
    </Container>
  );
};

export { InputDefault };
