jQuery("#simulation")
  .on("click", ".s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 .click", function(event, data) {
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
    } else if(jFirer.is("#s-flat_Button_lightTheme")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme": {
                      "attributes-ie": {
                        "-pie-background": "#D6D6D6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca14e2e3-03f7-4fa2-a584-c47e753ceeca"
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
    } else if(jFirer.is("#s-flat_Button_lightTheme_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_1": {
                      "attributes-ie": {
                        "-pie-background": "#D6D6D6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca14e2e3-03f7-4fa2-a584-c47e753ceeca"
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
    } else if(jFirer.is("#s-flat_Button_lightTheme_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_2": {
                      "attributes-ie": {
                        "-pie-background": "#D6D6D6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-3cd8fffb-44be-4a12-92d1-b9dc352728e3 #s-flat_Button_lightTheme_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/efee2608-d6be-4e6c-b82a-34655a14e8c7"
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
  });