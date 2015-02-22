//Global THREE JS variables
var scene, renderer, camera;

//Some Debug setup
var cube;

window.onload = function(){
	init()
	render()
}

var init = function(){
	scene = new THREE.Scene()
	camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	var geometry = new THREE.BoxGeometry(1, 1, 1)
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
	cube = new THREE.Mesh(geometry, material)
	scene.add(cube)

	camera.position.z = 5
}

var animate = function(){

}

var render = function(){
	requestAnimationFrame(render);
	animate()
	renderer.render(scene, camera);
}