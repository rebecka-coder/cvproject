# cvproject

## Mappar och filer
För denna webbapplikation skapades följande mappar och filer:

* Package.json och package-lock.json som visar projektets alla dependencies/paket.
* Gulpfile.js där alla paket finns installerade, samt olika tasks (funktioner) för projektet. 
* En gitignore mapp skapades för att slippa undan node-modules vid git-överföring.
* En src mapp, där alla arbetsfiler skapades för webbapplikationen. Med hjälp av de funktioner som är satta i gulpfile.js, kan dessa sedan föras över till min pub-mapp. I src-mappen finns en index.html fil, en babel-fil för ecmascript och en scss-fil för min sass kod (som är uppdelat i tre andra filer, en reset-fil, variabel-fil och en main.scss fil). 
* Pub-mapp med respektive filer, som visar upp webbplatsen.
* Js-mapp, som innehåller en main.js-fil. I denna fil finns all kod som får webbapplikationen att interagera med min webbtjänst. Här finns länkar till mina api:er, samt mina get-funktioner.
* Fem stycken html-filer som representerar mina sidor för webbplatsen.

## Paket och verktyg
Har använt Node.js för uppgiften, som har ett pakethanteringssystem som heter npm. Jag har använt Visual studio Code (editor) för att kunna skapa mina kataloger med filer för mitt projekt. För att kunna automatisera har jag använt mig av Gulp där många paket kan användas. Som t ex med Gulp-concat har jag kunnat sammanslå JS-filer och med Gulp-uglify har jag kunnat minifiera JavaScript. Paket för att kunna använda sass för css, hämtades paketet sass-compiler och gulp-sass. För att slippa uppdatera webbläsaren hela tiden så fort man gör en ändring i utvecklingsfilerna, fanns ett plugin som hette browserSync. Ett annat paket hette babel som hämtades för att kunna konvertera Ecmascript, som är en version av JavaScript som gör det möjligt användas för både nuvarande och äldre webbläsare. För att kunna använda babel, måste en preset sättas och därför skapades en fil för detta som fick heta ".babelrc". Gulp-sourcemaps användes för att kunna se felmeddelanden i specifik källkodsfil.


Länk till webbplats

[cvproject](http://studenter.miun.se/~reho0301/dt173g/cvprojekt/pub/index.html)
