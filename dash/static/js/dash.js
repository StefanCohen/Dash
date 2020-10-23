/*
 * View model for dash
 *
 * Author: Stefan Cohen
 * License: AGPLv3
 */
$(function() {
    function DashViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }
    

    var testLayout = [
        {"x":0,"y":0,"w":1,"h":1,"i":"CPU"},
        {"x":1,"y":0,"w":1,"h":1,"i":"Mem"},
        {"x":2,"y":0,"w":1,"h":1,"i":"Disk"},
        {"x":3,"y":0,"w":1,"h":1,"i":"Net"},
        {"x":0,"y":1,"w":2,"h":1,"i":"Hotend"},
        {"x":3,"y":1,"w":2,"h":1,"i":"Bed"},
        {"x":0,"y":2,"w":4,"h":4,"i":"Webcam","c":"<img src='https://i.all3dp.com/wp-content/uploads/2020/05/05133104/its-not-always-possible-to-stay-close-to-your-3d-prusa-200429.jpg'></img>"},
        {"x":0,"y":5,"w":1,"h":1,"i":"Printer"},
        {"x":1,"y":5,"w":2,"h":1,"i":"Job"},
        {"x":3,"y":5,"w":1,"h":1,"i":"Etc"},
        {"x":0,"y":6,"w":4,"h":1,"i":"Whatever"},
    ];
    
    new Vue({
        el: '#app',
        delimiters: ['[[', ']]'],
        data: {
            layout: testLayout,
          lastBreakpoint: null
        },
 
    methods: {
      layoutUpdatedEvent: function() {},
      resizeEvent: function(i, newH, newW, newHPx, newWPx){},
      layoutCreatedEvent: function(newLayout) {
        
        var comp = this.$children[0];
        var _ = this;
        window.addEventListener("resize", function() {
          
          if(_.lastBreakpoint !== comp.lastBreakpoint) {
            console.log("resize!");
          }
        
          _.lastBreakpoint = comp.lastBreakpoint;
          
        });
  

      },
      
    },
    mounted: function() {
 
        var comp = this.$children[0];
      
        this.$refs.addNewButton.addEventListener("click", function() {
          console.log(comp);
          comp.layout.push({"x":0,"y":0,"w":2,"h":2,"i":comp.layout.length+1});
          
        });
      }
 
    });

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: DashViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_dash, #tab_plugin_dash, ...
        elements: [ /* ... */ ]
    });
});
