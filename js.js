
var yyy=document.getElementById('xxx');
var context=yyy.getContext("2d");

autoSetCanvasSize(yyy)
/* */
var lastPoint={x:undefined,y:undefined}
listenToUser(yyy)


red.onclick=function(){
  context.strokeStyle='red'

}
blue.onclick=function(){
  context.strokeStyle='blue'

}
yellow.onclick=function(){
  context.strokeStyle='yellow'

}

save.onclick=function(){
  var url=yyy.toDataURL("image/png")
  console.log(url)
  var a=document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'xxxxx'
  a.click()
}

function listenToUser(canvas){
  var lastPoint={x:undefined,y:undefined}
  if(document.body.ontouchstart !==undefined)  {
      canvas.ontouchstart=function(aaa){
      
      var x =aaa.targetTouches[0].clientX
      var y =aaa.targetTouches[0].clientY
      using=true

      if(eraserEnabled){
        context.clearRect(x,y,10,10)
      }else{
        lastPoint={"x":x,"y":y}
      }
    }

    
    canvas.ontouchmove=function(aaa){
      var x =aaa.targetTouches[0].clientX
      var y =aaa.targetTouches[0].clientY
      if(using){
      if(eraserEnabled){
        context.clearRect(x,y,10,10)
      }
      else{
            newPoint={"x":x,"y":y}
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint=newPoint
          }
      }
    }

    }
    canvas.ontouchend=function(aaa){

    }

  }
  


listenToMouse(yyy)
function autoSetCanvasSize(canvas){
  window.onresize=function(){
    var pagewidth=document.documentElement.clientWidth
    var pageHidth=document.documentElement.clientHeight
    canvas.width=pagewidth
    canvas.height=pageHidth
  }
}

eraser.onclick=function(){
  eraserEnabled=true
  actions.className="actionsa"
}
brush.onclick=function(){
  eraserEnabled=false
  actions.className="actions"
}

function listenToMouse(canvas){
  var using=false;

    canvas.onmousedown =function(aaa){
      var x =aaa.clientX
      var y =aaa.clientY
      using=true

      if(eraserEnabled){
        context.clearRect(x,y,10,10)
      }else{
        lastPoint={"x":x,"y":y}
      }
    }
    canvas.onmousemove=function(aaa){
      var x =aaa.clientX
      var y =aaa.clientY
      if(using){
      if(eraserEnabled){
        context.clearRect(x,y,10,10)
      }
      else{
            newPoint={"x":x,"y":y}
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint=newPoint
          }
      }
    }
    canvas.onmouseup=function(aaa){
      using=false
    }
}

function drawCircle(x,y,radius){
  context.beginPath()
  context.fillStyle='red'
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill()
}

function drawLine(x1,y1,x2,y2){
  context.beginPath();
  
  context.moveTo(x1,y1)//起点
  context.lineWidth=2
  context.lineTo(x2,y2)
  context.stroke()
 
}

var using=false
var eraserEnabled=false
