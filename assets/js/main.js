/* ==========================================================================
   Pushpendra Singh — Portfolio
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   * PROJECT DATA
   * Edit this array to add real details for each project.
   * - tech: [] renders no badge row until you add technologies.
   * - github / live: leave "" to show a disabled "Add link" button;
   *   fill in a real URL to make that button active.
   * ------------------------------------------------------------------ */
  var PROJECTS = [
    {
      name: "QuickDine",
      tagline: "Full Stack Restaurant Booking Platform",
      description: "A full-stack restaurant booking platform with three user roles (User, Owner, Admin) and role-based access control, built end-to-end from requirements to deployment. Includes MongoDB schemas for users, listings and bookings, 15+ documented REST endpoints (tested with Postman), JWT-secured routes, and a modular, responsive React frontend.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
      github: "",
      live: "https://quick-dine-kappa.vercel.app/"
    },
    {
      name: "JalRide",
      tagline: "Smart Boat Booking Platform",
      description: "A boat booking platform for tourists, built as part of a 4-member team for Smart India Hackathon (College Level). Includes a digital ticket management system with interactive JavaScript features for passenger tracking and safety, and a responsive, cross-device UI delivered under a fixed hackathon timeline.",
      tech: [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "JWT Authentication",
  "Razorpay",
  "REST API",
  "Multer",
  "QR Code",
  "Nodemailer",
  "Vercel"
],
      github: "",
      live: "https://jalride-v1.vercel.app/"
    },
    {
      name: "PrepWave",
      tagline: "Education Platform",
      description: "A responsive educational web platform organizing structured learning resources for an audience of 22,000+ YouTube subscribers, with a mobile-friendly UI and interactive JavaScript features supporting content delivery alongside the PrepWave YouTube channel.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      live: ""
    }
  ];

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function actionButton(label, url, kind) {
    if (url) {
      return '<a class="btn ' + kind + '" href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    }
    return '<span class="btn ' + kind + '" aria-disabled="true" title="Link coming soon">' + label + "</span>";
  }

  function renderProjects() {
    var grid = document.getElementById("projectGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map(function (p) {
      var tags = p.tech && p.tech.length
        ? '<ul class="project-tags">' + p.tech.map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("") + "</ul>"
        : "";

      return (
        '<article class="project-card">' +
          '<div class="project-card-head">' +
            "<h3 class=\"project-name\">" + escapeHtml(p.name) + "</h3>" +
            '<span class="project-tagline">' + escapeHtml(p.tagline) + "</span>" +
          "</div>" +
          '<p class="project-desc">' + escapeHtml(p.description) + "</p>" +
          tags +
          '<div class="project-actions">' +
            actionButton("Source", p.github, "btn-outline") +
            actionButton("Live Demo", p.live, "btn-ghost") +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ------------------------------------------------------------------ *
   * Mobile navigation
   * ------------------------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.getElementById("menuToggle");
    var panel = document.getElementById("mobileNav");
    if (!toggle || !panel) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
    }
    function open() {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? close() : open();
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ------------------------------------------------------------------ *
   * Resume download — graceful fallback if the PDF hasn't been added yet
   * ------------------------------------------------------------------ */
  function initResumeButtons() {
    var buttons = [document.getElementById("resumeBtn"), document.getElementById("resumeBtnHero")].filter(Boolean);
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        fetch(btn.getAttribute("href"), { method: "HEAD" }).then(function (res) {
          if (!res.ok) throw new Error("missing");
        }).catch(function () {
          e.preventDefault();
          window.location.href = "#contact";
          var msg = document.getElementById("formMsg");
          if (msg) msg.textContent = "Resume isn't uploaded yet — feel free to email me directly and I'll send it over.";
        });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * Contact form (mailto handoff — swap for a form backend later)
   * ------------------------------------------------------------------ */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    var msg = document.getElementById("formMsg");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        msg.textContent = "Please fill in every field.";
        return;
      }

      var subject = encodeURIComponent("Portfolio contact from " + name);
      var body = encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">");
      window.location.href = "mailto:push9338@gmail.com?subject=" + subject + "&body=" + body;
      msg.textContent = "Opening your email client...";
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProjects();
    initMobileNav();
    initResumeButtons();
    initContactForm();
    initYear();
  });
})();
