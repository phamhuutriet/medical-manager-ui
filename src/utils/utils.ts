import dayjs, { Dayjs } from "dayjs";
import { RouteToName } from "../data/routeEnum";

export interface RouteListItem {
  route: string;
  routeName: string;
}

export const getRoutesList = (route: string): RouteListItem[] => {
  if (!route) {
    return [];
  }

  let ans: RouteListItem[];
  if (!Object.keys(RouteToName).includes(route)) {
    ans = [];
  } else {
    ans = [{ route, routeName: RouteToName[route] }];
  }
  const paths = route.split("/");
  const prefixPath = paths.slice(0, paths.length - 1).join("/");
  return getRoutesList(prefixPath).concat(ans);
};

export const getAge = (date: Dayjs) => {
  console.log("DATE: ", date);
  return dayjs().diff(date, "year");
};
