// Board Name on New Post
// Version: 1.0.0
// Author: MSG
// This header is to remain intact and unedited.  This plugin cannot be modified and passed off as your own.

function bnonp() {
    var settings = pb.plugin.get('board_name_on_new_post').settings;
    var text = "";
    var txtclr = "";
    var currentBoard = pb.data('page').board.name; // this is what gets the current board's name
    
    if (!settings.text_line) { // if we don't have a text line in the UI, exit the plugin
        return;
    }
    else {
        text = settings.text_line; // otherwise, get the tet line in the UI
    }
    
    if (!settings.text_color) { // if no color is set, we'll set to -1 so a comparison later will check for this and exclude the inline color if it's -1
        txtclr = -1;
    }
    else {
        txtclr = '#' + settings.text_color; // otherwise, we'll get the color from the UI and prepend a # sign to it
    }
    
    var fullText = text.replace(/\$\[boardname\]/gi, currentBoard); // this is where we are looking for any occurrence of $[boardname] and replacing it with the actual board's name
    
    if (txtclr == -1) { //if our txtclr variable is -1, then no color set in the UI - so we'll exclude the inline color
        $('.container.new-area > .title-bar').append('<span><h2>' + fullText + '</h2></span>'); // here's where we append the text line in the title bar
    }
    else { // we have a color in the UI, so let's put inline color
        $('.container.new-area > .title-bar').append('<span><h2 style="color: ' + txtclr + ' !important;">' + fullText + '</h2></span>'); // appending with color
    }
};

$(document).ready(function() {
    bnonp();
});
