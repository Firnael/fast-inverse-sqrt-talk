import * as THREE from 'three';

const container = document.getElementById('three-animation');
// Set the container's dimensions explicitly
container.style.width = '50vw';
container.style.height = '70vh';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
// Set up the camera position
camera.position.z = 4.5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x222222);
container.appendChild(renderer.domElement);

// Create a the "spotlight" sprite
const spriteTexture = new THREE.TextureLoader().load('/cube-light/spotlight.png');
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(1, 1, 1);
sprite.position.set(2, 2, 1);
scene.add(sprite);
sprite.visible = false;

// Create a cube geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Load the textures
const textureLoader = new THREE.TextureLoader();
const textureUrls = [
    'alexo_white.png',
    'erwann_white.png',
    'fdu_white.png',
    'greg_white.png',
    'jeremie_white.png',
    'lasouche_white.png'
];
const textures = textureUrls.map((url) => textureLoader.load(`/cube-light/${url}`));

// Create an array of materials using the textures
const materials = textures.map((texture) => {
    return new THREE.MeshStandardMaterial({ map: texture });
});

// Create a mesh using the geometry and material(s)
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
// const helper = new VertexNormalsHelper(cube, 1, 0xff0000);
// scene.add(helper);

// Create a directional light
const staticLight = new THREE.DirectionalLight(0xffffff, 3.0);
staticLight.position.set(1, 1, 1);
scene.add(staticLight);
// const staticLightHelper = new THREE.DirectionalLightHelper(staticLight);
// scene.add(staticLightHelper);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function rotate() {
    sprite.visible = true;
    requestAnimationFrame(rotate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
}

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'r') {
        const id = requestAnimationFrame(animate);
        cancelAnimationFrame(id);
        rotate();
    }
});

animate();
