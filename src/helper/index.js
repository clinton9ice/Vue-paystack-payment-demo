// Returns Boolean
function isObject(a) {
  return typeof a === "object" && a !== null;
}

const isEmpty = (param) => {
  return param === null || param === undefined || param == "";
};

// Returns Boolean
function isEqual(arr1, arr2) {
  let res = false;
  // check if the parameters is an array or object
  if (
    (!isObject(arr1) && !Array.isArray(arr1)) ||
    (!isObject(arr2) && !Array.isArray(arr2))
  ) {
    return res;
  }

  // Convert the properties to an array
  const key1 = Object.keys(arr1);
  const key2 = Object.keys(arr2);

  // return if their length doesn't match
  if (key1.length !== key2.length) return false;

  // Check the object values for match
  for (const key of key2) {
    const a1Val = arr1[key];
    const a2Val = arr2[key];
    const areObjects = isObject(a1Val) && isObject(a2Val);
    // console.log(a1Val, a2Val)

    if (a1Val !== undefined && a2Val !== undefined && a2Val && a1Val) {
      if (
        (areObjects && !isEqual(a1Val, a2Val)) ||
        (!areObjects && a1Val !== a2Val)
      ) {
        return false;
      }
      res = true;
    }
  }

  return res;
}

function setSession(key, value) {
  return sessionStorage.setItem(key, value);
}

function sessionExist(e) {
  return sessionStorage.getItem(e) !== null;
}

function killSession(e) {
  return sessionStorage.removeItem(e);
}
const isEmail = (arg) => {
  const res = /^[a-z'0-9]+([._-][a-z'0-9]+)*@([a-z0-9]+([._-][a-z0-9]+))+$/i;
  return res.test(String(arg).toLowerCase());
};

module.exports = {
  isObject,
  isEqual,
  sessionExist,
  setSession,
  killSession,
  isEmpty,
  isEmail,
};
