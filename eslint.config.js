import globals from "globals";  
import pluginJs from "@eslint/js";  
import pluginNext from "eslint-config-next";  

export default [  
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },  
  { languageOptions: { globals: globals.browser } },  
  pluginJs.configs.recommended,  
  pluginNext,  
];  
