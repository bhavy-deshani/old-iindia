function updateText() {
  var languageSelect = document.getElementById("language-select");
  var selectedLanguage = languageSelect.value;
  var textContainer = document.getElementById("text-container");
  var text = "";

  switch (selectedLanguage) {
    case "English":
      text = `
          <p class='fw-bold '>wish to apply for opening of NPS Account. I understand and agree with the following facts :</p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>Excepting on certain situations and conditions, I can withdraw my Corpus only on completing the age of 60 years.</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>At the time of Superannuation, if the corpus is more than Rs.5.00 Lakhs, minimum 40% need to be used for purchasing Annuity for providing Pension.</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  I am contributing in the form of Savings to accumulate the Corpus and further for Pension.</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  My contribution is subject to market risk as per my Investment Choice</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  The guidelines are subject to regulatory changes from time to time.
                  </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="but rounded-4 border-0 text-center" value="I Agree" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Bengali":
      text = `
          <p class='fw-bold '>আমি NPS অ্যাকাউন্ট খোলার জন্য আবেদন করতে চাই। আমি বুঝতে পারি এবং নিম্নলিখিত তথ্যগুলির সাথে একমত :</p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  কিছু নির্দিষ্ট অবস্থা ও শর্ত ব্যতীত, আমি 60 বছর বয়স পূর্ণ হলেই আমার এই  বিষয় প্রত্যাহার করতে পারি ।</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>সুপারঅ্যানুয়েশনের সময়, এই  বিষয়ের লেখাসংকলন যদি 5.00 লক্ষ টাকার বেশি হয়, তাহলে পেনশন প্রদানের জন্য বার্ষিকী ক্রয়ের জন্য ন্যূনতম 40% ব্যবহার করতে হবে ।</p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  আমি এই  বিষয়ের লেখাসংকলন জমা করতে এবং পেনশনের জন্য সঞ্চয় আকারে অবদান রাখছি ।
                </p>  
               </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  আমার অবদান আমার বিনিয়োগ পছন্দ অনুযায়ী বাজার ঝুঁকি সাপেক্ষে ।
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  নির্দেশিকা সময়ে সময়ে নিয়ন্ত্রক পরিবর্তন সাপেক্ষে ।
                  </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="but rounded-4 border-0 text-center" value="আমি রাজি ।" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Gujarathi":
      text = `
          <p class='fw-bold '>હું NPS એકાઉન્ટ ખોલવા માટે અરજી કરવા માંગુ છું. હું નીચેની હકીકતો સમજું છું અને તેની સાથે સંમત છું:
          </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  અમુક પરિસ્થિતિઓ અને શરતોને બાદ કરતા, હું ૬૦ વર્ષની ઉંમર થયા પછીજ મારી પુંજી પાછી મેળવી શકું છું.
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
              <p>
                  નિવૃત્તિ સમયે, જો પુંજી રૂ. 5 લાખથી વધુ હોય, તો પેન્શન લેવા માટે ઓછામાં ઓછા 40% ની એન્યુઈટી ખરીદવી જરૂરી છે.
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  હું પુંજી ભેગી કરવા અને પછી પેન્શન મેળવા માટે બચતના રૂપમાં યોગદાન આપું છું.
                </p>  
               </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  મારું યોગદાન મારી રોકાણ પસંદગી મુજબ બજારના જોખમને આધીન છે
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  માર્ગદર્શિકા સમયાંતરે નિયમનકારી ફેરફારોને આધીન છે
                  </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="હું સહમત છુ" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Hindi":
      text = `
          <p class='fw-bold '>मैं एनपीएस खाता खोलने के लिए आवेदन करना चाहता हूं। मैं निम्नलिखित तथ्यों को समझता हूं और उनसे सहमत हूं
              </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  कुछ परिस्थियों और शर्तों को छोड़कर, मैं 60 वर्ष की आयु पूरी करने पर ही अपनी राशि निकाल सकता हूं।
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
              <p>
                 पेंशन अवधि पूरी होने के समय यदि राशि 5.00 लाख रुपये से अधिक है, तो पेंशन लेने के लिए कम से कम 40% राशि का प्रयोग करने की आवश्यकता है
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  में पेंशन लेने के लिए बचत के रूप में योगदान दे रहा हूं
                </p>  
               </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  मेरा निवेश मेरी सहमती के अनुसार हैं, मेरा योगदान बाजार जोखिमों के अधीन हैं
              </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  दिशा निर्देशों के अनुसार यह समय-समय पर परिवर्तनों के अधीन हैं।
                  </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="मैं सहमत हूं" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Kannada":
      text = `
          <p class='fw-bold '>ನಾನು NPS ಖಾತೆ ತೆರೆಯಲು ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತೇನೆ. ನಾನು ಈ ಕೆಳಗಿನ ಸಂಗತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ಒಪ್ಪುತ್ತೇನೆ:
              </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  ಕೆಲವು ಸನ್ನಿವೇಶಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ನಾನು 60 ವರ್ಷ ವಯಸ್ಸನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ಮಾತ್ರ ನನ್ನ ಸಂಗ್ರಹವಾದ ಹಣ ಹಿಂಪಡೆಯಬಹುದು.                        </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
              <p>
                  ನಿವೃತ್ತಿಯ ಸಮಯದಲ್ಲಿ, ಸಂಗ್ರಹವಾದ ಹಣ ರೂ.5.00 ಲಕ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚಿದ್ದರೆ, ಪಿಂಚಣಿ ನೀಡಲು ವರ್ಷಾಶನವನ್ನು ಖರೀದಿಸಲು ಕನಿಷ್ಠ 40% ಬಳಸಬೇಕಾಗುತ್ತದೆ.                        </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  ನಾನು ಸಂಗ್ರಹವಾದ ಹಣ ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಪಿಂಚಣಿಗಾಗಿ ಉಳಿತಾಯದ ರೂಪಗಳಲ್ಲಿ ಕೊಡುಗೆ ನೀಡುತ್ತಿದ್ದೇನೆ.                          </p>  
               </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  ನನ್ನ ಹೂಡಿಕೆಯ ಆಯ್ಕೆಯ ಪ್ರಕಾರ ನನ್ನ ಕೊಡುಗೆಯು ಮಾರುಕಟ್ಟೆಯ ಚಂಚಲತೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ                        </p>
              </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು ಕಾಲಕಾಲಕ್ಕೆ ನಿಯಂತ್ರಕ ಬದಲಾವಣೆಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.
                  </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="ನಾನು ಒಪ್ಪುತ್ತೇನೆ" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Malayalam":
      text = `
          <p class='fw-bold '>
              എൻപിഎസ് അക്കൗണ്ട് തുറക്കുന്നതിന് അപേക്ഷിക്കാൻ ഞാൻ ആഗ്രഹിക്കുന്നു. അതിനായി താഴെ പറയുന്ന വസ്തുതകൾ ഞാൻ മനസ്സിലാക്കുകയും അംഗീകരിക്കുകയും ചെയ്യുന്നു.
              </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  ചില സാഹചര്യങ്ങളും വ്യവസ്ഥകളും ഒഴികെ, അറുപത് വയസ്സ് പൂർത്തിയാകുമ്പോൾ മാത്രമേ നിക്ഷേപത്തുക എനിക്ക് പിൻവലിക്കാനാകൂ.                        </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
              <p>
                  സൂപ്പർഅനുവേഷൻ സമയത്ത് ആകെ നിക്ഷേപത്തുക അഞ്ചു ലക്ഷത്തിനു മുകളിലാണെങ്കിൽ അതിന്റെ 40 ശതമാനം പെൻഷൻ നൽകുന്നതിനായി നീക്കിവയ്ക്കേണ്ടതാണ്.                        </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  കോർപ്പസ് സ്വരൂപിക്കുന്നതിനും പെൻഷൻ ലഭിക്കുന്നതിനും കൂടി ഞാൻ സേവിംഗ്സ് രൂപത്തിൽ നിക്ഷേപം ചെയ്യുന്നു                         </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  NPS നിക്ഷേപം ഓഹരിവിപണിയുമായി ബന്ധപ്പെട്ടിരിക്കുന്നതിനാൽ നിക്ഷേപത്തുക മാർകറ്റ് റിസ്കിന് വിധേയമായിരിക്കും.                        </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>

                  മാർഗനിർദേശങ്ങൾ കാലാനുസൃതമായ മാറ്റങ്ങൾക്ക് വിധേയമായിരിക്കും                            </p>
              </div>
            </div>
            <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="ഞാൻ അംഗീകരിക്കുന്നു" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Marathi":
      text = `
          <p class='fw-bold '>
              मी NPS खाते उघडण्यासाठी अर्ज करू इच्छितो, मी खालील तथ्यांशी समजतो आणि सहमत आहे.
              </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  काही विशिष्ट परिस्थिती आणि परिस्थिती वगळता मी फक्त 60 वर्षे वयाच्या पूर्ण केल्यावरच माझी पुंजी मागे घेऊ शकतो. </p> 
              </div>                   
           </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                  <p>
                    सेवानिवृत्ती वेळी, जर पुंजी रू 5.00 लाखांपेक्षा जास्त असेल, तर वार्षिक pension खरेदी करण्यासाठी किमान 40% तरतूद करण्याची आवश्यकता आहे.
                  </p>
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  पुंजी जमा करण्यासाठी आणि pension साठी पुढे मी बचत रूपात योगदान देत आहे.
                 </p>
             </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  माझे योगदान माझ्या गुंतवणूक निवडीनुसार बाजार जोखमीच्या अधीन आहे.
                 </p>
            </div>
            </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  मार्गदर्शक तत्वे वेळोवेळी नियामक बदलांच्या अधीन आहेत.
                  </p>
              </div>
          </div>
          <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="मी सहमत आहे" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    case "Tamil":
      text = `
          <p class='fw-bold '>
              நான் NPS இல் விண்ணப்பிக்க விரும்புகிறேன். பின்வரும் உண்மைகளை நான் புரிந்துகொண்டு உடன்படுகிறேன் :                        
              </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  சில சூழ்நிலைகள் மற்றும் நிபந்தனைகள் தவிர, 60 வயதை நிறைவு செய்யும் போது மட்டுமே எனது கார்பஸை திரும்பப் பெற முடியும்.
                  </p>                     
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                 <p>
                  Superannuation போது, கார்பஸ் ரூ.5.00 லட்சத்திற்கு அதிகமாக இருந்தால், ஓய்வூதியத்தை வழங்குவதற்காக Annuity வாங்குவதற்கு குறைந்தபட்சம் 40% பயன்படுத்தப்பட வேண்டும்.
                  </p>
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  கார்பஸ் மற்றும் ஓய்வூதியத்திற்காக நான் சேமிப்பு வடிவில் பங்களிக்கிறேன்.                           </p>
             </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  எனது முதலீட்டுத் தேர்வின்படி எனது பங்களிப்பு, சந்தை அபாயத்திற்கு உட்பட்டது
                  </p>
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  வழிகாட்டுதல்கள் அவ்வப்போது ஒழுங்குமுறை மாற்றங்களுக்கு உட்பட்டவை.                          </p>
              </div>
            </div>
          </div>
          <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="நான் அங்கீகரிக்கிறேன்" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>                    
          `;
      break;
    case "Telugu":
      text = `
          <p class='fw-bold '>
              నేను NPS ఖాతా తెరవడానికి దరఖాస్తు చేయాలనుకుంటున్నాను. నేను  ఈ క్రింది వాస్తవాలను అర్థం చేసుకున్నాను మరియు అంగీకరిస్తున్నాను.
          </p>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  కొన్ని పరిస్థితులు మరియు షరతులు మినహా, నేను నా నిల్వ (కార్పస్‌) ను 60 సంవత్సరాల వయస్సు నిండిన  తర్వాత మాత్రమే ఉపసంహరించుకోగలను.
                  </p>                     
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                 <p>
                  నా వయస్సు 60 సంవత్సరములు నిండిన సమయంలో, నా నిల్వ మొత్తం (కార్పస్)  రూ.5.00 లక్షల కంటే ఎక్కువ ఉంటే, పెన్షన్ పొందటానికి   నిర్ణీత మొత్తం లో కనీసం 40% ఉపయోగించాలి.
                  </p>
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  నా  పెట్టుబడిని ,  నిల్వ  (కార్పస్‌)  మరియు  పెన్షన్‌ కోసం పొదుపు రూపంలో జమచేస్తున్నాను.                           </p>
             </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  నా పెట్టుబడి ఎంపిక ప్రకారం, నా నిల్వ (కార్పస్‌) -  మార్కెట్ రిస్క్‌కు లోబడి ఉంటుంది.
                  </p>
              </div>
          </div>
          <div class="d-flex">
              <div class='pe-2'>
                  <input class='w-100' type="checkbox" required>    
              </div>
              <div class='text-justify'>
                <p>
                  మార్గదర్శకాలు ఎప్పటికప్పుడు నియంత్రణ మార్పులకు లోబడి ఉంటాయి.
                  </p>
              </div>
            </div>
          </div>
          <div class="text-center mb-xl-3">
              <input class="bg-b text-white py-xl-1  px-xl-5 rounded-4 border-0 text-center" value="నేను ఆమోదిస్తున్నాను" type="submit">
             </div>
          <div class='text-justify'>
              <p>
                  <b>Disclaimer</b> : On accepting the above terms, you will be directed to a third-party website owned by PROTEAN eGOV. All liabilities, acts and omissions arising therefrom, would be at your and third party website Owner’s risk and responsibility. Integrated will not be liable for any act or omission arising therefrom.
              </p>
          </div>
          `;
      break;
    default:
      text = `<p>Please select your preferred language to proceed further with the </p>
              <div class="text-center">
                 <span >New Registration.</span>
              </div>`;

      break;
  }

  textContainer.innerHTML = text;
}
document.addEventListener("DOMContentLoaded", function () {
  var stateCityMap = {
    TAMILNADU: {
      cities: {
        PUDUCHERY: ["PUDUCHERY"],
        CHENNAI: [
          "ALTERNATE CHANNEL",
          "ADAMBAKKAM",
          "ADYAR",
          "AMBATTUR",
          "ANNA NAGAR",
          "ARUMBAKKAM",
          "ASHOK NAGAR",
          "CHROMPET",
          "GEORGE TOWN",
          "MOGAPPAIR",
          "MYLAPORE",
          "NANGANALLUR",
          "NUNGAMBAKKAM",
          "PAMMAL",
          "PERAMBUR",
          "PERIYAR NAGAR ",
          "POONAMALLEE ",
          "PORUR",
          "SALIGRAMAM",
          "T.NAGAR - MOTILAL STREET",
          "T.NAGAR - NORTH USMAN ROAD",
          "TAMBARAM",
          "VALASARAVAKKAM",
          "VIRUGAMBAKKAM",
          "WEST MAMBALAM",
        ],
        COIMBATORE: [
          " CBE - R.S.PURAM",
          "CBE - RAMANATHAPURAM",
          "CBE - SAIBABA COLONY",
          "CBE - VADAVALLI",
        ],
        DINDIGUL: ["DINDIGUL"],
        KARAIKUDI: ["KARAIKUDI"],
        KUMBAKONAM: ["KUMBAKONAM"],
        MADURAL: ["K.K.NAGAR", "S S COLONY", "SIMMAKAL", "TVS NAGAR"],
        MAYILADUTHURAI: ["MAYILADUTHURAI"],
        NEYVELI: ["NEYVELI"],
        SALEM: ["SALEM"],
        THANJAVUR: ["THANJAVUR"],
        "TIRUNELVELI ": ["TIRUNELVELI"],
        TIRUPPUR: ["TIRUPPUR"],
        TRICHY: ["CHATRAM BUS STAND", "SRIRANGAM", "THILLAI NAGAR"],
      },
    },
    KERALA: {
      cities: {
        COCHIN: ["M G ROAD"],
        PALAKKAD: ["PALAKKAD"],
        THRISSUR: ["THRISSUR"],
        TRIVANDRUM: ["SASTHAMANGALAM", "TRIVANDRUM"],
      },
    },
    ANDHRAPRADESH: {
      cities: {
        GUNTUR: ["GUNTUR"],
        KAKINADA: ["KAKINADA"],
        NELLORE: ["NELLORE"],
        RAJAMUNDHRY: ["RAJAMUNDHRY"],
        VIJAYAWADA: ["VIJAYAWADA"],
        VISHAKAPATNAM: ["VISHAKAPATNAM"],
      },
    },
    TELANGANA: {
      cities: {
        HYDERABAD: ["BASHEERBAGH", "KUKATPALLY"],
        SECUNDERABAD: ["SECUNDERABAD"],
      },
    },
    MAHARASHTRA: {
      cities: {
        MUMBAI: [
          "ANDHERI",
          "BANDRA",
          "BORIVALI",
          "CHEMBUR",
          "DOMBIVILI",
          "FORT - DALAL ST.",
          "GHATKOPAR",
          "KALYAN",
          "MALAD",
          "MATUNGA",
          "MULUND",
          "THANE - VASANT VIHAR",
          "THANE STATION",
          "VASAI",
          "VASHI",
          "VILEPARLE",
        ],
        AURANGABAD: ["AURANGABAD"],
        NAGPUR: ["NAGPUR"],
        NASIK: ["NASIK"],
        PUNE: ["CAMP", "KOTHRUD", "SHUKRAWAR PETH"],
      },
    },
    GUJARAT: {
      cities: {
        AHMEDABAD: ["CHANDKHEDA", "MANINAGAR", "NAVRANGPURA"],
        BARODA: ["ALKAPURI", "MAKARPURA", "RAOPURA"],
        RAJKOT: ["RAJKOT"],
        SURAT: ["SURAT"],
      },
    },
    DELHI: {
      cities: {
        JANAKPURI: ["JANAKPURI"],
        "KAROL BAGH": ["KAROL BAGH"],
        "NEHRU PLACE": ["NEHRU PLACE"],
        "PREET VIHAR": ["PREET VIHAR"],
      },
    },
    MADHYAPRADESH: {
      cities: {
        BHOPAL: ["BHOPAL"],
      },
    },
    UTTARPRADESH: {
      cities: {
        LUCKNOW: ["LUCKNOW"],
      },
    },
    JHARKHAND: {
      cities: {
        JAMSHEDPUR: ["TELCO"],
        RANCHI: ["RANCHI"],
      },
    },
    WESTBENGAL: {
      cities: {
        KOLKATA: ["BEHALA", "DALHOUSIE", "GARIA", "SALT LAKE", "SOUTH"],
      },
    },
    en: {
      cities: {
        English: ["English"],
      },
    },
    // Add other states and cities with corresponding branches
  };

  var referredBySelect = document.getElementById("referredBy");
  var subMenu = document.getElementById("subMenu");
  var citySelect = document.getElementById("city");
  var cityBranchSelect = document.getElementById("cityBranch");
  var directFields = document.getElementById("directFields");
  var pincodeInput = document.getElementById("pincode");
  var directCityInput = document.getElementById("directCity");
  var directStateInput = document.getElementById("directState");

  referredBySelect.addEventListener("change", function () {
    if (this.value === "Integrated Branch") {
      subMenu.classList.remove("hidden");
      directFields.classList.add("hidden");
    } else if (this.value === "Direct") {
      subMenu.classList.add("hidden");
      directFields.classList.remove("hidden");
    } else {
      subMenu.classList.add("hidden");
      directFields.classList.add("hidden");
    }
  });

  var stateSelect = document.getElementById("state");

  stateSelect.addEventListener("change", function () {
    var stateData = stateCityMap[this.value] || { cities: {} };
    var cities = Object.keys(stateData.cities);
    updateDropdown(citySelect, cities, "Select City");
    updateDropdown(cityBranchSelect, [], "Select Branch"); // Clear the branch dropdown
  });
  citySelect.addEventListener("change", function () {
    var state = stateSelect.value;
    var cityBranches = stateCityMap[state].cities[this.value] || [];
    updateDropdown(cityBranchSelect, cityBranches, "Select Branch");
  });

  function updateDropdown(selectElement, options, defaultOption) {
    selectElement.innerHTML = '<option value="">' + defaultOption + "</option>";
    options.forEach(function (option) {
      selectElement.options.add(new Option(option, option));
    });
  }
});

// const form = document.getElementById("mainForm");
// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Get the user's location
//   getLocation();

//   // Perform form validation
//   if (formIsValid()) {
//     // Send a request to the server to generate and send the OTP
//     sendOTPRequest().then(showOTPModal).catch(handleError);
//   } else {
//     // Display validation errors
//     displayValidationErrors();
//   }
// }


// function sendOTPRequest() {
//   const mobileNo = document.getElementById("pran").value;
//   const email = document.querySelector('input[placeholder="Email"]').value;

//   return fetch("/send-otp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ mobileNo }),
//   })
//     .then((response) => {
//       // Check if the response is ok (status in the range 200-299)
//       if (!response.ok) {
//         return Promise.reject("Network response was not ok.");
//       }

//       // Check if the response body is not empty
//       return response.text().then((text) => {
//         if (text) {
//           return JSON.parse(text);
//         } else {
//           return Promise.reject("Empty response body.");
//         }
//       });
//     })
//     .then((data) => {
//       if (data.success) {
//         return Promise.resolve();
//       } else {
//         return Promise.reject(data.error);
//       }
//     })
//     .catch((error) => {
//       console.error("Error during fetch:", error);
//       return Promise.reject(error);
//     });
// }

// function showOTPModal() {
//   const mobileNo = document.getElementById("pran").value;
//   const email = document.querySelector('input[placeholder="Email"]').value;

//   // Hide the form
//   document.getElementById("mainForm").style.display = "none";

//   // Display the OTP container with mobile number and email
//   document.getElementById("otpContainer").style.display = "block";
//   document.getElementById(
//     "displayMobile"
//   ).textContent = `+9********${mobileNo.slice(-4)}`;
//   document.getElementById("displayEmail").textContent = email.replace(
//     /^(.{2})(.*)(.@.*)$/,
//     "$1***$3"
//   );

//   // Add event listener to the Verify OTP button
//   const verifyOTPBtn = document.getElementById("verifyOTPBtn");
//   verifyOTPBtn.addEventListener("click", verifyOTP);
// }

// function verifyOTP() {
//   const otpInput = document.getElementById("otpInput").value;
//   // Construct the request data or parameters as needed

//   fetch("/verify-otp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ otp: otpInput }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         // OTP verification successful, proceed with form submission
//         document.getElementById("mainForm").submit();
//       } else {
//         // OTP verification failed, display an error message
//         handleError(data.error);
//       }
//     })
//     .catch((error) => handleError(error));
// }

// function handleError(error) {
//   // Display the error message to the user
//   console.error(error);
//   alert(error);
// }

// function formIsValid() {
//   let isValid = true;
//   const nameInput = document.querySelector('input[placeholder="Name*"]');
//   const panInput = document.querySelector('input[placeholder="PAN*"]');
//   const mobileInput = document.getElementById("pran");
//   const emailInput = document.querySelector('input[placeholder="Email"]');

//   // Clear previous validation errors
//   clearValidationErrors();

//   // Validate name
//   if (nameInput.value.trim() === "") {
//     isValid = false;
//     setInputError(nameInput, "Please enter your name");
//   }

//   // Validate PAN
//   const panRegex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
//   if (!panRegex.test(panInput.value.trim())) {
//     isValid = false;
//     setInputError(panInput, "Please enter a valid PAN number");
//   }

//   // Validate mobile number
//   const mobileRegex = /^\d{10}$/;
//   if (!mobileRegex.test(mobileInput.value.trim())) {
//     isValid = false;
//     setInputError(mobileInput, "Please enter a valid 10-digit mobile number");
//   }

//   // Validate email (optional)
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (
//     emailInput.value.trim() !== "" &&
//     !emailRegex.test(emailInput.value.trim())
//   ) {
//     isValid = false;
//     setInputError(emailInput, "Please enter a valid email address");
//   }

//   return isValid;
// }

// function setInputError(input, errorMessage) {
//   const errorElement = document.createElement("div");
//   errorElement.classList.add("error-message");
//   errorElement.textContent = errorMessage;
//   input.parentNode.appendChild(errorElement);
// }

// function clearValidationErrors() {
//   const errorMessages = document.querySelectorAll(".error-message");
//   errorMessages.forEach((errorMessage) => errorMessage.remove());
// }

// function displayValidationErrors() {
//   // Add code to display validation errors to the user
//   // You can create a separate container or use alert messages
//   alert("Please fix the validation errors and try again.");
// }
// function getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//       alert("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   console.log("Latitude: " + latitude + ", Longitude: " + longitude);

//   // Send the location data to your server
//   sendLocationData(latitude, longitude);
// }

// function sendLocationData(latitude, longitude) {
//   // You can use fetch or any AJAX library to send the data to your server
//   fetch("/store-location", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ latitude, longitude }),
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to store location data.");
//     }
//     console.log("Location data stored successfully.");
//   })
//   .catch(error => {
//     console.error("Error storing location data:", error);
//   });
// }
