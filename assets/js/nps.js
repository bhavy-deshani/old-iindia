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
                <input class="btn" value="I Agree" type="submit">
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
                <input class="btn" value="আমি রাজি ।" type="submit">
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
                <input class="btn" value="હું સહમત છુ" type="submit">
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
                <input class="btn" value="मैं सहमत हूं" type="submit">
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
                <input class="btn" value="ನಾನು ಒಪ್ಪುತ್ತೇನೆ" type="submit">
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
                <input class="btn" value="ഞാൻ അംഗീകരിക്കുന്നു" type="submit">
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
                <input class="btn" value="मी सहमत आहे" type="submit">
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
                <input class="btn" value="நான் அங்கீகரிக்கிறேன்" type="submit">
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
                <input class="btn" value="నేను ఆమోదిస్తున్నాను" type="submit">
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