class Tree{

        constructor(x, y, width, height, angle) {
            var options = {
                isStatic:true 
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image = loadImage("tree.png");
            World.add(world, this.body);
          }
          display(){
            
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            
          }
    }