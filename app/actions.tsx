import * as FileSystem from "expo-file-system"
import { useColorScheme } from '@/hooks/useColorScheme';


export function checkFileExistsSync(filePath: string) {
    let fileExists = false;
  const checkFile = async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      fileExists = fileInfo.exists;
    } catch (error) {
      console.error("Error checking file existence:", error);
    }
  };
  
  checkFile().then(() => {
    console.log(`File exists: ${fileExists}`);
    console.log(filePath)
  });
  
  return fileExists;
  }

  function createConfig(name: string) {

      const createFile = async () => {
          try {
    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + "config.json", `{\n dark: ${useColorScheme() === 'dark'},\n username: "${name}"\n}\n`, { encoding: FileSystem.EncodingType.UTF8 });
  } catch (error) {
    console.error("Error creating file:", error);
  }
}
}