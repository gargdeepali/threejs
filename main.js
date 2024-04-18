import * as THREE from "../node_modules/three/build/three.module.js";

$(document).ready(function () {
    const container = document.getElementById('container');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(1*3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    const point = new THREE.Mesh(geometry, material);
    scene.add(point);

    function updatePointPosition(x, y, z) {
        point.geometry.attributes.position.setXYZ(0, x, y, z);
        point.geometry.attributes.position.needsUpdate = true;
    }

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

    $('#runBtn').on('click', function() {
        var x = parseFloat($('#x').val());
        var y = parseFloat($('#y').val());
        var z = parseFloat($('#z').val());
        updatePointPosition(x, y, z);
    });

    camera.position.z = 5;
    camera.lookAt(point.position);
})











