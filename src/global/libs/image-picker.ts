import * as ImagePicker from "expo-image-picker";
import { getMimeType } from "../utils/get-mime-type.utis";

export async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.6,
    base64: true,
    allowsMultipleSelection: false
  });

  if (result.cancelled === false) {
    const mimeType = getMimeType(result.uri);

    return `data:image/${mimeType};base64,${result.uri}`;
  }
}
