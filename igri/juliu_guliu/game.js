var geometry = new THREE.BoxGeometry( 0.7, 0.7, 0.7 );
var material = new THREE.MeshPhongMaterial();
var cube = [];
var t = 0;
var x,y;
for ( x=0; x<10; ++x){
    cube[x] = [];
    for ( y=0; y<10; ++y){
        cube[x][y] = new THREE.Mesh( geometry, material );
        cube[x][y].position.set(x-5, 0, y-5);
        scene.add( cube[x][y] );
    }
}


camera.position.set(7, 10, 16);
camera.lookAt(new THREE.Vector3(0,0,0));

var light = new THREE.PointLight( );
var light2 = new THREE.PointLight( );
light.position.set(5,5,9);
light2.position.set(5, 5,-9);
scene.add( light );
scene.add( light2 );

function update() {
    t+=0.9;
	for (x=0;x<10;++x){
        for (y=0;y<10;++y){
            cube[x][y].position.y=Math.cos(t+(x-y)/5);
        }
    }
}

function keyup(key) {
	console.log("Pressed", key);
}
function mouseup() {
	console.log("Mouse clicked at", mouseX, mouseY);
} 