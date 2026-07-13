const chatbox=document.querySelector(".chatbox");const chatbot=document.querySelector(".chatbot");const chatbotIcon=document.querySelector(".chatbot-icon");const closeButton=document.querySelector(".chat-close");const minimizeButton=document.querySelector(".btn-minimize");const maximizeButton=document.querySelector(".btn-maximize");setTimeout(()=>{const chatbotIcon=document.querySelector(".chatbot-icon");const chatbot=document.querySelector(".chatbot");if(chatbotIcon){chatbotIcon.setAttribute("tabindex","0");chatbotIcon.setAttribute("role","button");chatbotIcon.setAttribute("aria-label","Open chatbot");chatbotIcon.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();chatbot.classList.toggle("hidden");chatbotIcon.classList.add("hidden")}})}},1000);const chatbotOptions={"Fixed Income Securities":{response:"",submenu:[],actions:[{label:"Company Deposits",link:"../fixed-deposit-income-option.html"},{label:"Bonds & NCDs",link:"../fixed-deposit-income-option.html#ncd"},],},"Mutual Funds":{response:`Please click here to know more about <br />
         <a href="https://www.integratedindia.in/caoportfolio/nv2/MEXV/MFExplore.aspx" target="_blank">Click here to Invest Lumpsum/Start SIP</a>`,actions:[{label:"Lumpsum",link:"../mutual-funds.html"},{label:"SIP",link:"../mutual-funds.html"},],},"Demat A/c":{response:"Do you want to open your Free Demat A/c?",submenu:[],actions:[{label:"Click Here",link:"open-demat-trading-account.html"}],},"Trading A/c":{response:"Do you want to open your Free Trading A/c?",submenu:[],actions:[{label:"Click Here",link:"open-demat-trading-account.html"}],},"NPS A/c":{response:[`Do you want to open your NPS A/c? <a href="../nps-login.html">click here</a>`,`Do you want to contribute in Tier I or Tier II A/c? <a href="../nps-login.html">click here</a>`,`Do you want to start an SIP? <a href="../nps-login.html">click here</a>`,`Do you want to view reports? <a href="../nps-login.html">click here</a>`,],submenu:[],},"Initial Public Offerings (IPO)":{response:[`Do you want me to provide details on current IPO? click here <a href="../initial-public-offering.html">click here</a>`,],submenu:[],},"Life Insurance":{response:"Are you interested in taking a Life Insurance proposal. Can I contact you ?",submenu:["Yes","Not now"],},"Health Insurance":{response:"Are you interested in taking a Health Insurance proposal. Can I contact you ?",submenu:["Yes","Not now"],},"Know More!":{response:"",actions:[{label:"Know More!",link:"../faqs-frequently-asked-questions.html"}],},"Not now":{response:"No issues, I will contact you later.",submenu:[],},Yes:{response:`
      <form method="POST" autocomplete="off" id="frmContactus" class="needs-validation" novalidate>
    <label class="mb-2">Please fill out the form below, and we will get back to you shortly:</label>
		<div class="row row-cols-1 row-cols-md-2">
			<div class="col">
				<label for="name" class="form-label">Name</label>
				<input type="text" class="form-control" id="namech" name="name" placeholder="Enter your name" required />
				<div class="invalid-feedback">Please enter your name.</div>
			</div>
			<div class="col">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" id="emailch" name="email" placeholder="Enter your email"
				required />
				<div class="invalid-feedback">Please enter a valid email address.</div>
			</div>
            </div>
			<div class="">
				<label for="phone" class="form-label d-block">Phone</label>
				<input type="tel" class="form-control" id="phonech" name="phone" placeholder="Enter your phone number"
				required />
				<div class="invalid-feedback">Please enter a valid phone number.</div>
			</div>
		<div class="mb-4">
			<label for="query" class="form-label">Message</label>
			<textarea class="form-control" id="query" name="querych" rows="1" placeholder="Enter your message"
				required></textarea>
			<div class="invalid-feedback">Please provide a message.</div>
		</div>
		<button type="submit" class="btn btn-primary w-100">Send Message</button>
		<div id="ResultContainer" class="mt-3"></div>
	</form>
      `,},"Call Me":{response:`
	<form method="POST" autocomplete="off" id="frmContactus" class="needs-validation" novalidate>
    <label class="mb-2">Please fill out the form below, and we will get back to you shortly:</label>
		<div class="row row-cols-1 row-cols-md-2">
			<div class="col">
				<label for="name" class="form-label">Name</label>
				<input type="text" class="form-control" id="namech" name="name" placeholder="Enter your name" required />
				<div class="invalid-feedback">Please enter your name.</div>
			</div>
			<div class="col">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" id="emailch" name="email" placeholder="Enter your email"
				required />
				<div class="invalid-feedback">Please enter a valid email address.</div>
			</div>
            </div>
			<div class="">
				<label for="phone" class="form-label d-block">Phone</label>
				<input type="tel" class="form-control" id="phonech" name="phone" placeholder="Enter your phone number"
				required />
				<div class="invalid-feedback">Please enter a valid phone number.</div>
			</div>
		<div class="mb-4">
			<label for="query" class="form-label">Message</label>
			<textarea class="form-control" id="query" name="querych" rows="1" placeholder="Enter your message"
				required></textarea>
			<div class="invalid-feedback">Please provide a message.</div>
		</div>
		<button type="submit" class="btn btn-primary w-100">Send Message</button>
		<div id="ResultContainer" class="mt-3"></div>
	</form>
  `,},};const createChatMessage=(message,className)=>{const chat=document.createElement("li");chat.classList.add("chat",className);if(message.trim().startsWith("<")&&message.trim().endsWith(">")){chat.innerHTML=message}else{chat.innerHTML=`<p>${message}</p>`}
chatbox.appendChild(chat);chatbox.scrollTop=chatbox.scrollHeight};const createChatButtons=(options,showNavigation=!1)=>{const buttonContainer=document.createElement("div");buttonContainer.classList.add("button-container");options.forEach((option)=>{const button=document.createElement("button");button.textContent=option;button.addEventListener("click",()=>handleOptionClick(option));buttonContainer.appendChild(button)});chatbox.appendChild(buttonContainer);chatbox.scrollTop=chatbox.scrollHeight;if(showNavigation){const navigationContainer=document.createElement("div");navigationContainer.classList.add("navigation-container");const mainMenuButton=document.createElement("button");mainMenuButton.textContent="Main Menu";mainMenuButton.addEventListener("click",handleMainMenuClick);navigationContainer.appendChild(mainMenuButton);chatbox.appendChild(navigationContainer)}};const createActionButtons=(actions)=>{if(!actions||actions.length===0)return;const actionContainer=document.createElement("div");actionContainer.classList.add("button-container");actions.forEach((action)=>{const actionButton=document.createElement("button");actionButton.textContent=action.label;actionButton.addEventListener("click",()=>{window.open(action.link,"_blank")});actionContainer.appendChild(actionButton)});chatbox.appendChild(actionContainer);chatbox.scrollTop=chatbox.scrollHeight};const handleOptionClick=(option)=>{createChatMessage(option,"outgoing");setTimeout(()=>{document.querySelectorAll(".button-container").forEach((container)=>container.remove());document.querySelectorAll(".navigation-container").forEach((container)=>container.remove());document.querySelectorAll(".action-container").forEach((container)=>container.remove());if(chatbotOptions[option]){const response=chatbotOptions[option].response;const submenu=chatbotOptions[option].submenu;const actions=chatbotOptions[option].actions;if(Array.isArray(response)){response.forEach((res)=>createChatMessage(res,"incoming"))}else{createChatMessage(response,"incoming")}
if(option==="Know More!"){if(actions&&actions.length>0){window.open(actions[0].link,"_blank");setTimeout(handleMainMenuClick,500);return}}
if(actions&&actions.length>0){createActionButtons(actions)}
if(submenu&&submenu.length>0){createChatButtons(submenu)}else{createChatButtons([],!0)}}else{createChatMessage(`You selected "${option}". How can I assist further?`,"incoming");createChatButtons([],!0)}},500)};const handleMainMenuClick=()=>{chatbox.innerHTML="";createChatMessage(`
      <li class="chat incoming">
        <p>Myself Chanakya, I am here to assist you today 🌟🚀 I can help you with the queries relating to the products dealt by Integrated.</p>
      </li>
      <li class="chat incoming">
        <p>Choose the product for which you are seeking information from me.</p>
      </li>
    `);const mainMenuOptions=Object.keys(chatbotOptions).filter((key)=>key!=="Yes"&&key!=="Not now");createChatButtons(mainMenuOptions)};chatbotIcon.addEventListener("click",()=>{chatbot.classList.toggle("hidden");chatbotIcon.classList.add("hidden")});closeButton.addEventListener("click",()=>{chatbot.classList.add("hidden");chatbotIcon.classList.remove("hidden");handleMainMenuClick()});minimizeButton.addEventListener("click",()=>{chatbot.classList.add("minimized");maximizeButton.classList.remove("hidden");minimizeButton.classList.add("hidden")});maximizeButton.addEventListener("click",()=>{chatbot.classList.remove("minimized");maximizeButton.classList.add("hidden");minimizeButton.classList.remove("hidden")});handleMainMenuClick()