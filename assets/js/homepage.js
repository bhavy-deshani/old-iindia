document.addEventListener("DOMContentLoaded",function(){const Cdslapi="api/CDSLAPI.aspx";window.Cdslapi=Cdslapi;function getNewsletter(){const year=new Date().getFullYear();fetch("/sourcefiles/newsletter.aspx",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Year:year,Req:"1"}),}).then((response)=>response.text()).then((text)=>{const data=JSON.parse(text);let output="";if(data&&Array.isArray(data.NewsletterDetails)){const latestNewsletters=data.NewsletterDetails.slice(0,2);latestNewsletters.forEach((item)=>{output+=`
                        <div class="Newscls">
                            <div class="issue">
                                <img loading="lazy" src="${item.NLLinkImg}" alt="${item.NLIssueName}" class="img-fluid">
                                <div class="view-btn h-100 w-100">
                                    <button class="btn" onclick="newsPdf('View','${item.NLView}')">View</button>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                <h5 class="m-0">${item.NLIssueName}</h5>
                                <p>${item.NLIssueMonth}</p>
                                <button class="btn btn-two" onclick="newsPdf('Download','${item.NLDownload}')">Download</button>
                            </div>
                        </div>`});const container=document.getElementById("NewsletterContainerhome");if(container)container.innerHTML=output}}).catch(err=>console.error("Newsletter Error:",err))}
window.newsPdf=function(action,filePath){const a=document.createElement('a');a.href="/"+filePath;if(action==="Download"){a.download=filePath.split('/').pop()||"document"}
a.target="_blank";document.body.appendChild(a);a.click();document.body.removeChild(a)};getNewsletter();const canvas=document.getElementById('captchaCanvas');if(canvas){const ctx=canvas.getContext('2d');function generateCaptcha(){ctx.clearRect(0,0,canvas.width,canvas.height);const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';let captchaText='';const length=5+Math.floor(Math.random()*2);for(let i=0;i<length;i++){captchaText+=chars.charAt(Math.floor(Math.random()*chars.length))}
canvas.dataset.captchaText=captchaText;ctx.fillStyle='#e6e6e6';for(let i=0;i<50;i++){ctx.fillRect(Math.random()*canvas.width,Math.random()*canvas.height,1.5,1.5)}
const charWidth=canvas.width/(length+1);for(let i=0;i<captchaText.length;i++){ctx.save();ctx.font=`${24 + Math.floor(Math.random() * 8)}px Arial`;ctx.fillStyle=`rgb(${Math.floor(Math.random() * 100)}, 0, 0)`;ctx.translate(charWidth*(i+0.5),35);ctx.rotate((-10+Math.random()*20)*Math.PI/180);ctx.fillText(captchaText[i],-10,0);ctx.restore()}}
generateCaptcha();document.getElementById('refreshCaptcha')?.addEventListener('click',()=>{generateCaptcha();document.getElementById('captchaInput').value=''});document.getElementById('audioCaptcha')?.addEventListener('click',()=>{const code=canvas.dataset.captchaText||'';if(!code){return;}if(!('speechSynthesis' in window)){alert('Audio CAPTCHA is not supported in this browser.');return;}window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance('Audio CAPTCHA: '+code.split('').map(ch=>{if(/[0-9]/.test(ch)){return 'digit '+ch;}if(/[A-Z]/.test(ch)){return 'capital '+ch;}return 'small '+ch;}).join(', ')+'.');utterance.rate=0.9;window.speechSynthesis.speak(utterance);});
document.getElementById('subscribe')?.addEventListener('submit',async function(e){
  e.preventDefault();
  const nameEl=document.getElementById('namesu');
  const emailEl=document.getElementById('emailsu');
  const captchaInput=document.getElementById('captchaInput');
  // Clear previous messages
  const oldMsg=this.querySelector('.form-response-msg');if(oldMsg)oldMsg.remove();
  // Validate name
  if(!nameEl.value.trim()){nameEl.classList.add('is-invalid');return;}else{nameEl.classList.remove('is-invalid');}
  // Validate email
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailEl.value.trim()||!emailRegex.test(emailEl.value.trim())){emailEl.classList.add('is-invalid');return;}else{emailEl.classList.remove('is-invalid');}
  // Validate captcha
  if(captchaInput.value.trim()!==canvas.dataset.captchaText){
    captchaInput.classList.add('is-invalid');captchaInput.value='';generateCaptcha();
    const errDiv=document.createElement('div');errDiv.className='text-danger small mt-1 form-response-msg';
    errDiv.textContent='Incorrect CAPTCHA. Please enter the new code shown.';
    this.appendChild(errDiv);return;
  }else{captchaInput.classList.remove('is-invalid');}
  // Check API URL configured
  if(!window.Cdslapi){
    console.error('Cdslapi is not defined.');
    const errDiv=document.createElement('div');errDiv.className='text-danger small mt-1 form-response-msg';
    errDiv.textContent='Configuration error. Please try again later.';
    this.appendChild(errDiv);return;
  }
  const responseMsg=document.createElement('div');responseMsg.className='mt-2 small fw-semibold form-response-msg';
  try{
    const response=await fetch(window.Cdslapi,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({Name:nameEl.value.trim(),Email:emailEl.value.trim(),Type:'newslettersubscribe',Mode:'DATASAVE',Mobile:'',PinCode:'',SaveInd:'0'}),
    });
    if(response.ok){
      responseMsg.textContent='You have subscribed successfully!';responseMsg.style.color='#28a745';
      this.reset();generateCaptcha();
    }else{
      responseMsg.textContent='Something went wrong ('+response.status+'). Please try again.';responseMsg.style.color='#dc3545';
    }
    this.appendChild(responseMsg);
  }catch(error){
    console.error('Subscription Error:',error);
    responseMsg.textContent='Network error. Please check your connection and try again.';responseMsg.style.color='#dc3545';
    this.appendChild(responseMsg);
  }
});}
const cursor=document.createElement("div");cursor.classList.add("cursor");document.body.appendChild(cursor);document.addEventListener("mousemove",(e)=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`});document.addEventListener("click",(e)=>{let effect=document.createElement("div");effect.classList.add("click-effect");effect.style.left=`${e.clientX - 25}px`;effect.style.top=`${e.clientY - 25}px`;document.body.appendChild(effect);setTimeout(()=>effect.remove(),500)});new Swiper('.slider-active',{slidesPerView:1,loop:!0,effect:'fade',autoplay:{delay:8000,disableOnInteraction:!1},navigation:{nextEl:'.slider-button-next',prevEl:'.slider-button-prev'},});new Swiper('.trusted-video-slider',{slidesPerView:1,spaceBetween:24,loop:!0,pagination:{el:'.trusted-pagination',clickable:!0},navigation:{nextEl:'.trusted-next',prevEl:'.trusted-prev'},breakpoints:{576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}},});new Swiper('.trusted-grid-slider',{slidesPerView:1,spaceBetween:30,loop:!0,effect:'fade',fadeEffect:{crossFade:!0},navigation:{nextEl:'.tg-next',prevEl:'.tg-prev'},pagination:{el:'.tg-pagination',clickable:!0},autoHeight:!0,});const videoCaptionMap={
    'assets/img/video/video14.mp4':'assets/captions/video14.vtt',
    'assets/img/video/video1.mp4':'assets/captions/video1.vtt',
    'assets/img/video/video6.mp4':'assets/captions/video6.vtt',
    'assets/img/video/video8.mp4':'assets/captions/video8.vtt',
    'assets/img/video/video10.mp4':'assets/captions/video10.vtt',
    'assets/img/video/video13.mp4':'assets/captions/video13.vtt',
    'assets/img/video/video12.mp4':'assets/captions/video12.vtt',
    'assets/img/video/video11.mp4':'assets/captions/video11.vtt',
    'assets/img/video/video9.mp4':'assets/captions/video9.vtt'
};window.openVideoModal=function(url){const modal=document.getElementById('videoPopup');const player=document.getElementById('popupPlayer');const captions=document.getElementById('popupPlayerCaptions');if(modal&&player){const captionSrc=videoCaptionMap[url]||'';if(captions){if(captionSrc){captions.setAttribute('src',captionSrc)}else{captions.removeAttribute('src')}}modal.classList.add('active');player.src=url;player.load();player.play().catch(()=>{});}};window.closeVideoModal=function(){const modal=document.getElementById('videoPopup');const player=document.getElementById('popupPlayer');const captions=document.getElementById('popupPlayerCaptions');if(modal&&player){modal.classList.remove('active');player.pause();player.removeAttribute('src');player.load();if(captions){captions.removeAttribute('src')}}};document.body.addEventListener('click',function(e){const card=e.target.closest('.video-story-card');if(card){const videoUrl=card.getAttribute('data-video');if(videoUrl)openVideoModal(videoUrl);}});const vModal=document.getElementById('videoPopup');vModal?.addEventListener('click',(e)=>{if(e.target===vModal)closeVideoModal();});var popupElement=document.getElementById('eventPopup');if(popupElement){var myModal=new bootstrap.Modal(popupElement,{keyboard:!1});myModal.show()}})
