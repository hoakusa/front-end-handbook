var ResposiveScroll = {
	scrollBottom: function(start,finish, speed){ 
		var animation, current;
		
		(function Scroll_Botom(){
			animation = requestAnimationFrame( Scroll_Botom );
			current = window.scrollY;
			
			if(current >= finish){
			 
				if(current === start){
					window.scrollTo(0, finish);
				}
				
				ResposiveScroll.clearTime(animation);
				
			}else{
				if(start <= current){
					start =  start + speed;
					window.scrollTo(0, start);
				}
			}
		})();
	},
	scrollTop: function(start,finish, speed){
		var animation, current, position, current_speed;
		
		(function Scroll_Top(){
		
			animation = requestAnimationFrame( Scroll_Top );
			current = window.scrollY;
			position = finish - current;
			
			if(current < finish || start < current){
			
				ResposiveScroll.clearTime(animation);
				
			}else{
			
				if(start >= current){
				
					start =  start - speed;
					window.scrollTo(0, start);
					current_speed = parseInt('-' + speed, 10);
					
					if(position >= current_speed || current === start){
						window.scrollTo(0, finish);
					}
				}
			} 
		})();
	},
	clearTime: function(animation){
		window.cancelAnimationFrame(animation);
	}
};