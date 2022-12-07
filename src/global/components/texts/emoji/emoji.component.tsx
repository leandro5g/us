import React from "react";

import { EmojiText } from "./emoji.styles";

interface EmojiProps {
  children?: React.ReactNode;
}

const Emoji: React.FC<EmojiProps> = ({ children }) => {
  return <EmojiText>{children}</EmojiText>;
};

export { Emoji };
