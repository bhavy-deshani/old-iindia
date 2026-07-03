(function () {
  // Already accepted? Don't show banner
  if (localStorage.getItem("ii_cookie_consent")) return;

  // Inject CSS
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

    #ii-cookie-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: 99998;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }
    #ii-cookie-overlay.show {
      opacity: 1;
      pointer-events: all;
    }

    #ii-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99999;
      background: #ffffff;
      border-top: 3px solid #c8a951;
      box-shadow: 0 -8px 40px rgba(0,0,0,0.15);
      font-family: 'DM Sans', sans-serif;
      transform: translateY(100%);
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    #ii-cookie-banner.show {
      transform: translateY(0);
    }

    .ii-cookie-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 32px;
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .ii-cookie-icon {
      font-size: 42px;
      flex-shrink: 0;
      animation: ii-wobble 2s ease-in-out infinite;
    }

    @keyframes ii-wobble {
      0%, 100% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
    }

    .ii-cookie-text { flex: 1; }

    .ii-cookie-text h3 {
      margin: 0 0 6px 0;
      font-size: 17px;
      font-weight: 600;
      color: #1a1a2e;
      letter-spacing: -0.3px;
    }

    .ii-cookie-text p {
      margin: 0;
      font-size: 13.5px;
      color: #555;
      line-height: 1.6;
    }

    .ii-cookie-text a {
      color: #c8a951;
      text-decoration: underline;
      font-weight: 500;
    }

    .ii-cookie-tags {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      flex-wrap: wrap;
    }

    .ii-tag {
      background: #f5f5f5;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 12px;
      color: #555;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .ii-tag .ii-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #c8a951;
      display: inline-block;
    }

    .ii-cookie-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex-shrink: 0;
      min-width: 190px;
    }

    .ii-btn-accept {
      background: linear-gradient(135deg, #c8a951, #e6c96e);
      color: #1a1a2e;
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 15px rgba(200,169,81,0.35);
      white-space: nowrap;
    }

    .ii-btn-accept:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(200,169,81,0.5);
    }

    .ii-btn-necessary {
      background: transparent;
      color: #777;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 10px 24px;
      font-size: 13px;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .ii-btn-necessary:hover {
      border-color: #999;
      color: #444;
    }

    .ii-btn-manage {
      background: transparent;
      color: #c8a951;
      border: none;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      text-decoration: underline;
      padding: 4px 0;
    }

    /* Manage Modal */
    #ii-manage-modal {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(120%);
      z-index: 100000;
      background: #fff;
      border-radius: 16px 16px 0 0;
      width: 100%;
      max-width: 520px;
      box-shadow: 0 -10px 50px rgba(0,0,0,0.2);
      font-family: 'DM Sans', sans-serif;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      padding: 28px;
      box-sizing: border-box;
    }

    #ii-manage-modal.show {
      transform: translateX(-50%) translateY(0);
    }

    .ii-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }

    .ii-modal-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #1a1a2e;
    }

    .ii-modal-close {
      background: #f0f0f0;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 16px;
      cursor: pointer;
      color: #555;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ii-toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #f5f5f5;
    }

    .ii-toggle-info h4 {
      margin: 0 0 3px 0;
      font-size: 14px;
      font-weight: 600;
      color: #1a1a2e;
    }

    .ii-toggle-info p {
      margin: 0;
      font-size: 12px;
      color: #999;
    }

    .ii-toggle {
      position: relative;
      width: 44px;
      height: 24px;
      flex-shrink: 0;
      margin-left: 16px;
    }

    .ii-toggle input { opacity: 0; width: 0; height: 0; }

    .ii-toggle-slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background: #ddd;
      border-radius: 24px;
      transition: 0.3s;
    }

    .ii-toggle-slider:before {
      content: "";
      position: absolute;
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .ii-toggle input:checked + .ii-toggle-slider { background: #c8a951; }
    .ii-toggle input:checked + .ii-toggle-slider:before { transform: translateX(20px); }
    .ii-toggle input:disabled + .ii-toggle-slider { opacity: 0.5; cursor: not-allowed; }

    .ii-btn-save {
      width: 100%;
      margin-top: 20px;
      background: linear-gradient(135deg, #c8a951, #e6c96e);
      color: #1a1a2e;
      border: none;
      border-radius: 8px;
      padding: 13px;
      font-size: 15px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
    }

    .ii-btn-save:hover { box-shadow: 0 4px 15px rgba(200,169,81,0.4); }

    @media (max-width: 768px) {
      .ii-cookie-inner {
        flex-direction: column;
        padding: 20px;
        gap: 16px;
        align-items: flex-start;
      }
      .ii-cookie-icon { font-size: 32px; }
      .ii-cookie-actions { width: 100%; flex-direction: row; flex-wrap: wrap; }
      .ii-btn-accept, .ii-btn-necessary { flex: 1; text-align: center; }
      .ii-btn-manage { width: 100%; text-align: center; }
      #ii-manage-modal { max-width: 100%; }
    }
  `;
  document.head.appendChild(style);

  // Overlay
  const overlay = document.createElement("div");
  overlay.id = "ii-cookie-overlay";
  document.body.appendChild(overlay);

  // Banner
  const banner = document.createElement("div");
  banner.id = "ii-cookie-banner";
  banner.innerHTML = `
    <div class="ii-cookie-inner">
      <div class="ii-cookie-icon">🍪</div>
      <div class="ii-cookie-text">
        <h3>We use Cookies</h3>
        <p>
          We use cookies to enhance your browsing experience, analyse site traffic,
          and deliver personalized content. By clicking "Accept All", you consent to our use of cookies.
          Read our <a href="/privacy-policy.html">Privacy Policy</a>.
        </p>
        <div class="ii-cookie-tags">
          <span class="ii-tag"><span class="ii-dot"></span> Necessary</span>
          <span class="ii-tag"><span class="ii-dot"></span> Analytics</span>
          <span class="ii-tag"><span class="ii-dot"></span> Marketing</span>
          <span class="ii-tag"><span class="ii-dot"></span> Performance</span>
        </div>
      </div>
      <div class="ii-cookie-actions">
        <button class="ii-btn-accept" id="ii-accept-all">✓ Accept All</button>
        <button class="ii-btn-necessary" id="ii-accept-necessary">Necessary Only</button>
        <button class="ii-btn-manage" id="ii-manage-btn">Manage Preferences</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  // Modal
  const modal = document.createElement("div");
  modal.id = "ii-manage-modal";
  modal.innerHTML = `
    <div class="ii-modal-header">
      <h3>⚙️ Cookie Preferences</h3>
      <button class="ii-modal-close" id="ii-modal-close">✕</button>
    </div>
    <div class="ii-toggle-row">
      <div class="ii-toggle-info">
        <h4>✅ Necessary Cookies</h4>
        <p>Required for the website to function properly.</p>
      </div>
      <label class="ii-toggle">
        <input type="checkbox" checked disabled>
        <span class="ii-toggle-slider"></span>
      </label>
    </div>
    <div class="ii-toggle-row">
      <div class="ii-toggle-info">
        <h4>📊 Analytics Cookies</h4>
        <p>Help us understand visitor behaviour and improve our site.</p>
      </div>
      <label class="ii-toggle">
        <input type="checkbox" id="ii-toggle-analytics" checked>
        <span class="ii-toggle-slider"></span>
      </label>
    </div>
    <div class="ii-toggle-row">
      <div class="ii-toggle-info">
        <h4>📢 Marketing Cookies</h4>
        <p>Used to deliver relevant ads and track campaign performance.</p>
      </div>
      <label class="ii-toggle">
        <input type="checkbox" id="ii-toggle-marketing">
        <span class="ii-toggle-slider"></span>
      </label>
    </div>
    <div class="ii-toggle-row">
      <div class="ii-toggle-info">
        <h4>⚡ Performance Cookies</h4>
        <p>Help improve site speed and overall user experience.</p>
      </div>
      <label class="ii-toggle">
        <input type="checkbox" id="ii-toggle-perf" checked>
        <span class="ii-toggle-slider"></span>
      </label>
    </div>
    <button class="ii-btn-save" id="ii-save-prefs">Save Preferences</button>
  `;
  document.body.appendChild(modal);

  // Show after 800ms
  setTimeout(() => {
    overlay.classList.add("show");
    banner.classList.add("show");
  }, 800);

  function hideBanner() {
    banner.classList.remove("show");
    overlay.classList.remove("show");
    modal.classList.remove("show");
    setTimeout(() => {
      banner.remove();
      overlay.remove();
      modal.remove();
    }, 600);
  }

  function saveConsent(prefs) {
    localStorage.setItem("ii_cookie_consent", JSON.stringify({
      timestamp: new Date().toISOString(),
      ...prefs
    }));
    hideBanner();
  }

  document.getElementById("ii-accept-all").addEventListener("click", () => {
    saveConsent({ necessary: true, analytics: true, marketing: true, performance: true });
  });

  document.getElementById("ii-accept-necessary").addEventListener("click", () => {
    saveConsent({ necessary: true, analytics: false, marketing: false, performance: false });
  });

  document.getElementById("ii-manage-btn").addEventListener("click", () => {
    modal.classList.add("show");
  });

  document.getElementById("ii-modal-close").addEventListener("click", () => {
    modal.classList.remove("show");
  });

  document.getElementById("ii-save-prefs").addEventListener("click", () => {
    saveConsent({
      necessary: true,
      analytics: document.getElementById("ii-toggle-analytics").checked,
      marketing: document.getElementById("ii-toggle-marketing").checked,
      performance: document.getElementById("ii-toggle-perf").checked,
    });
  });

})();