import * as THREE from "three";
// import { MeshLine, MeshLineMaterial, MeshLineRaycast } from "three.meshline";
// import { Line2 } from "three/examples/jsm/lines/Line2.js";
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
// import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";

export function creatSpline(pointsArr) {

    const midScalar = 0.508;
    let pointsArrTemp = [];
    for (var i = 0; i < pointsArr.length - 1; i++) {
        pointsArrTemp.push(pointsArr[i]);
        var mid = pointsArr[i].clone();
        mid.add(pointsArr[i + 1]);
        mid.multiplyScalar(midScalar);
        // mid.z=mid.z*1.01
        pointsArrTemp.push(mid);
    }
    pointsArrTemp.push(pointsArr[pointsArr.length - 1]);
    let curve = new THREE.CatmullRomCurve3(pointsArrTemp);
    // let points = curve.getPoints(50);
    // console.log("curve points--->", points)
    /**
         * 使用TubeGeometry
         */
    let tubegeometry = new THREE.TubeGeometry(curve, 128, 0.04, 64, false);
    let tubematerial = new THREE.MeshBasicMaterial({
        color: 0x5bc4ff,
        transparent: true,
        opacity: 0.4
    });
    let mesh = new THREE.Mesh(tubegeometry, tubematerial);
    mesh.name = "terrsetrialCable";
    /**
     * 使用Line
     */
    // let geometry = new THREE.BufferGeometry().setFromPoints(points);
    // // const geometry = new THREE.BufferGeometry().setAttribute( 'position', new THREE.Float32BufferAttribute( points, 3 ) );
    // let material = new THREE.LineBasicMaterial({
    //     color: 0x5bc4ff,
    //     lineWidth: 3,
    //     transparent: true,
    //     opacity: 0.4
    // });
    // // Create the final object to add to the scene
    // let curveObject = new THREE.Line(geometry, material);
    // curveObject.name = "curveObject";
    // curveObject.scale.setScalar(2);
    // curveObject.layers.enable( 1 )
    /**
     * 使用Line2
     */
    // let line2GeoPositons = []
    // points.forEach(element => {
    //     line2GeoPositons.push(element.x, element.y, element.z);
    // });
    // let geometry2 = new LineGeometry();
    // geometry2.setPositions(line2GeoPositons);
    // let material2 = new LineMaterial({
    //     color: 0x5bc4ff,
    //     linewidth: 0.005,
    //     dashed: false,
    //     alphaToCoverage: true,
    //     transparent: true,
    //     opacity: 0.4
    // });
    // let curveObject = new Line2(geometry2, material2);
    // curveObject.computeLineDistances();
    // curveObject.name = "curveObject";
    /**
     * 使用meshLine
     */
    // let geome = new MeshLine();
    //   geome.setPoints(points);

    //   let material1 = new MeshLineMaterial({
    //     color: 0x5bc4ff,
    //     lineWidth: 0.1,
    //     sizeAttenuation: true,
    //     transparent: true,
    //     opacity: 0.4,
    //   });
    //   material1.visible=true;
    //   let curveObject = new THREE.Mesh(geome, material1);
    //   curveObject.name = "curveObject";
    //   curveObject.raycast= MeshLineRaycast;
    return {
        line: mesh
        // points: points
    };
}
export function creatCable(pointsArrs, name) {
    const midScalar = 0.508;
    let cableGeoArr = [];
    pointsArrs.forEach(element => {
        let pointsArr = element;
        let pointsArrTemp = [];
        for (var i = 0; i < pointsArr.length - 1; i++) {
            pointsArrTemp.push(pointsArr[i]);
            var mid = pointsArr[i].clone();
            mid.add(pointsArr[i + 1]);
            mid.multiplyScalar(midScalar);
            // mid.z=mid.z*1.01
            pointsArrTemp.push(mid);
        }
        pointsArrTemp.push(pointsArr[pointsArr.length - 1]);
        let curve = new THREE.CatmullRomCurve3(pointsArrTemp);
        let tubegeometry = new THREE.TubeGeometry(curve, 128, 0.02, 64, false);
        cableGeoArr.push(tubegeometry);
    });
    // console.log("pointsArrs", pointsArrs);
    // console.log("cableGeoArr", cableGeoArr);

    let result = BufferGeometryUtils.mergeBufferGeometries(cableGeoArr);
    let tubematerial = new THREE.MeshBasicMaterial({
        color: 0x5bc4ff,
        transparent: true,
        opacity: 0.3
    });
    let mesh = new THREE.Mesh(result, tubematerial);
    mesh.name = name;
    mesh.type = "cable";
    return {
        line: mesh
        // points: points
    };
}

export function creatBezierLine(pointsArr) {
    var v1 = new THREE.Vector3();
    var alph = 1.05;
    v1.x = alph * (v0.x + (1 / 3) * (v3.x - v0.x));
    v1.y = alph * (v0.y + (1 / 3) * (v3.y - v0.y));
    v1.z = alph * (v0.z + (1 / 3) * (v3.z - v0.z));
    var v2 = new THREE.Vector3();
    v2.x = alph * (v0.x + (2 / 3) * (v3.x - v0.x));
    v2.y = alph * (v0.y + (2 / 3) * (v3.y - v0.y));
    v2.z = alph * (v0.z + (2 / 3) * (v3.z - v0.z));
    // 绘制贝塞尔曲线
    let curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);
    let points = curve.getPoints(100);

    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let material = new THREE.LineBasicMaterial({
        color: 0x5bc4ff,
        linewidth: 3,
        transparent: true,
        opacity: 0.1
    });
    // var geometry1 = new MeshLine();
    // geometry1.setPoints(points);
    // var material1 = new MeshLineMaterial({
    //       color: 0x5bc4ff,
    //         linewidth: 0.1,
    // });

    let curveObject = new THREE.Line(geometry, material);
    curveObject.name = "curveObject";
    return {
        line: curveObject,
        points: points,
    };
};

