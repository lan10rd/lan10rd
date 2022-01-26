import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'readme-feature',
    templateUrl: './readme.feature.html',
    styleUrls: ['./readme.feature.scss']
})
export class ReadmeFeature
{

    index = `
<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>DocsAppNg</title>
        <base href="/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <!-- , maximum-scale=1 -->
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
        <link rel="manifest" href="manifest.webmanifest">
        <meta name="theme-color" content="#800080">
        <link rel="apple-touch-icon" href="assets/icons/apple-192x192.png">
    </head>
      <body>
        <app></app>
        <!-- Github Pages hack to allow SPA refresh without receiving 404. -->
        <script>
          (function () {
            // Retrieve the URL the user was trying to access when receiving the 404.
            var redirect = sessionStorage.redirect;
            // Remove the URL from sessionStorage.
            delete sessionStorage.redirect;
            // Check if we actually need to redirect.
            if (redirect && redirect != location.href) {
              // We need to redirect to the URL the user was trying to access.
              history.replaceState(null, null, redirect);
            }
          })();
        </script>
        <!-- /Github Pages hack. -->
        <noscript>Please enable JavaScript to continue using this application.</noscript>
    </body>
    </html>    
`
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    ngOnInit(){
        console.log('index escaped', this.util.document.escapeHTML(this.index))
    }

}