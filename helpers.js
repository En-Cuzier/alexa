/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "🧝‍♀️ *QUEEN ALEXA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛡 *QUEEN ALEXA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 *QUEEN ALEXA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
