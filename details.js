
var BigImage = document.getElementById('BigImage');
        var smallImg = document.getElementsByClassName('smallImage');

        smallImage[0].onclick = function(){
            BigImage.src = smallImage[0].src;
        }
        smallImage[1].onclick = function(){
            BigImage.src = smallImage[1].src;
        }
        smallImage[2].onclick = function(){
            BigImage.src = smallImage[2].src;
        }