// We need 3 things everytime we use Three.js
// let width = window.innerWidth;
// let height = window.innerHeight;
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#e298ec")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 5
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
     let width = window.innerWidth
     let height = window.innerHeight
     renderer.setSize( width, height )
     camera.aspect = width / height
     camera.updateProjectionMatrix()
 })
 
 // basic kubus
 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0x6d0a28, flatShading: true, metalness: 0, roughness: 1 })
 var kubus = new THREE.Mesh ( geometry, material )
 scene.add( kubus )

//  //kubus 2
//  var geometry = new THREE.BoxGeometry( 1, 1, 1,)
//  var material = new THREE.MeshStandardMaterial( { color: 0x6d0a28, flatShading: true, metalness: 0, roughness: 1 })
//  var kubus2 = new THREE.Mesh ( geometry, material )
//  scene.add( kubus2 )
//  kubus2.position.x = -4.5;
//  kubus2.position.y = -1.0;

//  //kubus 3
//  var geometry = new THREE.BoxGeometry( 1, 1, 1,)
//  var material = new THREE.MeshStandardMaterial( { color: 0x6d0a28, flatShading: true, metalness: 0, roughness: 1 })
//  var kubus3 = new THREE.Mesh ( geometry, material )
//  scene.add( kubus3 )
//  kubus3.position.x = 4.5;
//  kubus3.position.y = 1.0;

 meshX = -10;
        for(var i = 0; i < 3; i++){
            var mesh1 = new THREE.Mesh(geometry, material);
            mesh1.position.x = (Math.random() - 0.5) * 5;
            mesh1.position.y = (Math.random() - 0.5) * 5;
            mesh1.position.z = (Math.random() - 0.5) * 5;
            scene.add(mesh1);
            meshX += 1;
        }
 
 // kerangka cube
 var geometry = new THREE.BoxGeometry( 3, 3, 3)
 var material = new THREE.MeshBasicMaterial( {color: "#7643c8", wireframe: true, transparent: true})
 var kerangkaCube = new THREE.Mesh ( geometry, material )
 scene.add( kerangkaCube )
 
//Banyak kerangka cube
meshY = -10;
        for(var i = 0; i < 3; i++){
            var mesh2 = new THREE.Mesh(geometry, material);
                mesh2.position.x = (Math.random() - 0.5) * 10;
                mesh2.position.y = (Math.random() - 0.5) * 10;
                mesh2.position.z = (Math.random() - 0.5) * 10;
            scene.add(mesh2);
            meshY += 1;
        }

//donat
var geometry = new THREE.TorusGeometry( 0.9, 0.3, 30, 40)
var material = new THREE.MeshBasicMaterial( { color: 0xee6da9, flatShading: true, metalness: 0, roughness: 1 })
var donat1 = new THREE.Mesh ( geometry, material )
scene.add(donat1);

// var geometry = new THREE.TorusGeometry( 0.9, 0.3, 30, 40)
// var material = new THREE.MeshBasicMaterial( { color: 0x7643c8, flatShading: true, metalness: 0, roughness: 1 })
// var donat2 = new THREE.Mesh ( geometry, material )
// scene.add(donat2);
// donat2.position.x = -4.5;
// donat2.position.y = -1.0;

// var geometry = new THREE.TorusGeometry( 0.9, 0.3, 30, 40)
// var material = new THREE.MeshBasicMaterial( { color: 0x7643c8, flatShading: true, metalness: 0, roughness: 1 })
// var donat3 = new THREE.Mesh ( geometry, material )
// scene.add(donat3);
// donat3.position.x = 4.5;
// donat3.position.y = 1.0;

// //Banyak donat
// meshY = -10;
//         for(var i = 0; i < 5; i++){
//             var mesh2 = new THREE.Mesh(geometry, material);
//                 mesh2.position.x = (Math.random() - 0.5) * 10;
//                 mesh2.position.y = (Math.random() - 0.5) * 10;
//                 mesh2.position.z = (Math.random() - 0.5) * 10;
//             scene.add(mesh2);
//             meshY += 1;
//         }

// donat1.position.x = -5.5;
// donat1.position.y = 2.5;
//light donat1
// var directionallight = new THREE.DirectionalLight("#EBF5FB", 1);
// scene.add(directionallight);

//material lambert
// var materiallambert = new THREE.MeshLambertMaterial({ color:"#f4d03f", emissive: "#f4d03f", emissivenIntensity:2.5,})

 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
 scene.add( ambientLight );
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );

//  var directionallight = new THREE.DirectionalLight("#EBF5FB", 1);
// scene.add(directionallight);

//  //tektur
// const grassTexture = new THREE.TextureLoader().load('./assets/grass.jpg');
// const brickTexture = new THREE.TextureLoader().load('./assets/brick.png');
// const material = new THREE.MeshPhongMaterial(
//  {
//  map: grassTexture,
//  shininess: 100,
//  bumpMap: brickTexture,
//  bumpScale: 0.01,
//  }
// );
 
 var render = function(){
    requestAnimationFrame(render);

    renderer.render(scene,camera);
};

document.body.onmousedown = function(mouse){
    kubus.rotation.x += 1.1;
    kubus.rotation.y += 1.1;

    // kubus2.rotation.x -= 0.1;
    // kubus2.rotation.y -= 0.1;
    // mesh1.rotation.x +=0.1;
    // mesh1.rotation.y +=0.1;
    // mesh1.rotation.x += Math.random();
    // mesh1.rotation.y += Math.random();
};

// const control = new THREE.OrbitControls(camera, renderer.domElement);

 
 function animate() {
     requestAnimationFrame( animate )
    //  cube.rotation.x += 0.04;
    //  cube.rotation.y += 0.04;
    // kubus2.rotation.x -= 0.01;
    // kubus2.rotation.y -= 0.01;
    // kubus3.rotation.y -= 0.01;

    donat1.rotation.x -=0.01;
    donat1.rotation.y -=0.01;
    donat1.rotation.z -=0.02;

    // donat2.rotation.x +=0.01;
    // donat2.rotation.y +=0.01;
    // donat2.rotation.z +=0.02;

    // donat3.rotation.x +=0.01;
    //donat3.rotation.y +=0.01;
    //donat3.rotation.z +=0.02;

    // kubus3.rotation.y -= 0.01;

    kerangkaCube.rotation.x -= 0.02;
    kerangkaCube.rotation.y -= 0.02;
    kerangkaCube.rotation.z -= 0.02;
    renderer.render( scene, camera )
 }
 animate()

// function update(){
//     renderer.render(scene,cam);
//     requestAnimationFrame(update);
//  }
// update();