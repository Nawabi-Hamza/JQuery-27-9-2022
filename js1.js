

$('button').click(()=>{

    // $('#out').load('./tryjs.html' , ()=>{
    //     alert('data loaded succesfuly')
    // })

    // particular part in anoter page
    // $('#out').load('./tryjs.html p' , function(responseTxt,statusTxt,xhr){
    //     console.log(xhr)
    //     if(statusTxt == 'success'){
    //         alert('successfuly done')
    //     }
    //     else if(statusTxt == 'error'){
    //         alert('somethis went wrong ' + xhr.status)
    //     }
    // })

    $.get('tryjs.html' , function(data){
        $('#out').html(data)
    })




})
