module objects {
    export class Obstacle extends objects.GameObject {
      // PRIVATE INSTANCE VARIABLES
      // PUBLIC PROPERTIES
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager, "obstacle");
  
        this.Start();
      }
      
      // PRIVATE METHODS
      private _reset():void {
        this.y = -this.height;
        this.x = (Math.random() * (640-this.width))+this.halfWidth;
        this.verticalSpeed = (Math.random() * 4) + 5;
        this.horizontalSpeed = (Math.random() * 3) -2;
      }
  
      private _checkBounds():void {
        if(this.y >= 600 + this.height) {
          this._reset();
        }
      }

      public Reset(): void {
        this._reset();
      }
  
      // PUBLIC METHODS
      public Start():void {
        this._reset();
      }
  
      private _updatePosition():void {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.position.x =this.x;
        this.position.y = this.y;
      }
  
      public Update():void {
        this._updatePosition();
        this._checkBounds();
      }
    }
  }