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
require("ckeditor/config")

// require("plugins/revolution/js/extensions/revolution.extension.actions.min")
// require("plugins/revolution/js/extensions/revolution.extension.carousel.min")
// require("plugins/revolution/js/extensions/revolution.extension.kenburn.min")
// require("plugins/revolution/js/extensions/revolution.extension.layeranimation.min")
// require("plugins/revolution/js/extensions/revolution.extension.migration.min")
// require("plugins/revolution/js/extensions/revolution.extension.navigation.min")
// require("plugins/revolution/js/extensions/revolution.extension.parallax.min")
// require("plugins/revolution/js/extensions/revolution.extension.slideanims.min")
// require("plugins/revolution/js/extensions/revolution.extension.video.min")
// require("plugins/revolution/js/extensions/jquery.themepunch.revolution.min")
// require("plugins/revolution/js/extensions/jquery.themepunch.tools.min")


import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/css/all";

