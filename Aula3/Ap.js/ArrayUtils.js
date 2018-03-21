var array = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    max: function (array) {
        var max = Number.NEGATIVE_INFINITY;
        for (a = 0; a < array.length; a++) {
            if (array[a] > max) {
                max = array[a];
            }
        }
        return max;
    },
    min: function (array) {
        var min = Number.POSITIVE_INFINITY;
        for (a = 0; a < array.length; a++) {
            if (array[a] < min) {
                min = array[a];
            }
        }
        return min;
    },
    media: function (array){
         var media = 0;
         
            for (a = 0; a < array.length; a++) {
                 media += array[a];
            }
            media = media/ array.length;
            return media;   
    }
}


module.exports = array;