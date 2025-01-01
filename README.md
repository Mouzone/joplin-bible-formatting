# Bible Chapter Formatter for Joplin

A Joplin plugin designed to format Bible chapters copied from Bible Gateway for a cleaner and more readable appearance. This plugin adds a button to the editor's toolbar that performs the following actions with a single click:

    1. Removes footnote anchors (e.g., [a], [b], [c]).
    2. Applies bold styling to the chapter number.
    3. Formats verse numbers with bold and superscript styling.

Perfect for anyone looking to enhance the readability of Bible text in their Joplin notes!

## Installation

1. You can find the plugin in Joplin's official plugin repository or by searching for it directly within the app's plugin section.

2. Alternatively, you can download this repository and specify the directory path in the "Advanced" section of the plugin settings within the app.
## Demo

![](https://github.com/Mouzone/superscript-plugin/blob/main/demo.gif)


## How It Works

The plugin is built using Joplin's plugin framework and leverages the following features:

- **Note Retrieval and Updates**: Retrieves the current note using Joplin's Workspace API and updates its content in real time without requiring the note to be reselected, thanks to the Commands API.
- **Toolbar Integration**: Adds a custom button with an icon to the editor's toolbar using the toolBarButtons API.
- **Content Transformation**: Processes the note's content by applying transformations through .replace() and regular expressions.