// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("bootstrap")
import "../stylesheets/application";
document.addEventListener("turbolinks:load", function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
    })
})

require("js_files/custom")
require("js_files/bootstrap.min")
require("js_files/jquery-ui")
require("js_files/jquery.bootstrap-touchspin")
require("js_files/jquery.fancybox")
require("js_files/jquery")
require("js_files/jquery.ui.touch-punch.min")
require("js_files/appear")
require("js_files/main-slider-script")
require("js_files/mixitup")
require("js_files/color-settings")
require("js_files/countdown")
require("js_files/owl")
require("js_files/script")
require("js_files/validate")
require("js_files/wow")

import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/css/all";

