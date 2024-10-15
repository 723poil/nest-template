import { ExpressionBuilder, ExpressionWrapper, FunctionModule } from "kysely";
import { Gps } from "../base-dto/gps";

export const calculateDistance = (
  eb: ExpressionBuilder<any, any>,
  gps: Gps,
  query: { gps_lat: string; gps_lng: string },
) => {
  const radius: number = 6371;

  const fn: FunctionModule<any, any> = eb.fn;
  const val: <VE>(value: VE) => ExpressionWrapper<any, any, any> = eb.val;

  return fn<number>("round", [
    fn<number>("ifnull", [
      eb(
        val(radius),
        "*",
        fn<number>("acos", [
          eb(
            eb(
              fn<number>("cos", [fn<number>("radians", [val(gps.latitude)])]),
              "*",
              eb(
                fn<number>("cos", [fn<number>("radians", [query.gps_lat])]),
                "*",
                fn<number>("cos", [
                  eb(fn<number>("radians", [query.gps_lng]), "-", fn<number>("radians", [val(gps.longitude)])),
                ]),
              ),
            ),
            "+",
            eb(
              fn<number>("sin", [fn<number>("radians", [val(gps.latitude)])]),
              "*",
              fn<number>("sin", [fn<number>("radians", [query.gps_lat])]),
            ),
          ),
        ]),
      ),
      val(0),
    ]),
    val(3),
  ]);
};
