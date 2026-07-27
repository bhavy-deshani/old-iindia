/* Global CTA Submit Logic */
document.addEventListener("DOMContentLoaded", function () {
    function isValidMobile(mobile) { const mobileRegex = /^[6-9]\d{9}$/; return mobileRegex.test(mobile); }
    function isValidPincode(pin) { const pinRegex = /^\d{6}$/; return pinRegex.test(pin); }
    
    function getAnchor(inputEl) {
        var parent = inputEl.parentNode;
        var tag = (parent.tagName || "").toUpperCase();
        return (tag === "DIV" || tag === "SPAN") ? parent : inputEl;
    }

    function showError(inputEl, msg) {
        clearError(inputEl);
        inputEl.style.borderColor = "#e74c3c";
        var err = document.createElement("span");
        err.className = "cta-error-msg";
        err.style.cssText = "color:#e74c3c;font-size:11px;display:block;margin-top:2px;";
        err.textContent = msg;
        var anchor = getAnchor(inputEl);
        anchor.parentNode.insertBefore(err, anchor.nextSibling);
    }

    function clearError(inputEl) {
        inputEl.style.borderColor = "";
        var anchor = getAnchor(inputEl);
        var next = anchor.nextSibling;
        if (next && next.className === "cta-error-msg") {
            next.parentNode.removeChild(next);
        }
    }

    async function sendGlobalCtaLead(mobile, pincode, button) {
        const oldText = button.innerText; 
        button.disabled = true; 
        button.innerText = "Processing..."; 
        
        const payload = { 
            Type: "product page cta", 
            Name: "", 
            Mobile: mobile, 
            PinCode: pincode, 
            Mode: "DATASAVE" 
        }; 
        
        try {
            const response = await fetch("https://www.integratedindia.in/api/CDSLAPI.aspx", { 
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(payload) 
            }); 
            const text = await response.text(); 
            let data; 
            try { data = JSON.parse(text); } catch { data = text; }
            console.log("API Response:", data); 
            window.location.href = "https://www.integratedindia.in/sp/DigiTradeOnboarding_web_V2.1/webLogin.html";
        } catch (error) { 
            console.error("API Error:", error); 
            alert("Something went wrong. Please try again."); 
        }
        
        button.disabled = false; 
        button.innerText = oldText;
    }

    const globalCtaBtn = document.getElementById("globalCtaSubmit"); 
    if (globalCtaBtn) { 
        const mobileEl = document.getElementById("globalCtaMobile");
        const pincodeEl = document.getElementById("globalCtaPincode");
        
        if (mobileEl) {
            mobileEl.addEventListener("input", function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        }
        if (pincodeEl) {
            pincodeEl.addEventListener("input", function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        }

        globalCtaBtn.addEventListener("click", function (e) { 
            e.preventDefault(); 
            if(mobileEl && pincodeEl) {
                const mobile = mobileEl.value.trim(); 
                const pincode = pincodeEl.value.trim(); 
                let valid = true;

                if (!isValidMobile(mobile)) {
                    showError(mobileEl, "Enter a valid 10-digit mobile number.");
                    valid = false;
                } else {
                    clearError(mobileEl);
                }

                if (!isValidPincode(pincode)) {
                    showError(pincodeEl, "Enter a valid 6-digit pincode.");
                    valid = false;
                } else {
                    clearError(pincodeEl);
                }

                if (valid) {
                    sendGlobalCtaLead(mobile, pincode, globalCtaBtn); 
                }
            }
        }); 
    }
});
