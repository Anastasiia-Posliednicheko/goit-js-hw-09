import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};const o=()=>{localStorage.setItem(l,JSON.stringify(e))},s=()=>{const a=localStorage.getItem(l);a&&(e=JSON.parse(a),t.elements.email.value=e.email||"",t.elements.message.value=e.message||"")};s();t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),o()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem(l),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
