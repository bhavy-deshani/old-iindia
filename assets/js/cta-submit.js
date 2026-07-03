/**
 * cta-submit.js
 * Shared "Get in Touch" form handler for all calculator pages.
 *
 * How it works:
 *  - Reads the current page's <title> and maps it to a short CalcPage name.
 *  - On "Submit Inquiry" click, validates Mobile & Pincode, then POSTs to
 *    /api/CDSLAPI.aspx with Mode:"DATASAVE" and Type:<CalcPage name>.
 *
 * Include this ONE script at the bottom of every calculator HTML page:
 *   <script src="./assets/js/cta-submit.js"></script>
 *
 * No other changes needed in any individual page.
 */

(function () {

    /* ------------------------------------------------------------------ */
    /*  1. PAGE-NAME MAP                                                    */
    /*     Key   = substring found in document.title (case-insensitive)    */
    /*     Value = CalcPage name sent in the API "Type" field              */
    /* ------------------------------------------------------------------ */
    var PAGE_NAME_MAP = [
        { match: "champs",      type: "ChampsInvestmentCalc"  },
        { match: "fixed deposit", type: "FDCalc"              },
        { match: "goal saving", type: "GoalSavingCalc"        },
        { match: "insurance",   type: "InsuranceNeedCalc"     },
        { match: "lumpsum",     type: "LumpsumTargetCalc"     },
        { match: "retirement",  type: "RetirementCalc"        },
        { match: "step up sip", type: "TopUpSIPCalc"          },
        { match: "sip",         type: "SIPCalc"               },
        { match: "swp",         type: "SWPCalc"               }
    ];

    /* ------------------------------------------------------------------ */
    /*  2. RESOLVE CalcPage name from current page title                   */
    /* ------------------------------------------------------------------ */
    function resolveCalcPage() {
        var title = (document.title || "").toLowerCase();
        for (var i = 0; i < PAGE_NAME_MAP.length; i++) {
            if (title.indexOf(PAGE_NAME_MAP[i].match) !== -1) {
                return PAGE_NAME_MAP[i].type;
            }
        }
        // Fallback: slugify the title
        return document.title.replace(/[^a-zA-Z0-9]/g, "").substring(0, 30) || "UnknownCalc";
    }

    /* ------------------------------------------------------------------ */
    /*  3. VALIDATION HELPERS                                              */
    /* ------------------------------------------------------------------ */
    function isValidMobile(val) {
        return /^[6-9]\d{9}$/.test(val.trim());
    }

    function isValidPincode(val) {
        return /^\d{6}$/.test(val.trim());
    }

    function getAnchor(inputEl) {
        // If input is inside a wrapper div (e.g. .phone-field flex row),
        // insert error AFTER that wrapper — not inside it.
        // For plain inputs, insert error after the input itself.
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

    /* ------------------------------------------------------------------ */
    /*  4. API CALL                                                         */
    /* ------------------------------------------------------------------ */
    function submitCTA(mobile, pincode, calcPage, btn) {
        var payload = {
            Mode:    "DATASAVE",
            Type:    calcPage,
            Mobile:  mobile,
            Pincode: pincode
        };

        btn.disabled    = true;
        btn.textContent = "Submitting…";

        fetch("/api/CDSLAPI.aspx", {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(payload)
        })
        .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
        })
        .then(function (data) {
            btn.textContent = "Submitted ✓";
            btn.style.background = "#27ae60";
            console.info("[CTA] Success:", data);
        })
        .catch(function (err) {
            btn.disabled    = false;
            btn.textContent = "Submit Inquiry";
            alert("Something went wrong. Please try again.");
            console.error("[CTA] Error:", err);
        });
    }

    /* ------------------------------------------------------------------ */
    /*  5. WIRE UP BUTTON                                                   */
    /*     Supports both id="ctaSubmit" and id="modalSubmit"               */
    /* ------------------------------------------------------------------ */
    function init() {
        // Resolve CalcPage once per page load
        var calcPage = resolveCalcPage();
        console.info("[CTA] CalcPage resolved →", calcPage);

        // Button IDs used across all calculator pages
        var btnIds = ["ctaSubmit", "modalSubmit"];

        btnIds.forEach(function (btnId) {
            var btn = document.getElementById(btnId);
            if (!btn) return;

            // Derive matching mobile/pincode field IDs
            // ctaSubmit  → ctaMobile  / ctaPincode
            // modalSubmit → modalMobile / modalPincode
            var prefix     = btnId.replace("Submit", "");          // "cta" | "modal"
            var mobileEl   = document.getElementById(prefix + "Mobile");
            var pincodeEl  = document.getElementById(prefix + "Pincode");

            btn.addEventListener("click", function () {
                var mobile  = mobileEl  ? mobileEl.value  : "";
                var pincode = pincodeEl ? pincodeEl.value : "";

                var valid = true;

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
                    submitCTA(mobile.trim(), pincode.trim(), calcPage, btn);
                }
            });
        });
    }

    /* Run after DOM is ready */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();