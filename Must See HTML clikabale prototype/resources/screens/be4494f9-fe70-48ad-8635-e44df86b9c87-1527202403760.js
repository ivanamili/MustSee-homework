jQuery("#simulation")
  .on("click", ".s-be4494f9-fe70-48ad-8635-e44df86b9c87 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8814db86-91e7-4159-bc3e-d5b730b8738d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-be4494f9-fe70-48ad-8635-e44df86b9c87 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_12")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Ellipse_11" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_12 .shapert-clipping": {
                        "attributes": {
                          "left": "0px",
                          "top": "0px",
                          "width": "30px",
                          "height": "30px",
                          "position": "absolute",
                          "overflow": "hidden"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_12 .content": {
                        "attributes": {
                          "width": "30px",
                          "height": "30px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_12": {
                        "attributes": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_12": {
                        "attributes-ie": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Ellipse_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Ellipse_7" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_8 .shapert-clipping": {
                        "attributes": {
                          "left": "0px",
                          "top": "0px",
                          "width": "30px",
                          "height": "30px",
                          "position": "absolute",
                          "overflow": "hidden"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_8 .content": {
                        "attributes": {
                          "width": "30px",
                          "height": "30px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_8": {
                        "attributes": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_8": {
                        "attributes-ie": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Ellipse_10")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Ellipse_9" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_10 .shapert-clipping": {
                        "attributes": {
                          "left": "0px",
                          "top": "0px",
                          "width": "30px",
                          "height": "30px",
                          "position": "absolute",
                          "overflow": "hidden"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_10 .content": {
                        "attributes": {
                          "width": "30px",
                          "height": "30px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_10": {
                        "attributes": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    },{
                      "#s-be4494f9-fe70-48ad-8635-e44df86b9c87 #s-Ellipse_10": {
                        "attributes-ie": {
                          "border-top-width": "3px",
                          "border-top-style": "solid",
                          "border-top-color": "#8AD9D2",
                          "border-right-width": "3px",
                          "border-right-style": "solid",
                          "border-right-color": "#8AD9D2",
                          "border-bottom-width": "3px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#8AD9D2",
                          "border-left-width": "3px",
                          "border-left-style": "solid",
                          "border-left-color": "#8AD9D2",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });