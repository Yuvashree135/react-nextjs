## Steps.

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

9. We can create a js and css file and import them in the needed file. Css imports becomes easier with the withCSS plugin that was added.

10. when we run this basic app, there is a synchronization problem between the server and client so we see an error that the text content did not match.

11. this is solved with the static method: 'getInitialProps'.

12. The next js finds the pages directory and runs the js file on the server side. then once the client has got the java script, it executes the react components. Because of this the constructor gets called once in server and once in client, both are at different time so that data are different.

13. Client regenerates the javascript to wire all the events. So if there is a mismatch in the java script. then we get the mismatch html error.

14. We use the react properties generated in the server side and pass it to client side. this matches the javascript on both the sides.

15. Files in Pages directory runs both on server and client. So it expects a method getInitialProps - establish the needed data as props. (eg: time).

16. Once constructor is initiated on the server side, 'next' sets the value to the props and renders it.

17. On the client side next serializes and passes the html.
when the component runs the page, it deserializes the properties and passes it to the constructor.

18. The getInitialProps method gets initiated only on the server side java script rendering and called on the client side. When the page is opened from the client the method is not called.

19. The above props is for static sync data. For async data we can use promises. When we use promise the page waits for the promise to complete and then loads.
In our example there is a timeout of 3s so the page renders after 3s.

20. Axios is a package used for making REST API calls easily.

21. json-server is a development app used to get data.
Add a script in package.json to run json-server.
    "json-server": "json-server --watch db.son --port 4000 --delay 200"
this launches the file db.json which has a mock json response.
Run the script - npm run json-server.

22. Include axios on index.js to get the json response. The data is available on response.data which can be passed to the props and displayed in the html.

23. We can us the map functions to parse through the array. A key attribute should be used across the map values, as it is good to mark them with a unique key.

24. Routing - It again starts in the page directory. Create another react class with a different name. The name of the file becomes the route of that component.

25. Add routing from the jsx. we use link component provided by next for routing. 'next/link'.
It can be used like - 
    <Link href="/fileName">
        Route
    </Link>