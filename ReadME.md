##Steps.

1. npm init -y 
to create the default package details.

2. npm i react react-dom next --save

3. update package.json with the scripts to run

    "dev": "next",
    "build": "next build",
    "start": "next start"

4. next expects the scripts to be in the pages directory, so create one and use it as the index.

5. use the script to run a component. Next will automatically append it to the React DOM.

6. Create the required class component and export it. Run npm run dev to see the result.

7. To add css and to map it through a seperate css file we can use plugin @zeit/next-css.

8. After installing the plugin add it in next.config.js file.
        const withCSS = require("@zeit/next-css");
        module.exports = withCSS();