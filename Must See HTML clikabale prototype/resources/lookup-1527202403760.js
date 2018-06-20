(function(window, undefined) {
  var dictionary = {
    "d081eade-d68a-4e74-8494-d5ecdb9f9839": "Map screen",
    "285c1f60-b49c-4208-bb49-14ffdea2139f": "Register screen",
    "ca14e2e3-03f7-4fa2-a584-c47e753ceeca": "List of Places Screen",
    "efee2608-d6be-4e6c-b82a-34655a14e8c7": "Friend list screen",
    "bdf7bb69-deb3-49ce-a4f4-d658e8070a3e": "Place info",
    "4c844a83-ad19-4465-b8ca-bbf2c39ecb6f": "Add Friend Screen",
    "5cb9c467-e8a0-4a6a-adf4-379972bc55ce": "Friends on Map Screen",
    "e1a80e3d-6422-4d10-8392-2955d9892c45": "Map radius screen",
    "4297d7d8-239d-4eac-9c4b-b3b5e2f410e7": "Add New Place",
    "8814db86-91e7-4159-bc3e-d5b730b8738d": "Home Screen",
    "be4494f9-fe70-48ad-8635-e44df86b9c87": "Notification Screen",
    "0279e1f2-3ebf-4edb-8c88-3ff57d7c39c4": "Login screen",
    "f44f5b8c-cede-457b-8d22-fd630117ef74": "Friend Request Screen",
    "3cd8fffb-44be-4a12-92d1-b9dc352728e3": "Profile screen",
    "2c011104-0b60-4f4f-bf39-54ea7e53ce1e": "Leaderboard Screen",
    "b2e2785b-bba8-45e3-a624-333ebb344f68": "Comment screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);