# Changes made to the original repository

Changes to the following two files are required to use vuetify in existing coovi code.

`packages/vuetify/src/styles/elements/_global.sass`
`packages/vuetify/src/styles/generic/_reset.scss`

These files containing global styles that are collidating with coovi global styles. Because Vuetify does not allow users to disable global styles is why this fork was created.

## `vuetify-styles` class
To enable global styles for specific parts of the ui that are using vuetify we are adding the class `vuetify-styles`. Global styles get applied to all child elements of an element with this class.

Because the html element has no parent it's possible to add the class directly to the html tag.

## Changes
Add the class to all global styles based on the `html` tag so that it's only applied if the html tag has the `vuetify-styles` class. For example `html.vuetify-styles { ... }`

Wrap all other styles that are not the html tag within `.vuetify-styles { ... }` so that they need the class as a parent.

## Use this fork as the orignal
Just add the `vuetify-styles` class to the html element. Like this the global styles will be added normaly.