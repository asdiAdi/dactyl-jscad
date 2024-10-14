import { cuboid } from "@jscad/modeling/src/primitives";
import { keyswitch_height, keyswitch_width, plate_thickness } from "../configs";
import { union } from "@jscad/modeling/src/operations/booleans";

const top_wall = cuboid({
  size: [keyswitch_width + 3, 1.5, plate_thickness],
  center: [0, 1.5 / 2 + keyswitch_height / 2, plate_thickness / 2],
});

const left_wall = cuboid({
  size: [1.5, keyswitch_height + 3, plate_thickness],
  center: [1.5 / 2 + keyswitch_width / 2, 0, plate_thickness / 2],
});

// const side_nub =

export const SinglePlateV1 = union(top_wall, left_wall);

const SinglePlate = union(top_wall, left_wall);

export default SinglePlate;
