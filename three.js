import * as THREE from 'three';

const container = document.getElementById('three-animation');
// Set the container's dimensions explicitly
container.style.width = '50vw';
container.style.height = '70vh';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
// Set up the camera position
camera.position.z = 4.5;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Create a the "spotlight" sprite
const spriteTexture = new THREE.TextureLoader().load('/4/spotlight.png');
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(1, 1, 1);
sprite.position.set(2, 2, 1);
scene.add(sprite);
sprite.visible = false;

// Create a cube geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);
// Create a material with a plain color
const material = new THREE.MeshLambertMaterial({ color: 0x888888 }); // Grey color
// Create a mesh using the geometry and material(s)
const cube = new THREE.Mesh(geometry, material);
// Add the cube to the scene
scene.add(cube);

// const helper = new VertexNormalsHelper(cube, 1, 0xff0000);
// scene.add(helper);

// Create an ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFDD, 0.5); // Yellowish color
ambientLight.visible = false;
scene.add(ambientLight);

// Create a directional light
const staticLight = new THREE.DirectionalLight(0xffffff, 5.0);
staticLight.position.set(1, 1, 1);
staticLight.visible = false;
scene.add(staticLight);
// const staticLightHelper = new THREE.DirectionalLightHelper(staticLight);
// scene.add(staticLightHelper);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function rotate() {
    requestAnimationFrame(rotate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
}

function toggleAmbiantLight() {
    ambientLight.visible = !ambientLight.visible;
}

function toggleDirectionalLight() {
    staticLight.visible = !staticLight.visible;
    sprite.visible = !sprite.visible;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        const id = requestAnimationFrame(animate);
        cancelAnimationFrame(id);
        rotate();
    }
    if (event.key === 'm') {
        toggleAmbiantLight();
    }
    if (event.key === 'l') {
        toggleDirectionalLight();
    }
});

animate();
