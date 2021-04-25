import * as THREE from "three";
import cityInfo from "../json/cityInfo.json";
/**
 * 将经纬度转换为三维空间坐标
 * @param {*} radius 球体半径
 * @param {*} lng 经度
 * @param {*} lat 维度
 * @returns THREE.Vector3对象
 */
export function getCoordinatesByName(radius, name) {
  var cities = cityInfo["cities"];
  let lng = null;
  let lat = null;
  let x=null;
  let y=null;
  let z=null;
  cities.forEach((element) => {
    if (element["name"] == name) {
      lng = element["lng"],
      lat = element["lat"],
      x = element["x"],
      y = element["y"],
      z = element["z"]
    }
  });
  if (lng == null || lat == null) {
    if(x==null || y==null || z==null){
      console.log("locationMark getCoordinates name error")
      console.log("name--->",name)
      return;
    }
    return new THREE.Vector3(x,y,z)
  }

  const phi = (180 + lng) * (Math.PI / 180);
  const theta = (90 - lat) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(theta) * Math.cos(phi),
    radius * Math.cos(theta),
    radius * Math.sin(theta) * Math.sin(phi)
  );
};

export function getCoordinates(radius, lng, lat) {

  const phi = (180 + lng) * (Math.PI / 180);
  const theta = (90 - lat) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(theta) * Math.cos(phi),
    radius * Math.cos(theta),
    radius * Math.sin(theta) * Math.sin(phi)
  );
};