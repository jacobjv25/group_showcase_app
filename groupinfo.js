exports.people=function(){
var group=[];
var ahkillah,jake,hue,erik;
group.push(ahkillah=new BuildPerson('Ahkillah','Ahkillah enjoys reading, writing, and listening to music.','../assets/images/ahkillah_feather.png'));
group.push(jake=new BuildPerson('Jake','Jake spends his days learning the ways of software engineering and his nights fighting crime with dance battles','../assets/images/ryanfavicon.jpg'));
group.push(hue=new BuildPerson('Hue','Hue spent his adolesence mastering tricks with the soccer ball. They have become one with each other.','../assets/images/hue_soccer_ball.jpg'));
group.push(erik=new BuildPerson('Erik','I"m in love with the junction of function and design, I always try to mix some reason with my rhymes','../assets/images/Erik_Nelson_headshot.jpg'));
return group;
}


function BuildPerson(name,bio,url){
  this.name=name;
  this.bio=bio;
  this.url=url;
}
