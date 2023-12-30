// const cards = document.querySelectorAll('.card');
// const observer = new IntersectionObserver( entries => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle("show",entry.isIntersecting)
//         console.log("hello")
//         })
// },
// {
//     threshold: 1
// }
// )
// cards.forEach( card => {
//     observer.observe(card)
//     console.log("hello")
// })
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  
let observer = new IntersectionObserver(()=>{
    console.log("observing")
}, options);
let target = document.querySelectorAll(".item");
target.forEach(entry=>{
    observer.observe(entry);
    console.log(entry);
})

