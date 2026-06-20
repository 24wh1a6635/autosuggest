var users=[
{
    "name":"John Doe",
    "gender":"Male",
    "image":"/images/john.png"
},
{
    "name":"Lisa",
    "gender":"Female",
    "image":"/images/eww.jpg"
}
]
var curId=0;
function toggle(){
    curId=(curId+1)%2;
    //image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    //name
    document.getElementById("user-name").innerText=user.name;
    //gender
    document.getElementById("user-gender").innerText=user.gender;

}