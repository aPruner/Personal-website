function createRouteString(pathname) {
  if (pathname.length < 2 && pathname === "/") {
    return "Home"
  } else if (pathname.length < 2) {
    return "error, pathname length must be >= 2"
  }
  return `${pathname.charAt(1).toUpperCase()}${pathname.slice(2, pathname.length)}` 
}

export {
  createRouteString
}