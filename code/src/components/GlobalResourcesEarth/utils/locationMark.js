import * as THREE from "three";
import {getCoordinates} from "../utils/common"
/**
 * 根据城市的不同，在地球上添加对应的标识
 * 包含数据中心（dataCenter）、业务支援点（golbalBusinessSupport）、普通点（pop）、陆地线缆的中间点（terMid）、海底线缆中间点（subMid）、线缆添加的城市点（cable）
 * @param {*} radius 球体半径
 * @param {*} lng 经度
 * @param {*} lat 纬度
 * @returns 包含形状和材质的mesh
 */ 

var scale=1.006;
export function dataCenter(radius, lng,lat,name) {
    var texture = new THREE.TextureLoader().load("../earth/DataCenter.png")
    var material = new THREE.MeshBasicMaterial({
        map:texture,
        side: THREE.DoubleSide
    });
    var geometory = new THREE.CircleGeometry(0.1, 32);
    var mesh = new THREE.Mesh(geometory, material);
    var position = getCoordinates(radius, lng,lat);
    mesh.position.x = position.x;
    mesh.position.y = position.y;
    mesh.position.z = position.z;
    mesh.type="location";
    mesh.name=name;
    // const phi = (180 + lng) * (Math.PI / 180);
    // const theta = (90 - lat) * (Math.PI / 180);
    mesh.rotateY((lng + 90) * Math.PI / 180);
    mesh.rotateX((180 - lat) * Math.PI / 180);
    mesh.position.multiplyScalar(scale)
    return mesh;
};
export function golbalFootprint(radius,lng,lat,name) {


    var texture = new THREE.TextureLoader().load("../earth/GlobalFootprint.png")
    var material = new THREE.MeshBasicMaterial({
        map:texture,
        side: THREE.DoubleSide
    });
    material.visible=true;
    var geometory = new THREE.CircleGeometry(0.07, 32);
    var mesh = new THREE.Mesh(geometory, material);
    var position = getCoordinates(radius, lng,lat);
    mesh.position.x = position.x;
    mesh.position.y = position.y;
    mesh.position.z = position.z;
    mesh.type="location";
    mesh.name=name;
    // const phi = (180 + lng) * (Math.PI / 180);
    // const theta = (90 - lat) * (Math.PI / 180);
    mesh.rotateY((lng + 90) * Math.PI / 180);
    mesh.rotateX((180 - lat) * Math.PI / 180);
    mesh.position.multiplyScalar(scale)
    return mesh;
};

export function pop(radius, lng,lat,name) {
    var texture = new THREE.TextureLoader().load("../earth/PoPMark.png")
    var material = new THREE.MeshBasicMaterial({
        map:texture,
        side: THREE.DoubleSide
    });
    material.visible=true;
    var geometory = new THREE.CircleGeometry(0.04, 32);
    var mesh = new THREE.Mesh(geometory, material);
    var position = getCoordinates(radius, lng,lat);
    mesh.position.x = position.x;
    mesh.position.y = position.y;
    mesh.position.z = position.z;
    mesh.type="location";
    mesh.name=name;
    // const phi = (180 + lng) * (Math.PI / 180);
    // const theta = (90 - lat) * (Math.PI / 180);
    mesh.rotateY((lng + 90) * Math.PI / 180);
    mesh.rotateX((180 - lat) * Math.PI / 180);
    mesh.position.multiplyScalar(scale)
    return mesh;
};

export function cablePoint(radius, lng,lat,name) {
    var texture = new THREE.TextureLoader().load("../earth/cablePoint.png")
    var material = new THREE.MeshBasicMaterial({
        map:texture,
        side: THREE.DoubleSide
    });
    material.visible=true;
    var geometory = new THREE.CircleGeometry(0.04, 32);
    var mesh = new THREE.Mesh(geometory, material);
    var position = getCoordinates(radius, lng,lat);
    mesh.position.x = position.x;
    mesh.position.y = position.y;
    mesh.position.z = position.z;
    mesh.type="location";
    mesh.name=name;
    // const phi = (180 + lng) * (Math.PI / 180);
    // const theta = (90 - lat) * (Math.PI / 180);
    mesh.rotateY((lng + 90) * Math.PI / 180);
    mesh.rotateX((180 - lat) * Math.PI / 180);
    mesh.position.multiplyScalar(scale)
    return mesh;
};

export function addMiddle(radius, lng,lat,name) {
    // var texture = new THREE.TextureLoader().load("../earth/Pop.png")
    var material = new THREE.MeshBasicMaterial({
        color: 0x5bc4ff,
        side: THREE.DoubleSide
    });
    var geometory = new THREE.CircleGeometry(0.04, 32);
    var mesh = new THREE.Mesh(geometory, material);
    var position = getCoordinates(radius, lng,lat);
    mesh.position.x = position.x;
    mesh.position.y = position.y;
    mesh.position.z = position.z;
    mesh.type="middle";
    mesh.name=name;
    material.visible=true;
    // const phi = (180 + lng) * (Math.PI / 180);
    // const theta = (90 - lat) * (Math.PI / 180);
    mesh.rotateY((lng + 90) * Math.PI / 180);
    mesh.rotateX((180 - lat) * Math.PI / 180);
    mesh.position.multiplyScalar(scale)
    return mesh;
};