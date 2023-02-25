exports.onRouteUpdate = () => {
    const styleSheets = document.getElementsByTagName("link");
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      if (sheet.rel === "stylesheet") {
        sheet.href = sheet.href;
      }
    }
  };