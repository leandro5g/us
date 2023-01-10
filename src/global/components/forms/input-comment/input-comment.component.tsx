import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Input } from "./input-comment.styles";

interface InputCommentProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputComment: React.FC<InputCommentProps> = ({
  control,
  name,
  ...rest
}) => {
  const { COLORS } = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <Input
          {...field}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={COLORS.CAPTION_500}
          multiline
          placeholder="Adicionar um comentário"
          {...rest}
        />
      )}
    />
  );
};

export { InputComment };
