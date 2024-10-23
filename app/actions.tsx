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

  export function createConfig(name: string) {

      const createFile = async (): Promise<"success" | "error"> => {
          try {
              await FileSystem.writeAsStringAsync(FileSystem.bundleDirectory + "config.json", JSON.stringify({ dark: true, username: name }), { encoding: FileSystem.EncodingType.UTF8 });
              return "success";
          } catch (error) {
              console.error("Error creating file:", error);
              return "error";
          }
      };
      createFile().then((result) => {
          console.log(`File created: ${result}`);
      });
}

  
  export function readConfig(): { dark: boolean, username: string } {
    const configFile = FileSystem.documentDirectory + "config.json";
    let config = { dark: false, username: "" };
    const readFile = async () => {
      try {
        const fileContents = await FileSystem.readAsStringAsync(configFile);
        config = JSON.parse(fileContents) as { dark: boolean, username: string };
      } catch (error) {
        console.error("Error reading file:", error);
      }
    };
    readFile().then(() => {
      console.log(`Config: ${JSON.stringify(config)}`);
    });
    return config;
  }

export function deleteConfig(): Promise<"success" | "error"> {
  const configFile = FileSystem.documentDirectory + "config.json";
  const deleteFile = async (): Promise<"success" | "error"> => {
    try {
      await FileSystem.deleteAsync(configFile);
      console.log("Config file deleted successfully.");
      return "success";
    } catch (error) {
      console.error("Error deleting config file:", error);
      return "error";
    }
  };
  return deleteFile();
}
