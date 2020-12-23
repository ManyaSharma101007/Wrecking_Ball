class String{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.8, 
			length:300
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.string=Matter.Constraint.create(options)
		World.add(world,this.string)
	}
	display()
	{
		if(this.string.bodyA)
		{
			var point1=this.bodyA.position;
			var point2=this.pointB

			strokeWeight(4);		
			line(point1.x,point1.y,point2.x,point2.y);
		}
	}
}