let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer();
let cGeo = new THREE.BoxGeometry(1,1,1);
let cMat = new THREE.MeshBasicMaterial({color:0xff0000});
let cMesh = new THREE.Mesh(cGeo, cMat);
scene.add(cMesh);
let planeGeo = new THREE.PlaneGeometry(100,100);
let planeMesh = new THREE.Mesh(planeGeo, new
THREE.MeshBasicMaterial({color:0xffffff}));
planeMesh.rotation.x -= Math.PI/2;
planeMesh.position.y -= 0.5;
scene.add(planeMesh);
cam.position.z += 5;
scene.background = new THREE.Color(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.body.onkeydown = function(evt){
    if(evt.key == 'a'){
    cam.position.x += 0.03;
    }
    else if(evt.key == 'd'){
    cam.position.x -= 0.03;
    }
    else if(evt.key == 'w'){
    cam.position.y += 0.03;
    }
    else if(evt.key == 's'){
    cam.position.y -= 0.03;
    }
};

let keyboard=[];
document.body.onkeydown = function(evt){
 keyboard[evt.key] = true;
};
document.body.onkeyup = function(evt){
 keyboard[evt.key] = false;
}
function proses_keyboard(){
 if(keyboard['a']){
 cam.position.x += 0.03;
 }
 else if(keyboard['d']){
 cam.position.x -= 0.03;
 }
 else if(keyboard['w']){
 cam.position.y += 0.03;
 }
 else if(keyboard['s']){
 cam.position.y -= 0.03;
 }
}


function update(){
 renderer.render(scene,cam);
 requestAnimationFrame(update);
}
update();


