var data=[];

// getdata("pizza")
function getdata(meal){
    var xhr = new XMLHttpRequest()


xhr.open( 'GET' , `https://forkify-api.herokuapp.com/api/search?q=${meal}` );

xhr.send()

xhr.addEventListener('readystatechange' , function(){
    if( xhr.readyState == 4){
        data = JSON.parse(xhr.response).recipes
        displaydata();
    }
})

}
getdata("pizza")


var query = document.getElementById('list')

query.addEventListener('click',function(e){
    meal=e.target.value;
    getdata(meal)
})


function displaydata(){
    cartona = ``
    for(var i =0; i< data.length; i++){

        cartona+=`
        <div class="col-md-4 g-4">
        <div class="item" >
            <img src="${data[i].image_url}" alt="" class="w-100" height="200">
            <h4>${data[i].title}</h4>
            <a href="${data[i].source_url}" class="btn btn-primary">source</a>
        </div>
    </div>

        `
    }
    document.getElementById('rowdata').innerHTML = cartona;
}
