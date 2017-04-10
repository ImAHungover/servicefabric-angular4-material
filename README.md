# servicefabric-angular4-material
ASP.Net Core stateless service with Angular 4 + Material desing

## Prerequisites

Make sure you have .NET Core 1.1.1, Service Fabric Tools latest, Node.js 6+ and Angular CLI 1.0 installed.

<a href="https://www.microsoft.com/net/core#windowsvs2017">Visual Studio 2017 with Update1</a>

<a href="https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-get-started">Service Fabric Tools</a>

<a href="https://nodejs.org/en">Nodejs</a>

Add nodejs path to the  <b>External Web Tools</b> in Visual Studio

Tools -> Options -> External Web Tools

(Angular CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.)

Install Angular CLI
```npm
npm install -g @angular/cli
```
## Create ASP.NET Core Service Fabric application

Install the “Microsoft.AspNetCore.StaticFiles” NuGet package

Add to Startup.cs


```csharp
 
//add redirect to 404 on error
      app.Use(async (context, next) =>
      {
        await next();

        if (context.Response.StatusCode == 404 &&
            !Path.HasExtension(context.Request.Path.Value) &&
            !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();
```
Expand the Project Properties and open the launchSettings.json and replace the launchUrl to empty string

Set the solution platform to x64 in the solution configuration

## Create angular app

Go to the command line and navigate to the directory of your solution file. Then run
```npm
    ng new <app name>
```
(```<app name>``` equals with .NET Core source folder name)

Then change the “outDir” attribute in angular-cli.json from “dist” to “wwwroot”

Install angular material:
```npm
  npm install @angular/material --save
```
Install hammerjs:
```npm
  npm install hammerjs --save
```
Install angular animations:
```npm
  npm install @angular/animations@latest --save
```


Add hammerjs in src\polyfills.ts:
```ts
  import 'hammerjs/hammer';
```

Add material icons to index.html
```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
```
Create your custom theme in src\assets and include it in angular-cli.json

Import MaterialModul and BrowserAnimationsModule in src/app/app.module.ts
```ts
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { FormsModule } from '@angular/forms';
   import { HttpModule } from '@angular/http';
   import { MaterialModule } from '@angular/material';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

....

imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		BrowserAnimationsModule
	],
```


## Add HTML and add CSS

Add your components and css  in app.component.html & app.component.css

 
## + Optional

Turn off TypeScriptCompiler in csproj:
```xml
<TypeScriptCompilerBlocked>true</TypeScriptCompilerBlocked>
```

To using 1 build pipeline add postcompileScript to csproj:
```xml
  <Target Name="PostcompileScript" AfterTargets="Build">
    <Exec Command="ng build — aot" />
  </Target>
``` 
  
