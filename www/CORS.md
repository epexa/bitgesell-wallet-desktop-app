# CORS

If you have launched the web version, then most likely your browser will block requests to the API. You will see an error:

![cors-example](https://user-images.githubusercontent.com/2198826/100053419-fb1f5100-2e5a-11eb-81f2-90aadbd0cf6e.png)

Also you can see error in console (DevTools):
`Access to fetch at 'https://bitgesellexplorer.com/...' from origin 'https://epexa.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

It is called CORS. You can check it out here: https://webbrowsertools.com/test-cors

**To solve this need run new browser window without CORS:**
- On Linux:
`chromium --disable-web-security --user-data-dir=temp_dir`
or if you use Google Chrome:
`google-chrome --disable-web-security --user-data-dir=temp_dir`

- On macOS:
`open /Applications/Google\ Chrome.app --args --user-data-dir="~/temp_dir" --disable-web-security`

- On Windows:
`"%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=%HOMEPATH%\temp_dir`

**Or you can try solve this through browser extension:**
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino

![cors-disabled](https://user-images.githubusercontent.com/2198826/100052370-bb576a00-2e58-11eb-97a7-c4a59b0bbf47.png)
