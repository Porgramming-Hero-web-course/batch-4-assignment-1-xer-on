type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

// Adding explicit type guard functions
function isCircle(shape: Shape): shape is Circle {
  return shape.shape === "circle";
}

function isRectangle(shape: Shape): shape is Rectangle {
  return shape.shape === "rectangle";
}

export function calculateShapeArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  // This ensures exhaustive checking
  throw new Error("Unknown shape type");
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
// 24;

// console.log(circleArea);
// console.log(rectangleArea);
