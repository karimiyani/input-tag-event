const input = document.querySelector("#search-product");

input.addEventListener("change", (e) => {
    console.log(e.target);
});
{/* <input type="text" id="search-product"> */}

input.addEventListener("change", (e) => {
    console.log(e.target.value);
});
//هر مقداری در input بنویسیم انرا نمایش میدهد.

input.addEventListener("input", (e) => {
    console.log(e.target.value);
});
//به صورت انلاین هر ورودی را نمایش میدهد.جزء به جزء