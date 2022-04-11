
import React from "react";
import SVG_Go from "../../../assets/languages/go-original.svg";
import SVG_Js from "../../../assets/languages/javascript-original.svg";
import SVG_Java from "../../../assets/languages/java-original.svg";
import SVG_Clojure from "../../../assets/languages/clojure-original.svg";
import SVG_Cpp from "../../../assets/languages/cplusplus-original.svg";
import SVG_Csharp from "../../../assets/languages/csharp-original.svg";
import SVG_Kotlin from "../../../assets/languages/kotlin-original2.svg";
import SVG_Nodejs from "../../../assets/languages/nodejs-original.svg";
import SVG_Php from "../../../assets/languages/php-original.svg";
import SVG_Python from "../../../assets/languages/python-original.svg";
import SVG_Ruby from "../../../assets/languages/ruby-original.svg";
import SVG_Scala from "../../../assets/languages/scala-original.svg";
import SVG_Swift from "../../../assets/languages/swift-original.svg";
import SVG_Ts from "../../../assets/languages/typescript-original.svg";
import SVG_Docker from "../../../assets/languages/docker-original.svg";
import { PropsWithoutRef } from "react";

export const iconMap = new Map<string,any>([
    // ["golang", SVG_Go],
    ["js", SVG_Js],
    ["ts", SVG_Ts],
    ["nodejs", SVG_Nodejs],
    ["java", SVG_Java],
    // ["ruby", SVG_Ruby],
    ["dotnet", SVG_Cpp],
    ["docker", SVG_Docker],
    // ["kotlin", SVG_Kotlin],
    ["scala", SVG_Scala],
    ["clojure", SVG_Clojure],
    ["python", SVG_Python],
    ["swift", SVG_Swift],
    ["php", SVG_Php],
    ["cplusplus", SVG_Cpp],
    ["csharp", SVG_Csharp],
]);


export const IconGenerator = (props:PropsWithoutRef<{ language: string; }>) =>{
  console.log(props.language)
  const Icon = iconMap.get(props.language)
  if (Icon){
    return <Icon height={24} width={24}/>
  }
  else 

  return <SVG_Js height={24} width={24}/>
}

