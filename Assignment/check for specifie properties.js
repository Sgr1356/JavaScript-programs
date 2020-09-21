
function Keys(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
  console.log(Keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
  