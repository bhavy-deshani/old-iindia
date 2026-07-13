var data={chatinit:{title:["Myself <b> Chanakya</b>, I am here to assist you today 🌟🚀 <br>  I can help you with the queries relating to the products dealt by <b>Integrated</b>.","Choose the product for which you are seeking information from me.",],options:["Fixed Income Securities","Mutual Funds","Demat A/c","Trading A/c","NPS A/c","Initial Public Offerings (IPO)","Life Insurance","Health Insurance",'<a href="https://www.integratedindia.in/faqs-frequently-asked-questions.html" target="_blank">Know More!</a>',{text:"Call me"},],},"Fixed Income Securities":{title:[],options:[{text:'<a href="https://www.integratedindia.in/fixed-deposit-income-option.html" target="_blank">Company Deposits</a>',},{text:'<a href="https://www.integratedindia.in/fixed-deposit-income-option.html#Bondsncds" target="_blank">Bonds & NCDs</a>',},],},"Mutual Funds":{title:["Please click here to know more about"],options:[{text:'<a href="https://www.integratedindia.in/mutual-funds.html" target="_blank">Lumpsum</a>',},{text:'<a href="https://www.integratedindia.in/mutual-funds.html#bestsip" target="_blank">SIP</a>',},],title2:['<a href="https://www.integratedindia.in/caoportfolio/nv2/MEXV/MFExplore.aspx" target="_blank">Click here to Invest Lumpsum/Start SIP</a>',],},"Trading A/c":{title:['Do you want to open your Free Trading A/c? <a href="https://www.integratedindia.in/open-demat-trading-account.html" target="_blank">click  here</a>',],options:[],},"Demat A/c":{title:['Do you want to open your Free Demat A/c?  <a href="https://www.integratedindia.in/open-demat-trading-account.html" target="_blank">click here</a>',],options:[],},"Life Insurance":{title:["Are you interested in taking a Life Insurance proposal.  Can I contact you ? ",],options:[,{text:"Yes "},{text:"Not now"}],},"Not now":{title:["No issues, I will contact you later. "],options:[],},"Health Insurance":{title:["Are you interested in taking a Health Insurance proposal.  Can I contact you ? ",],options:[,{text:"Yes "},{text:"Not now"}],},"NPS A/c":{title:['Do you want to open your NPS A/c? <a href="https://www.integratedindia.in/nps-login.html" target="_blank">click here</a>','Do you want to contribute in Tier I or Tier II A/c ? <a href="https://www.integratedindia.in/nps-login.html" target="_blank">click here</a>','Do you want to start an SIP? <a href="https://www.integratedindia.in/nps-login.html" target="_blank">click here</a>','Do you want to view reports? <a href="https://www.integratedindia.in/nps-login.html" target="_blank">click here</a>',],},"Initial Public Offerings (IPO)":{title:['Do you want me to provide details on current IPO? <a href="https://www.integratedindia.in/initial-public-offering.html" target="_blank"> click here</a>',],},"Main Menu":{title:[""],options:["Fixed Income Securities","Mutual Funds","Demat A/c","Trading A/c","Initial Public Offerings (IPO)","NPS A/c","Life Insurance","Health Insurance",'<a href="https://www.integratedindia.in/faqs-frequently-asked-questions.html" target="_blank">Know More!</a>',{text:"Call me"},],},};document.addEventListener("DOMContentLoaded",function(){return
document.getElementById("init").addEventListener("click",toggleChatBot);document.getElementById("close-chatbot").addEventListener("click",toggleChatBot);const minimizeButton=document.getElementById("minimize-chatbot");const backButton=document.getElementById("back-button");const mainMenu=document.getElementById("main-menu");var cbot=document.getElementById("chat-box");var chatContainer=document.getElementById("test");const chartbot=document.getElementById("init");var historyStack=[];var minimized=!1;var optionsSelected=0;function clearChat(){cbot.innerHTML="";historyStack=[];optionsSelected=0;backButton.style.display="none";mainMenu.style.display="none"}
function toggleChatBot(){if(chatContainer.style.display==="none"||chatContainer.style.display===""){chatContainer.classList.remove("minimized");chatContainer.classList.add("open");minimizeButton.innerHTML='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15.000000pt" height="15.000000pt" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M50 212 c0 -4 25 -32 55 -62 l55 -55 57 57 c31 32 54 61 50 65 -4 4 -30 -15 -57 -42 l-50 -49 -48 47 c-46 46 -62 56 -62 39z"/></g></svg>';minimized=!1;chatContainer.style.display="block";chartbot.style.display="none";document.getElementById("init").innerHTML=`
        <div class="col-md-8 m-auto">
                      <img loading="lazy" src="./assets/images/gallery/chanakya-removebg-preview.png" class="img-fluid" alt="">
                  </div>
                  <div class="text-center me-2">
                  <div class="bg-b fs--2  p-1 px-1 text-white text-b  rounded-2 w-100">
                  <span class="fw-bold">Hi, I am Chanakya</span>
                  </div>
                  </div>
      `;initChat()}else{chatContainer.style.display="none";chartbot.style.display="block";document.getElementById("init").innerHTML=`
         <div class="col-md-8 m-auto">
                      <img loading="lazy" src="./assets/images/gallery/chanakya-removebg-preview.png" class="img-fluid" alt="">
                  </div>
                  <div class="text-center me-2">
                  <div class="bg-b fs--2  p-1 px-1 text-white text-b  rounded-2 w-100">
                  <span class="fw-bold">Hi, I am Chanakya</span>
                  </div>
                  </div>
      `;clearChat()}}
function minimizeChatBot(){if(minimized){chatContainer.classList.remove("minimized");chatContainer.classList.add("open");minimizeButton.innerHTML='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15.000000pt" height="15.000000pt" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M50 212 c0 -4 25 -32 55 -62 l55 -55 57 57 c31 32 54 61 50 65 -4 4 -30 -15 -57 -42 l-50 -49 -48 47 c-46 46 -62 56 -62 39z"/></g></svg>';minimized=!1}else{chatContainer.classList.add("minimized");chatContainer.classList.remove("open");minimizeButton.innerHTML='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="13.000000pt" height="13.000000pt" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M75 170 c-64 -64 -77 -82 -67 -92 11 -11 27 1 82 58 l70 72 70 -72 c55 -57 71 -69 82 -58 10 10 -3 28 -67 92 -44 44 -82 80 -85 80 -3 0 -41 -36 -85 -80z"/></g></svg>';minimized=!0}}
function initChat(){const len1=data.chatinit.title.length;for(let i=0;i<len1;i++){setTimeout(()=>handleChat(data.chatinit.title[i]),i*500)}
setTimeout(()=>showOptions(data.chatinit.options),(len1+1)*500)}
function handleChat(title){var elm=document.createElement("p");elm.innerHTML=title;elm.className="msg";elm.querySelectorAll("a").forEach((link)=>{link.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();window.open(this.href,"_blank")})});cbot.appendChild(elm);handleScroll()}
function showOptions(options){const optionsWrapper=document.createElement("div");optionsWrapper.className="options-wrapper";options.forEach((option)=>{var opt=document.createElement("span");opt.className="opt";if(typeof option==="object"&&option.text){opt.innerHTML=`<div>${option.text}</div>`}else{opt.innerHTML=`<div>${option}</div>`}
opt.querySelectorAll("a").forEach((link)=>{link.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();window.open(this.href,"_blank")})});opt.addEventListener("click",function(){handleOpt.call(this)});optionsWrapper.appendChild(opt)});cbot.appendChild(optionsWrapper);handleScroll()}
var lastptype;function handleOpt(){var str=this.querySelector("a")?this.querySelector("a").textContent:this.textContent.trim();var currentMessages=Array.from(cbot.querySelectorAll(".msg")).map((msg)=>msg.innerHTML);var currentOptions=Array.from(cbot.querySelectorAll(".opt")).map((opt)=>opt.innerHTML);historyStack.push({messages:currentMessages,options:currentOptions});removeOptions();optionsSelected++;if(optionsSelected>=1){backButton.style.display="block";mainMenu.style.display="block"}
var elm=document.createElement("p");elm.className="test";elm.innerHTML=`<span class="rep">${str}</span>`;cbot.appendChild(elm);if(str==="Yes"){handleChat("");showExecutiveInput(lastptype)}else if(str==="Call me"){lastptype=str;handleChat("");showExecutiveInput(lastptype)}else{lastptype=str;var tempObj=data[str];if(tempObj){if(Array.isArray(tempObj)){tempObj.forEach((obj,index)=>{setTimeout(()=>handleResults(obj.title,obj.options,obj.title2),index*1000)})}else{handleResults(tempObj.title,tempObj.options,tempObj.title2)}}else{handleLink(str)}}}
function handleLink(optionText){for(const key in data){if(data[key].options){const found=data[key].options.find((opt)=>opt.text&&opt.text===optionText);if(found){var elm=document.createElement("p");elm.className="test";elm.innerHTML=`<span class="rep">${optionText}</span>`;cbot.appendChild(elm);handleResults(data[key].title,data[key].options,data[key].title2);return}}}}
function handleResults(title,options,title2){if(title&&title.length>0){title.forEach((item,index)=>{setTimeout(()=>handleChat(item),index*500)})}
if(title2){setTimeout(()=>handleChat(title2),500)}
setTimeout(()=>showOptions(options),title.length*500)}
function handleScroll(){setTimeout(()=>{cbot.scrollTop=cbot.scrollHeight},100)}
function removeOptions(){var opts=document.querySelectorAll(".opt");opts.forEach((opt)=>{opt.removeEventListener("click",handleOpt);opt.remove()})}
backButton.addEventListener("click",function(){if(historyStack.length>0){var lastState=historyStack.pop();cbot.innerHTML="";lastState.messages.forEach((message)=>{var elm=document.createElement("p");elm.className="msg";elm.innerHTML=message;cbot.appendChild(elm)});if(historyStack.length===0){backButton.style.display="none"}
if(lastState.options){showOptions(lastState.options.map((optHTML)=>({text:optHTML})))}}});mainMenu.addEventListener("click",function(){clearChat();initChat()});function showExecutiveInput(Ptype){var form=document.createElement("form");form.className="executive-form";form.innerHTML=`
    <div class="row row-cols-1 row-cols-md-2 p-0 overflow-hidden col-12  ">
    <div class="col mb-3">
      <label for="executive-name">Your Name:</label>
      <input required class="form-control" type="text" id="executive-name" name="executive-name">
	  <input type="hidden" id="ptype" name="ptype" value="`+Ptype+`"/>
    </div>
    <div class="col mb-3">
      <label for="executive-contact">Your email:</label>
      <input required class="form-control" type="email" id="executive-email" name="executive-email">
    </div>
    <div class="col mb-3">
      <label for="mobile-nu">Your Mobile Number:</label>
      <input required class="form-control" type="tel" id="mobile-nu" name="mobile-nu">
    </div>
    <div class="col mb-3">
      <label for="City">Your City:</label>
      <input required class="form-control" type="text" id="City" name="City">
    </div>
    <div class="col py-2">
      <button class="bg-b text-white py-1 rounded-2 fw-bold border-0 w-100" id="executive-submit">Submit</button>
    </div>
  </div>
    `;cbot.appendChild(form);handleScroll();form.addEventListener("submit",async function(event){event.preventDefault();const formData=new FormData(form);const name=formData.get("executive-name");const email=formData.get("executive-email");const phone=formData.get("mobile-nu");const city=formData.get("City");if(!validateEmail(email)){alert("Please enter a valid email address.");return}
if(!validatePhone(phone)){alert("Please enter a valid phone number.");return}
const payload={Name:name,Mobile:phone,Email:email,City:city,Ptype:lastptype,Mode:"DATASAVE",Type:"BOTQUERY",SaveInd:"CHANAKYA",};try{const response=await fetch("https://www.integratedindia.in/api/CDSLAPI.aspx",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify(payload),});if(response.ok){alert("Thanks for contacting me, one of our Executive shall get in touch with you on the next working day during office hours.");form.reset()}else{alert("Failed to submit form. Please try again.")}}catch(error){alert("Error submitting form. Please try again.")}})}
function validateEmail(email){const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailPattern.test(email)}
function validatePhone(phone){const phonePattern=/^[0-9]{10}$/;return phonePattern.test(phone)}
minimizeButton.addEventListener("click",minimizeChatBot)})