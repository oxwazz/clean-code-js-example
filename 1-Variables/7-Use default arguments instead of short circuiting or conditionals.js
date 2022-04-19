// BAD CODE
function createShape(type) {
  const defaultShapeType = type || "circle";
  // ...
}

// GOOD CODE
function createShape(type = "circle") {
  // ...
}
