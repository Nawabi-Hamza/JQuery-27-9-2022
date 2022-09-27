

// $('button').click(()=>{
//     // $('div').children('p:last').css('color','red')
//     $('div').find('b').css('color','blue')
    
// })

    // sibiling 

    
    $('button').click(()=>{
        // $('#re').siblings().css('color' , 'red')
        // $('#re').siblings('b').css('color' , 'red')

        // $('#re').next().css('color' , 'red')
        // $('p').next().css('color' , 'red')
        // $('p').nextAll().css('color' , 'red')
        // $('p').nextUntil('b').css('color' , 'red')

        // $('p').prev().css('color' , 'red')
        // $('h1').prevAll().css('color' , 'red')
        // $('h1').prevUntil('p').css('color' , 'red')

        // $('div').first().css('color' , 'red')
        // $('div').last().css('color' , 'red')

        // $('p').filter('#re').css('color' , 'red')
        // $('p').not('#re').css('color' , 'red')
        
    })

    // AJAX 

    function insert(num){
        $('#inva').val($('#inva').val()+num)
        console.log(num)
    }
    function eql(){
        $('#inva').val(eval($('#inva').val()))
    }
    function cl(){
        $('#inva').val('')
    }
    function del(){
        var value = $('#inva').val();

        $('#inva').val(value.substring(0 , value.length - 1))
    }

