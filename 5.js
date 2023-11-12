var arr = [
    {
        dp: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
        story: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
        story: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
        story: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
        story: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"
    },
]
var storiyan =  document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML=clutter
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

setTimeout(function(){

    document.querySelector("#full-screen").style.display = "none"
},3000)


})

