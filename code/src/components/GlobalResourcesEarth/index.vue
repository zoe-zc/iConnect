<template>
  <div class="out-box flex justify-between items-center sm:block">
    <div id="miniEarth" style="z-index: 1" ref="earth"></div>
    <div class="select-panel">
      <select-panel />
    </div>
  </div>
</template>
<script>
import * as THREE from "three";

import {
  dataCenter,
  golbalFootprint,
  pop,
  cablePoint,
} from "./utils/locationMark.js";
import { getCoordinatesByName } from "./utils/common";
import { creatCable } from "./utils/lines";
import { CreateSprite } from "./utils/sprite_utils";
// json
import cityInfo from "./json/cityInfo.json";
import terrsetrialCable from "./json/terrsetrialCable.json";
import submarineCable from "./json/submarineCable.json";

var OrbitControls = require("three-orbit-controls")(THREE);
const TWEEN = require("@tweenjs/tween.js");
import SelectPanel from "./SelectPanel";
export default {
  components: { SelectPanel },
  data: () => ({}),
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.group = new THREE.Object3D();
      this.subCableGroup = new THREE.Object3D();
      this.terCableGroup = new THREE.Object3D();
      this.dataCenterGroup = new THREE.Object3D();
      this.globalFootprintGroup = new THREE.Object3D();
      this.popGroup = new THREE.Object3D();
      this.cablePointGroup = new THREE.Object3D();
      this.orgLineMaterial = null;
      this.orgLine = null;
      this.cities = cityInfo["cities"];
      // console.log(typeof this.cities)
      this.scene = new THREE.Scene(); // 场景
      //   var axesHelper = new THREE.AxesHelper(20);
      //   this.scene.add(axesHelper);

      this.scene.background = new THREE.Color(0xf4f6f8);

      this.camera = new THREE.PerspectiveCamera(45, 450 / 450, 0.1, 1000);
      this.camera.position.x = -15;
      this.camera.position.y = 10;
      this.camera.position.z = -20;
      this.cameraTarget = this.scene.position.clone();
      this.camera.lookAt(this.cameraTarget);

      this.renderer = new THREE.WebGLRenderer({ antialias: true }); // 渲染器
      this.renderer.setSize(450, 450);
      this.renderer.shadowMapEnabled = true;
      this.$refs.earth.append(this.renderer.domElement);

      this.raycaster = new THREE.Raycaster();

      this.isRoate = true;

      this.addAmbientLight();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.autoRotate = true;
      this.initEarth();

      // var points2 = bezier2.points;
      // var animation2 = this.addBallAnimation(points2);
      // animation2.play();

      window.addEventListener("resize", this.onWindowResize);

      this.mouse = new THREE.Vector2();

      this.addLocationMark();
      //添加陆地线缆
      this.addTerrsetrialCable();
      //添加海底线缆
      this.addSubmarineCable();
      this.group.add(this.subCableGroup);
      this.group.add(this.terCableGroup);
      this.group.add(this.dataCenterGroup);
      this.group.add(this.globalFootprintGroup);
      this.group.add(this.popGroup);
      this.group.add(this.cablePointGroup);

      this.scene.add(this.group);
      // console.log(this.scene);

      this.animation();
    },

    deleteSometing() {
      this.group.remove(this.terrsetrialCable);
    },
    addAmbientLight() {
      const light = new THREE.AmbientLight(0x404040); // soft white light
      this.scene.add(light);
    },
    addLocationMark() {
      let cities = cityInfo["cities"];
      cities.forEach((element) => {
        let lng = null;
        let lat = null;
        let name = null;
        lng = element["lng"];
        lat = element["lat"];
        name = element["name"];
        if (lng == null || lat == null || name == null) {
          console.log("locationMark golbalFootprint name error");
          return;
        }
        if (element["type"] == "golbalFootprint") {
          this.globalFootprintGroup.add(golbalFootprint(10, lng, lat, name));
        } else if (element["type"] == "dataCenter") {
          this.dataCenterGroup.add(dataCenter(10, lng, lat, name));
        } else if (element["type"] == "pop") {
          this.popGroup.add(pop(10, lng, lat, name));
        } else if (element["type"] == "subMid") {
          // this.group.add(addMiddle(10, lng, lat, name));
        } else if (element["type"] == "cable") {
          this.cablePointGroup.add(cablePoint(10, lng, lat, name));
        }
      });
    },
    addTerrsetrialCable() {
      let lines = terrsetrialCable["lines"];
      lines.forEach((element) => {
        let myline = this.handleLinesArr(element, "terrsetrialCable");
        this.terCableGroup.add(myline);
      });
    },
    addSubmarineCable() {
      let lines = submarineCable["lines"];
      lines.forEach((element) => {
        let myline = this.handleLinesArr(element, "submarineCable");
        this.subCableGroup.add(myline);
      });
    },
    handleLinesArr(element, cabeltype) {
      let positonsArr = [];
      let name = element["name"];
      let pointsArr = element["pointsArr"];
      pointsArr.forEach((element1) => {
        let positons = [];
        let points = element1;
        points.forEach((element) => {
          let tempPositon = getCoordinatesByName(10, element);
          positons.push(tempPositon);
        });
        positonsArr.push(positons);
      });
      let submarine = creatCable(positonsArr, cabeltype);
      // console.log("SubmarineCable--->", submarine);
      let myline = submarine.line;
      myline.cabelname = name;
      return myline;
    },
    addTips(position, str) {
      if (this.spritel != null) {
        this.group.remove(this.spritel);
        this.spritel = null;
      }
      let center = position.clone();
      center.multiplyScalar(1.01);
      this.spritel = CreateSprite(str, center);

      // spritel.position.set(center.x, center.y, center.z);
      this.spritel.center = new THREE.Vector2(0.5, 0);
      // spritel.rotation.y = -0.5;
      // spritel.scale.set(2, 2, 1);
      this.spritel.scale.set(1, 0.5, 0.5);
      // console.log(this.spritel);
      this.group.add(this.spritel);
    },

    initEarth() {
      var earthMap = new THREE.TextureLoader().load("./earth/Globe.png");
      var materialPainting = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: earthMap,
      });
      materialPainting.visible = true;
      var mesh = new THREE.Mesh(
        new THREE.SphereBufferGeometry(10, 128, 128),
        materialPainting
        // new THREE.MeshNormalMaterial( { flatShading: true } )
      );
      // mesh.position.z = 20;
      this.earth = mesh;
      this.group.add(this.earth);
    },

    selfRotation() {
      // console.log(this.group);
      if (this.isRoate) {
        this.group.rotation.y += 0.003;
      }
    },
    stopRotation() {
      this.isRoate = false;
    },
    startRotation() {
      this.isRoate = true;
    },
    addBall(pos) {
      let ballGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      let aMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(1, 0, 0),
        transparent: true,
        opacity: 0.8,
      });
      var aMesh = new THREE.Mesh(ballGeometry, aMaterial);
      aMesh.position.x = pos.x;
      aMesh.position.y = pos.y;
      aMesh.position.z = pos.z;
      aMesh.type = "add ball";
      this.group.add(aMesh);
    },
    movetoPoint(getObject, objPosition) {
      if (getObject != null && getObject.name != null) {
        if (getObject.type == "cable" || getObject.type == "location") {
          let destPosition = objPosition.clone().multiplyScalar(1.8);
          this.cameraTarget = objPosition.clone();
          let cameraPositon = this.camera.position;
          // console.log("objPosition--->", objPosition);
          // console.log("cameraPositon--->", cameraPositon);
          const tween = new TWEEN.Tween(cameraPositon)
            .to(destPosition, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
          // console.log("destPosition--->", destPosition);
          // console.log("cameraPositon1-->", cameraPositon);
        }
      }
    },

    addPlan() {
      let material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: 2,
        polygonOffsetUnits: 1,
      });
      let geometry = new THREE.PlaneGeometry(2000, 2000);
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 1);
      mesh.rotation.x = -Math.PI * 0.5;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    },
    onWindowResize() {
      this.camera.aspect = 450 / 450;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(450, 450);
      this.animation();
    },
    animation() {
      this.camera.lookAt(this.scene.position);
      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.selfRotation();
      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animation);
    },
  },
};
</script>
<style lang="scss" scoped>
.out-box {
  padding: 0 245px;
  background-color: #f4f6f8;
  min-height: 630px;
}
</style>
