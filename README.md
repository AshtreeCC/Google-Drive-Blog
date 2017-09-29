# Google-Drive-Blog
Experiment to use Google Docs as a RTE and Google Sheets to publish data to Firebase. See my [Ashtree Blog](https://www.ashtree.co.za/blog)

This repo exists mostly to document the process of creating this solution.

## Setup

### Firebase
I used the [Google Apps Script library](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase). It needed to be added in *Script Editor -> Resources -> Libraries...* The library code is **MYeP8ZEEt1ylVDxS7uyg9plDOcoke7-2l**

After that, add some script variables in *Script Editor -> File -> Project Properties -> Script Properties*.
```
project_id: [YOUR-PROJECT-NAME]
project_url: https://[YOUR-PROJECT-NAME].firebaseio.com
project_secret: [YOURSECRETCODE]
```

To obtain your `project_secrect` value, visit your Firebase project website and from *Overview (Cog) -> Project Settings -> Service Accounts -> Database Secrets* copy your secret token. The Google Apps Script library still uses this method for authentication, even though it has been deprecated. We can update our method when they update their library.

### Google Sheets

### Google Scripts
See the uploaded scripts

## Usage

### Angular

## Issues
