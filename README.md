# social media cards
 Page for displaying cards with "load more"| functionality.


# Issues

## Unable to use local json file in any way.

This is a relatively new update that all modern browsers have. If we try to fetch or import a local json file, it will not work because the browser will block it.

For this exercises we are not allowed to use any third party software, this means bundlers, frameworks, libraries or even nodejs are not allowed.

In order to really make this solution as asked by the employer, we'd either have to use some third party solution, or `--disable-web-security` which is a definite red flag.

All of this considered, I have decided to copy the contents of `data.json` into `data.js`, assign them to a variable and use the variable for all operations in `main.js`.

Here are some links for reference:
https://stackoverflow.com/questions/4819060/allow-google-chrome-to-use-xmlhttprequest-to-load-a-url-from-a-local-file
https://stackoverflow.com/questions/43695523/searching-a-local-json-file-not-working-in-chrome
https://stackoverflow.com/questions/3595515/origin-null-is-not-allowed-by-access-control-allow-origin-error-for-request-ma/3744697#3744697
https://bugs.chromium.org/p/chromium/issues/detail?id=40787&q=ajax%20local&colspec=ID%20Stars%20Pri%20Area%20Feature%20Type%20Status%20Summary%20Modified%20Owner%20Mstone%20OS
https://bugs.chromium.org/p/chromium/issues/detail?id=47416

It would be my pleassure if you could share the solution if there is a solution I am not seeing.

## 