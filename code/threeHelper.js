function threeHelp(sceneName) {
    var about = {
        Version: 0.1,
        Author: "Chaiyawat Nunes",
        Created: "Spring 2015",
        Updated: "Spring 2015"
    };
    if(sceneName) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer();
        return this;
    } else {
        return about;
    }
};

threeHelp.prototype = {
    // Create scene
    createScene: function() {
        this.renderer.setSize(this.width, this.height);
        document.body.appendChild(this.renderer.domElement);
    },
    
    // Create box in scene
    box: function(x, y, z, colorHex) {
        var geometry = new THREE.BoxGeometry(x, y, z);
        var material = new THREE.MeshBasicMaterial({color: colorHex})
        var cube = new THREE.mesh(geometry, material);
        this.scene.add(cube);
    },
    
    // Render scene
    renderScene: function() {
        function render() {
            requestAnimationFram(render);
            this.renderer.render(this.scene, this.camera);
        }
        render();
    }
};

threeHelp.box.prototype = {
    //Rotation animation
    animateRot: function(rotX, rotY, rotZ) {
        cube.rotation.x += rotX;
        cube.rotation.y += rotY;
        cube.rotation.z += rotZ;
    }
};