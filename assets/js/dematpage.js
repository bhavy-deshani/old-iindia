document.addEventListener("DOMContentLoaded", function () {
    function isValidMobile(mobile) { const mobileRegex = /^[6-9]\d{9}$/; return mobileRegex.test(mobile) }
    function isValidPincode(pin) { const pinRegex = /^\d{6}$/; return pinRegex.test(pin) }
    async function sendLead(mobile, pincode, button) {
        if (!isValidMobile(mobile)) { alert("Please enter valid 10 digit mobile number"); return }
        if (!isValidPincode(pincode)) { alert("Please enter valid 6 digit pincode"); return }
        const oldText = button.innerText; button.disabled = !0; button.innerText = "Processing..."; const payload = { Type: "demat page", Name: "", Mobile: mobile, PinCode: pincode, Mode: "DATASAVE" }; try {
            const response = await fetch("https://www.integratedindia.in/api/CDSLAPI.aspx", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); const text = await response.text(); let data; try { data = JSON.parse(text) } catch { data = text }
            console.log("API Response:", data); window.location.href = "https://www.integratedindia.in/sp/DigiTradeOnboarding_web_V2.1/webLogin.html"
        } catch (error) { console.error("API Error:", error); alert("Something went wrong. Please try again.") }
        button.disabled = !1; button.innerText = oldText
    }
    const heroBtn = document.getElementById("heroSubmit"); if (heroBtn) { heroBtn.addEventListener("click", function (e) { e.preventDefault(); const mobile = document.getElementById("heroMobile").value.trim(); const pincode = document.getElementById("heroPincode").value.trim(); sendLead(mobile, pincode, heroBtn) }) }
    const modalBtn = document.getElementById("modalSubmit"); if (modalBtn) { modalBtn.addEventListener("click", function (e) { e.preventDefault(); const mobile = document.getElementById("modalMobile").value.trim(); const pincode = document.getElementById("modalPincode").value.trim(); sendLead(mobile, pincode, modalBtn) }) }
})