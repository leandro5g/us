import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          multiline
          placeholder="Adicionar um comentário"
          {...rest}
        />
      )}
    />
  );
};

export { InputComment };
