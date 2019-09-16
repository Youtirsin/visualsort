$(function () {
    $('#value button').eq(0).click(main);
    $('#value input').keydown(function (e) {
        if (e.keyCode == 13) {
            main();
        }
    });
    $('#value button').eq(1).click(function (e) {
        sort_();
    });
});

function get_scale(){
    var value = $('#value input').val().split(' ');
    var nums = [];
    for (var i = 0; i < value.length; i++) {
        nums.push(value[i] - 0);
    }
    nums.sort(function(a,b){
        return a-b;
    });
    var max=nums[nums.length-1];
    return 500/max;
};

function main() {
    var value = $('#value input').val().split(' ');
    var nums = [];
    for (var i = 0; i < value.length; i++) {
        nums.push(value[i] - 0);
    }
    
    $('#container').html('');
    for (var i = 0; i < nums.length; i++) {
        $('#container').append('<div>' + nums[i] + '</div>');
    }
    var scale=get_scale();
    for (var i = 0; i < nums.length; i++) {
        $('#container div').eq(i).css({
            'height': nums[i]*scale
        });
    }
};

function sort_() {
    var value = $('#value input').val().split(' ');
    var nums = [];
    for (var i = 0; i < value.length; i++) {
        nums.push(value[i] - 0);
    }
    var sorted_nums=[];
    for(var i=0;i<nums.length;i++){
        sorted_nums.push(nums[i]);
    }
    sorted_nums.sort(function(a,b){
        return a-b;
    });
    console.log(sorted_nums);
    
    for(var i=0;i<nums.length;i++){
        if(sorted_nums[i]!=nums[i]){
            transform_(i,sorted_nums[i]);
        }
    }
};

function transform_(index,num){
    var div_=$('#container div').eq(index);
    var scale=get_scale();
    div_.animate({
        'height':num*scale
    },500,'linear',function(){
        div_.text(num);
    });
};
/* 1 5 3 2 4 7 */
